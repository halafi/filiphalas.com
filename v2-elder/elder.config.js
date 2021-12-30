module.exports = {
  origin: 'https://www.filiphalas.com',
  server: {
    prefix: '',
  },
  build: {},
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  // locations: {
  //   assets: './public/dist/static/',
  //   public: './public/',
  //   svelte: {
  //     ssrComponents: './___ELDER___/compiled/',
  //     clientComponents: './public/dist/svelte/',
  //   },
  //   systemJs: '/dist/static/s.min.js',
  //   intersectionObserverPoly: '/dist/static/intersection-observer.js',
  // },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
  plugins: {},
};
