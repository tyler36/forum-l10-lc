import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    server: {
        host: true,
        strictPort: true,
        port: 5173,
        hmr: {
            protocol: 'wss',
            host: `${process.env.DDEV_HOSTNAME}`,
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
