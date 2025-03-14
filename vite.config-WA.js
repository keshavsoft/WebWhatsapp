import { defineConfig, normalizePath, build } from 'vite'
import fs from 'fs'
import path, { resolve } from 'path'
import { fileURLToPath } from 'url';
import nunjucks from 'vite-plugin-nunjucks'
import { viteStaticCopy } from 'vite-plugin-static-copy';

const srcFolder = "src-WA";
const distFolder = "publicDir/WA";

import sidebarItems from "./src-WA/sidebar-items.json";
import horizontalMenuItems from "./src-WA/horizontal-menu-items.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = resolve(__dirname, srcFolder)

const getFiles = () => {
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        })
    return files
}

const files = getFiles()

const getVariables = (mode) => {
    const variables = {}
    Object.keys(files).forEach((filename) => {
        if (filename.includes('layouts')) filename = `layouts/${filename}`
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            sidebarItems,
            horizontalMenuItems,
            isDev: mode === 'development',
            filename: `${filename}.html`
        }
    })
    return variables
};

build({
    configFile: false,
    build: {
        emptyOutDir: false,
        outDir: resolve(__dirname, `${distFolder}/assets/compiled/js`),
        lib: {
            name: 'app',
            formats: ['umd'],
            fileName: 'app',
            entry: `./${srcFolder}/assets/js/app.js`,
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
})



export default defineConfig((env) => ({
    publicDir: 'static',
    base: './',
    root,
    plugins: [
        viteStaticCopy({
            targets: [
                { src: normalizePath(resolve(__dirname, `./${srcFolder}/assets/static`)), dest: 'assets' },
                { src: normalizePath(resolve(__dirname, `./${distFolder}/assets/compiled/fonts`)), dest: 'assets/compiled/css' },
                { src: normalizePath(resolve(__dirname, "./node_modules/bootstrap-icons/bootstrap-icons.svg")), dest: 'assets/static/images' }
            ],
            watch: {
                reloadPageOnChange: true
            }
        }),
        nunjucks({
            templatesDir: root,
            variables: getVariables(env.mode),
            nunjucksEnvironment: {

                filters: {
                    containString: (str, containStr) => {
                        if (!str.length) return false
                        return str.indexOf(containStr) >= 0
                    },
                    startsWith: (str, targetStr) => {
                        if (!str.length) return false
                        return str.startsWith(targetStr)
                    }
                }
            }
        })
    ],
    resolve: {
        alias: {
            '@': normalizePath(resolve(__dirname, srcFolder)),
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': resolve(__dirname, 'node_modules/bootstrap-icons'),
            '~perfect-scrollbar': resolve(__dirname, 'node_modules/perfect-scrollbar'),
            '~@fontsource': resolve(__dirname, 'node_modules/@fontsource'),
        }
    },
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, distFolder),
        rollupOptions: {
            input: files,
            output: {
                entryFileNames: `assets/compiled/js/[name].js`,
                chunkFileNames: `assets/compiled/js/[name].js`,

                assetFileNames: (a) => {
                    const extname = a.name.split('.')[1]
                    let folder = extname ? `${extname}/` : ''

                    // Put fonts into css folder
                    if (['woff', 'woff2', 'ttf'].includes(extname))
                        folder = 'fonts/'

                    return `assets/compiled/${folder}[name][extname]`
                }
            }
        },
    }
}))