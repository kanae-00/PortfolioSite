import type { Project } from '../types/project';

export const projectsList: Project[] = [
  {
    // 基本情報
    id: 'real-estate-site-renewal',
    title: '不動産業界サイトリニューアル',
    summary:
      '利用目的を起点とした情報設計と導線の再構築を行い、可読性の向上・サービス理解を促進した',
    period: '2025年1月 - 2025年7月',
    categoryPrimary: 'WEBシステム',
    categorySecondary: 'UI/UX / Frontend',
    image: '/project/real-estate.webp',

    // 詳細ページ用データ
    detail: {
      overview: {
        summary:
          '複数のユーザーユースケースが整理されていないサイトに対し、利用目的を起点とした情報設計と導線の再構築を行い、企業・サービス理解を促進する構成へ刷新した。',
        role: 'UI/UXデザイン / フロントエンド実装 / 要件定義',
        timeline: '2025年1月 - 2025年7月31日 (7ヶ月)',
        team: 'PM 1名 / デザインエンジニア 1名 (自分) / フロントエンド 1名 / バックエンド 1名',
      },

      background: {
        context:
          '不動産業界のコーポレートサイトにおいて、複数のユーザーユースケースを想定すべきにも関わらず、情報設計や導線が整理されておらず、ユーザーが目的の情報に到達しづらい状態となっていた。',
        userProblems: [
          '入居・投資・金融機関・リノベーションなど、立場ごとに必要な情報が異なるにも関わらず、どこから情報を探せばよいか分かりづらい',
          '情報が一律に並列配置されており、自身の目的に合った情報を素早く見つけられない',
          '回遊中にサービス情報・会社情報・採用情報の区別がつかず、目的を見失いやすい',
        ],
        existingIssues: [
          'ユーザーの利用目的を起点とした情報設計・導線設計が行われていない',
          '企業ブランドが十分に反映されたUIデザインになっていない',
          '更新頻度の高いコンテンツをCMSで適切に管理できておらず、情報の鮮度が保てていない',
          '情報更新を外部制作会社に依存しており、更新対応に時間がかかっている',
        ],
      },

      goals: {
        projectGoals: [
          '利用目的別に情報へアクセスできる導線を整備する',
          '企業ブランドを反映したUIデザインを構築する',
          'CMS運用を可能にし、情報更新の迅速化を実現する',
        ],
        userRequirements: [
          '自身の立場に応じて必要な情報へ素早くアクセスできる',
          'サービス情報・会社情報・採用情報の区別が明確で、回遊中に迷わない',
          '企業の信頼性や専門性が視覚的に伝わる',
        ],
        businessRequirements: [
          '問い合わせや資料請求などのコンバージョンを促進する',
          '情報更新を内製化し、外部依存を削減する',
          'ブランド価値を向上させ、競合との差別化を図る',
        ],
        constraints: [
          'ユースケース毎の動線入口を配置する',
          '7ヶ月以内にリニューアルを完了させる',
          '運用担当者がCMSを容易に扱えるようにする',
        ],
      },

      uxStrategy: {
        principles: [
          'ユースケースごとに情報を切り分け、認知負荷を下げる',
          'ユーザーの利用目的を起点に導線を設計する',
          '迷わせず、最短距離で目的の情報へ到達できる構造をつくる',
        ],
        prioritization:
          'マンション入居者、投資用購入・売却者、金融機関、リノベーション希望者といった主要ユースケースを定義し、それぞれに必要な情報を優先的に配置。従来3クリック以上必要だった情報については、トップページおよびグローバルナビゲーションから直接アクセスできる導線を設計した。',
        designRationale:
          '情報が並列に配置されていた状態を見直し、カード型UIやメガメニューを採用。異なるセグメントの導線が共存しても視認性を損なわない構造とし、ユーザーが自身の立場に応じて直感的に行動できる設計を目指した。',
      },

      infoArchitecture: {
        screenStructure:
          'トップページを起点に、利用目的別の導線を明確化。サービス情報・会社情報・採用情報の境界を整理し、3クリック以内で必要情報に到達する構造とした。',
        flowDescription:
          'トップページで利用目的を選択 → 関連情報を集約した中間ページへ遷移 → 詳細情報へ到達、というシンプルで迷いの少ない導線を設計。',
        screenStructureImages: [
          {
            src: '/project/real-estate/InfoArchitectureUI.svg',
            title: 'グローバルメニュー',
          },
        ],
      },

      useCases: {
        scenarios: [
          {
            title: 'マンション入居者が管理会社の連絡先を探す',
            steps: [
              'トップページから「入居者の方へ」を選択',
              '管理会社一覧ページへ遷移',
              '該当する物件名から管理会社の連絡先を確認',
            ],
          },
          {
            title: '投資検討者が投資用物件の購入を検討する',
            steps: [
              'トップページから「投資をお考えの方へ」を選択',
              '販売実績や物件情報を閲覧',
              '問い合わせフォームから資料請求',
            ],
          },
          {
            title: 'リノベーション検討者がマンションリノベーションを検討する',
            steps: [
              'トップページから「フルリノベーションマンション」を選択',
              '販売実績やこだわりポイントを閲覧',
              '問い合わせフォームから資料請求',
            ],
          },
          {
            title: '金融機関の方が企業情報を調べる',
            steps: [
              'グローバルナビゲーションから「会社情報」を選択',
              '企業理念や事業内容を確認',
              '必要に応じて事業詳細を確認',
            ],
          },
        ],
      },

      wireframe: {
        images: [
          {
            src: '/project/real-estate/PIM-hero.webp',
            title: 'トップページ',
            description:
              'ブランドイメージを重視し、ファーストビューと、主要導線を目立つ位置に配置。',
          },
          {
            src: '/project/real-estate/PIM-global-menu.webp',
            title: 'グローバルメニュー',
            description: '主要カテゴリへの導線を一目で把握できるナビ設計。',
          },
          {
            src: '/project/real-estate/PIM-news.webp',
            title: 'お知らせエリア',
            description:
              '新着のお知らせを訴求する動線を設置。ユーザーが見たい情報を選択できるようカテゴリを表記。',
          },
          {
            src: '/project/real-estate/PIM-real-estate-section.webp',
            title: 'サービス導線セクション',
            description:
              '利用目的別の導線が分かるカード配置。ユーザーが迷わないようにするための構成。',
          },
        ],
        description: 'トップページと主要サービスページのワイヤーフレーム',
      },

      visualDesign: {
        images: [
          {
            src: '/project/real-estate/PIM-design-top.webp',
            title: 'トップページ',
            description: 'ブランドイメージを重視し、動画を取り入れたメインビジュアル構成。',
          },
          {
            src: '/project/real-estate/PIM-design-news.webp',
            title: 'お知らせ',
            description: '見慣れたカードレイアウトで情報を整理。',
          },
          {
            src: '/project/real-estate/PIM-design-global-menu.webp',
            title: 'グローバルナビゲーション',
            description: 'ナビゲーションで利用目的別に遷移できるようにするための構成。',
          },
          {
            src: '/project/real-estate/PIM-design-real-estate-section.webp',
            title: '主要コンテンツの紹介',
            description: 'コンテンツを見出し表示し、整理。ユーザーが迷わないようにするための構成。',
          },
        ],
        colorPalette: {
          primaryColor: '#152B58',
          accentColor: '#AC3939',
          other: ['#B2A799', '#EBE6E5'],
        },
        description: '企業ブランドを反映した視覚設計',
      },

      uiComponents: {
        designSystem: {
          typography: [
            '見出し: 太字',
            'フォント: Zen Kaku Gothic New / Zen Old Mincho',
            '16px 基準スケール',
          ],
        },
        sections: [
          { title: 'Buttons', images: ['/project/real-estate/button-components.webp'] },
          {
            title: 'Cards',
            images: [
              '/project/real-estate/card-components-2.webp',
              '/project/real-estate/card-components.webp',
            ],
          },
        ],
        description: '再利用可能なUIコンポーネント設計',
      },

      outcome: {
        sectionTitles: ['成果', '学びと改善点'],
        results: [
          '利用目的別に情報へアクセスできる導線を整備し、ユーザーが迷わず目的の情報へ到達できる構成を実現',
          '回遊性を高めつつ、最短ルートでのコンバージョン（問い合わせ・資料請求）を促進',
          'CMS運用を定着させ、クライアント側での情報更新を可能にした',
        ],
        learnings: [
          'ユースケースを起点とした情報設計が、サイト理解度と回遊性に大きく影響することを再認識した',
          'UI設計と実装を一貫して行うことで、設計意図を損なわないアウトプットが可能になると実感した',
          'CMS設計は機能選定だけでなく、運用フローまで含めて設計することが重要であると学んだ',
        ],
      },
    },
  },

  {
    // 基本情報
    id: 'attendance-expense-system',
    title: '勤怠経費管理システム(社内DX)',
    summary: '煩雑な手作業を自動化し、従業員の入力負担軽減と総務の処理時間を大幅に削減',
    period: '2024年3月 - 2025年4月',
    categoryPrimary: '業務システム',
    categorySecondary: 'UI/UX / Frontend',
    image: '/project/attendance-expense.webp',

    // 詳細ページ用データ
    detail: {
      overview: {
        summary:
          '紙やExcelで管理していた勤怠・経費処理を統合システム化し、従業員の入力負担軽減と総務部門の処理時間削減を実現。直感的な操作性と承認フローの可視化により、運用定着率の向上を図った。',
        role: 'UI/UXデザイン / フロントエンド実装 / 要件定義',
        timeline: '2024年3月 - 2025年4月（継続中 : 14ヶ月）',
        team: 'PM 1名 / デザインエンジニア 1名 (自分) / フロントエンド 3名 / バックエンド 3名',
      },

      background: {
        context:
          '社内の勤怠管理・経費精算が紙やExcelベースで運用されており、従業員の入力ミス、承認遅延、総務部門の集計作業に多大な工数が発生していた。また、リモートワークの増加により、紙ベースの運用が限界を迎えていた。',
        userProblems: [
          '従業員：紙やExcelでの入力が煩雑で、入力ミスや転記ミスが頻発している。承認状況が分からず不安',
          '総務担当：承認依頼が埋もれやすく、対応漏れが発生する',
          '総務担当：リモートワーク環境下で紙ベースの運用が困難',
          '総務担当：手作業での集計・チェックに膨大な時間がかかり、ミスも多い',
        ],
        existingIssues: [
          '申請者は「モバイルファーストな操作性」ができ、管理者は「並列確認可能なダッシュボード」で確認を可能にする。判断スピードを最大化。',
          '総務の業務効率化のため、属人化している承認フローを可視化 / 最適化し、承認体制を確定',
          '動的バリデーションの実装により、不整合なデータを入り口で遮断。',
          '勤怠申請情報の進捗/申請状況を可視化し一括管理する',
        ],
      },

      goals: {
        projectGoals: [
          '勤怠・経費申請における入力・確認工数の削減',
          '直感的なUIにより、ITリテラシーに依らず誰でも使える仕組みをつくる',
          '申請者は「モバイルファーストな操作性」、管理者はPCから操作 / 管理可能にする。判断スピードを最大化。',
          '承認フローを可視化し、処理の遅延を防ぐ',
        ],
        userRequirements: [
          '従業員：スマホからでも簡単に勤怠入力・経費申請ができる',
          '総務担当：承認待ち、修正待ちのタスクが一目で分かり、迅速に対応できる',
          '総務担当：管理状況や申請情報のフォーマット以外の入力を無くし、確認範囲を削減し正確性を担保できる',
        ],
        businessRequirements: [
          '総務部門の勤怠経費処理時間を20%以上削減する',
          '承認遅延を20%削減し、精算サイクルを短縮する',
          'データの一元管理により、対応管理を効率化する',
        ],
        constraints: [
          '管理者画面と社員画面を設置する',
          'スマートフォンでも使用可能にする',
          'システム上からパスワード変更を可能とする',
          'セキュリティ要件を満たし、個人情報を適切に管理する',
        ],
      },

      uxStrategy: {
        principles: [
          '業務フローに沿った自然な操作導線を設計する',
          '承認フローをビジュアル化し、現在のステータスを直感的に把握できるようにする',
          '入力時点でミスを防ぎ、確認負荷を減らす',
        ],
        prioritization:
          '勤怠・経費精算を「一気通貫」で完結できる体験設計とするためロール（一般社員 / 管理者・総務）ごとに業務フローおよびユースケースを整理、その内容をベースにUIを最適化した。また、承認・否認時のフィードバックをUIで明確化し、状態・理由が一目で理解可能になった。',
        designRationale:
          '従来の紙・Excelの運用フローを尊重しつつ、デジタル化による利点（自動計算、リアルタイム反映、承認通知）を最大限に活用。また、一般社員・管理者それぞれの視点を考慮し、同一画面内でもログインロールで表示内容を変更し、役割ごとの認知負荷が高まらない情報密度と視線誘導を設計。既存業務に馴染みやすいUIとしつつ、新しい価値を提供することを重視した。',
      },

      infoArchitecture: {
        screenStructure:
          'お知らせや重要事項を読んで欲しい意図があったため、主要アクション（勤怠・経費）へ1クリックアクセスではなく、トップページ / ナビゲーションに配置。2アクションで遷移する構成とした。',
        flowDescription:
          'トップページまたはサイドナビで利用目的を選択 → 入力・確認したいページへ遷移 → 目的を到達、というシンプルで迷いの少ない導線を設計。',
        flowImages: [
          { src: '/project/attendance-expense/info.webp', title: 'サイドナビゲーション' },
          { src: '/project/attendance-expense/info-top.webp', title: 'トップページ一部セクション' },
        ],
      },

      useCases: {
        scenarios: [
          {
            title: '従業員が月末に勤怠データを入力する',
            steps: [
              'ダッシュボードから「勤怠入力」を選択',
              'カレンダー形式で出勤・退勤時刻を入力（自動計算により残業時間が表示される）',
              '確認画面で内容をチェックし、送信',
            ],
          },
          {
            title: '従業員が交通費を申請する',
            steps: [
              'ダッシュボードから「経費申請」を選択',
              '申請種別（交通費）を選択し、日付・区間・金額を入力',
              '領収書をスマホで撮影してアップロード',
              '確認画面で内容をチェックし、送信',
            ],
          },
          {
            title: '総務担当が経費申請を承認する',
            steps: [
              'ダッシュボードの承認待ちタスクから対象の申請を選択',
              '申請内容と領収書を確認',
              '承認ボタンをクリック（問題があれば差戻しコメントを入力）',
            ],
          },
          {
            title: '総務担当が月次の経費精算を行う',
            steps: [
              'ダッシュボードから「承認済み一覧」を選択',
              '対象月の経費データを確認し、精算処理を実行',
              '給与システムへのインポート用CSVをダウンロード',
            ],
          },
        ],
        flowImages: [{ src: '/project/attendance-expense/usecases.webp', title: 'ユースケース図' }],
      },

      wireframe: {
        images: [
          {
            src: '/project/attendance-expense/UIdoc-login.webp',
            title: 'ログイン画面',
            description:
              'システムへのアクセスを認証する画面はロールで表示される機能が変わる。管理者は「管理者機能」が表示される。',
          },
          {
            src: '/project/attendance-expense/UIdoc-top.webp',
            title: 'トップ画面',
            description: '入力ミスを防ぐための情報配置と導線整理。',
          },
          {
            src: '/project/attendance-expense/UIdoc-attndance.webp',
            title: '勤怠画面',
            description: '当日の勤怠入力を行う画面。出退勤、休憩時間、休暇申請を入力できる。',
          },
          {
            src: '/project/attendance-expense/UIdoc-admin.webp',
            title: '管理者-勤怠経費管理画面',
            description:
              '選択月の勤怠経費管理画面。承認待ち、修正待ちのタスクが一目で分かり、迅速に修正依頼、書類出力対応できる。',
          },
        ],
        description: '主要画面の画面設計書兼ワイヤーフレーム',
      },

      visualDesign: {
        images: [
          {
            src: '/project/attendance-expense/design-top.webp',
            title: 'ホーム',
            description:
              '主要遷移先とお知らせ・アラートを配置したホーム画面。画面の大きさはPC / スマホで異なる。',
          },
          {
            src: '/project/attendance-expense/design-attndance.webp',
            title: '勤怠管理',
            description: '当日の勤怠を行う画面。「出勤」「退勤」「退勤確認」の遷移画面',
          },
          {
            src: '/project/attendance-expense/design-expenses.webp',
            title: '経費精算',
            description: '当月の経費登録を行う画面。',
          },
          {
            src: '/project/attendance-expense/design-admin.webp',
            title: '管理者-経費精算承認・修正画面',
            description: '経費登録の承認・修正を行う画面。',
          },
        ],
        colorPalette: {
          primaryColor: '#2563eb',
          accentColor: '#475569',
          other: ['#e5e7eb', '#dc2626', '#16a34a', '#936b00'],
        },
        description:
          '直感的な操作を実現するため、主要動線をトップナビゲーションとサイドナビゲーションに配置した。文字のみでは判別しづらい要素にはアイコンを併記し、視認性と理解のしやすさを向上させた。関連性の高い項目はグルーピングし、カードUIで構造化することで、情報の優先度を明確にした。アクセシビリティについてはWCAG 2.1 AA基準に準拠し、テキストと背景のコントラスト比4.5:1以上を確保した配色設計を行った。',
      },

      uiComponents: {
        designSystem: {
          typography: ['見出し: 太字', '本文: レギュラー', '16px 基準スケール'],
        },
        sections: [
          { title: 'Button', images: ['/project/attendance-expense/button-components.webp'] },
          { title: 'Card', images: ['/project/attendance-expense/card-components.webp'] },
          { title: 'Toaster', images: ['/project/attendance-expense/toaster-components.webp'] },
          { title: 'Tables', images: ['/project/attendance-expense/table-components.webp'] },
        ],
        description: '業務システム向けUIコンポーネント設計',
      },

      outcome: {
        sectionTitles: ['想定効果(要件定義時の試算)', '学びと改善点'],
        results: [
          '総務部門の月次処理時間を60%削減見込み(従来約20~40時間 → 約10時間)',
          '勤怠登録、申請、承認ワークフローのデジタル化により、精算サイクルの短縮を目指す',
          '今後の展開：バックエンド実装完了後、段階的な社内展開を予定',
          '今後の展開：社内でパイロットチームを作り、段階的にテストを実施し、早期フィードバックを得る',
        ],
        learnings: [
          '既存業務フローを理解した上で、デジタル化の利点を活かす設計が重要であると実感した',
          '段階的リリースの重要性:当初「全機能完成後に公開」という計画だったが、フロントエンド完成時点で限定ユーザーによるUIテストを実施する選択肢もあった。早期フィードバックを得る機会を逃したことが反省点。次回は、プロジェクト開始時に段階公開の計画とテスト設計を組めるようにしたい',
          'ITリテラシーの異なるユーザーが混在する場合、デザインと操作のトレードオフをどこまで許容するか方針を定め設計することが必要',
          '運用マニュアルや研修計画を、開発フェーズから並行して準備すべき',
        ],
      },
    },
  },

  {
    // 基本情報
    id: 'publish-site-renewal',
    title: '出版業界サイトリニューアル',
    summary:
      '複数サーバーに分散していたWordPress環境の統合と、ユーザー体験に直結する共通領域を刷新した',
    period: '2023年8月 - 2024年4月',
    categoryPrimary: 'WEBシステム',
    categorySecondary: 'UI/UX / Frontend / PM',
    image: '/project/publish-site.webp',

    // 詳細ページ用データ
    detail: {
      overview: {
        summary:
          '複数サーバーに分散していたWordPress環境の統合と、ユーザー体験に直結する共通領域の刷新にフォーカスした戦略的リニューアルを実施。限られた予算・工期の中で、管理効率とUX・ブランド価値の最大化を目指した。',
        role: 'UI/UXデザイン / フロントエンド実装 / 制作チームリーダー',
        timeline: '2023年8月 - 2024年4月',
        team: 'PM 1名 (自分) / デザインエンジニア 1名 (自分) / フロントエンド 1名 / バックエンド 1名',
      },

      background: {
        context:
          '出版業界公式サイトにおいて、サーバー老朽化に伴うリプレイスが必要となったことをきっかけに、サイト全体の管理基盤とUXの見直しが求められていた。当初は全面リニューアルを想定していたが、予算・工期の制約を踏まえ、「効果が最大化する領域に集中する」方針へ転換した。',
        userProblems: [
          '6以上の複数のレーベルや膨大な書籍情報の中から、必要条件に合う書籍を探しづらい',
          'レーベルの新規追加を検討しているが、レーベルページのソースコードがブラックボックス化していて新規追加方法がわからない',
          'トップページから各レーベルページへの導線がわかりづらい',
        ],
        existingIssues: [
          'WordPressが複数サーバーに分散し、保守・更新コストが肥大化',
          '現行では書籍検索が存在しない、「タグ」「ジャンル」「著者名」などの詳細情報を管理したい',
          'コーポレート領域のデザインが硬く、自社ブランド表現ができていないため、コーポレート領域のデザインを刷新したい',
          'ページ内で新レーベルの登録・編集・追加ができず、マルチサイト化してWordPressを複数管理する状態になり、管理が煩雑になっている。',
        ],
      },

      goals: {
        projectGoals: [
          '管理基盤を統合し、保守・運用コストを削減',
          'ユーザーが目的の書籍に最短で到達できるUXを実現',
          '新レーベルをマルチサイト化せずに、1つのテンプレートとして追加可能にする',
        ],
        userRequirements: [
          'タイトル・著者・ジャンル・レーベル名など複数条件で検索できる。',
          '関連書籍や同著者作品を自然に見つけたい',
          'レーベルのお知らせを確認したい',
          '複数レーベルを跨いで書籍を見つけたい',
        ],
        businessRequirements: [
          '限られた予算の中でのUI/UX刷新',
          'マルチサイトのレーベル統合化',
          '書籍情報整理、管理',
        ],
        constraints: [
          '予算・工期の制限あり',
          '既存WordPress資産を最大限活用',
          '新レーベル追加を可能とする',
        ],
      },

      uxStrategy: {
        principles: [
          '「探す」から「辿り着ける」検索体験へ',
          '管理都合ではなく、ユーザー行動起点の導線設計',
          'コーポレートのイメージ刷新、レーベルの個性を両立',
        ],
        prioritization:
          '全面刷新ではなく、UXへの影響が最も大きい「検索・回遊・共通領域」に投資する戦略を採用。書籍詳細検索を体験の起点とし、その先で自然に作品世界へ没入できる導線を設計した。',
        designRationale:
          '従来、書籍を横断的に探す検索機能が存在せず、ユーザーが目的の書籍に辿り着くまでに多くの回遊を要していたため、探索体験の起点として検索機能を新たに設計・追加した。検索条件をタイトル・レーベル・著者名に限定せず、タグやジャンルを含めた複合検索を可能とすることで、曖昧な記憶や興味関心ベースでも書籍を発見できるUXを目指した。膨大な書籍データの中から「探す」負荷を減らし、ユーザーが直感的に目的の一冊へ到達できる体験を重視している。',
      },

      infoArchitecture: {
        screenStructure:
          '書籍を探したいユーザーが迷わず目的の作品に到達できるよう、「検索を起点とした画面構造」と「探索の選択肢を段階的に提示する情報設計」を行った。画面上部には常に検索窓を配置し、タイトル・著者名・レーベル・カテゴリといった複数の切り口から、ユーザーが思い立った瞬間に検索行動へ移れる構造とした。',
        flowDescription:
          '書籍を探したいユーザーが、迷うことなく目的の作品に到達できるよう、検索を起点とした直線的かつ分岐可能なユーザーフローを設計した。',
        flowImages: [
          {
            src: '/project/publising/info-serach-flow.webp',
            title: '検索を起点とした画面構造',
          },
          {
            src: '/project/publising/info-wordoress-ux.webp',
            title:
              '情報構造の整理（WordPress運用設計）\nWordPress上では、書籍情報としてタイトル／著者／イラストレーター／レーベルのみが個別に登録されており、「情報が検索項目ベースで整理されていない」「検索情報が足りていない」といった問題を抱えており、そのままでは検索性・再利用性が低い状態となっていた。本プロジェクトでは、これらの登録項目を「検索軸」「分類軸」「表示用情報」に整理し直し、書籍データを一貫した構造で管理できるよう再設計を行った。',
          },
          {
            src: '/project/publising/info-wordoress-input.webp',
            title:
              '情報構造の整理（WordPress運用設計）\n現場スタッフが迷わず情報を入力できるよう、フロント画面での検索・回遊体験と管理側のデータ登録・更新が乖離しない情報設計を行った。あわせて、運用フェーズで「タグ」「レーベル」などの検索項目を柔軟に追加できる構造とし、新たなカテゴリやレーベルが発生した場合でも、都度開発を伴わずに管理画面上で対応できる設計とした。これにより、ユーザー体験を損なうことなく、運用コストを抑えながら情報拡張が可能な、持続性のある構造を実現している。',
          },
        ],
      },

      useCases: {
        scenarios: [
          {
            title: 'ホームから「検索」から書籍のジャンル名を検索',
            steps: [
              'ホームから「検索」から書籍のジャンル名を検索',
              '検索した検索結果が表示される',
              '検索結果から、書籍を選択し、書籍詳細ページへ遷移する',
            ],
          },
          {
            title: '管理画面から「書籍」を選択',
            steps: [
              '管理画面から「書籍」を選択',
              'サムネイル画像・書籍内容・レーベル・タイトルなど書籍情報を入力し「新規書籍を登録」を選択',
              '修正が必要な場合、書籍情報から修正し、「更新」を選択',
            ],
          },
        ],
        flowImages: [{ src: '/project/publising/info-usecases.webp', title: 'ユースケース図' }],
      },

      wireframe: {
        images: [
          {
            src: '/project/publising/wireframe-top.webp',
            title: 'トップページ',
            description: '複数条件で探しやすい検索UIの構成。',
          },
          {
            src: '/project/publising/wireframe-search.webp',
            title: '検索結果ページ',
            description: '検索結果内で他の書籍を見つけやすいようフィルターを配置。',
          },
          {
            src: '/project/publising/wireframe-genre.webp',
            title: 'ジャンル一覧ページ',
            description: 'ジャンルの追加で範囲が拡張されることを前提に設計',
          },
          {
            src: '/project/publising/wireframe-contact.webp',
            title: 'お問合せページ',
            description: '関連導線と情報優先度を整理した詳細画面。',
          },
        ],
        description: 'レーベル追加によるお問合せ・アンケート内容の拡張を想定した設計',
      },

      visualDesign: {
        images: [
          {
            src: '/project/publising/design-top.webp',
            title: 'トップページ',
            description:
              'ブランドカラーをセクションタイトルや下部背景に配置し、ブランドイメージを印象つける設計。',
          },
          {
            src: '/project/publising/design-search.webp',
            title: '検索結果ページ',
            description: '検索書籍がわかりやすいよう、サムネ・タイトル・タグ・著者名を配置。',
          },
          {
            src: '/project/publising/design-genre.webp',
            title: 'ジャンル一覧ページ',
            description: '余計な装飾を削除し、ジャンル名が一目でわかるようにした。',
          },
          {
            src: '/project/publising/design-contact.webp',
            title: 'お問合せページ',
            description:
              '複数レーベル・会社・アンケートが追加されても一目で見分けがつくようアイコンとタイトルを配置。',
          },
        ],
        colorPalette: {
          primaryColor: '#F29F05',
          accentColor: '#374151',
          other: ['#F5F5F5', '#FFFFFF'],
        },
        description: '出版ブランドを反映した視覚設計',
      },

      uiComponents: {
        designSystem: {
          typography: ['見出し: 太字', '本文: レギュラー', '16px 基準スケール'],
        },
        sections: [
          { title: 'Button', images: ['/project/publising/button-component.webp'] },
          { title: 'Cards', images: ['/project/publising/card-component.webp'] },
          { title: 'Tables', images: ['/project/publising/table-component.webp'] },
          { title: 'Forms', images: ['/project/publising/form-component.webp'] },
        ],
        description: '出版サイト向けUIコンポーネント設計',
      },

      outcome: {
        sectionTitles: ['成果', '学びと改善点'],
        results: [
          'マルチサイト化により新レーベル追加時のサイト構築が不要となり、運用・保守コストを大幅に削減した。',
          '詳細検索機能と情報設計の整理により、ユーザーが目的の書籍へ迷わず到達できる導線を実現した。',
          '手順書とテンプレート整備によって、現場スタッフが迷わず更新・運用できる持続可能な管理体制を構築した。',
        ],
        learnings: [
          '業務ドメインを深く理解したUI設計が、現場負荷の削減に直結することを実感',
          'バリデーションや拡張性を考慮した設計が、運用コストを大きく左右する',
          '将来の拡張（タグ・レーベル追加）を前提とした設計により、開発コストを抑えながら長期運用に耐える基盤を構築できた。',
        ],
      },
    },
  },
];

/** id からプロジェクトを1件取得。存在しなければ null */
export function getProjectById(id: string): Project | null {
  return projectsList.find((p) => p.id === id) ?? null;
}
