import { error } from '@sveltejs/kit';
import { getProjectById } from '$lib/utils/projects';

export function load({ params }) {
  const project = getProjectById(params.id);
  if (!project) {
    throw error(404, { message: `プロジェクト "${params.id}" は見つかりません` });
  }
  return { project };
}
