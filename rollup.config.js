const { getRollupConfig } = require('@elderjs/elderjs');
const svelteConfig = require('./svelte.config');

const production = process.env.NODE_ENV === 'production' || !process.env.ROLLUP_WATCH;

module.exports = [
  ...getRollupConfig({
    svelteConfig,
    rollupConfig: {
      replacements: {
        // already in elder
        // 'process.env.componentType': "'browser'", or "server"
        // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        isDev: !production,
      },
    },
  }),
];
