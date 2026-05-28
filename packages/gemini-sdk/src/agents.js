/**
 * Es Tu Mundo AI — AI Agent System
 * Intelligent agents powered by Gemini
 */

import { GeminiClient } from './client.js';

export class Agent {
  constructor(config = {}) {
    this.name = config.name || 'Agent';
    this.role = config.role || 'AI Assistant';
    this.capabilities = config.capabilities || [];
    this.personality = config.personality || 'professional, helpful, concise';
    this.gemini = config.gemini || new GeminiClient(config);
    this.memory = [];
    this.maxMemory = config.maxMemory || 20;
    this.logs = [];
  }

  get systemPrompt() {
    return `You are ${this.name}, a ${this.role} for Es Tu Mundo AI.
Your personality: ${this.personality}.
Your capabilities: ${this.capabilities.join(', ')}.
Always respond in a professional and helpful manner.
If the user speaks in Spanish, respond in Spanish. Otherwise respond in the language they use.
Keep responses concise but complete.`;
  }

  async process(input) {
    const startTime = Date.now();
    const { message, context = {} } = typeof input === 'string'
      ? { message: input }
      : input;

    this.memory.push({ role: 'user', content: message });
    if (this.memory.length > this.maxMemory) {
      this.memory = this.memory.slice(-this.maxMemory);
    }

    try {
      const result = await this.gemini.chat(this.memory, {
        systemInstruction: this.systemPrompt,
        temperature: 0.7,
      });

      this.memory.push({ role: 'assistant', content: result.text });

      const log = {
        agent: this.name,
        input: message,
        output: result.text,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        tokens: result.usage,
      };

      this.logs.push(log);

      return {
        text: result.text,
        agent: this.name,
        duration: log.duration,
        log,
      };
    } catch (error) {
      const errorLog = {
        agent: this.name,
        input: message,
        error: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
      };

      this.logs.push(errorLog);
      throw error;
    }
  }

  clearMemory() {
    this.memory = [];
  }

  getExecutionLogs() {
    return this.logs;
  }
}

// ---- Pre-configured Agents for the Ecosystem ----

export function createSalesAgent(gemini) {
  return new Agent({
    name: 'AutoMind Sales Agent',
    role: 'AI Sales Representative',
    capabilities: [
      'lead-qualification',
      'product-recommendation',
      'follow-up-scheduling',
      'objection-handling',
      'pricing-negotiation',
    ],
    personality: 'persuasive, empathetic, results-driven',
    gemini,
  });
}

export function createSupportAgent(gemini) {
  return new Agent({
    name: 'AutoMind Support Agent',
    role: 'Customer Support Specialist',
    capabilities: [
      'issue-diagnosis',
      'troubleshooting',
      'ticket-routing',
      'knowledge-base-search',
      'escalation-management',
    ],
    personality: 'patient, empathetic, solution-oriented',
    gemini,
  });
}

export function createSkincareAgent(gemini) {
  return new Agent({
    name: 'Beautly Skincare Advisor',
    role: 'AI Skincare & Wellness Consultant',
    capabilities: [
      'skin-type-analysis',
      'product-recommendation',
      'routine-building',
      'ingredient-education',
      'vegan-product-curation',
    ],
    personality: 'warm, knowledgeable, encouraging, health-conscious',
    gemini,
  });
}

export function createDiagnosticsAgent(gemini) {
  return new Agent({
    name: 'Taller Pro Diagnostics',
    role: 'AI Automotive Diagnostics Assistant',
    capabilities: [
      'symptom-analysis',
      'diagnostic-code-interpretation',
      'repair-estimation',
      'maintenance-scheduling',
      'parts-recommendation',
    ],
    personality: 'technical, precise, trustworthy',
    gemini,
  });
}

export function createContentAgent(gemini) {
  return new Agent({
    name: 'Media Lab Content Creator',
    role: 'AI Creative Content Strategist',
    capabilities: [
      'content-ideation',
      'script-writing',
      'caption-generation',
      'hashtag-strategy',
      'trend-analysis',
    ],
    personality: 'creative, trendy, energetic',
    gemini,
  });
}
