<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<svelte:head>
  <title>Portfolio | 叶 真衣</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Design Engineer 叶 真衣（Kanae Mai）のポートフォリオサイト" />
</svelte:head>

<div class="min-h-screen bg-surface-base">
  <main class="mx-auto w-full max-w-[1101px] bg-white">
    {#key page.url.pathname}
      <div class="route-transition">
        <div
          class="fixed left-0 top-0 z-[999] h-screen w-full bg-white pointer-events-none animate-[page-anime-fade_0.1s_ease-in-out_0.1s_forwards]"
          aria-hidden="true"
        ></div>
        <div in:fade={{ duration: 200, easing: cubicOut }}>
          <!-- メイン -->
          {#if children}
            {@render children()}
          {/if}
        </div>
      </div>
    {/key}
  </main>
</div>
