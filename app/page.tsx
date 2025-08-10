"use client"

import { Search, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

// Обновить массив menuItems согласно новому порядку категорий
const menuItems = [
  "Завтраки",
  "Дагестанская кухня",
  "Салаты",
  "Супы",
  "Сендвичи и бургеры",
  "Горячее меню",
  "Выпечка",
  "Гарниры",
  "Начинки и соусы",
  "Детское меню",
  "Десерты",
  "Кофе",
  "Холодный кофе",
  "Шоколад",
  "Чай без чая",
  "Селекционные чаи",
  "Лимонады",
  "Смузи",
  "Йогурты&Боулы",
  "Свежевыжатые соки",
  "Вода",
  "Для детей",
]

// Breakfast products organized by subsections
// Обновить kashaProducts - объединить пшенную, овсяную и рисовую в одну карточку
const kashaProducts = [
  {
    id: 22,
    name: "Рисовая с бананом",
    image: "/placeholder.svg?height=200&width=200&text=Rice+with+Banana",
    price: "99 000 сум",
    category: "Завтраки",
    subcategory: "Каши",
    description: "Рисовая каша с бананом",
  },
  {
    id: 23,
    name: "Пшённая с тыквой",
    image: "/images/millet-porridge.png",
    price: "99 000 сум",
    category: "Завтраки",
    subcategory: "Каши",
    description: "Пшённая каша с тыквой",
  },
  {
    id: 24,
    name: "Каши: пшенная / овсяная / рисовая",
    image: "/images/millet-porridge.png",
    price: "69 000 сум",
    category: "Завтраки",
    subcategory: "Каши",
    description: "Каши на выбор: пшенная, овсяная или рисовая",
  },
]

// Реорганизовать продукты завтраков по новым подкатегориям

// Яичницы и бэки (переименовать из eggsProducts)
// Обновить eggsAndBaconProducts
const eggsAndBaconProducts = [
  {
    id: 27,
    name: "Шакшука",
    image: "/images/shakshuka.png",
    price: "119 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Шакшука",
  },
  {
    id: 28,
    name: "Яйцо Бенедикт ветчина / индейка",
    image: "/images/eggs-benedict.png",
    price: "139 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Яйцо Бенедикт с ветчиной или индейкой",
  },
  {
    id: 29,
    name: "Яичница / Омлет",
    image: "/placeholder.svg?height=200&width=200&text=Omelet",
    price: "59 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Яичница или омлет на выбор",
  },
  {
    id: 291,
    name: "Омлет с грибами и шпинатом",
    image: "/placeholder.svg?height=200&width=200&text=Mushroom+Spinach+Omelet",
    price: "129 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Омлет с грибами и шпинатом",
  },
  {
    id: 30,
    name: "Омлет с трюфельным соусом",
    image: "/images/truffle-omelet.png",
    price: "149 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Омлет с трюфельным соусом",
  },
  {
    id: 31,
    name: "Омлет с креветками",
    image: "/images/omelet-shrimp.png",
    price: "149 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Омлет с креветками",
  },
  {
    id: 33,
    name: "Картофельный омлет с лососем",
    image: "/images/potato-omelet-salmon.webp",
    price: "219 000 сум",
    category: "Завтраки",
    subcategory: "Яичницы и бэки",
    description: "Картофельный омлет с лососем",
  },
]

// Добавить новые подкategories для завтраков
// Обновить curdAndMilkProducts
const curdAndMilkProducts = [
  {
    id: 46,
    name: "Ванильные сырники",
    image: "/images/syrniki-berries-new.png",
    price: "119 000 сум",
    category: "Завтраки",
    subcategory: "Творог и молоко",
    description: "Ванильные сырники",
  },
  {
    id: 47,
    name: "Творожная запеканка",
    image: "/placeholder.svg?height=200&width=200&text=Cottage+Cheese+Casserole",
    price: "109 000 сум",
    category: "Завтраки",
    subcategory: "Творог и молоко",
    description: "Творожная запеканка",
  },
]

// Обновить seriousBreakfastProducts
const seriousBreakfastProducts = [
  {
    id: 381,
    name: "Аракин с лососем",
    image: "/placeholder.svg?height=200&width=200&text=Arakin+Salmon",
    price: "179 000 сум",
    category: "Завтраки",
    subcategory: "Серьезные завтраки",
    description: "Аракин с лососем",
  },
  {
    id: 38,
    name: "Английский завтрак с лососем",
    image: "/placeholder.svg?height=200&width=200&text=English+Breakfast+Salmon",
    price: "199 000 сум",
    category: "Завтраки",
    subcategory: "Серьезные завтраки",
    description: "Английский завтрак с лососем",
  },
]

// Обновить pancakeProducts для новой категории блинов
// Обновить pancakeProducts
const pancakeProducts = [
  {
    id: 42,
    name: "Классический с маслом",
    image: "/images/classic-pancakes.png",
    price: "69 000 сум",
    category: "Завтраки",
    subcategory: "Блины",
    description: "Классические блины с маслом",
  },
  {
    id: 45,
    name: "С мясом",
    image: "/images/pancakes-meat.png",
    price: "99 000 сум",
    category: "Завтраки",
    subcategory: "Блины",
    description: "Блины с мясом",
  },
  {
    id: 43,
    name: "С красной икрой и крем-сыром",
    image: "/images/pancakes-caviar.png",
    price: "179 000 сум",
    category: "Завтраки",
    subcategory: "Блины",
    description: "Блины с красной икрой и крем-сыром",
  },
  {
    id: 44,
    name: "С лососем и крем-сыром",
    image: "/images/pancakes-salmon.png",
    price: "149 000 сум",
    category: "Завтраки",
    subcategory: "Блины",
    description: "Блины с лососем и крем-сыром",
  },
]

// Обновить toastsProducts
const toastsProducts = [
  {
    id: 36,
    name: "Круассан с ветчиной и омлетом",
    image: "/images/croissant-egg.png",
    price: "149 000 сум",
    category: "Завтраки",
    subcategory: "Тосты и круассаны",
    description: "Круассан с ветчиной и омлетом",
  },
  {
    id: 35,
    name: "Круассан с лососем",
    image: "/images/croissant-salmon.png",
    price: "149 000 сум",
    category: "Завтраки",
    subcategory: "Тосты и круассаны",
    description: "Круассан с лососем",
  },
  {
    id: 37,
    name: "Брускетта лосось / тунец",
    image: "/placeholder.svg?height=200&width=200&text=Bruschetta+Salmon+Tuna",
    price: "199 000 сум",
    category: "Завтраки",
    subcategory: "Тосты и круассаны",
    description: "Брускетта с лососем или тунцом",
  },
  {
    id: 34,
    name: "Тост с лососем",
    image: "/images/salmon-toast.png",
    price: "169 000 сум",
    category: "Завтраки",
    subcategory: "Тосты и круассаны",
    description: "Тост с лососем",
  },
]

// Создать новые категории для горячего меню
// Обновить meatProducts согласно новому порядку
const meatProducts = [
  {
    id: 65,
    name: "Брискет",
    image: "/images/brisket.jpg",
    price: "299 000 сум",
    category: "Горячее меню",
    subcategory: "Мясо",
    description: "Брискет",
  },
  {
    id: 66,
    name: "Фрикадельки",
    image: "/images/meatballs-new.webp",
    price: "149 000 сум",
    category: "Горячее меню",
    subcategory: "Мясо",
    description: "Фрикадельки",
  },
  {
    id: 67,
    name: "Телячьи щечки",
    image: "/images/veal-cheeks-risotto.jpg",
    price: "249 000 сум",
    category: "Горячее меню",
    subcategory: "Мясо",
    description: "Телячьи щечки",
  },
  {
    id: 671,
    name: "Телятина с лисичками",
    image: "/placeholder.svg?height=200&width=200&text=Veal+Chanterelles",
    price: "279 000 сум",
    category: "Горячее меню",
    subcategory: "Мясо",
    description: "Телятина с лисичками",
  },
  {
    id: 401,
    name: "Гречневая лапша с телятиной",
    image: "/placeholder.svg?height=200&width=200&text=Buckwheat+Noodles+Veal",
    price: "199 000 сум",
    category: "Горячее меню",
    subcategory: "Мясо",
    description: "Гречневая лапша с телятиной",
  },
]

// Обновить poultryProducts согласно новому порядку
const poultryProducts = [
  {
    id: 69,
    name: "Курица с рисом и зеленым карри",
    image: "/images/chicken-curry-rice-new.webp",
    price: "159 000 сум",
    category: "Горячее меню",
    subcategory: "Птица",
    description: "Курица с рисом и зеленым карри",
  },
  {
    id: 70,
    name: "Куриное филе с черным трюфелем",
    image: "/images/chicken-truffle.jpg",
    price: "149 000 сум",
    category: "Горячее меню",
    subcategory: "Птица",
    description: "Куриное филе с черным трюфелем",
  },
  {
    id: 701,
    name: "Шницель",
    image: "/placeholder.svg?height=200&width=200&text=Schnitzel",
    price: "179 000 сум",
    category: "Горячее меню",
    subcategory: "Птица",
    description: "Шницель",
  },
  {
    id: 403,
    name: "Паста птитим с курицей",
    image: "/placeholder.svg?height=200&width=200&text=Ptitim+Pasta+Chicken",
    price: "169 000 сум",
    category: "Горячее меню",
    subcategory: "Птица",
    description: "Паста птитим с курицей",
  },
  {
    id: 406,
    name: "Удон с курицей",
    image: "/placeholder.svg?height=200&width=200&text=Udon+Chicken",
    price: "139 000 сум",
    category: "Горячее меню",
    subcategory: "Птица",
    description: "Удон с курицей",
  },
  {
    id: 407,
    name: "Феттучини с курицей и грибами",
    image: "/placeholder.svg?height=200&width=200&text=Fettuccine+Chicken+Mushrooms",
    price: "159 000 сум",
    category: "Горячее меню",
    subcategory: "Птица",
    description: "Феттучини с курицей и грибами",
  },
]

// Обновить seafoodProducts согласно новому порядку
const seafoodProducts = [
  {
    id: 72,
    name: "Лосось терияки на гриле",
    image: "/images/salmon-teriyaki.jpg",
    price: "299 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Лосось терияки на гриле",
  },
  {
    id: 73,
    name: "Лосось с рисом под соусом карри",
    image: "/images/salmon-curry-rice.webp",
    price: "249 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Лосось с рисом под соусом карри",
  },
  {
    id: 402,
    name: "Гречневая с креветками и овощами",
    image: "/placeholder.svg?height=200&width=200&text=Buckwheat+Shrimp+Vegetables",
    price: "179 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Гречневая лапша с креветками и овощами",
  },
  {
    id: 408,
    name: "Феттучини с креветками",
    image: "/placeholder.svg?height=200&width=200&text=Fettuccine+Shrimp",
    price: "209 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Феттучини с креветками",
  },
  {
    id: 404,
    name: "Паста птитим с креветками",
    image: "/placeholder.svg?height=200&width=200&text=Ptitim+Pasta+Shrimp",
    price: "189 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Паста птитим с креветками",
  },
  {
    id: 405,
    name: "Паста птитим с гребешками",
    image: "/placeholder.svg?height=200&width=200&text=Ptitim+Pasta+Scallops",
    price: "279 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Паста птитим с гребешками",
  },
  {
    id: 409,
    name: "Спагетти с лососем",
    image: "/placeholder.svg?height=200&width=200&text=Spaghetti+Salmon",
    price: "199 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Спагетти с лососем",
  },
  {
    id: 4091,
    name: "Креветки в карри",
    image: "/placeholder.svg?height=200&width=200&text=Shrimp+Curry",
    price: "229 000 сум",
    category: "Горячее меню",
    subcategory: "Морепродукты",
    description: "Креветки в карри",
  },
]

const hotDishProducts: any[] = []

// Создать категорию сендвичей и бургеров
const sandwichBurgerProducts = [
  {
    id: 74,
    name: "Бургер на листьях салата",
    image: "/images/lettuce-burger-new.jpg",
    price: "179 000 сум",
    category: "Сендвичи и бургеры",
    description: "Бургер на листьях салата",
  },
  {
    id: 75,
    name: "Барашек",
    image: "/images/lamb-burger.jpg",
    price: "199 000 сум",
    category: "Сендвичи и бургеры",
    description: "Барашек",
  },
  {
    id: 82,
    name: "Банни-бургер",
    image: "/images/bunny-burger.webp",
    price: "169 000 сум",
    category: "Сендвичи и бургеры",
    description: "Банни-бургер",
  },
  {
    id: 821,
    name: "Баффало с омлетом завтрашним",
    image: "/placeholder.svg?height=200&width=200&text=Buffalo+Omelet",
    price: "179 000 сум",
    category: "Сендвичи и бургеры",
    description: "Баффало с омлетом завтрашним",
  },
  {
    id: 77,
    name: "Острый Баффало",
    image: "/images/spicy-buffalo.jpg",
    price: "159 000 сум",
    category: "Сендвичи и бургеры",
    description: "Острый Баффало",
  },
  {
    id: 79,
    name: "Кесадилья с курицей",
    image: "/images/chicken-quesadilla.jpg",
    price: "129 000 сум",
    category: "Сендвичи и бургеры",
    description: "Кесадилья с курицей",
  },
  {
    id: 80,
    name: "Клаб-сэндвич",
    image: "/images/club-sandwich.jpg",
    price: "139 000 сум",
    category: "Сендвичи и бургеры",
    description: "Клаб-сэндвич",
  },
]

// Создать новые категории
// Обновить bakeryProducts
const bakeryProducts = [
  {
    id: 2001,
    name: "Бриошь с ванильным мороженым",
    image: "/placeholder.svg?height=200&width=200&text=Brioche+Vanilla+Ice+Cream",
    price: "149 000 сум",
    category: "Выпечка",
    description: "Бриошь с ванильным мороженым",
  },
  {
    id: 2002,
    name: "Круассан с миндалём",
    image: "/placeholder.svg?height=200&width=200&text=Almond+Croissant",
    price: "119 000 сум",
    category: "Выпечка",
    description: "Круассан с миндалём",
  },
  {
    id: 2003,
    name: "Круассан классический",
    image: "/placeholder.svg?height=200&width=200&text=Classic+Croissant",
    price: "89 000 сум",
    category: "Выпечка",
    description: "Круассан классический",
  },
]

// Обновить sidesProducts
const sidesProducts = [
  {
    id: 2101,
    name: "Картофель фри / по-деревенски",
    image: "/placeholder.svg?height=200&width=200&text=French+Fries+Country+Style",
    price: "79 000 сум",
    category: "Гарниры",
    description: "Картофель фри или по-деревенски",
  },
  {
    id: 2102,
    name: "Пюре",
    image: "/placeholder.svg?height=200&width=200&text=Mashed+Potatoes",
    price: "69 000 сум",
    category: "Гарниры",
    description: "Картофельное пюре",
  },
  {
    id: 2103,
    name: "Гречка с луком",
    image: "/placeholder.svg?height=200&width=200&text=Buckwheat+Onion",
    price: "79 000 сум",
    category: "Гарниры",
    description: "Гречка с луком",
  },
  {
    id: 2104,
    name: "Рис китайский",
    image: "/placeholder.svg?height=200&width=200&text=Chinese+Rice",
    price: "89 000 сум",
    category: "Гарниры",
    description: "Рис китайский",
  },
]

// Обновить fillingsAndSaucesProducts
const fillingsAndSaucesProducts = [
  {
    id: 2201,
    name: "Креветки на гриле",
    image: "/placeholder.svg?height=200&width=200&text=Grilled+Shrimp",
    price: "149 000 сум",
    category: "Начинки и соусы",
    description: "Креветки на гриле",
  },
  {
    id: 2202,
    name: "Лосось слабосолёный",
    image: "/placeholder.svg?height=200&width=200&text=Lightly+Salted+Salmon",
    price: "179 000 сум",
    category: "Начинки и соусы",
    description: "Лосось слабосолёный",
  },
  {
    id: 2203,
    name: "Куриное филе",
    image: "/placeholder.svg?height=200&width=200&text=Chicken+Fillet",
    price: "99 000 сум",
    category: "Начинки и соусы",
    description: "Куриное филе",
  },
  {
    id: 2204,
    name: "Свежие ягоды, протёртые с сахаром",
    image: "/placeholder.svg?height=200&width=200&text=Fresh+Berries+Sugar",
    price: "89 000 сум",
    category: "Начинки и соусы",
    description: "Свежие ягоды, протёртые с сахаром",
  },
  {
    id: 2205,
    name: "Малина / клубника",
    image: "/placeholder.svg?height=200&width=200&text=Raspberry+Strawberry",
    price: "79 000 сум",
    category: "Начинки и соусы",
    description: "Малина или клубника",
  },
]

// Обновить порядок soupProducts согласно новому списку
const soupProducts = [
  {
    id: 201,
    name: "Борщ",
    image: "/images/borscht.jpeg",
    price: "109 000 сум",
    category: "Супы",
    description: "Борщ",
  },
  {
    id: 203,
    name: "Домашняя лапша",
    image: "/images/homemade-noodles.jpeg",
    price: "89 000 сум",
    category: "Супы",
    description: "Домашняя лапша",
  },
  {
    id: 205,
    name: "Уха из семги",
    image: "/images/salmon-soup.webp",
    price: "149 000 сум",
    category: "Супы",
    description: "Уха из семги",
  },
  {
    id: 204,
    name: "Сырный суп с креветками",
    image: "/images/cheese-soup-shrimp.webp",
    price: "139 000 сум",
    category: "Супы",
    description: "Сырный суп с креветками",
  },
  {
    id: 207,
    name: "Гаспачо",
    image: "/placeholder.svg?height=200&width=200&text=Gazpacho",
    price: "119 000 сум",
    category: "Супы",
    description: "Гаспачо",
  },
  {
    id: 202,
    name: "Том ям",
    image: "/images/tom-yam.webp",
    price: "299 000 сум",
    category: "Супы",
    description: "Том ям",
  },
]

// Обновить порядок saladProducts согласно новому списку
const saladProducts = [
  {
    id: 312,
    name: "Хабюрза",
    image: "/placeholder.svg?height=200&width=200&text=Habyurza",
    price: "99 000 сум",
    category: "Салаты",
    description: "Хабюрза",
  },
  {
    id: 301,
    name: "Буррата",
    image: "/images/burrata-salad.jpeg",
    price: "199 000 сум",
    category: "Салаты",
    description: "Буррата",
  },
  {
    id: 302,
    name: "Капрезе",
    image: "/placeholder.svg?height=200&width=200&text=Caprese",
    price: "139 000 сум",
    category: "Салаты",
    description: "Капрезе",
  },
  {
    id: 303,
    name: "Баклажан с креветкой и страчателлой",
    image: "/images/eggplant-shrimp-stracciatella.jpeg",
    price: "139 000 сум",
    category: "Салаты",
    description: "Баклажан с креветкой и страчателлой",
  },
  {
    id: 3131,
    name: "Авокадо",
    image: "/placeholder.svg?height=200&width=200&text=Avocado+Salad",
    price: "129 000 сум",
    category: "Салаты",
    description: "Салат с авокадо",
  },
  {
    id: 304,
    name: "Бора-бора",
    image: "/images/bora-bora-salad.jpeg",
    price: "179 000 сум",
    category: "Салаты",
    description: "Бора-бора",
  },
  {
    id: 305,
    name: "Греко салат",
    image: "/images/greek-salad.jpeg",
    price: "149 000 сум",
    category: "Салаты",
    description: "Греко салат",
  },
  {
    id: 306,
    name: "Салат с цыпленком",
    image: "/images/chicken-salad.jpeg",
    price: "129 000 сум",
    category: "Салаты",
    description: "Салат с цыпленком",
  },
  {
    id: 311,
    name: "Салат с говяжьей вырезкой",
    image: "/images/beef-tenderloin-salad.webp",
    price: "149 000 сум",
    category: "Салаты",
    description: "Салат с говяжьей вырезкой",
  },
  {
    id: 308,
    name: "Цезарь с курицей",
    image: "/images/caesar-chicken.jpeg",
    price: "149 000 сум",
    category: "Салаты",
    description: "Цезарь с курицей",
  },
  {
    id: 309,
    name: "Цезарь с креветками",
    image: "/images/caesar-shrimp.jpeg",
    price: "199 000 сум",
    category: "Салаты",
    description: "Цезарь с креветками",
  },
  {
    id: 307,
    name: "Салат Том ям",
    image: "/images/tom-yam-salad.webp",
    price: "269 000 сум",
    category: "Салаты",
    description: "Салат Том ям",
  },
  {
    id: 310,
    name: "Тортилья-ролл с курицей",
    image: "/images/tortilla-roll-chicken.webp",
    price: "119 000 сум",
    category: "Салаты",
    description: "Тортилья-ролл с курицей",
  },
  {
    id: 3101,
    name: "Тортилья-ролл с креветками",
    image: "/images/tortilla-roll-shrimp.webp",
    price: "149 000 сум",
    category: "Салаты",
    description: "Тортилья-ролл с креветками",
  },
]

// Добавить новую категорию Поке и боулы
const pokeBowlProducts = [
  {
    id: 3201,
    name: "Поке с курицей",
    image: "/placeholder.svg?height=200&width=200&text=Poke+Chicken",
    price: "159 000 сум",
    category: "Салаты",
    subcategory: "Поке и боулы",
    description: "Поке с курицей",
  },
  {
    id: 3202,
    name: "Поке с лососем",
    image: "/placeholder.svg?height=200&width=200&text=Poke+Salmon",
    price: "199 000 сум",
    category: "Салаты",
    subcategory: "Поке и боулы",
    description: "Поке с лососем",
  },
]

// Удалить pastaProducts массив, так как все пасты теперь в горячем меню

const dagestaniProducts = [
  {
    id: 501,
    name: "Хинкал ПАПАХА",
    image: "/placeholder.svg?height=200&width=200&text=Hinkal+Papakha",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Хинкал ПАПАХА",
  },
  {
    id: 502,
    name: "Пельмени мясные",
    image: "/placeholder.svg?height=200&width=200&text=Meat+Dumplings",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Пельмени мясные",
  },
  {
    id: 503,
    name: "Чуду с творогом",
    image: "/placeholder.svg?height=200&width=200&text=Chudu+Cottage+Cheese",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Чуду с творогом",
  },
  {
    id: 504,
    name: "Чуду с тыквой",
    image: "/placeholder.svg?height=200&width=200&text=Chudu+Pumpkin",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Чуду с тыквой",
  },
  {
    id: 505,
    name: "Чуду с мясом",
    image: "/placeholder.svg?height=200&width=200&text=Chudu+Meat",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Чуду с мясом",
  },
  {
    id: 506,
    name: "Чуду с зеленью",
    image: "/placeholder.svg?height=200&width=200&text=Chudu+Greens",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Чуду с зеленью",
  },
  {
    id: 507,
    name: "Чуду творог/зелень",
    image: "/placeholder.svg?height=200&width=200&text=Chudu+Cottage+Cheese+Greens",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Чуду творог/зелень",
  },
  {
    id: 508,
    name: "Курзе с мясом",
    image: "/placeholder.svg?height=200&width=200&text=Kurze+Meat",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Курзе с мясом",
  },
  {
    id: 509,
    name: "Курзе с творогом",
    image: "/placeholder.svg?height=200&width=200&text=Kurze+Cottage+Cheese",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Курзе с творогом",
  },
  {
    id: 510,
    name: "Курзе с картофелем",
    image: "/placeholder.svg?height=200&width=200&text=Kurze+Potato",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Курзе с картофелем",
  },
  {
    id: 511,
    name: "Тонкие хинкал с мясом",
    image: "/placeholder.svg?height=200&width=200&text=Thin+Hinkal+Meat",
    price: "100 000 сум",
    category: "Дагестанская кухня",
    description: "Тонкие хинкал с мясом",
  },
]

// Обновить kidsMenuProducts
const kidsMenuProducts = [
  {
    id: 83,
    name: "Бургер говяжий",
    image: "/placeholder.svg?height=200&width=200&text=Kids+Beef+Burger",
    price: "129 000 сум",
    category: "Детское меню",
    description: "Детский говяжий бургер",
  },
  {
    id: 831,
    name: "Куриные котлетки",
    image: "/placeholder.svg?height=200&width=200&text=Chicken+Cutlets",
    price: "119 000 сум",
    category: "Детское меню",
    description: "Куриные котлетки",
  },
  {
    id: 85,
    name: "Спагетти",
    image: "/images/kids-spaghetti-cream.jpeg",
    price: "109 000 сум",
    category: "Детское меню",
    description: "Детские спагетти",
  },
  {
    id: 84,
    name: "Блины",
    image: "/images/kids-pancakes.jpeg",
    price: "99 000 сум",
    category: "Детское меню",
    description: "Детские блины",
  },
  {
    id: 86,
    name: "Куриный суп",
    image: "/images/kids-chicken-soup.jpeg",
    price: "89 000 сум",
    category: "Детское меню",
    description: "Детский куриный суп",
  },
  {
    id: 832,
    name: "Наггетсы",
    image: "/placeholder.svg?height=200&width=200&text=Chicken+Nuggets",
    price: "119 000 сум",
    category: "Детское меню",
    description: "Куриные наггетсы",
  },
]

// New Desserts products organized by subsections
const brownieProducts = [
  {
    id: 1701,
    name: "Брауни",
    image: "/images/brownie.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Брауни",
    description: "Брауни",
  },
  {
    id: 1702,
    name: "Дакуаз",
    image: "/images/dacquoise.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Брауни",
    description: "Дакуаз",
  },
  {
    id: 1703,
    name: "Тирамису",
    image: "/images/tiramisu.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Брауни",
    description: "Тирамису",
  },
  {
    id: 1704,
    name: "Трайфл",
    image: "/images/trifle.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Брауни",
    description: "Трайфл",
  },
]

const cakeProducts = [
  {
    id: 1705,
    name: "Голубика",
    image: "/images/blueberry-tart.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Тарт",
    description: "Голубика",
  },
  {
    id: 1706,
    name: "Малина",
    image: "/placeholder.svg?height=200&width=200&text=Raspberry+Cake",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Тарт",
    description: "Малина",
  },
]

const pieProducts = [
  {
    id: 1707,
    name: "Яблочный с корицей",
    image: "/images/apple-cinnamon-pie.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Пироги",
    description: "Яблочный с корицей",
  },
  {
    id: 1708,
    name: "Тыквенно-грушевый",
    image: "/images/pumpkin-pear-pie.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Пироги",
    description: "Тыквенно-грушевый",
  },
]

const specialCakeProducts = [
  {
    id: 1709,
    name: "Сметанник",
    image: "/images/sour-cream-cake.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Торты",
    description: "Сметанник",
  },
  {
    id: 1710,
    name: "Карамельно-муссовый",
    image: "/images/caramel-mousse-cake.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Торты",
    description: "Карамельно-муссовый",
  },
  {
    id: 1711,
    name: "Не «Рейк»",
    image: "/images/not-reyk-cake.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "Торты",
    description: "Не «Рейк»",
  },
]

const ppDessertProducts = [
  {
    id: 1712,
    name: "Шу",
    image: "/placeholder.svg?height=200&width=200&text=Shu+Dessert",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Шу",
  },
  {
    id: 1713,
    name: "Боунти",
    image: "/images/bounty-dessert.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Боунти",
  },
  {
    id: 1714,
    name: "Сникерс",
    image: "/images/snickers-dessert.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Сникерс",
  },
  {
    id: 1715,
    name: "Манго",
    image: "/images/mango-dessert.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Манго",
  },
  {
    id: 1716,
    name: "Шоколадное безумие",
    image: "/images/chocolate-madness.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Шоколадное безумие",
  },
  {
    id: 1717,
    name: "Фисташка",
    image: "/images/pistachio-dessert.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Фисташка",
  },
  {
    id: 1718,
    name: "Чизкейк манго",
    image: "/placeholder.svg?height=200&width=200&text=Mango+Cheesecake",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Чизкейк манго",
  },
  {
    id: 1719,
    name: "Кокосовая Панна Котта",
    image: "/images/coconut-panna-cotta.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Кокосовая Панна Котта",
  },
  {
    id: 1720,
    name: "Чиа манго",
    image: "/images/chia-mango-new.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Чиа манго",
  },
  {
    id: 1721,
    name: "Чиа черника",
    image: "/images/chia-blueberry.jpeg",
    price: "100 000 сум",
    category: "Десерты",
    subcategory: "ПП десерты",
    description: "Чиа черника",
  },
]

const allNewDessertProducts = [
  ...brownieProducts,
  ...cakeProducts,
  ...pieProducts,
  ...specialCakeProducts,
  ...ppDessertProducts,
]

// Coffee products organized by subsections
const blackCoffeeProducts = [
  {
    id: 601,
    name: "Свежезаваренная чашка фильтра",
    image: "/images/filter-coffee.jpeg",
    price: "69 000 сум",
    category: "Кофе",
    subcategory: "Черный",
    description: "Свежезаваренная чашка фильтра 300мл",
  },
  {
    id: 602,
    name: "Эспрессо",
    image: "/images/espresso.jpeg",
    price: "39 000 сум",
    category: "Кофе",
    subcategory: "Черный",
    description: "Эспрессо 30мл",
  },
  {
    id: 603,
    name: "Допpio",
    image: "/images/doppio.jpeg",
    price: "59 000 сум",
    category: "Кофе",
    subcategory: "Черный",
    description: "Допpio 60мл",
  },
  {
    id: 604,
    name: "Американо",
    image: "/images/americano.jpeg",
    price: "49 000 / 65 000 сум",
    category: "Кофе",
    subcategory: "Черный",
    description: "Американо 90/150мл",
  },
  {
    id: 605,
    name: "Лунго",
    image: "/images/lungo.jpeg",
    price: "49 000 / 65 000 сум",
    category: "Кофе",
    subcategory: "Черный",
    description: "Лунго 50/110мл",
  },
]

const milkCoffeeProducts = [
  {
    id: 606,
    name: "Капучино",
    image: "/images/cappuccino.jpeg",
    price: "59 000 / 79 000 сум",
    category: "Кофе",
    subcategory: "С молоком",
    description: "Капучино 150/320мл",
  },
  {
    id: 607,
    name: "Капучино крим",
    image: "/images/cappuccino-cream.jpeg",
    price: "69 000 / 89 000 сум",
    category: "Кофе",
    subcategory: "С молоком",
    description: "Капучино крим 150/320мл",
  },
  {
    id: 608,
    name: "Латте",
    image: "/images/latte.jpeg",
    price: "69 000 сум",
    category: "Кофе",
    subcategory: "С молоком",
    description: "Латте 300мл",
  },
  {
    id: 609,
    name: "Карамельный кофе",
    image: "/images/caramel-coffee.jpeg",
    price: "75 000 сум",
    category: "Кофе",
    subcategory: "С молоком",
    description: "Карамельный кофе 250мл",
  },
  {
    id: 610,
    name: "Кортадо",
    image: "/images/cortado.jpeg",
    price: "49 000 сум",
    category: "Кофе",
    subcategory: "С молоком",
    description: "Кортадо 120мл",
  },
  {
    id: 611,
    name: "Флэт уайт",
    image: "/images/flat-white.jpeg",
    price: "89 000 сум",
    category: "Кофе",
    subcategory: "С молоком",
    description: "Флэт уайт 180мл",
  },
]

const rafCoffeeProducts = [
  {
    id: 612,
    name: "Классический",
    image: "/images/classic-raf.jpeg",
    price: "95 000 сум",
    category: "Кофе",
    subcategory: "Раф",
    description: "Классический раф 300мл (возможно в холодном исполнении)",
  },
  {
    id: 613,
    name: "Кокосовый",
    image: "/images/coconut-raf.jpeg",
    price: "95 000 сум",
    category: "Кофе",
    subcategory: "Раф",
    description: "Кокосовый раф 300мл",
  },
  {
    id: 614,
    name: "Цитрусовый",
    image: "/images/citrus-raf.jpeg",
    price: "95 000 сум",
    category: "Кофе",
    subcategory: "Раф",
    description: "Цитрусовый раф 300мл",
  },
  {
    id: 615,
    name: "Арахисовый",
    image: "/images/peanut-raf.jpeg",
    price: "95 000 сум",
    category: "Кофе",
    subcategory: "Раф",
    description: "Арахисовый раф 300мл",
  },
  {
    id: 616,
    name: "Biscotti",
    image: "/placeholder.svg?height=200&width=200&text=Biscotti+Raf",
    price: "95 000 сум",
    category: "Кофе",
    subcategory: "Раф",
    description: "Biscotti раф 300мл",
  },
]

const matchaCoffeeProducts = [
  {
    id: 617,
    name: "Раф матча",
    image: "/images/matcha-raf.jpeg",
    price: "95 000 сум",
    category: "Кофе",
    subcategory: "Матча",
    description: "Раф матча 300мл",
  },
  {
    id: 618,
    name: "Латте матча",
    image: "/images/matcha-latte.jpeg",
    price: "89 000 сум",
    category: "Кофе",
    subcategory: "Матча",
    description: "Латте матча 300мл",
  },
]

// Update the legendsCoffeeProducts array to use the new images
const legendsCoffeeProducts = [
  {
    id: 619,
    name: "Эгг-ног",
    image: "/images/egg-nog.jpeg",
    price: "79 000 сум",
    category: "Кофе",
    subcategory: "Легенды",
    description: "Эгг-ног 150мл",
  },
  {
    id: 620,
    name: "Малина - Арбуз",
    image: "/placeholder.svg?height=200&width=200&text=Raspberry+Watermelon",
    price: "119 000 сум",
    category: "Кофе",
    subcategory: "Легенды",
    description: "Малина - Арбуз 500мл",
  },
  {
    id: 621,
    name: "Раф урбечевый",
    image: "/images/urbech-raf.jpeg",
    price: "105 000 сум",
    category: "Кофе",
    subcategory: "Легенды",
    description: "Раф урбечевый 300мл - уникальный урбеч из 7-ми ингредиентов, приготовленный на Восточной мельнице",
  },
]

const allCoffeeProducts = [
  ...blackCoffeeProducts,
  ...milkCoffeeProducts,
  ...rafCoffeeProducts,
  ...matchaCoffeeProducts,
  ...legendsCoffeeProducts,
]

// Update the newColdCoffeeProducts array to use the new images
const newColdCoffeeProducts = [
  {
    id: 701,
    name: "Айс Американо",
    image: "/placeholder.svg?height=200&width=200&text=Iced+Americano",
    price: "65 000 сум",
    category: "Холодный кофе",
    description: "Айс Американо 220мл",
  },
  {
    id: 702,
    name: "Малиновый кофе",
    image: "/images/raspberry-coffee-cold.jpeg",
    price: "109 000 сум",
    category: "Холодный кофе",
    description: "Малиновый кофе 350мл",
  },
  {
    id: 703,
    name: "Бамбл",
    image: "/images/bumble.jpeg",
    price: "89 000 сум",
    category: "Холодный кофе",
    description: "Бамбл 250мл",
  },
  {
    id: 704,
    name: "Бамбл «Papakha»",
    image: "/images/bumble-papakha.jpeg",
    price: "99 000 сум",
    category: "Холодный кофе",
    description: "Бамбл «Papakha» 400мл",
  },
  {
    id: 705,
    name: "Грильяж с урбечом",
    image: "/images/grillage-urbech.jpeg",
    price: "95 000 / 119 000 сум",
    category: "Холодный кофе",
    description: "Грильяж с урбечом 250/400мл",
  },
]

const chocolateProducts = [
  {
    id: 801,
    name: "Горячий шоколад",
    image: "/placeholder.svg?height=200&width=200&text=Hot+Chocolate",
    price: "69 000 сум",
    category: "Шоколад",
    description: "Горячий шоколад 100мл",
  },
  {
    id: 802,
    name: "Моккачино",
    image: "/placeholder.svg?height=200&width=200&text=Mokkachino",
    price: "79 000 сум",
    category: "Шоколад",
    description: "Моккачино 250мл",
  },
  {
    id: 803,
    name: "Какао",
    image: "/placeholder.svg?height=200&width=200&text=Cocoa",
    price: "89 000 сум",
    category: "Шоколад",
    description: "Какао 300мл",
  },
]

// Update the authorTeaProducts array to use the new images
const authorTeaProducts = [
  {
    id: 901,
    name: "Облепиха & Апельсин",
    image: "/images/sea-buckthorn-orange-tea.jpeg",
    price: "105 000 сум",
    category: "Чай без чая",
    subcategory: "Авторские чаи",
    description: "Облепиха & Апельсин 550мл",
  },
  {
    id: 902,
    name: "Манго & Маракуйя",
    image: "/images/mango-passion-fruit-tea.jpeg",
    price: "105 000 сум",
    category: "Чай без чая",
    subcategory: "Авторские чаи",
    description: "Манго & Маракуйя 550мл",
  },
  {
    id: 903,
    name: "Имбирный",
    image: "/images/ginger-tea.jpeg",
    price: "105 000 сум",
    category: "Чай без чая",
    subcategory: "Авторские чаи",
    description: "Имбирный 550мл",
  },
  {
    id: 904,
    name: "Шиповник",
    image: "/placeholder.svg?height=200&width=200&text=Rosehip+Tea",
    price: "105 000 сум",
    category: "Чай без чая",
    subcategory: "Авторские чаи",
    description: "Шиповник 550мл",
  },
]

// Update the herbalTeaProducts array to use the new images
const herbalTeaProducts = [
  {
    id: 905,
    name: "Травы Узбекистана",
    image: "/placeholder.svg?height=200&width=200&text=Uzbekistan+Herbs",
    price: "89 000 сум",
    category: "Чай без чая",
    subcategory: "Травяные чаи",
    description: "Травы Узбекистана 600мл",
  },
  {
    id: 906,
    name: "Травяной с шишками",
    image: "/images/herbal-cones-tea.jpeg",
    price: "99 000 сум",
    category: "Чай без чая",
    subcategory: "Травяные чаи",
    description: "Травяной с шишками 600мл",
  },
  {
    id: 907,
    name: "Мятный",
    image: "/images/mint-tea.jpeg",
    price: "69 000 сум",
    category: "Чай без чая",
    subcategory: "Травяные чаи",
    description: "Мятный 600мл",
  },
  {
    id: 908,
    name: "Японская вишня",
    image: "/placeholder.svg?height=200&width=200&text=Japanese+Cherry",
    price: "89 000 сум",
    category: "Чай без чая",
    subcategory: "Травяные чаи",
    description: "Японская вишня 600мл",
  },
]

const allTeaWithoutTeaProducts = [...authorTeaProducts, ...herbalTeaProducts]

// Update the greenSelectionTeaProducts array to use the new images
const greenSelectionTeaProducts = [
  {
    id: 1001,
    name: "Жасмин",
    image: "/images/jasmine-tea.jpeg",
    price: "89 000 сум",
    category: "Селекционные чаи",
    subcategory: "Зеленые чаи",
    description: "Жасмин 600мл",
  },
  {
    id: 1002,
    name: "Колодец дракона",
    image: "/images/dragon-well-tea.jpeg",
    price: "89 000 сум",
    category: "Селекционные чаи",
    subcategory: "Зеленые чаи",
    description: "Колодец дракона 600мл",
  },
]

const blackSelectionTeaProducts = [
  {
    id: 1003,
    name: "Черный с чабрецом",
    image: "/images/black-thyme-tea.jpeg",
    price: "89 000 сум",
    category: "Селекционные чаи",
    subcategory: "Черные чаи",
    description: "Черный с чабрецом 600мл",
  },
  {
    id: 1004,
    name: "Ассам",
    image: "/placeholder.svg?height=200&width=200&text=Assam+Tea",
    price: "89 000 сум",
    category: "Селекционные чаи",
    subcategory: "Черные чаи",
    description: "Ассам 600мл",
  },
  {
    id: 1005,
    name: "Эрл Грей",
    image: "/images/earl-grey-tea.jpeg",
    price: "89 000 сум",
    category: "Селекционные чаи",
    subcategory: "Черные чаи",
    description: "Эрл Грей 600мл",
  },
]

const allSelectionTeaProducts = [...greenSelectionTeaProducts, ...blackSelectionTeaProducts]

// New sections from the image
const newLemonadeProducts = [
  {
    id: 1101,
    name: "Яблоко & лимон",
    image: "/images/apple-lemon-lemonade.jpeg",
    price: "89 000 / 109 000 сум",
    category: "Лимонады",
    description: "Яблоко & лимон 300/500мл",
  },
  {
    id: 1102,
    name: "Манго & маракуйя",
    image: "/images/mango-passion-fruit-lemonade.jpeg",
    price: "119 000 сум",
    category: "Лимонады",
    description: "Манго & маракуйя 450мл",
  },
  {
    id: 1103,
    name: "Баблгам",
    image: "/placeholder.svg?height=200&width=200&text=Bubblegum+Lemonade",
    price: "119 000 сум",
    category: "Лимонады",
    description: "Баблгам 240мл",
  },
  {
    id: 1104,
    name: "Dagestan lemonade",
    image: "/placeholder.svg?height=200&width=200&text=Dagestan+Lemonade",
    price: "99 000 сум",
    category: "Лимонады",
    description: "Dagestan lemonade 450мл",
  },
]

const newSmoothieProducts = [
  {
    id: 1201,
    name: "Мята Манго",
    image: "/images/mint-mango-smoothie.jpeg",
    price: "99 000 / 125 000 сум",
    category: "Смузи",
    description: "Мята Манго 300/400мл",
  },
  {
    id: 1202,
    name: "Манговый смузи",
    image: "/images/mango-smoothie.jpeg",
    price: "99 000 / 125 000 сум",
    category: "Смузи",
    description: "Манговый смузи 250/400мл",
  },
  {
    id: 1203,
    name: "Орех & чернослив",
    image: "/images/nuts-prunes-smoothie.jpeg",
    price: "99 000 сум",
    category: "Смузи",
    description: "Орех & чернослив 250мл",
  },
  {
    id: 1204,
    name: "Biscotti с хрустяшками",
    image: "/images/biscotti-crunchies-smoothie.jpeg",
    price: "99 000 / 125 000 сум",
    category: "Смузи",
    description: "Biscotti с хрустяшками 250/400мл",
  },
]

const newYogurtBowlProducts = [
  {
    id: 1301,
    name: "Йогурт гранола & малина",
    image: "/images/yogurt-granola-raspberry.jpeg",
    price: "99 000 сум",
    category: "Йогурты&Боулы",
    description: "Йогурт гранола & малина",
  },
  {
    id: 1302,
    name: "Йогурт малина & клубника",
    image: "/images/yogurt-raspberry-strawberry.jpeg",
    price: "99 000 сум",
    category: "Йогурты&Боулы",
    description: "Йогурт малина & клубника",
  },
  {
    id: 1303,
    name: "Blueberry bowl",
    image: "/images/blueberry-bowl.jpeg",
    price: "125 000 сум",
    category: "Йогурты&Боулы",
    description: "Blueberry bowl",
  },
]

const newFreshJuicesProducts = [
  {
    id: 1401,
    name: "Red микс",
    image: "/images/red-mix-juice.jpeg",
    price: "115 000 сум",
    category: "Свежевыжатые соки",
    description: "Red микс 250мл",
  },
  {
    id: 1402,
    name: "Витамикс",
    image: "/images/vitamix-juice.png",
    price: "109 000 сум",
    category: "Свежевыжатые соки",
    description: "Витамикс 250мл",
  },
  {
    id: 1403,
    name: "Фреш Грин",
    image: "/images/fresh-green-juice.jpeg",
    price: "99 000 / 119 000 сум",
    category: "Свежевыжатые соки",
    description: "Фреш Грин 300/500мл",
  },
  {
    id: 1404,
    name: "Фреш Яблоко",
    image: "/images/fresh-apple-juice.jpeg",
    price: "99 000 / 119 000 сум",
    category: "Свежевыжатые соки",
    description: "Фреш Яблоко 250/500мл",
  },
  {
    id: 1405,
    name: "Фреш Апельсин",
    image: "/images/fresh-orange-juice.jpeg",
    price: "99 000 / 119 000 сум",
    category: "Свежевыжатые соки",
    description: "Фреш Апельсин 250/500мл",
  },
  {
    id: 1406,
    name: "Фреш Грейпфрут",
    image: "/images/fresh-grapefruit-juice.jpeg",
    price: "99 000 / 119 000 сум",
    category: "Свежевыжатые соки",
    description: "Фреш Грейпфрут 250/500мл",
  },
]

const waterProducts = [
  {
    id: 1501,
    name: "«Papakha» без газа",
    image: "/images/papakha-still-water.jpeg",
    price: "45 000 сум",
    category: "Вода",
    description: "«Papakha» без газа 330мл",
  },
  {
    id: 1502,
    name: "«Papakha» с газом",
    image: "/images/papakha-sparkling-water.jpeg",
    price: "45 000 сум",
    category: "Вода",
    description: "«Papakha» с газом 330мл",
  },
]

const newKidsProducts = [
  {
    id: 1601,
    name: "Детское какао",
    image: "/images/kids-cocoa.jpeg",
    price: "69 000 сум",
    category: "Для детей",
    description: "Детское какао 260мл",
  },
  {
    id: 1602,
    name: "Ванильное облако",
    image: "/images/vanilla-cloud.jpeg",
    price: "75 000 сум",
    category: "Для детей",
    description: "Ванильное облако 260мл",
  },
  {
    id: 1603,
    name: "Ванильный морозко",
    image: "/images/vanilla-frost.jpeg",
    price: "69 000 сум",
    category: "Для детей",
    description: "Ванильный морозко 250мл",
  },
]

const lemonadeProducts: any[] = []
const freshJuicesProducts: any[] = []
const coldCoffeeProducts: any[] = []
const yogurtBowlProducts: any[] = []
const smoothieProducts: any[] = []
const kidsDrinksProducts: any[] = []

// Обновить allBreakfastProducts
const allBreakfastProducts = [
  ...kashaProducts,
  ...eggsAndBaconProducts,
  ...curdAndMilkProducts,
  ...seriousBreakfastProducts,
  ...toastsProducts,
  ...pancakeProducts,
]

// Обновить allHotMenuProducts
const allHotMenuProducts = [...meatProducts, ...poultryProducts, ...seafoodProducts]

// Обновить allProducts чтобы включить pokeBowlProducts
// Обновить allProducts, убрав pastaProducts
// Обновить allProducts, добавив новые продукты
const allProducts = [
  ...allBreakfastProducts,
  ...allHotMenuProducts,
  ...soupProducts,
  ...saladProducts,
  ...pokeBowlProducts,
  ...sandwichBurgerProducts,
  ...bakeryProducts,
  ...sidesProducts,
  ...fillingsAndSaucesProducts,
  ...dagestaniProducts,
  ...kidsMenuProducts,
  ...allNewDessertProducts,
  ...allCoffeeProducts,
  ...newColdCoffeeProducts,
  ...chocolateProducts,
  ...allTeaWithoutTeaProducts,
  ...allSelectionTeaProducts,
  ...newLemonadeProducts,
  ...newSmoothieProducts,
  ...newYogurtBowlProducts,
  ...newFreshJuicesProducts,
  ...waterProducts,
  ...newKidsProducts,
  ...lemonadeProducts,
  ...freshJuicesProducts,
  ...coldCoffeeProducts,
  ...yogurtBowlProducts,
  ...smoothieProducts,
  ...kidsDrinksProducts,
]

// Обновить getSectionId функцию
const getSectionId = (menuItem: string) => {
  const sectionMap: { [key: string]: string } = {
    Завтраки: "breakfast",
    "Дагестанская кухня": "dagestani-cuisine",
    Салаты: "salads",
    Супы: "soups",
    "Сендвичи и бургеры": "sandwich-burgers",
    "Горячее меню": "hot-menu",
    Выпечка: "bakery",
    Гарниры: "sides",
    "Начинки и соусы": "fillings-sauces",
    "Детское меню": "kids-menu",
    Десерты: "new-desserts",
    Кофе: "coffee",
    "Холодный кофе": "new-cold-coffee",
    Шоколад: "chocolate",
    "Чай без чая": "tea-without-tea",
    "Селекционные чаи": "selection-teas",
    Лимонады: "new-lemonades",
    Смузи: "new-smoothies",
    "Йогурты&Боулы": "new-yogurt-bowls",
    "Свежевыжатые соки": "new-fresh-juices",
    Вода: "water",
    "Для детей": "new-kids",
  }
  return sectionMap[menuItem] || ""
}

// Добавить новую функцию после других функций, перед useEffect
const scrollNavToActiveItem = (activeItem: string) => {
  const navContainer = document.querySelector(".nav-scroll-container")
  const activeButton = document.querySelector(`[data-section="${activeItem}"]`)

  if (navContainer && activeButton) {
    const containerRect = navContainer.getBoundingClientRect()
    const buttonRect = activeButton.getBoundingClientRect()

    // Вычисляем позицию для центрирования активной кнопки
    const scrollLeft = activeButton.offsetLeft - containerRect.width / 2 + buttonRect.width / 2

    navContainer.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    })
  }
}

// Обновить useEffect для Intersection Observer
const Home = () => {
  const [activeSection, setActiveSection] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)
  const openProductModal = (product: any) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }
  const closeProductModal = () => {
    setSelectedProduct(null)
    setIsProductModalOpen(false)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
    } else {
      const results = allProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
      setSearchResults(results)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToProduct = (productId: number) => {
    const product = allProducts.find((p) => p.id === productId)
    if (product) {
      const sectionId = getSectionId(product.category)
      scrollToSection(sectionId)
    }
  }

  // Новый дизайн карточек с фиксированной кнопкой внизу
  const renderProductGrid = (products: any[]) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
          <div className="aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-[#94573c] text-base font-semibold mb-2 line-clamp-2">{product.name}</h3>
            <p className="text-gray-600 text-sm flex-1 line-clamp-2">{product.description}</p>
            <div className="mt-4">
              <Button
                onClick={() => openProductModal(product)}
                className="w-full bg-[#94573c] hover:bg-[#7a4530] text-white rounded-xl py-3 text-sm flex items-center justify-between"
              >
                <span className="font-bold">{product.price}</span>
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderTeaSubsection = (title: string, products: any[]) => {
    if (!products || products.length === 0) {
      return null
    }

    return (
      <div className="mb-8">
        <h3 className="text-[#94573c] text-xl font-semibold mb-4">{title}</h3>
        {renderProductGrid(products)}
      </div>
    )
  }

  const renderCoffeeSubsection = (title: string, products: any[]) => {
    if (!products || products.length === 0) {
      return null
    }

    return (
      <div className="mb-8">
        <h3 className="text-[#94573c] text-xl font-semibold mb-4">{title}</h3>
        {renderProductGrid(products)}
      </div>
    )
  }

  useEffect(() => {
    const sections = [
      "breakfast",
      "dagestani-cuisine",
      "salads",
      "soups",
      "sandwich-burgers",
      "hot-menu",
      "bakery",
      "sides",
      "fillings-sauces",
      "kids-menu",
      "new-desserts",
      "coffee",
      "new-cold-coffee",
      "chocolate",
      "tea-without-tea",
      "selection-teas",
      "new-lemonades",
      "new-smoothies",
      "new-yogurt-bowls",
      "new-fresh-juices",
      "water",
      "new-kids",
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            // Добавить автоматический скролл навигации
            scrollNavToActiveItem(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1,
      },
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f4eadc]">
      {/* Header */}
      <header className="bg-[#f4eadc] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Papakha Logo" width={120} height={40} className="h-10 w-auto object-contain" />
          </div>
          <div className="flex items-center">
            <button
              onClick={openSearch}
              className="w-12 h-12 bg-[#94573c] rounded-full flex items-center justify-center hover:bg-[#7a4530] transition-colors"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-8">
          <div className="bg-[#f4eadc] rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden flex flex-col">
            {/* Search Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 mr-4">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#94573c]" />
                  <input
                    type="text"
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#94573c] focus:ring-opacity-50 text-[#94573c] placeholder-[#94573c] placeholder-opacity-60"
                    autoFocus
                  />
                </div>
                <button
                  onClick={closeSearch}
                  className="w-12 h-12 bg-[#94573c] rounded-full flex items-center justify-center hover:bg-[#7a4530] transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Decorative Ornament Border */}
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <Image
                    src="/images/ornament-border.png"
                    alt="Decorative Border"
                    width={800}
                    height={40}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        scrollToProduct(product.id)
                        closeSearch()
                      }}
                      className="flex items-center p-4 bg-white rounded-xl hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-xl mr-4 flex-shrink-0">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#94573c] font-medium text-base">{product.name}</h4>
                        <p className="text-gray-500 text-sm">{product.category}</p>
                      </div>
                      <div className="text-[#94573c] font-medium text-base">{product.price}</div>
                    </div>
                  ))}
                </div>
              ) : searchQuery.trim() !== "" ? (
                <div className="text-center py-12 text-gray-500">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg">Блюда не найдены</p>
                  <p className="text-sm">Попробуйте изменить поисковый запрос</p>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg">Начните поиск</p>
                  <p className="text-sm">Введите название блюда или напитка</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {isProductModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#f4eadc] rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#94573c] text-xl font-bold">Описание товара</h3>
              <button onClick={closeProductModal} className="text-[#94573c] hover:text-[#7a4530]">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="aspect-square bg-gray-100 rounded-2xl mb-4">
              <Image
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <h4 className="text-[#94573c] font-bold text-lg mb-2">{selectedProduct.name}</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {selectedProduct.description ||
                "Вкусное блюдо, приготовленное по авторскому рецепту из качественных ингредиентов."}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#94573c] font-bold text-xl">{selectedProduct.price}</span>
              <Button className="bg-[#94573c] hover:bg-[#7a4530] text-white rounded-xl px-6 py-2 flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Добавить в заказ
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Banners */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Desktop version - grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/bambla-papakha.jpg"
              alt="Бамбл Папаха"
              width={400}
              height={224}
              className="w-full h-56 object-contain"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/raspberry-coffee.jpg"
              alt="Малиновый кофе"
              width={400}
              height={224}
              className="w-full h-56 object-contain"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/blueberry-bowl.jpg"
              alt="Blueberry Bowl"
              width={400}
              height={224}
              className="w-full h-56 object-contain"
            />
          </div>
        </div>

        {/* Mobile version - horizontal scroll for all banners */}
        <div className="md:hidden mb-8">
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
            <div className="flex gap-4 pb-4 px-2" style={{ minWidth: "max-content" }}>
              <div className="relative rounded-lg overflow-hidden flex-shrink-0 w-80">
                <Image
                  src="/images/bambla-papakha.jpg"
                  alt="Бамбл Папаха"
                  width={320}
                  height={180}
                  className="w-full h-44 object-contain"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden flex-shrink-0 w-80">
                <Image
                  src="/images/raspberry-coffee.jpg"
                  alt="Малиновый кофе"
                  width={320}
                  height={180}
                  className="w-full h-44 object-contain"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden flex-shrink-0 w-80">
                <Image
                  src="/images/blueberry-bowl.jpg"
                  alt="Blueberry Bowl"
                  width={320}
                  height={180}
                  className="w-full h-44 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Ornament Border */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <Image
              src="/images/ornament-border.png"
              alt="Decorative Border"
              width={1200}
              height={60}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation Menu - новый дизайн в стиле таблеток */}
        <nav className="mb-8 sticky top-0 z-40 bg-[#f4eadc] py-4 -mx-6 px-6">
          <div className="relative">
            <div
              className="nav-scroll-container overflow-x-auto pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex gap-3 px-4" style={{ minWidth: "max-content" }}>
                {menuItems.map((item, index) => {
                  const sectionId = getSectionId(item)
                  const isActive = activeSection === sectionId

                  return (
                    <button
                      key={index}
                      data-section={sectionId}
                      onClick={() => scrollToSection(sectionId)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 border ${
                        isActive
                          ? "bg-[#94573c] text-white border-[#94573c] shadow-md"
                          : "bg-transparent text-[#94573c] border-[#94573c] hover:bg-[#94573c] hover:text-white shadow-sm"
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Products Sections */}

        <section className="mb-12" id="breakfast">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Завтраки</h2>
          {renderTeaSubsection("Каши", kashaProducts)}
          {renderTeaSubsection("Яичницы и бэки", eggsAndBaconProducts)}
          {renderTeaSubsection("Творог и молоко", curdAndMilkProducts)}
          {renderTeaSubsection("Серьезные завтраки", seriousBreakfastProducts)}
          {renderTeaSubsection("Тосты и круассаны", toastsProducts)}
          {renderTeaSubsection("Блины", pancakeProducts)}
        </section>

        <section className="mb-12" id="dagestani-cuisine">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Дагестанская кухня</h2>
          {renderProductGrid(dagestaniProducts)}
        </section>

        {/* Обновить секцию салатов в JSX */}
        <section className="mb-12" id="salads">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Салаты</h2>
          {renderProductGrid(saladProducts)}
          {renderTeaSubsection("Поке и боулы", pokeBowlProducts)}
        </section>

        <section className="mb-12" id="soups">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Супы</h2>
          {renderProductGrid(soupProducts)}
        </section>

        <section className="mb-12" id="sandwich-burgers">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Сендвичи и бургеры</h2>
          {renderProductGrid(sandwichBurgerProducts)}
        </section>

        <section className="mb-12" id="hot-menu">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Горячее меню</h2>
          {renderTeaSubsection("Мясо", meatProducts)}
          {renderTeaSubsection("Птица", poultryProducts)}
          {renderTeaSubsection("Морепродукты", seafoodProducts)}
        </section>

        <section className="mb-12" id="bakery">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Выпечка</h2>
          {renderProductGrid(bakeryProducts)}
        </section>

        <section className="mb-12" id="sides">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Гарниры</h2>
          {renderProductGrid(sidesProducts)}
        </section>

        <section className="mb-12" id="fillings-sauces">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Начинки и соусы</h2>
          {renderProductGrid(fillingsAndSaucesProducts)}
        </section>

        <section className="mb-12" id="kids-menu">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Детское меню</h2>
          {renderProductGrid(kidsMenuProducts)}
        </section>

        <section className="mb-12" id="new-desserts">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Десерты</h2>
          {renderProductGrid(allNewDessertProducts)}
        </section>

        <section className="mb-12" id="coffee">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Кофе</h2>
          {renderCoffeeSubsection("Черный", blackCoffeeProducts)}
          {renderCoffeeSubsection("С молоком", milkCoffeeProducts)}
          {renderCoffeeSubsection("Раф", rafCoffeeProducts)}
          {renderCoffeeSubsection("Матча", matchaCoffeeProducts)}
          {renderCoffeeSubsection("Легенды", legendsCoffeeProducts)}
        </section>

        <section className="mb-12" id="new-cold-coffee">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Холодный кофе</h2>
          {renderProductGrid(newColdCoffeeProducts)}
        </section>

        <section className="mb-12" id="chocolate">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Шоколад</h2>
          {renderProductGrid(chocolateProducts)}
        </section>

        <section className="mb-12" id="tea-without-tea">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Чай без чая</h2>
          {renderTeaSubsection("Авторские чаи", authorTeaProducts)}
          {renderTeaSubsection("Травяные чаи", herbalTeaProducts)}
        </section>

        <section className="mb-12" id="selection-teas">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Селекционные чаи</h2>
          {renderTeaSubsection("Зеленые чаи", greenSelectionTeaProducts)}
          {renderTeaSubsection("Черные чаи", blackSelectionTeaProducts)}
        </section>

        <section className="mb-12" id="new-lemonades">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Лимонады</h2>
          {renderProductGrid(newLemonadeProducts)}
        </section>

        <section className="mb-12" id="new-smoothies">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Смузи</h2>
          {renderProductGrid(newSmoothieProducts)}
        </section>

        <section className="mb-12" id="new-yogurt-bowls">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Йогурты&Боулы</h2>
          {renderProductGrid(newYogurtBowlProducts)}
        </section>

        <section className="mb-12" id="new-fresh-juices">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Свежевыжатые соки</h2>
          {renderProductGrid(newFreshJuicesProducts)}
        </section>

        <section className="mb-12" id="water">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Вода</h2>
          {renderProductGrid(waterProducts)}
        </section>

        <section className="mb-12" id="new-kids">
          <h2 className="text-[#94573c] text-2xl font-bold mb-6">Для детей</h2>
          {renderProductGrid(newKidsProducts)}
        </section>
      </div>
    </div>
  )
}

export default Home
