import type { ComponentType } from 'svelte';
import RealEstateDetail from './RealEstateDetail.svelte';

/**
 * プロジェクト id ごとに専用デザインのコンポーネントを割り当てる。
 * ここに登録されていない id は DefaultProjectDetail（共通テンプレート）で表示される。
 * 新しく個別デザインにしたいプロジェクトは、専用コンポーネントを作成してここに追加する。
 */
export const projectDetailComponents: Record<string, ComponentType> = {
  'real-estate-site-renewal': RealEstateDetail,
};
