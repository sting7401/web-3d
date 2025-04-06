import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// ES 모듈 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const aliases = {
    $: path.resolve(__dirname, './src'),
    $lib: path.resolve(__dirname, './src/lib'),
    $images: path.resolve(__dirname, './src/images'),
    $css: path.resolve(__dirname, './src/css'),
    $common: path.resolve(__dirname, './src/js/common'),
    $components: path.resolve(__dirname, './src/components'),
    $state: path.resolve(__dirname, './src/state'),
    $store: path.resolve(__dirname, './src/store'),
    $event: path.resolve(__dirname, './src/event'),
    $events: path.resolve(__dirname, './src/events'),
    $types: path.resolve(__dirname, './src/types'),
    $json: path.resolve(__dirname, './src/json'),
    $html: path.resolve(__dirname, './public/html'),
    $layouts: path.resolve(__dirname, './src/layouts'),
    $pages: path.resolve(__dirname, './src/pages'),
    $activity: path.resolve(__dirname, './activity'),
    $chatbot: path.resolve(__dirname, './chatbot'),
    $publish: path.resolve(__dirname, './publish'),
};

export default defineConfig({
    resolve: {
        alias: aliases,
    },
    plugins: [tailwindcss()],
});
