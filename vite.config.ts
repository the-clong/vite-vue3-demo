import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import babel from "@rollup/plugin-babel"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    // babel({
    //   extensions:[".js", ".jsx", ".es6", ".es", ".mjs"],
    //   plugins: [
    //     ["@babel/plugin-proposal-decorators", { "legacy": true }],
    //     ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    //   ]
    // })
  ],
})
