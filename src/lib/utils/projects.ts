import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'real-estate',
    title: '不動産業界コーポレートサイトリニューアル',
    summary:
      '利用目的を起点とした情報設計と導線の再構築を行い、可読性の向上・サービス理解を促進した',
    period: '2025年1月 - 2025年7月',
    categoryPrimary: 'WEBシステム',
    categorySecondary: 'UI/UX / Frontend',
    image: '/project/real-estate.webp',
    description: [
      '不動産会社のコーポレートサイトのリニューアルにおいて、利用目的を起点とした情報設計と導線の再構築を担当しました。',
      '既存サイトの課題分析とユーザー調査をもとに、サービス理解を促進するコンテンツ構成とナビゲーションを提案。実装ではフロントエンドを担当し、可読性の向上とアクセシビリティを意識したマークアップを行いました。',
    ],
    role: 'UI/UX Design, Frontend',
    tech: ['HTML/CSS', 'JavaScript', 'Figma'],
  },
  {
    id: 'attendance-expense',
    title: '勤怠・経費管理システム開発（社内DX）',
    summary: '煩雑な手作業を自動化し、従業員の入力負担軽減と総務の処理時間を大幅に削減',
    period: '2024年3月 - 2025年4月',
    categoryPrimary: '業務システム',
    categorySecondary: 'UI/UX / Frontend',
    image: '/project/attendance-expense.webp',
    description: [
      '社内の勤怠・経費申請を一元管理するシステムの企画から開発まで参画しました。',
      '申請フローの可視化と入力項目の最適化により、従業員の入力負担を軽減。総務側の承認・集計作業の効率化にもつなげました。',
    ],
    role: 'UI/UX Design, Frontend, PM',
    tech: ['React', 'TypeScript', 'Figma'],
  },
  {
    id: 'publish-site',
    title: '出版業界サーバーリプレイス、サイトリニューアル',
    summary: '複数サーバーに分散していたWordPress環境の統合と、ユーザー体験に直結する共通領域を',
    period: '2023年8月 - 2024年4月',
    categoryPrimary: 'WEBシステム',
    categorySecondary: 'UI/UX / Frontend',
    image: '/project/publish-site.webp',
    description: [
      '出版系の複数サイトで分散していたWordPress環境の統合と、共通テーマ・コンポーネントの設計を担当しました。',
      'ユーザー体験に直結する共通領域（ヘッダー・フッター・検索）のリニューアルと、運用負荷を下げるための管理画面の改善を行いました。',
    ],
    role: 'UI/UX Design, Frontend',
    tech: ['WordPress', 'PHP', 'JavaScript', 'Figma'],
  },
];

/** id からプロジェクトを1件取得。存在しなければ null */
export function getProjectById(id: string): Project | null {
  return projects.find((p) => p.id === id) ?? null;
}
