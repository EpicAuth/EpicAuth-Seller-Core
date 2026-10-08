import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: "./openapi/seller.json",
    output: {
        path: './src',
        postProcess: ['prettier'],
    },
});
