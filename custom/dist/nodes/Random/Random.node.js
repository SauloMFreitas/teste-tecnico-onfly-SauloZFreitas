"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            icon: 'file:random.svg',
            group: ['transform'],
            version: 1,
            description: 'True Random Number Generator (random.org)',
            defaults: { name: 'Random' },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'True Random Number Generator',
                            value: 'trng',
                            description: 'Generate a random integer using random.org',
                            action: 'Generate a true random integer',
                        },
                    ],
                    default: 'trng',
                },
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    default: 1,
                    description: 'Minimum value (inclusive)',
                    required: true,
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    default: 60,
                    description: 'Maximum value (inclusive)',
                    required: true,
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const out = [];
        for (let i = 0; i < items.length; i++) {
            const min = this.getNodeParameter('min', i);
            const max = this.getNodeParameter('max', i);
            if (min > max) {
                throw new Error('Min must be less than or equal to Max');
            }
            const res = await this.helpers.httpRequest({
                method: 'GET',
                url: 'https://www.random.org/integers/',
                qs: { num: 1, min, max, col: 1, base: 10, format: 'plain', rnd: 'new' },
                json: false,
            });
            const value = parseInt(String(res).trim(), 10);
            out.push({ json: { value } });
        }
        return [out];
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.node.js.map