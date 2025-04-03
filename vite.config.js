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
    $images: path.resolve(__dirname, './src/lib/images'),
    $css: path.resolve(__dirname, './src/lib/css'),
    $common: path.resolve(__dirname, './src/lib/js/common'),
    $components: path.resolve(__dirname, './src/lib/components'),
    $state: path.resolve(__dirname, './src/lib/state'),
    $store: path.resolve(__dirname, './src/lib/store'),
    $event: path.resolve(__dirname, './src/lib/event'),
    $events: path.resolve(__dirname, './src/lib/events'),
    $types: path.resolve(__dirname, './src/lib/types'),
    $json: path.resolve(__dirname, './src/lib/json'),
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
