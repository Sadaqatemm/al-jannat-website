import type { GalleryImage } from "./types";

// ============================================================================
// Per-branch galleries using real branch photography.
// Each function returns images specific to that location only.
// ============================================================================

export function buildGulousGallery(): GalleryImage[] {
  return [
    { id: "gu-1", src: "/gulou.jpg",   alt: { en: "Gulou branch exterior", zh: "鼓楼店外观" } },
    { id: "gu-2", src: "/gulou-1.jpg", alt: { en: "Gulou dining room",    zh: "鼓楼店用餐区" } },
    // { id: "gu-3", src: "/gu2.jpg",     alt: { en: "Gulou kitchen",        zh: "鼓楼店厨房" } },
    // { id: "gu-4", src: "/gu3.jpg",     alt: { en: "Gulou dishes",         zh: "鼓楼店菜品" } },
    // { id: "gu-5", src: "/gu4.jpg",     alt: { en: "Gulou atmosphere",     zh: "鼓楼店氛围" } },
    // { id: "gu-6", src: "/gu5.jpg",     alt: { en: "Gulou food spread",    zh: "鼓楼店美食" } },
    // { id: "gu-7", src: "/gu6.jpg",     alt: { en: "Gulou tandoor",        zh: "鼓楼店馕坑" } },
    // { id: "gu-8", src: "/gu7.jpg",     alt: { en: "Gulou guests",         zh: "鼓楼店宾客" } },
    // { id: "gu-9", src: "/gu8.jpg",     alt: { en: "Gulou special dishes", zh: "鼓楼店特色菜" } },
  ];
}

export function buildXianlinGallery(): GalleryImage[] {
  return [
    { id: "xi-1", src: "/xianlin.jpg",    alt: { en: "Xianlin branch exterior", zh: "仙林店外观" } },
    { id: "xi-2", src: "/xianlin-11.jpg", alt: { en: "Xianlin dining area",     zh: "仙林店用餐区" } },
    // { id: "xi-3", src: "/xi1.jpg",        alt: { en: "Xianlin interior",        zh: "仙林店内部" } },
    // { id: "xi-4", src: "/xi2.jpg",        alt: { en: "Xianlin dishes",          zh: "仙林店菜品" } },
    // { id: "xi-5", src: "/xi3.jpg",        alt: { en: "Xianlin kitchen",         zh: "仙林店厨房" } },
    // { id: "xi-6", src: "/xi4.jpg",        alt: { en: "Xianlin atmosphere",      zh: "仙林店氛围" } },
    // { id: "xi-7", src: "/xi5.jpg",        alt: { en: "Xianlin food",            zh: "仙林店美食" } },
    // { id: "xi-8", src: "/xi7.jpg",        alt: { en: "Xianlin special dishes",  zh: "仙林店特色菜" } },
    // { id: "xi-9", src: "/xismile.jpg",    alt: { en: "Xianlin team",            zh: "仙林店团队" } },
  ];
}

export function buildJiangningGallery(): GalleryImage[] {
  return [
    { id: "ji-1", src: "/jiangning.jpg",   alt: { en: "Jiangning branch exterior", zh: "江宁店外观" } },
    { id: "ji-2", src: "/jiangning-1.jpg", alt: { en: "Jiangning dining area",     zh: "江宁店用餐区" } },
    // { id: "ji-3", src: "/ji.jpg",          alt: { en: "Jiangning interior",        zh: "江宁店内部" } },
    // { id: "ji-4", src: "/ji0.jpg",         alt: { en: "Jiangning atmosphere",      zh: "江宁店氛围" } },
    // { id: "ji-5", src: "/ji2.jpg",         alt: { en: "Jiangning dishes",          zh: "江宁店菜品" } },
    // { id: "ji-6", src: "/ji3.jpg",         alt: { en: "Jiangning kitchen",         zh: "江宁店厨房" } },
    // { id: "ji-7", src: "/ji5.jpg",         alt: { en: "Jiangning food spread",     zh: "江宁店美食" } },
    // { id: "ji-8", src: "/ji6.jpg",         alt: { en: "Jiangning special dishes",  zh: "江宁店特色菜" } },
    // { id: "ji-9", src: "/j4.jpg",          alt: { en: "Jiangning team",            zh: "江宁店团队" } },
  ];
}

export function buildPukouGallery(): GalleryImage[] {
  return [
    { id: "pu-1", src: "/pukou.jpg",   alt: { en: "Pukou branch exterior", zh: "浦口店外观" } },
    { id: "pu-2", src: "/pukou-1.jpg", alt: { en: "Pukou dining area",     zh: "浦口店用餐区" } },
    { id: "pu-3", src: "/pukou-2.jpg", alt: { en: "Pukou atmosphere",      zh: "浦口店氛围" } },
  //   { id: "pu-4", src: "/pu1.jpg",     alt: { en: "Pukou interior",        zh: "浦口店内部" } },
  //   { id: "pu-5", src: "/pu3.jpg",     alt: { en: "Pukou dishes",          zh: "浦口店菜品" } },
  //   { id: "pu-6", src: "/pu5.jpg",     alt: { en: "Pukou kitchen",         zh: "浦口店厨房" } },
  //   { id: "pu-7", src: "/pu6.jpg",     alt: { en: "Pukou food spread",     zh: "浦口店美食" } },
  //   { id: "pu-8", src: "/pu7.jpg",     alt: { en: "Pukou special dishes",  zh: "浦口店特色菜" } },
  //   { id: "pu-9", src: "/pu8.jpg",     alt: { en: "Pukou team",            zh: "浦口店团队" } },
  ];
}

// Legacy export kept for any remaining references — not used by branches.ts anymore.
export function buildDefaultGallery(_seedOffset = 0): GalleryImage[] {
  return buildGulousGallery();
}
