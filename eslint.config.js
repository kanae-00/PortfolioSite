import svelteConfig from '@sveltejs/eslint-config';

export default [
  { ignores: ['.svelte-kit/', 'node_modules/', 'build/'] },
  ...svelteConfig
];
