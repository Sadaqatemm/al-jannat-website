import type { MenuItem } from "./types";

<<<<<<< HEAD
// Shared food image pool by category
const IMG = {
  samosa:    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  pakora:    "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
  soup:      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  salad:     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  tandoori:  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  kebab:     "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
  curry:     "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
  paneer:    "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=400&q=80",
  biryani:   "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
  naan:      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  rice:      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
  dessert:   "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
  drink:     "https://images.unsplash.com/photo-1626200926749-7d8e57d9b6c1?w=400&q=80",
  fish:      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
  prawn:     "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&q=80",
  thali:     "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  stir:      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",
  lamb:      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
  chai:      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80",
};

export function buildDefaultMenu(): MenuItem[] {
  return [
    // ── APPETIZER 小食 ────────────────────────────────────────────────────────
    { id:"a1",  name:{en:"Samosa (2 pcs)",          zh:"萨摩萨（2个）"},         description:{en:"Crispy golden pastry filled with spiced potato and peas, served with chutney.",zh:"酥脆金黄的三角酥皮饺，内填香料土豆与豌豆，配酸辣酱蘸食。"},                       price:28, category:"appetizer", image:IMG.samosa, spiceLevel:1, isVeg:true },
    { id:"a2",  name:{en:"Vegetable Pakora",         zh:"炸蔬菜球"},              description:{en:"Seasonal vegetables coated in spiced chickpea batter, deep-fried until crisp.",zh:"时令蔬菜裹香料鹰嘴豆粉糊，炸至外酥内嫩。"},                                        price:32, category:"appetizer", image:IMG.pakora, spiceLevel:1, isVeg:true },
    { id:"a3",  name:{en:"Veg Kebab",                zh:"炸菜饼"},               description:{en:"Spiced mixed vegetable patties, pan-fried to a golden crust.",zh:"混合蔬菜香料饼，煎至金黄香脆。"},                                                             price:38, category:"appetizer", image:IMG.pakora, spiceLevel:1, isVeg:true },
    { id:"a4",  name:{en:"Onion Bhaji",              zh:"洋葱巴吉"},              description:{en:"Shredded onion and green chilli in seasoned chickpea batter, fried golden.",zh:"丝状洋葱与青椒裹鹰嘴豆粉糊，炸至金黄酥脆。"},                                       price:30, category:"appetizer", image:IMG.pakora, spiceLevel:2, isVeg:true },
    { id:"a5",  name:{en:"Aloo Papri Chaat",         zh:"土豆加特"},              description:{en:"Crispy papri topped with spiced potato, yogurt, tamarind chutney and sev.",zh:"酥脆薄饼上铺香料土豆、酸奶、罗望子酱与细面条，层次丰富。"},                           price:25, category:"appetizer", image:IMG.samosa, spiceLevel:1, isVeg:true },
    { id:"a6",  name:{en:"Samosa Chaat",             zh:"萨摩萨加特"},            description:{en:"Crushed samosa with chickpeas, yogurt, chutneys and fresh coriander.",zh:"碎萨摩萨配鹰嘴豆、酸奶、双味酱与新鲜香菜。"},                                          price:32, category:"appetizer", image:IMG.samosa, spiceLevel:1, isVeg:true },
    { id:"a7",  name:{en:"Raita",                    zh:"黄瓜西红柿酸奶"},        description:{en:"Cool yogurt with cucumber, tomato and a pinch of cumin.",zh:"冰凉酸奶拌黄瓜、西红柿与少许孜然，清爽解腻。"},                                             price:22, category:"appetizer", image:IMG.drink,  spiceLevel:0, isVeg:true },
    { id:"a8",  name:{en:"Plain Yogurt",             zh:"原味手工酸奶"},          description:{en:"Fresh hand-set plain yogurt — smooth, cool and palate-cleansing.",zh:"新鲜手工原味酸奶，顺滑清爽。"},                                                          price:22, category:"appetizer", image:IMG.drink,  spiceLevel:0, isVeg:true },
    { id:"a9",  name:{en:"Indian Papad",             zh:"印度原味脆饼"},          description:{en:"Thin sun-dried lentil wafer, served plain or lightly roasted.",zh:"薄脆扁豆饼，原味或微烤，轻盈香脆。"},                                                       price:10, category:"appetizer", image:IMG.samosa, spiceLevel:0, isVeg:true },
    { id:"a10", name:{en:"Masala Papad",             zh:"玛萨拉脆饼"},            description:{en:"Crispy papad topped with onion, tomato, coriander and tangy spices.",zh:"脆饼上铺洋葱、西红柿、香菜与香料，风味十足。"},                                         price:16, category:"appetizer", image:IMG.samosa, spiceLevel:1, isVeg:true },
    { id:"a11", name:{en:"Pani Puri (5 pcs)",        zh:"帕尼普里（5个）"},       description:{en:"Five hollow crisp puri shells filled with spiced tamarind water, potato and chickpeas.",zh:"五只空心酥球，填入香料罗望子水、土豆与鹰嘴豆，印度街头经典。"},            price:22, category:"appetizer", image:IMG.samosa, spiceLevel:2, isVeg:true },

    // ── SOUP 汤 ───────────────────────────────────────────────────────────────
    { id:"s1",  name:{en:"Indian Tomato Soup",       zh:"特色番茄浓汤"},          description:{en:"Smooth roasted tomato soup with cumin, ginger and fresh cream.",zh:"烤番茄泥浓汤，加入孜然、生姜与鲜奶油，醇香顺滑。"},                                       price:26, category:"soup", image:IMG.soup, spiceLevel:1, isVeg:true },
    { id:"s2",  name:{en:"Lentil Soup",              zh:"扁豆蔬菜汤"},            description:{en:"Hearty slow-cooked lentil and vegetable soup, seasoned with turmeric and cumin.",zh:"扁豆与蔬菜慢炖汤，以姜黄与孜然调味，暖胃饱腹。"},                              price:25, category:"soup", image:IMG.soup, spiceLevel:1, isVeg:true },
    { id:"s3",  name:{en:"Corn Chicken Soup",        zh:"玉米鸡肉汤"},            description:{en:"Thick comforting soup with tender shredded chicken and sweet corn.",zh:"浓郁鸡丝玉米汤，暖心暖胃。"},                                                          price:28, category:"soup", image:IMG.soup, spiceLevel:0 },
    { id:"s4",  name:{en:"Vegetable Soup",           zh:"蔬菜汤"},               description:{en:"Light clear broth with seasonal garden vegetables and herbs.",zh:"清淡蔬菜清汤，时令蔬菜与香草，清爽怡人。"},                                                  price:22, category:"soup", image:IMG.soup, spiceLevel:0, isVeg:true },

    // ── SALAD 沙拉 ─────────────────────────────────────────────────────────────
    { id:"sl1", name:{en:"Afghan Salad",             zh:"阿富汗沙拉"},            description:{en:"Fresh tomato, cucumber, onion and coriander with lemon dressing.",zh:"新鲜番茄、黄瓜、洋葱与香菜，淋上柠檬汁，清爽自然。"},                                    price:16, category:"salad", image:IMG.salad, spiceLevel:0, isVeg:true },
    { id:"sl2", name:{en:"Green Salad",              zh:"蔬菜沙拉"},              description:{en:"Mixed seasonal greens with house vinaigrette.",zh:"什锦时令蔬菜沙拉，配自制油醋汁。"},                                                              price:18, category:"salad", image:IMG.salad, spiceLevel:0, isVeg:true },
    { id:"sl3", name:{en:"Chicken Salad",            zh:"烤鸡肉沙拉"},            description:{en:"Sliced grilled chicken breast on fresh greens with mint dressing.",zh:"烤鸡胸肉切片，搭配时令蔬菜与薄荷酱汁。"},                                               price:30, category:"salad", image:IMG.salad, spiceLevel:0 },
    { id:"sl4", name:{en:"Kabuli Channa Salad",      zh:"喀布尔鹰嘴豆沙拉"},     description:{en:"Tender chickpeas with herbs, lemon and a touch of chilli.",zh:"鹰嘴豆配香草、柠檬与少许辣椒，饱腹营养。"},                                                  price:24, category:"salad", image:IMG.salad, spiceLevel:1, isVeg:true },
    { id:"sl5", name:{en:"Greek Salad",              zh:"希腊沙拉"},              description:{en:"Classic olives, cucumber, tomato, red onion and feta-style cheese.",zh:"经典橄榄、黄瓜、番茄、红洋葱与奶酪，地中海风味。"},                                     price:32, category:"salad", image:IMG.salad, spiceLevel:0, isVeg:true },

    // ── TANDOORI 炉烤 ─────────────────────────────────────────────────────────
    { id:"t1",  name:{en:"Chicken Seekh Kebabs",     zh:"印式炉烤鸡肉串"},        description:{en:"Minced chicken blended with herbs and spices, skewered and grilled in the tandoor.",zh:"鸡肉碎混合香草与香料，穿签馕坑烤制，嫩滑多汁。"},                         price:46, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t2",  name:{en:"Mutton Seekh Kebabs",      zh:"印式炉烤羊肉串"},        description:{en:"Minced mutton with onion, fresh herbs and bold spices, grilled in our clay oven.",zh:"羊肉碎混合洋葱、香草与浓郁香料，馕坑炭烤，外焦内嫩。"},                  price:58, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t3",  name:{en:"Galouti Kebabs",           zh:"柔羊肉饼"},              description:{en:"Melt-in-the-mouth minced lamb patties with over 20 spices — a Lucknow classic.",zh:"入口即化的羊肉薄饼，融合逾20种香料，来自勒克瑙的宫廷经典。"},                  price:58, category:"tandoori", image:IMG.kebab, spiceLevel:1 },
    { id:"t4",  name:{en:"AL-JANNAT Special BBQ Platter", zh:"佳纳特特色烤肉盘"}, description:{en:"A grand sharing platter of our finest grilled meats and kebabs — the ultimate tandoor experience.",zh:"多款精选烤肉与串烤拼盘，佳纳特招牌烤肉盛宴。"},                 price:188, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t5",  name:{en:"Mutton Chop",              zh:"炉烤羊排"},              description:{en:"Tender lamb chops marinated in yogurt and spices, charred in the tandoor.",zh:"嫩羊排以酸奶与香料腌制，馕坑烤至焦香。"},                                          price:82, category:"tandoori", image:IMG.lamb, spiceLevel:2 },
    { id:"t6",  name:{en:"Chicken Tikka",            zh:"炉烤鸡肉串"},            description:{en:"Boneless chicken marinated in yogurt and spices, charred to smoky perfection.",zh:"去骨鸡肉以酸奶与香料腌制，馕坑烤至烟熏焦香。"},                               price:52, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t7",  name:{en:"Chicken Malai Tikka",      zh:"腰果酱奶香鸡肉串"},      description:{en:"Tender chicken in a creamy cashew and cream marinade, gently grilled.",zh:"鸡肉以腰果酱与鲜奶油腌制，温和烤制，奶香浓郁。"},                                    price:52, category:"tandoori", image:IMG.kebab, spiceLevel:1 },
    { id:"t8",  name:{en:"Mint Chicken Tikka",       zh:"薄荷烤鸡肉"},            description:{en:"Chicken marinated with fresh mint, green chilli and yogurt, grilled in the tandoor.",zh:"鸡肉以新鲜薄荷、青椒与酸奶腌制，馕坑炙烤，清香扑鼻。"},                   price:52, category:"tandoori", image:IMG.kebab, spiceLevel:1 },
    { id:"t9",  name:{en:"Garlic Chicken Tikka",     zh:"炉烤蒜泥鸡肉"},          description:{en:"Boldly garlic-marinated chicken tikka with a smoky tandoor char.",zh:"以浓郁蒜泥腌制的鸡肉串，馕坑烤出烟熏蒜香。"},                                          price:52, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t10", name:{en:"Fish Tikka",               zh:"炉烤鱼块"},              description:{en:"Firm fish marinated in turmeric, lemon and spices, grilled in the tandoor.",zh:"鱼块以姜黄、柠檬与香料腌制，馕坑炙烤，鲜嫩入味。"},                              price:45, category:"tandoori", image:IMG.fish, spiceLevel:1 },
    { id:"t11", name:{en:"Tangri Kebab",             zh:"腾格里烤鸡腿"},          description:{en:"Whole chicken legs marinated overnight and roasted in the tandoor until juicy.",zh:"整只鸡腿腌制一夜，馕坑慢烤至外酥里嫩，汁水丰盈。"},                           price:58, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t12", name:{en:"Pomfret Tandoori",         zh:"烤鲳鱼"},               description:{en:"Whole pomfret fish marinated in spiced yogurt and grilled in the tandoor.",zh:"整条鲳鱼以香料酸奶腌制，馕坑烤至外焦内嫩。"},                                     price:49, category:"tandoori", image:IMG.fish, spiceLevel:1 },
    { id:"t13", name:{en:"Tandoori Chicken",         zh:"炉烤鸡腿"},              description:{en:"Classic half chicken marinated in yogurt and spices, roasted in the tandoor.",zh:"经典半只鸡，酸奶香料腌制，馕坑烤至金黄酥香。"},                                  price:54, category:"tandoori", image:IMG.kebab, spiceLevel:2 },
    { id:"t14", name:{en:"Fish BBQ Platter",         zh:"烤鱼盘"},               description:{en:"A generous selection of grilled fish and seafood from our tandoor.",zh:"精选馕坑炙烤鱼类与海鲜拼盘，海味十足。"},                                              price:86, category:"tandoori", image:IMG.fish, spiceLevel:1 },

    // ── VEGETARIAN 素菜咖喱 ───────────────────────────────────────────────────
    { id:"v1",  name:{en:"Channa Masala",            zh:"鹰嘴豆咖喱"},            description:{en:"Hearty chickpeas slow-cooked in a tangy tomato-onion masala.",zh:"鹰嘴豆在酸香番茄洋葱玛萨拉中慢炖，饱腹又香浓。"},                                          price:42, category:"vegetarian", image:IMG.curry, spiceLevel:2, isVeg:true },
    { id:"v2",  name:{en:"Yellow Daal",              zh:"香辣扁豆咖喱"},          description:{en:"Slow-cooked yellow lentils tempered with cumin, garlic and fresh coriander.",zh:"黄扁豆慢炖，以孜然、蒜末与新鲜香菜炝锅提香。"},                                  price:42, category:"vegetarian", image:IMG.curry, spiceLevel:1, isVeg:true },
    { id:"v3",  name:{en:"Kadai Paneer",             zh:"印式干酪咖喱"},          description:{en:"Paneer and peppers cooked in a bold kadai masala with tomatoes.",zh:"印度奶酪与彩椒在浓郁卡达依玛萨拉中翻炒，香气四溢。"},                                   price:48, category:"vegetarian", image:IMG.paneer, spiceLevel:2, isVeg:true },
    { id:"v4",  name:{en:"Mushroom Masala",          zh:"蘑菇玛萨拉"},            description:{en:"Button mushrooms sautéed in a rich spiced tomato-onion gravy.",zh:"蘑菇在浓郁香料番茄洋葱汁中翻炒，鲜香浓郁。"},                                            price:48, category:"vegetarian", image:IMG.curry, spiceLevel:1, isVeg:true },
    { id:"v5",  name:{en:"Aloo Gobi",                zh:"香辣花菜薯仔咖喱"},      description:{en:"Cauliflower and potato dry-cooked with turmeric, cumin and green chilli.",zh:"花菜与土豆以姜黄、孜然与青椒干炒，香辣开胃。"},                                    price:40, category:"vegetarian", image:IMG.curry, spiceLevel:2, isVeg:true },
    { id:"v6",  name:{en:"Paneer Makhani",           zh:"黄油干酪咖喱"},          description:{en:"Paneer cubes in a velvety butter-tomato sauce with fenugreek.",zh:"印度奶酪块浸于丝滑黄油番茄酱汁中，加入葫芦巴叶提香。"},                                    price:48, category:"vegetarian", image:IMG.paneer, spiceLevel:1, isVeg:true },
    { id:"v7",  name:{en:"Palak Paneer",             zh:"帕拉克干酪咖喱"},        description:{en:"Fresh paneer cubes in a smooth, spiced spinach sauce.",zh:"新鲜印度奶酪块浸于细腻香料菠菜酱中，素食经典。"},                                              price:48, category:"vegetarian", image:IMG.paneer, spiceLevel:1, isVeg:true },
    { id:"v8",  name:{en:"Mix Vegetable",            zh:"杂菜咖喱"},              description:{en:"Seasonal vegetables slow-cooked in a mildly spiced tomato gravy.",zh:"时令蔬菜在清淡香料番茄汁中慢炖，营养均衡。"},                                            price:42, category:"vegetarian", image:IMG.curry, spiceLevel:1, isVeg:true },
    { id:"v9",  name:{en:"Matter Paneer",            zh:"青豆干酪咖喱"},          description:{en:"Paneer and green peas in a lightly spiced tomato-onion gravy.",zh:"印度奶酪与青豆在淡香番茄洋葱汁中焖煮，清爽可口。"},                                       price:48, category:"vegetarian", image:IMG.paneer, spiceLevel:1, isVeg:true },
    { id:"v10", name:{en:"Vegetable Kofta",          zh:"印式蔬菜球咖喱"},        description:{en:"Fried vegetable and paneer balls simmered in a rich curry sauce.",zh:"炸蔬菜奶酪球在浓郁咖喱酱中慢煮，外酥内嫩。"},                                           price:45, category:"vegetarian", image:IMG.curry, spiceLevel:1, isVeg:true },
    { id:"v11", name:{en:"Okra / Bhindi Masala",     zh:"秋葵玛萨拉"},            description:{en:"Stir-fried okra with onion, tomato and aromatic spices.",zh:"秋葵与洋葱、番茄一起香料翻炒，脆嫩爽口。"},                                                  price:45, category:"vegetarian", image:IMG.curry, spiceLevel:1, isVeg:true },
    { id:"v12", name:{en:"Dal Makhani",              zh:"奶油烩黑扁豆"},          description:{en:"Black lentils slow-cooked overnight in butter and cream — a true classic.",zh:"黑扁豆以黄油与奶油慢炖一夜，醇厚绵滑，经典之作。"},                              price:48, category:"vegetarian", image:IMG.curry, spiceLevel:1, isVeg:true },

    // ── CHICKEN 鸡肉咖喱 ──────────────────────────────────────────────────────
    { id:"c1",  name:{en:"Chicken Tikka Masala",     zh:"烤鸡肉咖喱"},            description:{en:"Grilled chicken tikka pieces in a rich, creamy tomato masala sauce.",zh:"烤鸡肉块浸于浓郁奶香番茄玛萨拉酱汁中，香气馥郁。"},                                  price:54, category:"chicken", image:IMG.curry, spiceLevel:2 },
    { id:"c2",  name:{en:"Chicken Methi-Malai",      zh:"奶香葫芦巴鸡肉咖喱"},    description:{en:"Chicken in a creamy fenugreek and fresh cream sauce — delicately aromatic.",zh:"鸡肉在奶油葫芦巴叶酱汁中慢炖，奶香浓郁，清雅芬芳。"},                           price:52, category:"chicken", image:IMG.curry, spiceLevel:1 },
    { id:"c3",  name:{en:"Chicken Shahi Korma",      zh:"腰果酱鸡肉咖喱"},        description:{en:"Chicken in a rich cashew and yogurt korma sauce — the royal curry.",zh:"鸡肉在皇家腰果酸奶科尔马酱中慢炖，奢华醇厚。"},                                      price:52, category:"chicken", image:IMG.curry, spiceLevel:1 },
    { id:"c4",  name:{en:"Dum Ka Murgh",             zh:"杜姆卡鸡肉咖喱"},        description:{en:"Whole spices and slow-sealed chicken cooked dum style — intense and fragrant.",zh:"整粒香料与鸡肉封罐慢炖，浓香四溢。"},                                       price:56, category:"chicken", image:IMG.curry, spiceLevel:2 },
    { id:"c5",  name:{en:"Butter Chicken",           zh:"经典黄油鸡肉咖喱"},      description:{en:"Tender chicken in a velvety butter-tomato sauce with fenugreek — our bestseller.",zh:"嫩滑鸡肉浸于丝滑黄油番茄酱汁，佳纳特最受欢迎菜品。"},                     price:56, category:"chicken", image:IMG.curry, spiceLevel:1 },
    { id:"c6",  name:{en:"Karahi Chicken",           zh:"锅子咖喱鸡"},            description:{en:"Chicken stir-cooked in a karahi wok with tomatoes, ginger and whole spices.",zh:"鸡肉在铸铁锅中与番茄、生姜、原粒香料大火翻炒，香浓热辣。"},                     price:58, category:"chicken", image:IMG.curry, spiceLevel:2 },
    { id:"c7",  name:{en:"Chicken Curry",            zh:"鸡肉咖喱"},              description:{en:"Classic bone-in chicken in a rich onion-tomato masala with ginger and garlic.",zh:"经典带骨鸡肉在浓郁洋葱番茄玛萨拉中慢炖，香气深厚。"},                          price:50, category:"chicken", image:IMG.curry, spiceLevel:2 },
    { id:"c8",  name:{en:"Chicken Vindaloo",         zh:"辣鸡肉咖喱"},            description:{en:"Fiery Goan-style chicken curry with vinegar, chilli and bold spices.",zh:"来自果阿的火辣咖喱鸡，以醋、辣椒与浓郁香料调味，刺激过瘾。"},                      price:52, category:"chicken", image:IMG.curry, spiceLevel:3 },
    { id:"c9",  name:{en:"Chicken Saag",             zh:"菠菜酱鸡肉咖喱"},        description:{en:"Tender chicken simmered in a vibrant spiced spinach sauce.",zh:"嫩滑鸡肉在鲜绿香料菠菜酱中慢炖，营养美味。"},                                             price:56, category:"chicken", image:IMG.curry, spiceLevel:1 },
    { id:"c10", name:{en:"Coconut Chicken",          zh:"椰汁鸡肉咖喱"},          description:{en:"Chicken in a mild, aromatic coconut milk curry with curry leaves.",zh:"鸡肉在清甜椰奶咖喱中慢煮，配咖喱叶提香，温和清香。"},                                   price:52, category:"chicken", image:IMG.curry, spiceLevel:1 },

    // ── LAMB 羊肉咖喱 ─────────────────────────────────────────────────────────
    { id:"l1",  name:{en:"Lamb Vindaloo",            zh:"印度辣羊肉咖喱"},        description:{en:"Fiery, tangy Goan-style lamb curry with vinegar and whole chillies.",zh:"来自果阿的火辣羊肉咖喱，以醋与完整辣椒调味，刺激十足。"},                           price:62, category:"lamb", image:IMG.lamb, spiceLevel:3 },
    { id:"l2",  name:{en:"Lamb Korma",               zh:"腰果酱羊肉咖喱"},        description:{en:"Tender lamb in a rich cashew-cream and yogurt korma — mild and luxurious.",zh:"嫩羊肉在浓郁腰果奶油酸奶科尔马中慢炖，奢华醇厚。"},                              price:62, category:"lamb", image:IMG.lamb, spiceLevel:1 },
    { id:"l3",  name:{en:"Lamb Rogan Josh",          zh:"印度香料羊肉咖喱"},      description:{en:"Classic Kashmiri lamb curry with aromatic whole spices and deep red colour.",zh:"经典克什米尔羊肉咖喱，香料浓郁，色泽深红，风味醇厚。"},                       price:62, category:"lamb", image:IMG.lamb, spiceLevel:2 },
    { id:"l4",  name:{en:"Keema Matar",              zh:"青豆羊肉沫咖喱"},        description:{en:"Minced lamb with green peas in a spiced tomato-onion masala.",zh:"羊肉碎与青豆在香料番茄洋葱玛萨拉中慢炖，家常醇厚。"},                                    price:62, category:"lamb", image:IMG.lamb, spiceLevel:2 },
    { id:"l5",  name:{en:"Bhuna Gosht",              zh:"香辣部纳羊肉咖喱"},      description:{en:"Slow-cooked lamb bhuna where spices are dry-fried into the meat for intense flavour.",zh:"羊肉与香料长时间干炒收汁，风味浓缩，香辣下饭。"},                    price:62, category:"lamb", image:IMG.lamb, spiceLevel:2 },
    { id:"l6",  name:{en:"Lamb Saag",                zh:"菠菜酱羊肉咖喱"},        description:{en:"Tender lamb pieces slow-cooked in a spiced spinach sauce.",zh:"嫩羊肉在香料菠菜酱中慢炖，鲜绿浓郁，营养满分。"},                                          price:62, category:"lamb", image:IMG.lamb, spiceLevel:1 },

    // ── SEAFOOD 海鲜咖喱 ──────────────────────────────────────────────────────
    { id:"sf1", name:{en:"Prawn Masala",             zh:"果阿虾玛萨拉"},          description:{en:"Juicy prawns in a tangy Goan-spiced tomato-onion masala.",zh:"鲜嫩虾仁在酸香果阿风味番茄洋葱玛萨拉中烹煮。"},                                            price:52, category:"seafood", image:IMG.prawn, spiceLevel:2 },
    { id:"sf2", name:{en:"Prawn Makhani",            zh:"马卡尼虾咖喱"},          description:{en:"Succulent prawns in a rich, creamy butter-tomato makhani sauce.",zh:"鲜嫩虾仁在丝滑黄油番茄马卡尼酱汁中慢煮，奶香浓郁。"},                                   price:52, category:"seafood", image:IMG.prawn, spiceLevel:1 },
    { id:"sf3", name:{en:"Fish Curry",               zh:"辣鱼咖喱"},              description:{en:"Fresh fish fillets simmered in a tangy tomato-onion masala with mustard seeds.",zh:"新鲜鱼片在酸香番茄洋葱玛萨拉中炖煮，芥末籽提香。"},                          price:48, category:"seafood", image:IMG.fish, spiceLevel:2 },
    { id:"sf4", name:{en:"Prawn Vindaloo",           zh:"印度辣虾咖喱"},          description:{en:"Fiery Goan-style prawns with vinegar, chilli and bold spices.",zh:"果阿风味火辣虾咖喱，以醋与辣椒调味，刺激鲜美。"},                                        price:52, category:"seafood", image:IMG.prawn, spiceLevel:3 },

    // ── NAAN 印度烤饼 ─────────────────────────────────────────────────────────
    { id:"n1",  name:{en:"Butter Naan",              zh:"黄油烤饼"},              description:{en:"Soft tandoor-baked flatbread brushed with rich melted butter.",zh:"柔软馕坑烤饼，出炉后刷上融化黄油，温热蓬松。"},                                           price:14, category:"naan", image:IMG.naan, spiceLevel:0, isVeg:true },
    { id:"n2",  name:{en:"Garlic Naan",              zh:"蒜香烤饼"},              description:{en:"Tandoor flatbread topped with minced garlic and herbs, finished with butter.",zh:"馕坑烤饼，撒上蒜末与新鲜香草，刷黄油提香。"},                                    price:14, category:"naan", image:IMG.naan, spiceLevel:0, isVeg:true },
    { id:"n3",  name:{en:"Missi Roti",               zh:"鹰嘴豆烙饼"},            description:{en:"Rustic whole-wheat and chickpea flour flatbread seasoned with cumin and carom seeds.",zh:"全麦与鹰嘴豆粉混合烙饼，以孜然与葛缕子调味，质朴醇香。"},                 price:12, category:"naan", image:IMG.naan, spiceLevel:1, isVeg:true },
    { id:"n4",  name:{en:"Keema Naan",               zh:"羊肉泥薄馅饼"},          description:{en:"Naan stuffed with spiced minced lamb, baked in the tandoor.",zh:"内填香料羊肉碎的馕饼，馕坑烤制，肉香四溢。"},                                              price:16, category:"naan", image:IMG.naan, spiceLevel:2 },
    { id:"n5",  name:{en:"Palak Paneer Naan",        zh:"菠菜干酪馅饼"},          description:{en:"Naan stuffed with spiced spinach and fresh paneer.",zh:"馕饼内填香料菠菜与新鲜印度奶酪，风味浓郁。"},                                                  price:15, category:"naan", image:IMG.naan, spiceLevel:1, isVeg:true },
    { id:"n6",  name:{en:"Roti",                     zh:"烙饼"},                  description:{en:"Whole-wheat flatbread cooked on the tawa griddle — light and wholesome.",zh:"全麦面饼铁板烙制，清淡朴实，营养满分。"},                                          price:12, category:"naan", image:IMG.naan, spiceLevel:0, isVeg:true },
    { id:"n7",  name:{en:"Potato Naan",              zh:"土豆烤饼"},              description:{en:"Thin flatbread stuffed with spiced mashed potato.",zh:"薄饼内填入香料土豆泥，饱腹又暖心。"},                                                            price:13, category:"naan", image:IMG.naan, spiceLevel:1, isVeg:true },
    { id:"n8",  name:{en:"Onion Naan",               zh:"洋葱薄饼"},              description:{en:"Tandoor naan filled with caramelised onion and herbs.",zh:"馕坑烤饼内填焦糖洋葱与香草，香甜可口。"},                                                      price:14, category:"naan", image:IMG.naan, spiceLevel:0, isVeg:true },
    { id:"n9",  name:{en:"Naan (Plain)",             zh:"原味烤饼"},              description:{en:"Classic plain tandoor-baked naan — lightly charred and chewy.",zh:"经典原味馕坑烤馕，外皮微焦，内里筋道。"},                                               price:10, category:"naan", image:IMG.naan, spiceLevel:0, isVeg:true },
    { id:"n10", name:{en:"Lachedar Paratha",         zh:"千层酥油饼"},            description:{en:"Flaky multi-layered whole-wheat paratha cooked with ghee — crispy and rich.",zh:"全麦多层酥油饼，以酥油烙制，外酥内软，层次分明。"},                             price:15, category:"naan", image:IMG.naan, spiceLevel:0, isVeg:true },

    // ── RICE 米饭 ─────────────────────────────────────────────────────────────
    { id:"r1",  name:{en:"Afghan Mutton Pulao",      zh:"阿富汗羊肉米饭"},        description:{en:"Fragrant basmati rice slow-cooked with tender mutton and Afghan spices.",zh:"印度香米与嫩羊肉以阿富汗香料慢炖，米粒吸饱肉汁，香气浓郁。"},                      price:70, category:"rice", image:IMG.biryani, spiceLevel:1 },
    { id:"r2",  name:{en:"Chicken Biryani",          zh:"鸡肉咖喱饭"},            description:{en:"Basmati rice layered with marinated chicken and whole spices, slow-cooked dum style.",zh:"印度香米与腌制鸡肉分层码放，封罐慢炖，香气四溢。"},                   price:54, category:"rice", image:IMG.biryani, spiceLevel:2 },
    { id:"r3",  name:{en:"Chicken Keema Curry Rice", zh:"碎肉咖喱饭"},            description:{en:"Fragrant rice topped with richly spiced minced chicken curry.",zh:"香米搭配浓郁香料鸡肉碎咖喱，下饭一绝。"},                                               price:75, category:"rice", image:IMG.biryani, spiceLevel:2 },
    { id:"r4",  name:{en:"Mutton Biryani",           zh:"羊肉咖喱饭"},            description:{en:"Tender mutton layered with saffron-scented basmati rice, slow-cooked to perfection.",zh:"嫩羊肉与藏红花香米分层叠放，封罐慢炖，每口都充满浓郁香气。"},         price:62, category:"rice", image:IMG.biryani, spiceLevel:2 },
    { id:"r5",  name:{en:"Vegetable Biryani",        zh:"蔬菜咖喱饭"},            description:{en:"Fragrant basmati rice with seasonal vegetables and aromatic whole spices.",zh:"印度香米与时令蔬菜及原粒香料同炖，素食版比尔亚尼。"},                            price:45, category:"rice", image:IMG.biryani, spiceLevel:1, isVeg:true },
    { id:"r6",  name:{en:"Coconut Rice",             zh:"椰汁咖喱饭"},            description:{en:"Basmati rice cooked in coconut milk with curry leaves and mustard seeds.",zh:"印度香米以椰奶烹煮，加入咖喱叶与芥末籽提香，清甜芬芳。"},                         price:30, category:"rice", image:IMG.rice, spiceLevel:0, isVeg:true },
    { id:"r7",  name:{en:"Saffron Rice",             zh:"藏红花香米"},            description:{en:"Delicate long-grain basmati rice infused with saffron and cardamom.",zh:"细长印度香米以藏红花与豆蔻精心调制，色泽金黄，香气清雅。"},                           price:30, category:"rice", image:IMG.rice, spiceLevel:0, isVeg:true },
    { id:"r8",  name:{en:"Prawn Palao",              zh:"虾仁米饭"},              description:{en:"Fragrant basmati rice cooked with juicy prawns and aromatic spices.",zh:"印度香米与鲜嫩虾仁及香料同炒，鲜香四溢。"},                                          price:42, category:"rice", image:IMG.biryani, spiceLevel:1 },
    { id:"r9",  name:{en:"Basmati Rice",             zh:"巴斯马蒂香米饭"},        description:{en:"Perfectly steamed long-grain basmati rice — the ideal accompaniment.",zh:"完美蒸制的细长印度香米，搭配所有咖喱的理想选择。"},                                  price:15, category:"rice", image:IMG.rice, spiceLevel:0, isVeg:true },
    { id:"r10", name:{en:"Jeera Rice",               zh:"孜然香米饭"},            description:{en:"Basmati rice tempered with cumin seeds and ghee — simple and fragrant.",zh:"以孜然籽与酥油调制的印度香米，清香简约。"},                                       price:28, category:"rice", image:IMG.rice, spiceLevel:0, isVeg:true },
    { id:"r11", name:{en:"Lamb Rice (Special)",      zh:"特色烤羊腿米饭"},        description:{en:"A whole slow-roasted spiced lamb leg served on a bed of fragrant rice — a feast.",zh:"整只香料慢烤羊腿搭配香米，盛宴级别的招牌大菜。"},                      price:158, category:"rice", image:IMG.biryani, spiceLevel:2 },

    // ── INDO-CHINESE 印式中餐 ─────────────────────────────────────────────────
    { id:"ic1", name:{en:"Gobi Manchurian",          zh:"炒椰菜花球"},            description:{en:"Crispy cauliflower florets tossed in a tangy Indo-Chinese sauce.",zh:"酥脆花菜球裹上酸甜印式中国酱汁，新颖独特。"},                                         price:42, category:"indo-chinese", image:IMG.stir, spiceLevel:1, isVeg:true },
    { id:"ic2", name:{en:"Paneer Chili",             zh:"辣炒干酪"},              description:{en:"Paneer and capsicum stir-fried in a spicy Indo-Chinese chilli sauce.",zh:"印度奶酪与彩椒在香辣印式中国酱汁中翻炒，融合风味十足。"},                           price:48, category:"indo-chinese", image:IMG.stir, spiceLevel:2, isVeg:true },
    { id:"ic3", name:{en:"Chicken Chili",            zh:"辣子鸡肉"},              description:{en:"Crispy chicken pieces stir-fried in a bold garlic-chilli Indo-Chinese sauce.",zh:"酥脆鸡肉块在浓郁蒜香辣椒印式酱汁中翻炒，香辣过瘾。"},                        price:54, category:"indo-chinese", image:IMG.stir, spiceLevel:2 },
    { id:"ic4", name:{en:"Vegetable Fried Rice",     zh:"蔬菜炒饭"},              description:{en:"Wok-tossed basmati rice with seasonal vegetables and soy-ginger seasoning.",zh:"印度香米与时令蔬菜大火翻炒，加入酱油与姜末调味，简约美味。"},                    price:38, category:"indo-chinese", image:IMG.stir, spiceLevel:0, isVeg:true },
    { id:"ic5", name:{en:"Chicken Fried Rice",       zh:"鸡肉炒饭"},              description:{en:"Wok-tossed rice with tender chicken, egg and Indo-Chinese seasonings.",zh:"香米与嫩滑鸡肉、鸡蛋大火翻炒，印式中国风味炒饭。"},                               price:45, category:"indo-chinese", image:IMG.stir, spiceLevel:1 },

    // ── DESSERTS & DRINKS 甜品&饮品 ───────────────────────────────────────────
    { id:"dd1", name:{en:"Gulab Jamun",              zh:"印度甜乳酪球"},          description:{en:"Soft milk-solid dumplings soaked in rose-cardamom sugar syrup — a beloved classic.",zh:"柔软奶固体球浸于玫瑰豆蔻糖浆中，印度最受欢迎的甜品之一。"},              price:20, category:"desserts-drinks", image:IMG.dessert, spiceLevel:0, isVeg:true },
    { id:"dd2", name:{en:"Indian Masala Chai",       zh:"印度玛萨拉奶茶"},        description:{en:"Strong black tea simmered with milk, ginger, cardamom, cinnamon and cloves.",zh:"浓郁红茶与牛奶同煮，加入姜、豆蔻、肉桂与丁香，店内招牌热饮。"},              price:22, category:"desserts-drinks", image:IMG.chai, spiceLevel:0, isVeg:true },
    { id:"dd3", name:{en:"Rice Kheer",               zh:"米布丁"},               description:{en:"Slow-simmered rice pudding with whole milk, saffron, cardamom and pistachios.",zh:"米粒在全脂牛奶中慢炖，以藏红花、豆蔻与开心果碎点缀。"},                     price:20, category:"desserts-drinks", image:IMG.dessert, spiceLevel:0, isVeg:true },
    { id:"dd4", name:{en:"Black Tea (pot)",          zh:"红茶（壶）"},            description:{en:"A full pot of premium loose-leaf black tea.",zh:"优质散叶红茶整壶供应，茶香醇厚。"},                                                                    price:35, category:"desserts-drinks", image:IMG.chai, spiceLevel:0, isVeg:true },
    { id:"dd5", name:{en:"Lemonade",                 zh:"酸甜柠檬汁"},            description:{en:"Freshly squeezed lemon juice with a touch of sweetness — cool and refreshing.",zh:"鲜榨柠檬汁，酸甜清凉，消暑解渴。"},                                       price:18, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd6", name:{en:"Sweet Lassi",              zh:"甜酸奶饮料"},            description:{en:"Chilled blended yogurt drink sweetened with sugar and a hint of cardamom.",zh:"冰凉酸奶饮料，以糖与豆蔻调甜，清爽顺口。"},                                    price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd7", name:{en:"Salted Lassi",             zh:"咸酸奶饮料"},            description:{en:"Cool yogurt drink seasoned with a pinch of salt and cumin — a classic refresher.",zh:"以少许盐与孜然调味的冰爽酸奶饮料，清热解渴。"},                          price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd8", name:{en:"Banana Lassi",             zh:"香蕉味酸奶饮料"},        description:{en:"Creamy blended yogurt drink with ripe banana.",zh:"浓郁香蕉与酸奶搅打而成，香甜顺滑。"},                                                                price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd9", name:{en:"Mango Lassi",              zh:"芒果味酸奶饮料"},        description:{en:"Chilled yogurt blended with ripe mango pulp and a pinch of cardamom.",zh:"冰镇酸奶与浓郁芒果果泥搅打，加入少许豆蔻，清爽细腻。"},                           price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd10",name:{en:"Strawberry Lassi",         zh:"草莓味酸奶饮料"},        description:{en:"Refreshing yogurt drink blended with sweet strawberries.",zh:"新鲜草莓与酸奶搅打，酸甜清爽，色泽诱人。"},                                               price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd11",name:{en:"Mango Milk Shake",         zh:"芒果奶昔"},              description:{en:"Thick and creamy mango milkshake made with fresh milk.",zh:"浓郁醇滑的芒果牛奶昔，以新鲜牛奶调制。"},                                                   price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd12",name:{en:"Banana Milk Shake",        zh:"香蕉奶昔"},              description:{en:"Thick banana milkshake blended with fresh whole milk.",zh:"香浓香蕉与全脂牛奶搅打而成，饱腹又美味。"},                                                   price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd13",name:{en:"Strawberry Milk Shake",    zh:"草莓奶昔"},              description:{en:"Fresh strawberry milkshake — vibrant, sweet and creamy.",zh:"鲜草莓牛奶昔，色泽鲜艳，甜蜜顺滑。"},                                                      price:22, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd14",name:{en:"Water",                   zh:"矿泉水"},                description:{en:"Still mineral water.",zh:"矿泉水。"},                                                                                                                     price:2,  category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd15",name:{en:"Coke / Sprite",            zh:"可口可乐/雪碧"},         description:{en:"Ice-cold Coca-Cola or Sprite.",zh:"冰镇可口可乐或雪碧。"},                                                                                                 price:5,  category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd16",name:{en:"Soda Water",               zh:"苏打水"},               description:{en:"Chilled sparkling soda water.",zh:"冰爽苏打水。"},                                                                                                        price:6,  category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },
    { id:"dd17",name:{en:"1.5L Coke / Sprite",       zh:"1.5L可乐/雪碧"},        description:{en:"Large 1.5 litre bottle of Coca-Cola or Sprite — ideal for sharing.",zh:"1.5升大瓶可口可乐或雪碧，适合多人分享。"},                                           price:15, category:"desserts-drinks", image:IMG.drink, spiceLevel:0, isVeg:true },

    // ── SET MENU 特色套餐 ─────────────────────────────────────────────────────
    { id:"sm1", name:{en:"AL-JANNAT Special Thali",  zh:"佳纳特特色塔里套餐"},    description:{en:"The full Al Jannat experience: Vegetable Salad, Papad, Raita, Mix Vegetable, Matter Paneer, Coconut Chicken, Lamb Rogan Josh, Basmati Rice, Butter Naan, Gulab Jamun, Masala Chai.",zh:"完整的佳纳特体验：蔬菜沙拉、薄脆饼、黄瓜酸奶、杂菜咖喱、青豆干酪咖喱、椰汁鸡肉咖喱、香料羊肉咖喱、香米、黄油烤饼、甜乳酪球、玛萨拉奶茶。"}, price:138, category:"set-menu", image:IMG.thali, spiceLevel:1 },
=======
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
    // {
    //   id: "paneer-tikka",
    //   name: { en: "Paneer Tikka", zh: "烤印度奶酪" },
    //   description: {
    //     en: "Marinated cottage cheese, tandoor-grilled with peppers.",
    //     zh: "腌制印度奶酪，搭配彩椒土炉烤制。",
    //   },
    //   price: 42,
    //   isPlaceholder: true,
    //   category: "starters",
    //   image:
    //     "https://images.unsplash.com/photo-1626132647523-66c5bf60d4b2?w=400&q=80",
    //   spiceLevel: 1,
    //   isVeg: true,
    // },

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
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
  ];
}
