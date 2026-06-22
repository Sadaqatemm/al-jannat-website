import type { MenuItem } from "./types";

// ============================================================================
// Shared à la carte menu — used as the base menu for every branch.
// All prices are PLACEHOLDERS (isPlaceholder: true) and must be confirmed
// against each branch's real printed menu before launch.
// ============================================================================

export function buildDefaultMenu(): MenuItem[] {
  return [
    // ---------- Starters ----------
    {
      id: "veg-samosa",
      name: { en: "Vegetable Samosa", zh: "蔬菜萨摩萨" },
      description: {
        en: "Crisp pastry filled with spiced potato and peas.",
        zh: "香脆酥皮，内馅为香料土豆与青豆。",
      },
      price: 28,
      isPlaceholder: true,
      category: "starters",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      spiceLevel: 1,
      isVeg: true,
    },
    {
      id: "seekh-kebab",
      name: { en: "Seekh Kebab", zh: "串烤羊肉" },
      description: {
        en: "Minced lamb skewers, char-grilled over the tandoor.",
        zh: "羊肉碎肉串，土炉炭烤而成。",
      },
      price: 48,
      isPlaceholder: true,
      category: "starters",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
      spiceLevel: 2,
    },
    {
      id: "tomato-shorba",
      name: { en: "Tomato Shorba", zh: "番茄浓汤" },
      description: {
        en: "Light spiced tomato soup, a comforting way to start.",
        zh: "清爽番茄香料汤，开胃前菜首选。",
      },
      price: 24,
      isPlaceholder: true,
      category: "starters",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
      spiceLevel: 0,
      isVeg: true,
    },
    {
      id: "paneer-tikka",
      name: { en: "Paneer Tikka", zh: "烤印度奶酪" },
      description: {
        en: "Marinated cottage cheese, tandoor-grilled with peppers.",
        zh: "腌制印度奶酪，搭配彩椒土炉烤制。",
      },
      price: 42,
      isPlaceholder: true,
      category: "starters",
      image:
        "https://images.unsplash.com/photo-1626132647523-66c5bf60d4b2?w=400&q=80",
      spiceLevel: 1,
      isVeg: true,
    },

    // ---------- Main Course ----------
    {
      id: "butter-chicken",
      name: { en: "Butter Chicken", zh: "黄油咖喱鸡" },
      description: {
        en: "Tomato-cream curry, slow-simmered — our most ordered dish.",
        zh: "番茄奶油咖喱，慢炖入味，店内最受欢迎。",
      },
      price: 58,
      isPlaceholder: true,
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
      spiceLevel: 1,
    },
    {
      id: "mutton-polao",
      name: { en: "Mutton Polao", zh: "羊肉手抓饭" },
      description: {
        en: "Afghan-style fragrant rice with slow-cooked mutton and caramelized carrots.",
        zh: "阿富汗风味香米饭，搭配慢炖羊肉与焦糖胡萝卜。",
      },
      price: 68,
      isPlaceholder: true,
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=80",
      spiceLevel: 1,
    },
    {
      id: "chana-masala",
      name: { en: "Chana Masala", zh: "鹰嘴豆咖喱（素）" },
      description: {
        en: "Chickpeas simmered in a tangy onion-tomato masala.",
        zh: "鹰嘴豆炖煮于酸甜洋葱番茄玛萨拉酱中。",
      },
      price: 38,
      isPlaceholder: true,
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=400&q=80",
      spiceLevel: 2,
      isVeg: true,
    },
    {
      id: "garlic-naan",
      name: { en: "Garlic Naan", zh: "蒜香馕" },
      description: {
        en: "Fresh tandoor-baked flatbread with roasted garlic.",
        zh: "现烤土炉馕饼，搭配香烤蒜末。",
      },
      price: 18,
      isPlaceholder: true,
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&q=80",
      spiceLevel: 0,
      isVeg: true,
    },
    {
      id: "chicken-biryani",
      name: { en: "Chicken Biryani", zh: "印度香饭（鸡肉）" },
      description: {
        en: "Basmati rice layered with marinated chicken and whole spices.",
        zh: "印度香米分层焗制，配以腌制鸡肉与原粒香料。",
      },
      price: 52,
      isPlaceholder: true,
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
      spiceLevel: 2,
    },
    {
      id: "lamb-korma",
      name: { en: "Lamb Korma", zh: "羊肉果仁咖喱" },
      description: {
        en: "Mild, creamy curry with cashew and yogurt, a Pakistani classic.",
        zh: "腰果酸奶慢炖咖喱，口感温润，巴基斯坦经典菜式。",
      },
      price: 64,
      isPlaceholder: true,
      category: "mains",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
      spiceLevel: 1,
    },

    // ---------- Desserts ----------
    {
      id: "gulab-jamun",
      name: { en: "Gulab Jamun", zh: "古拉伯詹蒙" },
      description: {
        en: "Warm milk-dumplings soaked in rose-cardamom syrup.",
        zh: "温热奶团子，浸于玫瑰豆蔻糖浆中。",
      },
      price: 22,
      isPlaceholder: true,
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1612203985729-70726954388c?w=400&q=80",
      isVeg: true,
    },
    {
      id: "kheer",
      name: { en: "Kheer (Rice Pudding)", zh: "印度米布丁" },
      description: {
        en: "Slow-simmered rice pudding with saffron and pistachio.",
        zh: "藏红花开心果慢炖米布丁。",
      },
      price: 20,
      isPlaceholder: true,
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
      isVeg: true,
    },

    // ---------- Drinks ----------
    {
      id: "masala-chai",
      name: { en: "Masala Chai", zh: "玛萨拉奶茶" },
      description: {
        en: "Spiced black tea simmered with milk, our signature pour.",
        zh: "香料黑茶配牛奶慢煮，店内招牌饮品。",
      },
      price: 16,
      isPlaceholder: true,
      category: "drinks",
      image:
        "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80",
      isVeg: true,
    },
    {
      id: "mango-lassi",
      name: { en: "Mango Lassi", zh: "芒果拉西" },
      description: {
        en: "Chilled yogurt drink blended with seasonal mango.",
        zh: "新鲜芒果与酸奶调制的冰镇饮品。",
      },
      price: 24,
      isPlaceholder: true,
      category: "drinks",
      image:
        "https://images.unsplash.com/photo-1626200926749-7d8e57d9b6c1?w=400&q=80",
      isVeg: true,
    },
  ];
}
