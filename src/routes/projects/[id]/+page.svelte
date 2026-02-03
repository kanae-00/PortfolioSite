<script lang="ts">
  import CalendarIcon from '$lib/component/icon/CalendarIcon.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const project = data.project;
</script>

<svelte:head>
  <title>{project.title} | Portfolio | 叶 真衣</title>
  <meta name="description" content={project.summary} />
</svelte:head>

<div class="flex flex-col bg-white">
  <!-- 戻るリンク -->
  <div class="w-full px-4 pt-6 sm:px-10 sm:pt-8 lg:px-20 lg:pt-10">
    <a href="/" class="font-body text-sm text-brand-green hover:underline sm:text-base">
      ← TOP に戻る
    </a>
  </div>

  <article
    class="mx-auto flex w-full max-w-[941px] flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-10 sm:py-8 lg:gap-10 lg:px-20 lg:py-10"
  >
    <!-- ヒーロー画像 -->
    <div
      class="relative aspect-[303/240] w-full overflow-hidden rounded-2xl bg-[#697065] sm:aspect-[941/480]"
    >
      <img src={project.image} alt={project.title} class="h-full w-full object-cover" />
    </div>

    <!-- タイトル・メタ -->
    <header class="flex flex-col gap-4">
      <h1
        class="font-display text-3xl font-normal leading-tight text-text-primary sm:text-4xl lg:text-[44px] lg:leading-[52px]"
      >
        {project.title}
      </h1>
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-1 font-body text-sm text-text-muted">
          <CalendarIcon class="h-4 w-4 shrink-0 rounded border border-[#697065]" />
          <span>{project.period}</span>
        </div>
        <span
          class="inline-flex items-center justify-center rounded-lg border border-border-primary bg-surface-base px-2 py-1.5 text-xs font-medium text-text-primary"
        >
          {project.categoryPrimary}
        </span>
        <span
          class="inline-flex items-center justify-center rounded-lg border border-border-primary bg-white px-2 py-1.5 text-xs font-normal text-brand-green"
        >
          {project.categorySecondary}
        </span>
      </div>
      {#if project.role}
        <p class="font-body text-sm text-text-muted sm:text-base">
          <span class="font-medium text-text-primary">担当:</span>
          {project.role}
        </p>
      {/if}
    </header>

    <!-- 概要 -->
    <p class="font-body text-base leading-relaxed text-text-primary sm:text-lg sm:leading-8">
      {project.summary}
    </p>

    <!-- 本文 -->
    <div class="flex flex-col gap-4 border-t border-border-primary pt-6 sm:pt-8">
      {#each project.description as paragraph}
        <p class="font-body text-sm leading-relaxed text-text-muted sm:text-base sm:leading-7">
          {paragraph}
        </p>
      {/each}
    </div>

    <!-- 技術スタック -->
    {#if project.tech && project.tech.length > 0}
      <div class="flex flex-col gap-2 border-t border-border-primary pt-6 sm:pt-8">
        <h2 class="font-body text-sm font-medium text-text-primary">技術・ツール</h2>
        <div class="flex flex-wrap gap-2">
          {#each project.tech as t}
            <span
              class="inline-flex items-center rounded-lg border border-border-primary bg-surface-base px-3 py-1.5 text-xs font-medium text-text-primary"
            >
              {t}
            </span>
          {/each}
        </div>
      </div>
    {/if}

    <!-- リンク -->
    {#if project.url}
      <div class="border-t border-border-primary pt-6 sm:pt-8">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          class="font-body text-brand-green hover:underline"
        >
          関連リンクへ →
        </a>
      </div>
    {/if}
  </article>

  <!-- フッター戻る -->
  <div class="border-t border-border-primary px-4 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
    <div class="mx-auto max-w-[941px]">
      <a href="/" class="font-body text-sm text-brand-green hover:underline sm:text-base">
        ← TOP に戻る
      </a>
    </div>
  </div>
</div>
