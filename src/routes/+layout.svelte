<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <title>Portfolio | 叶 真衣</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Design Engineer 叶 真衣（Kanae Mai）のポートフォリオサイト" />
</svelte:head>

<div class="min-h-screen bg-surface-base">
  <main class="mx-auto w-full max-w-[1101px] bg-white">
    <slot />
  </main>
</div>
