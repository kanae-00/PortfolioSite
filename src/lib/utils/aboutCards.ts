import type { AboutCard } from '../types/about';

// About セクションの 5 バリアント分のテキスト＆イラスト情報
export const aboutCards: readonly AboutCard[] = [
  {
    id: '01',
    label: 'はじめまして',
    paragraphs: [
      'サイトを閲覧いただきありがとうございます。',
      '私のキャリアは、建築からIT、マネジメントから実装まで、少し遠回りをしているように見えるかもしれません。',
      'ただ、振り返ってみると、',
      'それぞれの経験は偶然ではなく、',
      '今の仕事につながる「点」だったと感じています。',
      'この About セクションでは、',
      'その点がどのようにつながってきたのかを、',
      '時系列でお話しします。',
    ],
    illustrationKey: 'about-timeline-1',
    illustrationPath: '/profile/about-me.svg',
    illustrationAlt: 'キャリアのはじまりを表現したイラストカード',
  },
  {
    id: '02',
    label: '建築からITへ',
    paragraphs: [
      '建築分野で身につけた「構造化」と「俯瞰」の視点は、',
      'サービス全体の情報設計やユーザーフローを考えるうえで大きな土台になりました。',
      '図面を引くように、',
      'ユーザー体験の導線を組み立てていくプロセスに惹かれ、',
      'IT へとキャリアチェンジするきっかけとなりました。',
    ],
    illustrationKey: 'about-timeline-2',
    illustrationPath: '/profile/carrier-cgdesigner.svg',
    illustrationAlt: '建築図面からワイヤーフレームへとつながるイラストカード',
  },
  {
    id: '03',
    label: 'マネジメントの学び',
    paragraphs: [
      'プロジェクトマネジメントに関わった期間は、',
      'チームやステークホルダーとの「対話」の重要性を学ぶ時間でした。',
      'ビジネス要件とユーザー価値のバランスをとりながら、',
      '最終的なアウトプットの質を高めていく視点を養いました。',
    ],
    illustrationKey: 'about-timeline-3',
    illustrationPath: '/profile/carrier-pm.svg',
    illustrationAlt: 'プロジェクトチームとタスクを表現したイラストカード',
  },
  {
    id: '04',
    label: '実装とのブリッジ',
    paragraphs: [
      'マネジメントだけでなく、',
      '自ら手を動かして実装することにもこだわってきました。',
      'デザインとフロントエンドの両側から課題に向き合うことで、',
      '体験の細部まで責任を持って作り込むことを大切にしています。',
    ],
    illustrationKey: 'about-timeline-4',
    illustrationPath: '/profile/carrier-engineer.svg',
    illustrationAlt: 'デザインとコードがつながるイラストカード',
  },
  {
    id: '05',
    label: 'これから',
    paragraphs: [
      'これまでの経験で得た「構造化」「対話」「実装力」を活かし、',
      'プロダクトの価値を長期的に育てていけるポジションで、',
      'ユーザーとビジネスの両方に貢献していきたいと考えています。',
    ],
    illustrationKey: 'about-timeline-5',
    illustrationPath: '/profile/carrier-future.svg',
    illustrationAlt: '未来へ続くロードマップのイラストカード',
  },
] as const;
