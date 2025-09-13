// Prompt Commander - AI Prompt Engineering Terminal Application

class PromptCommander {
    constructor() {
        this.frameworks = {
            addy: {
                name: "Addy's 10-Part",
                description: "Comprehensive context engineering framework",
                sections: [
                    {
                        id: "task_context",
                        title: "Task Context",
                        description: "High-level context about what you're trying to accomplish",
                        placeholder: "Describe the overall goal or purpose of this task..."
                    },
                    {
                        id: "tone_context",
                        title: "Tone Context",
                        description: "The desired tone, style, and voice for the response",
                        placeholder: "Professional, casual, technical, creative, etc..."
                    },
                    {
                        id: "background_data",
                        title: "Background Data, Documents, and Images",
                        description: "Relevant background information, data, or context",
                        placeholder: "Include relevant background information, data sources, or context..."
                    },
                    {
                        id: "detailed_task",
                        title: "Detailed Task Description & Rules",
                        description: "Specific instructions, constraints, and requirements",
                        placeholder: "Provide detailed instructions, rules, constraints, and requirements..."
                    },
                    {
                        id: "examples",
                        title: "Examples",
                        description: "Examples of desired input/output or similar cases",
                        placeholder: "Provide examples of the desired format, style, or similar cases..."
                    },
                    {
                        id: "conversation_history",
                        title: "Conversation History",
                        description: "Relevant previous conversation context",
                        placeholder: "Include relevant conversation history if applicable..."
                    },
                    {
                        id: "immediate_task",
                        title: "Immediate Task Description or Request",
                        description: "The specific, immediate request or question",
                        placeholder: "What specifically do you want the AI to do right now?"
                    },
                    {
                        id: "thinking_step",
                        title: "Thinking Step by Step / Take a Deep Breath",
                        description: "Instructions for methodical reasoning",
                        placeholder: "Think step by step, take a deep breath, work through this methodically..."
                    },
                    {
                        id: "output_formatting",
                        title: "Output Formatting",
                        description: "Specify the desired output format and structure",
                        placeholder: "Specify the exact format: JSON, markdown, bullet points, etc..."
                    },
                    {
                        id: "prefilled_response",
                        title: "Prefilled Response (if any)",
                        description: "Optional partial response to continue from",
                        placeholder: "Start your response with... (optional)"
                    }
                ]
            },
            costar: {
                name: "COSTAR",
                description: "Context, Objective, Style, Tone, Audience, Response",
                sections: [
                    {
                        id: "context",
                        title: "Context",
                        description: "Background information and situational context",
                        placeholder: "Provide the background context..."
                    },
                    {
                        id: "objective",
                        title: "Objective",
                        description: "What you want to achieve",
                        placeholder: "Clearly state your objective..."
                    },
                    {
                        id: "style",
                        title: "Style",
                        description: "The writing or communication style",
                        placeholder: "Specify the style: formal, casual, technical..."
                    },
                    {
                        id: "tone",
                        title: "Tone",
                        description: "The emotional tone of the response",
                        placeholder: "Describe the desired tone..."
                    },
                    {
                        id: "audience",
                        title: "Audience",
                        description: "Who is the target audience",
                        placeholder: "Define your target audience..."
                    },
                    {
                        id: "response",
                        title: "Response Format",
                        description: "How you want the response formatted",
                        placeholder: "Specify the response format..."
                    }
                ]
            },
            crispe: {
                name: "CRISPE",
                description: "Clarity, Relevance, Iteration, Specificity, Parameters, Examples",
                sections: [
                    {
                        id: "clarity",
                        title: "Clarity",
                        description: "Clear and unambiguous instructions",
                        placeholder: "Provide clear, unambiguous instructions..."
                    },
                    {
                        id: "relevance",
                        title: "Relevance",
                        description: "Relevant context and information",
                        placeholder: "Include all relevant context..."
                    },
                    {
                        id: "iteration",
                        title: "Iteration",
                        description: "Iterative improvement instructions",
                        placeholder: "How should the response be refined..."
                    },
                    {
                        id: "specificity",
                        title: "Specificity",
                        description: "Specific requirements and constraints",
                        placeholder: "Be specific about requirements..."
                    },
                    {
                        id: "parameters",
                        title: "Parameters",
                        description: "Parameters and boundaries",
                        placeholder: "Define parameters and boundaries..."
                    },
                    {
                        id: "examples",
                        title: "Examples",
                        description: "Concrete examples",
                        placeholder: "Provide concrete examples..."
                    }
                ]
            },
            rtf: {
                name: "RTF",
                description: "Role, Task, Format",
                sections: [
                    {
                        id: "role",
                        title: "Role",
                        description: "The role the AI should assume",
                        placeholder: "You are a [specific role]..."
                    },
                    {
                        id: "task",
                        title: "Task",
                        description: "The specific task to perform",
                        placeholder: "Your task is to..."
                    },
                    {
                        id: "format",
                        title: "Format",
                        description: "The desired output format",
                        placeholder: "Format your response as..."
                    }
                ]
            },
            bab: {
                name: "BAB",
                description: "Before, After, Bridge",
                sections: [
                    {
                        id: "before",
                        title: "Before (Current State)",
                        description: "The current situation or starting point",
                        placeholder: "Describe the current state..."
                    },
                    {
                        id: "after",
                        title: "After (Desired State)",
                        description: "The desired outcome or end state",
                        placeholder: "Describe the desired outcome..."
                    },
                    {
                        id: "bridge",
                        title: "Bridge (How to get there)",
                        description: "The steps or process to bridge the gap",
                        placeholder: "How do we get from current to desired state..."
                    }
                ]
            }
        };

        this.contextPatterns = [
            {
                id: "write",
                name: "Write Context",
                description: "Long-term memories, scratchpad, state within sessions"
            },
            {
                id: "select",
                name: "Select Context",
                description: "Retrieve relevant tools, scratchpad, memory, knowledge"
            },
            {
                id: "compress",
                name: "Compress Context",
                description: "Summarize to retain relevant tokens, trim irrelevant content"
            },
            {
                id: "isolate",
                name: "Isolate Context",
                description: "Partition context in state, hold in environment, multi-agent partition"
            }
        ];

        this.bestPractices = [
            "Keep context under 50% of window for optimal performance",
            "Use specific examples over vague instructions",
            "Structure information hierarchically",
            "Include relevant background but avoid information overload",
            "Use clear output formatting specifications",
            "Test prompts iteratively and refine",
            "Consider token costs vs. context quality tradeoffs"
        ];

        this.tokenLimits = {
            gpt4: 128000,
            claude: 200000,
            gpt35: 16385
        };

        this.currentFramework = 'addy';
        this.currentModel = 'gpt4';
        this.sectionData = {};
        this.templates = this.loadTemplates();

        this.init();
    }

    init() {
        this.loadDraft();
        this.setupEventListeners();
        this.typeWelcomeMessage();
        this.populateBestPractices();
        this.renderFramework();
        this.loadTemplatesList();
        this.setupKeyboardShortcuts();
        this.autoSave();
        this.updatePreview();
        this.updateUsage();
        // GoatCounter: record a pageview if the script is loaded
        try {
            if (window.goatcounter && typeof window.goatcounter.count === 'function') {
                window.goatcounter.count();
            }
        } catch (e) { /* noop */ }
    }

    setupEventListeners() {
        // Framework and settings
        document.getElementById('frameworkSelect').addEventListener('change', (e) => {
            this.currentFramework = e.target.value;
            this.renderFramework();
            this.updatePreview();
        });

        document.getElementById('modelSelect').addEventListener('change', (e) => {
            this.currentModel = e.target.value;
            this.updateUsage();
        });

        // Control buttons - Fixed event listeners
        document.getElementById('newPromptBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.newPrompt();
            if (window.goatcounter && typeof window.goatcounter.count === 'function') {
                window.goatcounter.count({ event: 'new_prompt' });
            }
        });
        
        document.getElementById('loadTemplateBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.showTemplateModal('load');
        });
        
        document.getElementById('saveTemplateBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.showTemplateModal('save');
        });
        
        document.getElementById('exportBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.exportPrompt();
            if (window.goatcounter && typeof window.goatcounter.count === 'function') {
                window.goatcounter.count({ event: 'export_prompt' });
            }
        });
        
        document.getElementById('copyPromptBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.copyPrompt();
        });

        // Section controls - Fixed event listeners
        document.getElementById('collapseAllBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.collapseAllSections();
        });
        
        document.getElementById('expandAllBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.expandAllSections();
        });

        // Modal controls
        document.getElementById('closeModalBtn').addEventListener('click', () => this.hideModal());
        document.getElementById('cancelModalBtn').addEventListener('click', () => this.hideModal());
        document.getElementById('saveModalBtn').addEventListener('click', () => this.saveTemplate());

        // Modal backdrop
        document.querySelector('.modal-backdrop').addEventListener('click', () => this.hideModal());
    }

    typeWelcomeMessage() {
        const welcomeTexts = [
            "Welcome to Prompt Commander v2.0.1",
            "Initializing prompt engineering terminal...",
            "Loading context frameworks...",
            "Ready for context engineering!"
        ];

        let textIndex = 0;
        let charIndex = 0;
        const welcomeElement = document.getElementById('welcomeText');

        const typeText = () => {
            if (textIndex < welcomeTexts.length) {
                if (charIndex < welcomeTexts[textIndex].length) {
                    welcomeElement.textContent += welcomeTexts[textIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeText, 50);
                } else {
                    setTimeout(() => {
                        welcomeElement.textContent = '';
                        charIndex = 0;
                        textIndex++;
                        if (textIndex < welcomeTexts.length) {
                            setTimeout(typeText, 500);
                        } else {
                            welcomeElement.textContent = welcomeTexts[welcomeTexts.length - 1];
                        }
                    }, textIndex === welcomeTexts.length - 1 ? 0 : 2000);
                }
            }
        };

        typeText();
    }

    populateBestPractices() {
        const practicesList = document.getElementById('practicesList');
        practicesList.innerHTML = this.bestPractices.map(practice => 
            `<li>${practice}</li>`
        ).join('');
    }

    renderFramework() {
        const framework = this.frameworks[this.currentFramework];
        const sectionsContainer = document.getElementById('promptSections');
        const title = document.querySelector('.section-title');
        
        title.innerHTML = `<span class="prompt-symbol">$</span> prompt_builder --framework=${this.currentFramework}`;
        
        sectionsContainer.innerHTML = framework.sections.map(section => `
            <div class="prompt-section" data-section-id="${section.id}">
                <div class="section-heading" data-section-id="${section.id}">
                    <h4 class="section-heading-title">${section.title}</h4>
                    <span class="section-toggle">▼</span>
                </div>
                <div class="section-content">
                    <p class="section-description">${section.description}</p>
                    <textarea 
                        class="form-control" 
                        data-section="${section.id}"
                        placeholder="${section.placeholder}"
                        rows="4"
                    >${this.sectionData[section.id] || ''}</textarea>
                </div>
            </div>
        `).join('');

        // Add event listeners to section headings for collapse/expand
        sectionsContainer.querySelectorAll('.section-heading').forEach(heading => {
            heading.addEventListener('click', (e) => {
                const sectionContent = heading.nextElementSibling;
                const toggle = heading.querySelector('.section-toggle');
                
                sectionContent.classList.toggle('collapsed');
                toggle.classList.toggle('collapsed');
            });
        });

        // Add event listeners to textareas
        sectionsContainer.querySelectorAll('textarea').forEach(textarea => {
            textarea.addEventListener('input', (e) => {
                this.sectionData[e.target.dataset.section] = e.target.value;
                this.updatePreview();
                this.updateUsage();
            });
        });
    }

    updatePreview() {
        const framework = this.frameworks[this.currentFramework];
        const previewElement = document.getElementById('previewText');
        
        let prompt = '';
        framework.sections.forEach(section => {
            const content = this.sectionData[section.id];
            if (content && content.trim()) {
                prompt += `# ${section.title}\n${content.trim()}\n\n`;
            }
        });

        previewElement.textContent = prompt || '// Your prompt will appear here as you build it...';
    }

    updateUsage() {
        const prompt = this.getFullPrompt();
        const tokenCount = this.estimateTokens(prompt);
        const maxTokens = this.tokenLimits[this.currentModel];
        const percentage = (tokenCount / maxTokens) * 100;

        const statsElement = document.getElementById('usageStats');
        const fillElement = document.getElementById('usageFill');

        statsElement.textContent = `${tokenCount.toLocaleString()} / ${maxTokens.toLocaleString()} tokens (${percentage.toFixed(1)}%)`;
        fillElement.style.width = `${Math.min(percentage, 100)}%`;

        // Update color based on usage
        fillElement.className = 'usage-fill';
        if (percentage > 80) {
            fillElement.classList.add('danger');
        } else if (percentage > 50) {
            fillElement.classList.add('warning');
        }
    }

    estimateTokens(text) {
        // Rough estimation: ~4 characters per token
        return Math.ceil(text.length / 4);
    }

    getFullPrompt() {
        const framework = this.frameworks[this.currentFramework];
        let prompt = '';
        framework.sections.forEach(section => {
            const content = this.sectionData[section.id];
            if (content && content.trim()) {
                prompt += `${section.title}: ${content.trim()}\n\n`;
            }
        });
        return prompt;
    }

    collapseAllSections() {
        document.querySelectorAll('.section-content').forEach(content => {
            content.classList.add('collapsed');
        });
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.classList.add('collapsed');
        });
        this.showToast('All sections collapsed', 'success');
    }

    expandAllSections() {
        document.querySelectorAll('.section-content').forEach(content => {
            content.classList.remove('collapsed');
        });
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.classList.remove('collapsed');
        });
        this.showToast('All sections expanded', 'success');
    }

    newPrompt() {
        if (Object.keys(this.sectionData).length > 0) {
            if (!confirm('This will clear your current prompt. Are you sure?')) {
                return;
            }
        }
        
        this.sectionData = {};
        this.renderFramework();
        this.updatePreview();
        this.updateUsage();
        this.showToast('New prompt started', 'success');
    }

    copyPrompt() {
        const prompt = this.getFullPrompt();
        if (!prompt.trim()) {
            this.showToast('No prompt to copy', 'warning');
            return;
        }

        navigator.clipboard.writeText(prompt).then(() => {
            this.showToast('Prompt copied to clipboard', 'success');
        }).catch(() => {
            this.showToast('Failed to copy prompt', 'error');
        });
    }

    exportPrompt() {
        const prompt = this.getFullPrompt();
        if (!prompt.trim()) {
            this.showToast('No prompt to export', 'warning');
            return;
        }

        const exportData = {
            framework: this.currentFramework,
            timestamp: new Date().toISOString(),
            sections: this.sectionData,
            prompt: prompt
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `prompt-${this.currentFramework}-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showToast('Prompt exported successfully', 'success');
    }

    showTemplateModal(mode) {
        const modal = document.getElementById('templateModal');
        const title = document.querySelector('.modal-title');
        const nameInput = document.getElementById('templateName');
        const descInput = document.getElementById('templateDescription');
        
        if (mode === 'save') {
            title.textContent = 'Save Template';
            nameInput.value = '';
            descInput.value = '';
        } else {
            title.textContent = 'Load Template';
            // Could implement template selection here
        }
        
        modal.classList.remove('hidden');
        nameInput.focus();
    }

    hideModal() {
        document.getElementById('templateModal').classList.add('hidden');
    }

    saveTemplate() {
        const name = document.getElementById('templateName').value.trim();
        const description = document.getElementById('templateDescription').value.trim();

        if (!name) {
            this.showToast('Template name is required', 'error');
            return;
        }

        if (Object.keys(this.sectionData).length === 0) {
            this.showToast('No content to save', 'warning');
            return;
        }

        const template = {
            id: Date.now().toString(),
            name: name,
            description: description,
            framework: this.currentFramework,
            sections: { ...this.sectionData },
            created: new Date().toISOString()
        };

        this.templates.push(template);
        this.saveTemplates();
        this.loadTemplatesList();
        this.hideModal();
        this.showToast('Template saved successfully', 'success');
    }

    loadTemplates() {
        try {
            return JSON.parse(localStorage.getItem('promptCommanderTemplates') || '[]');
        } catch (e) {
            return [];
        }
    }

    saveTemplates() {
        localStorage.setItem('promptCommanderTemplates', JSON.stringify(this.templates));
    }

    loadTemplatesList() {
        const templatesList = document.getElementById('templatesList');
        
        if (this.templates.length === 0) {
            templatesList.innerHTML = '<div class="template-item">No saved templates</div>';
            return;
        }

        templatesList.innerHTML = this.templates.map(template => `
            <div class="template-item" onclick="app.loadTemplate('${template.id}')">
                <div>${template.name}</div>
                <div style="font-size: 10px; color: var(--terminal-text-dim);">${template.framework.toUpperCase()}</div>
            </div>
        `).join('');
    }

    loadTemplate(templateId) {
        const template = this.templates.find(t => t.id === templateId);
        if (!template) return;

        this.currentFramework = template.framework;
        this.sectionData = { ...template.sections };
        
        // Update UI
        document.getElementById('frameworkSelect').value = template.framework;
        this.renderFramework();
        this.updatePreview();
        this.updateUsage();
        
        this.showToast(`Template "${template.name}" loaded`, 'success');
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+S - Save
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.showTemplateModal('save');
            }
            
            // Ctrl+Enter - Focus preview
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('previewText').scrollIntoView();
            }
            
            // Ctrl+C - Copy (when not in input)
            if (e.ctrlKey && e.key === 'c' && !e.target.matches('input, textarea')) {
                e.preventDefault();
                this.copyPrompt();
            }
            
            // Escape - Clear focus
            if (e.key === 'Escape') {
                document.activeElement.blur();
            }
        });
    }

    loadDraft() {
        // Load draft on startup
        try {
            const draft = JSON.parse(localStorage.getItem('promptCommanderDraft') || 'null');
            if (draft && Date.now() - draft.timestamp < 24 * 60 * 60 * 1000) { // 24 hours
                this.currentFramework = draft.framework;
                this.sectionData = draft.sections;
                document.getElementById('frameworkSelect').value = draft.framework;
            }
        } catch (e) {
            // Ignore draft loading errors
        }
    }

    autoSave() {
        // Auto-save draft every 30 seconds
        setInterval(() => {
            if (Object.keys(this.sectionData).length > 0) {
                localStorage.setItem('promptCommanderDraft', JSON.stringify({
                    framework: this.currentFramework,
                    sections: this.sectionData,
                    timestamp: Date.now()
                }));
            }
        }, 30000);
    }

    showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 4000);
    }
}

// Initialize the application
const app = new PromptCommander();