<script lang="ts">
  import { projectsList } from '$lib/utils/projects';
  import { aboutCards } from '$lib/utils/aboutCards';
  import CalendarIcon from '$lib/component/icon/CalendarIcon.svelte';
  import type { AboutCard } from '$lib/types/about';

  let activeAboutIndex = 0;
  const aboutTotal = aboutCards.length;

  $: activeAboutCard = aboutCards[activeAboutIndex] as AboutCard;

  const filterOptions = [
    'UI/UX / Frontend',
    'UI/UX / Frontend / PM',
    'WEBシステム',
    '業務システム',
  ];
  let activeFilters: string[] = [];

  const toggleFilter = (label: string) => {
    activeFilters = activeFilters.includes(label)
      ? activeFilters.filter((item) => item !== label)
      : [...activeFilters, label];
  };

  $: filteredProjects =
    activeFilters.length === 0
      ? projectsList
      : projectsList.filter(
          (project) =>
            activeFilters.includes(project.categoryPrimary) ||
            activeFilters.includes(project.categorySecondary),
        );

  const updateAboutIndex = (nextIndex: number) => {
    activeAboutIndex = (nextIndex + aboutTotal) % aboutTotal;
  };

  const handleAboutPrev = () => updateAboutIndex(activeAboutIndex - 1);
  const handleAboutNext = () => updateAboutIndex(activeAboutIndex + 1);
  const handleAboutDotClick = (index: number) => updateAboutIndex(index);
</script>

<div class="top flex h-full w-full flex-col bg-white">
  <!-- Hero -->
  <section class="bg-white">
    <div
      class="mx-auto flex max-w-[1101px] flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:items-center sm:gap-6 sm:px-10 sm:py-12 lg:px-20 lg:py-16"
    >
      <!-- Profile image -->
      <div
        class="h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32 lg:h-[168px] lg:w-[168px]"
      >
        <img
          src="/profile/profile.jpg"
          alt="Kanae Mai profile"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- Text block -->
      <div class="flex-1 text-center sm:text-left">
        <div class="flex flex-col gap-1 sm:gap-2">
          <div
            class="font-display text-4xl font-medium leading-tight text-brand-green sm:text-5xl sm:leading-tight lg:text-[60px] lg:leading-[60px]"
          >
            Portfolio
          </div>
          <p
            class="font-jp text-sm leading-relaxed tracking-wide text-text-primary sm:text-base sm:leading-[27.2px] sm:tracking-[0.64px]"
          >
            叶 真衣 | かなえ まい
          </p>
          <p
            class="font-jp text-xs leading-relaxed tracking-wide text-brand-green sm:text-sm sm:leading-[23.8px] sm:tracking-[0.56px]"
          >
            Design Engineer
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="mt-8 flex w-full justify-center px-4 sm:mt-12 sm:px-10 lg:mt-16 lg:px-20">
    <div
      class="flex w-full max-w-[941px] flex-col items-center justify-center gap-6 rounded-lg bg-surface-base px-4 py-6 sm:gap-8 sm:px-10 sm:py-8 lg:gap-10 lg:px-20 lg:py-10"
    >
      <div class="flex w-full items-start">
        <h2 class="font-display text-4xl font-normal text-text-muted sm:text-5xl lg:text-[60px]">
          About
        </h2>
      </div>

      <div
        class="aboutcontainer flex w-full flex-col gap-6 lg:min-h-[492px] lg:flex-row lg:items-start lg:justify-between lg:gap-8"
      >
        <!-- Left: 01 + label + text -->
        <div class="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:max-w-[485px]">
          <div class="flex shrink-0 items-center lg:h-[60px] lg:w-[76px]">
            <p
              class="font-display text-4xl leading-tight text-text-muted sm:text-5xl lg:text-[60px] lg:leading-[60px]"
            >
              {activeAboutCard.id}
            </p>
          </div>

          <div class="flex flex-col gap-3 lg:min-w-0">
            <div class="flex items-center gap-3 border-l-4 border-brand-green pl-4">
              <p class="font-jp text-base leading-7 tracking-[0.64px] text-text-primary">
                {activeAboutCard.label}
              </p>
            </div>
            <div class="space-y-2">
              {#each activeAboutCard.paragraphs as paragraph, pIndex (pIndex)}
                <p
                  class="font-body text-sm leading-relaxed text-text-muted sm:text-base sm:leading-[27.2px]"
                >
                  {paragraph}
                </p>
              {/each}
            </div>
          </div>
        </div>

        <!-- Right: イラスト -->
        <div class="flex flex-col items-center shrink-0 lg:flex-row lg:items-center">
          <div
            class="relative h-[200px] w-full max-w-[328px] overflow-hidden rounded-lg bg-[#FDF7F0] sm:h-[320px] lg:h-[459px] lg:w-[328px]"
            aria-label={activeAboutCard.illustrationAlt}
          >
            <img
              src={activeAboutCard.illustrationPath}
              alt={activeAboutCard.illustrationAlt}
              class="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <!-- スライダー: 左矢印 ＋ ドット＋ページ番号 ＋ 右矢印（位置を揃える） -->
      <div class="flex flex-row items-center justify-center gap-4">
        <button
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-primary bg-surface-base sm:h-8 sm:w-8"
          aria-label="Previous item"
          type="button"
          onclick={handleAboutPrev}
        >
          <span class="inline-block h-2 w-2 border-l border-t border-brand-green rotate-[-45deg]"
          ></span>
        </button>
        <div class="flex flex-col items-center gap-2">
          <div class="relative flex flex-row items-center">
            <div
              class="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-border-primary/30"
            ></div>
            <div class="relative z-10 flex items-center gap-2">
              {#each aboutCards as _card, index (_card.id)}
                <button
                  type="button"
                  class={`h-3 w-3 shrink-0 rounded-full border transition-colors ${
                    index === activeAboutIndex
                      ? 'border-brand-green bg-brand-green'
                      : index < activeAboutIndex
                        ? 'border-primary bg-border-primary'
                        : 'border-border-primary bg-surface-base'
                  }`}
                  aria-label={`About セクション ${index + 1}`}
                  aria-current={index === activeAboutIndex ? 'true' : 'false'}
                  onclick={() => handleAboutDotClick(index)}
                ></button>
              {/each}
            </div>
          </div>
          <p class="font-display text-sm leading-5 text-brand-green">
            {String(activeAboutIndex + 1).padStart(2, '0')} / {String(aboutTotal).padStart(2, '0')}
          </p>
        </div>
        <button
          class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-primary bg-surface-base sm:h-8 sm:w-8"
          aria-label="Next item"
          type="button"
          onclick={handleAboutNext}
        >
          <span class="inline-block h-2 w-2 border-r border-b border-brand-green rotate-[-45deg]"
          ></span>
        </button>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section
    class="mt-12 w-full bg-white px-4 pb-16 sm:mt-16 sm:px-10 sm:pb-20 lg:mt-24 lg:px-20 lg:pb-24"
  >
    <div class="mx-auto flex w-full max-w-[941px] flex-col gap-6 sm:gap-8">
      <div class="flex items-start">
        <h2 class="font-display text-4xl font-normal text-text-muted sm:text-5xl lg:text-[60px]">
          Projects
        </h2>
      </div>

      <!-- Filter -->
      <div
        class="flex w-full flex-col items-start justify-start gap-4 rounded-lg border border-border-primary bg-white px-4 py-6 h-fit"
      >
        <div class="flex w-full items-center gap-3 border-b border-border-primary pb-2">
          <span class="font-body text-sm font-medium leading-5 text-text-primary sm:text-[14px]"
            >Filter</span
          >
          <span class="font-body text-sm leading-5 text-brand-green sm:text-[14px]"
            >{filteredProjects.length} projects</span
          >
        </div>
        <div class="flex flex-wrap gap-2">
          {#each filterOptions as option (option)}
            <button
              type="button"
              aria-pressed={activeFilters.includes(option)}
              class={`inline-flex h-9 items-center rounded-md border px-4 py-4 text-center font-body text-sm font-medium leading-5 transition-colors ${
                activeFilters.includes(option)
                  ? 'border-brand-green bg-brand-green text-white'
                  : 'border-border-primary bg-white text-brand-green'
              }`}
              onclick={() => toggleFilter(option)}
            >
              {option}
            </button>
          {/each}
        </div>
      </div>

      <!-- Project cards -->
      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each filteredProjects as project (project.id)}
          <a
            href="/projects/{project.id}"
            class="flex flex-col overflow-hidden group rounded-2xl border border-border-primary bg-white no-underline hover:no-underline focus-visible:no-underline transition-opacity hover:opacity-90"
            data-sveltekit-preload-data="hover"
          >
            <div
              class="relative aspect-[303/240] w-full overflow-hidden rounded-t-2xl bg-[#697065]"
            >
              <img
                src={project.image}
                alt={project.title}
                class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col gap-2 p-4">
              <h3
                class="font-body text-lg font-medium leading-snug tracking-[0.35px] text-text-primary sm:text-[20px] sm:leading-[35px] truncate"
              >
                {project.title}
              </h3>
              <p
                class="font-body text-sm leading-relaxed tracking-[0.41px] text-text-muted sm:text-[14px] sm:leading-[24.5px] h-[80px] overflow-hidden"
              >
                {project.summary}
              </p>

              <div class="flex items-center gap-1 font-body text-sm text-text-muted">
                <CalendarIcon class="h-4 w-4 shrink-0 rounded border border-[#697065]" />
                <span>
                  {project.period.split(' - ')[0]} - {project.period.split(' - ')[1]}
                </span>
              </div>

              <div class="mt-2 flex flex-wrap items-center gap-2">
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
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
</div>
