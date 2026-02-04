<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import PeopleIcon from '$lib/component/icon/PeopleIcon.svelte';
  import WatchIcon from '$lib/component/icon/watchIcon.svelte';
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
</script>

<svelte:head>
  <title>{project.title} | Portfolio | 叶 真衣</title>
  <meta name="description" content={project.summary} />
</svelte:head>

<div class="flex flex-col bg-white">
  <!-- 戻るリンク -->
  <div class="w-full px-4 pt-6 sm:px-10 sm:pt-8 lg:px-20 lg:pt-10">
    <a
      href="/"
      class="font-body text-sm text-brand-green hover:underline sm:text-base"
      data-sveltekit-preload-data="hover"
    >
      ← TOP に戻る
    </a>
  </div>

  <!-- メインコンテンツ -->
  <div
    class="mx-auto flex w-full max-w-[1200px] gap-8 px-4 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10"
  >
    <!-- 左側: メインコンテンツ -->
    <article class="flex-1 flex flex-col gap-12">
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

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">User Problems</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.background.userProblems as problem, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{problem}</li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">Existing Issues</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.background.existingIssues as issue, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{issue}</li>
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
          <h3 class="font-body text-base font-medium text-text-primary">Project Goals</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.goals.projectGoals as goal, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{goal}</li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">User Requirements</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.goals.userRequirements as req, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{req}</li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">Business Requirements</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.goals.businessRequirements as req, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{req}</li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">Constraints</h3>
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
          <h3 class="font-body text-base font-medium text-text-primary">Principles</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.uxStrategy.principles as principle, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">
                {principle}
              </li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-body text-base font-medium text-text-primary">Prioritization</h3>
          <p class="font-body text-sm leading-relaxed text-text-muted">
            {project.detail.uxStrategy.prioritization}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-body text-base font-medium text-text-primary">Design Rationale</h3>
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
        <p class="font-body text-sm leading-relaxed text-text-muted">
          {project.detail.infoArchitecture.screenStructure}
        </p>
        <p class="font-body text-sm leading-relaxed text-text-muted">
          {project.detail.infoArchitecture.flowDescription}
        </p>

        {#if project.detail.infoArchitecture.images}
          <div class="flex flex-col gap-4">
            {#each project.detail.infoArchitecture.images as img, index (index)}
              <img
                src={img}
                alt="Info Architecture"
                class="w-full rounded-lg border border-border-primary"
              />
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
              <img
                src={img}
                alt="Wireframe"
                class="w-full rounded-lg border border-border-primary"
              />
            {/each}
          </div>
        </section>
      {/if}

      <!-- Visual Design -->
      {#if project.detail.visualDesign}
        <section id="visual-design" class="flex flex-col gap-4 scroll-mt-20">
          <h2
            class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
          >
            Visual Design
          </h2>
          {#if project.detail.visualDesign.description}
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {project.detail.visualDesign.description}
            </p>
          {/if}

          {#if project.detail.visualDesign.colorPalette}
            <div class="flex flex-col gap-2">
              <h3 class="font-body text-base font-medium text-text-primary">Color Palette</h3>
              <div class="flex gap-3">
                <div class="flex flex-col gap-1 items-center">
                  <div
                    class="h-12 w-12 rounded-lg border border-border-primary"
                    style="background-color: {project.detail.visualDesign.colorPalette
                      .primaryColor}"
                  ></div>
                  <span class="font-mono text-xs text-text-muted"
                    >{project.detail.visualDesign.colorPalette.primaryColor}</span
                  >
                </div>
                <div class="flex flex-col gap-1 items-center">
                  <div
                    class="h-12 w-12 rounded-lg border border-border-primary"
                    style="background-color: {project.detail.visualDesign.colorPalette.accentColor}"
                  ></div>
                  <span class="font-mono text-xs text-text-muted"
                    >{project.detail.visualDesign.colorPalette.accentColor}</span
                  >
                </div>
                {#if project.detail.visualDesign.colorPalette.other}
                  {#each project.detail.visualDesign.colorPalette.other as color, index (index)}
                    <div class="flex flex-col gap-1 items-center">
                      <div
                        class="h-12 w-12 rounded-lg border border-border-primary"
                        style="background-color: {color}"
                      ></div>
                      <span class="font-mono text-xs text-text-muted">{color}</span>
                    </div>
                  {/each}
                {/if}
              </div>
            </div>
          {/if}

          <div class="flex flex-col gap-4">
            {#each project.detail.visualDesign.images as img, index (index)}
              <img
                src={img}
                alt="Visual Design"
                class="w-full rounded-lg border border-border-primary"
              />
            {/each}
          </div>
        </section>
      {/if}

      <!-- UI Components -->
      {#if project.detail.uiComponents}
        <section id="ui-components" class="flex flex-col gap-4 scroll-mt-20">
          <h2
            class="font-display text-2xl font-normal text-text-primary border-b border-border-primary pb-2"
          >
            UI Components / Design System
          </h2>
          {#if project.detail.uiComponents.description}
            <p class="font-body text-sm leading-relaxed text-text-muted">
              {project.detail.uiComponents.description}
            </p>
          {/if}
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {#each project.detail.uiComponents.images as img, index (index)}
              <img
                src={img}
                alt="UI Components"
                class="w-full rounded-lg border border-border-primary"
              />
            {/each}
          </div>
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
          <h3 class="font-body text-base font-medium text-text-primary">Results</h3>
          <ul class="flex flex-col gap-2 pl-5">
            {#each project.detail.outcome.results as result, index (index)}
              <li class="font-body text-sm leading-relaxed text-text-muted list-disc">{result}</li>
            {/each}
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-body text-base font-medium text-text-primary">Learnings</h3>
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
        class="font-body text-sm text-brand-green hover:underline sm:text-base"
        data-sveltekit-preload-data="hover"
      >
        ← TOP に戻る
      </a>
    </div>
  </div>
</div>
