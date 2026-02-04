export interface AboutCard {
  /** 一意なID */
  id: string;
  /** タイトル（例: はじめまして） */
  label: string;
  /** 本文の段落 */
  paragraphs: string[];
  /** イラストのバリエーション識別子 */
  illustrationKey: string;
  /** イラストのパス */
  illustrationPath: string;
  /** アクセシビリティ用のイラスト説明 */
  illustrationAlt: string;
}
