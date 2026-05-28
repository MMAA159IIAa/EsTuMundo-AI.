/**
 * Es Tu Mundo AI — Gemini Client
 * Core wrapper for Google Gemini API
 */

export class GeminiClient {
  constructor(config = {}) {
    this.apiKey = config.apiKey || '';
    this.model = config.model || 'gemini-2.5-pro';
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
    this.maxRetries = config.maxRetries || 3;
    this.timeout = config.timeout || 30000;
  }

  async generateContent(prompt, options = {}) {
    const {
      temperature = 0.7,
      maxTokens = 2048,
      systemInstruction = null,
    } = options;

    const body = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature,
        maxOutputTokens: maxTokens,
      },
    };

    if (systemInstruction) {
      body.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    const response = await this._request(
      `/models/${this.model}:generateContent`,
      body
    );

    return {
      text: response?.candidates?.[0]?.content?.parts?.[0]?.text || '',
      usage: response?.usageMetadata || {},
      model: this.model,
      timestamp: new Date().toISOString(),
    };
  }

  async chat(messages, options = {}) {
    const {
      temperature = 0.7,
      maxTokens = 2048,
      systemInstruction = null,
    } = options;

    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : msg.role,
      parts: [{ text: msg.content }],
    }));

    const body = {
      contents,
      generationConfig: {
        temperature,
        maxOutputTokens: maxTokens,
      },
    };

    if (systemInstruction) {
      body.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    const response = await this._request(
      `/models/${this.model}:generateContent`,
      body
    );

    return {
      text: response?.candidates?.[0]?.content?.parts?.[0]?.text || '',
      usage: response?.usageMetadata || {},
      finishReason: response?.candidates?.[0]?.finishReason || 'UNKNOWN',
    };
  }

  async _request(endpoint, body, retries = 0) {
    const url = `${this.baseUrl}${endpoint}?key=${this.apiKey}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(
          `Gemini API Error ${response.status}: ${error?.error?.message || 'Unknown error'}`
        );
      }

      return await response.json();
    } catch (err) {
      if (retries < this.maxRetries && err.name !== 'AbortError') {
        const delay = Math.pow(2, retries) * 1000;
        await new Promise(r => setTimeout(r, delay));
        return this._request(endpoint, body, retries + 1);
      }
      throw err;
    }
  }
}
