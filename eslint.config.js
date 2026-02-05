import svelteConfig from '@sveltejs/eslint-config';

export default [
  { ignores: ['.svelte-kit/', 'node_modules/', 'build/'] },
  ...svelteConfig,
  {
    rules: {
      // SvelteKit handles <a href> for SPA navigation
      'svelte/no-navigation-without-resolve': 'off',
    },
  },
];
