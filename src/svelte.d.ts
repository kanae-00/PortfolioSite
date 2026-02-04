import type { Component } from 'svelte';

declare module '*.svelte' {
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/*.svelte' {
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/CalendarIcon.svelte' {
  const component: Component<any>;
  export default component;
}

export {};
