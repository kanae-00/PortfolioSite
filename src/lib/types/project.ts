export type ProjectCategoryPrimary = 'WEBシステム' | '業務システム';

export type ProjectCategorySecondary = 'UI/UX / Frontend' | 'UI/UX / Frontend / PM';

export type ProjectId = 'real-estate' | 'attendance-expense' | 'publish-site';

export interface Project {
  // 基本情報（一覧表示用）
  id: string;
  title: string;
  summary: string;
  period: string;
  categoryPrimary: string;
  categorySecondary: string;
  image: string;

  // 詳細ページ用の構造化データ
  detail: {
    // Overview
    overview: {
      summary: string;
      role: string;
      timeline: string;
      team: string;
    };

    // Background & Issues
    background: {
      context: string;
      userProblems: string[];
      existingIssues: string[];
    };

    // Goals & Requirements
    goals: {
      projectGoals: string[];
      userRequirements: string[];
      businessRequirements: string[];
      constraints: string[];
    };

    // UX Strategy
    uxStrategy: {
      principles: string[];
      prioritization: string;
      designRationale: string;
    };

    // Info Architecture
    infoArchitecture: {
      screenStructure: string;
      flowDescription: string;
      screenStructureImages?: Array<{
        src: string;
        title: string;
      }>; // 画面構造図など
      flowImages?: Array<{
        src: string;
        title: string;
      }>; // サイトマップ、画面遷移図など
    };

    // Use Cases / User Flow
    useCases: {
      scenarios: Array<{
        title: string;
        steps: string[];
      }>;
    };

    // Wireframe
    wireframe?: {
      images: Array<{
        src: string;
        title: string;
        description: string;
      }>;
      description?: string;
    };

    // Visual Design
    visualDesign?: {
      images: Array<{
        src: string;
        title: string;
        description: string;
      }>;
      colorPalette?: {
        primaryColor: string;
        accentColor: string;
        other?: string[];
      };
      description?: string;
    };

    // UI Components / Design System
    uiComponents?: {
      designSystem?: {
        typography: string[];
      };
      sections: Array<{
        title: string;
        images: string[];
      }>;
      description?: string;
    };

    // Outcome
    outcome: {
      sectionTitles: string[];
      results: string[];
      learnings: string[];
    };
  };
}
