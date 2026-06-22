import type { Branch } from "./types";
import { buildDefaultMenu } from "./menu";
import {
  buildGulousStaff,
  buildXianlinStaff,
  buildJiangningStaff,
  buildPukouStaff,
} from "./staff";
import { buildDefaultGallery } from "./gallery";

// ============================================================================
// BRANCH DATA
//
// Verified against public sources (Google/Dianping/Tripadvisor listings) at
// time of writing:
//   - Gulou: address confirmed (Hunan Road food street area, near Xuanwu Lake)
//   - Jiangning: address confirmed (Yiwu Food City, Tianyuan East Road)
//   - Xianlin & Pukou: general area confirmed, exact street address NOT
//     verified — flagged with addressIsPlaceholder. Replace before launch.
//
// Menu prices, staff names/bios, and Dianping ratings for Xianlin/Jiangning/
// Pukou are placeholders (isPlaceholder / ratingIsPlaceholder) and should be
// replaced with real figures.
// ============================================================================

export const branches: Branch[] = [
  {
    slug: "gulou",
    number: "01",
    name: { en: "Gulou", zh: "鼓楼" },
    shortDescription: {
      en: "Our original kitchen on Hunan Road's food street, by Xuanwu Lake.",
      zh: "位于湖南路美食街，毗邻玄武湖的首店。",
    },
    longDescription: {
      en: "Al Jannat's flagship branch opened its doors on the bustling Hunan Road food street, a short walk from Xuanwu Lake. It remains the spiritual home of the tandoor — the place where our recipes for butter chicken and mutton polao were first perfected for Nanjing diners.",
      zh: "Al Jannat 的首家分店开设于热闹的湖南路美食街，步行即可到达玄武湖。这里是土炉精神的发源地——黄油咖喱鸡与羊肉手抓饭的配方正是在此为南京食客首次打磨完善。",
    },
    address: {
      en: "No.107, Bldg 15, 28 North Yunnan Street, Gulou District, Nanjing",
      zh: "南京市鼓楼区云南北路28号15号楼107室",
    },
    phone: "+86 25 5223 5776",
    whatsapp: "+862552235776",
    dianpingRating: 4.7,
    openingHours: "10:00 AM – 10:00 PM",
    buffet: {
      days: { en: "Friday – Saturday", zh: "周五至周六" },
      time: "5:00 PM – 10:00 PM",
    },
    heroImage:
      "/gulou-1.jpg",
    cardImage:
      "/gulou.jpg",
    mapQuery: "28 North Yunnan Street Gulou Nanjing",
    staff: buildGulousStaff(),
    menu: buildDefaultMenu(),
    gallery: buildDefaultGallery(0),
  },
  {
    slug: "xianlin",
    number: "02",
    name: { en: "Xianlin", zh: "仙林" },
    shortDescription: {
      en: "A campus-side favorite near Nanjing's university district.",
      zh: "毗邻大学城，深受师生喜爱。",
    },
    longDescription: {
      en: "Set near Nanjing's lively university district, the Xianlin branch is a favorite among students, faculty and international visitors craving a taste of home. Expect the same hand-ground spices and tandoor bread, in a brighter, campus-energy dining room.",
      zh: "仙林店毗邻南京大学城，深受学生、教职工与渴望家乡味道的国际访客喜爱。同样的手磨香料与土炉烤馕，在更明亮、更具校园活力的用餐空间中呈现。",
    },
    address: {
      en: "Xianlin University District, Qixia District, Nanjing — exact street address pending confirmation",
      zh: "南京市栖霞区仙林大学城 — 具体门牌地址待确认",
    },
    addressIsPlaceholder: true,
    phone: "+86 25 5223 5776",
    whatsapp: "+862552235776",
    dianpingRating: 4.6,
    ratingIsPlaceholder: true,
    openingHours: "10:00 AM – 10:00 PM",
    buffet: {
      days: { en: "Friday – Saturday", zh: "周五至周六" },
      time: "5:00 PM – 10:00 PM",
    },
    heroImage:
      "/xianlin.jpg",
    cardImage:
      "/xianlin-11.jpg",
    mapQuery: "Xianlin University District Qixia Nanjing",
    staff: buildXianlinStaff(),
    menu: buildDefaultMenu(),
    gallery: buildDefaultGallery(2),
  },
  {
    slug: "jiangning",
    number: "03",
    name: { en: "Jiangning", zh: "江宁" },
    shortDescription: {
      en: "Spacious dining inside Yiwu Food City, weekend buffet through Sunday.",
      zh: "位于义乌美食城，周末（含周日）供应自助餐。",
    },
    longDescription: {
      en: "Our largest dining room, located inside Yiwu Food City in Jiangning District. With extra space for families and groups, Jiangning is the only branch offering buffet service across all three weekend days — Friday through Sunday.",
      zh: "我们规模最大的用餐空间，坐落于江宁区义乌美食城内。宽敞的场地适合家庭与团体聚餐，江宁店也是唯一在周五至周日整个周末都提供自助餐服务的分店。",
    },
    address: {
      en: "No.388, Tianyuan East Road, 3F Yiwu Food City, Jiangning District, Nanjing",
      zh: "南京市江宁区天元东路388号义乌美食城3楼",
    },
    phone: "+86 25 5223 5776",
    whatsapp: "+862552235776",
    dianpingRating: 4.6,
    ratingIsPlaceholder: true,
    openingHours: "10:00 AM – 10:00 PM",
    buffet: {
      days: { en: "Friday – Sunday", zh: "周五至周日" },
      time: "5:00 PM – 10:00 PM",
    },
    heroImage:
      "/jiangning.jpg",
    cardImage:
      "/jiangning-1.jpg",
    mapQuery: "388 Tianyuan East Road Yiwu Food City Jiangning Nanjing",
    staff: buildJiangningStaff(),
    menu: buildDefaultMenu(),
    gallery: buildDefaultGallery(4),
  },
  {
    slug: "pukou",
    number: "04",
    name: { en: "Pukou", zh: "浦口" },
    shortDescription: {
      en: "Our newest riverside location on Zhushan Road.",
      zh: "位于珠山路的最新分店，临江而立。",
    },
    longDescription: {
      en: "The newest addition to the Al Jannat family, located in Pukou District near Zhushan Road. A modern dining room with the same century-old recipes — and a view that makes it worth the trip across the river.",
      zh: "Al Jannat 家族最新成立的分店，位于浦口区珠山路附近。现代化的用餐空间，承载着同样传承百年的配方——江边的风景，让这趟跨江之旅格外值得。",
    },
    address: {
      en: "Zhushan Road, Pukou District, Nanjing — exact street address pending confirmation",
      zh: "南京市浦口区珠山路 — 具体门牌地址待确认",
    },
    addressIsPlaceholder: true,
    phone: "+86 25 5223 5776",
    whatsapp: "+862552235776",
    dianpingRating: 4.5,
    ratingIsPlaceholder: true,
    openingHours: "10:00 AM – 10:00 PM",
    buffet: {
      days: { en: "Friday – Saturday", zh: "周五至周六" },
      time: "5:00 PM – 10:00 PM",
    },
    heroImage:
      "/pukou-1.jpg",
    cardImage:
      "/pukou.jpg",
    mapQuery: "Zhushan Road Pukou Nanjing",
    staff: buildPukouStaff(),
    menu: buildDefaultMenu(),
    gallery: buildDefaultGallery(6),
  },
];

export function getBranchBySlug(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}

export function getAllBranchSlugs(): string[] {
  return branches.map((b) => b.slug);
}
