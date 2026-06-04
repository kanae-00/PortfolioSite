<script lang="ts">
  import type { PageData } from './$types';
  import DefaultProjectDetail from '$lib/component/project/DefaultProjectDetail.svelte';
  import { projectDetailComponents } from '$lib/component/project/projectDetailRegistry';

  export let data: PageData;

  $: project = data.project;
  // id に対応する専用コンポーネントがあればそれを、無ければ共通テンプレートを使う
  $: DetailComponent = projectDetailComponents[project.id] ?? DefaultProjectDetail;
</script>

<svelte:component this={DetailComponent} {project} />
