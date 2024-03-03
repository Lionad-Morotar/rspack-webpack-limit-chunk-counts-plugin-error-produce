import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import webpack from 'webpack'

export default defineConfig({
  tools: {
    rspack: (config, { prependPlugins }) => {
      prependPlugins(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        })
      )
    }
  },
  plugins: [
    pluginVue()
  ],
});
