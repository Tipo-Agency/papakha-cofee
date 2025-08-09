// Типы для продуктов с переводами
export interface ProductTranslation {
  name: string
  description: string
}

export interface Product {
  id: number
  image: string
  price: string
  category: string
  translations: {
    ru: ProductTranslation
    uz: ProductTranslation
    en: ProductTranslation
  }
}

// Переводы интерфейса
export const translations = {
  ru: {
    // Интерфейс
    searchPlaceholder: "Введите название блюда...",
    searchTitle: "Поиск блюд",
    noResults: "Блюда не найдены",
    startTyping: "Начните вводить название блюда",
    addToCart: "Добавить",
    
    // Категории меню
    menuCategories: [
      "Новинки сезона",
      "Завтраки",
      "Блины",
      "Горячие блюда",
      "Бургеры",
      "Сендвичи",
      "Выпечка",
      "Супы",
      "Салаты",
      "Гарниры",
      "Детское меню",
      "Лимонады",
      "Свежевыжатые соки/Вода",
      "Холодный кофе",
      "Йогурты&Боулы",
      "Смузи",
      "Детские напитки",
      "Кофе",
      "Десерты",
      "Чаи",
      "Начинки и соусы",
    ]
  },
  uz: {
    // Интерфейс
    searchPlaceholder: "Taom nomini kiriting...",
    searchTitle: "Taom qidirish",
    noResults: "Taomlar topilmadi",
    startTyping: "Taom nomini kiritishni boshlang",
    addToCart: "Qo'shish",
    
    // Категории меню
    menuCategories: [
      "Mavsum yangiliklari",
      "Nonushtalar",
      "Blinlar",
      "Issiq taomlar",
      "Burgerlar",
      "Sendvichlar",
      "Pishiriqlar",
      "Sho'rvalar",
      "Salatlar",
      "Garnir",
      "Bolalar menyusi",
      "Limonadlar",
      "Yangi siqilgan sharbatlar/Suv",
      "Sovuq qahva",
      "Yogurt va Bowllar",
      "Smuzalar",
      "Bolalar ichimliklari",
      "Qahva",
      "Desertlar",
      "Choylar",
      "To'ldirish va souslar",
    ]
  },
  en: {
    // Интерфейс
    searchPlaceholder: "Enter dish name...",
    searchTitle: "Search dishes",
    noResults: "No dishes found",
    startTyping: "Start typing dish name",
    addToCart: "Add",
    
    // Категории меню
    menuCategories: [
      "Season novelties",
      "Breakfast",
      "Pancakes",
      "Hot dishes",
      "Burgers",
      "Sandwiches",
      "Bakery",
      "Soups",
      "Salads",
      "Sides",
      "Kids menu",
      "Lemonades",
      "Fresh juices/Water",
      "Cold coffee",
      "Yogurt&Bowls",
      "Smoothies",
      "Kids drinks",
      "Coffee",
      "Desserts",
      "Teas",
      "Toppings and sauces",
    ]
  }
}

// Все продукты с переводами
export const allProducts: Product[] = [
  // НОВИНКИ СЕЗОНА (1-4)
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=200",
    price: "100,000 сум",
    category: "Новинки сезона",
    translations: {
      ru: {
        name: "Аффогато 400 мл",
        description: "Классический итальянский десерт с эспрессо и мороженым"
      },
      uz: {
        name: "Affogato 400 ml",
        description: "Klassik italyan deserti espresso va muzqaymoq bilan"
      },
      en: {
        name: "Affogato 400ml",
        description: "Classic Italian dessert with espresso and ice cream"
      }
    }
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=200",
    price: "100,000 сум",
    category: "Новинки сезона",
    translations: {
      ru: {
        name: "Айс Американо 220 мл",
        description: "Освежающий холодный американо со льдом"
      },
      uz: {
        name: "Ayis Amerikano 220 ml",
        description: "Muz bilan tetiklantiruvchi sovuq amerikano"
      },
      en: {
        name: "Iced Americano 220ml",
        description: "Refreshing iced americano with ice"
      }
    }
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=200",
    price: "100,000 сум",
    category: "Новинки сезона",
    translations: {
      ru: {
        name: "Айс Капучино 300 мл",
        description: "Холодный капучино с молочной пенкой"
      },
      uz: {
        name: "Ayis Kapuchino 300 ml",
        description: "Sut ko'pigi bilan sovuq kapuchino"
      },
      en: {
        name: "Iced Cappuccino 300ml",
        description: "Cold cappuccino with milk foam"
      }
    }
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=200",
    price: "100,000 сум",
    category: "Новинки сезона",
    translations: {
      ru: {
        name: "Айс Латте 350 мл",
        description: "Освежающий холодный латте"
      },
      uz: {
        name: "Ayis Latte 350 ml",
        description: "Tetiklantiruvchi sovuq latte"
      },
      en: {
        name: "Iced Latte 350ml",
        description: "Refreshing cold latte"
      }
    }
  },

  // ЗАВТРАКИ (22-29)
  {
    id: 22,
    image: "/placeholder.svg?height=200&width=200",
    price: "100,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Курагова каша",
        description: "Полезная каша с курагой и орехами"
      },
      uz: {
        name: "O'rik botqasi",
        description: "O'rik va yong'oq bilan foydali botqa"
      },
      en: {
        name: "Apricot Porridge",
        description: "Healthy porridge with apricots and nuts"
      }
    }
  },
  {
    id: 23,
    image: "/placeholder.svg?height=200&width=200",
    price: "85,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Овсяная каша с ягодами",
        description: "Питательная овсяная каша со свежими ягодами"
      },
      uz: {
        name: "Meva bilan jo'dari botqasi",
        description: "Yangi mevalar bilan ozuqaviy jo'dari botqasi"
      },
      en: {
        name: "Oatmeal with Berries",
        description: "Nutritious oatmeal with fresh berries"
      }
    }
  },
  {
    id: 24,
    image: "/placeholder.svg?height=200&width=200",
    price: "120,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Яичница с беконом",
        description: "Классическая яичница с хрустящим беконом"
      },
      uz: {
        name: "Bekon bilan qovurilgan tuxum",
        description: "Qaytgan bekon bilan klassik qovurilgan tuxum"
      },
      en: {
        name: "Scrambled Eggs with Bacon",
        description: "Classic scrambled eggs with crispy bacon"
      }
    }
  },
  {
    id: 25,
    image: "/placeholder.svg?height=200&width=200",
    price: "95,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Омлет с сыром",
        description: "Нежный омлет с расплавленным сыром"
      },
      uz: {
        name: "Pishloqli omlet",
        description: "Eriydigan pishloq bilan yumshoq omlet"
      },
      en: {
        name: "Cheese Omelet",
        description: "Tender omelet with melted cheese"
      }
    }
  },
  {
    id: 26,
    image: "/placeholder.svg?height=200&width=200",
    price: "110,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Сырники со сметаной",
        description: "Домашние сырники с натуральной сметаной"
      },
      uz: {
        name: "Smetana bilan tvorog",
        description: "Tabiiy smetana bilan uy tvorogi"
      },
      en: {
        name: "Cottage Cheese with Sour Cream",
        description: "Homemade cottage cheese with natural sour cream"
      }
    }
  },
  {
    id: 27,
    image: "/placeholder.svg?height=200&width=200",
    price: "130,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Тост с авокадо",
        description: "Полезный тост с авокадо и специями"
      },
      uz: {
        name: "Avokado bilan tost",
        description: "Avokado va ziravorlar bilan foydali tost"
      },
      en: {
        name: "Avocado Toast",
        description: "Healthy toast with avocado and spices"
      }
    }
  },
  {
    id: 28,
    image: "/placeholder.svg?height=200&width=200",
    price: "180,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Круассан с лососем",
        description: "Французский круассан с слабосоленым лососем"
      },
      uz: {
        name: "Losos bilan kruassan",
        description: "Sho'r losos bilan frantsuz kruassani"
      },
      en: {
        name: "Croissant with Salmon",
        description: "French croissant with lightly salted salmon"
      }
    }
  },
  {
    id: 29,
    image: "/placeholder.svg?height=200&width=200",
    price: "140,000 сум",
    category: "Завтраки",
    translations: {
      ru: {
        name: "Панкейки с сиропом",
        description: "Американские панкейки с кленовым сиропом"
      },
      uz: {
        name: "Sirop bilan pankeyk",
        description: "Zaytun siropi bilan amerikan pankeyiklari"
      },
      en: {
        name: "Pancakes with Syrup",
        description: "American pancakes with maple syrup"
      }
    }
  },

  // БЛИНЫ (42-46)
  {
    id: 42,
    image: "/placeholder.svg?height=200&width=200",
    price: "100,000 сум",
    category: "Блины",
    translations: {
      ru: {
        name: "Блины Классические с маслом",
        description: "Традиционные русские блины с маслом"
      },
      uz: {
        name: "Sariyog' bilan klassik blinlar",
        description: "Sariyog' bilan an'anaviy rus blinlari"
      },
      en: {
        name: "Classic Pancakes with Butter",
        description: "Traditional Russian pancakes with butter"
      }
    }
  },
  {
    id: 43,
    image: "/placeholder.svg?height=200&width=200",
    price: "120,000 сум",
    category: "Блины",
    translations: {
      ru: {
        name: "Блины с творогом",
        description: "Нежные блины с домашним творогом"
      },
      uz: {
        name: "Tvorog bilan blinlar",
        description: "Uy tvorogi bilan yumshoq blinlar"
      },
      en: {
        name: "Pancakes with Cottage Cheese",
        description: "Tender pancakes with homemade cottage cheese"
      }
    }
  },
  {
    id: 44,
    image: "/placeholder.svg?height=200&width=200",
    price: "110,000 сум",
    category: "Блины",
    translations: {
      ru: {
        name: "Блины с джемом",
        description: "Сладкие блины с ягодным джемом"
      },
      uz: {
        name: "Jem bilan blinlar",
        description: "Rezavor jemi bilan shirin blinlar"
      },
      en: {
        name: "Pancakes with Jam",
        description: "Sweet pancakes with berry jam"
      }
    }
  },
  {
    id: 45,
    image: "/placeholder.svg?height=200&width=200",
    price: "105,000 сум",
    category: "Блины",
    translations: {
      ru: {
        name: "Блины с икрой",
        description: "Блины с красной икрой и сметаной"
      },
      uz: {
        name: "Ikra bilan blinlar",
        description: "Qizil ikra va smetana bilan blinlar"
      },
      en: {
        name: "Pancakes with Caviar",
        description: "Pancakes with red caviar and sour cream"
      }
    }
  },
  {
    id: 46,
    image: "/placeholder.svg?height=200&width=200",
    price: "115,000 сум",
    category: "Блины",
    translations: {
      ru: {
        name: "Блины с мёдом",
        description: "Ароматные блины с натуральным мёдом"
      },
      uz: {
        name: "Asal bilan blinlar",
        description: "Tabiiy asal bilan xushbo'y blinlar"
      },
      en: {
        name: "Pancakes with Honey",
        description: "Aromatic pancakes with natural honey"
      }
    }
  },

  // ГОРЯЧИЕ БЛЮДА (65-68)
  {
    id: 65,
    image: "/placeholder.svg?height=200&width=200",
    price: "1300 сум",
    category: "Горячие блюда",
    translations: {
      ru: {
        name: "Хинкал Papakha",
        description: "Традиционное дагестанское блюдо"
      },
      uz: {
        name: "Xinkal Papakha",
        description: "An'anaviy dog'iston taomi"
      },
      en: {
        name: "Khinkal Papakha",
        description: "Traditional Dagestani dish"
      }
    }
  },
  {
    id: 66,
    image: "/placeholder.svg?height=200&width=200",
    price: "1200 сум",
    category: "Горячие блюда",
    translations: {
      ru: {
        name: "Плов узбекский",
        description: "Ароматный узбекский плов с бараниной"
      },
      uz: {
        name: "O'zbek plovi",
        description: "Qo'y go'shti bilan xushbo'y o'zbek plovi"
      },
      en: {
        name: "Uzbek Pilaf",
        description: "Aromatic Uzbek pilaf with lamb"
      }
    }
  },
  {
    id: 67,
    image: "/placeholder.svg?height=200&width=200",
    price: "1500 сум",
    category: "Горячие блюда",
    translations: {
      ru: {
        name: "Шашлык из баранины",
        description: "Сочный шашлык из отборной баранины"
      },
      uz: {
        name: "Qo'y go'shti shashlik",
        description: "Tanlab olingan qo'y go'shtidan serjola shashlik"
      },
      en: {
        name: "Lamb Shashlik",
        description: "Juicy shashlik from premium lamb"
      }
    }
  },
  {
    id: 68,
    image: "/placeholder.svg?height=200&width=200",
    price: "1100 сум",
    category: "Горячие блюда",
    translations: {
      ru: {
        name: "Курица табака",
        description: "Традиционная курица по-грузински"
      },
      uz: {
        name: "Tovuq tabaka",
        description: "An'anaviy gruzin uslubida tovuq"
      },
      en: {
        name: "Chicken Tabaka",
        description: "Traditional Georgian-style chicken"
      }
    }
  },

  // БУРГЕРЫ (60-63)
  {
    id: 60,
    image: "/placeholder.svg?height=200&width=200",
    price: "1050 сум",
    category: "Бургеры",
    translations: {
      ru: {
        name: "Бургер на листьях салата",
        description: "Полезный бургер без булочки"
      },
      uz: {
        name: "Salat barglari ustida burger",
        description: "Non bulkasiz foydali burger"
      },
      en: {
        name: "Lettuce Wrap Burger",
        description: "Healthy burger without bun"
      }
    }
  },
  {
    id: 61,
    image: "/placeholder.svg?height=200&width=200",
    price: "950 сум",
    category: "Бургеры",
    translations: {
      ru: {
        name: "Чизбургер классический",
        description: "Классический чизбургер с говядиной"
      },
      uz: {
        name: "Klassik chizburger",
        description: "Mol go'shti bilan klassik chizburger"
      },
      en: {
        name: "Classic Cheeseburger",
        description: "Classic cheeseburger with beef"
      }
    }
  },
  {
    id: 62,
    image: "/placeholder.svg?height=200&width=200",
    price: "890 сум",
    category: "Бургеры",
    translations: {
      ru: {
        name: "Бургер с курицей",
        description: "Сочный бургер с куриной грудкой"
      },
      uz: {
        name: "Tovuqli burger",
        description: "Tovuq ko'kragi bilan serjola burger"
      },
      en: {
        name: "Chicken Burger",
        description: "Juicy burger with chicken breast"
      }
    }
  },
  {
    id: 63,
    image: "/placeholder.svg?height=200&width=200",
    price: "850 сум",
    category: "Бургеры",
    translations: {
      ru: {
        name: "Веган бургер",
        description: "Растительный бургер для веганов"
      },
      uz: {
        name: "Vegan burger",
        description: "Veganlar uchun o'simlik burger"
      },
      en: {
        name: "Vegan Burger",
        description: "Plant-based burger for vegans"
      }
    }
  },

  // СЕНДВИЧИ (46-49)
  {
    id: 46,
    image: "/placeholder.svg?height=200&width=200",
    price: "870 сум",
    category: "Сендвичи",
    translations: {
      ru: {
        name: "Кесадилья с курицей",
        description: "Мексиканская кесадилья с сочной курицей"
      },
      uz: {
        name: "Tovuqli kesadilla",
        description: "Serjola tovuq bilan meksikalik kesadilla"
      },
      en: {
        name: "Chicken Quesadilla",
        description: "Mexican quesadilla with juicy chicken"
      }
    }
  },
  {
    id: 47,
    image: "/placeholder.svg?height=200&width=200",
    price: "790 сум",
    category: "Сендвичи",
    translations: {
      ru: {
        name: "Клаб сэндвич",
        description: "Многослойный сэндвич с курицей и беконом"
      },
      uz: {
        name: "Klub sendvich",
        description: "Tovuq va bekon bilan ko'p qavatli sendvich"
      },
      en: {
        name: "Club Sandwich",
        description: "Multi-layered sandwich with chicken and bacon"
      }
    }
  },
  {
    id: 48,
    image: "/placeholder.svg?height=200&width=200",
    price: "720 сум",
    category: "Сендвичи",
    translations: {
      ru: {
        name: "Панини с ветчиной",
        description: "Горячий панини с ветчиной и сыром"
      },
      uz: {
        name: "Jambon bilan panini",
        description: "Jambon va pishloq bilan issiq panini"
      },
      en: {
        name: "Ham Panini",
        description: "Hot panini with ham and cheese"
      }
    }
  },
  {
    id: 49,
    image: "/placeholder.svg?height=200&width=200",
    price: "950 сум",
    category: "Сендвичи",
    translations: {
      ru: {
        name: "Сэндвич с лососем",
        description: "Изысканный сэндвич со слабосоленым лососем"
      },
      uz: {
        name: "Losos bilan sendvich",
        description: "Sho'r losos bilan nafis sendvich"
      },
      en: {
        name: "Salmon Sandwich",
        description: "Exquisite sandwich with lightly salted salmon"
      }
    }
  },

  // ВЫПЕЧКА (50-53)
  {
    id: 50,
    image: "/placeholder.svg?height=200&width=200",
    price: "650 сум",
    category: "Выпечка",
    translations: {
      ru: {
        name: "Французский тост с мороженым",
        description: "Ароматный французский тост с ванильным мороженым"
      },
      uz: {
        name: "Muzqaymoq bilan frantsuz tosti",
        description: "Vanil muzqaymoq bilan xushbo'y frantsuz tosti"
      },
      en: {
        name: "French Toast with Ice Cream",
        description: "Aromatic French toast with vanilla ice cream"
      }
    }
  },
  {
    id: 51,
    image: "/placeholder.svg?height=200&width=200",
    price: "450 сум",
    category: "Выпечка",
    translations: {
      ru: {
        name: "Круассан с шоколадом",
        description: "Слоёный круассан с тёмным шоколадом"
      },
      uz: {
        name: "Shokolad bilan kruassan",
        description: "Qora shokolad bilan qatlamli kruassan"
      },
      en: {
        name: "Chocolate Croissant",
        description: "Flaky croissant with dark chocolate"
      }
    }
  },
  {
    id: 52,
    image: "/placeholder.svg?height=200&width=200",
    price: "380 сум",
    category: "Выпечка",
    translations: {
      ru: {
        name: "Маффин черничный",
        description: "Нежный маффин со свежей черникой"
      },
      uz: {
        name: "Ko'k rezavor maffini",
        description: "Yangi ko'k rezavor bilan yumshoq maffin"
      },
      en: {
        name: "Blueberry Muffin",
        description: "Tender muffin with fresh blueberries"
      }
    }
  },
  {
    id: 53,
    image: "/placeholder.svg?height=200&width=200",
    price: "420 сум",
    category: "Выпечка",
    translations: {
      ru: {
        name: "Эклер с кремом",
        description: "Классический эклер с заварным кремом"
      },
      uz: {
        name: "Krem bilan ekler",
        description: "Zavarli krem bilan klassik ekler"
      },
      en: {
        name: "Cream Eclair",
        description: "Classic eclair with custard cream"
      }
    }
  },

  // СУПЫ (73-76)
  {
    id: 73,
    image: "/placeholder.svg?height=200&width=200",
    price: "750 сум",
    category: "Супы",
    translations: {
      ru: {
        name: "Борщ",
        description: "Классический украинский борщ со сметаной"
      },
      uz: {
        name: "Borsh",
        description: "Smetana bilan klassik ukrain borschi"
      },
      en: {
        name: "Borscht",
        description: "Classic Ukrainian borscht with sour cream"
      }
    }
  },
  {
    id: 74,
    image: "/placeholder.svg?height=200&width=200",
    price: "820 сум",
    category: "Супы",
    translations: {
      ru: {
        name: "Солянка мясная",
        description: "Наваристая солянка с мясными деликатесами"
      },
      uz: {
        name: "Go'shtli solyanka",
        description: "Go'sht delikatesilari bilan sho'rvali solyanka"
      },
      en: {
        name: "Meat Solyanka",
        description: "Rich solyanka with meat delicacies"
      }
    }
  },
  {
    id: 75,
    image: "/placeholder.svg?height=200&width=200",
    price: "680 сум",
    category: "Супы",
    translations: {
      ru: {
        name: "Крем-суп из грибов",
        description: "Нежный крем-суп из лесных грибов"
      },
      uz: {
        name: "Qo'ziqorin krem-shorva",
        description: "O'rmon qo'ziqorinlari bilan yumshoq krem-shorva"
      },
      en: {
        name: "Mushroom Cream Soup",
        description: "Tender cream soup with forest mushrooms"
      }
    }
  },
  {
    id: 76,
    image: "/placeholder.svg?height=200&width=200",
    price: "890 сум",
    category: "Супы",
    translations: {
      ru: {
        name: "Том ям",
        description: "Острый тайский суп с креветками"
      },
      uz: {
        name: "Tom yam",
        description: "Qisqichbaqalar bilan o'tkir tay shorva"
      },
      en: {
        name: "Tom Yum",
        description: "Spicy Thai soup with shrimp"
      }
    }
  },

  // НАЧИНКИ И СОУСЫ (153-158)
  {
    id: 153,
    image: "/placeholder.svg?height=200&width=200&text=Grilled+Shrimp",
    price: "590 сум",
    category: "Начинки и соусы",
    translations: {
      ru: {
        name: "Креветки на гриле",
        description: "Сочные креветки, приготовленные на гриле с ароматными специями"
      },
      uz: {
        name: "Grilda pishirilgan qisqichbaqalar",
        description: "Xushbo'y ziravorlar bilan grilda pishirilgan serjola qisqichbaqalar"
      },
      en: {
        name: "Grilled Shrimp",
        description: "Juicy shrimp grilled with aromatic spices"
      }
    }
  },
  {
    id: 154,
    image: "/placeholder.svg?height=200&width=200&text=Salmon",
    price: "490 сум",
    category: "Начинки и соусы",
    translations: {
      ru: {
        name: "Лосось слабосоленный",
        description: "Нежный слабосоленый лосось премиум качества"
      },
      uz: {
        name: "Sho'r somon baliq",
        description: "Premium sifatli yumshoq sho'r somon baliq"
      },
      en: {
        name: "Lightly Salted Salmon",
        description: "Tender lightly salted premium salmon"
      }
    }
  },
  {
    id: 155,
    image: "/placeholder.svg?height=200&width=200&text=Chicken+Fillet",
    price: "390 сум",
    category: "Начинки и соусы",
    translations: {
      ru: {
        name: "Куриное филе",
        description: "Сочное куриное филе, приготовленное на гриле"
      },
      uz: {
        name: "Tovuq filesi",
        description: "Grilda pishirilgan serjola tovuq filesi"
      },
      en: {
        name: "Chicken Fillet",
        description: "Juicy grilled chicken fillet"
      }
    }
  },
  {
    id: 156,
    image: "/placeholder.svg?height=200&width=200&text=Raspberry+Sauce",
    price: "230 сум",
    category: "Начинки и соусы",
    translations: {
      ru: {
        name: "Малина",
        description: "Свежий малиновый соус из отборных ягод"
      },
      uz: {
        name: "Malina",
        description: "Tanlab olingan mevalardan yangi malina sousi"
      },
      en: {
        name: "Raspberry",
        description: "Fresh raspberry sauce from selected berries"
      }
    }
  },
  {
    id: 157,
    image: "/placeholder.svg?height=200&width=200&text=Strawberry",
    price: "230 сум",
    category: "Начинки и соусы",
    translations: {
      ru: {
        name: "Клубника",
        description: "Свежая клубника или клубничный соус"
      },
      uz: {
        name: "Qulupnay",
        description: "Yangi qulupnay yoki qulupnay sousi"
      },
      en: {
        name: "Strawberry",
        description: "Fresh strawberry or strawberry sauce"
      }
    }
  },
  {
    id: 158,
    image: "/placeholder.svg?height=200&width=200&text=Bell+Pepper",
    price: "90 сум",
    category: "Начинки и соусы",
    translations: {
      ru: {
        name: "Перец болгарский",
        description: "Свежий болгарский перец"
      },
      uz: {
        name: "Bolgar qalampiri",
        description: "Yangi bolgar qalampiri"
      },
      en: {
        name: "Bell Pepper",
        description: "Fresh bell pepper"
      }
    }
  },

  // САЛАТЫ (69-72)
  {
    id: 69,
    image: "/placeholder.svg?height=200&width=200",
    price: "1600 сум",
    category: "Салаты",
    translations: {
      ru: {
        name: "Буррата",
        description: "Итальянский сыр буррата с томатами и базиликом"
      },
      uz: {
        name: "Burrata",
        description: "Pomidor va rayhon bilan italyan burrata pishloq"
      },
      en: {
        name: "Burrata",
        description: "Italian burrata cheese with tomatoes and basil"
      }
    }
  },
  {
    id: 70,
    image: "/placeholder.svg?height=200&width=200",
    price: "890 сум",
    category: "Салаты",
    translations: {
      ru: {
        name: "Цезарь с курицей",
        description: "Классический салат Цезарь с куриной грудкой"
      },
      uz: {
        name: "Tovuqli Sezar",
        description: "Tovuq ko'kragi bilan klassik Sezar salati"
      },
      en: {
        name: "Caesar with Chicken",
        description: "Classic Caesar salad with chicken breast"
      }
    }
  },
  {
    id: 71,
    image: "/placeholder.svg?height=200&width=200",
    price: "750 сум",
    category: "Салаты",
    translations: {
      ru: {
        name: "Греческий салат",
        description: "Традиционный греческий салат с фетой"
      },
      uz: {
        name: "Yunon salati",
        description: "Feta pishloq bilan an'anaviy yunon salati"
      },
      en: {
        name: "Greek Salad",
        description: "Traditional Greek salad with feta cheese"
      }
    }
  },
  {
    id: 72,
    image: "/placeholder.svg?height=200&width=200",
    price: "1200 сум",
    category: "Салаты",
    translations: {
      ru: {
        name: "Салат с лососем",
        description: "Изысканный салат со слабосоленым лососем"
      },
      uz: {
        name: "Losos bilan salat",
        description: "Sho'r losos bilan nafis salat"
      },
      en: {
        name: "Salmon Salad",
        description: "Exquisite salad with lightly salted salmon"
      }
    }
  },

  // ГАРНИРЫ (78-81)
  {
    id: 78,
    image: "/placeholder.svg?height=200&width=200",
    price: "390 сум",
    category: "Гарниры",
    translations: {
      ru: {
        name: "Картофель фри",
        description: "Хрустящий картофель фри с морской солью"
      },
      uz: {
        name: "Fri kartoshka",
        description: "Dengiz tuzi bilan qaytgan fri kartoshka"
      },
      en: {
        name: "French Fries",
        description: "Crispy french fries with sea salt"
      }
    }
  },
  {
    id: 79,
    image: "/placeholder.svg?height=200&width=200",
    price: "290 сум",
    category: "Гарниры",
    translations: {
      ru: {
        name: "Рис отварной",
        description: "Рассыпчатый отварной рис"
      },
      uz: {
        name: "Qaynatilgan guruch",
        description: "Parchalanuvchi qaynatilgan guruch"
      },
      en: {
        name: "Boiled Rice",
        description: "Fluffy boiled rice"
      }
    }
  },
  {
    id: 80,
    image: "/placeholder.svg?height=200&width=200",
    price: "450 сум",
    category: "Гарниры",
    translations: {
      ru: {
        name: "Овощи гриль",
        description: "Микс овощей, приготовленных на гриле"
      },
      uz: {
        name: "Gril sabzavotlar",
        description: "Grilda pishirilgan sabzavotlar aralashmasi"
      },
      en: {
        name: "Grilled Vegetables",
        description: "Mix of grilled vegetables"
      }
    }
  },
  {
    id: 81,
    image: "/placeholder.svg?height=200&width=200",
    price: "320 сум",
    category: "Гарниры",
    translations: {
      ru: {
        name: "Пюре картофельное",
        description: "Нежное картофельное пюре с маслом"
      },
      uz: {
        name: "Kartoshka pyuresi",
        description: "Sariyog' bilan yumshoq kartoshka pyuresi"
      },
      en: {
        name: "Mashed Potatoes",
        description: "Tender mashed potatoes with butter"
      }
    }
  },

  // ДЕТСКОЕ МЕНЮ (83-86)
  {
    id: 83,
    image: "/placeholder.svg?height=200&width=200",
    price: "490 сум",
    category: "Детское меню",
    translations: {
      ru: {
        name: "Куриные котлетки",
        description: "Нежные куриные котлетки для детей"
      },
      uz: {
        name: "Tovuq kotletlari",
        description: "Bolalar uchun yumshoq tovuq kotletlari"
      },
      en: {
        name: "Chicken Cutlets",
        description: "Tender chicken cutlets for kids"
      }
    }
  },
  {
    id: 84,
    image: "/placeholder.svg?height=200&width=200",
    price: "420 сум",
    category: "Детское меню",
    translations: {
      ru: {
        name: "Макароны с сыром",
        description: "Любимые детские макароны с сыром"
      },
      uz: {
        name: "Pishloqli makaron",
        description: "Bolalarning sevimli pishloqli makaroni"
      },
      en: {
        name: "Mac and Cheese",
        description: "Kids' favorite macaroni with cheese"
      }
    }
  },
  {
    id: 85,
    image: "/placeholder.svg?height=200&width=200",
    price: "380 сум",
    category: "Детское меню",
    translations: {
      ru: {
        name: "Мини пицца",
        description: "Маленькая пицца специально для детей"
      },
      uz: {
        name: "Mini pitsa",
        description: "Bolalar uchun maxsus kichik pitsa"
      },
      en: {
        name: "Mini Pizza",
        description: "Small pizza specially for kids"
      }
    }
  },
  {
    id: 86,
    image: "/placeholder.svg?height=200&width=200",
    price: "450 сум",
    category: "Детское меню",
    translations: {
      ru: {
        name: "Куриные наггетсы",
        description: "Хрустящие куриные наггетсы"
      },
      uz: {
        name: "Tovuq naggetslar",
        description: "Qaytgan tovuq naggetslar"
      },
      en: {
        name: "Chicken Nuggets",
        description: "Crispy chicken nuggets"
      }
    }
  },

  // ЛИМОНАДЫ (89-92)
  {
    id: 89,
    image: "/placeholder.svg?height=200&width=200",
    price: "550 сум",
    category: "Лимонады",
    translations: {
      ru: {
        name: "Лимонад Яблоко-лимон 250мл",
        description: "Освежающий лимонад с яблоком и лимоном"
      },
      uz: {
        name: "Olma-limon limonadi 250ml",
        description: "Olma va limon bilan tetiklantiruvchi limonad"
      },
      en: {
        name: "Apple-Lemon Lemonade 250ml",
        description: "Refreshing lemonade with apple and lemon"
      }
    }
  },
  {
    id: 90,
    image: "/placeholder.svg?height=200&width=200",
    price: "580 сум",
    category: "Лимонады",
    translations: {
      ru: {
        name: "Лимонад Клубника-базилик 250мл",
        description: "Ароматный лимонад с клубникой и базиликом"
      },
      uz: {
        name: "Qulupnay-rayhon limonadi 250ml",
        description: "Qulupnay va rayhon bilan xushbo'y limonad"
      },
      en: {
        name: "Strawberry-Basil Lemonade 250ml",
        description: "Aromatic lemonade with strawberry and basil"
      }
    }
  },
  {
    id: 91,
    image: "/placeholder.svg?height=200&width=200",
    price: "560 сум",
    category: "Лимонады",
    translations: {
      ru: {
        name: "Лимонад Мята-лайм 250мл",
        description: "Освежающий лимонад с мятой и лаймом"
      },
      uz: {
        name: "Yalpiz-laym limonadi 250ml",
        description: "Yalpiz va laym bilan tetiklantiruvchi limonad"
      },
      en: {
        name: "Mint-Lime Lemonade 250ml",
        description: "Refreshing lemonade with mint and lime"
      }
    }
  },
  {
    id: 92,
    image: "/placeholder.svg?height=200&width=200",
    price: "570 сум",
    category: "Лимонады",
    translations: {
      ru: {
        name: "Лимонад Персик 250мл",
        description: "Сладкий персиковый лимонад"
      },
      uz: {
        name: "Shaftoli limonadi 250ml",
        description: "Shirin shaftoli limonadi"
      },
      en: {
        name: "Peach Lemonade 250ml",
        description: "Sweet peach lemonade"
      }
    }
  },

  // СВЕЖЕВЫЖАТЫЕ СОКИ/ВОДА (94-97)
  {
    id: 94,
    image: "/placeholder.svg?height=200&width=200",
    price: "590 сум",
    category: "Свежевыжатые соки/Вода",
    translations: {
      ru: {
        name: "Витамикс 250мл",
        description: "Витаминный микс из свежих фруктов"
      },
      uz: {
        name: "Vitamiks 250ml",
        description: "Yangi mevalardan vitamin aralashmasi"
      },
      en: {
        name: "Vitamix 250ml",
        description: "Vitamin mix from fresh fruits"
      }
    }
  },
  {
    id: 95,
    image: "/placeholder.svg?height=200&width=200",
    price: "450 сум",
    category: "Свежевыжатые соки/Вода",
    translations: {
      ru: {
        name: "Апельсиновый сок 250мл",
        description: "Свежевыжатый апельсиновый сок"
      },
      uz: {
        name: "Apelsin sharbati 250ml",
        description: "Yangi siqilgan apelsin sharbati"
      },
      en: {
        name: "Orange Juice 250ml",
        description: "Freshly squeezed orange juice"
      }
    }
  },
  {
    id: 96,
    image: "/placeholder.svg?height=200&width=200",
    price: "420 сум",
    category: "Свежевыжатые соки/Вода",
    translations: {
      ru: {
        name: "Яблочный сок 250мл",
        description: "Натуральный яблочный сок"
      },
      uz: {
        name: "Olma sharbati 250ml",
        description: "Tabiiy olma sharbati"
      },
      en: {
        name: "Apple Juice 250ml",
        description: "Natural apple juice"
      }
    }
  },
  {
    id: 97,
    image: "/placeholder.svg?height=200&width=200",
    price: "380 сум",
    category: "Свежевыжатые соки/Вода",
    translations: {
      ru: {
        name: "Морковный сок 250мл",
        description: "Полезный морковный сок"
      },
      uz: {
        name: "Sabzi sharbati 250ml",
        description: "Foydali sabzi sharbati"
      },
      en: {
        name: "Carrot Juice 250ml",
        description: "Healthy carrot juice"
      }
    }
  },

  // ХОЛОДНЫЙ КОФЕ (102-105)
  {
    id: 102,
    image: "/placeholder.svg?height=200&width=200",
    price: "690 сум",
    category: "Холодный кофе",
    translations: {
      ru: {
        name: "Малиновый кофе 350мл",
        description: "Освежающий кофе с малиновым сиропом"
      },
      uz: {
        name: "Malinali qahva 350ml",
        description: "Malina siropi bilan tetiklantiruvchi qahva"
      },
      en: {
        name: "Raspberry Coffee 350ml",
        description: "Refreshing coffee with raspberry syrup"
      }
    }
  },
  {
    id: 103,
    image: "/placeholder.svg?height=200&width=200",
    price: "520 сум",
    category: "Холодный кофе",
    translations: {
      ru: {
        name: "Айс латте 350мл",
        description: "Холодный латте со льдом"
      },
      uz: {
        name: "Ayis latte 350ml",
        description: "Muz bilan sovuq latte"
      },
      en: {
        name: "Iced Latte 350ml",
        description: "Cold latte with ice"
      }
    }
  },
  {
    id: 104,
    image: "/placeholder.svg?height=200&width=200",
    price: "580 сум",
    category: "Холодный кофе",
    translations: {
      ru: {
        name: "Фраппе 350мл",
        description: "Взбитый холодный кофе с пенкой"
      },
      uz: {
        name: "Frappe 350ml",
        description: "Ko'pikli chalqanchiq sovuq qahva"
      },
      en: {
        name: "Frappe 350ml",
        description: "Whipped cold coffee with foam"
      }
    }
  },
  {
    id: 105,
    image: "/placeholder.svg?height=200&width=200",
    price: "490 сум",
    category: "Холодный кофе",
    translations: {
      ru: {
        name: "Колд брю 300мл",
        description: "Кофе холодного заваривания"
      },
      uz: {
        name: "Cold brew 300ml",
        description: "Sovuq damlatilgan qahva"
      },
      en: {
        name: "Cold Brew 300ml",
        description: "Cold brewed coffee"
      }
    }
  },

  // ЙОГУРТЫ&БОУЛЫ (107-109)
  {
    id: 107,
    image: "/placeholder.svg?height=200&width=200",
    price: "590 сум",
    category: "Йогурты&Боулы",
    translations: {
      ru: {
        name: "Йогурт Гранола малина",
        description: "Греческий йогурт с гранолой и малиной"
      },
      uz: {
        name: "Malina granola yogurt",
        description: "Granola va malina bilan yunon yogurti"
      },
      en: {
        name: "Raspberry Granola Yogurt",
        description: "Greek yogurt with granola and raspberry"
      }
    }
  },
  {
    id: 108,
    image: "/placeholder.svg?height=200&width=200",
    price: "650 сум",
    category: "Йогурты&Боулы",
    translations: {
      ru: {
        name: "Боул с ягодами",
        description: "Питательный боул с микс ягодами"
      },
      uz: {
        name: "Rezavorli bowl",
        description: "Aralash rezavorlar bilan ozuqaviy bowl"
      },
      en: {
        name: "Berry Bowl",
        description: "Nutritious bowl with mixed berries"
      }
    }
  },
  {
    id: 109,
    image: "/placeholder.svg?height=200&width=200",
    price: "520 сум",
    category: "Йогурты&Боулы",
    translations: {
      ru: {
        name: "Йогурт с мёдом и орехами",
        description: "Натуральный йогурт с мёдом и орехами"
      },
      uz: {
        name: "Asal va yong'oqli yogurt",
        description: "Asal va yong'oqlar bilan tabiiy yogurt"
      },
      en: {
        name: "Honey Nut Yogurt",
        description: "Natural yogurt with honey and nuts"
      }
    }
  },

  // СМУЗИ (110-113)
  {
    id: 110,
    image: "/placeholder.svg?height=200&width=200",
    price: "630 сум",
    category: "Смузи",
    translations: {
      ru: {
        name: "Смузи Ла Нинья Мата-манго 250мл",
        description: "Тропический смузи с манго и матча"
      },
      uz: {
        name: "La Ninya Matcha-mango smuzi 250ml",
        description: "Mango va matcha bilan tropik smuzi"
      },
      en: {
        name: "La Ninya Matcha-Mango Smoothie 250ml",
        description: "Tropical smoothie with mango and matcha"
      }
    }
  },
  {
    id: 111,
    image: "/placeholder.svg?height=200&width=200",
    price: "580 сум",
    category: "Смузи",
    translations: {
      ru: {
        name: "Смузи Ягодный микс 250мл",
        description: "Смузи из микса лесных ягод"
      },
      uz: {
        name: "Rezavor aralash smuzi 250ml",
        description: "O'rmon rezavorlari aralashmasidan smuzi"
      },
      en: {
        name: "Berry Mix Smoothie 250ml",
        description: "Smoothie from mixed forest berries"
      }
    }
  },
  {
    id: 112,
    image: "/placeholder.svg?height=200&width=200",
    price: "550 сум",
    category: "Смузи",
    translations: {
      ru: {
        name: "Смузи Банан-клубника 250мл",
        description: "Классический смузи с бананом и клубникой"
      },
      uz: {
        name: "Banan-qulupnay smuzi 250ml",
        description: "Banan va qulupnay bilan klassik smuzi"
      },
      en: {
        name: "Banana-Strawberry Smoothie 250ml",
        description: "Classic smoothie with banana and strawberry"
      }
    }
  },
  {
    id: 113,
    image: "/placeholder.svg?height=200&width=200",
    price: "620 сум",
    category: "Смузи",
    translations: {
      ru: {
        name: "Зелёный смузи 250мл",
        description: "Полезный зелёный смузи со шпинатом"
      },
      uz: {
        name: "Yashil smuzi 250ml",
        description: "Ismaloq bilan foydali yashil smuzi"
      },
      en: {
        name: "Green Smoothie 250ml",
        description: "Healthy green smoothie with spinach"
      }
    }
  },

  // ДЕТСКИЕ НАПИТКИ (118-120)
  {
    id: 118,
    image: "/placeholder.svg?height=200&width=200",
    price: "470 сум",
    category: "Детские напитки",
    translations: {
      ru: {
        name: "Детское какао 260мл",
        description: "Нежное какао специально для детей"
      },
      uz: {
        name: "Bolalar kakaosi 260ml",
        description: "Bolalar uchun maxsus yumshoq kakao"
      },
      en: {
        name: "Kids Cocoa 260ml",
        description: "Gentle cocoa specially for children"
      }
    }
  },
  {
    id: 119,
    image: "/placeholder.svg?height=200&width=200",
    price: "420 сум",
    category: "Детские напитки",
    translations: {
      ru: {
        name: "Молочный коктейль 250мл",
        description: "Сладкий молочный коктейль"
      },
      uz: {
        name: "Sut kokteyli 250ml",
        description: "Shirin sut kokteyli"
      },
      en: {
        name: "Milk Shake 250ml",
        description: "Sweet milk shake"
      }
    }
  },
  {
    id: 120,
    image: "/placeholder.svg?height=200&width=200",
    price: "320 сум",
    category: "Детские напитки",
    translations: {
      ru: {
        name: "Компот из ягод 250мл",
        description: "Домашний компот из свежих ягод"
      },
      uz: {
        name: "Rezavor kompoti 250ml",
        description: "Yangi rezavorlardan uy kompoti"
      },
      en: {
        name: "Berry Compote 250ml",
        description: "Homemade compote from fresh berries"
      }
    }
  },

  // КОФЕ (121-126)
  {
    id: 121,
    image: "/placeholder.svg?height=200&width=200",
    price: "470 сум",
    category: "Кофе",
    translations: {
      ru: {
        name: "Свежезаваренная чашка фильтра 300 мл",
        description: "Ароматный фильтр-кофе из отборных зерен"
      },
      uz: {
        name: "Yangi damlatilgan filtr kofe 300ml",
        description: "Tanlab olingan donlardan xushbo'y filtr-kofe"
      },
      en: {
        name: "Fresh Filter Coffee 300ml",
        description: "Aromatic filter coffee from selected beans"
      }
    }
  },
  {
    id: 122,
    image: "/placeholder.svg?height=200&width=200",
    price: "290 сум",
    category: "Кофе",
    translations: {
      ru: {
        name: "Эспрессо 30мл",
        description: "Классический итальянский эспрессо"
      },
      uz: {
        name: "Espresso 30ml",
        description: "Klassik italyan espresso"
      },
      en: {
        name: "Espresso 30ml",
        description: "Classic Italian espresso"
      }
    }
  },
  {
    id: 123,
    image: "/placeholder.svg?height=200&width=200",
    price: "350 сум",
    category: "Кофе",
    translations: {
      ru: {
        name: "Американо 220мл",
        description: "Эспрессо с горячей водой"
      },
      uz: {
        name: "Amerikano 220ml",
        description: "Issiq suv bilan espresso"
      },
      en: {
        name: "Americano 220ml",
        description: "Espresso with hot water"
      }
    }
  },
  {
    id: 124,
    image: "/placeholder.svg?height=200&width=200",
    price: "420 сум",
    category: "Кофе",
    translations: {
      ru: {
        name: "Капучино 180мл",
        description: "Эспрессо с взбитым молоком"
      },
      uz: {
        name: "Kapuchino 180ml",
        description: "Chalqanchiq sut bilan espresso"
      },
      en: {
        name: "Cappuccino 180ml",
        description: "Espresso with frothed milk"
      }
    }
  },
  {
    id: 125,
    image: "/placeholder.svg?height=200&width=200",
    price: "450 сум",
    category: "Кофе",
    translations: {
      ru: {
        name: "Латте 300мл",
        description: "Мягкий кофе с большим количеством молока"
      },
      uz: {
        name: "Latte 300ml",
        description: "Ko'p sut bilan yumshoq qahva"
      },
      en: {
        name: "Latte 300ml",
        description: "Mild coffee with plenty of milk"
      }
    }
  },
  {
    id: 126,
    image: "/placeholder.svg?height=200&width=200",
    price: "490 сум",
    category: "Кофе",
    translations: {
      ru: {
        name: "Мокка 250мл",
        description: "Кофе с шоколадом и взбитыми сливками"
      },
      uz: {
        name: "Mokka 250ml",
        description: "Shokolad va chalqanchiq qaymoq bilan qahva"
      },
      en: {
        name: "Mocha 250ml",
        description: "Coffee with chocolate and whipped cream"
      }
    }
  },

  // ДЕСЕРТЫ (137-141)
  {
    id: 137,
    image: "/placeholder.svg?height=200&width=200",
    price: "390 сум",
    category: "Десерты",
    translations: {
      ru: {
        name: "Брауни",
        description: "Шоколадный брауни с орехами"
      },
      uz: {
        name: "Brauni",
        description: "Yong'oqlar bilan shokoladli brauni"
      },
      en: {
        name: "Brownie",
        description: "Chocolate brownie with nuts"
      }
    }
  },
  {
    id: 138,
    image: "/placeholder.svg?height=200&width=200",
    price: "520 сум",
    category: "Десерты",
    translations: {
      ru: {
        name: "Чизкейк Нью-Йорк",
        description: "Классический американский чизкейк"
      },
      uz: {
        name: "Nyu-York chizkeyk",
        description: "Klassik amerikan chizkeyk"
      },
      en: {
        name: "New York Cheesecake",
        description: "Classic American cheesecake"
      }
    }
  },
  {
    id: 139,
    image: "/placeholder.svg?height=200&width=200",
    price: "580 сум",
    category: "Десерты",
    translations: {
      ru: {
        name: "Тирамису",
        description: "Итальянский десерт с маскарпоне"
      },
      uz: {
        name: "Tiramisu",
        description: "Maskarpone bilan italyan deserti"
      },
      en: {
        name: "Tiramisu",
        description: "Italian dessert with mascarpone"
      }
    }
  },
  {
    id: 140,
    image: "/placeholder.svg?height=200&width=200",
    price: "450 сум",
    category: "Десерты",
    translations: {
      ru: {
        name: "Панна котта",
        description: "Нежный итальянский десерт"
      },
      uz: {
        name: "Panna kotta",
        description: "Yumshoq italyan deserti"
      },
      en: {
        name: "Panna Cotta",
        description: "Tender Italian dessert"
      }
    }
  },
  {
    id: 141,
    image: "/placeholder.svg?height=200&width=200",
    price: "480 сум",
    category: "Десерты",
    translations: {
      ru: {
        name: "Крем-брюле",
        description: "Французский десерт с карамельной корочкой"
      },
      uz: {
        name: "Krem-bryule",
        description: "Karamel qobiq bilan frantsuz deserti"
      },
      en: {
        name: "Crème Brûlée",
        description: "French dessert with caramel crust"
      }
    }
  },

  // ЧАИ (145-149)
  {
    id: 145,
    image: "/placeholder.svg?height=200&width=200",
    price: "670 сум",
    category: "Чаи",
    translations: {
      ru: {
        name: "Облепиха Апельсин",
        description: "Витаминный чай с облепихой и апельсином"
      },
      uz: {
        name: "Choyshirg'a Apelsin",
        description: "Choyshirg'a va apelsin bilan vitaminli choy"
      },
      en: {
        name: "Sea Buckthorn Orange",
        description: "Vitamin tea with sea buckthorn and orange"
      }
    }
  },
  {
    id: 146,
    image: "/placeholder.svg?height=200&width=200",
    price: "320 сум",
    category: "Чаи",
    translations: {
      ru: {
        name: "Чай чёрный классический",
        description: "Традиционный чёрный чай"
      },
      uz: {
        name: "Klassik qora choy",
        description: "An'anaviy qora choy"
      },
      en: {
        name: "Classic Black Tea",
        description: "Traditional black tea"
      }
    }
  },
  {
    id: 147,
    image: "/placeholder.svg?height=200&width=200",
    price: "380 сум",
    category: "Чаи",
    translations: {
      ru: {
        name: "Зелёный чай жасмин",
        description: "Ароматный зелёный чай с жасмином"
      },
      uz: {
        name: "Yasemin yashil choyi",
        description: "Yasemin bilan xushbo'y yashil choy"
      },
      en: {
        name: "Jasmine Green Tea",
        description: "Aromatic green tea with jasmine"
      }
    }
  },
  {
    id: 148,
    image: "/placeholder.svg?height=200&width=200",
    price: "350 сум",
    category: "Чаи",
    translations: {
      ru: {
        name: "Травяной чай ромашка",
        description: "Успокаивающий чай из ромашки"
      },
      uz: {
        name: "Romashka o'simlik choyi",
        description: "Romashkadan tinchlantiruvchi choy"
      },
      en: {
        name: "Chamomile Herbal Tea",
        description: "Soothing chamomile tea"
      }
    }
  },
  {
    id: 149,
    image: "/placeholder.svg?height=200&width=200",
    price: "420 сум",
    category: "Чаи",
    translations: {
      ru: {
        name: "Имбирный чай с мёдом",
        description: "Согревающий имбирный чай с мёдом"
      },
      uz: {
        name: "Asal bilan zanjabil choyi",
        description: "Asal bilan isituvchi zanjabil choyi"
      },
      en: {
        name: "Ginger Tea with Honey",
        description: "Warming ginger tea with honey"
      }
    }
  }
]

// Группировка продуктов по категориям
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category)
}

export const newProducts = getProductsByCategory("Новинки сезона")
export const breakfastProducts = getProductsByCategory("Завтраки")
export const pancakeProducts = getProductsByCategory("Блины")
export const hotDishProducts = getProductsByCategory("Горячие блюда")
export const burgerProducts = getProductsByCategory("Бургеры")
export const sandwichProducts = getProductsByCategory("Сендвичи")
export const bakeryProducts = getProductsByCategory("Выпечка")
export const soupProducts = getProductsByCategory("Супы")
export const saladProducts = getProductsByCategory("Салаты")
export const sidesProducts = getProductsByCategory("Гарниры")
export const kidsMenuProducts = getProductsByCategory("Детское меню")
export const lemonadeProducts = getProductsByCategory("Лимонады")
export const freshJuicesProducts = getProductsByCategory("Свежевыжатые соки/Вода")
export const coldCoffeeProducts = getProductsByCategory("Холодный кофе")
export const yogurtBowlProducts = getProductsByCategory("Йогурты&Боулы")
export const smoothieProducts = getProductsByCategory("Смузи")
export const kidsDrinksProducts = getProductsByCategory("Детские напитки")
export const coffeeProducts = getProductsByCategory("Кофе")
export const dessertProducts = getProductsByCategory("Десерты")
export const teaProducts = getProductsByCategory("Чаи")
export const toppingsProducts = getProductsByCategory("Начинки и соусы")

// Функция для получения переведенного продукта
export const getTranslatedProduct = (product: Product, language: 'ru' | 'uz' | 'en') => {
  const translation = product.translations[language]
  return {
    ...product,
    name: translation.name,
    description: translation.description
  }
}