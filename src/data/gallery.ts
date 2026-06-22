import type { GalleryImage } from "./types";

// ============================================================================
// Shared gallery images (stock photography placeholders).
// Replace with real photography pulled from the branch's own camera roll /
// al-jannat-restaurants.com before launch.
// ============================================================================

export function buildDefaultGallery(seedOffset = 0): GalleryImage[] {
  const pool: GalleryImage[] = [
    {
      id: "interior-1",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      alt: { en: "Restaurant interior", zh: "餐厅内部" },
    },
    {
      id: "butter-chicken-plate",
      src: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
      alt: { en: "Butter chicken plate", zh: "黄油咖喱鸡" },
    },
    {
      id: "naan-basket",
      src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80",
      alt: { en: "Naan basket", zh: "烤馕拼盘" },
    },
    {
      id: "tandoor-fire",
      src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
      alt: { en: "Tandoor fire", zh: "土炉火焰" },
    },
    {
      id: "mutton-polao-plate",
      src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80",
      alt: { en: "Mutton polao plate", zh: "羊肉手抓饭" },
    },
    {
      id: "kebabs-grilling",
      src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
      alt: { en: "Kebabs grilling", zh: "烤串" },
    },
    {
      id: "chai-pour",
      src: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
      alt: { en: "Masala chai pour", zh: "玛萨拉奶茶" },
    },
    // {
    //   id: "paneer-tikka-plate",
    //   src: "https://images.unsplash.com/photo-1626132647523-66c5bf60d4b2?w=600&q=80",
    //   alt: { en: "Paneer tikka", zh: "烤印度奶酪" },
    // },
    {
      id: "gulab-jamun-plate",
      src: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80",
      alt: { en: "Gulab jamun dessert", zh: "古拉伯詹蒙甜点" },
    },
  ];
  // Rotate the array slightly per branch so each gallery feels distinct
  const rotated = [...pool.slice(seedOffset), ...pool.slice(0, seedOffset)];
  return rotated.map((img, i) => ({ ...img, id: `${img.id}-${i}` }));
}
