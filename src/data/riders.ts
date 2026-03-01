export interface Rider {
  nameJa: string;
  nameEn: string;
  image: string;
  instagram?: string;
  category: "main" | "team" | "crew";
}

export const riders: { main: Rider[]; team: Rider[]; crew: Rider[] } = {
  main: [
    {
      nameJa: "江端庄平",
      nameEn: "SHOHEI EBATA",
      image: "/riders/EBATA-SHOHEI-scaled-qsl989eqobn58qqcxokil6b2ysbty8rrmzn38bv0nk.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
    {
      nameJa: "中川友樹",
      nameEn: "TOMOKI NAKAGAWA",
      image: "/riders/NAKAGAWA-TOMOKI-scaled-qsl9a6ysq2ad3vxbnimwpor6xaszrufwkjx0qszvv4.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
    {
      nameJa: "村瀬匠",
      nameEn: "TAKUMI MURASE",
      image: "/riders/MURASE-TAKUMI-scaled-qufokvzeyehefc74tgqv6id0myfyy5niq4rqrte9e8.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
    {
      nameJa: "松浦光陽",
      nameEn: "KOYO MATSUURA",
      image: "/riders/MATSUURA-KOYO--scaled-qufoci980l0cwidercbmg4i1y9r5bbdokncvpztmvk.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
    {
      nameJa: "岩井穂香",
      nameEn: "HONOKA IWAI",
      image: "/riders/IWAI-HONOKA-scaled-qufmjobymy9e4qjkbtgyyzgiyjarev05zri93xy61c.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
    {
      nameJa: "前田愛里",
      nameEn: "AIRI MAEDA",
      image: "/riders/MAEDA-AIRI-scaled-qufmn1l54kvdqfnfnrvuemuzl8p3ztdjgfnw0mydqo.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
    {
      nameJa: "図師光",
      nameEn: "HIKARI ZUSHI",
      image: "/riders/ZUSHI-HIKARI-scaled-qufmbtejhti323yj7x69mgus5k1a1ysykv53nnlo28.jpg",
      instagram: "https://www.instagram.com/",
      category: "main",
    },
  ],
  team: [
    {
      nameJa: "福田凌佑",
      nameEn: "RYOSUKE HUKUDA",
      image: "/riders/HUKUDA-RYOSUKE-scaled-qufmlx62ypc1v7a57sevxf261o8bstx2yvm0dqmb68.jpg",
      instagram: "https://www.instagram.com/",
      category: "team",
    },
    {
      nameJa: "佐々木海一",
      nameEn: "KAICHI SASAKI",
      image: "/riders/SASAKI-KAICHI-scaled-qufnhfpa3qh54ji66wtl0yrj1qwcvi13mv12mpw4k0.jpg",
      instagram: "https://www.instagram.com/",
      category: "team",
    },
  ],
  crew: [
    {
      nameJa: "高石篤基",
      nameEn: "ATSUKI TAKAISHI",
      image: "/riders/TAKAISHI-ATSUKI-scaled-qufolgnv4r9pird3gponpd55pfm1nhxm4z4fbwjllc.jpg",
      instagram: "https://www.instagram.com/",
      category: "crew",
    },
    {
      nameJa: "松原バレリア",
      nameEn: "BARERIA MATSUBARA",
      image: "/riders/MATSUBARA-BARERIA-scaled-qufol6bn1kvjz1s4537rfxr36710atskfjy31uyxhs.jpg",
      instagram: "https://www.instagram.com/",
      category: "crew",
    },
    {
      nameJa: "京想澄礼",
      nameEn: "SUMIRE KYOSO",
      image: "/riders/KYOSO-SUMIRE-scaled-qufob6bgc16qgeb1j9lneyljnmbfer3de2348vspow.jpg",
      instagram: "https://www.instagram.com/",
      category: "crew",
    },
    {
      nameJa: "大江春名",
      nameEn: "HARUNA OE",
      image: "/riders/OE-HARUNA-qufolo6knfk03n268sxo9b8ugikzd2rgu0cb648g7k.jpg",
      instagram: "https://www.instagram.com/",
      category: "crew",
    },
  ],
};
