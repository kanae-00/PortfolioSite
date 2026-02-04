// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Component } from 'svelte';
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

declare module '*.svelte' {
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/*.svelte' {
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/PeopleIcon.svelte' {
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/watchIcon.svelte' {
  const component: Component<any>;
  export default component;
}

export {};
