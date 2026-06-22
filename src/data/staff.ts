import type { StaffMember } from "./types";

// ============================================================================
// Per-branch staff rosters.
// All names, bios and photos are PLACEHOLDERS — replace with real team
// members and photography before launch. Each branch has its own unique
// set of 4 staff so changes to one branch don't affect another.
// ============================================================================

// ---- Gulou (flagship) -------------------------------------------------------
export function buildGulousStaff(): StaffMember[] {
  return [
    {
      id: "gulou-manager",
      name: "Narendra Rajput",
      role: { en: "Manager", zh: "经理" },
      bio: {
        en: "Opened Gulou on day one and has run the front of house with warmth ever since.",
        zh: "鼓楼店创始人之一，自开业第一天便以热情管理前厅。",
      },
      photo: "/gumanager.jfif",
      isPlaceholder: true,
    },
    {
      id: "gulou-head-chef",
      name: "Sanjay Batola",
      role: { en: "Head Chef", zh: "主厨" },
      bio: {
        en: "20 years perfecting tandoor recipes across Delhi and Nanjing kitchens — the mind behind our butter chicken.",
        zh: "二十年土炉烹饪经验，足迹遍及德里与南京，黄油咖喱鸡配方的创作者。",
      },
      photo: "/gu2.jpg",
      isPlaceholder: true,
    },
    {
      id: "gulou-sous-chef",
      name: "Bindari",
      role: { en: "Sous Chef", zh: "副厨" },
      bio: {
        en: "Master of B.B.Q, transforming low-and-slow cooks into tender, smoky perfection.",
        zh: "熏烤大师，以慢火低热将食材化为鲜嫩多汁、烟熏风味绝佳的完美杰作。",
      },
      photo: "/gu3.jfif",
      isPlaceholder: true,
    },
    {
      id: "gulou-front5",
      name: "Sanjay",
      role: { en: "Front of House", zh: "前厅主管" },
      bio: {
        en: "A noble artisan of the kitchen, bringing dedication and dignity to the comforting staple foods that sustain us.",
        zh: "德才兼备的厨房匠人，以尊严与专注烹饪滋养身心的日常主食。",
      },
      photo: "/gu4.jfif",
      isPlaceholder: true,
    },

       {
      id: "gulou-front1",
      name: "Harry Ohm",
      role: { en: "Front of House", zh: "前厅主管" },
      bio: {
        en: "The warm welcome you'll remember at the Gulou door — fluent in Mandarin, Urdu, Hindi and English.",
        zh: "鼓楼店最温暖的迎宾面孔，精通普通话、乌尔都语,印度语，英语。",
      },
      photo: "/gu5.jfif",
      isPlaceholder: true,
    },
       {
      id: "gulou-front2",
      name: "Omrao John",
      role: { en: "Front of House", zh: "前厅主管" },
      bio: {
        en: "The warm heart of our team, serving comfort at his own gentle pace with an ever-present smile.",
        zh: "店里的温情核心，步调沉稳，始终带着治愈微笑。",
      },
      photo: "/gu6.jfif",
      isPlaceholder: true,
    },

       {
      id: "gulou-front3",
      name: "Sandeep Singh",
      role: { en: "Chef", zh: "厨师"},
      bio: {
        en: "Our focused tandoor champion, tirelessly fueling the clay oven with a sharp eye and endless dedication.",
        zh: "专注的烤炉（Tandoor）铁汉，用极尽的敬业坚守于滚烫火炉旁。",
      },
      photo: "/gu7.jfif",
      isPlaceholder: true,
    },
       {
      id: "gulou-front4",
      name: "Suresh",
      role: { en: "Chef", zh: "厨师" },
      bio: {
        en: "The unsung hero of our busiest nights, conquering mountains of dishes with unmatched hustle.",
        zh: "忙碌之夜的幕后英雄，独自一人、毫无怨言地搞定成山的杯盘。",
      },
      photo: "/gu8.jpg",
      isPlaceholder: true,
    },
  ];
}

// ---- Xianlin (campus) -------------------------------------------------------
export function buildXianlinStaff(): StaffMember[] {
  return [
       {
      id: "xianlin-manager",
      name: "Pardeep Prasad",
      role: { en: "Branch Manager", zh: "仙林店长" },
      bio: {
        en: "Our manager! who brightens every shift with genuine kindness and a warm welcome.",
        zh: "经理！始终用真诚的善意与温暖的问候照亮每一次相遇。",
      },
      photo: "/ximanager.jfif",
            isPlaceholder: true,
    },
    {
      id: "xianlin-head-chef",
      name: "Surendra Singh",
      role: { en: "Head Chef", zh: "主厨" },
      bio: {
        en: "15+ years of experience in Kitchen. Trained in India,Middle east Suri brings bold Punjab flavours to the university crowd.",
        zh: "曾在印度受训，以浓郁的旁遮普风味征服大学城食客。",
      },
      photo: "/xi2.jfif", 
           isPlaceholder: true,
    },
        {
      id: "xianlin-front3",
      name: "Makan Singh",
      role: { en: "Chef", zh: "厨师" },
      bio: {
        en: "The master of spice and simmer, expertly blending rich flavors to create the ultimate comfort curries.",
        zh: "调味与慢炖的主宰者，巧妙融合浓郁香料，打造让人无法抗拒的极品咖喱。",
      },
      photo: "/xi7.jpg",
            isPlaceholder: true,
    },
 
    // {
    //   id: "xianlin-sous-chef",
    //   name: "Arjun Singh",
    //   role: { en: "Sous Chef", zh: "副厨" },
    //   bio: {
    //     en: "Masters the tandoor station and produces the crispest seekh kebabs on the menu.",
    //     zh: "土炉台掌控者，出品菜单上最酥脆的串烤羊肉。",
    //   },
    //   photo: "/xi3.jfif",
    //         isPlaceholder: true,
    // },
    {
      id: "xianlin-front",
      name: "Sunil Dutt",
      role: { en: "Chef", zh: "厨师" },
      bio: {
        en: "The creative wizard of bite-sized bliss, crafting crave-worthy snacks packed with unforgettable flavor.",
        zh: "一口即惊艳的小吃专家，总能将日常小点心化为让人欲罢不能的绝妙美味。",
      },
      photo: "/xi44.jpg",
            isPlaceholder: true,
    },
    {
      id: "xianlin-front1",
      name: "Rahul Singh Kaintura",
      role: { en: "Chef", zh: "厨师" },
      bio: {
        en: "A true tandoor master who runs the clay oven like clockwork, effortlessly staying on top of the non-stop rush.",
        zh: "精益求精的烤炉（Tandoor）行家里手，在永不停歇的忙碌中始终游刃有余。",
      },
      photo: "/xi5.jpg",
            isPlaceholder: true,
    },
    {
      id: "xianlin-front2",
      name: "Brijmohan Prasad",
      role: { en: "Guest Relations/Waiter", zh: "服务员" },
      bio: {
        en: "Our charming food runner, delivering your favorite dishes straight from the kitchen with an endearing smile.",
        zh: "店里的颜值担当（传菜员），用让人毫无防备的可爱微笑，将热腾腾的美味直送您的桌前。",
      },
      photo: "/xi200.jpg",
            isPlaceholder: true,
    },

    
  ];
}

// ---- Jiangning (largest, family-focused) ------------------------------------
export function buildJiangningStaff(): StaffMember[] {
  return [
        {
      id: "jiangning-manager",
      name: "Sanjay",
      role: { en: "Branch Manager", zh: "江宁店长" },
      bio: {
        en: "Runs our biggest dining room with military precision and a hospitality heart.",
        zh: "以精准的管理与热情的待客之道，统领我们规模最大的餐厅。",
      },
      photo: "/jisanjay.jfif",
      isPlaceholder: true,
    },
    {
      id: "jiangning-head-chef",
      name: "Mukesh",
      role: { en: "Chef", zh: "厨师"},
      bio: {
        en: "The high-energy engine of our floor, executing every task with tireless hustle.",
        zh: "大堂里的活力永动机，干劲十足地搞定每一项琐事。",
      },
      photo: "/ji0.jfif",
      isPlaceholder: true,
    },

    {
      id: "jiangning-sous-chef",
      name: "Sailesh",
      role: { en: "Pastry & Desserts", zh: "甜点主厨" },
      bio: {
        en: "Responsible for the gulab jamun and kheer that keep families coming back every weekend.",
        zh: "负责让家庭客人每个周末都必回来的古拉伯詹蒙与米布丁。",
      },
      photo: "/JIF.jPG",
      isPlaceholder: true,
    },
    {
      id: "jiangning-front",
      name: "Alok",
      role: {  en: "Chef", zh: "厨师"  },
      bio: {
        en: "The highly organized tandoor master, running the fire with flawless precision.",
        zh: "有条不紊的烤炉（Tandoor）掌控者，用极度严谨的节奏驯服熊熊烈火。",
      },
      photo: "/ji2.jpg",
      isPlaceholder: true,
    },

        {
      id: "jiangning-front1",
      name: "Wei Jianming",
      role: { en: "Head Chef", zh: "主厨" },
      bio: {
        en: "The culinary heartbeat of our kitchen, driving every main flavor.",
        zh: "后厨的绝对核心，掌控每一道主力美味。",
      },
      photo: "/ji3.jpg",
      isPlaceholder: true,
    },


        {
      id: "jiangning-front2",
      name: "Wei Jianming",
      role: {  en: "Chef", zh: "厨师"  },
      bio: {
        en: "The multi-talented chef seamlessly cooking and keeping the buffet perfectly stocked.",
        zh: "身兼多职的烹饪能手，一边掌勺一边保证自助区源源不断、无缝补给。",
      },
      photo: "/j4.jpg",
      isPlaceholder: true,
    },


        {
      id: "jiangning-front3",
      name: "Wei Jianming",
      role: { en: "Chef", zh: "厨师"},
      bio: {
        en: "The rapid-fire cleaning champion keeping our kitchen sparkling.",
        zh: "风驰电掣的清洁冠军，时刻保持后厨闪亮如新。",
      },
      photo: "/ji6.jpg",
      isPlaceholder: true,
    },

  ];
}

// ---- Pukou (riverside, newest) ----------------------------------------------
export function buildPukouStaff(): StaffMember[] {
  return [
        {
      id: "pukou-manager",
      name: "Praveen Prasad",
      role: { en: "Branch Manager", zh: "浦口店长" },
      bio: {
        en: "Led the launch of our newest location and shaped its modern, river-view dining identity.",
        zh: "主导浦口新店开业，打造了面江而立的现代用餐风格。",
      },
      photo: "/pumanager.jfif",
      isPlaceholder: true,
    },{
      id: "pukou-head-chef",
      name: "Ram Singh",
      role: { en: "Head Chef", zh: "主厨" },
      bio: {
        en: "Authentic culinary artistry, straight from India.",
        zh: "印度的顶级大师，正宗的烹饪艺术。",
      },
      photo: "/pu10.jpg",
      isPlaceholder: true,
    },
            {
      id: "pukou-front1",
      name: "Guddu Chand",
      role: { en: "Front of House", zh: "前厅主管" },
      bio: {
        en: "Our deep-thinking 2017 tandoor pioneer..",
        zh: "始于2017、饱含故事的烤炉鼻祖。",
      },
      photo: "/pu6.jfif",
      isPlaceholder: true,
    },
    
{
      id: "pukou-sous-chef",
      name: "Jay Prakash",
      role: { en: "Grill & Tandoor", zh: "烤炉主厨" },
      bio: {
        en: "Charming runner delivering smiles and flavor.",
        zh: "用可爱微笑传递美味的传菜员。",
      },
      photo: "/jayprakash.jfif",
      isPlaceholder: true,
    }, 
    {
      id: "pukou-sous-chef1",
      name: "Mahidar Prasad",
      role: { en: "Grill & Tandoor", zh: "烤炉主厨" },
      bio: {
        en: "The master of rich, comforting spices.",
        zh: "浓郁香料与完美咖喱的主宰。",
      },
      photo: "/pu3.jfif",
      isPlaceholder: true,
    },
    {
      id: "pukou-front",
      name: "Nandan Bisht",
      role: { en: "Front of House", zh: "前厅主管" },
      bio: {
        en: "The tireless machine conquering mountains of dishes.",
        zh: "搞定成山杯盘的后厨无敌铁汉。",
      },
      photo: "/pu9.jpg",
      isPlaceholder: true,
    },
    

  ];
}

// Legacy helper kept for any code that imported buildDefaultStaff() before
// this refactor — now returns Gulou's roster as a sensible default.
export function buildDefaultStaff(): StaffMember[] {
  return buildGulousStaff();
}
