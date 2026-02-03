declare module '*.svelte' {
  import type { Component } from 'svelte';
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/*.svelte' {
  import type { Component } from 'svelte';
  const component: Component<any>;
  export default component;
}

declare module '$lib/component/icon/CalendarIcon.svelte' {
  import type { Component } from 'svelte';
  const component: Component<any>;
  export default component;
}

export {};
