export type Technology =
  | "Bamboo_Hybrid_Core"
  | "Sintered_Sole"
  | "Beveling"
  | "Steel_Edge"
  | "Light_Top_Sheet"
  | "Carbon_Ribbon";

export type CamberType =
  | "Camber"
  | "Wcamber"
  | "Hybrid Camber"
  | "Hybrid Wcamber";

export interface Product {
  slug: string;
  name: string;
  nameJa: string;
  camber: CamberType;
  flex: string;
  flexValue: number; // 1-5スケール
  isNew: boolean;
  sizes: string[];
  sizesWomen?: string[];
  gender: "mens" | "womens" | "unisex";
  technologies: Technology[];
  description: string;
  catalogImage: string; // PDFカタログページ画像
}

export const products: Product[] = [
  {
    slug: "locust",
    name: "LOCUST",
    nameJa: "ローカスト",
    camber: "Camber",
    flex: "MEDIUM",
    flexValue: 3,
    isNew: false,
    sizes: ["148", "150", "152", "154", "156"],
    gender: "unisex",
    description:
      "しなやかなフレックスで汎用性の高いキャンバーモデル。柔軟性のあるしなりはそのままにノーズ、テールにカーボンリボンを搭載した事により反発力が強化された。グラトリはもちろん、高速域での滑走力が向上し、ラントリや地形など多様な場面で安定性のある滑りを提供してくれる。",
    technologies: ["Bamboo_Hybrid_Core", "Sintered_Sole", "Beveling", "Steel_Edge", "Light_Top_Sheet", "Carbon_Ribbon"],
    catalogImage: "/images/catalog-03.png",
  },
  {
    slug: "worm",
    name: "WORM",
    nameJa: "ワーム",
    camber: "Wcamber",
    flex: "MEDIUM",
    flexValue: 3,
    isNew: false,
    sizes: ["148", "150", "152", "154", "156"],
    sizesWomen: ["137", "139", "142", "145"],
    gender: "unisex",
    description:
      "男女兼用のWキャンバーモデル。Wキャンバー特有のしなやかさに加えて、板のしなりから産まれる爆発的な反発力が癖になるグラトリ超特化モデル。近年のWキャンバーの流行を先駆けたこの一本は、一度乗ったら手放せない程に洗練された乗り味となっている。",
    technologies: ["Bamboo_Hybrid_Core", "Sintered_Sole", "Beveling", "Steel_Edge", "Light_Top_Sheet"],
    catalogImage: "/images/catalog-04.png",
  },
  {
    slug: "mantis",
    name: "MANTIS",
    nameJa: "マンティス",
    camber: "Hybrid Camber",
    flex: "MEDIUM",
    flexValue: 3,
    isNew: false,
    sizes: ["148", "150", "152", "154", "156"],
    gender: "unisex",
    description:
      "柔軟性と操作性を重視して設計したハイブリットキャンバーモデル。ノーズテールにカーボンリボンを搭載し、弾きや乗りの安定感を更にUPさせた。グラトリに最適化されたオールランドボードとなり、グラトリ板に迷ったらこの一本で間違いない。",
    technologies: ["Bamboo_Hybrid_Core", "Sintered_Sole", "Beveling", "Steel_Edge", "Light_Top_Sheet", "Carbon_Ribbon"],
    catalogImage: "/images/catalog-05.png",
  },
  {
    slug: "hornet",
    name: "HORNET",
    nameJa: "ホーネット",
    camber: "Hybrid Camber",
    flex: "MEDIUM",
    flexValue: 3,
    isNew: false,
    sizes: ["148", "150", "152", "154", "156"],
    gender: "unisex",
    description:
      "女性の脚力でも扱いやすいよう考えた超軽量ハイブリッドキャンバーモデル。トーションの操作性はそのままに、ノーズ・テールにカーボンリボンを搭載し板の先端まで反発を感じられるようになり、よりパワフルな反発力を生み出してくれる一本となった。",
    technologies: ["Bamboo_Hybrid_Core", "Sintered_Sole", "Beveling", "Steel_Edge", "Light_Top_Sheet", "Carbon_Ribbon"],
    catalogImage: "/images/catalog-06.png",
  },
  {
    slug: "beetle",
    name: "BEETLE",
    nameJa: "ビートル",
    camber: "Hybrid Camber",
    flex: "MEDIUM HARD",
    flexValue: 4,
    isNew: false,
    sizes: ["148", "150", "152", "154", "156"],
    gender: "unisex",
    description:
      "従来のMANTISをベースにより、パワーを持たせた高反発のハイブリットキャンバーモデル。絶妙なフレックスバランスと台形型の可変形状により操作性と高反発を兼ね備えた踏め踏めな一本となっている。",
    technologies: ["Bamboo_Hybrid_Core", "Sintered_Sole", "Beveling", "Steel_Edge"],
    catalogImage: "/images/catalog-07.png",
  },
  {
    slug: "spider",
    name: "SPIDER",
    nameJa: "スパイダー",
    camber: "Hybrid Wcamber",
    flex: "MEDIUM SOFT",
    flexValue: 2,
    isNew: true,
    sizes: ["148", "150", "152", "154", "156"],
    gender: "unisex",
    description:
      "新形状、ハイブリットWキャンバーを搭載した新モデル。ハイブリットキャンバーの強みである程度の安定性に加え、板をしならせた時に現れるWキャンバー特有の爆発的な乗り味を実現することが可能となった。MANTISとWORMを融合させたようなグラトリシーンに最も適した存在となるだろう。",
    technologies: ["Bamboo_Hybrid_Core", "Sintered_Sole", "Beveling", "Steel_Edge", "Light_Top_Sheet"],
    catalogImage: "/images/catalog-08.png",
  },
];
