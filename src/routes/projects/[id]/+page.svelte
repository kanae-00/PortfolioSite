<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import PeopleIcon from '$lib/component/icon/PeopleIcon.svelte';
  import WatchIcon from '$lib/component/icon/watchIcon.svelte';
  import CheckIcon from '$lib/component/icon/CheckIcon.svelte';
  export let data: PageData;
  const project = data.project;

  // 目次ナビの項目
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'background', label: 'Background & Issues' },
    { id: 'goals', label: 'Goals & Requirements' },
    { id: 'ux-strategy', label: 'UX Strategy' },
    { id: 'info-architecture', label: 'Info Architecture' },
    { id: 'use-cases', label: 'Use Cases / User Flow' },
    { id: 'wireframe', label: 'Wireframe' },
    { id: 'visual-design', label: 'Visual Design' },
    { id: 'ui-components', label: 'UI Components / Design System' },
    { id: 'outcome', label: 'Outcome' },
  ];

  let activeSection = 'overview';

  onMount(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  type WireframeImage = {
    src: string;
    title: string;
    description: string;
  };

  let activeWireframeImage: WireframeImage | null = null;
  type VisualDesignImage = {
    src: string;
    title: string;
    description: string;
  };
  let activeVisualDesignImage: VisualDesignImage | null = null;
  type InfoArchitectureImage = {
    src: string;
    title: string;
  };
  let activeInfoArchitectureImage: InfoArchitectureImage | null = null;
  const visualDesign = project.detail.visualDesign;
  const visualDesignImages = visualDesign?.images ?? [];
  const mainVisualDesignImage = visualDesignImages[0];
  const visualDesignColorPalette = visualDesign?.colorPalette;
  const fallbackColorPalette = {
    primaryColor: '#0E1829',
    accentColor: '#4B6333',
    other: ['#F7F7F0', '#BEC6B9'],
  };
  const resolvedColorPalette = visualDesignColorPalette ?? fallbackColorPalette;
  const resolvedOtherColors = resolvedColorPalette.other ?? fallbackColorPalette.other;
  const uiComponents = project.detail.uiComponents;
  const typographyItems = uiComponents?.designSystem?.typography ?? [
    '見出し: 太字',
    '本文: レギュラー',
    '16px 基準スケール',
  ];
  const uiComponentSections = uiComponents?.sections ?? [];

  const openWireframeModal = (image: WireframeImage) => {
    activeWireframeImage = image;
    activeVisualDesignImage = null;
  };

  const closeWireframeModal = () => {
    activeWireframeImage = null;
  };

  const openVisualDesignModal = (image: VisualDesignImage) => {
    activeVisualDesignImage = image;
    activeWireframeImage = null;
  };

  const closeVisualDesignModal = () => {
    activeVisualDesignImage = null;
  };

  const openInfoArchitectureModal = (image: InfoArchitectureImage) => {
    activeInfoArchitectureImage = image;
    activeWireframeImage = null;
    activeVisualDesignImage = null;
  };

  const closeInfoArchitectureModal = () => {
    activeInfoArchitectureImage = null;
  };

  const handleModalKeydown = (event: KeyboardEvent) => {
    if (
      event.key === 'Escape' &&
      (activeWireframeImage || activeVisualDesignImage || activeInfoArchitectureImage)
    ) {
      closeWireframeModal();
      closeVisualDesignModal();
      closeInfoArchitectureModal();
    }
  };
</script>

<svelte:window on:keydown={handleModalKeydown} />

<svelte:head>
  <title>{project.title} | Portfolio | 叶 真衣</title>
  <meta name="description" content={project.summary} />
</svelte:head>

<div class="flex flex-col bg-white">
  <!-- 戻るリンク -->
  <div class="w-full px-4 pt-6 sm:px-10 sm:pt-8 lg:px-20 lg:pt-10">
    <a
      href="/"
      class="group inline-flex items-center gap-1 font-body text-sm text-brand-green pb-1 sm:text-base no-underline hover:no-underline"
      data-sveltekit-preload-data="hover"
    >
      <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
      <span class="underline">TOP に戻る</span>
    </a>
  </div>

  <!-- メインコンテンツ -->
  <div
    class="mx-auto flex w-full max-w-[1200px] gap-8 px-4 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10"
  >
    <!-- 左側: メインコンテンツ -->
    <article class="flex-1 flex flex-col gap-12 lg:gap-24">
      <!-- ヒーロー画像 -->
      <div class="relative aspect-[941/480] w-full overflow-hidden rounded-2xl bg-[#697065]">
        <img src={project.image} alt={project.title} class="h-full w-full object-cover" />
      </div>

      <!-- タイトル -->
      <header class="flex flex-col gap-4">
        <h1
          class="font-display text-3xl font-normal leading-tight text-text-primary sm:text-4xl lg:text-[44px]"
        >
          {project.title}
        </h1>
      </header>

      <!-- Overview -->
      <section id="overview" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          Overview
        </h2>
        <p class="font-body text-base leading-relaxed text-text-muted">
          {project.detail.overview.summary}
        </p>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4" role="list">
          <div
            class="flex flex-col gap-2 rounded-lg border border-border-primary bg-surface-base px-4 py-3 sm:px-5 sm:py-4"
            role="listitem"
          >
            <div class="flex items-center gap-2">
              <PeopleIcon />
              <span class="font-body text-sm font-medium text-text-primary">Role</span>
            </div>
            <span class="font-body text-sm leading-relaxed text-text-muted">
              {project.detail.overview.role}
            </span>
          </div>
          <div
            class="flex flex-col gap-2 rounded-lg border border-border-primary bg-surface-base px-4 py-3 sm:px-5 sm:py-4"
            role="listitem"
          >
            <div class="flex items-center gap-2">
              <WatchIcon />
              <span class="font-body text-sm font-medium text-text-primary">Timeline</span>
            </div>
            <span class="font-body text-sm leading-relaxed text-text-muted">
              {project.detail.overview.timeline}
            </span>
          </div>
          <div
            class="flex flex-col gap-2 rounded-lg border border-border-primary bg-surface-base px-4 py-3 sm:px-5 sm:py-4"
            role="listitem"
          >
            <div class="flex items-center gap-2">
              <PeopleIcon />
              <span class="font-body text-sm font-medium text-text-primary">Team</span>
            </div>
            <span class="font-body text-sm leading-relaxed text-text-muted">
              {project.detail.overview.team}
            </span>
          </div>
        </div>
      </section>

      <!-- Background & Issues -->
      <section id="background" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          Background & Issues
        </h2>
        <p class="font-body text-base leading-relaxed text-text-muted">
          {project.detail.background.context}
        </p>

        <div class="flex flex-col gap-3 bg-surface-base border-l-4 border-brand-green p-4">
          <h3 class="font-body text-base font-medium text-text-primary">ユーザーの課題</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.background.userProblems as problem, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{problem}</li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">社内の課題</h3>
          <ul class="grid grid-cols-2 gap-2">
            {#each project.detail.background.existingIssues as issue, index (index)}
              <li
                class="rounded-lg border border-border-primary bg-surface-base px-4 py-3 font-body text-sm leading-relaxed text-text-muted"
              >
                {issue}
              </li>
            {/each}
          </ul>
        </div>
      </section>

      <!-- Goals & Requirements -->
      <section id="goals" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          Goals & Requirements
        </h2>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">プロジェクトの目標</h3>
          <ul class="flex flex-col gap-4">
            {#each project.detail.goals.projectGoals as goal, index (index)}
              <li class="flex items-start gap-2 font-body leading-relaxed">
                <span class="mt-0.5 shrink-0">
                  <CheckIcon />
                </span>
                <span>{goal}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            class="flex flex-col gap-4 rounded-xl border border-border-primary bg-surface-base p-4"
          >
            <span
              class="inline-flex w-fit items-center border-b border-border-primary px-1 font-body leading-relaxed font-medium text-brand-green"
            >
              ユーザーの要件
            </span>
            <ul class="space-y-3 pl-5 list-disc marker:text-brand-green">
              {#each project.detail.goals.userRequirements as req, index (index)}
                <li class="font-body text-sm leading-relaxed text-text-primary">{req}</li>
              {/each}
            </ul>
          </div>

          <div
            class="flex flex-col gap-4 rounded-xl border border-border-primary bg-surface-base p-4"
          >
            <span
              class="inline-flex w-fit items-center border-b border-border-primary pb-1 font-body px-1 font-medium text-brand-green"
            >
              ビジネスの要件
            </span>
            <ul class="space-y-3 pl-5 list-disc marker:text-brand-green">
              {#each project.detail.goals.businessRequirements as req, index (index)}
                <li class="font-body text-sm leading-relaxed text-text-primary">{req}</li>
              {/each}
            </ul>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">制約</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.goals.constraints as constraint, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">
                {constraint}
              </li>
            {/each}
          </ul>
        </div>
      </section>

      <!-- UX Strategy -->
      <section id="ux-strategy" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          UX Strategy
        </h2>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">UXの原則</h3>
          <ul class="flex flex-col gap-4">
            {#each project.detail.uxStrategy.principles as principle, index (index)}
              <li
                class="flex items-center gap-4 rounded-xl border border-border-primary bg-surface-base px-4 py-3 font-body text-sm leading-relaxed text-brand-green"
              >
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green font-body text-xs font-medium text-white"
                >
                  {index + 1}
                </span>
                <span>{principle}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3 bg-surface-base border-l-4 border-brand-green p-4">
          <h3 class="font-body text-base font-medium text-text-primary">設計のポイント</h3>
          <p class="font-body text-sm leading-relaxed text-text-muted">
            {project.detail.uxStrategy.prioritization}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-body text-base font-medium text-text-primary">設計方針</h3>
          <p class="font-body text-sm leading-relaxed text-text-muted">
            {project.detail.uxStrategy.designRationale}
          </p>
        </div>
      </section>

      <!-- Info Architecture -->
      <section id="info-architecture" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          Info Architecture
        </h2>
        <div
          class="flex flex-col gap-3 bg-surface-base border-l-4 border-brand-green p-4 items-start"
        >
          <h3 class="font-body text-base font-medium text-text-primary">画面構造</h3>
          <p class="font-body leading-relaxed text-text-muted">
            {project.detail.infoArchitecture.screenStructure}
          </p>
          {#if project.detail.infoArchitecture.screenStructureImages?.length}
            <div class="flex flex-col gap-4">
              {#each project.detail.infoArchitecture.screenStructureImages as img, index (index)}
                <div
                  class="flex flex-col gap-2 rounded-lg border border-border-primary bg-surface-base p-4"
                >
                  <p class="font-body text-sm font-medium text-text-primary">{img.title}</p>
                  <button
                    type="button"
                    class="group relative overflow-hidden rounded-lg border border-border-primary bg-white"
                    aria-label={`Open info architecture: ${img.title}`}
                    onclick={() => openInfoArchitectureModal(img)}
                  >
                    <img src={img.src} alt={img.title} class="h-auto w-full" />
                    <span
                      class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 font-body text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      拡大表示
                    </span>
                  </button>
                </div>
              {/each}
            </div>
          {/if}
        </div>
        <h3 class="font-body text-base font-medium text-text-primary">ユーザーフロー</h3>
        <p class="font-body leading-relaxed text-text-muted">
          {project.detail.infoArchitecture.flowDescription}
        </p>
        {#if project.detail.infoArchitecture.flowImages?.length}
          <div
            class={`grid gap-4 rounded-lg border border-border-primary bg-surface-base ${
              project.detail.infoArchitecture.flowImages?.length >= 2
                ? 'grid-cols-1'
                : 'grid-cols-2 xs:grid-cols-1'
            }`}
          >
            {#each project.detail.infoArchitecture.flowImages as img, index (index)}
              <div class="flex flex-col gap-2 p-4">
                <p class="font-body text-sm font-medium text-text-primary whitespace-pre-line">
                  {img.title}
                </p>
                <button
                  type="button"
                  class={`group relative overflow-hidden rounded-lg border border-border-primary bg-white ${
                    project.detail.infoArchitecture.flowImages?.length >= 2
                      ? 'grid-cols1 h-[400px]'
                      : 'h-[200px]'
                  }`}
                  aria-label={`Open info architecture: ${img.title}`}
                  onclick={() => openInfoArchitectureModal(img)}
                >
                  <img src={img.src} alt={img.title} class="h-auto w-full" />
                  <span
                    class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 font-body text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    拡大表示
                  </span>
                </button>
              </div>
            {/each}
          </div>
        {/if}
      </section>

      <!-- Use Cases -->
      <section id="use-cases" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          Use Cases / User Flow
        </h2>
        <div class="flex flex-col gap-6">
          {#each project.detail.useCases.scenarios as scenario, sIndex (sIndex)}
            <div
              class="flex flex-col gap-2 rounded-lg border border-border-primary bg-surface-base p-4"
            >
              <h3 class="font-body text-base font-medium text-text-primary">{scenario.title}</h3>
              <ol class="flex flex-col gap-1 pl-5">
                {#each scenario.steps as step, index (index)}
                  <li class="font-body text-sm leading-relaxed text-text-muted list-decimal">
                    {step}
                  </li>
                {/each}
              </ol>
            </div>
          {/each}
        </div>
        {#if project.detail.useCases.flowImages?.length}
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {#each project.detail.useCases.flowImages as image, index (index)}
              <div class="flex flex-col gap-2">
                <p class="font-body text-sm font-medium text-text-primary">{image.title}</p>
                <button
                  type="button"
                  class="group relative overflow-hidden rounded-lg border border-border-primary bg-white"
                  aria-label={`Open info architecture: ${image.title}`}
                  onclick={() => openInfoArchitectureModal(image)}
                >
                  <img src={image.src} alt={image.title} class="h-auto w-full" />
                  <span
                    class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 font-body text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    拡大表示
                  </span>
                </button>
              </div>
            {/each}
          </div>
        {/if}
      </section>

      <!-- Wireframe -->
      {#if project.detail.wireframe}
        <section id="wireframe" class="flex flex-col gap-4 scroll-mt-20">
          <h2
            class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
          >
            Wireframe
          </h2>
          {#if project.detail.wireframe.description}
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {project.detail.wireframe.description}
            </p>
          {/if}
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {#each project.detail.wireframe.images as img, index (index)}
              <button
                type="button"
                class="group w-full text-left"
                aria-label={`Open wireframe: ${img.title}`}
                onclick={() => openWireframeModal(img)}
              >
                <div>
                  <span class="font-body text-sm font-medium text-text-primary">{img.title}</span>
                  <span
                    class="relative block h-[200px] w-full overflow-hidden rounded-lg border border-border-primary bg-surface-base"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      class="h-full w-full object-cover object-top-left transition-transform duration-200 group-hover:scale-105"
                    />
                    <span
                      class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 font-body text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      拡大表示
                    </span>
                  </span>
                </div>
              </button>
            {/each}
          </div>
        </section>
      {/if}

      <!-- Visual Design -->
      {#if visualDesign}
        <section id="visual-design" class="flex flex-col gap-4 scroll-mt-20">
          <h2
            class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
          >
            Visual Design
          </h2>
          {#if visualDesign.description}
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {visualDesign.description}
            </p>
          {/if}

          {#if visualDesignImages.length && mainVisualDesignImage}
            <div class="flex flex-col gap-4">
              <p class="font-body text-sm font-medium text-text-primary">主要画面</p>
              <button
                type="button"
                class="group w-full text-left"
                aria-label={`Open visual design: ${mainVisualDesignImage.title}`}
                onclick={() => openVisualDesignModal(mainVisualDesignImage)}
              >
                <span class="block font-body text-xs font-medium text-text-primary">
                  {mainVisualDesignImage.title}
                </span>
                <span
                  class="relative mt-2 block overflow-hidden max-h-[400px] rounded-lg border border-border-primary bg-surface-base"
                >
                  <img
                    src={mainVisualDesignImage.src}
                    alt={mainVisualDesignImage.title}
                    class="h-auto w-full transition-transform duration-200 bg-cover bg-center group-hover:scale-105"
                  />
                  <span
                    class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 font-body text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    拡大表示
                  </span>
                </span>
              </button>
              {#if visualDesignImages.length > 1}
                <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {#each visualDesignImages.slice(1) as img, index (index)}
                    <button
                      type="button"
                      class="group w-full text-left"
                      aria-label={`Open visual design: ${img.title}`}
                      onclick={() => openVisualDesignModal(img)}
                    >
                      <span class="block font-body text-xs font-medium text-text-primary">
                        {img.title}
                      </span>
                      <span
                        class="relative mt-2 block overflow-hidden rounded-lg h-[160px] border border-border-primary bg-surface-base"
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          class="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                        />
                        <span
                          class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 font-body text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        >
                          拡大表示
                        </span>
                      </span>
                    </button>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}

          {#if visualDesign.colorPalette}
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div
                class="grid grid-cols-1 items-start gap-4 rounded-xl border border-border-primary bg-surface-base px-4 py-4"
              >
                <div
                  class="h-12 w-12 rounded-lg border border-border-primary"
                  style="background-color: {visualDesign.colorPalette.primaryColor}"
                ></div>
                <div class="flex flex-col gap-1">
                  <span class="font-body text-sm font-medium text-text-primary">
                    Primary Color
                  </span>
                  <span class="font-body text-xs text-text-muted">主要なアクション・強調色</span>
                </div>
              </div>

              <div
                class="grid grid-cols-1 items-start gap-4 rounded-xl border border-border-primary bg-surface-base px-4 py-4"
              >
                <div
                  class="h-12 w-12 rounded-lg border border-border-primary"
                  style="background-color: {visualDesign.colorPalette.accentColor}"
                ></div>
                <div class="flex flex-col gap-1">
                  <span class="font-body text-sm font-medium text-text-primary">
                    Accent Color
                  </span>
                  <span class="font-body text-xs text-text-muted">補助的な要素</span>
                </div>
              </div>

              <div
                class="grid grid-cols-1 items-start gap-4 rounded-xl border border-border-primary bg-surface-base px-4 py-4"
              >
                <div class="flex items-center gap-2">
                  <div
                    class="h-12 w-12 rounded-lg border border-border-primary"
                    style="background-color: {visualDesign.colorPalette.other?.[0]}"
                  ></div>
                  <div
                    class="h-12 w-12 rounded-lg border border-border-primary"
                    style="background-color: {visualDesign.colorPalette.other?.[1]}"
                  ></div>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="font-body text-sm font-medium text-text-primary">Other</span>
                  <span class="font-body text-xs text-text-muted">
                    背景/ボーダー/システム表示など
                  </span>
                </div>
              </div>
            </div>
          {/if}
        </section>
      {/if}

      <!-- UI Components -->
      {#if uiComponents}
        <section id="ui-components" class="flex flex-col gap-4 scroll-mt-20">
          <h2
            class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
          >
            UI Components / Design System
          </h2>

          {#if uiComponents?.description}
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {uiComponents.description}
            </p>
          {/if}
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <p class="font-body text-sm font-medium text-text-primary">デザインシステム</p>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div
                class="flex flex-col gap-3 rounded-xl border border-border-primary bg-surface-base p-4"
              >
                <h4 class="font-body text-base font-medium text-text-primary">Typography</h4>
                <ul class="flex flex-col gap-2 font-body text-sm text-text-muted">
                  {#each typographyItems as item, index (index)}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
              <div
                class="flex flex-col gap-3 rounded-xl border border-border-primary bg-surface-base p-4"
              >
                <h4 class="font-body text-base font-medium text-text-primary">Color System</h4>
                <div class="flex items-center gap-2">
                  <span
                    class="h-10 w-10 rounded-md border border-border-primary"
                    style="background-color: {resolvedColorPalette.primaryColor}"
                  ></span>
                  <span
                    class="h-10 w-10 rounded-md border border-border-primary"
                    style="background-color: {resolvedColorPalette.accentColor}"
                  ></span>
                  <span
                    class="h-10 w-10 rounded-md border border-border-primary"
                    style="background-color: {resolvedOtherColors[0]}"
                  ></span>
                  <span
                    class="h-10 w-10 rounded-md border border-border-primary"
                    style="background-color: {resolvedOtherColors[1]}"
                  ></span>
                </div>
                <p class="font-body text-sm text-text-muted">Primary / Accent / Neutral</p>
              </div>
              <div
                class="flex flex-col gap-3 rounded-xl border border-border-primary bg-surface-base p-4"
              >
                <h4 class="font-body text-base font-medium text-text-primary">Spacing</h4>
                <div class="flex flex-col gap-1">
                  <span class="h-2 w-6 rounded-full bg-text-muted/60"></span>
                  <span class="h-2 w-10 rounded-full bg-text-muted/60"></span>
                  <span class="h-2 w-14 rounded-full bg-text-muted/60"></span>
                  <span class="h-2 w-20 rounded-full bg-text-muted/60"></span>
                </div>
                <p class="font-body text-sm text-text-muted">8 / 16 / 24 / 32</p>
              </div>
            </div>
          </div>
          {#if uiComponentSections.length}
            <div class="flex flex-col gap-4">
              <p class="font-body text-sm font-medium text-text-primary">コンポーネント</p>
              {#each uiComponentSections as section, index (index)}
                <div class="flex flex-col gap-2">
                  <div
                    class="overflow-hidden rounded-lg bg-surface-base p-4 grid grid-cols-1 gap-2"
                  >
                    <p class="font-body text-sm font-medium text-text-primary pb-2 w-fit">
                      {section.title}
                    </p>
                    <div class="grid grid-cols-1 gap-3">
                      {#each section.images as image, imageIndex (imageIndex)}
                        <img
                          src={image}
                          alt={section.title}
                          class="w-full rounded-lg bg-white p-4"
                        />
                      {/each}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </section>
      {/if}

      <!-- Outcome -->
      <section id="outcome" class="flex flex-col gap-4 scroll-mt-20">
        <h2
          class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
        >
          Outcome
        </h2>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">
            {project.detail.outcome.sectionTitles?.[0] ?? '成果'}
          </h3>
          <ul class="flex flex-col gap-4">
            {#each project.detail.outcome.results as result, index (index)}
              <li class="flex items-start gap-3">
                <CheckIcon class="h-4 w-4" />
                <span class="font-body text-sm leading-relaxed text-text-primary">
                  {result}
                </span>
              </li>
            {/each}
          </ul>
        </div>

        <h3 class="font-body text-base font-medium text-text-primary">
          {project.detail.outcome.sectionTitles?.[1] ?? '学びと改善点'}
        </h3>
        <div
          class="flex flex-col gap-4 rounded-xl border border-border-primary bg-surface-base p-4"
        >
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.outcome.learnings as learning, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">
                {learning}
              </li>
            {/each}
          </ul>
        </div>
      </section>
    </article>

    <!-- 右側: 目次ナビ（デスクトップのみ表示） -->
    <aside class="hidden lg:block w-64 shrink-0">
      <nav class="sticky top-20 flex flex-col gap-2">
        <h3 class="font-body text-sm font-medium text-text-primary mb-2">目次</h3>
        {#each sections as section (section.id)}
          <button
            type="button"
            class={`text-left font-body text-sm leading-relaxed transition-colors ${
              activeSection === section.id
                ? 'text-brand-green font-medium border-l-2 border-brand-green pl-3'
                : 'text-text-muted hover:text-text-primary pl-3'
            }`}
            onclick={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        {/each}
      </nav>
    </aside>
  </div>

  <!-- フッター戻る -->
  <div class="border-t border-border-primary px-4 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10">
    <div class="mx-auto max-w-[1200px]">
      <a
        href="/"
        class="group inline-flex items-center gap-1 font-body text-sm text-brand-green pb-1 sm:text-base no-underline hover:no-underline"
        data-sveltekit-preload-data="hover"
      >
        <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
        <span class="underline">TOP に戻る</span>
      </a>
    </div>
  </div>

  {#if activeWireframeImage}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <button
        type="button"
        class="absolute inset-0"
        aria-label="Close modal"
        onclick={closeWireframeModal}
      ></button>
      <div
        class="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-lg sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Wireframe preview"
        tabindex="-1"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex flex-col gap-1">
            <h3 class="font-body text-lg font-medium text-text-primary">
              {activeWireframeImage.title}
            </h3>
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {activeWireframeImage.description}
            </p>
          </div>
          <button
            type="button"
            class="rounded-md border border-border-primary px-3 py-1 text-sm text-text-muted hover:text-text-primary"
            aria-label="Close modal"
            onclick={closeWireframeModal}
          >
            Close
          </button>
        </div>
        <div class="mt-4 overflow-hidden rounded-lg border border-border-primary bg-surface-base">
          <img
            src={activeWireframeImage.src}
            alt={activeWireframeImage.title}
            class="h-auto w-full bg-cover bg-top"
          />
        </div>
      </div>
    </div>
  {/if}

  {#if activeVisualDesignImage}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <button
        type="button"
        class="absolute inset-0"
        aria-label="Close modal"
        onclick={closeVisualDesignModal}
      ></button>
      <div
        class="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-lg sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Visual design preview"
        tabindex="-1"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex flex-col gap-1">
            <h3 class="font-body text-lg font-medium text-text-primary">
              {activeVisualDesignImage.title}
            </h3>
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {activeVisualDesignImage.description}
            </p>
          </div>
          <button
            type="button"
            class="rounded-md border border-border-primary px-3 py-1 text-sm text-text-muted hover:text-text-primary"
            aria-label="Close modal"
            onclick={closeVisualDesignModal}
          >
            Close
          </button>
        </div>
        <div class="mt-4 overflow-hidden rounded-lg border border-border-primary bg-surface-base">
          <img
            src={activeVisualDesignImage.src}
            alt={activeVisualDesignImage.title}
            class="h-auto w-full"
          />
        </div>
      </div>
    </div>
  {/if}

  {#if activeInfoArchitectureImage}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <button
        type="button"
        class="absolute inset-0"
        aria-label="Close modal"
        onclick={closeInfoArchitectureModal}
      ></button>
      <div
        class="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-lg sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Info architecture preview"
        tabindex="-1"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="font-body text-lg font-medium text-text-primary">
            {activeInfoArchitectureImage.title}
          </h3>
          <button
            type="button"
            class="rounded-md border border-border-primary px-3 py-1 text-sm text-text-muted hover:text-text-primary"
            aria-label="Close modal"
            onclick={closeInfoArchitectureModal}
          >
            Close
          </button>
        </div>
        <div class="mt-4 overflow-hidden rounded-lg border border-border-primary bg-surface-base">
          <img
            src={activeInfoArchitectureImage.src}
            alt={activeInfoArchitectureImage.title}
            class="h-auto w-full"
          />
        </div>
      </div>
    </div>
  {/if}
</div>
