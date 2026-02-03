export type ProjectCategoryPrimary = 'WEBシステム' | '業務システム';

export type ProjectCategorySecondary = 'UI/UX / Frontend' | 'UI/UX / Frontend / PM';

export type ProjectId = 'real-estate' | 'attendance-expense' | 'publish-site';

export interface Project {
  id: ProjectId;
  title: string;
  summary: string;
  period: string;
  categoryPrimary: ProjectCategoryPrimary;
  categorySecondary: ProjectCategorySecondary;
  image: string;
  /** 詳細ページ用: 本文段落 */
  description: string[];
  /** 詳細ページ用: 担当役割（任意） */
  role?: string;
  /** 詳細ページ用: 技術スタック（任意） */
  tech?: string[];
  /** 詳細ページ用: 関連URL（任意） */
  url?: string;
}
