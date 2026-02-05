import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getProjectById } from '$lib/utils/projects';

export const load: PageServerLoad = ({ params }) => {
  const project = getProjectById(params.id);
  if (!project) {
    throw error(404, { message: `プロジェクト "${params.id}" は見つかりません` });
  }
  return { project };
};
