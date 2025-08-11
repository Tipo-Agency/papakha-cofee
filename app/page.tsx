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
    const scrollLeft = (activeButton as HTMLElement).offsetLeft - containerRect.width / 2 + buttonRect.width / 2

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
          className="bg-[#f4eadc] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
            <div className="mt-4">
              <Button
                onClick={() => openProductModal(product)}
                className="w-full bg-[#94573c] hover:bg-[#7a4530] text-[#f4eadc] rounded-xl py-3 text-sm flex items-center justify-between"
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
              className="w-10 h-10 bg-[#94573c] rounded-full flex items-center justify-center hover:bg-[#7a4530] transition-colors"
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
                      className="flex items-center p-4 bg-[#f4eadc] rounded-xl hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
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
      <div className="max-w-7xl mx-auto">
        {/* Desktop version - grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/bambla-papakha.jpg"
              alt="Бамбл Папаха"
              width={400}
              height={224}
              className="w-full object-contain"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/raspberry-coffee.jpg"
              alt="Малиновый кофе"
              width={400}
              height={224}
              className="w-full object-contain"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/blueberry-bowl.jpg"
              alt="Blueberry Bowl"
              width={400}
              height={224}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Mobile version - horizontal scroll for all banners */}
        <div className="md:hidden">
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            } as React.CSSProperties}
          >
            <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
            <div className="flex gap-4 pb-4 px-2" style={{ minWidth: "max-content" }}>
              <div className="relative overflow-hidden flex-shrink-0 w-[22rem]">
                <Image
                  src="/images/bambla-papakha.jpg"
                  alt="Бамбл Папаха"
                  width={320}
                  height={180}
                  className="w-full object-contain"
                />
              </div>

              <div className="relative overflow-hidden flex-shrink-0 w-[22rem]">
                <Image
                  src="/images/raspberry-coffee.jpg"
                  alt="Малиновый кофе"
                  width={320}
                  height={180}
                  className="w-full object-contain"
                />
              </div>

              <div className="relative overflow-hidden flex-shrink-0 w-[22rem]">
                <Image
                  src="/images/blueberry-bowl.jpg"
                  alt="Blueberry Bowl"
                  width={320}
                  height={180}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Ornament Border */}
        {/* <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <Image
              src="/images/ornament-border.png"
              alt="Decorative Border"
              width={1200}
              height={60}
              className="w-full h-auto object-contain"
            />
          </div>
        </div> */}
        <div className="divider">
            <svg width="100%" height="40" viewBox="0 0 375 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M80.1472 13.4077C80.0797 13.4462 80.0133 13.4659 79.929 13.4742C79.8227 13.4789 79.7431 13.4624 79.6477 13.4168C79.6031 13.4074 79.1577 13.1449 79.0993 13.104C78.8414 12.9226 78.6178 12.7675 78.3918 12.5436C78.3169 12.4694 78.2413 12.3962 78.1624 12.3261C78.0623 12.2365 77.8665 12.0743 77.7461 12.0138C77.6275 11.9505 77.8023 12.0044 77.8287 12.012C77.7312 11.9432 77.5838 11.8543 77.4745 11.8125C77.3562 11.7678 77.62 11.8148 77.6471 11.8195C77.6261 11.8124 77.3732 11.6769 77.35 11.5916C77.2966 11.3947 78.3023 11.8335 78.3911 11.8661C78.7685 12.0099 79.1166 12.192 79.4871 12.3485C79.601 12.3979 79.7179 12.4449 79.8334 12.494C79.8494 12.4822 79.8832 12.5153 79.9257 12.573C79.9337 12.5009 79.9467 12.4558 79.967 12.4587C80.0431 12.3588 80.1212 12.26 80.1956 12.1609C80.4396 11.8411 80.6519 11.5101 80.9084 11.1984C80.9696 11.1259 81.6252 10.2463 81.6767 10.4438C81.6989 10.5293 81.5461 10.7723 81.5314 10.7893C81.5529 10.7728 81.7589 10.6004 81.6781 10.6979C81.6039 10.7884 81.5201 10.9388 81.4693 11.0467C81.4884 11.0279 81.6136 10.8938 81.542 11.0074C81.4674 11.1198 81.3779 11.3577 81.3352 11.4848C81.3014 11.5847 81.2721 11.6861 81.2438 11.7877C81.1587 12.094 81.0414 12.3394 80.907 12.6252C80.8768 12.6894 80.6203 13.1388 80.586 13.1686C80.526 13.2562 80.4651 13.31 80.3699 13.3577C80.2927 13.3924 80.2252 13.4077 80.1472 13.4077ZM90.1517 28.4628C91.699 26.7512 92.5089 25.1697 93.2649 23.0007C93.3121 22.8583 93.3577 22.7158 93.4023 22.5722L93.4035 22.5674C94.031 20.6377 94.2939 19.0496 93.8791 17.0424C93.3867 15.1486 92.5571 13.9841 91.0803 12.7236C91.0798 12.7229 91.0973 12.7401 91.0975 12.7377C88.7651 10.6864 86.492 8.97218 83.409 8.28445C79.9066 7.77999 76.4819 9.25914 74.0585 11.7467C72.5113 13.458 71.7015 15.0398 70.9455 17.2087C70.8981 17.3512 70.8525 17.4938 70.8078 17.6372L70.8067 17.6419C70.1794 19.5717 69.9163 21.1599 70.331 23.1671C70.8237 25.0607 71.6533 26.2252 73.1301 27.4859C73.1306 27.4866 73.1129 27.4694 73.1126 27.4717C75.4453 29.5231 77.7182 31.2373 80.8014 31.925C84.2731 32.425 87.7375 30.9411 90.1517 28.4628ZM80.9918 30.9876C79.4437 30.6542 78.2831 30.0814 76.9398 29.2564C75.7688 28.5144 74.7696 27.7131 73.7262 26.7974C73.722 26.7927 73.7177 26.7903 73.7132 26.7856C72.3836 25.6761 71.6337 24.6565 71.1692 22.97C70.763 21.1338 71.01 19.6571 71.5631 17.8811C71.5631 17.8808 71.5671 17.8693 71.5671 17.8669C72.2582 15.6375 73.0283 13.9922 74.5731 12.2228C78.4244 8.15409 82.5562 8.05892 87.2706 10.9532C88.4413 11.6955 89.4408 12.4968 90.4842 13.4122C90.4884 13.4169 90.4927 13.4193 90.4969 13.424C91.8266 14.5336 92.5767 15.5531 93.0412 17.2396C93.4472 19.0758 93.2004 20.5525 92.6473 22.3287L92.6433 22.3428C91.9522 24.5723 91.1821 26.2174 89.6373 27.9871C86.944 30.8327 84.3683 31.4862 80.9918 30.9876ZM80.6205 15.1914C80.6531 15.2056 80.6569 15.2244 80.637 15.2541C80.6052 15.2376 80.5995 15.2205 80.6205 15.1914ZM80.1682 15.559L80.1829 15.5685C80.2589 15.6235 80.3588 15.6757 80.4448 15.7128C80.5567 15.748 80.6474 15.7484 80.7591 15.7147C80.8734 15.6887 80.9521 15.6432 81.0319 15.557C81.0884 15.4823 81.1491 15.3873 81.188 15.3018L81.1953 15.2854C81.3434 15.0811 81.5343 14.8104 81.564 14.7653C81.8899 14.3024 82.0708 13.9661 82.2978 13.4505C82.3734 13.2689 82.4544 13.0908 82.5311 12.9101C82.6946 12.5297 82.8934 12.05 83.0913 11.6882C83.1022 11.6693 83.1128 11.6499 83.1223 11.6301C83.1397 11.5933 83.1289 11.6065 83.1123 11.623C83.1003 11.6349 82.9945 11.7781 82.9945 11.7781C83.0217 11.7208 83.0509 11.6629 83.0788 11.6057C83.1518 11.4581 83.2248 11.2945 83.3214 11.1613C83.4479 10.9797 83.1343 11.3443 83.1282 11.3516C83.2047 11.2194 83.3653 10.9391 83.3825 10.7984C83.3797 10.5131 82.8259 11.444 82.8138 11.4629C82.431 12.0243 82.009 12.5155 81.6429 13.0965C81.3826 13.5195 81.1469 13.8376 80.8392 14.2252C80.7169 14.3794 80.6011 14.5338 80.4883 14.6911C80.3123 14.6103 80.1354 14.5337 79.9526 14.4604C79.4933 14.2762 79.131 14.1168 78.6952 13.8782C78.0892 13.5554 77.4792 13.3378 76.8685 13.04C76.8486 13.0282 75.9061 12.4955 76.0452 12.7447C76.13 12.8583 76.4084 13.0221 76.5404 13.0991C76.5314 13.0968 76.0782 12.9348 76.2783 13.0295C76.428 13.0975 76.5728 13.2034 76.709 13.2953C76.7617 13.3312 76.8158 13.3669 76.8678 13.4036C76.8678 13.4036 76.705 13.3315 76.6885 13.327C76.6661 13.3199 76.65 13.3152 76.6833 13.3388C76.7015 13.3506 76.7201 13.3627 76.739 13.374C77.0902 13.5901 77.5007 13.908 77.8311 14.1576C77.9874 14.2764 78.1459 14.391 78.3018 14.5112C78.7543 14.8463 79.0781 15.0491 79.5908 15.2893C79.6387 15.3138 79.9382 15.4551 80.1682 15.559ZM81.325 17.8466C81.3805 17.8464 81.436 17.8348 81.4967 17.8145C81.6082 17.7719 81.6809 17.7141 81.7487 17.6158C81.7674 17.6017 81.9768 17.2968 82.0035 17.2562C82.0264 17.2219 82.0508 17.1804 82.0748 17.1481C82.2829 16.8266 82.4813 16.5054 82.6747 16.1748C82.8724 15.8342 83.0483 15.4865 83.2363 15.1417C83.3258 14.9681 83.4073 14.7945 83.485 14.6153C83.5292 14.4875 83.6064 14.3347 83.66 14.2053C83.8445 13.7637 84.0327 13.3178 84.2233 12.879C84.2644 12.7848 84.3069 12.6919 84.3558 12.6017C84.4994 12.3327 84.2717 12.6843 84.2445 12.7271C84.3633 12.4654 84.5098 12.179 84.6697 11.9419C84.8343 11.701 84.4413 12.1885 84.433 12.1986C84.5357 12.0239 84.7518 11.6638 84.7913 11.4822C84.7981 11.1284 83.9019 12.6603 83.879 12.6981C83.5516 13.2337 83.1941 13.7457 82.8672 14.2826C82.7791 14.4368 82.6747 14.5944 82.5765 14.7427C82.3623 15.0662 82.144 15.3877 81.9305 15.7119C81.74 16.0015 81.5383 16.2848 81.3479 16.5748C81.2537 16.6681 81.158 16.7598 81.0614 16.8536C80.9311 16.82 80.8026 16.7879 80.6744 16.7534C80.3652 16.5959 80.0497 16.4497 79.7405 16.2928C79.3945 16.1169 79.0457 15.9459 78.6993 15.7709C78.5403 15.6911 78.3717 15.6058 78.2186 15.5156C77.6688 15.2114 77.1046 14.9438 76.5548 14.6408C76.5161 14.6195 74.9784 13.7333 75.1598 14.0372C75.284 14.1754 75.6501 14.3808 75.8258 14.4819C75.8137 14.4772 75.2306 14.2483 75.493 14.3761C75.7495 14.5027 76.0187 14.6791 76.2513 14.8475C76.2067 14.8236 75.8347 14.6311 76.0926 14.7939C76.18 14.8479 76.2629 14.9072 76.3451 14.9688C76.7284 15.2553 77.1129 15.5491 77.4917 15.8415C77.6025 15.9272 77.7454 16.0219 77.8472 16.1109C78.0035 16.2281 78.1601 16.3381 78.324 16.4446C78.6582 16.6513 78.9834 16.8661 79.3239 17.0637C79.6558 17.255 79.9871 17.4357 80.3272 17.6116C80.364 17.6282 80.4058 17.6517 80.4427 17.6702C80.4859 17.6914 80.8194 17.8537 80.8423 17.8563C80.95 17.908 81.0416 17.9222 81.1594 17.904C81.2223 17.8922 81.2764 17.874 81.325 17.8466ZM81.269 20.2893C81.1235 20.5168 80.9788 20.7446 80.8262 20.9808C80.634 21.2788 80.4193 21.5649 80.2176 21.8561C80.1203 21.9774 80.0329 22.1007 79.9503 22.2556L79.9425 22.2722L79.9238 22.3013L79.9231 22.3107C79.8128 22.5332 79.7183 22.7356 79.5773 22.9481C79.3235 23.3215 79.233 23.5311 79.0552 23.9354C78.9038 24.2757 78.6851 24.5773 78.5217 24.919C78.3906 25.193 78.303 25.4846 78.152 25.7548C77.866 26.2673 77.5649 26.784 77.2865 27.2986L77.0366 27.7469C77.0036 27.8319 76.9629 27.963 77.0753 27.8849C77.1774 27.8027 77.367 27.5105 77.4398 27.394L77.6906 26.9992C77.1004 28.2611 77.9083 26.7864 78.1653 26.4151C78.1322 26.4761 77.8611 26.9662 78.0826 26.6204C78.2224 26.3977 78.3792 26.1903 78.5257 25.973C78.7052 25.7062 78.8587 25.4368 79.0214 25.1601C79.1126 25.0054 79.2417 24.8533 79.3544 24.7131C79.4822 24.5527 79.5814 24.4143 79.6824 24.2339C79.8681 23.8931 79.9765 23.7199 80.2164 23.4117C80.4129 23.1571 80.5402 22.9323 80.6989 22.6567C80.8024 22.4923 80.941 22.3544 81.0737 22.2138C81.3803 21.887 81.5494 21.6908 81.7879 21.3058C81.8939 21.132 82.0016 20.9555 82.1025 20.7781C82.2777 20.8823 82.4589 20.9823 82.6369 21.0805C83.0349 21.2966 83.2793 21.3833 83.7073 21.5153C83.8922 21.5717 84.0811 21.6228 84.2523 21.7139C84.5268 21.8748 84.7488 22.007 85.0456 22.1308C85.4067 22.2796 85.5867 22.3761 85.9169 22.5801C86.0942 22.6866 86.2487 22.7577 86.4393 22.8335C86.6065 22.8996 86.7945 22.9678 86.9501 23.0568C87.2288 23.2167 87.4954 23.3744 87.7838 23.5171C88.0186 23.6335 88.2576 23.7357 88.4892 23.8597C88.8532 24.0503 88.3747 23.7588 88.3157 23.7225C88.6699 23.892 89.052 24.0763 89.3862 24.2785C89.3886 24.2801 89.3909 24.2808 89.3935 24.2832C89.5218 24.364 89.4861 24.3366 89.4016 24.2691C89.3732 24.2455 89.0284 24.003 89.0173 23.9955L89.4311 24.2143C89.552 24.2793 89.8616 24.4391 89.9908 24.4599C90.1273 24.4717 90.027 24.3781 89.9561 24.3207C89.937 24.3042 89.9197 24.2921 89.9103 24.2848C90.1117 24.4081 90.312 24.5352 90.5123 24.6599C90.3276 24.5463 90.1417 24.4333 89.9561 24.3207L89.5171 24.0553C89.0199 23.7464 88.5025 23.4467 87.9999 23.1434C87.7349 22.9835 87.5143 22.7738 87.2647 22.6007C86.9534 22.3849 86.6138 22.2313 86.3136 22.0107C85.9589 21.7476 85.7766 21.6105 85.3711 21.4121C85.1432 21.2975 84.9609 21.1686 84.7547 21.0299L84.7495 21.0229L84.7188 21.0063L84.7039 20.9969C84.5556 20.9034 84.4188 20.8395 84.2741 20.7822C83.9543 20.6291 83.6263 20.4872 83.3112 20.3238C83.0618 20.1941 82.823 20.0683 82.584 19.9426C82.9062 19.4243 83.1707 18.9007 83.4687 18.3648C83.5481 18.234 83.6376 18.0726 83.7077 17.9365C83.9113 17.566 84.0658 17.2101 84.2394 16.8275C84.3161 16.6615 84.3971 16.5071 84.4897 16.3493C84.5034 16.3184 84.5424 16.2614 84.5615 16.2288C84.797 15.8283 85.0152 15.4424 85.2247 15.0272C85.227 15.0225 85.2523 14.9717 85.2523 14.9714C85.248 14.9287 85.7161 14.1196 85.7882 14.0062C86.0239 13.6286 85.6724 14.1246 85.6285 14.1848C85.8 13.8929 85.9726 13.6019 86.1434 13.3093C86.1944 13.2231 86.2447 13.1375 86.2999 13.0537C86.5047 12.742 86.1164 13.2707 86.1039 13.2868C86.0966 13.2962 85.9799 13.4528 85.9799 13.4528C86.0161 13.3959 86.0513 13.334 86.0848 13.2757C86.1932 13.0898 86.4832 12.5998 86.5262 12.4097C86.5845 12.0426 85.9145 13.1768 85.914 13.178C85.5747 13.7072 85.2013 14.2098 84.856 14.7358C84.8532 14.7405 84.8227 14.7877 84.8222 14.7879C84.5485 15.2062 84.2601 15.5781 83.96 15.9759C83.832 16.1473 83.7247 16.3094 83.6166 16.4941C83.4208 16.8417 83.237 17.182 83.0217 17.5192C82.9456 17.6472 82.8367 17.8058 82.7557 17.9309C82.6731 18.0589 82.5916 18.1893 82.5108 18.3213C82.3545 18.5539 82.1988 18.787 82.0543 19.0312C81.9582 19.1939 81.8632 19.3579 81.7688 19.522C81.6051 19.4264 81.4417 19.331 81.2773 19.2375C81.031 19.097 80.7799 18.9715 80.5289 18.8468C80.3933 18.7724 80.258 18.6995 80.1229 18.6293C79.9904 18.5608 79.8173 18.4771 79.6879 18.4034C79.3336 18.2176 79.0053 18.0128 78.6629 17.8078C78.4773 17.7011 78.3041 17.6137 78.1079 17.5282C77.65 17.3314 77.2152 17.1516 76.7702 16.9239C76.7697 16.9237 76.7197 16.898 76.715 16.8954C76.1543 16.6096 75.5811 16.3582 75.024 16.0665C75.023 16.0658 73.879 15.4132 74.1114 15.7027C74.2432 15.8465 74.738 16.1286 74.9241 16.2363C74.9822 16.2703 75.0433 16.3065 75.1028 16.338C75.1028 16.338 74.9241 16.26 74.913 16.2555C74.8943 16.2484 74.2949 15.9806 74.6274 16.1501C74.7167 16.1957 74.8029 16.2448 74.8901 16.2944C75.1831 16.464 75.4774 16.631 75.771 16.7994C75.703 16.7689 75.152 16.5125 75.5435 16.7238C75.6626 16.7867 76.4703 17.2572 76.4878 17.2964C76.4878 17.2966 76.5355 17.3289 76.5395 17.3313C76.927 17.588 77.3077 17.815 77.7109 18.046C77.7437 18.0649 77.8056 18.0951 77.8327 18.1151C77.9915 18.2061 78.1384 18.3003 78.2871 18.4063C78.6277 18.6527 78.9385 18.8851 79.2989 19.1062C79.4271 19.1895 79.5849 19.2852 79.7186 19.3596C80.2431 19.6772 80.7322 19.9988 81.269 20.2893ZM88.4682 15.2723C88.2184 15.568 88.0011 15.8142 87.7791 16.137C87.5644 16.4244 87.3825 16.7508 87.192 17.0541C87.003 17.3892 86.8079 17.7172 86.607 18.0452C86.5713 18.109 86.5517 18.1638 86.5401 18.2361C86.5302 18.3067 86.5323 18.3634 86.5463 18.4333C86.5628 18.5041 86.5836 18.5541 86.6223 18.6158C86.6634 18.6772 86.7036 18.719 86.7633 18.7629C87.464 19.3 88.0308 19.8008 88.814 20.2348C88.9805 20.3222 89.1465 20.4033 89.317 20.4829C89.4963 20.5535 89.6592 20.6459 89.8468 20.7099C90.0272 20.7716 90.2069 20.8396 90.3878 20.8989C90.7305 21.0111 91.1084 21.1357 91.4038 21.3478C91.4322 21.3714 91.507 21.4342 91.5075 21.4765C91.6412 21.5018 91.4386 21.3057 91.4348 21.3027C91.375 21.2292 90.965 21.0051 90.8729 20.9564C90.7461 20.8896 90.6075 20.8193 90.4865 20.7425C90.3075 20.6292 90.3063 20.6502 89.9493 20.401C89.74 20.2551 90.0699 20.3444 90.1526 20.402C90.3498 20.535 89.9169 20.2371 89.9086 20.2319C89.774 20.1535 89.6826 20.1314 89.5711 20.0714C89.4904 20.0239 89.4094 19.9391 89.3435 19.8732C89.2773 19.8082 89.2105 19.7541 89.1368 19.6986C89.1068 19.6773 89.0724 19.6512 89.0339 19.6215C89.0754 19.638 89.1156 19.6551 89.1536 19.6705C89.1935 19.6752 89.6314 19.8496 89.6918 19.8772C89.7778 19.9129 89.9514 19.9858 90.128 20.0619C90.4653 20.2071 90.8134 20.3627 90.5838 20.2879C90.4301 20.2354 90.278 20.1507 90.128 20.0619C89.9901 19.9804 89.8538 19.8956 89.7199 19.8292C89.5534 19.7395 89.386 19.6511 89.2202 19.5602C88.9188 19.3885 88.6482 19.2119 88.3804 19.0208C88.3105 18.9443 88.2413 18.8629 88.1742 18.7769C88.0512 18.6041 87.7805 18.3808 87.5521 18.2032C87.6815 17.9477 87.7973 17.6931 87.9123 17.4215C88.0478 17.1022 88.1931 16.7877 88.3277 16.4681C88.3327 16.4563 88.339 16.4423 88.3442 16.4298C88.4857 16.1022 88.6198 15.8229 88.7979 15.5144C88.8655 15.3999 88.9269 15.2841 88.9925 15.1694C89.1125 14.9525 88.9174 15.2294 88.8886 15.2674C89.0006 15.0584 89.0886 14.8347 89.202 14.6318C89.3088 14.4438 89.0339 14.8217 89.0232 14.8357C89.0948 14.6949 89.2256 14.4057 89.2325 14.2555C89.2129 14.0096 88.5119 15.2172 88.4682 15.2723ZM89.5003 16.4216C89.2204 16.7895 89.0282 17.1948 88.7769 17.5788C88.7401 17.6423 88.7207 17.6962 88.7082 17.7685C88.6976 17.8389 88.6992 17.8953 88.7127 17.9652C88.7287 18.0361 88.749 18.0861 88.7875 18.1477C88.8286 18.2098 88.8678 18.2509 88.9276 18.2953C89.2318 18.5386 89.5095 18.802 89.8163 19.0429C90.1528 19.2812 90.6049 19.539 91.0288 19.5594C91.2066 19.5688 91.7116 19.6034 91.8667 19.6849C91.9201 19.7038 92.1806 19.805 92.161 19.8971C92.3308 19.8442 91.9262 19.6257 91.909 19.616C91.858 19.5896 91.8077 19.5657 91.7553 19.5428C91.4619 19.415 91.3979 19.3817 91.1166 19.2539C90.9759 19.1826 91.1946 19.1639 91.265 19.1996C91.397 19.2629 91.1089 19.1189 91.0947 19.1132C90.8786 19.0284 90.9412 19.0554 90.7204 18.9142C89.903 18.391 89.9504 17.9437 89.6956 17.7352C89.829 17.4211 89.924 17.1086 90.0369 16.7741C90.0369 16.7741 90.0421 16.7576 90.0442 16.7505C90.1299 16.5167 90.2601 16.1093 90.3963 15.9048C90.4802 15.7735 90.3375 15.9313 90.3177 15.9535C90.3845 15.8215 90.4698 15.6677 90.5642 15.5552C90.6601 15.4431 90.4214 15.6474 90.4025 15.6632C90.4169 15.6467 90.5999 15.3713 90.5848 15.2837C90.5416 15.0371 89.5794 16.3252 89.5003 16.4216ZM86.7895 14.6437C86.4272 15.1533 86.0605 15.6115 85.7265 16.1464C85.3923 16.6775 85.0676 17.0739 84.7833 17.6527C84.5882 18.0476 84.3726 18.4004 84.1428 18.7748C84.104 18.8433 84.0842 18.8999 84.0721 18.9779C84.0627 19.0523 84.0665 19.1118 84.0835 19.185C84.1024 19.2577 84.1274 19.3116 84.1704 19.3733C84.2169 19.4366 84.262 19.478 84.3282 19.5203C85.0305 19.9714 85.732 20.4233 86.4393 20.8663C86.7447 21.0586 87.0316 21.2577 87.3275 21.4627C87.7798 21.7605 88.1666 21.9182 88.6834 22.0583C88.8192 22.094 89.0039 22.1418 89.1312 22.1964C89.3182 22.2684 90.9109 22.9011 90.956 23.1486C91.252 23.1675 90.2428 22.5733 90.0385 22.4543C89.9653 22.4122 89.0605 21.9102 89.4025 22.0283C89.4512 22.0448 89.4346 22.0353 89.4091 22.0259C89.3399 21.9963 89.2774 21.9694 89.2691 21.9656C89.0846 21.8818 88.8898 21.8121 88.7086 21.7229C88.2502 21.4813 89.233 21.8572 88.8371 21.6593C88.724 21.6026 88.6064 21.5436 88.5993 21.5405C88.2094 21.3719 88.1317 21.4208 87.8072 21.1025C87.7718 21.068 87.7248 21.0177 87.6877 20.9874C87.127 20.4693 86.6155 20.16 86.052 19.6215C85.795 19.3707 85.4389 19.135 85.1073 18.926C85.2726 18.6234 85.419 18.3279 85.5555 17.9931C85.7754 17.4499 86.0657 16.9972 86.3096 16.4722C86.3377 16.3999 86.3781 16.3202 86.4107 16.2484C86.6301 15.7659 86.8908 15.3226 87.1225 14.8527C87.1768 14.7431 87.2442 14.6246 87.307 14.5193C87.4794 14.2217 87.213 14.6089 87.179 14.6573C87.3348 14.365 87.4971 14.0513 87.674 13.7736C87.8275 13.5341 87.4444 14.0381 87.4177 14.0725C87.5339 13.8749 87.7668 13.4662 87.8121 13.2574C87.8235 12.9277 86.8309 14.5834 86.7895 14.6437ZM87.0236 26.4699C86.6724 26.2167 86.3328 25.9797 85.9636 25.7518C85.5456 25.4738 85.1078 25.1948 84.6649 24.9595C84.5048 24.8745 84.3376 24.7928 84.1751 24.7109C84.0592 24.6526 83.95 24.5811 83.8364 24.5206C83.7073 24.4543 83.5948 24.4376 83.4524 24.4653C83.311 24.5005 83.216 24.5621 83.1263 24.6769C83.0828 24.7021 82.2848 25.7931 82.1884 25.9279C82.0444 26.1315 81.9083 26.3069 81.7435 26.494C81.3812 26.9068 81.1661 27.2727 81.01 27.7961C80.9767 27.9137 80.9039 28.1671 80.8472 28.2674C80.7922 28.4002 80.3321 29.5595 80.1262 29.556C80.1236 29.8077 80.561 29.1162 80.7041 28.8782C80.7943 28.7251 80.9056 28.5277 81.0177 28.3895C81.0886 28.3026 81.0858 28.3348 81.0551 28.4165C81.0503 28.4259 81.0116 28.5529 81.0085 28.5612L81.0595 28.4195C81.1207 28.2499 81.2317 28.0246 81.3267 27.8751C81.4691 27.6507 81.3852 27.9911 81.3328 28.0873C81.1998 28.3076 81.4882 27.8324 81.4953 27.8191C81.6526 27.5168 81.5791 27.4871 81.8663 27.2512C81.9801 27.1563 82.0871 27.0526 82.1958 26.9515C81.9379 27.3294 81.8191 27.6599 81.6906 27.9946C81.6079 28.2092 81.5215 28.4256 81.3911 28.6571C81.3789 28.6783 81.3803 28.6666 81.3864 28.6548C81.4001 28.6274 81.4138 28.5912 81.4261 28.5627C81.5137 28.3676 81.5992 28.1776 81.6906 27.9946C81.8585 27.6585 82.0475 27.3432 82.3091 27.0456C82.5061 26.8291 82.6624 26.6298 82.8296 26.3901C82.8743 26.3258 82.9192 26.2616 82.9643 26.1976C83.0299 26.132 83.0982 26.0701 83.1749 26.0082C83.3393 25.8788 83.5221 25.6695 83.6787 25.4718L83.7878 25.5252C83.9432 25.5993 84.1425 25.6825 84.3045 25.742C84.7561 25.9078 85.1925 26.175 85.6434 26.3452C85.7123 26.3712 85.7811 26.4004 85.85 26.4271C86.1722 26.5523 86.4844 26.6829 86.7968 26.831C86.9279 26.8841 87.1095 26.9781 87.2357 27.0485C87.4678 27.1739 87.17 26.9725 87.131 26.9449C87.3594 27.0564 87.6081 27.1705 87.823 27.3029C88.036 27.4361 87.6071 27.1068 87.5953 27.0974C87.751 27.1836 88.0715 27.3534 88.2375 27.3726C88.511 27.3456 87.0942 26.5198 87.0236 26.4699ZM86.0321 27.8438C85.53 27.4222 85.3182 27.293 84.7332 27.0049C84.5856 26.9281 84.4519 26.845 84.3107 26.7581C84.1824 26.6893 84.0707 26.6711 83.9274 26.6957C83.7854 26.728 83.6888 26.7885 83.5967 26.9009C83.3802 27.1647 83.1655 27.4195 82.9392 27.6753C82.6341 28.0225 82.4289 28.2919 82.3417 28.7522C82.3325 28.8084 82.3079 28.9624 82.2888 29.0082C82.2685 29.1117 82.0673 29.9575 81.8528 29.907C81.8935 30.1202 82.2593 29.5239 82.2605 29.5222C82.4766 29.1545 82.461 29.3512 82.52 29.1495C82.5444 29.0704 82.5987 28.9304 82.6419 28.86C82.7264 28.7219 82.7257 28.944 82.6792 29.0208C82.5935 29.1681 82.7607 28.8961 82.7845 28.8486C82.8771 28.6599 82.7919 28.6465 82.9971 28.5324C83.2429 28.3786 83.3594 27.4756 84.3839 27.809C84.7315 27.9219 85.0733 28.0223 85.4131 28.1494C85.5166 28.1886 85.6124 28.2317 85.7114 28.2808C85.9044 28.3663 86.1649 28.4563 86.3415 28.5576C86.4806 28.637 86.3118 28.5005 86.2874 28.4799C86.4256 28.5437 86.5874 28.621 86.7085 28.7103C86.829 28.8005 86.6082 28.5747 86.5876 28.5537C86.6091 28.5702 86.9041 28.7372 86.9898 28.7202C87.2158 28.6756 86.1308 27.93 86.0321 27.8438ZM84.8555 29.7209C84.8737 29.6087 84.9521 29.2537 84.9779 29.4424C84.9774 29.4282 84.9814 29.2753 84.898 29.3604C84.8881 29.3698 84.7639 29.358 84.7278 29.3462C84.6477 29.3203 84.6061 29.2459 84.5757 29.091C84.4878 28.8997 84.3433 29.1099 84.3152 29.2237C84.309 29.249 84.2757 29.4192 84.2493 29.4262C84.2278 29.431 84.2696 29.4608 84.2696 29.4608C84.2575 29.4797 84.2379 29.5021 84.2138 29.4891C84.189 29.4702 84.2566 29.5576 84.2568 29.5571C84.2568 29.5571 84.2089 29.5576 84.2164 29.6216C84.2405 29.785 84.7566 30.1325 84.8555 29.7209ZM73.8445 19.1514C74.2082 19.2844 74.519 19.3905 74.8719 19.5608C75.2009 19.7042 75.5204 19.8972 75.8364 20.0663C76.1666 20.2635 76.4986 20.4518 76.8356 20.6371C76.8982 20.6747 76.9424 20.7131 76.9882 20.7698C77.0319 20.8264 77.0581 20.8764 77.0808 20.9442C77.1016 21.0139 77.1082 21.0675 77.1051 21.1402C77.0997 21.2141 77.086 21.2704 77.0555 21.338C76.7133 22.1518 76.4691 22.8676 76.0041 23.6328C75.9028 23.7913 75.7988 23.944 75.6902 24.0975C75.5695 24.248 75.4736 24.4088 75.3426 24.5574C75.2164 24.7003 75.0941 24.8483 74.9663 24.9895C74.7243 25.2569 74.4579 25.5527 74.3062 25.8831C74.2935 25.9173 74.2597 26.0094 74.2803 26.0463C74.1766 26.1346 74.2555 25.8639 74.2571 25.8592C74.2727 25.7659 74.5176 25.3681 74.5736 25.2803C74.6506 25.1591 74.7361 25.0295 74.8031 24.9029C74.9023 24.7156 74.9137 24.7331 75.1005 24.3399C75.2098 24.1094 74.9678 24.3517 74.9243 24.4415C74.819 24.6547 75.0473 24.1817 75.0521 24.1729C75.1298 24.0381 75.1983 23.9736 75.2653 23.8662C75.3121 23.7849 75.3404 23.6708 75.3652 23.5811C75.3903 23.4923 75.4214 23.412 75.4581 23.3272C75.5603 23.1003 75.7559 22.6111 75.8371 22.0495C75.8584 21.8384 75.9828 21.5103 76.0929 21.243C75.8541 21.085 75.6274 20.9215 75.3929 20.7425C75.1168 20.5323 74.8348 20.331 74.5594 20.1205C74.549 20.1111 74.537 20.1039 74.5259 20.0952C74.2408 19.8809 73.986 19.7048 73.6783 19.5251C73.563 19.4592 73.4523 19.389 73.3382 19.3217C73.1268 19.1929 73.4334 19.3359 73.4773 19.3555C73.2763 19.2294 73.0888 19.0787 72.8899 18.959C72.7041 18.8485 73.1301 19.0405 73.1462 19.0473C73.0144 18.9604 72.7574 18.774 72.6769 18.6472C72.572 18.4238 73.7793 19.1252 73.8445 19.1514ZM76.0019 21.8568C75.7944 22.3487 75.591 22.7857 75.3171 23.2484C75.2179 23.4097 75.1163 23.5691 75.0162 23.7297C74.9328 23.8537 74.8565 23.9949 74.7772 24.134C74.8929 23.9805 75.0074 23.8309 75.0644 23.7572C75.1033 23.7034 75.3976 23.3356 75.4295 23.3111C75.6118 23.0806 75.8638 22.746 75.9892 22.4796C76.0582 22.3023 76.1304 22.0294 76.0019 21.8568ZM74.7772 24.134C74.691 24.2854 74.6007 24.4346 74.4933 24.5562C74.331 24.735 74.5564 24.4273 74.7772 24.134ZM75.852 22.3118L75.7041 22.8409C75.7492 22.7424 75.8869 22.4278 75.852 22.3118ZM73.5181 20.6611C73.9435 20.842 74.3112 21.0987 74.7198 21.3074C74.7831 21.3445 74.8268 21.3816 74.8735 21.4383C74.9175 21.4941 74.9441 21.5441 74.967 21.6114C74.9883 21.6809 74.9954 21.7344 74.9926 21.8069C74.9878 21.8813 74.9739 21.9364 74.9441 22.0047C74.8006 22.3667 74.69 22.7329 74.5427 23.0943C74.3686 23.4681 74.1038 23.9162 73.7456 24.1441C73.5956 24.2395 73.1748 24.5208 73.0803 24.6684C73.0439 24.7123 72.8668 24.9282 72.9296 24.9983C72.756 25.0366 72.9993 24.6462 73.0094 24.6294C73.0404 24.5813 73.0723 24.5357 73.1065 24.4896C73.298 24.2334 73.337 24.1727 73.5181 23.9224C73.6048 23.7906 73.4057 23.8824 73.3623 23.9485C73.2791 24.0689 73.4579 23.8009 73.4674 23.7891C73.6128 23.6082 73.572 23.6627 73.6936 23.4306C74.1442 22.5712 73.8814 22.2063 73.9995 21.899C73.7279 21.6921 73.4905 21.4676 73.2267 21.2333C73.2267 21.2333 73.2142 21.2215 73.209 21.2168C73.0186 21.0562 72.7038 20.7668 72.484 20.6568C72.346 20.5842 72.5482 20.6498 72.5763 20.6592C72.4528 20.5777 72.3026 20.4863 72.1649 20.4355C72.026 20.3857 72.3347 20.4449 72.359 20.4496C72.3382 20.4425 72.0425 20.2943 72.0126 20.2105C71.9275 19.9752 73.4015 20.6167 73.5181 20.6611ZM74.9911 17.7734C75.5584 18.0362 76.104 18.2526 76.6592 18.5516C77.2126 18.8475 77.691 19.0305 78.225 19.3923C78.5904 19.6386 78.9524 19.8382 79.3374 20.0493C79.4052 20.0895 79.4505 20.1292 79.4994 20.1909C79.5445 20.2509 79.5707 20.3044 79.5925 20.3762C79.6118 20.4487 79.617 20.5081 79.6102 20.5829C79.601 20.6609 79.5825 20.7194 79.5462 20.7888C79.1596 21.5287 78.7744 22.2689 78.3797 23.0043C78.2097 23.3225 78.0592 23.6377 77.9036 23.9625C77.6585 24.4452 77.4006 24.774 77.0213 25.1518C76.9211 25.2501 76.7844 25.383 76.7008 25.4938C76.5742 25.6489 75.5046 26.988 75.5877 27.2254C75.3407 27.3888 75.9221 26.3721 76.0404 26.1674C76.0834 26.0946 76.6205 25.2102 76.3817 25.4821C76.3477 25.5208 76.3579 25.5056 76.3749 25.4829C76.4202 25.4232 76.4611 25.3686 76.4663 25.3613C76.5851 25.1969 76.7197 25.0402 76.8328 24.8725C77.1112 24.4356 76.4441 25.2491 76.6899 24.8819C76.7598 24.7763 76.8328 24.6672 76.8375 24.6609C77.0926 24.321 77.1842 24.3251 77.3084 23.8877C77.3219 23.84 77.3377 23.7733 77.355 23.7287C77.5852 23.0008 77.8764 22.4784 78.0987 21.7314C78.1974 21.3861 78.3901 21.0049 78.5746 20.6589C78.281 20.4782 78.0073 20.294 77.7227 20.0711C77.2624 19.7083 76.786 19.459 76.3139 19.1239C76.2537 19.075 76.1791 19.0258 76.1153 18.9797C75.6857 18.6692 75.2396 18.4136 74.805 18.12C74.704 18.0518 74.5866 17.9825 74.4796 17.922C74.1825 17.7489 74.6059 17.9533 74.6593 17.9784C74.3792 17.8017 74.0828 17.61 73.7914 17.4563C73.5394 17.3245 74.122 17.5722 74.1624 17.589C73.9633 17.4752 73.5585 17.2351 73.4156 17.0764C73.2423 16.7956 74.9255 17.7415 74.9911 17.7734ZM78.3138 21.4633C78.238 21.9299 78.2713 22.2736 77.9638 22.6133C77.7829 22.9508 77.7836 23.2141 77.624 23.5618C77.4516 23.8945 77.3073 24.2317 77.1046 24.496C76.8732 24.798 77.0475 24.583 77.1795 24.4337C77.3895 24.1963 77.5149 23.8555 77.691 23.5726C77.8887 23.2554 77.8242 23.0414 78.0333 22.7276C78.1228 22.5932 78.1686 22.4602 78.2416 22.3162C78.3419 22.1178 78.4074 21.6947 78.3138 21.4633ZM86.9794 24.9281C86.9036 24.8974 86.594 24.7624 86.5033 24.7208C86.492 24.7161 86.4754 24.709 86.4653 24.7043C86.0614 24.5052 86.0808 24.4474 85.6073 24.2795C85.3609 24.185 84.2734 23.5764 84.903 24.0038C85.3609 24.322 84.5466 23.8505 84.3865 23.7839C84.0762 23.6623 83.7335 23.5225 83.4078 23.4564C83.3062 23.4351 83.1858 23.4078 83.0868 23.3775C82.8644 23.3154 82.6691 23.2485 82.4702 23.1682C82.2565 23.523 82.0338 23.8501 81.7945 24.1911C81.7267 24.2877 81.6618 24.3856 81.5992 24.4853C81.3477 24.8858 81.0966 25.1795 80.808 25.5446C80.7017 25.6915 80.6113 25.8313 80.5178 25.9865C80.3628 26.2474 80.2218 26.511 80.0589 26.7677C79.8298 27.1095 79.574 27.3819 79.3428 27.7079C79.1357 28.0024 79.3912 27.5782 79.4219 27.5284C79.2075 27.7993 78.9966 28.0801 78.8785 28.4077C78.8721 28.4266 78.865 28.4549 78.857 28.4736C78.8447 28.5026 78.8438 28.5043 78.8497 28.4713C78.8717 28.3227 78.9281 28.163 78.9853 28.0237C78.9064 28.163 78.8395 28.2967 78.7779 28.4447C78.7259 28.5555 78.6501 28.7761 78.5483 28.8505C78.3568 28.9899 78.4952 28.716 78.6135 28.3839C78.8516 27.6874 79.297 27.1978 79.6163 26.5403C79.8029 26.0656 79.9784 25.6112 80.2164 25.1589C80.4464 24.7947 80.6739 24.4615 80.877 24.0794C80.9408 23.9592 81.0057 23.8439 81.0754 23.7272C81.299 23.3623 81.5172 23.0011 81.7263 22.6272C81.7652 22.5625 81.8009 22.4916 81.8384 22.4254C81.8774 22.3605 81.9154 22.3165 81.9742 22.2686C82.0316 22.2242 82.0841 22.1966 82.1533 22.1742C82.2243 22.1529 82.2798 22.1466 82.354 22.1501C82.4293 22.1572 82.487 22.1714 82.5557 22.2026C82.8384 22.3301 83.1043 22.4363 83.3958 22.5416C83.8416 22.7095 84.241 22.9146 84.6737 23.1057C85.3427 23.3844 85.9405 23.8611 86.572 24.2156C87.2035 24.5701 86.9794 24.9281 86.9794 24.9281ZM83.1211 23.2699C83.1211 23.2699 83.1256 23.2715 83.1275 23.2722C83.5452 23.4304 83.9578 23.6503 84.3678 23.834C85.0409 24.1177 85.6838 24.6202 86.3672 24.9417L86.482 24.9962C86.4258 24.9598 86.3859 24.9343 86.3732 24.9273C85.6791 24.5295 85.1314 24.0262 84.4486 23.6384C84.2958 23.5603 84.1468 23.4682 83.9911 23.396C83.72 23.2701 83.4217 23.1661 83.1282 23.2655C83.1284 23.2674 83.1227 23.2675 83.1211 23.2699ZM86.482 24.9962C86.6988 25.0998 86.927 25.2185 87.1107 25.3637C87.4045 25.6001 86.7546 25.1723 86.482 24.9962ZM83.7753 23.5086C83.981 23.5971 84.1843 23.6909 84.391 23.779C84.6697 23.8914 85.0357 24.1091 85.2745 24.294C85.7298 24.635 84.8177 23.9008 84.5584 23.7698C84.5124 23.7485 84.4656 23.7275 84.4184 23.7086C84.3029 23.6633 83.9021 23.5001 83.7753 23.5086ZM76.7216 28.3167C76.826 28.1264 76.9313 27.9368 77.0366 27.7469C77.0456 27.7233 77.0539 27.7037 77.0586 27.6926C76.9447 27.8995 76.8337 28.1089 76.7216 28.3167Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M182.19 13.4077C182.123 13.4462 182.057 13.4659 181.972 13.4742C181.866 13.4789 181.786 13.4624 181.691 13.4168C181.646 13.4074 181.201 13.1449 181.143 13.104C180.884 12.9226 180.661 12.7675 180.435 12.5436C180.36 12.4694 180.284 12.3962 180.206 12.3261C180.106 12.2365 179.909 12.0743 179.789 12.0138C179.671 11.9505 179.845 12.0044 179.872 12.012C179.774 11.9432 179.627 11.8543 179.518 11.8125C179.399 11.7678 179.663 11.8148 179.69 11.8195C179.669 11.8124 179.416 11.6769 179.393 11.5916C179.34 11.3947 180.345 11.8335 180.434 11.8661C180.812 12.0099 181.16 12.192 181.53 12.3485C181.644 12.3979 181.761 12.4449 181.876 12.494C181.893 12.4822 181.926 12.5153 181.969 12.573C181.977 12.5009 181.99 12.4558 182.01 12.4587C182.086 12.3588 182.164 12.26 182.239 12.1609C182.483 11.8411 182.695 11.5101 182.952 11.1984C183.013 11.1259 183.668 10.2463 183.72 10.4438C183.742 10.5293 183.589 10.7723 183.575 10.7893C183.596 10.7728 183.802 10.6004 183.721 10.6979C183.647 10.7884 183.563 10.9388 183.513 11.0467C183.532 11.0279 183.657 10.8938 183.585 11.0074C183.511 11.1198 183.421 11.3577 183.378 11.4848C183.345 11.5847 183.315 11.6861 183.287 11.7877C183.202 12.094 183.085 12.3394 182.95 12.6252C182.92 12.6894 182.663 13.1388 182.629 13.1686C182.569 13.2562 182.508 13.31 182.413 13.3577C182.336 13.3924 182.268 13.4077 182.19 13.4077ZM192.195 28.4628C193.742 26.7512 194.552 25.1697 195.308 23.0007C195.355 22.8583 195.401 22.7158 195.446 22.5722L195.447 22.5674C196.074 20.6377 196.337 19.0496 195.922 17.0424C195.43 15.1486 194.6 13.9841 193.123 12.7236C193.123 12.7229 193.14 12.7401 193.141 12.7377C190.808 10.6864 188.535 8.97218 185.452 8.28445C181.95 7.77999 178.525 9.25914 176.102 11.7467C174.555 13.458 173.744 15.0398 172.989 17.2087C172.941 17.3512 172.896 17.4938 172.851 17.6372L172.85 17.6419C172.223 19.5717 171.96 21.1599 172.374 23.1671C172.867 25.0607 173.697 26.2252 175.173 27.4859C175.174 27.4866 175.156 27.4694 175.156 27.4717C177.489 29.5231 179.761 31.2373 182.844 31.925C186.316 32.425 189.78 30.9411 192.195 28.4628ZM183.035 30.9876C181.487 30.6542 180.326 30.0814 178.983 29.2564C177.812 28.5144 176.813 27.7131 175.769 26.7974C175.765 26.7927 175.761 26.7903 175.756 26.7856C174.427 25.6761 173.677 24.6565 173.212 22.97C172.806 21.1338 173.053 19.6571 173.606 17.8811C173.606 17.8808 173.61 17.8693 173.61 17.8669C174.301 15.6375 175.071 13.9922 176.616 12.2228C180.467 8.15409 184.599 8.05892 189.314 10.9532C190.485 11.6955 191.484 12.4968 192.527 13.4122C192.531 13.4169 192.536 13.4193 192.54 13.424C193.87 14.5336 194.62 15.5531 195.084 17.2396C195.49 19.0758 195.243 20.5525 194.69 22.3287L194.686 22.3428C193.995 24.5723 193.225 26.2174 191.68 27.9871C188.987 30.8327 186.411 31.4862 183.035 30.9876ZM182.664 15.1914C182.696 15.2056 182.7 15.2244 182.68 15.2541C182.648 15.2376 182.642 15.2205 182.664 15.1914ZM182.211 15.559L182.226 15.5685C182.302 15.6235 182.402 15.6757 182.488 15.7128C182.6 15.748 182.691 15.7484 182.802 15.7147C182.916 15.6887 182.995 15.6432 183.075 15.557C183.132 15.4823 183.192 15.3873 183.231 15.3018L183.238 15.2854C183.387 15.0811 183.577 14.8104 183.607 14.7653C183.933 14.3024 184.114 13.9661 184.341 13.4505C184.417 13.2689 184.497 13.0908 184.574 12.9101C184.738 12.5297 184.937 12.05 185.135 11.6882C185.145 11.6693 185.156 11.6499 185.165 11.6301C185.183 11.5933 185.172 11.6065 185.156 11.623C185.144 11.6349 185.038 11.7781 185.038 11.7781C185.065 11.7208 185.094 11.6629 185.122 11.6057C185.195 11.4581 185.268 11.2945 185.365 11.1613C185.491 10.9797 185.178 11.3443 185.171 11.3516C185.248 11.2194 185.408 10.9391 185.426 10.7984C185.423 10.5131 184.869 11.444 184.857 11.4629C184.474 12.0243 184.052 12.5155 183.686 13.0965C183.426 13.5195 183.19 13.8376 182.882 14.2252C182.76 14.3794 182.644 14.5338 182.531 14.6911C182.356 14.6103 182.178 14.5337 181.996 14.4604C181.536 14.2762 181.174 14.1168 180.738 13.8782C180.132 13.5554 179.522 13.3378 178.912 13.04C178.892 13.0282 177.949 12.4955 178.088 12.7447C178.173 12.8583 178.451 13.0221 178.584 13.0991C178.574 13.0968 178.121 12.9348 178.321 13.0295C178.471 13.0975 178.616 13.2034 178.752 13.2953C178.805 13.3312 178.859 13.3669 178.911 13.4036C178.911 13.4036 178.748 13.3315 178.732 13.327C178.709 13.3199 178.693 13.3152 178.726 13.3388C178.744 13.3506 178.763 13.3627 178.782 13.374C179.133 13.5901 179.544 13.908 179.874 14.1576C180.031 14.2764 180.189 14.391 180.345 14.5112C180.797 14.8463 181.121 15.0491 181.634 15.2893C181.682 15.3138 181.981 15.4551 182.211 15.559ZM183.368 17.8466C183.424 17.8464 183.479 17.8348 183.54 17.8145C183.651 17.7719 183.724 17.7141 183.792 17.6158C183.811 17.6017 184.02 17.2968 184.047 17.2562C184.069 17.2219 184.094 17.1804 184.118 17.1481C184.326 16.8266 184.524 16.5054 184.718 16.1748C184.916 15.8342 185.092 15.4865 185.28 15.1417C185.369 14.9681 185.451 14.7945 185.528 14.6153C185.572 14.4875 185.649 14.3347 185.703 14.2053C185.887 13.7637 186.076 13.3178 186.266 12.879C186.307 12.7848 186.35 12.6919 186.399 12.6017C186.542 12.3327 186.315 12.6843 186.288 12.7271C186.407 12.4654 186.553 12.179 186.713 11.9419C186.877 11.701 186.484 12.1885 186.476 12.1986C186.579 12.0239 186.795 11.6638 186.834 11.4822C186.841 11.1284 185.945 12.6603 185.922 12.6981C185.595 13.2337 185.237 13.7457 184.91 14.2826C184.822 14.4368 184.718 14.5944 184.62 14.7427C184.405 15.0662 184.187 15.3877 183.974 15.7119C183.783 16.0015 183.581 16.2848 183.391 16.5748C183.297 16.6681 183.201 16.7598 183.105 16.8536C182.974 16.82 182.846 16.7879 182.717 16.7534C182.408 16.5959 182.093 16.4497 181.784 16.2928C181.438 16.1169 181.089 15.9459 180.742 15.7709C180.584 15.6911 180.415 15.6058 180.262 15.5156C179.712 15.2114 179.148 14.9438 178.598 14.6408C178.559 14.6195 177.022 13.7333 177.203 14.0372C177.327 14.1754 177.693 14.3808 177.869 14.4819C177.857 14.4772 177.274 14.2483 177.536 14.3761C177.793 14.5027 178.062 14.6791 178.295 14.8475C178.25 14.8236 177.878 14.6311 178.136 14.7939C178.223 14.8479 178.306 14.9072 178.388 14.9688C178.772 15.2553 179.156 15.5491 179.535 15.8415C179.646 15.9272 179.789 16.0219 179.89 16.1109C180.046 16.2281 180.203 16.3381 180.367 16.4446C180.701 16.6513 181.026 16.8661 181.367 17.0637C181.699 17.255 182.03 17.4357 182.37 17.6116C182.407 17.6282 182.449 17.6517 182.486 17.6702C182.529 17.6914 182.863 17.8537 182.885 17.8563C182.993 17.908 183.085 17.9222 183.203 17.904C183.265 17.8922 183.32 17.874 183.368 17.8466ZM183.312 20.2893C183.167 20.5168 183.022 20.7446 182.869 20.9808C182.677 21.2788 182.462 21.5649 182.261 21.8561C182.163 21.9774 182.076 22.1007 181.993 22.2556L181.985 22.2722L181.967 22.3013L181.966 22.3107C181.856 22.5332 181.761 22.7356 181.62 22.9481C181.366 23.3215 181.276 23.5311 181.098 23.9354C180.947 24.2757 180.728 24.5773 180.565 24.919C180.434 25.193 180.346 25.4846 180.195 25.7548C179.909 26.2673 179.608 26.784 179.33 27.2986L179.08 27.7469C179.047 27.8319 179.006 27.963 179.119 27.8849C179.22 27.8027 179.41 27.5105 179.483 27.394L179.734 26.9992C179.143 28.2611 179.952 26.7864 180.208 26.4151C180.175 26.4761 179.904 26.9662 180.126 26.6204C180.266 26.3977 180.422 26.1903 180.569 25.973C180.748 25.7062 180.902 25.4368 181.065 25.1601C181.156 25.0054 181.285 24.8533 181.398 24.7131C181.525 24.5527 181.624 24.4143 181.726 24.2339C181.911 23.8931 182.02 23.7199 182.26 23.4117C182.456 23.1571 182.583 22.9323 182.742 22.6567C182.846 22.4923 182.984 22.3544 183.117 22.2138C183.423 21.887 183.593 21.6908 183.831 21.3058C183.937 21.132 184.045 20.9555 184.145 20.7781C184.321 20.8823 184.502 20.9823 184.68 21.0805C185.078 21.2966 185.322 21.3833 185.75 21.5153C185.935 21.5717 186.124 21.6228 186.296 21.7139C186.57 21.8748 186.792 22.007 187.089 22.1308C187.45 22.2796 187.63 22.3761 187.96 22.5801C188.137 22.6866 188.292 22.7577 188.482 22.8335C188.65 22.8996 188.837 22.9678 188.993 23.0568C189.272 23.2167 189.539 23.3744 189.827 23.5171C190.062 23.6335 190.301 23.7357 190.532 23.8597C190.896 24.0503 190.418 23.7588 190.359 23.7225C190.713 23.892 191.095 24.0763 191.429 24.2785C191.432 24.2801 191.434 24.2808 191.437 24.2832C191.565 24.364 191.529 24.3366 191.445 24.2691C191.416 24.2455 191.071 24.003 191.061 23.9955L191.474 24.2143C191.595 24.2793 191.905 24.4391 192.034 24.4599C192.17 24.4717 192.07 24.3781 191.999 24.3207C191.98 24.3042 191.963 24.2921 191.954 24.2848C192.155 24.4081 192.355 24.5352 192.555 24.6599C192.371 24.5463 192.185 24.4333 191.999 24.3207L191.56 24.0553C191.063 23.7464 190.546 23.4467 190.043 23.1434C189.778 22.9835 189.558 22.7738 189.308 22.6007C188.996 22.3849 188.657 22.2313 188.357 22.0107C188.002 21.7476 187.82 21.6105 187.414 21.4121C187.186 21.2975 187.004 21.1686 186.798 21.0299L186.792 21.0229L186.762 21.0063L186.747 20.9969C186.599 20.9034 186.462 20.8395 186.317 20.7822C185.997 20.6291 185.669 20.4872 185.354 20.3238C185.105 20.1941 184.866 20.0683 184.627 19.9426C184.949 19.4243 185.214 18.9007 185.512 18.3648C185.591 18.234 185.681 18.0726 185.751 17.9365C185.954 17.566 186.109 17.2101 186.283 16.8275C186.359 16.6615 186.44 16.5071 186.533 16.3493C186.547 16.3184 186.585 16.2614 186.604 16.2288C186.84 15.8283 187.058 15.4424 187.268 15.0272C187.27 15.0225 187.295 14.9717 187.295 14.9714C187.291 14.9287 187.759 14.1196 187.831 14.0062C188.067 13.6286 187.715 14.1246 187.671 14.1848C187.843 13.8929 188.016 13.6019 188.186 13.3093C188.238 13.2231 188.288 13.1375 188.343 13.0537C188.548 12.742 188.159 13.2707 188.147 13.2868C188.14 13.2962 188.023 13.4528 188.023 13.4528C188.059 13.3959 188.094 13.334 188.128 13.2757C188.236 13.0898 188.526 12.5998 188.569 12.4097C188.628 12.0426 187.958 13.1768 187.957 13.178C187.618 13.7072 187.244 14.2098 186.899 14.7358C186.896 14.7405 186.866 14.7877 186.865 14.7879C186.592 15.2062 186.303 15.5781 186.003 15.9759C185.875 16.1473 185.768 16.3094 185.66 16.4941C185.464 16.8417 185.28 17.182 185.065 17.5192C184.989 17.6472 184.88 17.8058 184.799 17.9309C184.716 18.0589 184.635 18.1893 184.554 18.3213C184.397 18.5539 184.242 18.787 184.098 19.0312C184.001 19.1939 183.906 19.3579 183.812 19.522C183.648 19.4264 183.485 19.331 183.321 19.2375C183.074 19.097 182.823 18.9715 182.572 18.8468C182.437 18.7724 182.301 18.6995 182.166 18.6293C182.034 18.5608 181.861 18.4771 181.731 18.4034C181.377 18.2176 181.048 18.0128 180.706 17.8078C180.52 17.7011 180.347 17.6137 180.151 17.5282C179.693 17.3314 179.258 17.1516 178.813 16.9239C178.813 16.9237 178.763 16.898 178.758 16.8954C178.197 16.6096 177.624 16.3582 177.067 16.0665C177.066 16.0658 175.922 15.4132 176.155 15.7027C176.286 15.8465 176.781 16.1286 176.967 16.2363C177.025 16.2703 177.087 16.3065 177.146 16.338C177.146 16.338 176.967 16.26 176.956 16.2555C176.937 16.2484 176.338 15.9806 176.67 16.1501C176.76 16.1957 176.846 16.2448 176.933 16.2944C177.226 16.464 177.52 16.631 177.814 16.7994C177.746 16.7689 177.195 16.5125 177.587 16.7238C177.706 16.7867 178.513 17.2572 178.531 17.2964C178.531 17.2966 178.579 17.3289 178.582 17.3313C178.97 17.588 179.351 17.815 179.754 18.046C179.787 18.0649 179.849 18.0951 179.876 18.1151C180.035 18.2061 180.182 18.3003 180.33 18.4063C180.671 18.6527 180.982 18.8851 181.342 19.1062C181.47 19.1895 181.628 19.2852 181.762 19.3596C182.286 19.6772 182.775 19.9988 183.312 20.2893ZM190.511 15.2723C190.262 15.568 190.044 15.8142 189.822 16.137C189.607 16.4244 189.426 16.7508 189.235 17.0541C189.046 17.3892 188.851 17.7172 188.65 18.0452C188.615 18.109 188.595 18.1638 188.583 18.2361C188.573 18.3067 188.575 18.3634 188.589 18.4333C188.606 18.5041 188.627 18.5541 188.666 18.6158C188.707 18.6772 188.747 18.719 188.807 18.7629C189.507 19.3 190.074 19.8008 190.857 20.2348C191.024 20.3222 191.19 20.4033 191.36 20.4829C191.539 20.5535 191.702 20.6459 191.89 20.7099C192.07 20.7716 192.25 20.8396 192.431 20.8989C192.774 21.0111 193.152 21.1357 193.447 21.3478C193.475 21.3714 193.55 21.4342 193.55 21.4765C193.684 21.5018 193.482 21.3057 193.478 21.3027C193.418 21.2292 193.008 21.0051 192.916 20.9564C192.789 20.8896 192.651 20.8193 192.53 20.7425C192.35 20.6292 192.349 20.6502 191.992 20.401C191.783 20.2551 192.113 20.3444 192.196 20.402C192.393 20.535 191.96 20.2371 191.952 20.2319C191.817 20.1535 191.726 20.1314 191.614 20.0714C191.534 20.0239 191.452 19.9391 191.386 19.8732C191.321 19.8082 191.254 19.7541 191.18 19.6986C191.15 19.6773 191.115 19.6512 191.077 19.6215C191.119 19.638 191.159 19.6551 191.197 19.6705C191.236 19.6752 191.674 19.8496 191.735 19.8772C191.821 19.9129 191.995 19.9858 192.171 20.0619C192.508 20.2071 192.856 20.3627 192.627 20.2879C192.473 20.2354 192.321 20.1507 192.171 20.0619C192.033 19.9804 191.897 19.8956 191.763 19.8292C191.596 19.7395 191.429 19.6511 191.263 19.5602C190.962 19.3885 190.691 19.2119 190.424 19.0208C190.354 18.9443 190.284 18.8629 190.217 18.7769C190.094 18.6041 189.824 18.3808 189.595 18.2032C189.725 17.9477 189.84 17.6931 189.955 17.4215C190.091 17.1022 190.236 16.7877 190.371 16.4681C190.376 16.4563 190.382 16.4423 190.387 16.4298C190.529 16.1022 190.663 15.8229 190.841 15.5144C190.909 15.3999 190.97 15.2841 191.036 15.1694C191.155 14.9525 190.961 15.2294 190.932 15.2674C191.044 15.0584 191.132 14.8347 191.245 14.6318C191.352 14.4438 191.077 14.8217 191.066 14.8357C191.138 14.6949 191.269 14.4057 191.276 14.2555C191.256 14.0096 190.555 15.2172 190.511 15.2723ZM191.544 16.4216C191.263 16.7895 191.071 17.1948 190.82 17.5788C190.783 17.6423 190.764 17.6962 190.751 17.7685C190.741 17.8389 190.742 17.8953 190.756 17.9652C190.772 18.0361 190.792 18.0861 190.831 18.1477C190.872 18.2098 190.911 18.2509 190.971 18.2953C191.275 18.5386 191.552 18.802 191.859 19.0429C192.196 19.2812 192.648 19.539 193.072 19.5594C193.25 19.5688 193.755 19.6034 193.91 19.6849C193.963 19.7038 194.224 19.805 194.204 19.8971C194.374 19.8442 193.969 19.6257 193.952 19.616C193.901 19.5896 193.851 19.5657 193.798 19.5428C193.505 19.415 193.441 19.3817 193.16 19.2539C193.019 19.1826 193.238 19.1639 193.308 19.1996C193.44 19.2629 193.152 19.1189 193.138 19.1132C192.922 19.0284 192.984 19.0554 192.764 18.9142C191.946 18.391 191.994 17.9437 191.739 17.7352C191.872 17.4211 191.967 17.1086 192.08 16.7741C192.08 16.7741 192.085 16.7576 192.087 16.7505C192.173 16.5167 192.303 16.1093 192.439 15.9048C192.523 15.7735 192.381 15.9313 192.361 15.9535C192.428 15.8215 192.513 15.6677 192.607 15.5552C192.703 15.4431 192.464 15.6474 192.445 15.6632C192.46 15.6467 192.643 15.3713 192.628 15.2837C192.585 15.0371 191.623 16.3252 191.544 16.4216ZM188.833 14.6437C188.47 15.1533 188.103 15.6115 187.77 16.1464C187.436 16.6775 187.111 17.0739 186.826 17.6527C186.631 18.0476 186.416 18.4004 186.186 18.7748C186.147 18.8433 186.127 18.8999 186.115 18.9779C186.106 19.0523 186.109 19.1118 186.126 19.185C186.146 19.2577 186.17 19.3116 186.214 19.3733C186.26 19.4366 186.305 19.478 186.371 19.5203C187.074 19.9714 187.775 20.4233 188.482 20.8663C188.788 21.0586 189.075 21.2577 189.371 21.4627C189.823 21.7605 190.21 21.9182 190.726 22.0583C190.862 22.094 191.047 22.1418 191.174 22.1964C191.361 22.2684 192.954 22.9011 192.999 23.1486C193.295 23.1675 192.286 22.5733 192.082 22.4543C192.009 22.4122 191.104 21.9102 191.446 22.0283C191.494 22.0448 191.478 22.0353 191.452 22.0259C191.383 21.9963 191.321 21.9694 191.312 21.9656C191.128 21.8818 190.933 21.8121 190.752 21.7229C190.293 21.4813 191.276 21.8572 190.88 21.6593C190.767 21.6026 190.65 21.5436 190.643 21.5405C190.253 21.3719 190.175 21.4208 189.85 21.1025C189.815 21.068 189.768 21.0177 189.731 20.9874C189.17 20.4693 188.658 20.16 188.095 19.6215C187.838 19.3707 187.482 19.135 187.15 18.926C187.316 18.6234 187.462 18.3279 187.599 17.9931C187.819 17.4499 188.109 16.9972 188.353 16.4722C188.381 16.3999 188.421 16.3202 188.454 16.2484C188.673 15.7659 188.934 15.3226 189.166 14.8527C189.22 14.7431 189.287 14.6246 189.35 14.5193C189.522 14.2217 189.256 14.6089 189.222 14.6573C189.378 14.365 189.54 14.0513 189.717 13.7736C189.871 13.5341 189.487 14.0381 189.461 14.0725C189.577 13.8749 189.81 13.4662 189.855 13.2574C189.867 12.9277 188.874 14.5834 188.833 14.6437ZM189.067 26.4699C188.716 26.2167 188.376 25.9797 188.007 25.7518C187.589 25.4738 187.151 25.1948 186.708 24.9595C186.548 24.8745 186.381 24.7928 186.218 24.7109C186.102 24.6526 185.993 24.5811 185.88 24.5206C185.75 24.4543 185.638 24.4376 185.495 24.4653C185.354 24.5005 185.259 24.5621 185.169 24.6769C185.126 24.7021 184.328 25.7931 184.231 25.9279C184.087 26.1315 183.952 26.3069 183.786 26.494C183.424 26.9068 183.209 27.2727 183.053 27.7961C183.02 27.9137 182.947 28.1671 182.89 28.2674C182.835 28.4002 182.375 29.5595 182.169 29.556C182.167 29.8077 182.604 29.1162 182.747 28.8782C182.838 28.7251 182.949 28.5277 183.061 28.3895C183.132 28.3026 183.129 28.3348 183.098 28.4165C183.093 28.4259 183.055 28.5529 183.052 28.5612L183.103 28.4195C183.164 28.2499 183.275 28.0246 183.37 27.8751C183.512 27.6507 183.428 27.9911 183.376 28.0873C183.243 28.3076 183.531 27.8324 183.538 27.8191C183.696 27.5168 183.622 27.4871 183.91 27.2512C184.023 27.1563 184.13 27.0526 184.239 26.9515C183.981 27.3294 183.862 27.6599 183.734 27.9946C183.651 28.2092 183.564 28.4256 183.434 28.6571C183.422 28.6783 183.423 28.6666 183.43 28.6548C183.443 28.6274 183.457 28.5912 183.469 28.5627C183.557 28.3676 183.642 28.1776 183.734 27.9946C183.902 27.6585 184.091 27.3432 184.352 27.0456C184.549 26.8291 184.705 26.6298 184.873 26.3901C184.917 26.3258 184.962 26.2616 185.007 26.1976C185.073 26.132 185.141 26.0701 185.218 26.0082C185.383 25.8788 185.565 25.6695 185.722 25.4718L185.831 25.5252C185.986 25.5993 186.186 25.6825 186.348 25.742C186.799 25.9078 187.236 26.175 187.687 26.3452C187.756 26.3712 187.824 26.4004 187.893 26.4271C188.215 26.5523 188.528 26.6829 188.84 26.831C188.971 26.8841 189.153 26.9781 189.279 27.0485C189.511 27.1739 189.213 26.9725 189.174 26.9449C189.403 27.0564 189.651 27.1705 189.866 27.3029C190.079 27.4361 189.65 27.1068 189.639 27.0974C189.794 27.1836 190.115 27.3534 190.281 27.3726C190.554 27.3456 189.137 26.5198 189.067 26.4699ZM188.075 27.8438C187.573 27.4222 187.361 27.293 186.776 27.0049C186.629 26.9281 186.495 26.845 186.354 26.7581C186.226 26.6893 186.114 26.6711 185.971 26.6957C185.829 26.728 185.732 26.7885 185.64 26.9009C185.423 27.1647 185.209 27.4195 184.982 27.6753C184.677 28.0225 184.472 28.2919 184.385 28.7522C184.376 28.8084 184.351 28.9624 184.332 29.0082C184.312 29.1117 184.11 29.9575 183.896 29.907C183.937 30.1202 184.302 29.5239 184.303 29.5222C184.52 29.1545 184.504 29.3512 184.563 29.1495C184.588 29.0704 184.642 28.9304 184.685 28.86C184.769 28.7219 184.769 28.944 184.722 29.0208C184.637 29.1681 184.804 28.8961 184.828 28.8486C184.92 28.6599 184.835 28.6465 185.04 28.5324C185.286 28.3786 185.403 27.4756 186.427 27.809C186.775 27.9219 187.116 28.0223 187.456 28.1494C187.56 28.1886 187.655 28.2317 187.755 28.2808C187.947 28.3663 188.208 28.4563 188.385 28.5576C188.524 28.637 188.355 28.5005 188.33 28.4799C188.469 28.5437 188.63 28.621 188.752 28.7103C188.872 28.8005 188.651 28.5747 188.631 28.5537C188.652 28.5702 188.947 28.7372 189.033 28.7202C189.259 28.6756 188.174 27.93 188.075 27.8438ZM186.898 29.7209C186.917 29.6087 186.995 29.2537 187.021 29.4424C187.021 29.4282 187.025 29.2753 186.941 29.3604C186.931 29.3698 186.807 29.358 186.771 29.3462C186.691 29.3203 186.649 29.2459 186.619 29.091C186.531 28.8997 186.386 29.1099 186.358 29.2237C186.352 29.249 186.319 29.4192 186.292 29.4262C186.271 29.431 186.313 29.4608 186.313 29.4608C186.301 29.4797 186.281 29.5021 186.257 29.4891C186.232 29.4702 186.3 29.5576 186.3 29.5571C186.3 29.5571 186.252 29.5576 186.26 29.6216C186.284 29.785 186.8 30.1325 186.898 29.7209ZM175.888 19.1514C176.251 19.2844 176.562 19.3905 176.915 19.5608C177.244 19.7042 177.564 19.8972 177.879 20.0663C178.21 20.2635 178.542 20.4518 178.879 20.6371C178.941 20.6747 178.985 20.7131 179.031 20.7698C179.075 20.8264 179.101 20.8764 179.124 20.9442C179.145 21.0139 179.151 21.0675 179.148 21.1402C179.143 21.2141 179.129 21.2704 179.099 21.338C178.756 22.1518 178.512 22.8676 178.047 23.6328C177.946 23.7913 177.842 23.944 177.733 24.0975C177.613 24.248 177.517 24.4088 177.386 24.5574C177.259 24.7003 177.137 24.8483 177.009 24.9895C176.767 25.2569 176.501 25.5527 176.349 25.8831C176.337 25.9173 176.303 26.0094 176.323 26.0463C176.22 26.1346 176.299 25.8639 176.3 25.8592C176.316 25.7659 176.561 25.3681 176.617 25.2803C176.694 25.1591 176.779 25.0295 176.846 24.9029C176.946 24.7156 176.957 24.7331 177.143 24.3399C177.253 24.1094 177.011 24.3517 176.968 24.4415C176.862 24.6547 177.091 24.1817 177.095 24.1729C177.173 24.0381 177.241 23.9736 177.309 23.8662C177.355 23.7849 177.383 23.6708 177.408 23.5811C177.433 23.4923 177.464 23.412 177.501 23.3272C177.604 23.1003 177.799 22.6111 177.88 22.0495C177.902 21.8384 178.026 21.5103 178.136 21.243C177.897 21.085 177.67 20.9215 177.436 20.7425C177.16 20.5323 176.878 20.331 176.602 20.1205C176.592 20.1111 176.58 20.1039 176.569 20.0952C176.284 19.8809 176.029 19.7048 175.721 19.5251C175.606 19.4592 175.495 19.389 175.381 19.3217C175.17 19.1929 175.477 19.3359 175.52 19.3555C175.319 19.2294 175.132 19.0787 174.933 18.959C174.747 18.8485 175.173 19.0405 175.189 19.0473C175.057 18.9604 174.8 18.774 174.72 18.6472C174.615 18.4238 175.823 19.1252 175.888 19.1514ZM178.045 21.8568C177.838 22.3487 177.634 22.7857 177.36 23.2484C177.261 23.4097 177.16 23.5691 177.059 23.7297C176.976 23.8537 176.9 23.9949 176.82 24.134C176.936 23.9805 177.05 23.8309 177.108 23.7572C177.146 23.7034 177.441 23.3356 177.472 23.3111C177.655 23.0806 177.907 22.746 178.032 22.4796C178.101 22.3023 178.173 22.0294 178.045 21.8568ZM176.82 24.134C176.734 24.2854 176.644 24.4346 176.537 24.5562C176.374 24.735 176.6 24.4273 176.82 24.134ZM177.895 22.3118L177.747 22.8409C177.792 22.7424 177.93 22.4278 177.895 22.3118ZM175.561 20.6611C175.986 20.842 176.354 21.0987 176.763 21.3074C176.826 21.3445 176.87 21.3816 176.916 21.4383C176.961 21.4941 176.987 21.5441 177.01 21.6114C177.031 21.6809 177.039 21.7344 177.036 21.8069C177.031 21.8813 177.017 21.9364 176.987 22.0047C176.844 22.3667 176.733 22.7329 176.586 23.0943C176.412 23.4681 176.147 23.9162 175.789 24.1441C175.639 24.2395 175.218 24.5208 175.123 24.6684C175.087 24.7123 174.91 24.9282 174.973 24.9983C174.799 25.0366 175.042 24.6462 175.052 24.6294C175.084 24.5813 175.115 24.5357 175.15 24.4896C175.341 24.2334 175.38 24.1727 175.561 23.9224C175.648 23.7906 175.449 23.8824 175.405 23.9485C175.322 24.0689 175.501 23.8009 175.51 23.7891C175.656 23.6082 175.615 23.6627 175.737 23.4306C176.187 22.5712 175.925 22.2063 176.042 21.899C175.771 21.6921 175.534 21.4676 175.27 21.2333C175.27 21.2333 175.257 21.2215 175.252 21.2168C175.062 21.0562 174.747 20.7668 174.527 20.6568C174.389 20.5842 174.591 20.6498 174.62 20.6592C174.496 20.5777 174.346 20.4863 174.208 20.4355C174.069 20.3857 174.378 20.4449 174.402 20.4496C174.381 20.4425 174.086 20.2943 174.056 20.2105C173.971 19.9752 175.444 20.6167 175.561 20.6611ZM177.034 17.7734C177.601 18.0362 178.147 18.2526 178.702 18.5516C179.256 18.8475 179.734 19.0305 180.268 19.3923C180.633 19.6386 180.996 19.8382 181.381 20.0493C181.448 20.0895 181.494 20.1292 181.543 20.1909C181.587 20.2509 181.614 20.3044 181.635 20.3762C181.655 20.4487 181.66 20.5081 181.653 20.5829C181.644 20.6609 181.626 20.7194 181.589 20.7888C181.203 21.5287 180.817 22.2689 180.423 23.0043C180.253 23.3225 180.102 23.6377 179.947 23.9625C179.701 24.4452 179.444 24.774 179.064 25.1518C178.964 25.2501 178.828 25.383 178.744 25.4938C178.617 25.6489 177.548 26.988 177.631 27.2254C177.384 27.3888 177.965 26.3721 178.084 26.1674C178.126 26.0946 178.663 25.2102 178.425 25.4821C178.391 25.5208 178.401 25.5056 178.418 25.4829C178.463 25.4232 178.504 25.3686 178.509 25.3613C178.628 25.1969 178.763 25.0402 178.876 24.8725C179.154 24.4356 178.487 25.2491 178.733 24.8819C178.803 24.7763 178.876 24.6672 178.88 24.6609C179.136 24.321 179.227 24.3251 179.352 23.8877C179.365 23.84 179.381 23.7733 179.398 23.7287C179.628 23.0008 179.919 22.4784 180.142 21.7314C180.241 21.3861 180.433 21.0049 180.618 20.6589C180.324 20.4782 180.05 20.294 179.766 20.0711C179.306 19.7083 178.829 19.459 178.357 19.1239C178.297 19.075 178.222 19.0258 178.159 18.9797C177.729 18.6692 177.283 18.4136 176.848 18.12C176.747 18.0518 176.63 17.9825 176.523 17.922C176.226 17.7489 176.649 17.9533 176.703 17.9784C176.422 17.8017 176.126 17.61 175.835 17.4563C175.583 17.3245 176.165 17.5722 176.205 17.589C176.006 17.4752 175.602 17.2351 175.459 17.0764C175.286 16.7956 176.968 17.7415 177.034 17.7734ZM180.357 21.4633C180.281 21.9299 180.315 22.2736 180.007 22.6133C179.826 22.9508 179.827 23.2141 179.667 23.5618C179.495 23.8945 179.35 24.2317 179.148 24.496C178.916 24.798 179.091 24.583 179.223 24.4337C179.432 24.1963 179.558 23.8555 179.734 23.5726C179.932 23.2554 179.867 23.0414 180.076 22.7276C180.166 22.5932 180.212 22.4602 180.285 22.3162C180.385 22.1178 180.451 21.6947 180.357 21.4633ZM189.023 24.9281C188.947 24.8974 188.637 24.7624 188.546 24.7208C188.535 24.7161 188.519 24.709 188.508 24.7043C188.104 24.5052 188.124 24.4474 187.65 24.2795C187.404 24.185 186.316 23.5764 186.946 24.0038C187.404 24.322 186.59 23.8505 186.429 23.7839C186.119 23.6623 185.777 23.5225 185.451 23.4564C185.349 23.4351 185.229 23.4078 185.13 23.3775C184.908 23.3154 184.712 23.2485 184.513 23.1682C184.3 23.523 184.077 23.8501 183.837 24.1911C183.77 24.2877 183.705 24.3856 183.642 24.4853C183.391 24.8858 183.14 25.1795 182.851 25.5446C182.745 25.6915 182.654 25.8313 182.561 25.9865C182.406 26.2474 182.265 26.511 182.102 26.7677C181.873 27.1095 181.617 27.3819 181.386 27.7079C181.179 28.0024 181.434 27.5782 181.465 27.5284C181.25 27.7993 181.04 28.0801 180.922 28.4077C180.915 28.4266 180.908 28.4549 180.9 28.4736C180.888 28.5026 180.887 28.5043 180.893 28.4713C180.915 28.3227 180.971 28.163 181.028 28.0237C180.949 28.163 180.883 28.2967 180.821 28.4447C180.769 28.5555 180.693 28.7761 180.591 28.8505C180.4 28.9899 180.538 28.716 180.657 28.3839C180.895 27.6874 181.34 27.1978 181.659 26.5403C181.846 26.0656 182.021 25.6112 182.259 25.1589C182.49 24.7947 182.717 24.4615 182.92 24.0794C182.984 23.9592 183.049 23.8439 183.119 23.7272C183.342 23.3623 183.56 23.0011 183.769 22.6272C183.808 22.5625 183.844 22.4916 183.882 22.4254C183.92 22.3605 183.959 22.3165 184.017 22.2686C184.075 22.2242 184.127 22.1966 184.196 22.1742C184.268 22.1529 184.323 22.1466 184.397 22.1501C184.472 22.1572 184.53 22.1714 184.599 22.2026C184.882 22.3301 185.147 22.4363 185.439 22.5416C185.885 22.7095 186.284 22.9146 186.717 23.1057C187.386 23.3844 187.984 23.8611 188.615 24.2156C189.246 24.5701 189.023 24.9281 189.023 24.9281ZM185.164 23.2699C185.164 23.2699 185.169 23.2715 185.171 23.2722C185.588 23.4304 186.001 23.6503 186.411 23.834C187.084 24.1177 187.727 24.6202 188.41 24.9417L188.525 24.9962C188.469 24.9598 188.429 24.9343 188.416 24.9273C187.722 24.5295 187.175 24.0262 186.492 23.6384C186.339 23.5603 186.19 23.4682 186.034 23.396C185.763 23.2701 185.465 23.1661 185.171 23.2655C185.172 23.2674 185.166 23.2675 185.164 23.2699ZM188.525 24.9962C188.742 25.0998 188.97 25.2185 189.154 25.3637C189.448 25.6001 188.798 25.1723 188.525 24.9962ZM185.818 23.5086C186.024 23.5971 186.228 23.6909 186.434 23.779C186.713 23.8914 187.079 24.1091 187.318 24.294C187.773 24.635 186.861 23.9008 186.602 23.7698C186.556 23.7485 186.509 23.7275 186.462 23.7086C186.346 23.6633 185.945 23.5001 185.818 23.5086ZM178.765 28.3167C178.869 28.1264 178.974 27.9368 179.08 27.7469C179.089 27.7233 179.097 27.7037 179.102 27.6926C178.988 27.8995 178.877 28.1089 178.765 28.3167Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M284.234 13.4077C284.166 13.4462 284.1 13.4659 284.015 13.4742C283.909 13.4789 283.83 13.4624 283.734 13.4168C283.69 13.4074 283.244 13.1449 283.186 13.104C282.928 12.9226 282.704 12.7675 282.478 12.5436C282.403 12.4694 282.328 12.3962 282.249 12.3261C282.149 12.2365 281.953 12.0743 281.833 12.0138C281.714 11.9505 281.889 12.0044 281.915 12.012C281.818 11.9432 281.671 11.8543 281.561 11.8125C281.443 11.7678 281.706 11.8148 281.734 11.8195C281.713 11.8124 281.46 11.6769 281.436 11.5916C281.383 11.3947 282.389 11.8335 282.478 11.8661C282.855 12.0099 283.203 12.192 283.574 12.3485C283.688 12.3979 283.804 12.4449 283.92 12.494C283.936 12.4822 283.97 12.5153 284.012 12.573C284.019 12.5009 284.034 12.4558 284.053 12.4587C284.13 12.3588 284.208 12.26 284.282 12.1609C284.526 11.8411 284.738 11.5101 284.995 11.1984C285.056 11.1259 285.712 10.2463 285.763 10.4438C285.784 10.5293 285.633 10.7723 285.618 10.7893C285.639 10.7728 285.845 10.6004 285.765 10.6979C285.69 10.7884 285.607 10.9388 285.556 11.0467C285.575 11.0279 285.7 10.8938 285.629 11.0074C285.554 11.1198 285.464 11.3577 285.422 11.4848C285.388 11.5847 285.359 11.6861 285.33 11.7877C285.245 12.094 285.128 12.3394 284.994 12.6252C284.963 12.6894 284.707 13.1388 284.672 13.1686C284.613 13.2562 284.552 13.31 284.457 13.3577C284.379 13.3924 284.312 13.4077 284.234 13.4077ZM294.238 28.4628C295.786 26.7512 296.595 25.1697 297.351 23.0007C297.399 22.8583 297.444 22.7158 297.489 22.5722L297.49 22.5674C298.117 20.6377 298.381 19.0496 297.966 17.0424C297.473 15.1486 296.644 13.9841 295.167 12.7236C295.166 12.7229 295.183 12.7401 295.183 12.7377C292.851 10.6864 290.578 8.97218 287.495 8.28445C283.992 7.77999 280.567 9.25914 278.144 11.7467C276.597 13.458 275.787 15.0398 275.031 17.2087C274.984 17.3512 274.938 17.4938 274.894 17.6372L274.892 17.6419C274.265 19.5717 274.002 21.1599 274.417 23.1671C274.909 25.0607 275.739 26.2252 277.216 27.4859C277.216 27.4866 277.199 27.4694 277.199 27.4717C279.532 29.5231 281.805 31.2373 284.888 31.925C288.359 32.425 291.824 30.9411 294.238 28.4628ZM285.078 30.9876C283.53 30.6542 282.37 30.0814 281.026 29.2564C279.856 28.5144 278.856 27.7131 277.813 26.7974C277.808 26.7927 277.803 26.7903 277.801 26.7856C276.471 25.6761 275.721 24.6565 275.257 22.97C274.851 21.1338 275.097 19.6571 275.651 17.8811C275.651 17.8808 275.655 17.8693 275.655 17.8669C276.346 15.6375 277.116 13.9922 278.661 12.2228C282.512 8.15409 286.645 8.05892 291.359 10.9532C292.53 11.6955 293.529 12.4968 294.572 13.4122C294.577 13.4169 294.582 13.4193 294.584 13.424C295.914 14.5336 296.664 15.5531 297.128 17.2396C297.534 19.0758 297.287 20.5525 296.734 22.3287L296.729 22.3428C296.038 24.5723 295.268 26.2174 293.724 27.9871C291.03 30.8327 288.455 31.4862 285.078 30.9876ZM284.707 15.1914C284.74 15.2056 284.743 15.2244 284.724 15.2541C284.691 15.2376 284.686 15.2205 284.707 15.1914ZM284.255 15.559L284.269 15.5685C284.345 15.6235 284.445 15.6757 284.531 15.7128C284.643 15.748 284.733 15.7484 284.845 15.7147C284.959 15.6887 285.038 15.6432 285.118 15.557C285.174 15.4823 285.235 15.3873 285.274 15.3018L285.281 15.2854C285.429 15.0811 285.62 14.8104 285.65 14.7653C285.976 14.3024 286.157 13.9661 286.384 13.4505C286.459 13.2689 286.54 13.0908 286.617 12.9101C286.78 12.5297 286.979 12.05 287.177 11.6882C287.189 11.6693 287.198 11.6499 287.208 11.6301C287.225 11.5933 287.215 11.6065 287.199 11.623C287.187 11.6349 287.081 11.7781 287.081 11.7781C287.108 11.7208 287.137 11.6629 287.165 11.6057C287.238 11.4581 287.311 11.2945 287.407 11.1613C287.534 10.9797 287.22 11.3443 287.214 11.3516C287.291 11.2194 287.452 10.9391 287.469 10.7984C287.466 10.5131 286.912 11.444 286.9 11.4629C286.517 12.0243 286.095 12.5155 285.729 13.0965C285.469 13.5195 285.233 13.8376 284.925 14.2252C284.803 14.3794 284.687 14.5338 284.574 14.6911C284.399 14.6103 284.221 14.5337 284.039 14.4604C283.579 14.2762 283.217 14.1168 282.781 13.8782C282.175 13.5554 281.565 13.3378 280.954 13.04C280.936 13.0282 279.992 12.4955 280.131 12.7447C280.216 12.8583 280.494 13.0221 280.626 13.0991C280.617 13.0968 280.164 12.9348 280.364 13.0295C280.514 13.0975 280.659 13.2034 280.795 13.2953C280.848 13.3312 280.902 13.3669 280.954 13.4036C280.954 13.4036 280.791 13.3315 280.774 13.327C280.753 13.3199 280.736 13.3152 280.77 13.3388C280.789 13.3506 280.807 13.3627 280.825 13.374C281.177 13.5901 281.587 13.908 281.918 14.1576C282.074 14.2764 282.233 14.391 282.388 14.5112C282.841 14.8463 283.165 15.0491 283.677 15.2893C283.725 15.3138 284.025 15.4551 284.255 15.559ZM285.411 17.8466C285.467 17.8464 285.523 17.8348 285.583 17.8145C285.695 17.7719 285.767 17.7141 285.835 17.6158C285.854 17.6017 286.064 17.2968 286.09 17.2562C286.114 17.2219 286.137 17.1804 286.161 17.1481C286.369 16.8266 286.568 16.5054 286.761 16.1748C286.959 15.8342 287.135 15.4865 287.323 15.1417C287.412 14.9681 287.494 14.7945 287.571 14.6153C287.616 14.4875 287.693 14.3347 287.747 14.2053C287.931 13.7637 288.119 13.3178 288.31 12.879C288.351 12.7848 288.393 12.6919 288.442 12.6017C288.586 12.3327 288.358 12.6843 288.331 12.7271C288.45 12.4654 288.596 12.179 288.756 11.9419C288.921 11.701 288.528 12.1885 288.52 12.1986C288.622 12.0239 288.838 11.6638 288.878 11.4822C288.885 11.1284 287.988 12.6603 287.965 12.6981C287.638 13.2337 287.281 13.7457 286.954 14.2826C286.866 14.4368 286.761 14.5944 286.663 14.7427C286.449 15.0662 286.231 15.3877 286.017 15.7119C285.827 16.0015 285.625 16.2848 285.435 16.5748C285.34 16.6681 285.244 16.7598 285.148 16.8536C285.018 16.82 284.889 16.7879 284.761 16.7534C284.452 16.5959 284.136 16.4497 283.827 16.2928C283.481 16.1169 283.132 15.9459 282.786 15.7709C282.627 15.6911 282.458 15.6058 282.305 15.5156C281.755 15.2114 281.191 14.9438 280.641 14.6408C280.603 14.6195 279.065 13.7333 279.246 14.0372C279.37 14.1754 279.737 14.3808 279.912 14.4819C279.9 14.4772 279.317 14.2483 279.58 14.3761C279.836 14.5027 280.105 14.6791 280.338 14.8475C280.293 14.8236 279.921 14.6311 280.179 14.7939C280.266 14.8479 280.35 14.9072 280.432 14.9688C280.815 15.2553 281.199 15.5491 281.578 15.8415C281.689 15.9272 281.832 16.0219 281.934 16.1109C282.09 16.2281 282.247 16.3381 282.41 16.4446C282.745 16.6513 283.07 16.8661 283.41 17.0637C283.742 17.255 284.074 17.4357 284.414 17.6116C284.451 17.6282 284.492 17.6517 284.529 17.6702C284.573 17.6914 284.906 17.8537 284.929 17.8563C285.036 17.908 285.128 17.9222 285.246 17.904C285.309 17.8922 285.363 17.874 285.411 17.8466ZM285.356 20.2893C285.21 20.5168 285.065 20.7446 284.913 20.9808C284.72 21.2788 284.506 21.5649 284.304 21.8561C284.207 21.9774 284.12 22.1007 284.037 22.2556L284.03 22.2722L284.011 22.3013L284.01 22.3107C283.9 22.5332 283.806 22.7356 283.665 22.9481C283.411 23.3215 283.32 23.5311 283.142 23.9354C282.991 24.2757 282.772 24.5773 282.609 24.919C282.478 25.193 282.39 25.4846 282.239 25.7548C281.953 26.2673 281.652 26.784 281.374 27.2986L281.124 27.7469C281.091 27.8319 281.05 27.963 281.163 27.8849C281.265 27.8027 281.454 27.5105 281.527 27.394L281.778 26.9992C281.188 28.2611 281.996 26.7864 282.253 26.4151C282.219 26.4761 281.948 26.9662 282.17 26.6204C282.31 26.3977 282.466 26.1903 282.613 25.973C282.792 25.7062 282.946 25.4368 283.109 25.1601C283.2 25.0054 283.329 24.8533 283.442 24.7131C283.57 24.5527 283.669 24.4143 283.77 24.2339C283.955 23.8931 284.064 23.7199 284.304 23.4117C284.5 23.1571 284.627 22.9323 284.786 22.6567C284.89 22.4923 285.028 22.3544 285.161 22.2138C285.467 21.887 285.637 21.6908 285.875 21.3058C285.981 21.132 286.089 20.9555 286.19 20.7781C286.365 20.8823 286.546 20.9823 286.724 21.0805C287.122 21.2966 287.366 21.3833 287.795 21.5153C287.98 21.5717 288.168 21.6228 288.34 21.7139C288.614 21.8748 288.836 22.007 289.133 22.1308C289.494 22.2796 289.674 22.3761 290.004 22.5801C290.181 22.6866 290.336 22.7577 290.527 22.8335C290.694 22.8996 290.882 22.9678 291.037 23.0568C291.316 23.2167 291.583 23.3744 291.871 23.5171C292.106 23.6335 292.345 23.7357 292.577 23.8597C292.94 24.0503 292.462 23.7588 292.403 23.7225C292.757 23.892 293.139 24.0763 293.473 24.2785C293.476 24.2801 293.478 24.2808 293.48 24.2832C293.609 24.364 293.573 24.3366 293.488 24.2691C293.459 24.2455 293.114 24.003 293.104 23.9955L293.517 24.2143C293.638 24.2793 293.948 24.4391 294.077 24.4599C294.213 24.4717 294.113 24.3781 294.042 24.3207C294.023 24.3042 294.006 24.2921 293.996 24.2848C294.198 24.4081 294.398 24.5352 294.599 24.6599C294.414 24.5463 294.228 24.4333 294.042 24.3207L293.603 24.0553C293.106 23.7464 292.588 23.4467 292.086 23.1434C291.821 22.9835 291.6 22.7738 291.351 22.6007C291.039 22.3849 290.7 22.2313 290.4 22.0107C290.045 21.7476 289.863 21.6105 289.457 21.4121C289.229 21.2975 289.047 21.1686 288.841 21.0299L288.836 21.0229L288.805 21.0063L288.791 20.9969C288.643 20.9034 288.506 20.8395 288.361 20.7822C288.042 20.6291 287.713 20.4872 287.399 20.3238C287.149 20.1941 286.91 20.0683 286.671 19.9426C286.993 19.4243 287.258 18.9007 287.556 18.3648C287.635 18.234 287.725 18.0726 287.795 17.9365C287.998 17.566 288.153 17.2101 288.327 16.8275C288.404 16.6615 288.484 16.5071 288.577 16.3493C288.591 16.3184 288.63 16.2614 288.649 16.2288C288.884 15.8283 289.103 15.4424 289.312 15.0272C289.314 15.0225 289.339 14.9717 289.339 14.9714C289.335 14.9287 289.804 14.1196 289.876 14.0062C290.111 13.6286 289.76 14.1246 289.716 14.1848C289.887 13.8929 290.06 13.6019 290.231 13.3093C290.282 13.2231 290.332 13.1375 290.387 13.0537C290.592 12.742 290.204 13.2707 290.191 13.2868C290.184 13.2962 290.067 13.4528 290.067 13.4528C290.103 13.3959 290.138 13.334 290.172 13.2757C290.28 13.0898 290.57 12.5998 290.613 12.4097C290.672 12.0426 290.002 13.1768 290.001 13.178C289.662 13.7072 289.289 14.2098 288.943 14.7358C288.941 14.7405 288.91 14.7877 288.91 14.7879C288.636 15.2062 288.347 15.5781 288.047 15.9759C287.919 16.1473 287.812 16.3094 287.704 16.4941C287.508 16.8417 287.324 17.182 287.109 17.5192C287.033 17.6472 286.924 17.8058 286.843 17.9309C286.76 18.0589 286.679 18.1893 286.598 18.3213C286.442 18.5539 286.286 18.787 286.142 19.0312C286.045 19.1939 285.951 19.3579 285.856 19.522C285.693 19.4264 285.529 19.331 285.365 19.2375C285.118 19.097 284.867 18.9715 284.616 18.8468C284.481 18.7724 284.345 18.6995 284.21 18.6293C284.078 18.5608 283.905 18.4771 283.775 18.4034C283.421 18.2176 283.093 18.0128 282.75 17.8078C282.565 17.7011 282.391 17.6137 282.195 17.5282C281.737 17.3314 281.303 17.1516 280.857 16.9239C280.857 16.9237 280.807 16.898 280.802 16.8954C280.242 16.6096 279.668 16.3582 279.111 16.0665C279.11 16.0658 277.966 15.4132 278.199 15.7027C278.33 15.8465 278.825 16.1286 279.011 16.2363C279.07 16.2703 279.131 16.3065 279.19 16.338C279.19 16.338 279.011 16.26 279 16.2555C278.981 16.2484 278.382 15.9806 278.715 16.1501C278.804 16.1957 278.89 16.2448 278.977 16.2944C279.27 16.464 279.565 16.631 279.858 16.7994C279.79 16.7689 279.239 16.5125 279.631 16.7238C279.75 16.7867 280.557 17.2572 280.575 17.2964C280.575 17.2966 280.623 17.3289 280.627 17.3313C281.014 17.588 281.395 17.815 281.798 18.046C281.831 18.0649 281.893 18.0951 281.92 18.1151C282.079 18.2061 282.226 18.3003 282.375 18.4063C282.715 18.6527 283.026 18.8851 283.386 19.1062C283.514 19.1895 283.672 19.2852 283.806 19.3596C284.33 19.6772 284.819 19.9988 285.356 20.2893ZM292.555 15.2723C292.305 15.568 292.088 15.8142 291.866 16.137C291.651 16.4244 291.469 16.7508 291.279 17.0541C291.089 17.3892 290.894 17.7172 290.693 18.0452C290.658 18.109 290.638 18.1638 290.627 18.2361C290.617 18.3067 290.619 18.3634 290.634 18.4333C290.65 18.5041 290.671 18.5541 290.71 18.6158C290.751 18.6772 290.791 18.719 290.851 18.7629C291.552 19.3 292.118 19.8008 292.901 20.2348C293.068 20.3222 293.234 20.4033 293.404 20.4829C293.584 20.5535 293.747 20.6459 293.934 20.7099C294.115 20.7716 294.294 20.8396 294.475 20.8989C294.818 21.0111 295.196 21.1357 295.491 21.3478C295.52 21.3714 295.594 21.4342 295.595 21.4765C295.729 21.5018 295.526 21.3057 295.522 21.3027C295.462 21.2292 295.052 21.0051 294.96 20.9564C294.833 20.8896 294.695 20.8193 294.574 20.7425C294.395 20.6292 294.394 20.6502 294.037 20.401C293.827 20.2551 294.157 20.3444 294.24 20.402C294.437 20.535 294.005 20.2371 293.996 20.2319C293.862 20.1535 293.77 20.1314 293.659 20.0714C293.578 20.0239 293.497 19.9391 293.431 19.8732C293.365 19.8082 293.298 19.7541 293.224 19.6986C293.194 19.6773 293.16 19.6512 293.121 19.6215C293.163 19.638 293.203 19.6551 293.241 19.6705C293.281 19.6752 293.719 19.8496 293.779 19.8772C293.865 19.9129 294.039 19.9858 294.215 20.0619C294.553 20.2071 294.901 20.3627 294.671 20.2879C294.518 20.2354 294.365 20.1507 294.215 20.0619C294.078 19.9804 293.941 19.8956 293.807 19.8292C293.641 19.7395 293.474 19.6511 293.308 19.5602C293.006 19.3885 292.736 19.2119 292.468 19.0208C292.398 18.9443 292.329 18.8629 292.262 18.7769C292.139 18.6041 291.868 18.3808 291.64 18.2032C291.769 17.9477 291.885 17.6931 292 17.4215C292.135 17.1022 292.28 16.7877 292.415 16.4681C292.42 16.4563 292.427 16.4423 292.432 16.4298C292.573 16.1022 292.707 15.8229 292.885 15.5144C292.953 15.3999 293.014 15.2841 293.08 15.1694C293.2 14.9525 293.005 15.2294 292.976 15.2674C293.088 15.0584 293.176 14.8347 293.29 14.6318C293.396 14.4438 293.121 14.8217 293.111 14.8357C293.182 14.6949 293.313 14.4057 293.32 14.2555C293.301 14.0096 292.598 15.2172 292.555 15.2723ZM293.587 16.4216C293.307 16.7895 293.115 17.1948 292.863 17.5788C292.827 17.6423 292.807 17.6962 292.795 17.7685C292.785 17.8389 292.785 17.8953 292.8 17.9652C292.816 18.0361 292.836 18.0861 292.874 18.1477C292.915 18.2098 292.955 18.2509 293.014 18.2953C293.318 18.5386 293.596 18.802 293.903 19.0429C294.24 19.2812 294.692 19.539 295.116 19.5594C295.293 19.5688 295.798 19.6034 295.953 19.6849C296.007 19.7038 296.268 19.805 296.248 19.8971C296.418 19.8442 296.013 19.6257 295.996 19.616C295.945 19.5896 295.895 19.5657 295.842 19.5428C295.549 19.415 295.485 19.3817 295.203 19.2539C295.063 19.1826 295.281 19.1639 295.352 19.1996C295.484 19.2629 295.196 19.1189 295.181 19.1132C294.965 19.0284 295.028 19.0554 294.807 18.9142C293.99 18.391 294.037 17.9437 293.783 17.7352C293.916 17.4211 294.011 17.1086 294.124 16.7741C294.124 16.7741 294.128 16.7576 294.131 16.7505C294.216 16.5167 294.346 16.1093 294.483 15.9048C294.566 15.7735 294.424 15.9313 294.404 15.9535C294.471 15.8215 294.556 15.6677 294.65 15.5552C294.747 15.4431 294.508 15.6474 294.489 15.6632C294.503 15.6467 294.686 15.3713 294.671 15.2837C294.628 15.0371 293.666 16.3252 293.587 16.4216ZM290.876 14.6437C290.514 15.1533 290.147 15.6115 289.813 16.1464C289.479 16.6775 289.154 17.0739 288.87 17.6527C288.675 18.0476 288.459 18.4004 288.229 18.7748C288.19 18.8433 288.171 18.8999 288.159 18.9779C288.149 19.0523 288.152 19.1118 288.171 19.185C288.19 19.2577 288.215 19.3116 288.258 19.3733C288.304 19.4366 288.349 19.478 288.415 19.5203C289.118 19.9714 289.819 20.4233 290.527 20.8663C290.832 21.0586 291.119 21.2577 291.415 21.4627C291.867 21.7605 292.254 21.9182 292.771 22.0583C292.907 22.094 293.091 22.1418 293.218 22.1964C293.406 22.2684 294.998 22.9011 295.043 23.1486C295.339 23.1675 294.33 22.5733 294.126 22.4543C294.053 22.4122 293.148 21.9102 293.49 22.0283C293.538 22.0448 293.522 22.0353 293.497 22.0259C293.428 21.9963 293.365 21.9694 293.357 21.9656C293.172 21.8818 292.978 21.8121 292.796 21.7229C292.338 21.4813 293.321 21.8572 292.925 21.6593C292.812 21.6026 292.694 21.5436 292.687 21.5405C292.297 21.3719 292.22 21.4208 291.895 21.1025C291.859 21.068 291.812 21.0177 291.776 20.9874C291.215 20.4693 290.703 20.16 290.14 19.6215C289.883 19.3707 289.526 19.135 289.195 18.926C289.36 18.6234 289.507 18.3279 289.643 17.9931C289.863 17.4499 290.153 16.9972 290.398 16.4722C290.426 16.3999 290.466 16.3202 290.498 16.2484C290.718 15.7659 290.978 15.3226 291.21 14.8527C291.264 14.7431 291.332 14.6246 291.395 14.5193C291.567 14.2217 291.301 14.6089 291.267 14.6573C291.422 14.365 291.585 14.0513 291.762 13.7736C291.915 13.5341 291.532 14.0381 291.505 14.0725C291.622 13.8749 291.854 13.4662 291.9 13.2574C291.912 12.9277 290.917 14.5834 290.876 14.6437ZM291.11 26.4699C290.759 26.2167 290.419 25.9797 290.05 25.7518C289.632 25.4738 289.194 25.1948 288.751 24.9595C288.591 24.8745 288.424 24.7928 288.262 24.7109C288.146 24.6526 288.037 24.5811 287.923 24.5206C287.794 24.4543 287.681 24.4376 287.539 24.4653C287.397 24.5005 287.302 24.5621 287.213 24.6769C287.17 24.7021 286.371 25.7931 286.275 25.9279C286.131 26.1315 285.995 26.3069 285.83 26.494C285.468 26.9068 285.253 27.2727 285.096 27.7961C285.063 27.9137 284.99 28.1671 284.934 28.2674C284.879 28.4002 284.419 29.5595 284.213 29.556C284.21 29.8077 284.648 29.1162 284.791 28.8782C284.881 28.7251 284.992 28.5277 285.104 28.3895C285.175 28.3026 285.172 28.3348 285.142 28.4165C285.137 28.4259 285.098 28.5529 285.095 28.5612L285.146 28.4195C285.207 28.2499 285.318 28.0246 285.413 27.8751C285.556 27.6507 285.472 27.9911 285.418 28.0873C285.285 28.3076 285.574 27.8324 285.581 27.8191C285.738 27.5168 285.664 27.4871 285.952 27.2512C286.066 27.1563 286.172 27.0526 286.281 26.9515C286.023 27.3294 285.904 27.6599 285.776 27.9946C285.693 28.2092 285.607 28.4256 285.476 28.6571C285.465 28.6783 285.465 28.6666 285.472 28.6548C285.486 28.6274 285.499 28.5912 285.511 28.5627C285.599 28.3676 285.684 28.1776 285.776 27.9946C285.944 27.6585 286.132 27.3432 286.394 27.0456C286.591 26.8291 286.747 26.6298 286.915 26.3901C286.959 26.3258 287.004 26.2616 287.049 26.1976C287.115 26.132 287.183 26.0701 287.26 26.0082C287.424 25.8788 287.607 25.6695 287.764 25.4718L287.873 25.5252C288.028 25.5993 288.228 25.6825 288.39 25.742C288.841 25.9078 289.278 26.175 289.728 26.3452C289.798 26.3712 289.866 26.4004 289.935 26.4271C290.257 26.5523 290.569 26.6829 290.882 26.831C291.013 26.8841 291.195 26.9781 291.321 27.0485C291.553 27.1739 291.255 26.9725 291.216 26.9449C291.444 27.0564 291.693 27.1705 291.908 27.3029C292.121 27.4361 291.692 27.1068 291.681 27.0974C291.836 27.1836 292.157 27.3534 292.323 27.3726C292.596 27.3456 291.181 26.5198 291.11 26.4699ZM290.119 27.8438C289.616 27.4222 289.405 27.293 288.82 27.0049C288.672 26.9281 288.538 26.845 288.397 26.7581C288.269 26.6893 288.157 26.6711 288.014 26.6957C287.872 26.728 287.775 26.7885 287.683 26.9009C287.467 27.1647 287.252 27.4195 287.026 27.6753C286.721 28.0225 286.515 28.2919 286.428 28.7522C286.419 28.8084 286.394 28.9624 286.375 29.0082C286.356 29.1117 286.154 29.9575 285.939 29.907C285.98 30.1202 286.346 29.5239 286.347 29.5222C286.563 29.1545 286.547 29.3512 286.607 29.1495C286.631 29.0704 286.685 28.9304 286.728 28.86C286.813 28.7219 286.812 28.944 286.766 29.0208C286.68 29.1681 286.847 28.8961 286.871 28.8486C286.964 28.6599 286.878 28.6465 287.084 28.5324C287.33 28.3786 287.446 27.4756 288.47 27.809C288.818 27.9219 289.16 28.0223 289.5 28.1494C289.603 28.1886 289.699 28.2317 289.798 28.2808C289.991 28.3663 290.251 28.4563 290.428 28.5576C290.567 28.637 290.398 28.5005 290.374 28.4799C290.512 28.5437 290.674 28.621 290.795 28.7103C290.916 28.8005 290.695 28.5747 290.674 28.5537C290.696 28.5702 290.991 28.7372 291.076 28.7202C291.302 28.6756 290.217 27.93 290.119 27.8438ZM288.942 29.7209C288.961 29.6087 289.039 29.2537 289.064 29.4424C289.064 29.4282 289.067 29.2753 288.984 29.3604C288.975 29.3698 288.851 29.358 288.814 29.3462C288.734 29.3203 288.693 29.2459 288.662 29.091C288.574 28.8997 288.43 29.1099 288.402 29.2237C288.397 29.249 288.362 29.4192 288.336 29.4262C288.314 29.431 288.357 29.4608 288.357 29.4608C288.345 29.4797 288.325 29.5021 288.301 29.4891C288.276 29.4702 288.344 29.5576 288.344 29.5571C288.344 29.5571 288.296 29.5576 288.304 29.6216C288.328 29.785 288.843 30.1325 288.942 29.7209ZM277.931 19.1514C278.295 19.2844 278.605 19.3905 278.958 19.5608C279.287 19.7042 279.607 19.8972 279.923 20.0663C280.253 20.2635 280.585 20.4518 280.922 20.6371C280.985 20.6747 281.029 20.7131 281.075 20.7698C281.119 20.8264 281.145 20.8764 281.167 20.9442C281.189 21.0139 281.195 21.0675 281.192 21.1402C281.187 21.2141 281.173 21.2704 281.142 21.338C280.8 22.1518 280.556 22.8676 280.091 23.6328C279.989 23.7913 279.885 23.944 279.777 24.0975C279.656 24.248 279.56 24.4088 279.429 24.5574C279.303 24.7003 279.181 24.8483 279.053 24.9895C278.811 25.2569 278.544 25.5527 278.393 25.8831C278.381 25.9173 278.346 26.0094 278.367 26.0463C278.263 26.1346 278.342 25.8639 278.343 25.8592C278.36 25.7659 278.604 25.3681 278.66 25.2803C278.737 25.1591 278.822 25.0295 278.889 24.9029C278.988 24.7156 279 24.7331 279.186 24.3399C279.296 24.1094 279.054 24.3517 279.01 24.4415C278.905 24.6547 279.133 24.1817 279.138 24.1729C279.216 24.0381 279.284 23.9736 279.352 23.8662C279.398 23.7849 279.426 23.6708 279.451 23.5811C279.476 23.4923 279.507 23.412 279.544 23.3272C279.647 23.1003 279.842 22.6111 279.923 22.0495C279.944 21.8384 280.069 21.5103 280.179 21.243C279.94 21.085 279.713 20.9215 279.479 20.7425C279.203 20.5323 278.921 20.331 278.645 20.1205C278.636 20.1111 278.622 20.1039 278.612 20.0952C278.327 19.8809 278.072 19.7048 277.764 19.5251C277.649 19.4592 277.538 19.389 277.424 19.3217C277.213 19.1929 277.519 19.3359 277.563 19.3555C277.362 19.2294 277.175 19.0787 276.976 18.959C276.79 18.8485 277.216 19.0405 277.232 19.0473C277.1 18.9604 276.843 18.774 276.763 18.6472C276.658 18.4238 277.866 19.1252 277.931 19.1514ZM280.088 21.8568C279.881 22.3487 279.677 22.7857 279.404 23.2484C279.304 23.4097 279.203 23.5691 279.103 23.7297C279.019 23.8537 278.943 23.9949 278.864 24.134C278.979 23.9805 279.094 23.8309 279.151 23.7572C279.19 23.7034 279.484 23.3356 279.516 23.3111C279.698 23.0806 279.95 22.746 280.076 22.4796C280.145 22.3023 280.218 22.0294 280.088 21.8568ZM278.864 24.134C278.777 24.2854 278.687 24.4346 278.58 24.5562C278.418 24.735 278.643 24.4273 278.864 24.134ZM279.938 22.3118L279.791 22.8409C279.836 22.7424 279.973 22.4278 279.938 22.3118ZM277.605 20.6611C278.03 20.842 278.398 21.0987 278.806 21.3074C278.87 21.3445 278.913 21.3816 278.96 21.4383C279.004 21.4941 279.031 21.5441 279.054 21.6114C279.075 21.6809 279.082 21.7344 279.079 21.8069C279.074 21.8813 279.06 21.9364 279.031 22.0047C278.887 22.3667 278.776 22.7329 278.629 23.0943C278.455 23.4681 278.191 23.9162 277.832 24.1441C277.682 24.2395 277.261 24.5208 277.167 24.6684C277.13 24.7123 276.953 24.9282 277.016 24.9983C276.842 25.0366 277.086 24.6462 277.096 24.6294C277.127 24.5813 277.159 24.5357 277.193 24.4896C277.385 24.2334 277.424 24.1727 277.605 23.9224C277.691 23.7906 277.492 23.8824 277.449 23.9485C277.366 24.0689 277.544 23.8009 277.554 23.7891C277.7 23.6082 277.658 23.6627 277.78 23.4306C278.231 22.5712 277.968 22.2063 278.086 21.899C277.814 21.6921 277.577 21.4676 277.313 21.2333C277.313 21.2333 277.301 21.2215 277.297 21.2168C277.106 21.0562 276.791 20.7668 276.572 20.6568C276.434 20.5842 276.636 20.6498 276.664 20.6592C276.541 20.5777 276.39 20.4863 276.253 20.4355C276.114 20.3857 276.423 20.4449 276.447 20.4496C276.425 20.4425 276.13 20.2943 276.1 20.2105C276.015 19.9752 277.488 20.6167 277.605 20.6611ZM279.078 17.7734C279.645 18.0362 280.19 18.2526 280.746 18.5516C281.299 18.8475 281.778 19.0305 282.311 19.3923C282.677 19.6386 283.039 19.8382 283.424 20.0493C283.492 20.0895 283.537 20.1292 283.586 20.1909C283.631 20.2509 283.657 20.3044 283.679 20.3762C283.698 20.4487 283.703 20.5081 283.695 20.5829C283.686 20.6609 283.668 20.7194 283.631 20.7888C283.245 21.5287 282.86 22.2689 282.465 23.0043C282.295 23.3225 282.145 23.6377 281.989 23.9625C281.744 24.4452 281.486 24.774 281.107 25.1518C281.006 25.2501 280.87 25.383 280.786 25.4938C280.659 25.6489 279.59 26.988 279.673 27.2254C279.426 27.3888 280.008 26.3721 280.126 26.1674C280.169 26.0946 280.706 25.2102 280.467 25.4821C280.433 25.5208 280.443 25.5056 280.46 25.4829C280.506 25.4232 280.547 25.3686 280.552 25.3613C280.67 25.1969 280.805 25.0402 280.918 24.8725C281.197 24.4356 280.53 25.2491 280.775 24.8819C280.845 24.7763 280.918 24.6672 280.923 24.6609C281.178 24.321 281.269 24.3251 281.394 23.8877C281.408 23.84 281.423 23.7733 281.44 23.7287C281.671 23.0008 281.962 22.4784 282.184 21.7314C282.283 21.3861 282.475 21.0049 282.66 20.6589C282.366 20.4782 282.093 20.294 281.808 20.0711C281.348 19.7083 280.871 19.459 280.399 19.1239C280.339 19.075 280.265 19.0258 280.201 18.9797C279.771 18.6692 279.325 18.4136 278.891 18.12C278.789 18.0518 278.672 17.9825 278.565 17.922C278.268 17.7489 278.691 17.9533 278.745 17.9784C278.465 17.8017 278.168 17.61 277.877 17.4563C277.625 17.3245 278.207 17.5722 278.248 17.589C278.049 17.4752 277.644 17.2351 277.501 17.0764C277.328 16.7956 279.012 17.7415 279.078 17.7734ZM282.4 21.4633C282.325 21.9299 282.358 22.2736 282.05 22.6133C281.869 22.9508 281.87 23.2141 281.711 23.5618C281.538 23.8945 281.394 24.2317 281.191 24.496C280.96 24.798 281.134 24.583 281.266 24.4337C281.476 24.1963 281.602 23.8555 281.778 23.5726C281.975 23.2554 281.911 23.0414 282.12 22.7276C282.209 22.5932 282.255 22.4602 282.328 22.3162C282.428 22.1178 282.494 21.6947 282.4 21.4633ZM291.066 24.9281C290.99 24.8974 290.68 24.7624 290.59 24.7208C290.578 24.7161 290.562 24.709 290.552 24.7043C290.148 24.5052 290.167 24.4474 289.694 24.2795C289.448 24.185 288.36 23.5764 288.99 24.0038C289.448 24.322 288.633 23.8505 288.473 23.7839C288.163 23.6623 287.82 23.5225 287.494 23.4564C287.393 23.4351 287.272 23.4078 287.174 23.3775C286.951 23.3154 286.756 23.2485 286.557 23.1682C286.343 23.523 286.12 23.8501 285.881 24.1911C285.813 24.2877 285.748 24.3856 285.686 24.4853C285.434 24.8858 285.183 25.1795 284.895 25.5446C284.788 25.6915 284.698 25.8313 284.604 25.9865C284.449 26.2474 284.308 26.511 284.145 26.7677C283.916 27.1095 283.66 27.3819 283.429 27.7079C283.222 28.0024 283.478 27.5782 283.508 27.5284C283.294 27.7993 283.083 28.0801 282.965 28.4077C282.958 28.4266 282.951 28.4549 282.944 28.4736C282.932 28.5026 282.932 28.5043 282.937 28.4713C282.958 28.3227 283.015 28.163 283.072 28.0237C282.993 28.163 282.927 28.2967 282.865 28.4447C282.813 28.5555 282.737 28.7761 282.635 28.8505C282.444 28.9899 282.582 28.716 282.7 28.3839C282.939 27.6874 283.384 27.1978 283.703 26.5403C283.89 26.0656 284.065 25.6112 284.303 25.1589C284.533 24.7947 284.761 24.4615 284.964 24.0794C285.028 23.9592 285.093 23.8439 285.162 23.7272C285.386 23.3623 285.604 23.0011 285.813 22.6272C285.852 22.5625 285.888 22.4916 285.925 22.4254C285.964 22.3605 286.002 22.3165 286.061 22.2686C286.119 22.2242 286.171 22.1966 286.24 22.1742C286.311 22.1529 286.367 22.1466 286.441 22.1501C286.516 22.1572 286.574 22.1714 286.643 22.2026C286.926 22.3301 287.191 22.4363 287.483 22.5416C287.929 22.7095 288.328 22.9146 288.761 23.1057C289.43 23.3844 290.027 23.8611 290.659 24.2156C291.29 24.5701 291.066 24.9281 291.066 24.9281ZM287.208 23.2699C287.208 23.2699 287.212 23.2715 287.215 23.2722C287.632 23.4304 288.045 23.6503 288.455 23.834C289.128 24.1177 289.771 24.6202 290.454 24.9417L290.569 24.9962C290.513 24.9598 290.473 24.9343 290.46 24.9273C289.766 24.5295 289.219 24.0262 288.536 23.6384C288.383 23.5603 288.234 23.4682 288.078 23.396C287.807 23.2701 287.509 23.1661 287.215 23.2655C287.216 23.2674 287.21 23.2675 287.208 23.2699ZM290.569 24.9962C290.786 25.0998 291.013 25.2185 291.197 25.3637C291.491 25.6001 290.842 25.1723 290.569 24.9962ZM287.862 23.5086C288.068 23.5971 288.271 23.6909 288.477 23.779C288.756 23.8914 289.122 24.1091 289.361 24.294C289.817 24.635 288.904 23.9008 288.645 23.7698C288.599 23.7485 288.552 23.7275 288.505 23.7086C288.389 23.6633 287.989 23.5001 287.862 23.5086ZM280.808 28.3167C280.912 28.1264 281.018 27.9368 281.124 27.7469C281.133 27.7233 281.14 27.7037 281.145 27.6926C281.03 27.8995 280.92 28.1089 280.808 28.3167Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M46.4097 20.4195C46.7635 20.8413 47.1179 21.2652 47.4689 21.6981C47.7405 21.994 48.0213 22.286 48.2969 22.5722C48.8642 23.165 49.2338 23.4467 49.8927 23.9085C50.179 24.1061 50.4744 24.2929 50.7148 24.5534C51.0901 24.9926 51.3903 25.3519 51.8265 25.7364C52.3564 26.1981 52.6056 26.4704 53.0539 27.0204C53.2917 27.3105 53.5151 27.522 53.7964 27.7608C54.0448 27.9698 54.3285 28.19 54.5429 28.4358C54.9269 28.8772 55.2916 29.307 55.7061 29.7133C56.0471 30.0477 56.3999 30.3535 56.7346 30.6933C57.2549 31.22 56.5981 30.4473 56.5154 30.351C57.04 30.8358 57.603 31.3523 58.0798 31.8844C58.0829 31.8868 58.0845 31.8915 58.0881 31.8962C58.2666 32.1019 58.2225 32.036 58.1129 31.8688C58.0772 31.8145 57.6108 31.2011 57.5973 31.182C57.7924 31.3827 57.9979 31.5819 58.2017 31.78C58.3793 31.9529 58.8374 32.3959 59.0651 32.4779C59.3065 32.5648 59.1839 32.3395 59.0918 32.2014C58.8778 31.9742 58.6679 31.7439 58.4617 31.5141C57.7629 30.7109 57.0272 29.9107 56.3319 29.0988C55.9656 28.6708 55.7115 28.1653 55.383 27.7157C54.9725 27.1548 54.477 26.698 54.0895 26.1334C53.6287 25.4648 53.3968 25.1152 52.8104 24.5408C52.4599 24.1844 52.206 23.8274 51.9011 23.4313C51.5686 23.0275 51.2436 22.7885 50.84 22.4812C50.2824 22.067 49.9721 21.8145 49.4884 21.3046C49.2399 21.0412 48.9901 20.7801 48.7385 20.5206C49.5798 19.6999 50.3081 18.8279 51.0974 17.9366C51.2965 17.7271 51.5223 17.4624 51.7115 17.2421C52.2306 16.637 52.6621 16.0413 53.1344 15.398C53.3403 15.1212 53.5524 14.8647 53.7829 14.6085C53.8228 14.5575 53.9168 14.4682 53.9643 14.4162C54.5528 13.7684 55.1083 13.1398 55.656 12.4535C55.6612 12.4488 55.7285 12.36 55.7285 12.36C55.7384 12.2763 56.928 10.9776 57.1061 10.7993C57.6989 10.2067 56.8439 10.9646 56.7403 11.056C57.1724 10.5922 57.6138 10.1319 58.0529 9.66497C58.184 9.53059 58.3124 9.39745 58.4523 9.26756C58.9685 8.78931 58.0175 9.58154 57.9861 9.60515C57.9683 9.61696 57.6906 9.85482 57.6906 9.85482C57.7794 9.7672 57.8713 9.66665 57.9549 9.57431C58.2371 9.28145 59.0023 8.52397 59.1527 8.1879C59.4397 7.54717 57.6814 9.30247 57.6802 9.30389C56.8366 10.1314 55.9455 10.8947 55.1048 11.7279C55.0974 11.7326 55.0259 11.8094 55.0245 11.811C54.3604 12.4754 53.6906 13.046 52.9936 13.6622C52.6944 13.9288 52.4351 14.1862 52.1696 14.489C51.6784 15.0586 51.2101 15.619 50.6853 16.1587C50.5006 16.3655 50.2387 16.6157 50.0432 16.8115C49.2267 17.6313 48.4223 18.5308 47.5813 19.3298C47.1921 19.6968 46.801 20.0568 46.4097 20.4195ZM61.5921 14.4543C60.9802 14.89 60.4555 15.2481 59.8858 15.7497C59.353 16.194 58.8462 16.71 58.3642 17.2014C57.8448 17.7314 57.3394 18.2713 56.8116 18.7937C56.7157 18.8959 56.6552 18.9918 56.5964 19.1212C56.5428 19.2513 56.5149 19.3579 56.5072 19.4961C56.5001 19.638 56.5123 19.7417 56.5518 19.8739C56.5926 20.0125 56.6429 20.1084 56.727 20.2184C57.7012 21.567 58.4497 22.7758 59.6208 23.9673C59.8745 24.211 60.1293 24.4408 60.3957 24.6732C60.6838 24.889 60.9266 25.1389 61.2388 25.3493C61.5338 25.5489 61.8238 25.7619 62.1261 25.9568C62.6974 26.3266 63.3349 26.7282 63.7531 27.2677C63.7937 27.3201 63.8913 27.478 63.8643 27.5557C64.1057 27.6655 63.8455 27.2025 63.8386 27.1954C63.7744 27.0318 63.1462 26.4247 63.0035 26.2893C62.8068 26.1023 62.5895 25.9081 62.4109 25.7083C62.1469 25.4109 62.1323 25.4509 61.6198 24.8144C61.3201 24.442 61.7955 24.6644 61.9979 24.9103C62.2008 25.1549 61.6606 24.4891 61.6476 24.4731C61.4471 24.2612 61.2882 24.1794 61.1196 24.0138C60.9956 23.8872 60.8983 23.6864 60.8149 23.5315C60.7315 23.3782 60.6418 23.2444 60.5365 23.1053C60.249 22.7319 59.678 21.9213 59.2857 20.9119C59.1549 20.5293 58.7749 19.9813 58.4506 19.5366C58.8193 19.1169 59.1627 18.6891 59.5124 18.2328C59.9243 17.6972 60.3513 17.1718 60.7592 16.6322C60.7752 16.6109 60.7922 16.59 60.8088 16.5692C61.2334 16.017 61.6228 15.5552 62.1087 15.0607C62.29 14.8767 62.4624 14.6871 62.6424 14.5036C62.973 14.154 62.47 14.5826 62.398 14.6395C62.7083 14.3008 62.9837 13.9221 63.2964 13.5979C63.5883 13.2963 62.8835 13.8735 62.8561 13.8945C63.0592 13.664 63.4461 13.1846 63.528 12.9113C63.6017 12.447 61.7022 14.3683 61.5921 14.4543ZM63.0094 17.0933C62.2891 17.6526 61.7114 18.3228 61.0445 18.9345C60.938 19.0325 60.8794 19.1305 60.8182 19.2616C60.7606 19.3896 60.732 19.496 60.7202 19.6354C60.7129 19.7763 60.7249 19.8803 60.7637 20.0126C60.8048 20.1512 60.8565 20.2485 60.9431 20.3588C61.3786 20.9599 61.7499 21.5878 62.188 22.1886C62.683 22.7951 63.3826 23.4952 64.1761 23.7342C64.5093 23.8343 65.4507 24.1439 65.7036 24.3616C65.7882 24.4344 66.2343 24.7381 66.1351 24.9018C66.4988 24.8829 65.8564 24.2795 65.8293 24.2525C65.7457 24.1772 65.6666 24.1092 65.5799 24.0424C65.0938 23.6621 64.9921 23.5701 64.5313 23.1948C64.3065 22.9957 64.6843 23.0219 64.8489 23.1634C65.014 23.3041 64.5977 22.9361 64.575 22.9179C64.2101 22.659 64.3166 22.7381 63.9772 22.3667C62.7305 20.9952 63.0703 20.1729 62.6974 19.6578C63.1223 19.1265 63.4688 18.5801 63.8627 18.0032C63.8627 18.0032 63.8818 17.9732 63.8896 17.9621C64.1758 17.5625 64.7037 16.7978 65.0022 16.5321C65.3014 16.2672 64.8754 16.5533 64.8263 16.5845C65.0202 16.3679 65.2637 16.1195 65.5074 15.9485C65.748 15.7839 65.1822 16.0581 65.1354 16.0794C65.1732 16.0553 65.6651 15.6217 65.6784 15.449C65.7159 14.9675 63.2116 16.9469 63.0094 17.0933ZM58.7009 12.4818C57.8099 13.2651 56.9367 13.9518 56.0969 14.806C55.2635 15.6498 54.5009 16.2475 53.7366 17.2026C53.2095 17.857 52.6642 18.4182 52.0841 19.0126C51.985 19.1243 51.9224 19.2219 51.8645 19.3615C51.8109 19.4961 51.7889 19.6084 51.7821 19.753C51.7807 19.8973 51.7963 20.011 51.8378 20.1461C51.8877 20.284 51.9457 20.3841 52.0402 20.4942C53.0265 21.6713 54.0028 22.8584 54.9855 24.0354C55.4144 24.5446 55.8005 25.0572 56.1997 25.5879C56.821 26.3659 57.4084 26.8475 58.2499 27.3572C58.4709 27.4847 58.7701 27.6681 58.9711 27.8246C59.2626 28.0523 61.7957 29.9465 61.7161 30.4262C62.2591 30.5925 60.7679 29.0392 60.4663 28.7225C60.361 28.6118 59.028 27.2484 59.5762 27.6305C59.6555 27.6846 59.6291 27.6617 59.5897 27.63C59.4831 27.5408 59.3861 27.4605 59.3738 27.4506C59.0909 27.2092 58.776 26.9892 58.5115 26.7301C57.8292 26.0646 59.3759 27.2286 58.7824 26.6707C58.6133 26.5113 58.4376 26.3416 58.427 26.335C57.8292 25.8317 57.4887 25.5516 57.2747 25.1313C57.0603 24.7106 57.1708 24.9339 57.1283 24.8585C56.4287 23.6153 55.7035 22.7864 55.0039 21.5002C54.6839 20.9069 54.1797 20.2936 53.7014 19.7437C54.1414 19.2556 54.5479 18.7679 54.9508 18.2018C55.6003 17.28 56.334 16.5628 57.0156 15.6909C57.1002 15.5697 57.2102 15.4376 57.3021 15.3167C57.9178 14.5104 58.5961 13.8001 59.2311 13.0299C59.3809 12.8512 59.5601 12.6639 59.7233 12.4962C60.181 12.0252 59.507 12.6199 59.4232 12.6926C59.8433 12.2191 60.2859 11.7155 60.7424 11.2812C61.1377 10.9134 60.1907 11.6635 60.1255 11.7155C60.4311 11.4047 61.0501 10.757 61.2282 10.3964C61.3952 9.79721 58.8025 12.3894 58.7009 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M148.453 20.4195C148.807 20.8413 149.161 21.2652 149.512 21.6981C149.784 21.994 150.065 22.286 150.34 22.5722C150.907 23.165 151.277 23.4467 151.936 23.9085C152.222 24.1061 152.517 24.2929 152.758 24.5534C153.133 24.9926 153.433 25.3519 153.869 25.7364C154.4 26.1981 154.649 26.4704 155.097 27.0204C155.335 27.3105 155.558 27.522 155.84 27.7608C156.088 27.9698 156.372 28.19 156.586 28.4358C156.97 28.8772 157.335 29.307 157.749 29.7133C158.09 30.0477 158.443 30.3535 158.778 30.6933C159.298 31.22 158.641 30.4473 158.559 30.351C159.083 30.8358 159.646 31.3523 160.123 31.8844C160.126 31.8868 160.128 31.8915 160.131 31.8962C160.31 32.1019 160.266 32.036 160.156 31.8688C160.12 31.8145 159.654 31.2011 159.641 31.182C159.836 31.3827 160.041 31.5819 160.245 31.78C160.422 31.9529 160.88 32.3959 161.108 32.4779C161.349 32.5648 161.227 32.3395 161.135 32.2014C160.921 31.9742 160.711 31.7439 160.505 31.5141C159.806 30.7109 159.07 29.9107 158.375 29.0988C158.009 28.6708 157.754 28.1653 157.426 27.7157C157.016 27.1548 156.52 26.698 156.132 26.1334C155.672 25.4648 155.44 25.1152 154.854 24.5408C154.503 24.1844 154.249 23.8274 153.944 23.4313C153.612 23.0275 153.287 22.7885 152.883 22.4812C152.326 22.067 152.015 21.8145 151.532 21.3046C151.283 21.0412 151.033 20.7801 150.782 20.5206C151.623 19.6999 152.351 18.8279 153.14 17.9366C153.34 17.7271 153.565 17.4624 153.755 17.2421C154.274 16.637 154.705 16.0413 155.178 15.398C155.384 15.1212 155.596 14.8647 155.826 14.6085C155.866 14.5575 155.96 14.4682 156.008 14.4162C156.596 13.7684 157.152 13.1398 157.699 12.4535C157.704 12.4488 157.771 12.36 157.771 12.36C157.782 12.2763 158.971 10.9776 159.149 10.7993C159.742 10.2067 158.887 10.9646 158.783 11.056C159.216 10.5922 159.657 10.1319 160.096 9.66497C160.227 9.53059 160.355 9.39745 160.495 9.26756C161.011 8.78931 160.061 9.58154 160.029 9.60515C160.012 9.61696 159.734 9.85482 159.734 9.85482C159.823 9.7672 159.914 9.66665 159.998 9.57431C160.28 9.28145 161.045 8.52397 161.196 8.1879C161.483 7.54717 159.725 9.30247 159.723 9.30389C158.88 10.1314 157.989 10.8947 157.148 11.7279C157.141 11.7326 157.069 11.8094 157.068 11.811C156.403 12.4754 155.734 13.046 155.037 13.6622C154.738 13.9288 154.478 14.1862 154.213 14.489C153.722 15.0586 153.253 15.619 152.729 16.1587C152.544 16.3655 152.282 16.6157 152.086 16.8115C151.27 17.6313 150.466 18.5308 149.625 19.3298C149.235 19.6968 148.844 20.0568 148.453 20.4195ZM163.635 14.4543C163.023 14.89 162.498 15.2481 161.929 15.7497C161.396 16.194 160.889 16.71 160.407 17.2014C159.888 17.7314 159.383 18.2713 158.855 18.7937C158.759 18.8959 158.698 18.9918 158.64 19.1212C158.586 19.2513 158.558 19.3579 158.55 19.4961C158.543 19.638 158.556 19.7417 158.595 19.8739C158.636 20.0125 158.686 20.1084 158.77 20.2184C159.744 21.567 160.493 22.7758 161.664 23.9673C161.918 24.211 162.173 24.4408 162.439 24.6732C162.727 24.889 162.97 25.1389 163.282 25.3493C163.577 25.5489 163.867 25.7619 164.169 25.9568C164.741 26.3266 165.378 26.7282 165.796 27.2677C165.837 27.3201 165.934 27.478 165.908 27.5557C166.149 27.6655 165.889 27.2025 165.882 27.1954C165.818 27.0318 165.189 26.4247 165.047 26.2893C164.85 26.1023 164.633 25.9081 164.454 25.7083C164.19 25.4109 164.175 25.4509 163.663 24.8144C163.363 24.442 163.839 24.6644 164.041 24.9103C164.244 25.1549 163.704 24.4891 163.691 24.4731C163.49 24.2612 163.331 24.1794 163.163 24.0138C163.039 23.8872 162.941 23.6864 162.858 23.5315C162.775 23.3782 162.685 23.2444 162.58 23.1053C162.292 22.7319 161.721 21.9213 161.329 20.9119C161.198 20.5293 160.818 19.9813 160.494 19.5366C160.862 19.1169 161.206 18.6891 161.555 18.2328C161.968 17.6972 162.395 17.1718 162.802 16.6322C162.818 16.6109 162.835 16.59 162.852 16.5692C163.276 16.017 163.666 15.5552 164.152 15.0607C164.333 14.8767 164.506 14.6871 164.686 14.5036C165.016 14.154 164.513 14.5826 164.441 14.6395C164.752 14.3008 165.027 13.9221 165.339 13.5979C165.631 13.2963 164.927 13.8735 164.899 13.8945C165.102 13.664 165.489 13.1846 165.571 12.9113C165.645 12.447 163.745 14.3683 163.635 14.4543ZM165.052 17.0933C164.332 17.6526 163.755 18.3228 163.088 18.9345C162.981 19.0325 162.922 19.1305 162.861 19.2616C162.804 19.3896 162.775 19.496 162.763 19.6354C162.756 19.7763 162.768 19.8803 162.807 20.0126C162.848 20.1512 162.9 20.2485 162.986 20.3588C163.422 20.9599 163.793 21.5878 164.231 22.1886C164.726 22.7951 165.426 23.4952 166.219 23.7342C166.552 23.8343 167.494 24.1439 167.747 24.3616C167.831 24.4344 168.277 24.7381 168.178 24.9018C168.542 24.8829 167.9 24.2795 167.872 24.2525C167.789 24.1772 167.71 24.1092 167.623 24.0424C167.137 23.6621 167.035 23.5701 166.575 23.1948C166.349 22.9957 166.728 23.0219 166.892 23.1634C167.057 23.3041 166.641 22.9361 166.618 22.9179C166.253 22.659 166.36 22.7381 166.02 22.3667C164.774 20.9952 165.114 20.1729 164.741 19.6578C165.165 19.1265 165.512 18.5801 165.906 18.0032C165.906 18.0032 165.925 17.9732 165.933 17.9621C166.219 17.5625 166.747 16.7978 167.045 16.5321C167.344 16.2672 166.919 16.5533 166.869 16.5845C167.063 16.3679 167.307 16.1195 167.55 15.9485C167.791 15.7839 167.225 16.0581 167.178 16.0794C167.216 16.0553 167.708 15.6217 167.722 15.449C167.759 14.9675 165.255 16.9469 165.052 17.0933ZM160.744 12.4818C159.853 13.2651 158.98 13.9518 158.14 14.806C157.307 15.6498 156.544 16.2475 155.78 17.2026C155.252 17.857 154.707 18.4182 154.127 19.0126C154.028 19.1243 153.966 19.2219 153.908 19.3615C153.854 19.4961 153.832 19.6084 153.825 19.753C153.824 19.8973 153.839 20.011 153.881 20.1461C153.931 20.284 153.989 20.3841 154.083 20.4942C155.069 21.6713 156.046 22.8584 157.028 24.0354C157.458 24.5446 157.844 25.0572 158.243 25.5879C158.864 26.3659 159.452 26.8475 160.293 27.3572C160.514 27.4847 160.813 27.6681 161.014 27.8246C161.306 28.0523 163.839 29.9465 163.759 30.4262C164.302 30.5925 162.811 29.0392 162.51 28.7225C162.404 28.6118 161.071 27.2484 161.619 27.6305C161.699 27.6846 161.672 27.6617 161.633 27.63C161.526 27.5408 161.429 27.4605 161.417 27.4506C161.134 27.2092 160.819 26.9892 160.554 26.7301C159.872 26.0646 161.419 27.2286 160.825 26.6707C160.656 26.5113 160.481 26.3416 160.47 26.335C159.872 25.8317 159.532 25.5516 159.318 25.1313C159.103 24.7106 159.214 24.9339 159.171 24.8585C158.472 23.6153 157.747 22.7864 157.047 21.5002C156.727 20.9069 156.223 20.2936 155.744 19.7437C156.184 19.2556 156.591 18.7679 156.994 18.2018C157.643 17.28 158.377 16.5628 159.059 15.6909C159.143 15.5697 159.253 15.4376 159.345 15.3167C159.961 14.5104 160.639 13.8001 161.274 13.0299C161.424 12.8512 161.603 12.6639 161.767 12.4962C162.224 12.0252 161.55 12.6199 161.466 12.6926C161.887 12.2191 162.329 11.7155 162.785 11.2812C163.181 10.9134 162.234 11.6635 162.169 11.7155C162.474 11.4047 163.093 10.757 163.271 10.3964C163.438 9.79721 160.845 12.3894 160.744 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M250.496 20.4195C250.85 20.8413 251.204 21.2652 251.555 21.6981C251.827 21.994 252.107 22.286 252.383 22.5722C252.95 23.165 253.32 23.4467 253.979 23.9085C254.265 24.1061 254.561 24.2929 254.801 24.5534C255.177 24.9926 255.477 25.3519 255.913 25.7364C256.443 26.1981 256.692 26.4704 257.14 27.0204C257.378 27.3105 257.601 27.522 257.883 27.7608C258.131 27.9698 258.415 28.19 258.629 28.4358C259.013 28.8772 259.378 29.307 259.792 29.7133C260.133 30.0477 260.486 30.3535 260.821 30.6933C261.341 31.22 260.684 30.4473 260.602 30.351C261.126 30.8358 261.689 31.3523 262.166 31.8844C262.169 31.8868 262.171 31.8915 262.173 31.8962C262.352 32.1019 262.308 32.036 262.198 31.8688C262.162 31.8145 261.696 31.2011 261.683 31.182C261.878 31.3827 262.083 31.5819 262.287 31.78C262.465 31.9529 262.923 32.3959 263.15 32.4779C263.392 32.5648 263.269 32.3395 263.177 32.2014C262.963 31.9742 262.753 31.7439 262.547 31.5141C261.848 30.7109 261.112 29.9107 260.417 29.0988C260.051 28.6708 259.797 28.1653 259.468 27.7157C259.058 27.1548 258.562 26.698 258.175 26.1334C257.714 25.4648 257.482 25.1152 256.896 24.5408C256.545 24.1844 256.291 23.8274 255.986 23.4313C255.654 23.0275 255.329 22.7885 254.925 22.4812C254.368 22.067 254.058 21.8145 253.574 21.3046C253.325 21.0412 253.075 20.7801 252.824 20.5206C253.665 19.6999 254.394 18.8279 255.183 17.9366C255.382 17.7271 255.608 17.4624 255.797 17.2421C256.316 16.637 256.747 16.0413 257.22 15.398C257.426 15.1212 257.638 14.8647 257.868 14.6085C257.908 14.5575 258.002 14.4682 258.05 14.4162C258.638 13.7684 259.194 13.1398 259.741 12.4535C259.746 12.4488 259.814 12.36 259.814 12.36C259.823 12.2763 261.013 10.9776 261.191 10.7993C261.784 10.2067 260.929 10.9646 260.825 11.056C261.258 10.5922 261.699 10.1319 262.138 9.66497C262.269 9.53059 262.398 9.39745 262.538 9.26756C263.054 8.78931 262.103 9.58154 262.071 9.60515C262.055 9.61696 261.776 9.85482 261.776 9.85482C261.865 9.7672 261.956 9.66665 262.04 9.57431C262.322 9.28145 263.088 8.52397 263.238 8.1879C263.525 7.54717 261.767 9.30247 261.765 9.30389C260.922 10.1314 260.031 10.8947 259.19 11.7279C259.183 11.7326 259.111 11.8094 259.11 11.811C258.446 12.4754 257.776 13.046 257.079 13.6622C256.78 13.9288 256.52 14.1862 256.255 14.489C255.764 15.0586 255.295 15.619 254.771 16.1587C254.586 16.3655 254.324 16.6157 254.128 16.8115C253.312 17.6313 252.508 18.5308 251.667 19.3298C251.277 19.6968 250.887 20.0568 250.496 20.4195ZM265.679 14.4543C265.066 14.89 264.542 15.2481 263.972 15.7497C263.439 16.194 262.932 16.71 262.45 17.2014C261.931 17.7314 261.426 18.2713 260.898 18.7937C260.802 18.8959 260.741 18.9918 260.683 19.1212C260.629 19.2513 260.601 19.3579 260.594 19.4961C260.586 19.638 260.598 19.7417 260.638 19.8739C260.679 20.0125 260.729 20.1084 260.813 20.2184C261.787 21.567 262.536 22.7758 263.707 23.9673C263.961 24.211 264.215 24.4408 264.482 24.6732C264.77 24.889 265.013 25.1389 265.325 25.3493C265.62 25.5489 265.91 25.7619 266.212 25.9568C266.784 26.3266 267.421 26.7282 267.84 27.2677C267.88 27.3201 267.978 27.478 267.95 27.5557C268.192 27.6655 267.932 27.2025 267.925 27.1954C267.861 27.0318 267.233 26.4247 267.09 26.2893C266.893 26.1023 266.676 25.9081 266.497 25.7083C266.233 25.4109 266.219 25.4509 265.706 24.8144C265.406 24.442 265.882 24.6644 266.084 24.9103C266.287 25.1549 265.747 24.4891 265.734 24.4731C265.533 24.2612 265.375 24.1794 265.206 24.0138C265.082 23.8872 264.984 23.6864 264.901 23.5315C264.818 23.3782 264.728 23.2444 264.623 23.1053C264.335 22.7319 263.764 21.9213 263.372 20.9119C263.241 20.5293 262.861 19.9813 262.537 19.5366C262.905 19.1169 263.249 18.6891 263.599 18.2328C264.01 17.6972 264.437 17.1718 264.845 16.6322C264.862 16.6109 264.878 16.59 264.895 16.5692C265.32 16.017 265.709 15.5552 266.195 15.0607C266.376 14.8767 266.549 14.6871 266.729 14.5036C267.059 14.154 266.556 14.5826 266.484 14.6395C266.795 14.3008 267.07 13.9221 267.383 13.5979C267.675 13.2963 266.97 13.8735 266.942 13.8945C267.145 13.664 267.532 13.1846 267.614 12.9113C267.688 12.447 265.788 14.3683 265.679 14.4543ZM267.096 17.0933C266.375 17.6526 265.798 18.3228 265.131 18.9345C265.024 19.0325 264.966 19.1305 264.905 19.2616C264.847 19.3896 264.818 19.496 264.806 19.6354C264.799 19.7763 264.811 19.8803 264.85 20.0126C264.891 20.1512 264.943 20.2485 265.029 20.3588C265.465 20.9599 265.836 21.5878 266.274 22.1886C266.769 22.7951 267.469 23.4952 268.262 23.7342C268.595 23.8343 269.537 24.1439 269.79 24.3616C269.874 24.4344 270.32 24.7381 270.222 24.9018C270.585 24.8829 269.943 24.2795 269.915 24.2525C269.832 24.1772 269.753 24.1092 269.666 24.0424C269.18 23.6621 269.078 23.5701 268.618 23.1948C268.393 22.9957 268.771 23.0219 268.935 23.1634C269.1 23.3041 268.684 22.9361 268.661 22.9179C268.296 22.659 268.403 22.7381 268.064 22.3667C266.817 20.9952 267.157 20.1729 266.784 19.6578C267.208 19.1265 267.555 18.5801 267.949 18.0032C267.949 18.0032 267.968 17.9732 267.976 17.9621C268.262 17.5625 268.79 16.7978 269.088 16.5321C269.388 16.2672 268.962 16.5533 268.912 16.5845C269.107 16.3679 269.35 16.1195 269.594 15.9485C269.834 15.7839 269.268 16.0581 269.222 16.0794C269.26 16.0553 269.752 15.6217 269.765 15.449C269.802 14.9675 267.298 16.9469 267.096 17.0933ZM262.787 12.4818C261.896 13.2651 261.023 13.9518 260.183 14.806C259.35 15.6498 258.587 16.2475 257.823 17.2026C257.296 17.857 256.75 18.4182 256.171 19.0126C256.071 19.1243 256.009 19.2219 255.951 19.3615C255.897 19.4961 255.875 19.6084 255.868 19.753C255.867 19.8973 255.883 20.011 255.924 20.1461C255.974 20.284 256.032 20.3841 256.126 20.4942C257.113 21.6713 258.089 22.8584 259.072 24.0354C259.501 24.5446 259.887 25.0572 260.286 25.5879C260.907 26.3659 261.495 26.8475 262.336 27.3572C262.557 27.4847 262.857 27.6681 263.057 27.8246C263.349 28.0523 265.882 29.9465 265.802 30.4262C266.345 30.5925 264.854 29.0392 264.552 28.7225C264.447 28.6118 263.114 27.2484 263.662 27.6305C263.742 27.6846 263.715 27.6617 263.677 27.63C263.57 27.5408 263.473 27.4605 263.461 27.4506C263.178 27.2092 262.863 26.9892 262.598 26.7301C261.916 26.0646 263.463 27.2286 262.869 26.6707C262.7 26.5113 262.525 26.3416 262.514 26.335C261.916 25.8317 261.576 25.5516 261.362 25.1313C261.147 24.7106 261.258 24.9339 261.215 24.8585C260.516 23.6153 259.79 22.7864 259.091 21.5002C258.771 20.9069 258.267 20.2936 257.788 19.7437C258.228 19.2556 258.635 18.7679 259.038 18.2018C259.687 17.28 260.421 16.5628 261.103 15.6909C261.187 15.5697 261.297 15.4376 261.389 15.3167C262.005 14.5104 262.683 13.8001 263.318 13.0299C263.468 12.8512 263.647 12.6639 263.81 12.4962C264.268 12.0252 263.594 12.6199 263.51 12.6926C263.93 12.2191 264.373 11.7155 264.829 11.2812C265.225 10.9134 264.278 11.6635 264.213 11.7155C264.518 11.4047 265.137 10.757 265.315 10.3964C265.482 9.79721 262.889 12.3894 262.787 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M352.54 20.4195C352.893 20.8413 353.248 21.2652 353.599 21.6981C353.87 21.994 354.151 22.286 354.427 22.5722C354.994 23.165 355.364 23.4467 356.023 23.9085C356.309 24.1061 356.604 24.2929 356.845 24.5534C357.22 24.9926 357.52 25.3519 357.956 25.7364C358.486 26.1981 358.735 26.4704 359.184 27.0204C359.422 27.3105 359.645 27.522 359.926 27.7608C360.175 27.9698 360.458 28.19 360.673 28.4358C361.057 28.8772 361.421 29.307 361.836 29.7133C362.177 30.0477 362.53 30.3535 362.864 30.6933C363.385 31.22 362.728 30.4473 362.645 30.351C363.17 30.8358 363.733 31.3523 364.21 31.8844C364.212 31.8868 364.214 31.8915 364.219 31.8962C364.398 32.1019 364.354 32.036 364.244 31.8688C364.208 31.8145 363.742 31.2011 363.728 31.182C363.923 31.3827 364.129 31.5819 364.333 31.78C364.51 31.9529 364.969 32.3959 365.196 32.4779C365.438 32.5648 365.315 32.3395 365.223 32.2014C365.009 31.9742 364.799 31.7439 364.593 31.5141C363.894 30.7109 363.158 29.9107 362.463 29.0988C362.097 28.6708 361.843 28.1653 361.514 27.7157C361.104 27.1548 360.608 26.698 360.221 26.1334C359.76 25.4648 359.528 25.1152 358.941 24.5408C358.591 24.1844 358.337 23.8274 358.032 23.4313C357.7 23.0275 357.375 22.7885 356.971 22.4812C356.413 22.067 356.103 21.8145 355.619 21.3046C355.371 21.0412 355.121 20.7801 354.87 20.5206C355.711 19.6999 356.439 18.8279 357.228 17.9366C357.428 17.7271 357.653 17.4624 357.843 17.2421C358.362 16.637 358.793 16.0413 359.265 15.398C359.471 15.1212 359.683 14.8647 359.914 14.6085C359.954 14.5575 360.048 14.4682 360.095 14.4162C360.684 13.7684 361.239 13.1398 361.787 12.4535C361.792 12.4488 361.86 12.36 361.86 12.36C361.869 12.2763 363.059 10.9776 363.237 10.7993C363.83 10.2067 362.975 10.9646 362.871 11.056C363.303 10.5922 363.745 10.1319 364.184 9.66497C364.315 9.53059 364.443 9.39745 364.583 9.26756C365.1 8.78931 364.149 9.58154 364.117 9.60515C364.101 9.61696 363.822 9.85482 363.822 9.85482C363.91 9.7672 364.002 9.66665 364.086 9.57431C364.368 9.28145 365.133 8.52397 365.284 8.1879C365.571 7.54717 363.812 9.30247 363.811 9.30389C362.968 10.1314 362.077 10.8947 361.236 11.7279C361.229 11.7326 361.157 11.8094 361.156 11.811C360.491 12.4754 359.822 13.046 359.125 13.6622C358.825 13.9288 358.566 14.1862 358.301 14.489C357.809 15.0586 357.341 15.619 356.816 16.1587C356.632 16.3655 356.37 16.6157 356.174 16.8115C355.358 17.6313 354.553 18.5308 353.712 19.3298C353.323 19.6968 352.931 20.0568 352.54 20.4195ZM367.722 14.4543C367.11 14.89 366.585 15.2481 366.016 15.7497C365.483 16.194 364.976 16.71 364.494 17.2014C363.975 17.7314 363.469 18.2713 362.941 18.7937C362.846 18.8959 362.785 18.9918 362.726 19.1212C362.673 19.2513 362.645 19.3579 362.637 19.4961C362.63 19.638 362.642 19.7417 362.682 19.8739C362.723 20.0125 362.773 20.1084 362.857 20.2184C363.831 21.567 364.58 22.7758 365.751 23.9673C366.004 24.211 366.259 24.4408 366.526 24.6732C366.814 24.889 367.057 25.1389 367.369 25.3493C367.664 25.5489 367.954 25.7619 368.256 25.9568C368.827 26.3266 369.465 26.7282 369.883 27.2677C369.924 27.3201 370.021 27.478 369.994 27.5557C370.236 27.6655 369.975 27.2025 369.969 27.1954C369.904 27.0318 369.276 26.4247 369.133 26.2893C368.937 26.1023 368.719 25.9081 368.541 25.7083C368.277 25.4109 368.262 25.4509 367.75 24.8144C367.45 24.442 367.925 24.6644 368.128 24.9103C368.331 25.1549 367.791 24.4891 367.778 24.4731C367.577 24.2612 367.418 24.1794 367.249 24.0138C367.125 23.8872 367.028 23.6864 366.945 23.5315C366.861 23.3782 366.772 23.2444 366.666 23.1053C366.379 22.7319 365.808 21.9213 365.416 20.9119C365.285 20.5293 364.905 19.9813 364.58 19.5366C364.949 19.1169 365.293 18.6891 365.642 18.2328C366.054 17.6972 366.481 17.1718 366.889 16.6322C366.906 16.6109 366.922 16.59 366.939 16.5692C367.363 16.017 367.753 15.5552 368.239 15.0607C368.42 14.8767 368.592 14.6871 368.772 14.5036C369.103 14.154 368.6 14.5826 368.528 14.6395C368.838 14.3008 369.114 13.9221 369.426 13.5979C369.718 13.2963 369.013 13.8735 368.986 13.8945C369.189 13.664 369.576 13.1846 369.658 12.9113C369.732 12.447 367.832 14.3683 367.722 14.4543ZM369.139 17.0933C368.419 17.6526 367.841 18.3228 367.174 18.9345C367.068 19.0325 367.009 19.1305 366.948 19.2616C366.89 19.3896 366.862 19.496 366.85 19.6354C366.843 19.7763 366.855 19.8803 366.894 20.0126C366.935 20.1512 366.986 20.2485 367.073 20.3588C367.509 20.9599 367.88 21.5878 368.318 22.1886C368.813 22.7951 369.512 23.4952 370.306 23.7342C370.639 23.8343 371.581 24.1439 371.834 24.3616C371.918 24.4344 372.364 24.7381 372.265 24.9018C372.629 24.8829 371.986 24.2795 371.959 24.2525C371.876 24.1772 371.796 24.1092 371.71 24.0424C371.224 23.6621 371.122 23.5701 370.661 23.1948C370.436 22.9957 370.814 23.0219 370.979 23.1634C371.144 23.3041 370.728 22.9361 370.705 22.9179C370.34 22.659 370.447 22.7381 370.107 22.3667C368.86 20.9952 369.2 20.1729 368.827 19.6578C369.252 19.1265 369.599 18.5801 369.993 18.0032C369.993 18.0032 370.011 17.9732 370.019 17.9621C370.306 17.5625 370.834 16.7978 371.132 16.5321C371.431 16.2672 371.005 16.5533 370.956 16.5845C371.15 16.3679 371.394 16.1195 371.637 15.9485C371.878 15.7839 371.312 16.0581 371.265 16.0794C371.303 16.0553 371.795 15.6217 371.808 15.449C371.846 14.9675 369.341 16.9469 369.139 17.0933ZM364.831 12.4818C363.94 13.2651 363.067 13.9518 362.227 14.806C361.393 15.6498 360.631 16.2475 359.867 17.2026C359.339 17.857 358.794 18.4182 358.214 19.0126C358.115 19.1243 358.052 19.2219 357.994 19.3615C357.941 19.4961 357.919 19.6084 357.912 19.753C357.911 19.8973 357.926 20.011 357.968 20.1461C358.018 20.284 358.076 20.3841 358.17 20.4942C359.156 21.6713 360.133 22.8584 361.115 24.0354C361.544 24.5446 361.93 25.0572 362.33 25.5879C362.951 26.3659 363.538 26.8475 364.38 27.3572C364.601 27.4847 364.9 27.6681 365.101 27.8246C365.392 28.0523 367.926 29.9465 367.846 30.4262C368.389 30.5925 366.898 29.0392 366.596 28.7225C366.491 28.6118 365.158 27.2484 365.706 27.6305C365.785 27.6846 365.759 27.6617 365.72 27.63C365.614 27.5408 365.517 27.4605 365.504 27.4506C365.221 27.2092 364.907 26.9892 364.642 26.7301C363.96 26.0646 365.507 27.2286 364.913 26.6707C364.744 26.5113 364.568 26.3416 364.558 26.335C363.96 25.8317 363.619 25.5516 363.405 25.1313C363.191 24.7106 363.301 24.9339 363.259 24.8585C362.559 23.6153 361.834 22.7864 361.135 21.5002C360.814 20.9069 360.31 20.2936 359.832 19.7437C360.272 19.2556 360.678 18.7679 361.081 18.2018C361.731 17.28 362.465 16.5628 363.146 15.6909C363.231 15.5697 363.341 15.4376 363.433 15.3167C364.048 14.5104 364.727 13.8001 365.362 13.0299C365.511 12.8512 365.691 12.6639 365.854 12.4962C366.312 12.0252 365.638 12.6199 365.554 12.6926C365.974 12.2191 366.416 11.7155 366.873 11.2812C367.268 10.9134 366.321 11.6635 366.256 11.7155C366.562 11.4047 367.181 10.757 367.359 10.3964C367.526 9.79721 364.932 12.3894 364.831 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.3674 20.4195C16.0137 20.8413 15.6592 21.2652 15.3085 21.6981C15.0366 21.994 14.7558 22.286 14.4804 22.5722C13.9129 23.165 13.5433 23.4467 12.8844 23.9085C12.5982 24.1061 12.3029 24.2929 12.0623 24.5534C11.687 24.9926 11.3868 25.3519 10.9509 25.7364C10.4207 26.1981 10.1715 26.4704 9.72325 27.0204C9.48542 27.3105 9.26224 27.522 8.98073 27.7608C8.73228 27.9698 8.44864 28.19 8.23419 28.4358C7.85018 28.8772 7.48553 29.307 7.07105 29.7133C6.73002 30.0477 6.37718 30.3535 6.04253 30.6933C5.52224 31.22 6.17903 30.4473 6.26169 30.351C5.73716 30.8358 5.17436 31.3523 4.6973 31.8844C4.69423 31.8868 4.69257 31.8915 4.68903 31.8962C4.51049 32.1019 4.55465 32.036 4.66423 31.8688C4.70013 31.8145 5.16633 31.2011 5.17979 31.182C4.98472 31.3827 4.77925 31.5819 4.57543 31.78C4.39807 31.9529 3.9399 32.3959 3.71199 32.4779C3.47063 32.5648 3.5932 32.3395 3.68531 32.2014C3.89928 31.9742 4.10947 31.7439 4.31541 31.5141C5.01424 30.7109 5.74991 29.9107 6.4452 29.0988C6.81174 28.6708 7.06586 28.1653 7.39413 27.7157C7.8046 27.1548 8.30008 26.698 8.68788 26.1334C9.14841 25.4648 9.38056 25.1152 9.96674 24.5408C10.3172 24.1844 10.5711 23.8274 10.876 23.4313C11.2085 23.0275 11.5335 22.7885 11.9371 22.4812C12.4947 22.067 12.805 21.8145 13.2887 21.3046C13.5372 21.0412 13.7873 20.7801 14.0386 20.5206C13.1976 19.6999 12.469 18.8279 11.6797 17.9366C11.4806 17.7271 11.2551 17.4624 11.0656 17.2421C10.5465 16.637 10.1151 16.0413 9.64271 15.398C9.43677 15.1212 9.22469 14.8647 8.99419 14.6085C8.95428 14.5575 8.86028 14.4682 8.81281 14.4162C8.22427 13.7684 7.6688 13.1398 7.12112 12.4535C7.11616 12.4488 7.04885 12.36 7.04885 12.36C7.0387 12.2763 5.84934 10.9776 5.67103 10.7993C5.07824 10.2067 5.93342 10.9646 6.03686 11.056C5.60467 10.5922 5.16326 10.1319 4.72422 9.66497C4.59315 9.53059 4.46491 9.39745 4.32486 9.26756C3.80859 8.78931 4.75965 9.58154 4.79106 9.60515C4.80877 9.61696 5.08651 9.85482 5.08651 9.85482C4.99771 9.7672 4.90584 9.66665 4.82223 9.57431C4.54001 9.28145 3.77481 8.52397 3.62437 8.1879C3.33743 7.54717 5.09572 9.30247 5.0969 9.30389C5.9405 10.1314 6.83157 10.8947 7.67234 11.7279C7.67966 11.7326 7.75122 11.8094 7.75264 11.811C8.41699 12.4754 9.08653 13.046 9.78347 13.6622C10.0827 13.9288 10.3423 14.1862 10.6075 14.489C11.0987 15.0586 11.567 15.619 12.0918 16.1587C12.2765 16.3655 12.5386 16.6157 12.734 16.8115C13.5506 17.6313 14.3548 18.5308 15.1958 19.3298C15.585 19.6968 15.9761 20.0568 16.3674 20.4195ZM1.18497 14.4543C1.79712 14.89 2.32166 15.2481 2.8913 15.7497C3.4241 16.194 3.93092 16.71 4.41318 17.2014C4.93229 17.7314 5.43769 18.2713 5.96554 18.7937C6.06142 18.8959 6.12188 18.9918 6.18069 19.1212C6.2343 19.2513 6.26217 19.3579 6.26996 19.4961C6.27704 19.638 6.26476 19.7417 6.22532 19.8739C6.18447 20.0125 6.13416 20.1084 6.05009 20.2184C5.07588 21.567 4.32745 22.7758 3.15628 23.9673C2.90264 24.211 2.64781 24.4408 2.38141 24.6732C2.09328 24.889 1.85049 25.1389 1.53828 25.3493C1.2433 25.5489 0.953282 25.7619 0.650983 25.9568C0.0796857 26.3266 -0.557739 26.7282 -0.975997 27.2677C-1.01662 27.3201 -1.11416 27.478 -1.08723 27.5557C-1.32836 27.6655 -1.06834 27.2025 -1.06149 27.1954C-0.997253 27.0318 -0.369038 26.4247 -0.226391 26.2893C-0.0296607 26.1023 0.187616 25.9081 0.366161 25.7083C0.630436 25.4109 0.644843 25.4509 1.15733 24.8144C1.45727 24.442 0.981622 24.6644 0.779224 24.9103C0.576353 25.1549 1.11648 24.4891 1.12947 24.4731C1.32997 24.2612 1.48892 24.1794 1.65754 24.0138C1.78153 23.8872 1.87907 23.6864 1.9622 23.5315C2.04557 23.3782 2.13532 23.2444 2.24065 23.1053C2.52807 22.7319 3.09913 21.9213 3.49141 20.9119C3.62225 20.5293 4.00225 19.9813 4.32651 19.5366C3.95808 19.1169 3.61445 18.6891 3.26492 18.2328C2.8528 17.6972 2.42581 17.1718 2.01794 16.6322C2.00188 16.6109 1.98488 16.59 1.96834 16.5692C1.54371 16.017 1.1545 15.5552 0.66846 15.0607C0.487081 14.8767 0.314676 14.6871 0.134714 14.5036C-0.195925 14.154 0.307118 14.5826 0.379151 14.6395C0.0688221 14.3008 -0.206553 13.9221 -0.519006 13.5979C-0.81115 13.2963 -0.106417 13.8735 -0.0787849 13.8945C-0.281892 13.664 -0.668976 13.1846 -0.750927 12.9113C-0.824612 12.447 1.07491 14.3683 1.18497 14.4543ZM-0.232059 17.0933C0.488026 17.6526 1.0657 18.3228 1.73265 18.9345C1.83916 19.0325 1.89796 19.1305 1.9589 19.2616C2.01676 19.3896 2.0451 19.496 2.05691 19.6354C2.06423 19.7763 2.05218 19.8803 2.01345 20.0126C1.97236 20.1512 1.92064 20.2485 1.83396 20.3588C1.39846 20.9599 1.0272 21.5878 0.589107 22.1886C0.0940926 22.7951 -0.605445 23.4952 -1.39898 23.7342C-1.73222 23.8343 -2.67359 24.1439 -2.92653 24.3616C-3.01108 24.4344 -3.45697 24.7381 -3.35802 24.9018C-3.72172 24.8829 -3.07934 24.2795 -3.05194 24.2525C-2.96833 24.1772 -2.88945 24.1092 -2.80278 24.0424C-2.31674 23.6621 -2.21495 23.5701 -1.75418 23.1948C-1.52935 22.9957 -1.90722 23.0219 -2.07159 23.1634C-2.23691 23.3041 -1.82054 22.9361 -1.79787 22.9179C-1.43299 22.659 -1.5395 22.7381 -1.20012 22.3667C0.046622 20.9952 -0.293228 20.1729 0.0796859 19.6578C-0.345186 19.1265 -0.691648 18.5801 -1.08558 18.0032C-1.08558 18.0032 -1.10471 17.9732 -1.1125 17.9621C-1.39874 17.5625 -1.92658 16.7978 -2.22487 16.5321C-2.52433 16.2672 -2.09828 16.5533 -2.04916 16.5845C-2.24305 16.3679 -2.48655 16.1195 -2.73004 15.9485C-2.97093 15.7839 -2.40507 16.0581 -2.35807 16.0794C-2.39609 16.0553 -2.88804 15.6217 -2.90126 15.449C-2.93881 14.9675 -0.434221 16.9469 -0.232059 17.0933ZM4.0764 12.4818C4.96724 13.2651 5.84036 13.9518 6.68019 14.806C7.51363 15.6498 8.27623 16.2475 9.04048 17.2026C9.56761 17.857 10.1129 18.4182 10.693 19.0126C10.7922 19.1243 10.8547 19.2219 10.9126 19.3615C10.9665 19.4961 10.9882 19.6084 10.995 19.753C10.9964 19.8973 10.9809 20.011 10.9393 20.1461C10.8895 20.284 10.8316 20.3841 10.7369 20.4942C9.75088 21.6713 8.77431 22.8584 7.79184 24.0354C7.36272 24.5446 6.97658 25.0572 6.57745 25.5879C5.95609 26.3659 5.36873 26.8475 4.52725 27.3572C4.3062 27.4847 4.00697 27.6681 3.80623 27.8246C3.51455 28.0523 0.981387 29.9465 1.06098 30.4262C0.518019 30.5925 2.0092 29.0392 2.31079 28.7225C2.41612 28.6118 3.74907 27.2484 3.20092 27.6305C3.12157 27.6846 3.14825 27.6617 3.18746 27.63C3.29397 27.5408 3.39104 27.4605 3.40332 27.4506C3.68625 27.2092 4.00107 26.9892 4.26558 26.7301C4.94788 26.0646 3.40143 27.2286 3.99469 26.6707C4.16379 26.5113 4.3395 26.3416 4.35013 26.335C4.94788 25.8317 5.28843 25.5516 5.5024 25.1313C5.71685 24.7106 5.60632 24.9339 5.64883 24.8585C6.34837 23.6153 7.07365 22.7864 7.77319 21.5002C8.0932 20.9069 8.59742 20.2936 9.0759 19.7437C8.63592 19.2556 8.22923 18.7679 7.82656 18.2018C7.17686 17.28 6.44307 16.5628 5.76148 15.6909C5.67693 15.5697 5.56688 15.4376 5.47501 15.3167C4.85931 14.5104 4.18103 13.8001 3.54596 13.0299C3.39623 12.8512 3.21698 12.6639 3.05378 12.4962C2.59609 12.0252 3.27012 12.6199 3.35396 12.6926C2.93381 12.2191 2.49123 11.7155 2.03471 11.2812C1.63936 10.9134 2.5864 11.6635 2.65159 11.7155C2.34598 11.4047 1.72721 10.757 1.5489 10.3964C1.38193 9.79721 3.97485 12.3894 4.0764 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M118.411 20.4195C118.057 20.8413 117.702 21.2652 117.352 21.6981C117.08 21.994 116.799 22.286 116.524 22.5722C115.956 23.165 115.587 23.4467 114.928 23.9085C114.642 24.1061 114.346 24.2929 114.106 24.5534C113.731 24.9926 113.43 25.3519 112.994 25.7364C112.464 26.1981 112.215 26.4704 111.767 27.0204C111.529 27.3105 111.306 27.522 111.024 27.7608C110.776 27.9698 110.492 28.19 110.278 28.4358C109.894 28.8772 109.529 29.307 109.115 29.7133C108.774 30.0477 108.421 30.3535 108.086 30.6933C107.566 31.22 108.223 30.4473 108.305 30.351C107.781 30.8358 107.218 31.3523 106.741 31.8844C106.738 31.8868 106.736 31.8915 106.733 31.8962C106.554 32.1019 106.598 32.036 106.708 31.8688C106.743 31.8145 107.21 31.2011 107.223 31.182C107.028 31.3827 106.823 31.5819 106.619 31.78C106.441 31.9529 105.983 32.3959 105.756 32.4779C105.514 32.5648 105.637 32.3395 105.729 32.2014C105.943 31.9742 106.153 31.7439 106.359 31.5141C107.058 30.7109 107.793 29.9107 108.489 29.0988C108.855 28.6708 109.109 28.1653 109.438 27.7157C109.848 27.1548 110.344 26.698 110.731 26.1334C111.192 25.4648 111.424 25.1152 112.01 24.5408C112.361 24.1844 112.615 23.8274 112.92 23.4313C113.252 23.0275 113.577 22.7885 113.981 22.4812C114.538 22.067 114.848 21.8145 115.332 21.3046C115.581 21.0412 115.831 20.7801 116.082 20.5206C115.241 19.6999 114.512 18.8279 113.723 17.9366C113.524 17.7271 113.298 17.4624 113.109 17.2421C112.59 16.637 112.159 16.0413 111.686 15.398C111.48 15.1212 111.268 14.8647 111.038 14.6085C110.998 14.5575 110.904 14.4682 110.856 14.4162C110.268 13.7684 109.712 13.1398 109.165 12.4535C109.159 12.4488 109.092 12.36 109.092 12.36C109.082 12.2763 107.893 10.9776 107.715 10.7993C107.122 10.2067 107.977 10.9646 108.08 11.056C107.648 10.5922 107.207 10.1319 106.768 9.66497C106.637 9.53059 106.508 9.39745 106.368 9.26756C105.852 8.78931 106.803 9.58154 106.835 9.60515C106.852 9.61696 107.13 9.85482 107.13 9.85482C107.041 9.7672 106.949 9.66665 106.866 9.57431C106.584 9.28145 105.818 8.52397 105.668 8.1879C105.381 7.54717 107.139 9.30247 107.14 9.30389C107.984 10.1314 108.875 10.8947 109.716 11.7279C109.723 11.7326 109.795 11.8094 109.796 11.811C110.46 12.4754 111.13 13.046 111.827 13.6622C112.126 13.9288 112.386 14.1862 112.651 14.489C113.142 15.0586 113.611 15.619 114.135 16.1587C114.32 16.3655 114.582 16.6157 114.778 16.8115C115.594 17.6313 116.398 18.5308 117.239 19.3298C117.629 19.6968 118.02 20.0568 118.411 20.4195ZM103.228 14.4543C103.84 14.89 104.365 15.2481 104.935 15.7497C105.468 16.194 105.974 16.71 106.457 17.2014C106.976 17.7314 107.481 18.2713 108.009 18.7937C108.105 18.8959 108.165 18.9918 108.224 19.1212C108.278 19.2513 108.306 19.3579 108.313 19.4961C108.321 19.638 108.308 19.7417 108.269 19.8739C108.228 20.0125 108.177 20.1084 108.093 20.2184C107.119 21.567 106.371 22.7758 105.2 23.9673C104.946 24.211 104.691 24.4408 104.425 24.6732C104.137 24.889 103.894 25.1389 103.582 25.3493C103.287 25.5489 102.997 25.7619 102.695 25.9568C102.123 26.3266 101.486 26.7282 101.067 27.2677C101.027 27.3201 100.929 27.478 100.956 27.5557C100.715 27.6655 100.975 27.2025 100.982 27.1954C101.046 27.0318 101.674 26.4247 101.817 26.2893C102.014 26.1023 102.231 25.9081 102.41 25.7083C102.674 25.4109 102.688 25.4509 103.201 24.8144C103.501 24.442 103.025 24.6644 102.823 24.9103C102.62 25.1549 103.16 24.4891 103.173 24.4731C103.374 24.2612 103.532 24.1794 103.701 24.0138C103.825 23.8872 103.922 23.6864 104.006 23.5315C104.089 23.3782 104.179 23.2444 104.284 23.1053C104.572 22.7319 105.143 21.9213 105.535 20.9119C105.666 20.5293 106.046 19.9813 106.37 19.5366C106.001 19.1169 105.658 18.6891 105.308 18.2328C104.896 17.6972 104.469 17.1718 104.062 16.6322C104.045 16.6109 104.028 16.59 104.012 16.5692C103.587 16.017 103.198 15.5552 102.712 15.0607C102.531 14.8767 102.358 14.6871 102.178 14.5036C101.848 14.154 102.35 14.5826 102.423 14.6395C102.112 14.3008 101.837 13.9221 101.524 13.5979C101.232 13.2963 101.937 13.8735 101.965 13.8945C101.761 13.664 101.375 13.1846 101.293 12.9113C101.219 12.447 103.118 14.3683 103.228 14.4543ZM101.811 17.0933C102.532 17.6526 103.109 18.3228 103.776 18.9345C103.883 19.0325 103.941 19.1305 104.002 19.2616C104.06 19.3896 104.088 19.496 104.1 19.6354C104.108 19.7763 104.096 19.8803 104.057 20.0126C104.016 20.1512 103.964 20.2485 103.878 20.3588C103.442 20.9599 103.071 21.5878 102.633 22.1886C102.138 22.7951 101.438 23.4952 100.644 23.7342C100.311 23.8343 99.37 24.1439 99.117 24.3616C99.0325 24.4344 98.5864 24.7381 98.6853 24.9018C98.3219 24.8829 98.9642 24.2795 98.9914 24.2525C99.075 24.1772 99.1541 24.1092 99.2406 24.0424C99.7268 23.6621 99.8286 23.5701 100.289 23.1948C100.514 22.9957 100.136 23.0219 99.9717 23.1634C99.8067 23.3041 100.223 22.9361 100.246 22.9179C100.61 22.659 100.504 22.7381 100.843 22.3667C102.09 20.9952 101.75 20.1729 102.123 19.6578C101.698 19.1265 101.352 18.5801 100.958 18.0032C100.958 18.0032 100.939 17.9732 100.931 17.9621C100.645 17.5625 100.117 16.7978 99.8185 16.5321C99.5192 16.2672 99.9453 16.5533 99.9944 16.5845C99.8003 16.3679 99.557 16.1195 99.3133 15.9485C99.0724 15.7839 99.6385 16.0581 99.6853 16.0794C99.6472 16.0553 99.1555 15.6217 99.1421 15.449C99.1048 14.9675 101.609 16.9469 101.811 17.0933ZM106.12 12.4818C107.011 13.2651 107.884 13.9518 108.724 14.806C109.557 15.6498 110.32 16.2475 111.084 17.2026C111.611 17.857 112.156 18.4182 112.736 19.0126C112.836 19.1243 112.898 19.2219 112.956 19.3615C113.01 19.4961 113.032 19.6084 113.039 19.753C113.04 19.8973 113.024 20.011 112.983 20.1461C112.933 20.284 112.875 20.3841 112.78 20.4942C111.794 21.6713 110.818 22.8584 109.835 24.0354C109.406 24.5446 109.02 25.0572 108.621 25.5879C108 26.3659 107.412 26.8475 106.571 27.3572C106.35 27.4847 106.05 27.6681 105.85 27.8246C105.558 28.0523 103.025 29.9465 103.105 30.4262C102.562 30.5925 104.053 29.0392 104.354 28.7225C104.46 28.6118 105.793 27.2484 105.244 27.6305C105.165 27.6846 105.192 27.6617 105.231 27.63C105.338 27.5408 105.435 27.4605 105.447 27.4506C105.73 27.2092 106.045 26.9892 106.309 26.7301C106.991 26.0646 105.445 27.2286 106.038 26.6707C106.207 26.5113 106.383 26.3416 106.394 26.335C106.991 25.8317 107.332 25.5516 107.546 25.1313C107.76 24.7106 107.65 24.9339 107.692 24.8585C108.392 23.6153 109.117 22.7864 109.817 21.5002C110.137 20.9069 110.641 20.2936 111.119 19.7437C110.679 19.2556 110.273 18.7679 109.87 18.2018C109.22 17.28 108.487 16.5628 107.805 15.6909C107.72 15.5697 107.61 15.4376 107.518 15.3167C106.903 14.5104 106.225 13.8001 105.59 13.0299C105.44 12.8512 105.261 12.6639 105.097 12.4962C104.64 12.0252 105.314 12.6199 105.398 12.6926C104.977 12.2191 104.535 11.7155 104.078 11.2812C103.683 10.9134 104.63 11.6635 104.695 11.7155C104.39 11.4047 103.771 10.757 103.592 10.3964C103.426 9.79721 106.018 12.3894 106.12 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M220.454 20.4195C220.1 20.8413 219.745 21.2652 219.395 21.6981C219.123 21.994 218.842 22.286 218.567 22.5722C217.999 23.165 217.63 23.4467 216.971 23.9085C216.684 24.1061 216.389 24.2929 216.149 24.5534C215.773 24.9926 215.473 25.3519 215.037 25.7364C214.507 26.1981 214.258 26.4704 213.81 27.0204C213.572 27.3105 213.349 27.522 213.067 27.7608C212.819 27.9698 212.535 28.19 212.321 28.4358C211.936 28.8772 211.572 29.307 211.158 29.7133C210.817 30.0477 210.464 30.3535 210.129 30.6933C209.609 31.22 210.265 30.4473 210.348 30.351C209.824 30.8358 209.261 31.3523 208.784 31.8844C208.781 31.8868 208.779 31.8915 208.776 31.8962C208.597 32.1019 208.641 32.036 208.751 31.8688C208.786 31.8145 209.253 31.2011 209.266 31.182C209.071 31.3827 208.866 31.5819 208.662 31.78C208.484 31.9529 208.026 32.3959 207.798 32.4779C207.557 32.5648 207.68 32.3395 207.772 32.2014C207.986 31.9742 208.196 31.7439 208.402 31.5141C209.101 30.7109 209.836 29.9107 210.532 29.0988C210.898 28.6708 211.152 28.1653 211.48 27.7157C211.891 27.1548 212.387 26.698 212.774 26.1334C213.235 25.4648 213.467 25.1152 214.053 24.5408C214.404 24.1844 214.657 23.8274 214.962 23.4313C215.295 23.0275 215.62 22.7885 216.024 22.4812C216.581 22.067 216.891 21.8145 217.375 21.3046C217.624 21.0412 217.874 20.7801 218.125 20.5206C217.284 19.6999 216.555 18.8279 215.766 17.9366C215.567 17.7271 215.341 17.4624 215.152 17.2421C214.633 16.637 214.201 16.0413 213.729 15.398C213.523 15.1212 213.311 14.8647 213.081 14.6085C213.041 14.5575 212.947 14.4682 212.899 14.4162C212.311 13.7684 211.755 13.1398 211.208 12.4535C211.202 12.4488 211.135 12.36 211.135 12.36C211.125 12.2763 209.936 10.9776 209.757 10.7993C209.165 10.2067 210.02 10.9646 210.123 11.056C209.691 10.5922 209.25 10.1319 208.811 9.66497C208.679 9.53059 208.551 9.39745 208.411 9.26756C207.895 8.78931 208.846 9.58154 208.878 9.60515C208.895 9.61696 209.173 9.85482 209.173 9.85482C209.084 9.7672 208.992 9.66665 208.909 9.57431C208.626 9.28145 207.861 8.52397 207.711 8.1879C207.424 7.54717 209.182 9.30247 209.183 9.30389C210.027 10.1314 210.918 10.8947 211.759 11.7279C211.766 11.7326 211.838 11.8094 211.839 11.811C212.503 12.4754 213.173 13.046 213.87 13.6622C214.169 13.9288 214.429 14.1862 214.694 14.489C215.185 15.0586 215.653 15.619 216.178 16.1587C216.363 16.3655 216.625 16.6157 216.82 16.8115C217.637 17.6313 218.441 18.5308 219.282 19.3298C219.672 19.6968 220.062 20.0568 220.454 20.4195ZM205.271 14.4543C205.883 14.89 206.408 15.2481 206.978 15.7497C207.511 16.194 208.017 16.71 208.499 17.2014C209.019 17.7314 209.524 18.2713 210.052 18.7937C210.148 18.8959 210.208 18.9918 210.267 19.1212C210.321 19.2513 210.348 19.3579 210.356 19.4961C210.364 19.638 210.351 19.7417 210.312 19.8739C210.271 20.0125 210.22 20.1084 210.136 20.2184C209.162 21.567 208.414 22.7758 207.243 23.9673C206.989 24.211 206.734 24.4408 206.468 24.6732C206.18 24.889 205.937 25.1389 205.625 25.3493C205.33 25.5489 205.04 25.7619 204.738 25.9568C204.166 26.3266 203.529 26.7282 203.11 27.2677C203.07 27.3201 202.972 27.478 202.999 27.5557C202.758 27.6655 203.018 27.2025 203.025 27.1954C203.089 27.0318 203.717 26.4247 203.86 26.2893C204.057 26.1023 204.274 25.9081 204.453 25.7083C204.717 25.4109 204.731 25.4509 205.244 24.8144C205.544 24.442 205.068 24.6644 204.866 24.9103C204.663 25.1549 205.203 24.4891 205.216 24.4731C205.416 24.2612 205.575 24.1794 205.744 24.0138C205.868 23.8872 205.965 23.6864 206.049 23.5315C206.132 23.3782 206.222 23.2444 206.327 23.1053C206.615 22.7319 207.186 21.9213 207.578 20.9119C207.709 20.5293 208.089 19.9813 208.413 19.5366C208.044 19.1169 207.701 18.6891 207.351 18.2328C206.939 17.6972 206.512 17.1718 206.104 16.6322C206.088 16.6109 206.071 16.59 206.055 16.5692C205.63 16.017 205.241 15.5552 204.755 15.0607C204.573 14.8767 204.401 14.6871 204.221 14.5036C203.891 14.154 204.393 14.5826 204.466 14.6395C204.155 14.3008 203.88 13.9221 203.567 13.5979C203.275 13.2963 203.98 13.8735 204.008 13.8945C203.804 13.664 203.418 13.1846 203.336 12.9113C203.262 12.447 205.161 14.3683 205.271 14.4543ZM203.854 17.0933C204.574 17.6526 205.152 18.3228 205.819 18.9345C205.925 19.0325 205.984 19.1305 206.045 19.2616C206.103 19.3896 206.131 19.496 206.143 19.6354C206.151 19.7763 206.139 19.8803 206.1 20.0126C206.059 20.1512 206.007 20.2485 205.92 20.3588C205.485 20.9599 205.113 21.5878 204.675 22.1886C204.181 22.7951 203.481 23.4952 202.687 23.7342C202.354 23.8343 201.413 24.1439 201.16 24.3616C201.075 24.4344 200.629 24.7381 200.728 24.9018C200.365 24.8829 201.007 24.2795 201.034 24.2525C201.118 24.1772 201.197 24.1092 201.284 24.0424C201.77 23.6621 201.871 23.5701 202.332 23.1948C202.557 22.9957 202.179 23.0219 202.015 23.1634C201.85 23.3041 202.266 22.9361 202.289 22.9179C202.653 22.659 202.547 22.7381 202.886 22.3667C204.133 20.9952 203.793 20.1729 204.166 19.6578C203.741 19.1265 203.395 18.5801 203.001 18.0032C203.001 18.0032 202.982 17.9732 202.974 17.9621C202.688 17.5625 202.16 16.7978 201.861 16.5321C201.562 16.2672 201.988 16.5533 202.037 16.5845C201.843 16.3679 201.6 16.1195 201.356 15.9485C201.115 15.7839 201.681 16.0581 201.728 16.0794C201.69 16.0553 201.198 15.6217 201.185 15.449C201.147 14.9675 203.652 16.9469 203.854 17.0933ZM208.163 12.4818C209.054 13.2651 209.927 13.9518 210.767 14.806C211.6 15.6498 212.363 16.2475 213.127 17.2026C213.654 17.857 214.199 18.4182 214.779 19.0126C214.878 19.1243 214.941 19.2219 214.999 19.3615C215.053 19.4961 215.075 19.6084 215.081 19.753C215.083 19.8973 215.067 20.011 215.026 20.1461C214.976 20.284 214.918 20.3841 214.823 20.4942C213.837 21.6713 212.861 22.8584 211.878 24.0354C211.449 24.5446 211.063 25.0572 210.664 25.5879C210.043 26.3659 209.455 26.8475 208.614 27.3572C208.392 27.4847 208.093 27.6681 207.893 27.8246C207.601 28.0523 205.068 29.9465 205.147 30.4262C204.605 30.5925 206.096 29.0392 206.397 28.7225C206.502 28.6118 207.835 27.2484 207.287 27.6305C207.208 27.6846 207.235 27.6617 207.274 27.63C207.38 27.5408 207.477 27.4605 207.49 27.4506C207.773 27.2092 208.087 26.9892 208.352 26.7301C209.034 26.0646 207.488 27.2286 208.081 26.6707C208.25 26.5113 208.426 26.3416 208.437 26.335C209.034 25.8317 209.375 25.5516 209.589 25.1313C209.803 24.7106 209.693 24.9339 209.735 24.8585C210.435 23.6153 211.16 22.7864 211.859 21.5002C212.179 20.9069 212.684 20.2936 213.162 19.7437C212.722 19.2556 212.316 18.7679 211.913 18.2018C211.263 17.28 210.53 16.5628 209.848 15.6909C209.763 15.5697 209.653 15.4376 209.561 15.3167C208.946 14.5104 208.268 13.8001 207.632 13.0299C207.483 12.8512 207.304 12.6639 207.14 12.4962C206.683 12.0252 207.357 12.6199 207.44 12.6926C207.02 12.2191 206.578 11.7155 206.121 11.2812C205.726 10.9134 206.673 11.6635 206.738 11.7155C206.432 11.4047 205.814 10.757 205.635 10.3964C205.468 9.79721 208.061 12.3894 208.163 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M322.497 20.4195C322.144 20.8413 321.789 21.2652 321.438 21.6981C321.167 21.994 320.886 22.286 320.61 22.5722C320.043 23.165 319.673 23.4467 319.014 23.9085C318.728 24.1061 318.433 24.2929 318.192 24.5534C317.817 24.9926 317.517 25.3519 317.081 25.7364C316.551 26.1981 316.301 26.4704 315.853 27.0204C315.615 27.3105 315.392 27.522 315.111 27.7608C314.862 27.9698 314.579 28.19 314.364 28.4358C313.98 28.8772 313.615 29.307 313.201 29.7133C312.86 30.0477 312.507 30.3535 312.172 30.6933C311.652 31.22 312.309 30.4473 312.392 30.351C311.867 30.8358 311.304 31.3523 310.827 31.8844C310.825 31.8868 310.822 31.8915 310.818 31.8962C310.639 32.1019 310.683 32.036 310.793 31.8688C310.829 31.8145 311.295 31.2011 311.308 31.182C311.113 31.3827 310.908 31.5819 310.704 31.78C310.527 31.9529 310.069 32.3959 309.841 32.4779C309.599 32.5648 309.722 32.3395 309.814 32.2014C310.028 31.9742 310.238 31.7439 310.444 31.5141C311.143 30.7109 311.879 29.9107 312.574 29.0988C312.94 28.6708 313.195 28.1653 313.523 27.7157C313.933 27.1548 314.429 26.698 314.817 26.1334C315.277 25.4648 315.509 25.1152 316.095 24.5408C316.446 24.1844 316.7 23.8274 317.005 23.4313C317.337 23.0275 317.662 22.7885 318.066 22.4812C318.623 22.067 318.934 21.8145 319.417 21.3046C319.666 21.0412 319.916 20.7801 320.167 20.5206C319.326 19.6999 318.598 18.8279 317.808 17.9366C317.609 17.7271 317.384 17.4624 317.194 17.2421C316.675 16.637 316.244 16.0413 315.771 15.398C315.565 15.1212 315.353 14.8647 315.123 14.6085C315.083 14.5575 314.989 14.4682 314.942 14.4162C314.353 13.7684 313.798 13.1398 313.25 12.4535C313.245 12.4488 313.178 12.36 313.178 12.36C313.168 12.2763 311.978 10.9776 311.8 10.7993C311.207 10.2067 312.062 10.9646 312.166 11.056C311.733 10.5922 311.292 10.1319 310.853 9.66497C310.722 9.53059 310.594 9.39745 310.454 9.26756C309.937 8.78931 310.888 9.58154 310.92 9.60515C310.939 9.61696 311.215 9.85482 311.215 9.85482C311.126 9.7672 311.035 9.66665 310.951 9.57431C310.669 9.28145 309.904 8.52397 309.753 8.1879C309.466 7.54717 311.224 9.30247 311.226 9.30389C312.069 10.1314 312.96 10.8947 313.801 11.7279C313.808 11.7326 313.88 11.8094 313.881 11.811C314.546 12.4754 315.215 13.046 315.912 13.6622C316.211 13.9288 316.471 14.1862 316.736 14.489C317.227 15.0586 317.696 15.619 318.221 16.1587C318.405 16.3655 318.667 16.6157 318.863 16.8115C319.679 17.6313 320.483 18.5308 321.324 19.3298C321.714 19.6968 322.106 20.0568 322.497 20.4195ZM307.315 14.4543C307.927 14.89 308.452 15.2481 309.021 15.7497C309.554 16.194 310.061 16.71 310.543 17.2014C311.062 17.7314 311.568 18.2713 312.095 18.7937C312.191 18.8959 312.252 18.9918 312.311 19.1212C312.364 19.2513 312.392 19.3579 312.4 19.4961C312.407 19.638 312.395 19.7417 312.355 19.8739C312.314 20.0125 312.264 20.1084 312.18 20.2184C311.206 21.567 310.457 22.7758 309.286 23.9673C309.033 24.211 308.778 24.4408 308.511 24.6732C308.223 24.889 307.98 25.1389 307.668 25.3493C307.373 25.5489 307.083 25.7619 306.781 25.9568C306.21 26.3266 305.572 26.7282 305.154 27.2677C305.113 27.3201 305.016 27.478 305.043 27.5557C304.802 27.6655 305.062 27.2025 305.068 27.1954C305.133 27.0318 305.761 26.4247 305.903 26.2893C306.1 26.1023 306.317 25.9081 306.496 25.7083C306.76 25.4109 306.775 25.4509 307.287 24.8144C307.587 24.442 307.112 24.6644 306.909 24.9103C306.706 25.1549 307.246 24.4891 307.259 24.4731C307.46 24.2612 307.619 24.1794 307.787 24.0138C307.911 23.8872 308.009 23.6864 308.092 23.5315C308.175 23.3782 308.265 23.2444 308.371 23.1053C308.658 22.7319 309.229 21.9213 309.621 20.9119C309.752 20.5293 310.132 19.9813 310.456 19.5366C310.088 19.1169 309.744 18.6891 309.395 18.2328C308.983 17.6972 308.556 17.1718 308.148 16.6322C308.131 16.6109 308.115 16.59 308.098 16.5692C307.674 16.017 307.284 15.5552 306.798 15.0607C306.617 14.8767 306.445 14.6871 306.265 14.5036C305.934 14.154 306.437 14.5826 306.509 14.6395C306.199 14.3008 305.923 13.9221 305.611 13.5979C305.319 13.2963 306.023 13.8735 306.051 13.8945C305.848 13.664 305.461 13.1846 305.379 12.9113C305.305 12.447 307.205 14.3683 307.315 14.4543ZM305.898 17.0933C306.618 17.6526 307.196 18.3228 307.863 18.9345C307.969 19.0325 308.028 19.1305 308.089 19.2616C308.146 19.3896 308.175 19.496 308.187 19.6354C308.194 19.7763 308.182 19.8803 308.143 20.0126C308.102 20.1512 308.051 20.2485 307.964 20.3588C307.528 20.9599 307.157 21.5878 306.719 22.1886C306.224 22.7951 305.524 23.4952 304.731 23.7342C304.398 23.8343 303.456 24.1439 303.203 24.3616C303.119 24.4344 302.673 24.7381 302.772 24.9018C302.408 24.8829 303.051 24.2795 303.078 24.2525C303.162 24.1772 303.24 24.1092 303.327 24.0424C303.813 23.6621 303.915 23.5701 304.376 23.1948C304.601 22.9957 304.223 23.0219 304.058 23.1634C303.893 23.3041 304.309 22.9361 304.332 22.9179C304.697 22.659 304.59 22.7381 304.93 22.3667C306.177 20.9952 305.837 20.1729 306.21 19.6578C305.785 19.1265 305.438 18.5801 305.044 18.0032C305.044 18.0032 305.025 17.9732 305.017 17.9621C304.731 17.5625 304.203 16.7978 303.905 16.5321C303.606 16.2672 304.032 16.5533 304.081 16.5845C303.887 16.3679 303.643 16.1195 303.4 15.9485C303.159 15.7839 303.725 16.0581 303.772 16.0794C303.734 16.0553 303.242 15.6217 303.229 15.449C303.191 14.9675 305.696 16.9469 305.898 17.0933ZM310.206 12.4818C311.097 13.2651 311.97 13.9518 312.81 14.806C313.644 15.6498 314.406 16.2475 315.17 17.2026C315.697 17.857 316.243 18.4182 316.823 19.0126C316.922 19.1243 316.985 19.2219 317.042 19.3615C317.096 19.4961 317.118 19.6084 317.125 19.753C317.126 19.8973 317.111 20.011 317.069 20.1461C317.019 20.284 316.961 20.3841 316.867 20.4942C315.881 21.6713 314.904 22.8584 313.922 24.0354C313.493 24.5446 313.106 25.0572 312.707 25.5879C312.086 26.3659 311.499 26.8475 310.657 27.3572C310.436 27.4847 310.137 27.6681 309.936 27.8246C309.644 28.0523 307.111 29.9465 307.191 30.4262C306.648 30.5925 308.139 29.0392 308.441 28.7225C308.546 28.6118 309.879 27.2484 309.331 27.6305C309.251 27.6846 309.278 27.6617 309.317 27.63C309.423 27.5408 309.52 27.4605 309.532 27.4506C309.815 27.2092 310.13 26.9892 310.395 26.7301C311.077 26.0646 309.531 27.2286 310.124 26.6707C310.293 26.5113 310.469 26.3416 310.479 26.335C311.077 25.8317 311.418 25.5516 311.632 25.1313C311.846 24.7106 311.735 24.9339 311.778 24.8585C312.478 23.6153 313.203 22.7864 313.902 21.5002C314.222 20.9069 314.727 20.2936 315.205 19.7437C314.765 19.2556 314.358 18.7679 313.956 18.2018C313.306 17.28 312.572 16.5628 311.891 15.6909C311.806 15.5697 311.696 15.4376 311.604 15.3167C310.988 14.5104 310.31 13.8001 309.675 13.0299C309.525 12.8512 309.346 12.6639 309.183 12.4962C308.725 12.0252 309.399 12.6199 309.483 12.6926C309.063 12.2191 308.62 11.7155 308.164 11.2812C307.769 10.9134 308.716 11.6635 308.781 11.7155C308.475 11.4047 307.856 10.757 307.678 10.3964C307.511 9.79721 310.105 12.3894 310.206 12.4818Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M28.2883 23.4457C28.2876 23.4457 28.2711 23.4482 28.2754 23.4467C28.265 23.4491 28.2548 23.4538 28.2446 23.4586C28.1832 23.4798 28.2791 23.4481 28.2883 23.4457ZM34.0396 16.1383C33.6397 15.5455 33.0895 14.9072 32.7763 14.2757C32.5219 13.762 32.2888 13.2422 32.0368 12.7293C32.3276 13.224 32.5819 13.7316 32.8554 14.2356C33.4636 15.2516 34.1482 15.9511 34.6895 17.0465C34.7323 17.1397 34.7738 17.2324 34.8152 17.3245L34.6798 17.5103C34.6234 17.3849 34.5679 17.2593 34.5103 17.1315C34.04 16.2265 32.141 13.4807 34.0396 16.1383ZM36.3186 16.8556C36.4457 16.6971 36.572 16.5382 36.6986 16.3795C36.9653 16.0467 37.2123 15.7681 37.4936 15.4897C37.6617 15.6958 37.9369 15.933 38.3294 16.3324C38.4078 16.4122 38.4829 16.4582 38.5899 16.4915C38.6978 16.5208 38.7859 16.5222 38.8945 16.4963C38.9203 16.4944 39.0887 16.4289 39.1231 16.4152C39.3251 16.3345 39.4632 16.2702 39.6413 16.136C40.5163 15.4155 40.1524 15.6751 40.5747 15.7424C40.9034 15.7447 41.9059 15.6351 42.2432 15.5574C41.5838 15.5891 41.6693 15.5992 42.2432 15.5574C42.2524 15.5569 42.2614 15.5565 42.2704 15.5558C42.183 15.5606 42.0961 15.5628 42.0087 15.5675C42.0377 15.5661 42.0734 15.5656 42.102 15.5604C42.486 15.5416 42.3523 15.5486 42.0824 15.5597C41.6537 15.5456 42.1523 15.4976 42.3098 15.492C41.1696 15.5184 41.9218 15.4755 42.4775 15.4627C42.4761 15.4615 42.4749 15.4611 42.4732 15.4604C42.324 15.4628 40.9719 15.4367 41.9392 15.3829C41.6662 15.3923 41.3287 15.4069 41.0642 15.3377C41.5127 15.27 41.9716 15.2724 42.4239 15.2592C41.1457 15.2837 41.7175 15.2426 42.4706 15.2242C42.0146 15.236 40.4495 15.1975 41.9142 15.2004C40.5723 15.1135 42.2529 15.1168 42.5226 15.126C42.3509 15.1142 40.7388 15.1354 40.7386 15.0535C40.7383 15.0393 40.0827 14.8749 40.0206 14.86C39.9479 14.8411 39.838 14.8529 39.7667 14.8742C39.7311 14.886 39.6999 14.8978 39.6666 14.9145C39.5485 14.9797 39.4767 15.0558 39.4172 15.1763C39.3513 15.2949 39.293 15.3954 39.1751 15.4657C38.9184 15.6082 38.2755 15.3204 37.8353 15.1659L37.8696 15.1354C38.3794 14.6857 38.7127 14.3945 39.0025 13.7559C40.0078 11.5139 40.1939 12.2663 40.9473 13.3352C41.6653 14.2898 42.2238 14.4819 42.9869 15.2459L43.4614 15.7346C43.3102 15.5652 43.156 15.399 43.0027 15.2318C42.5826 14.7866 42.289 14.4717 43.006 15.2293C43.1591 15.397 43.3121 15.5636 43.4614 15.7346C43.4779 15.7535 43.4944 15.7731 43.5107 15.7919C43.3534 15.6082 43.19 15.4292 43.0278 15.2495C43.0866 15.3142 43.1461 15.3819 43.207 15.445C43.8175 16.1226 43.8473 16.1517 43.164 15.395C43.1149 15.3366 43.0663 15.2761 43.0185 15.2175C42.8353 14.9913 42.7621 14.889 43.0509 15.1883C43.2528 15.4036 43.4479 15.6186 43.6378 15.8456C43.4496 15.6186 43.2542 15.4018 43.0582 15.1819C42.443 14.5254 42.2045 14.2521 43.0712 15.1701C43.4182 15.552 43.7188 15.8839 44.0225 16.305C44.0201 16.3002 44.0166 16.2931 44.0135 16.2884C43.7167 15.8803 43.4146 15.5361 43.0859 15.1568C42.6109 14.6285 41.9104 13.8686 43.0493 14.998C42.566 14.486 41.9721 14.1006 41.5692 13.5174C42.1081 14.0748 42.6825 14.4393 43.228 15.0274C43.5263 15.3606 43.805 15.6739 44.0761 16.0309C43.8052 15.6713 43.5268 15.3616 43.228 15.0274C42.5261 14.2846 42.2536 13.9645 43.245 15.0124C43.5972 15.3988 43.92 15.7515 44.2247 16.1778C43.9151 15.7506 43.6033 15.3963 43.2561 15.0022C42.3672 14.0587 41.1018 12.8439 43.152 14.8412C41.6617 13.2886 42.3858 13.9167 43.3364 14.9289C43.7743 15.423 44.1052 15.8123 44.4717 16.3649C44.103 15.8071 43.7771 15.4233 43.3402 14.9255C42.6619 14.1848 42.0512 13.8442 41.4782 12.9848C41.1941 12.5368 40.9917 12.2275 40.6434 11.8198C40.5912 11.7639 40.5442 11.7289 40.475 11.6963C40.4048 11.6658 40.3472 11.6534 40.2709 11.6515C40.1942 11.6515 40.1363 11.6632 40.0652 11.692C39.9949 11.7236 39.9479 11.7567 39.8942 11.8122C39.8942 11.8122 39.8872 11.8217 39.885 11.8217C39.2868 12.4022 38.9595 12.3672 38.4529 13.1714C38.3943 13.2724 38.3426 13.3729 38.293 13.4787C38.0559 13.9338 37.7345 14.1695 37.3436 14.4845C36.6289 15.0754 36.1953 15.5617 35.6108 16.2673C35.3685 16.5701 35.1406 16.8798 34.9146 17.1899C34.8844 17.1219 34.8539 17.0536 34.8227 16.9849C34.2842 15.8825 33.5996 15.1717 33.0132 14.1439C32.529 13.1964 32.2022 12.432 31.569 11.5501C30.9984 10.8048 30.8435 10.6309 30.4595 9.75492C30.2356 9.24077 30.0287 8.92923 29.7467 8.44649C29.6943 8.36242 29.6409 8.31002 29.5556 8.25925C29.469 8.21201 29.3962 8.19274 29.2975 8.18991C29.199 8.19109 29.1253 8.20874 29.0379 8.2555C28.9517 8.30533 28.8979 8.3564 28.8438 8.44001C28.7649 8.56352 28.6861 8.687 28.6074 8.81075C28.3986 9.13029 28.3077 9.35675 28.1081 9.68054C28.0097 9.83995 27.9164 10.0142 27.8264 10.1789C27.6075 10.5782 27.3994 10.984 27.1729 11.3786C27.0487 11.5942 26.9093 11.7811 26.7726 11.9859C26.1947 12.7865 25.6293 13.5625 25.0986 14.3969C24.6549 15.0601 24.26 15.7581 23.8398 16.4402C23.4955 17.0127 23.3396 17.3199 23.0397 17.9111C22.6958 18.5546 22.7638 18.3428 22.3874 18.9609C22.3635 19.0039 22.3066 19.0882 22.2913 19.1277C21.9264 19.7552 21.5213 20.4426 21.1494 21.0656C18.7213 24.8091 19.4102 24.3125 21.758 21.4409C22.1982 20.842 22.615 20.2473 23.0187 19.6227C23.0522 19.5714 23.0862 19.5091 23.1212 19.4609C23.547 18.8176 23.4629 19.0887 23.8523 18.379C24.1426 17.8192 24.3304 17.4265 24.6511 16.8803C24.686 16.8163 24.7231 16.7517 24.7614 16.6872C25.058 16.6188 25.5214 16.4287 26.1607 16.0882C26.5917 15.8468 26.924 15.6113 27.299 15.2899C28.6497 14.1166 27.3255 14.1876 29.14 15.5801C29.4456 15.8084 29.618 15.5967 29.6943 15.301C30.0421 14.254 30.7374 15.1113 31.3978 15.5926C30.9162 15.2374 30.8978 15.1337 31.4958 15.5878C30.7412 15.0142 30.9606 15.0855 31.0815 15.155C30.7296 14.9379 30.3522 14.7613 30.01 14.5304C33.3261 15.7379 29.6076 13.9473 31.9417 15.591C31.4311 15.2233 29.331 13.8872 31.1564 14.9859C29.6621 13.9786 31.7173 15.3018 32.116 15.5963C31.3373 15.0109 30.8052 14.6696 29.9186 14.2202C29.8551 14.1918 29.8031 14.1794 29.7332 14.1768C29.664 14.1761 29.6107 14.1863 29.5457 14.2111C29.4815 14.2378 29.4364 14.268 29.3865 14.3169C29.3381 14.3674 29.3086 14.4132 29.2821 14.4779C29.2007 14.6626 29.1378 14.5801 28.8837 14.2974C28.7163 14.1111 28.5307 13.9709 28.3365 13.8131C28.2208 13.7309 28.1145 13.6968 27.9723 13.6971C27.8297 13.7041 27.7253 13.7437 27.6134 13.8323C26.9382 14.3691 26.296 14.8763 25.5865 15.3684L25.5228 15.4164L25.8175 14.9236C26.3144 14.0902 26.8793 13.3259 27.4055 12.5172C27.5621 12.2867 27.7005 12.0654 27.8361 11.8217C28.1396 11.2506 28.4104 10.6672 28.7177 10.0976C29.4692 8.65148 29.1669 8.59059 29.8013 10.0468C30.2346 10.9735 30.4328 11.1731 31.0544 11.9447C31.6857 12.7724 32.0333 13.5183 32.5269 14.4129C33.1365 15.3963 33.8941 16.1616 34.4137 17.1788C34.4696 17.2844 34.5839 17.5296 34.5823 17.5263C34.5296 17.412 34.4774 17.2864 34.42 17.1756C33.046 14.5782 33.3653 15.223 34.42 17.1756C34.4774 17.2864 34.5296 17.412 34.5823 17.5263L34.6161 17.5988C34.3209 18.001 34.02 18.3981 33.686 18.7741C33.4721 19.0218 33.2926 19.24 33.1468 19.4289C32.9905 19.2043 32.842 18.9774 32.6972 18.7289C32.4076 18.2132 32.1226 17.7206 31.8042 17.2213C31.6998 17.0451 31.5751 16.8685 31.4646 16.6942C31.4247 16.6323 31.3838 16.593 31.3198 16.5566C31.2549 16.5222 31.2003 16.5087 31.1269 16.5075C31.0537 16.5096 30.9991 16.524 30.9344 16.559C30.8718 16.596 30.8307 16.6363 30.7922 16.6979C30.4375 17.3037 30.1683 17.7823 29.899 18.4375C29.5105 19.3888 29.2826 19.8 28.6641 20.6204C27.9497 21.5906 27.3422 22.5819 26.7242 23.6128C26.3012 24.3393 25.9198 25.0898 25.4453 25.7851C25.4432 25.7898 25.4439 25.7872 25.4453 25.7851C25.4453 25.7853 25.4456 25.7851 25.4453 25.7851C26.8867 23.6274 27.4485 22.8131 25.4453 25.7851C25.4453 25.7853 25.4456 25.7851 25.4453 25.7851C25.413 25.8333 25.3759 25.8823 25.3419 25.9295C25.3723 25.887 25.4203 25.8276 25.4453 25.7851C25.6805 25.4582 25.8851 25.1348 26.0917 24.789C26.0166 24.9161 25.9394 25.0409 25.8638 25.1673C26.9169 23.533 25.9644 25.1308 25.4968 25.8223C25.4151 25.9432 25.3223 26.0634 25.238 26.1841C25.3232 26.0625 25.4094 25.9425 25.4968 25.8223C26.0024 25.1055 26.3746 24.4098 26.8349 23.6824C26.9382 23.5228 26.9339 23.5329 26.8401 23.6847C26.3919 24.4202 26.0183 25.1228 25.5162 25.8358C25.1999 26.2732 24.9515 26.6362 24.699 27.1151C24.7052 27.1057 24.7108 27.0962 24.7167 27.0867C24.9647 26.6189 25.2108 26.2655 25.5216 25.8399C26.0261 25.1354 26.4129 24.4261 26.8834 23.7117C27.2128 23.2271 27.2506 23.1974 26.924 23.7375C26.7421 24.0398 26.5669 24.3449 26.3895 24.6498C26.5619 24.3562 26.7428 24.0204 26.9327 23.7424C27.4736 22.8955 28.0012 22.091 28.631 21.3053C28.0715 22.1246 27.551 22.9597 27.0248 23.8002C26.5726 24.5375 26.1909 25.2473 25.6838 25.9568C25.4578 26.291 25.2325 26.58 25.0299 26.935C25.2328 26.5873 25.4477 26.2817 25.6838 25.9568C26.193 25.2365 26.5697 24.5371 27.0317 23.8035C27.2435 23.4736 27.2253 23.5083 27.039 23.8083C26.5889 24.5472 26.2129 25.259 25.7082 25.9732C25.4 26.4023 25.1411 26.775 24.9007 27.2443C25.1494 26.7644 25.3943 26.4111 25.712 25.9758C26.2185 25.2694 26.6075 24.5543 27.068 23.8253C28.4194 21.7441 28.5089 21.6429 27.0931 23.8418C26.9174 24.1198 26.7502 24.4006 26.5818 24.6831C26.7469 24.4146 26.924 24.1026 27.1061 23.8485C28.0977 22.3679 27.9756 22.585 27.1542 23.8799C26.6961 24.617 26.3114 25.328 25.7996 26.0391C25.3431 26.6647 25.096 27.0483 24.7651 27.7462C25.1019 27.0431 25.3433 26.6664 25.8017 26.0405C26.3137 25.3315 26.702 24.6185 27.1639 23.8845C27.8018 22.8938 28.4279 21.9326 29.1596 21.0066C29.8371 20.1578 30.1168 19.7086 30.5558 18.7115C31.5244 16.5312 30.7731 16.653 31.8999 18.7934C31.9622 18.9112 32.0229 19.0364 32.0881 19.1519C32.341 19.6178 32.6034 20.0134 32.9041 20.4478C33.3393 21.0802 33.4343 21.3159 33.7066 22.0218C33.8225 22.3109 33.9234 22.5415 34.0462 22.755C33.9874 22.7014 33.9264 22.6482 33.862 22.596C33.6652 22.4396 33.473 22.3074 33.263 22.1683C33.0628 22.0419 32.3573 21.5906 32.0928 21.6005C31.722 21.6326 30.9431 22.6737 30.6855 22.9781C30.4861 23.1843 30.4784 23.0443 30.3277 22.9218C30.3119 22.9099 30.2835 22.8899 30.2656 22.8774C30.2325 22.8561 30.2023 22.8458 30.1633 22.8402C30.1099 22.8354 30.0672 22.8426 30.0202 22.8689C29.8688 22.9834 29.9368 22.989 29.6888 23.1213C29.1858 23.3655 29.1352 23.2157 28.7694 23.2915C29.4512 23.2939 29.6291 23.3153 28.7694 23.2915L28.7449 23.2918C28.503 23.2823 28.5637 23.2847 28.7394 23.2918L28.7253 23.2925L28.7425 23.2922L29.0006 23.304C29.545 23.3643 28.8037 23.3576 28.6539 23.3581C30.2821 23.3973 28.9432 23.3116 28.2841 23.4446C28.2883 23.4448 28.2926 23.444 28.2966 23.4436C28.7326 23.3637 30.3513 23.4449 29.1567 23.4933C29.3986 23.498 29.5842 23.4663 29.8095 23.3754C29.9555 23.3083 30.233 23.1252 30.1893 23.1753C30.1671 23.1871 30.1449 23.1919 30.1194 23.1896C30.108 23.1919 30.0849 23.1777 30.075 23.1753C30.0613 23.1706 30.0934 23.199 30.0927 23.2007C30.0924 23.2014 30.1087 23.2218 30.1099 23.2249C30.1021 23.2202 30.0939 23.2132 30.0854 23.2085C30.0847 23.2075 30.0504 23.1836 30.0629 23.1942C30.079 23.206 30.0972 23.2107 30.1163 23.2131C30.1487 23.2178 30.1737 23.2124 30.2027 23.199C30.2821 23.155 30.0509 23.354 29.8485 23.4567C29.2238 23.7354 29.0306 23.5171 28.4449 23.6151C28.4274 23.6198 28.41 23.6222 28.3927 23.6269C28.41 23.6222 28.4274 23.6175 28.4449 23.6151C30.882 23.5145 28.6166 23.5962 28.3438 23.6754C28.9586 23.5211 29.2021 23.7824 29.8801 23.5226C30.249 23.3473 30.5889 23.189 29.8898 23.5438C29.6369 23.6538 29.451 23.6848 29.1749 23.6768C29.439 23.7004 29.6595 23.6697 29.9073 23.5799C30.0816 23.5088 30.0816 23.5166 29.9167 23.6011C29.2059 23.9277 28.901 23.5894 28.2253 23.8204C28.9269 23.5944 29.135 23.9247 29.9267 23.6217C30.0596 23.5589 30.5225 23.2401 30.3095 23.3938C30.2372 23.4326 30.1706 23.4449 30.0884 23.4364C30.0318 23.4269 29.9907 23.4151 29.942 23.3846C29.9127 23.3657 29.9101 23.3633 29.9378 23.3869C29.9288 23.3987 30.177 23.5686 30.1907 23.5792C30.8447 24.0147 30.7252 23.7962 31.1947 23.4632C32.5595 22.1505 31.6087 22.2243 32.5574 22.9318C33.0089 23.2686 33.3525 23.5036 33.7422 23.8937C34.7882 24.7286 35.5319 25.0933 35.7303 24.9761C35.9547 25.3361 36.1812 25.6943 36.4105 26.0512C36.8091 26.69 37.0737 27.2986 37.4189 27.958C37.9168 28.8441 37.6379 28.0672 38.1192 28.7362C38.1898 28.8397 38.2602 28.9436 38.3317 29.0463C38.7968 29.6943 39.1541 30.2829 39.6434 30.9092C40.8394 32.5166 40.9868 32.3362 40.1488 30.5878C39.7759 29.889 39.3293 29.2511 38.9186 28.5749C38.8598 28.4786 38.7833 28.3555 38.7325 28.2568C38.3195 27.6064 38.5245 28.1995 38.1558 27.5087C37.8051 26.7945 37.5665 26.1811 37.1367 25.49C36.8356 25.0219 36.5342 24.5541 36.2343 24.0853C36.2053 24.0404 36.1769 23.9949 36.1481 23.9498C35.8061 23.4191 35.6018 23.2011 35.143 22.755C34.7757 22.3927 34.6463 22.1284 34.4451 21.6582C34.1336 20.8958 33.9893 20.6013 33.5058 19.928C35.2145 18.6812 35.2268 18.2811 36.3186 16.8556ZM34.8152 17.3245C34.7738 17.2324 34.7323 17.1397 34.6895 17.0465C33.0349 14.0787 33.2479 14.2276 34.7145 17.0342C34.7554 17.1223 34.7953 17.2099 34.8352 17.2968L34.8152 17.3245ZM34.8385 17.2925C34.8 17.2061 34.7611 17.119 34.7212 17.0316C34.1765 15.9308 33.4891 15.2197 32.9194 14.1952C32.4733 13.3089 32.4549 13.2515 32.9411 14.1905C33.3008 14.8291 33.7387 15.3777 34.1527 15.9795C33.7864 15.42 33.2524 14.7671 32.9768 14.1639C32.9128 14.0206 32.9296 14.0471 32.9943 14.1621C33.5998 15.1809 34.2661 15.8744 34.8196 16.9861C34.8513 17.055 34.8818 17.124 34.9125 17.1925L34.8385 17.2925ZM34.6161 17.5988C34.5518 17.4574 34.4911 17.3095 34.4226 17.173C34.2987 16.9262 34.1834 16.706 34.0348 16.4715C34.1173 16.6004 34.1924 16.73 34.2677 16.8625C33.554 15.519 33.7847 15.8364 34.4793 17.1462C34.5445 17.2719 34.6024 17.4039 34.6609 17.5361L34.6753 17.5171C34.6175 17.3912 34.5606 17.2644 34.5008 17.1364C32.9289 14.1517 33.1908 14.7883 34.4793 17.1462C34.5429 17.2752 34.6024 17.4048 34.6609 17.5361L34.6161 17.5988ZM43.164 15.395C43.1862 15.4198 43.2235 15.4618 43.207 15.445L43.164 15.395ZM42.102 15.5604L42.0854 15.5603C42.0958 15.5601 42.1081 15.5597 42.102 15.5604ZM42.4761 15.4601C42.4768 15.4611 42.4822 15.4615 42.4803 15.4624C42.4839 15.4617 42.4874 15.4615 42.4909 15.4608C42.5115 15.4561 42.4789 15.4601 42.4761 15.4601ZM28.7449 23.2918C28.8596 23.2906 28.9742 23.2992 29.0885 23.3039C29.0509 23.3029 29.0094 23.2991 28.9723 23.3014L28.7449 23.2918ZM28.9723 23.3014L28.998 23.3039C28.9829 23.3027 28.9628 23.3017 28.9723 23.3014Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M130.331 23.4457C130.331 23.4457 130.314 23.4482 130.319 23.4467C130.308 23.4491 130.298 23.4538 130.288 23.4586C130.226 23.4798 130.322 23.4481 130.331 23.4457ZM136.083 16.1383C135.683 15.5455 135.133 14.9072 134.82 14.2757C134.565 13.762 134.332 13.2422 134.08 12.7293C134.371 13.224 134.625 13.7316 134.898 14.2356C135.507 15.2516 136.191 15.9511 136.733 17.0465C136.776 17.1397 136.817 17.2324 136.858 17.3245L136.723 17.5103C136.666 17.3849 136.611 17.2593 136.553 17.1315C136.083 16.2265 134.184 13.4807 136.083 16.1383ZM138.362 16.8556C138.489 16.6971 138.615 16.5382 138.742 16.3795C139.009 16.0467 139.255 15.7681 139.537 15.4897C139.705 15.6958 139.98 15.933 140.373 16.3324C140.451 16.4122 140.526 16.4582 140.633 16.4915C140.741 16.5208 140.829 16.5222 140.938 16.4963C140.964 16.4944 141.132 16.4289 141.166 16.4152C141.368 16.3345 141.507 16.2702 141.685 16.136C142.559 15.4155 142.195 15.6751 142.618 15.7424C142.947 15.7447 143.949 15.6351 144.286 15.5574C143.627 15.5891 143.713 15.5992 144.286 15.5574C144.295 15.5569 144.304 15.5565 144.313 15.5558C144.226 15.5606 144.139 15.5628 144.052 15.5675C144.081 15.5661 144.117 15.5656 144.145 15.5604C144.529 15.5416 144.396 15.5486 144.126 15.5597C143.697 15.5456 144.196 15.4976 144.353 15.492C143.213 15.5184 143.965 15.4755 144.521 15.4627C144.519 15.4615 144.518 15.4611 144.516 15.4604C144.367 15.4628 143.015 15.4367 143.983 15.3829C143.71 15.3923 143.372 15.4069 143.108 15.3377C143.556 15.27 144.015 15.2724 144.467 15.2592C143.189 15.2837 143.761 15.2426 144.514 15.2242C144.058 15.236 142.493 15.1975 143.958 15.2004C142.616 15.1135 144.296 15.1168 144.566 15.126C144.394 15.1142 142.782 15.1354 142.782 15.0535C142.781 15.0393 142.126 14.8749 142.064 14.86C141.991 14.8411 141.881 14.8529 141.81 14.8742C141.774 14.886 141.743 14.8978 141.71 14.9145C141.592 14.9797 141.52 15.0558 141.46 15.1763C141.395 15.2949 141.336 15.3954 141.218 15.4657C140.962 15.6082 140.319 15.3204 139.879 15.1659L139.913 15.1354C140.423 14.6857 140.756 14.3945 141.046 13.7559C142.051 11.5139 142.237 12.2663 142.991 13.3352C143.709 14.2898 144.267 14.4819 145.03 15.2459L145.504 15.7346C145.353 15.5652 145.199 15.399 145.046 15.2318C144.626 14.7866 144.332 14.4717 145.049 15.2293C145.202 15.397 145.355 15.5636 145.504 15.7346C145.521 15.7535 145.537 15.7731 145.554 15.7919C145.397 15.6082 145.233 15.4292 145.071 15.2495C145.13 15.3142 145.189 15.3819 145.25 15.445C145.861 16.1226 145.891 16.1517 145.207 15.395C145.158 15.3366 145.109 15.2761 145.062 15.2175C144.879 14.9913 144.805 14.889 145.094 15.1883C145.296 15.4036 145.491 15.6186 145.681 15.8456C145.493 15.6186 145.297 15.4018 145.101 15.1819C144.486 14.5254 144.248 14.2521 145.114 15.1701C145.461 15.552 145.762 15.8839 146.066 16.305C146.063 16.3002 146.06 16.2931 146.057 16.2884C145.76 15.8803 145.458 15.5361 145.129 15.1568C144.654 14.6285 143.954 13.8686 145.092 14.998C144.609 14.486 144.015 14.1006 143.612 13.5174C144.151 14.0748 144.726 14.4393 145.271 15.0274C145.569 15.3606 145.848 15.6739 146.119 16.0309C145.848 15.6713 145.57 15.3616 145.271 15.0274C144.57 14.2846 144.297 13.9645 145.288 15.0124C145.64 15.3988 145.963 15.7515 146.268 16.1778C145.958 15.7506 145.646 15.3963 145.299 15.0022C144.41 14.0587 143.145 12.8439 145.195 14.8412C143.705 13.2886 144.429 13.9167 145.379 14.9289C145.817 15.423 146.148 15.8123 146.515 16.3649C146.146 15.8071 145.82 15.4233 145.383 14.9255C144.705 14.1848 144.094 13.8442 143.522 12.9848C143.237 12.5368 143.035 12.2275 142.687 11.8198C142.634 11.7639 142.587 11.7289 142.518 11.6963C142.448 11.6658 142.391 11.6534 142.314 11.6515C142.237 11.6515 142.18 11.6632 142.109 11.692C142.038 11.7236 141.991 11.7567 141.938 11.8122C141.938 11.8122 141.93 11.8217 141.928 11.8217C141.33 12.4022 141.003 12.3672 140.496 13.1714C140.437 13.2724 140.386 13.3729 140.336 13.4787C140.099 13.9338 139.778 14.1695 139.387 14.4845C138.672 15.0754 138.239 15.5617 137.654 16.2673C137.412 16.5701 137.184 16.8798 136.958 17.1899C136.928 17.1219 136.897 17.0536 136.866 16.9849C136.328 15.8825 135.643 15.1717 135.056 14.1439C134.572 13.1964 134.245 12.432 133.612 11.5501C133.041 10.8048 132.887 10.6309 132.503 9.75492C132.279 9.24077 132.072 8.92923 131.79 8.44649C131.738 8.36242 131.684 8.31002 131.599 8.25925C131.512 8.21201 131.44 8.19274 131.341 8.18991C131.242 8.19109 131.169 8.20874 131.081 8.2555C130.995 8.30533 130.941 8.3564 130.887 8.44001C130.808 8.56352 130.729 8.687 130.651 8.81075C130.442 9.13029 130.351 9.35675 130.151 9.68054C130.053 9.83995 129.959 10.0142 129.87 10.1789C129.651 10.5782 129.443 10.984 129.216 11.3786C129.092 11.5942 128.953 11.7811 128.816 11.9859C128.238 12.7865 127.673 13.5625 127.142 14.3969C126.698 15.0601 126.303 15.7581 125.883 16.4402C125.539 17.0127 125.383 17.3199 125.083 17.9111C124.739 18.5546 124.807 18.3428 124.431 18.9609C124.407 19.0039 124.35 19.0882 124.334 19.1277C123.97 19.7552 123.565 20.4426 123.193 21.0656C120.765 24.8091 121.453 24.3125 123.801 21.4409C124.241 20.842 124.658 20.2473 125.062 19.6227C125.095 19.5714 125.129 19.5091 125.164 19.4609C125.59 18.8176 125.506 19.0887 125.896 18.379C126.186 17.8192 126.374 17.4265 126.694 16.8803C126.729 16.8163 126.766 16.7517 126.804 16.6872C127.101 16.6188 127.564 16.4287 128.204 16.0882C128.635 15.8468 128.967 15.6113 129.342 15.2899C130.693 14.1166 129.369 14.1876 131.183 15.5801C131.489 15.8084 131.661 15.5967 131.738 15.301C132.085 14.254 132.781 15.1113 133.441 15.5926C132.959 15.2374 132.941 15.1337 133.539 15.5878C132.784 15.0142 133.004 15.0855 133.125 15.155C132.773 14.9379 132.396 14.7613 132.053 14.5304C135.369 15.7379 131.651 13.9473 133.985 15.591C133.474 15.2233 131.374 13.8872 133.2 14.9859C131.705 13.9786 133.76 15.3018 134.159 15.5963C133.381 15.0109 132.849 14.6696 131.962 14.2202C131.898 14.1918 131.846 14.1794 131.777 14.1768C131.707 14.1761 131.654 14.1863 131.589 14.2111C131.525 14.2378 131.48 14.268 131.43 14.3169C131.381 14.3674 131.352 14.4132 131.325 14.4779C131.244 14.6626 131.181 14.5801 130.927 14.2974C130.759 14.1111 130.574 13.9709 130.38 13.8131C130.264 13.7309 130.158 13.6968 130.016 13.6971C129.873 13.7041 129.769 13.7437 129.657 13.8323C128.981 14.3691 128.339 14.8763 127.63 15.3684L127.566 15.4164L127.861 14.9236C128.357 14.0902 128.923 13.3259 129.449 12.5172C129.605 12.2867 129.744 12.0654 129.879 11.8217C130.183 11.2506 130.453 10.6672 130.761 10.0976C131.512 8.65148 131.21 8.59059 131.845 10.0468C132.278 10.9735 132.476 11.1731 133.098 11.9447C133.729 12.7724 134.076 13.5183 134.57 14.4129C135.18 15.3963 135.937 16.1616 136.457 17.1788C136.513 17.2844 136.627 17.5296 136.626 17.5263C136.573 17.412 136.521 17.2864 136.463 17.1756C135.089 14.5782 135.409 15.223 136.463 17.1756C136.521 17.2864 136.573 17.412 136.626 17.5263L136.659 17.5988C136.364 18.001 136.063 18.3981 135.729 18.7741C135.515 19.0218 135.336 19.24 135.19 19.4289C135.034 19.2043 134.885 18.9774 134.74 18.7289C134.451 18.2132 134.166 17.7206 133.848 17.2213C133.743 17.0451 133.618 16.8685 133.508 16.6942C133.468 16.6323 133.427 16.593 133.363 16.5566C133.298 16.5222 133.244 16.5087 133.17 16.5075C133.097 16.5096 133.042 16.524 132.978 16.559C132.915 16.596 132.874 16.6363 132.836 16.6979C132.481 17.3037 132.211 17.7823 131.942 18.4375C131.554 19.3888 131.326 19.8 130.707 20.6204C129.993 21.5906 129.386 22.5819 128.767 23.6128C128.344 24.3393 127.963 25.0898 127.488 25.7851C127.486 25.7898 127.487 25.7872 127.488 25.7851C128.93 23.6274 129.492 22.8131 127.488 25.7851C127.456 25.8333 127.419 25.8823 127.385 25.9295C127.416 25.887 127.463 25.8276 127.488 25.7851C127.724 25.4582 127.928 25.1348 128.135 24.789C128.06 24.9161 127.983 25.0409 127.907 25.1673C128.96 23.533 128.008 25.1308 127.54 25.8223C127.458 25.9432 127.366 26.0634 127.281 26.1841C127.367 26.0625 127.453 25.9425 127.54 25.8223C128.046 25.1055 128.418 24.4098 128.878 23.6824C128.981 23.5228 128.977 23.5329 128.883 23.6847C128.435 24.4202 128.061 25.1228 127.559 25.8358C127.243 26.2732 126.995 26.6362 126.742 27.1151C126.748 27.1057 126.754 27.0962 126.76 27.0867C127.008 26.6189 127.254 26.2655 127.565 25.8399C128.069 25.1354 128.456 24.4261 128.927 23.7117C129.256 23.2271 129.294 23.1974 128.967 23.7375C128.785 24.0398 128.61 24.3449 128.433 24.6498C128.605 24.3562 128.786 24.0204 128.976 23.7424C129.517 22.8955 130.044 22.091 130.674 21.3053C130.115 22.1246 129.594 22.9597 129.068 23.8002C128.616 24.5375 128.234 25.2473 127.727 25.9568C127.501 26.291 127.276 26.58 127.073 26.935C127.276 26.5873 127.491 26.2817 127.727 25.9568C128.236 25.2365 128.613 24.5371 129.075 23.8035C129.287 23.4736 129.268 23.5083 129.082 23.8083C128.632 24.5472 128.256 25.259 127.751 25.9732C127.443 26.4023 127.184 26.775 126.944 27.2443C127.193 26.7644 127.438 26.4111 127.755 25.9758C128.262 25.2694 128.651 24.5543 129.111 23.8253C130.463 21.7441 130.552 21.6429 129.136 23.8418C128.96 24.1198 128.793 24.4006 128.625 24.6831C128.79 24.4146 128.967 24.1026 129.149 23.8485C130.141 22.3679 130.019 22.585 129.198 23.8799C128.739 24.617 128.355 25.328 127.843 26.0391C127.386 26.6647 127.139 27.0483 126.808 27.7462C127.145 27.0431 127.387 26.6664 127.845 26.0405C128.357 25.3315 128.745 24.6185 129.207 23.8845C129.845 22.8938 130.471 21.9326 131.203 21.0066C131.88 20.1578 132.16 19.7086 132.599 18.7115C133.567 16.5312 132.816 16.653 133.943 18.7934C134.005 18.9112 134.066 19.0364 134.131 19.1519C134.384 19.6178 134.646 20.0134 134.947 20.4478C135.382 21.0802 135.478 21.3159 135.75 22.0218C135.866 22.3109 135.967 22.5415 136.089 22.755C136.031 22.7014 135.97 22.6482 135.905 22.596C135.709 22.4396 135.516 22.3074 135.306 22.1683C135.106 22.0419 134.401 21.5906 134.136 21.6005C133.765 21.6326 132.986 22.6737 132.729 22.9781C132.529 23.1843 132.521 23.0443 132.371 22.9218C132.355 22.9099 132.327 22.8899 132.309 22.8774C132.276 22.8561 132.246 22.8458 132.206 22.8402C132.153 22.8354 132.11 22.8426 132.063 22.8689C131.912 22.9834 131.98 22.989 131.732 23.1213C131.229 23.3655 131.179 23.2157 130.813 23.2915C131.494 23.2939 131.672 23.3153 130.813 23.2915L130.788 23.2918C130.546 23.2823 130.607 23.2847 130.782 23.2918L130.768 23.2925L130.786 23.2922L131.044 23.304C131.588 23.3643 130.847 23.3576 130.697 23.3581C132.325 23.3973 130.986 23.3116 130.327 23.4446C130.331 23.4448 130.336 23.444 130.34 23.4436C130.776 23.3637 132.395 23.4449 131.2 23.4933C131.442 23.498 131.627 23.4663 131.853 23.3754C131.999 23.3083 132.276 23.1252 132.232 23.1753C132.21 23.1871 132.188 23.1919 132.163 23.1896C132.151 23.1919 132.128 23.1777 132.118 23.1753C132.105 23.1706 132.137 23.199 132.136 23.2007C132.136 23.2014 132.152 23.2218 132.153 23.2249C132.145 23.2202 132.137 23.2132 132.129 23.2085C132.128 23.2075 132.094 23.1836 132.106 23.1942C132.122 23.206 132.14 23.2107 132.16 23.2131C132.192 23.2178 132.217 23.2124 132.246 23.199C132.325 23.155 132.094 23.354 131.892 23.4567C131.267 23.7354 131.074 23.5171 130.488 23.6151C130.471 23.6198 130.453 23.6222 130.436 23.6269C130.453 23.6222 130.471 23.6175 130.488 23.6151C132.925 23.5145 130.66 23.5962 130.387 23.6754C131.002 23.5211 131.245 23.7824 131.923 23.5226C132.292 23.3473 132.632 23.189 131.933 23.5438C131.68 23.6538 131.494 23.6848 131.218 23.6768C131.482 23.7004 131.703 23.6697 131.95 23.5799C132.125 23.5088 132.125 23.5166 131.96 23.6011C131.249 23.9277 130.944 23.5894 130.269 23.8204C130.97 23.5944 131.178 23.9247 131.97 23.6217C132.103 23.5589 132.566 23.2401 132.353 23.3938C132.28 23.4326 132.214 23.4449 132.132 23.4364C132.075 23.4269 132.034 23.4151 131.985 23.3846C131.956 23.3657 131.953 23.3633 131.981 23.3869C131.972 23.3987 132.22 23.5686 132.234 23.5792C132.888 24.0147 132.768 23.7962 133.238 23.4632C134.603 22.1505 133.652 22.2243 134.601 22.9318C135.052 23.2686 135.396 23.5036 135.785 23.8937C136.832 24.7286 137.575 25.0933 137.774 24.9761C137.998 25.3361 138.224 25.6943 138.454 26.0512C138.852 26.69 139.117 27.2986 139.462 27.958C139.96 28.8441 139.681 28.0672 140.162 28.7362C140.233 28.8397 140.303 28.9436 140.375 29.0463C140.84 29.6943 141.197 30.2829 141.687 30.9092C142.883 32.5166 143.03 32.3362 142.192 30.5878C141.819 29.889 141.373 29.2511 140.962 28.5749C140.903 28.4786 140.826 28.3555 140.776 28.2568C140.363 27.6064 140.568 28.1995 140.199 27.5087C139.848 26.7945 139.61 26.1811 139.18 25.49C138.879 25.0219 138.578 24.5541 138.278 24.0853C138.249 24.0404 138.22 23.9949 138.191 23.9498C137.849 23.4191 137.645 23.2011 137.186 22.755C136.819 22.3927 136.69 22.1284 136.488 21.6582C136.177 20.8958 136.033 20.6013 135.549 19.928C137.258 18.6812 137.27 18.2811 138.362 16.8556ZM136.858 17.3245C136.817 17.2324 136.776 17.1397 136.733 17.0465C135.078 14.0787 135.291 14.2276 136.758 17.0342C136.799 17.1223 136.839 17.2099 136.878 17.2968L136.858 17.3245ZM136.882 17.2925C136.843 17.2061 136.804 17.119 136.764 17.0316C136.22 15.9308 135.532 15.2197 134.962 14.1952C134.517 13.3089 134.498 13.2515 134.984 14.1905C135.344 14.8291 135.782 15.3777 136.196 15.9795C135.83 15.42 135.296 14.7671 135.02 14.1639C134.956 14.0206 134.973 14.0471 135.038 14.1621C135.643 15.1809 136.309 15.8744 136.863 16.9861C136.894 17.055 136.925 17.124 136.956 17.1925L136.882 17.2925ZM136.659 17.5988C136.595 17.4574 136.534 17.3095 136.466 17.173C136.342 16.9262 136.227 16.706 136.078 16.4715C136.161 16.6004 136.236 16.73 136.311 16.8625C135.597 15.519 135.828 15.8364 136.523 17.1462C136.588 17.2719 136.645 17.4039 136.704 17.5361L136.719 17.5171C136.661 17.3912 136.604 17.2644 136.544 17.1364C134.972 14.1517 135.234 14.7883 136.523 17.1462C136.586 17.2752 136.646 17.4048 136.704 17.5361L136.659 17.5988ZM145.207 15.395C145.23 15.4198 145.267 15.4618 145.25 15.445L145.207 15.395ZM144.145 15.5604L144.128 15.5603C144.139 15.5601 144.151 15.5597 144.145 15.5604ZM144.519 15.4601C144.52 15.4611 144.525 15.4615 144.524 15.4624C144.527 15.4617 144.53 15.4615 144.534 15.4608C144.555 15.4561 144.522 15.4601 144.519 15.4601ZM130.788 23.2918C130.903 23.2906 131.017 23.2992 131.132 23.3039C131.094 23.3029 131.053 23.2991 131.015 23.3014L130.788 23.2918ZM131.015 23.3014L131.041 23.3039C131.026 23.3027 131.006 23.3017 131.015 23.3014Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M232.375 23.4457C232.374 23.4457 232.357 23.4482 232.362 23.4467C232.351 23.4491 232.341 23.4538 232.331 23.4586C232.269 23.4798 232.365 23.4481 232.375 23.4457ZM238.126 16.1383C237.726 15.5455 237.176 14.9072 236.863 14.2757C236.608 13.762 236.375 13.2422 236.123 12.7293C236.414 13.224 236.668 13.7316 236.942 14.2356C237.55 15.2516 238.234 15.9511 238.776 17.0465C238.819 17.1397 238.86 17.2324 238.902 17.3245L238.766 17.5103C238.71 17.3849 238.654 17.2593 238.597 17.1315C238.126 16.2265 236.227 13.4807 238.126 16.1383ZM240.405 16.8556C240.532 16.6971 240.659 16.5382 240.785 16.3795C241.052 16.0467 241.299 15.7681 241.58 15.4897C241.748 15.6958 242.023 15.933 242.416 16.3324C242.494 16.4122 242.569 16.4582 242.676 16.4915C242.784 16.5208 242.872 16.5222 242.981 16.4963C243.007 16.4944 243.175 16.4289 243.209 16.4152C243.411 16.3345 243.549 16.2702 243.728 16.136C244.603 15.4155 244.239 15.6751 244.661 15.7424C244.99 15.7447 245.992 15.6351 246.329 15.5574C245.67 15.5891 245.756 15.5992 246.329 15.5574C246.339 15.5569 246.348 15.5565 246.357 15.5558C246.269 15.5606 246.182 15.5628 246.095 15.5675C246.124 15.5661 246.16 15.5656 246.188 15.5604C246.572 15.5416 246.439 15.5486 246.17 15.5597C245.741 15.5456 246.239 15.4976 246.397 15.492C245.257 15.5184 246.009 15.4755 246.565 15.4627C246.564 15.4615 246.562 15.4611 246.56 15.4604C246.411 15.4628 245.059 15.4367 246.026 15.3829C245.753 15.3923 245.416 15.4069 245.151 15.3377C245.6 15.27 246.058 15.2724 246.511 15.2592C245.232 15.2837 245.804 15.2426 246.557 15.2242C246.101 15.236 244.536 15.1975 246.001 15.2004C244.659 15.1135 246.34 15.1168 246.61 15.126C246.438 15.1142 244.826 15.1354 244.825 15.0535C244.825 15.0393 244.17 14.8749 244.107 14.86C244.035 14.8411 243.925 14.8529 243.853 14.8742C243.818 14.886 243.787 14.8978 243.753 14.9145C243.635 14.9797 243.563 15.0558 243.504 15.1763C243.438 15.2949 243.38 15.3954 243.262 15.4657C243.005 15.6082 242.362 15.3204 241.922 15.1659L241.956 15.1354C242.466 14.6857 242.799 14.3945 243.089 13.7559C244.095 11.5139 244.281 12.2663 245.034 13.3352C245.752 14.2898 246.311 14.4819 247.074 15.2459L247.548 15.7346C247.397 15.5652 247.243 15.399 247.089 15.2318C246.67 14.7866 246.376 14.4717 247.094 15.2293C247.247 15.397 247.399 15.5636 247.548 15.7346C247.565 15.7535 247.582 15.7731 247.599 15.7919C247.441 15.6082 247.278 15.4292 247.116 15.2495C247.175 15.3142 247.234 15.3819 247.295 15.445C247.905 16.1226 247.935 16.1517 247.252 15.395C247.203 15.3366 247.154 15.2761 247.107 15.2175C246.923 14.9913 246.85 14.889 247.139 15.1883C247.341 15.4036 247.536 15.6186 247.726 15.8456C247.537 15.6186 247.342 15.4018 247.146 15.1819C246.531 14.5254 246.292 14.2521 247.16 15.1701C247.507 15.552 247.808 15.8839 248.112 16.305C248.109 16.3002 248.107 16.2931 248.102 16.2884C247.805 15.8803 247.503 15.5361 247.175 15.1568C246.7 14.6285 245.999 13.8686 247.138 14.998C246.655 14.486 246.061 14.1006 245.658 13.5174C246.197 14.0748 246.771 14.4393 247.317 15.0274C247.615 15.3606 247.894 15.6739 248.165 16.0309C247.894 15.6713 247.616 15.3616 247.317 15.0274C246.615 14.2846 246.342 13.9645 247.334 15.0124C247.686 15.3988 248.009 15.7515 248.314 16.1778C248.004 15.7506 247.692 15.3963 247.345 15.0022C246.456 14.0587 245.191 12.8439 247.241 14.8412C245.751 13.2886 246.475 13.9167 247.426 14.9289C247.863 15.423 248.194 15.8123 248.561 16.3649C248.192 15.8071 247.866 15.4233 247.43 14.9255C246.751 14.1848 246.14 13.8442 245.567 12.9848C245.283 12.5368 245.081 12.2275 244.732 11.8198C244.68 11.7639 244.634 11.7289 244.564 11.6963C244.494 11.6658 244.436 11.6534 244.36 11.6515C244.283 11.6515 244.226 11.6632 244.155 11.692C244.084 11.7236 244.037 11.7567 243.983 11.8122C243.983 11.8122 243.976 11.8217 243.974 11.8217C243.376 12.4022 243.049 12.3672 242.542 13.1714C242.483 13.2724 242.432 13.3729 242.382 13.4787C242.145 13.9338 241.824 14.1695 241.433 14.4845C240.718 15.0754 240.284 15.5617 239.7 16.2673C239.458 16.5701 239.23 16.8798 239.004 17.1899C238.973 17.1219 238.943 17.0536 238.912 16.9849C238.373 15.8825 237.689 15.1717 237.103 14.1439C236.618 13.1964 236.291 12.432 235.658 11.5501C235.088 10.8048 234.933 10.6309 234.549 9.75492C234.325 9.24077 234.118 8.92923 233.836 8.44649C233.784 8.36242 233.73 8.31002 233.645 8.25925C233.558 8.21201 233.485 8.19274 233.387 8.18991C233.288 8.19109 233.215 8.20874 233.127 8.2555C233.041 8.30533 232.987 8.3564 232.933 8.44001C232.854 8.56352 232.775 8.687 232.696 8.81075C232.488 9.13029 232.397 9.35675 232.197 9.68054C232.099 9.83995 232.005 10.0142 231.915 10.1789C231.697 10.5782 231.489 10.984 231.262 11.3786C231.138 11.5942 230.998 11.7811 230.862 11.9859C230.284 12.7865 229.718 13.5625 229.188 14.3969C228.744 15.0601 228.349 15.7581 227.929 16.4402C227.585 17.0127 227.429 17.3199 227.129 17.9111C226.785 18.5546 226.853 18.3428 226.476 18.9609C226.453 19.0039 226.396 19.0882 226.38 19.1277C226.016 19.7552 225.611 20.4426 225.238 21.0656C222.81 24.8091 223.499 24.3125 225.847 21.4409C226.287 20.842 226.704 20.2473 227.108 19.6227C227.142 19.5714 227.175 19.5091 227.21 19.4609C227.636 18.8176 227.552 19.0887 227.941 18.379C228.232 17.8192 228.419 17.4265 228.74 16.8803C228.775 16.8163 228.812 16.7517 228.85 16.6872C229.147 16.6188 229.61 16.4287 230.25 16.0882C230.681 15.8468 231.013 15.6113 231.388 15.2899C232.739 14.1166 231.415 14.1876 233.229 15.5801C233.535 15.8084 233.707 15.5967 233.784 15.301C234.131 14.254 234.827 15.1113 235.487 15.5926C235.006 15.2374 234.987 15.1337 235.585 15.5878C234.83 15.0142 235.05 15.0855 235.171 15.155C234.819 14.9379 234.442 14.7613 234.099 14.5304C237.415 15.7379 233.697 13.9473 236.031 15.591C235.52 15.2233 233.42 13.8872 235.245 14.9859C233.751 13.9786 235.806 15.3018 236.205 15.5963C235.427 15.0109 234.894 14.6696 234.008 14.2202C233.944 14.1918 233.892 14.1794 233.822 14.1768C233.753 14.1761 233.7 14.1863 233.635 14.2111C233.571 14.2378 233.525 14.268 233.476 14.3169C233.427 14.3674 233.398 14.4132 233.371 14.4779C233.29 14.6626 233.227 14.5801 232.973 14.2974C232.805 14.1111 232.62 13.9709 232.426 13.8131C232.31 13.7309 232.204 13.6968 232.061 13.6971C231.919 13.7041 231.814 13.7437 231.702 13.8323C231.027 14.3691 230.385 14.8763 229.676 15.3684L229.612 15.4164L229.907 14.9236C230.404 14.0902 230.969 13.3259 231.495 12.5172C231.651 12.2867 231.79 12.0654 231.925 11.8217C232.229 11.2506 232.5 10.6672 232.807 10.0976C233.559 8.65148 233.256 8.59059 233.89 10.0468C234.324 10.9735 234.522 11.1731 235.144 11.9447C235.775 12.7724 236.122 13.5183 236.616 14.4129C237.226 15.3963 237.983 16.1616 238.503 17.1788C238.559 17.2844 238.673 17.5296 238.672 17.5263C238.619 17.412 238.567 17.2864 238.509 17.1756C237.135 14.5782 237.455 15.223 238.509 17.1756C238.567 17.2864 238.619 17.412 238.672 17.5263L238.705 17.5988C238.41 18.001 238.109 18.3981 237.775 18.7741C237.561 19.0218 237.382 19.24 237.236 19.4289C237.08 19.2043 236.931 18.9774 236.786 18.7289C236.497 18.2132 236.212 17.7206 235.893 17.2213C235.789 17.0451 235.664 16.8685 235.554 16.6942C235.514 16.6323 235.473 16.593 235.409 16.5566C235.344 16.5222 235.289 16.5087 235.216 16.5075C235.143 16.5096 235.088 16.524 235.024 16.559C234.961 16.596 234.92 16.6363 234.881 16.6979C234.527 17.3037 234.257 17.7823 233.988 18.4375C233.6 19.3888 233.372 19.8 232.753 20.6204C232.039 21.5906 231.432 22.5819 230.813 23.6128C230.39 24.3393 230.009 25.0898 229.534 25.7851C229.532 25.7898 229.533 25.7872 229.534 25.7851C230.976 23.6274 231.538 22.8131 229.534 25.7851C229.502 25.8333 229.465 25.8823 229.431 25.9295C229.461 25.887 229.509 25.8276 229.534 25.7851C229.77 25.4582 229.974 25.1348 230.181 24.789C230.106 24.9161 230.029 25.0409 229.953 25.1673C231.006 23.533 230.054 25.1308 229.586 25.8223C229.504 25.9432 229.411 26.0634 229.327 26.1841C229.412 26.0625 229.499 25.9425 229.586 25.8223C230.092 25.1055 230.464 24.4098 230.924 23.6824C231.027 23.5228 231.023 23.5329 230.929 23.6847C230.481 24.4202 230.107 25.1228 229.605 25.8358C229.289 26.2732 229.041 26.6362 228.788 27.1151C228.794 27.1057 228.8 27.0962 228.806 27.0867C229.054 26.6189 229.3 26.2655 229.611 25.8399C230.115 25.1354 230.502 24.4261 230.972 23.7117C231.302 23.2271 231.34 23.1974 231.013 23.7375C230.831 24.0398 230.656 24.3449 230.479 24.6498C230.651 24.3562 230.832 24.0204 231.022 23.7424C231.563 22.8955 232.09 22.091 232.72 21.3053C232.161 22.1246 231.64 22.9597 231.114 23.8002C230.662 24.5375 230.28 25.2473 229.773 25.9568C229.547 26.291 229.322 26.58 229.119 26.935C229.322 26.5873 229.537 26.2817 229.773 25.9568C230.282 25.2365 230.659 24.5371 231.121 23.8035C231.333 23.4736 231.314 23.5083 231.128 23.8083C230.678 24.5472 230.302 25.259 229.797 25.9732C229.489 26.4023 229.23 26.775 228.99 27.2443C229.238 26.7644 229.483 26.4111 229.801 25.9758C230.308 25.2694 230.697 24.5543 231.157 23.8253C232.509 21.7441 232.598 21.6429 231.182 23.8418C231.006 24.1198 230.839 24.4006 230.671 24.6831C230.836 24.4146 231.013 24.1026 231.195 23.8485C232.187 22.3679 232.065 22.585 231.244 23.8799C230.785 24.617 230.401 25.328 229.889 26.0391C229.432 26.6647 229.185 27.0483 228.854 27.7462C229.191 27.0431 229.432 26.6664 229.891 26.0405C230.403 25.3315 230.791 24.6185 231.253 23.8845C231.891 22.8938 232.517 21.9326 233.249 21.0066C233.926 20.1578 234.206 19.7086 234.645 18.7115C235.613 16.5312 234.862 16.653 235.989 18.7934C236.051 18.9112 236.112 19.0364 236.177 19.1519C236.43 19.6178 236.693 20.0134 236.993 20.4478C237.428 21.0802 237.523 21.3159 237.796 22.0218C237.912 22.3109 238.012 22.5415 238.135 22.755C238.076 22.7014 238.016 22.6482 237.951 22.596C237.754 22.4396 237.562 22.3074 237.352 22.1683C237.152 22.0419 236.447 21.5906 236.182 21.6005C235.811 21.6326 235.032 22.6737 234.775 22.9781C234.575 23.1843 234.567 23.0443 234.417 22.9218C234.401 22.9099 234.373 22.8899 234.355 22.8774C234.322 22.8561 234.291 22.8458 234.252 22.8402C234.199 22.8354 234.156 22.8426 234.109 22.8689C233.958 22.9834 234.026 22.989 233.778 23.1213C233.275 23.3655 233.224 23.2157 232.859 23.2915C233.54 23.2939 233.718 23.3153 232.859 23.2915L232.834 23.2918C232.592 23.2823 232.653 23.2847 232.829 23.2918L232.814 23.2925L232.834 23.2918L233.09 23.304C233.634 23.3643 232.893 23.3576 232.743 23.3581C234.371 23.3973 233.034 23.3128 232.375 23.4457C232.379 23.446 232.382 23.444 232.386 23.4436C232.822 23.3637 234.44 23.4449 233.246 23.4933C233.488 23.498 233.674 23.4663 233.899 23.3754C234.045 23.3083 234.322 23.1252 234.278 23.1753C234.256 23.1871 234.234 23.1919 234.209 23.1896C234.197 23.1919 234.174 23.1777 234.164 23.1753C234.15 23.1706 234.182 23.199 234.182 23.2007C234.182 23.2014 234.198 23.2218 234.199 23.2249C234.191 23.2202 234.183 23.2132 234.175 23.2085C234.174 23.2075 234.14 23.1836 234.152 23.1942C234.168 23.206 234.186 23.2107 234.205 23.2131C234.238 23.2178 234.263 23.2124 234.292 23.199C234.371 23.155 234.14 23.354 233.938 23.4567C233.313 23.7354 233.12 23.5171 232.534 23.6151C232.517 23.6198 232.499 23.6222 232.482 23.6269C232.499 23.6222 232.517 23.6175 232.534 23.6151C234.971 23.5145 232.706 23.5962 232.433 23.6754C233.048 23.5211 233.291 23.7824 233.969 23.5226C234.338 23.3473 234.678 23.189 233.979 23.5438C233.726 23.6538 233.54 23.6848 233.264 23.6768C233.528 23.7004 233.749 23.6697 233.996 23.5799C234.171 23.5088 234.171 23.5166 234.006 23.6011C233.295 23.9277 232.99 23.5894 232.314 23.8204C233.016 23.5944 233.224 23.9247 234.016 23.6217C234.149 23.5589 234.612 23.2401 234.399 23.3938C234.326 23.4326 234.26 23.4449 234.178 23.4364C234.121 23.4269 234.08 23.4151 234.031 23.3846C234.002 23.3657 233.999 23.3633 234.027 23.3869C234.018 23.3987 234.266 23.5686 234.28 23.5792C234.934 24.0147 234.814 23.7962 235.284 23.4632C236.649 22.1505 235.698 22.2243 236.647 22.9318C237.098 23.2686 237.442 23.5036 237.831 23.8937C238.878 24.7286 239.621 25.0933 239.82 24.9761C240.044 25.3361 240.27 25.6943 240.5 26.0512C240.898 26.69 241.163 27.2986 241.508 27.958C242.006 28.8441 241.727 28.0672 242.208 28.7362C242.279 28.8397 242.35 28.9436 242.421 29.0463C242.886 29.6943 243.243 30.2829 243.733 30.9092C244.929 32.5166 245.076 32.3362 244.238 30.5878C243.865 29.889 243.418 29.2511 243.008 28.5749C242.949 28.4786 242.872 28.3555 242.822 28.2568C242.409 27.6064 242.614 28.1995 242.245 27.5087C241.894 26.7945 241.656 26.1811 241.226 25.49C240.925 25.0219 240.624 24.5541 240.323 24.0853C240.294 24.0404 240.266 23.9949 240.237 23.9498C239.895 23.4191 239.691 23.2011 239.232 22.755C238.865 22.3927 238.735 22.1284 238.534 21.6582C238.223 20.8958 238.078 20.6013 237.595 19.928C239.304 18.6812 239.316 18.2824 240.408 16.8569L240.405 16.8556ZM238.902 17.3245C238.86 17.2324 238.819 17.1397 238.776 17.0465C237.121 14.0787 237.334 14.2276 238.801 17.0342C238.842 17.1223 238.882 17.2099 238.921 17.2968L238.902 17.3245ZM238.925 17.2925C238.886 17.2061 238.847 17.119 238.807 17.0316C238.263 15.9308 237.575 15.2197 237.006 14.1952C236.56 13.3089 236.541 13.2515 237.027 14.1905C237.387 14.8291 237.825 15.3777 238.239 15.9795C237.873 15.42 237.339 14.7671 237.063 14.1639C236.999 14.0206 237.016 14.0471 237.081 14.1621C237.686 15.1809 238.352 15.8744 238.906 16.9861C238.938 17.055 238.968 17.124 238.999 17.1925L238.925 17.2925ZM238.703 17.597C238.638 17.4555 238.577 17.3095 238.509 17.173C238.385 16.9262 238.27 16.706 238.121 16.4715C238.204 16.6004 238.279 16.73 238.354 16.8625C237.64 15.519 237.871 15.8364 238.566 17.1462C238.631 17.2719 238.689 17.4039 238.747 17.5361L238.762 17.5171C238.704 17.3912 238.647 17.2644 238.587 17.1364C237.015 14.1517 237.277 14.7883 238.566 17.1462C238.629 17.2752 238.689 17.4048 238.747 17.5361L238.703 17.597ZM247.252 15.395C247.273 15.4198 247.311 15.4618 247.295 15.445L247.252 15.395ZM246.188 15.5604L246.172 15.5603C246.181 15.5601 246.196 15.5597 246.188 15.5604ZM246.563 15.4601C246.563 15.4611 246.567 15.4615 246.567 15.4624C246.57 15.4617 246.574 15.4615 246.577 15.4608C246.598 15.4561 246.565 15.4601 246.563 15.4601ZM232.834 23.2918C232.949 23.2906 233.06 23.2992 233.175 23.3039C233.137 23.3029 233.096 23.2991 233.059 23.3014L232.834 23.2918ZM233.059 23.3014L233.084 23.3039C233.069 23.3027 233.049 23.3017 233.059 23.3014Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M334.417 23.4457C334.417 23.4457 334.401 23.4482 334.403 23.4467C334.394 23.4491 334.382 23.4538 334.373 23.4586C334.311 23.4798 334.408 23.4481 334.417 23.4457ZM340.169 16.1383C339.769 15.5455 339.219 14.9072 338.905 14.2757C338.651 13.762 338.418 13.2422 338.166 12.7293C338.457 13.224 338.711 13.7316 338.985 14.2356C339.593 15.2516 340.277 15.9511 340.819 17.0465C340.861 17.1397 340.903 17.2324 340.944 17.3245L340.809 17.5103C340.753 17.3849 340.697 17.2593 340.639 17.1315C340.169 16.2265 338.27 13.4807 340.169 16.1383ZM342.448 16.8556C342.575 16.6971 342.701 16.5382 342.828 16.3795C343.094 16.0467 343.341 15.7681 343.623 15.4897C343.791 15.6958 344.066 15.933 344.459 16.3324C344.537 16.4122 344.612 16.4582 344.719 16.4915C344.827 16.5208 344.915 16.5222 345.024 16.4963C345.049 16.4944 345.218 16.4289 345.252 16.4152C345.454 16.3345 345.592 16.2702 345.77 16.136C346.645 15.4155 346.281 15.6751 346.704 15.7424C347.033 15.7447 348.035 15.6351 348.372 15.5574C347.713 15.5891 347.798 15.5992 348.372 15.5574C348.382 15.5569 348.391 15.5565 348.4 15.5558C348.312 15.5606 348.225 15.5628 348.138 15.5675C348.167 15.5661 348.203 15.5656 348.231 15.5604C348.615 15.5416 348.481 15.5486 348.212 15.5597C347.784 15.5456 348.282 15.4976 348.44 15.492C347.299 15.5184 348.052 15.4755 348.607 15.4627C348.606 15.4615 348.605 15.4611 348.603 15.4604C348.453 15.4628 347.101 15.4367 348.069 15.3829C347.796 15.3923 347.458 15.4069 347.194 15.3377C347.642 15.27 348.101 15.2724 348.553 15.2592C347.275 15.2837 347.847 15.2426 348.6 15.2242C348.144 15.236 346.579 15.1975 348.044 15.2004C346.702 15.1135 348.382 15.1168 348.652 15.126C348.48 15.1142 346.868 15.1354 346.868 15.0535C346.868 15.0393 346.212 14.8749 346.15 14.86C346.077 14.8411 345.967 14.8529 345.896 14.8742C345.86 14.886 345.829 14.8978 345.796 14.9145C345.678 14.9797 345.606 15.0558 345.547 15.1763C345.481 15.2949 345.422 15.3954 345.305 15.4657C345.048 15.6082 344.405 15.3204 343.965 15.1659L343.999 15.1354C344.509 14.6857 344.842 14.3945 345.132 13.7559C346.137 11.5139 346.323 12.2663 347.077 13.3352C347.795 14.2898 348.353 14.4819 349.116 15.2459L349.591 15.7346C349.44 15.5652 349.285 15.399 349.132 15.2318C348.712 14.7866 348.418 14.4717 349.134 15.2293C349.288 15.397 349.441 15.5636 349.591 15.7346C349.607 15.7535 349.623 15.7731 349.639 15.7919C349.482 15.6082 349.318 15.4292 349.156 15.2495C349.215 15.3142 349.275 15.3819 349.335 15.445C349.946 16.1226 349.976 16.1517 349.292 15.395C349.243 15.3366 349.195 15.2761 349.147 15.2175C348.964 14.9913 348.891 14.889 349.179 15.1883C349.381 15.4036 349.576 15.6186 349.766 15.8456C349.578 15.6186 349.383 15.4018 349.187 15.1819C348.571 14.5254 348.333 14.2521 349.201 15.1701C349.548 15.552 349.848 15.8839 350.152 16.305C350.15 16.3002 350.147 16.2931 350.143 16.2884C349.846 15.8803 349.544 15.5361 349.215 15.1568C348.74 14.6285 348.04 13.8686 349.178 14.998C348.695 14.486 348.101 14.1006 347.698 13.5174C348.237 14.0748 348.812 14.4393 349.357 15.0274C349.655 15.3606 349.934 15.6739 350.205 16.0309C349.934 15.6713 349.656 15.3616 349.357 15.0274C348.655 14.2846 348.383 13.9645 349.375 15.0124C349.727 15.3988 350.05 15.7515 350.355 16.1778C350.045 15.7506 349.733 15.3963 349.386 15.0022C348.497 14.0587 347.232 12.8439 349.282 14.8412C347.792 13.2886 348.516 13.9167 349.466 14.9289C349.904 15.423 350.235 15.8123 350.602 16.3649C350.233 15.8071 349.907 15.4233 349.47 14.9255C348.792 14.1848 348.181 13.8442 347.608 12.9848C347.324 12.5368 347.122 12.2275 346.773 11.8198C346.721 11.7639 346.674 11.7289 346.605 11.6963C346.535 11.6658 346.477 11.6534 346.401 11.6515C346.324 11.6515 346.266 11.6632 346.195 11.692C346.125 11.7236 346.078 11.7567 346.024 11.8122C346.024 11.8122 346.017 11.8217 346.015 11.8217C345.416 12.4022 345.089 12.3672 344.583 13.1714C344.524 13.2724 344.472 13.3729 344.423 13.4787C344.186 13.9338 343.864 14.1695 343.473 14.4845C342.759 15.0754 342.325 15.5617 341.74 16.2673C341.498 16.5701 341.27 16.8798 341.044 17.1899C341.014 17.1219 340.984 17.0536 340.952 16.9849C340.414 15.8825 339.729 15.1717 339.143 14.1439C338.659 13.1964 338.332 12.432 337.699 11.5501C337.128 10.8048 336.973 10.6309 336.589 9.75492C336.365 9.24077 336.158 8.92923 335.876 8.44649C335.824 8.36242 335.771 8.31002 335.685 8.25925C335.599 8.21201 335.526 8.19274 335.427 8.18991C335.329 8.19109 335.255 8.20874 335.168 8.2555C335.081 8.30533 335.028 8.3564 334.973 8.44001C334.895 8.56352 334.816 8.687 334.737 8.81075C334.528 9.13029 334.437 9.35675 334.238 9.68054C334.139 9.83995 334.046 10.0142 333.956 10.1789C333.737 10.5782 333.529 10.984 333.303 11.3786C333.178 11.5942 333.039 11.7811 332.902 11.9859C332.324 12.7865 331.759 13.5625 331.228 14.3969C330.784 15.0601 330.39 15.7581 329.969 16.4402C329.625 17.0127 329.469 17.3199 329.169 17.9111C328.825 18.5546 328.893 18.3428 328.517 18.9609C328.493 19.0039 328.436 19.0882 328.421 19.1277C328.056 19.7552 327.651 20.4426 327.279 21.0656C324.851 24.8091 325.54 24.3125 327.888 21.4409C328.328 20.842 328.745 20.2473 329.148 19.6227C329.182 19.5714 329.216 19.5091 329.251 19.4609C329.677 18.8176 329.593 19.0887 329.982 18.379C330.272 17.8192 330.46 17.4265 330.781 16.8803C330.816 16.8163 330.853 16.7517 330.891 16.6872C331.188 16.6188 331.651 16.4287 332.29 16.0882C332.721 15.8468 333.054 15.6113 333.429 15.2899C334.779 14.1166 333.455 14.1876 335.27 15.5801C335.575 15.8084 335.748 15.5967 335.824 15.301C336.172 14.254 336.867 15.1113 337.527 15.5926C337.046 15.2374 337.027 15.1337 337.625 15.5878C336.871 15.0142 337.09 15.0855 337.211 15.155C336.859 14.9379 336.482 14.7613 336.14 14.5304C339.456 15.7379 335.737 13.9473 338.071 15.591C337.561 15.2233 335.461 13.8872 337.286 14.9859C335.792 13.9786 337.847 15.3018 338.246 15.5963C337.467 15.0109 336.935 14.6696 336.048 14.2202C335.985 14.1918 335.933 14.1794 335.863 14.1768C335.794 14.1761 335.74 14.1863 335.675 14.2111C335.611 14.2378 335.566 14.268 335.516 14.3169C335.468 14.3674 335.438 14.4132 335.412 14.4779C335.33 14.6626 335.267 14.5801 335.013 14.2974C334.846 14.1111 334.66 13.9709 334.466 13.8131C334.35 13.7309 334.244 13.6968 334.102 13.6971C333.959 13.7041 333.855 13.7437 333.743 13.8323C333.068 14.3691 332.426 14.8763 331.716 15.3684L331.652 15.4164L331.947 14.9236C332.444 14.0902 333.009 13.3259 333.535 12.5172C333.692 12.2867 333.83 12.0654 333.966 11.8217C334.269 11.2506 334.54 10.6672 334.847 10.0976C335.599 8.65148 335.297 8.59059 335.931 10.0468C336.364 10.9735 336.562 11.1731 337.184 11.9447C337.815 12.7724 338.163 13.5183 338.657 14.4129C339.266 15.3963 340.024 16.1616 340.543 17.1788C340.599 17.2844 340.714 17.5296 340.712 17.5263C340.659 17.412 340.607 17.2864 340.55 17.1756C339.176 14.5782 339.495 15.223 340.55 17.1756C340.607 17.2864 340.659 17.412 340.712 17.5263L340.746 17.5988C340.45 18.001 340.15 18.3981 339.816 18.7741C339.602 19.0218 339.422 19.24 339.276 19.4289C339.12 19.2043 338.972 18.9774 338.827 18.7289C338.537 18.2132 338.252 17.7206 337.934 17.2213C337.829 17.0451 337.705 16.8685 337.594 16.6942C337.554 16.6323 337.513 16.593 337.449 16.5566C337.385 16.5222 337.33 16.5087 337.257 16.5075C337.183 16.5096 337.129 16.524 337.064 16.559C337.001 16.596 336.96 16.6363 336.922 16.6979C336.567 17.3037 336.298 17.7823 336.029 18.4375C335.64 19.3888 335.412 19.8 334.794 20.6204C334.079 21.5906 333.472 22.5819 332.854 23.6128C332.431 24.3393 332.049 25.0898 331.575 25.7851C331.573 25.7898 331.574 25.7872 331.575 25.7851C331.575 25.7853 331.575 25.7851 331.575 25.7851C333.016 23.6274 333.578 22.8131 331.575 25.7851C331.575 25.7853 331.575 25.7851 331.575 25.7851C331.543 25.8333 331.506 25.8823 331.472 25.9295C331.502 25.887 331.55 25.8276 331.575 25.7851C331.81 25.4582 332.015 25.1348 332.221 24.789C332.146 24.9161 332.069 25.0409 331.993 25.1673C333.047 23.533 332.094 25.1308 331.626 25.8223C331.545 25.9432 331.452 26.0634 331.368 26.1841C331.453 26.0625 331.539 25.9425 331.626 25.8223C332.132 25.1055 332.504 24.4098 332.965 23.6824C333.068 23.5228 333.064 23.5329 332.969 23.6847C332.521 24.4202 332.147 25.1228 331.645 25.8358C331.329 26.2732 331.081 26.6362 330.828 27.1151C330.835 27.1057 330.84 27.0962 330.845 27.0867C331.093 26.6189 331.339 26.2655 331.65 25.8399C332.154 25.1354 332.541 24.4261 333.011 23.7117C333.341 23.2271 333.379 23.1974 333.052 23.7375C332.87 24.0398 332.695 24.3449 332.518 24.6498C332.69 24.3562 332.871 24.0204 333.061 23.7424C333.602 22.8955 334.129 22.091 334.759 21.3053C334.2 22.1246 333.679 22.9597 333.153 23.8002C332.701 24.5375 332.319 25.2473 331.812 25.9568C331.586 26.291 331.36 26.58 331.158 26.935C331.361 26.5873 331.576 26.2817 331.812 25.9568C332.321 25.2365 332.698 24.5371 333.16 23.8035C333.372 23.4736 333.353 23.5083 333.167 23.8083C332.717 24.5472 332.341 25.259 331.836 25.9732C331.528 26.4023 331.269 26.775 331.028 27.2443C331.277 26.7644 331.522 26.4111 331.84 25.9758C332.346 25.2694 332.735 24.5543 333.196 23.8253C334.547 21.7441 334.637 21.6429 333.221 23.8418C333.045 24.1198 332.878 24.4006 332.71 24.6831C332.875 24.4146 333.052 24.1026 333.234 23.8485C334.226 22.3679 334.103 22.585 333.282 23.8799C332.824 24.617 332.439 25.328 331.927 26.0391C331.471 26.6647 331.224 27.0483 330.893 27.7462C331.23 27.0431 331.471 26.6664 331.929 26.0405C332.441 25.3315 332.83 24.6185 333.292 23.8845C333.93 22.8938 334.556 21.9326 335.287 21.0066C335.965 20.1578 336.245 19.7086 336.684 18.7115C337.652 16.5312 336.901 16.653 338.028 18.7934C338.09 18.9112 338.151 19.0364 338.216 19.1519C338.469 19.6178 338.731 20.0134 339.032 20.4478C339.467 21.0802 339.562 21.3159 339.834 22.0218C339.95 22.3109 340.051 22.5415 340.174 22.755C340.115 22.7014 340.054 22.6482 339.99 22.596C339.793 22.4396 339.601 22.3074 339.391 22.1683C339.191 22.0419 338.485 21.5906 338.221 21.6005C337.85 21.6326 337.071 22.6737 336.813 22.9781C336.614 23.1843 336.606 23.0443 336.455 22.9218C336.439 22.9099 336.411 22.8899 336.393 22.8774C336.36 22.8561 336.33 22.8458 336.291 22.8402C336.238 22.8354 336.195 22.8426 336.148 22.8689C335.997 22.9834 336.065 22.989 335.816 23.1213C335.314 23.3655 335.263 23.2157 334.897 23.2915C335.579 23.2939 335.757 23.3153 334.897 23.2915L334.873 23.2918C334.631 23.2823 334.691 23.2847 334.868 23.2918L334.854 23.2925L334.87 23.2922L335.128 23.304C335.673 23.3643 334.931 23.3576 334.782 23.3581C336.41 23.3973 335.071 23.3116 334.412 23.4446C334.417 23.4448 334.421 23.444 334.424 23.4436C334.86 23.3637 336.478 23.4449 335.284 23.4933C335.526 23.498 335.711 23.4663 335.937 23.3754C336.083 23.3083 336.36 23.1252 336.316 23.1753C336.295 23.1871 336.272 23.1919 336.246 23.1896C336.235 23.1919 336.212 23.1777 336.202 23.1753C336.188 23.1706 336.221 23.199 336.219 23.2007C336.218 23.2014 336.235 23.2218 336.235 23.2249C336.228 23.2202 336.219 23.2132 336.211 23.2085C336.21 23.2075 336.176 23.1836 336.187 23.1942C336.203 23.206 336.221 23.2107 336.24 23.2131C336.273 23.2178 336.298 23.2124 336.327 23.199C336.406 23.155 336.175 23.354 335.972 23.4567C335.348 23.7354 335.155 23.5171 334.569 23.6151C334.552 23.6198 334.534 23.6222 334.517 23.6269C334.533 23.6222 334.551 23.6175 334.569 23.6151C337.006 23.5145 334.741 23.5962 334.468 23.6754C335.083 23.5211 335.326 23.7824 336.004 23.5226C336.373 23.3473 336.713 23.189 336.014 23.5438C335.761 23.6538 335.575 23.6848 335.299 23.6768C335.563 23.7004 335.783 23.6697 336.031 23.5799C336.205 23.5088 336.205 23.5166 336.04 23.6011C335.33 23.9277 335.025 23.5894 334.349 23.8204C335.051 23.5944 335.259 23.9247 336.05 23.6217C336.183 23.5589 336.646 23.2401 336.433 23.3938C336.361 23.4326 336.294 23.4449 336.212 23.4364C336.155 23.4269 336.114 23.4151 336.066 23.3846C336.036 23.3657 336.034 23.3633 336.061 23.3869C336.052 23.3987 336.3 23.5686 336.314 23.5792C336.968 24.0147 336.848 23.7962 337.318 23.4632C338.683 22.1505 337.732 22.2243 338.681 22.9318C339.132 23.2686 339.476 23.5036 339.866 23.8937C340.912 24.7286 341.655 25.0933 341.854 24.9761C342.078 25.3361 342.304 25.6943 342.534 26.0512C342.932 26.69 343.197 27.2986 343.542 27.958C344.04 28.8441 343.761 28.0672 344.242 28.7362C344.313 28.8397 344.383 28.9436 344.455 29.0463C344.92 29.6943 345.277 30.2829 345.767 30.9092C346.963 32.5166 347.11 32.3362 346.272 30.5878C345.899 29.889 345.453 29.2511 345.042 28.5749C344.983 28.4786 344.907 28.3555 344.856 28.2568C344.443 27.6064 344.648 28.1995 344.279 27.5087C343.928 26.7945 343.69 26.1811 343.26 25.49C342.959 25.0219 342.657 24.5541 342.358 24.0853C342.329 24.0404 342.3 23.9949 342.271 23.9498C341.929 23.4191 341.725 23.2011 341.266 22.755C340.899 22.3927 340.77 22.1284 340.568 21.6582C340.257 20.8958 340.113 20.6013 339.629 19.928C341.338 18.6812 341.35 18.2824 342.442 16.8569L342.448 16.8556ZM340.944 17.3245C340.903 17.2324 340.861 17.1397 340.819 17.0465C339.164 14.0787 339.377 14.2276 340.844 17.0342C340.885 17.1223 340.925 17.2099 340.964 17.2968L340.944 17.3245ZM340.967 17.2925C340.929 17.2061 340.89 17.119 340.85 17.0316C340.305 15.9308 339.618 15.2197 339.048 14.1952C338.602 13.3089 338.583 13.2515 339.069 14.1905C339.429 14.8291 339.867 15.3777 340.281 15.9795C339.914 15.42 339.38 14.7671 339.105 14.1639C339.041 14.0206 339.058 14.0471 339.121 14.1621C339.727 15.1809 340.393 15.8744 340.947 16.9861C340.978 17.055 341.009 17.124 341.04 17.1925L340.967 17.2925ZM340.746 17.5988C340.681 17.4574 340.62 17.3095 340.551 17.173C340.427 16.9262 340.312 16.706 340.163 16.4715C340.246 16.6004 340.321 16.73 340.396 16.8625C339.682 15.519 339.913 15.8364 340.608 17.1462C340.673 17.2719 340.731 17.4039 340.789 17.5361L340.804 17.5171C340.746 17.3912 340.689 17.2644 340.629 17.1364C339.057 14.1517 339.319 14.7883 340.608 17.1462C340.671 17.2752 340.731 17.4048 340.789 17.5361L340.746 17.5988ZM349.292 15.395C349.314 15.4198 349.352 15.4618 349.335 15.445L349.292 15.395ZM348.231 15.5604L348.212 15.5597C348.222 15.5595 348.238 15.5597 348.231 15.5604ZM348.603 15.4604C348.603 15.4614 348.61 15.4618 348.607 15.4627C348.61 15.462 348.616 15.4615 348.621 15.4608C348.642 15.4561 348.609 15.4598 348.607 15.4598L348.603 15.4604ZM334.873 23.2918C334.987 23.2906 335.103 23.2992 335.217 23.3039C335.179 23.3029 335.138 23.2991 335.101 23.3014L334.873 23.2918ZM335.101 23.3014L335.128 23.304C335.114 23.3029 335.091 23.3017 335.101 23.3014Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M-86.5742 1.82042C-87.2005 1.84404 -87.7869 1.84676 -88.4687 1.82763C-90.6854 1.75961 -92.8913 1.71662 -95.1044 1.60751C-95.1514 1.60515 -95.1977 1.60281 -95.2437 1.60045C-95.1996 1.59998 -95.1486 1.59805 -95.1044 1.59829C-92.9142 1.56877 -90.753 1.54037 -88.5613 1.56989L-88.4335 1.64269C-88.2025 1.64505 -88.174 1.65924 -88.3577 1.68593L-88.1931 1.77991C-87.9586 1.78015 -87.7165 1.78465 -87.4605 1.79173L-86.5742 1.82042ZM168.834 0.931607C169.18 0.917437 169.55 0.926795 169.898 0.929157C170.671 0.929629 171.593 0.943339 172.353 0.835173C173.77 0.630649 174.741 0.706539 176.142 0.792505C178.229 0.89028 180.182 0.728469 182.292 0.893552C183.175 0.977865 183.583 0.971984 184.466 0.917192C186.146 0.816584 187.726 0.824775 189.404 0.840362C190.818 0.804228 192.249 0.856861 193.66 0.93031C194.771 1.02997 195.647 1.02549 196.759 1.00022C197.562 0.986051 198.349 1.01202 199.15 1.0191C199.832 1.01202 200.338 0.743853 201.247 0.7089C202.683 0.742672 203.824 1.25115 205.212 1.26343C206.393 1.23509 207.208 1.31719 208.36 1.46149C213.306 2.14379 213.295 2.69576 208.269 3.01482C207.275 3.05521 206.44 3.1097 205.452 3.24243C203.627 3.40917 202.84 3.0292 201.308 3.04927C200.733 3.26939 199.769 3.21079 199.151 3.24834C198.383 3.28731 197.605 3.28506 196.832 3.31883C195.55 3.3826 194.566 3.40922 193.276 3.30932C191.964 3.21815 190.628 3.25375 189.31 3.2358C188.408 3.21927 187.507 3.19871 186.606 3.19068C185.934 3.18596 185.288 3.21529 184.62 3.22686C183.543 3.27953 183.022 3.49713 181.942 3.37692C179.953 3.1698 177.94 3.28288 175.91 3.13504C174.798 3.03774 173.937 2.9274 172.812 3.05446C171.492 3.18766 170.159 3.09893 168.834 3.06398C165.004 3.00021 161.007 3.04025 157.162 3.00199C156.342 3.00672 155.54 3.03105 154.717 3.01381C153.586 2.98524 152.692 2.97682 151.559 3.07176C150.112 3.1386 148.658 3.18481 147.207 3.14254C145.489 3.14962 143.881 3.14966 142.163 3.0389C141.261 2.97796 140.844 2.96637 139.938 3.04596C138.712 3.13311 131.377 3.27407 129.805 3.0412C128.706 2.88934 127.326 2.94399 126.193 2.92934C125.018 2.90809 123.875 2.86089 122.703 2.7924C120.329 2.66062 117.579 2.59459 115.251 2.62245C114.118 2.64135 112.981 2.68493 111.852 2.58526C110.467 2.45277 109.232 2.58994 107.857 2.68559C106.624 2.76022 105.399 2.75685 104.17 2.84329C103.229 2.91674 102.536 2.96973 101.578 2.94635C100.473 2.9199 99.3974 2.91724 98.2926 2.93684C96.9625 2.9751 95.6248 3.06608 94.2992 2.93453C93.1856 2.81196 92.3246 2.92267 91.2242 3.02304C89.2312 3.2167 87.1696 3.03727 85.1886 3.28265L85.1979 3.28164C84.1082 3.40894 83.4979 3.42342 82.4042 3.36957C82.0502 3.35304 81.6981 3.34287 81.3473 3.33555C81.2165 3.08214 81.0812 2.82851 80.9425 2.57604C80.7678 2.57368 80.5932 2.56655 80.4178 2.55946C79.675 2.51412 79.069 2.50085 78.3239 2.5266C76.5049 2.5932 74.6892 2.61665 72.8707 2.65892C71.8656 2.68254 70.7532 2.66601 69.7667 2.79284C68.1839 3.00208 66.9012 2.91205 65.3267 2.85914C64.0806 2.82844 62.8507 2.87327 61.6025 2.83147C60.7639 2.79203 60.1569 2.77129 59.3138 2.81734C58.4003 2.87095 57.4979 2.91181 56.5822 2.93424C56.3527 2.93897 56.1177 2.93898 55.8898 2.94606C54.7932 2.95787 53.4378 2.89797 52.3748 3.0399C50.9561 3.24348 49.9831 3.16614 48.5803 3.07782C46.4937 2.97603 44.5408 3.13309 42.4318 2.96163C41.5488 2.8759 41.1416 2.8767 40.2571 2.93078C38.5728 3.02573 37.0015 3.00907 35.3198 2.98498L35.0616 2.98974C34.9041 2.79537 34.7454 2.6046 34.5855 2.41661C34.2334 2.44826 33.8763 2.48774 33.4968 2.53899C31.6716 2.70549 30.884 2.32537 29.352 2.34497C28.7776 2.56508 27.9061 2.73775 27.2888 2.77554C26.5203 2.81451 25.7419 2.81187 24.9691 2.84588C23.6874 2.90965 22.7028 2.93618 21.4131 2.83651C20.1009 2.74535 18.7649 2.78118 17.4473 2.763C16.5456 2.74647 15.6446 2.72601 14.7429 2.71846C14.0717 2.71373 13.4248 2.74245 12.7572 2.75449C11.68 2.80692 11.066 2.79378 9.98642 2.67334C7.99762 2.46598 5.98404 2.57888 3.95392 2.43175C2.8425 2.33444 1.98141 2.22382 0.856766 2.35088C-0.464142 2.48384 -1.79686 2.39511 -3.12154 2.36039C-4.228 2.3415 -5.30518 2.34618 -6.41116 2.37452C-7.36694 2.39932 -8.0549 2.34716 -8.99486 2.27607C-10.2244 2.19176 -11.4503 2.19722 -12.6832 2.12471C-14.0645 2.03072 -15.2968 1.89608 -16.6879 2.03188C-17.2578 2.08313 -17.8293 2.09751 -18.4016 2.09704C-18.9395 2.18655 -19.5812 2.27915 -20.3273 2.37409C-21.5764 2.51862 -22.4592 2.60078 -23.7402 2.57243C-25.2455 2.58424 -26.4824 3.09291 -28.0383 3.12668C-29.0226 3.0922 -29.5722 2.82323 -30.3107 2.81662C-31.1798 2.82371 -32.0317 2.84967 -32.9034 2.8355C-34.1079 2.81 -35.0573 2.80575 -36.262 2.90541C-37.7907 2.97816 -39.3421 3.03155 -40.8746 2.99565C-42.6948 3.01218 -44.4059 3.01952 -46.2274 2.91868C-47.1849 2.86247 -47.6263 2.8573 -48.5837 2.94232C-50.871 3.1074 -52.9881 2.94706 -55.2501 3.04365C-56.7691 3.12938 -57.8218 3.20488 -59.3573 3.00012C-60.1809 2.89313 -61.1794 2.90586 -62.0185 2.90657C-62.3962 2.9068 -62.7962 2.91607 -63.1713 2.90426C-64.4199 2.88773 -65.6357 2.84258 -66.881 2.77669C-67.7962 2.73087 -68.4554 2.75152 -69.3651 2.79096C-70.7186 2.83418 -72.0518 2.78858 -73.4015 2.82022C-75.1088 2.87454 -76.4939 2.96597 -78.2104 2.75766C-79.2791 2.63084 -80.489 2.64759 -81.5772 2.62563C-83.909 2.57674 -86.1835 2.52635 -88.4994 2.51737C-90.7088 2.51029 -92.912 2.54878 -95.1205 2.56768C-96.5014 2.58185 -97.8865 2.6258 -99.2617 2.52472C-100.96 2.38892 -102.465 2.52327 -104.152 2.61726C-105.656 2.69024 -107.152 2.68416 -108.653 2.76848C-109.8 2.8398 -110.641 2.8923 -111.807 2.8675C-113.157 2.83893 -114.472 2.83369 -115.822 2.85093C-117.44 2.88635 -119.067 2.97509 -120.679 2.84141C-122.052 2.71388 -123.103 2.82487 -124.46 2.9217C-126.938 3.06931 -129.396 2.95641 -131.824 3.16329C-133.141 3.28374 -133.891 3.29773 -135.206 3.24459C-136.021 3.23278 -136.81 3.20354 -137.629 3.20827C-138.73 3.21772 -139.831 3.23747 -140.93 3.25353C-142.539 3.27242 -144.17 3.23465 -145.771 3.32676C-147.347 3.42619 -148.548 3.39956 -150.113 3.33627C-150.943 3.30699 -151.779 3.30554 -152.607 3.27861C-154.377 2.40691 -156.188 1.56404 -158 0.809947C-157.165 0.668244 -156.328 0.514179 -155.388 0.495994C-154.28 0.53142 -153.661 0.79935 -152.829 0.806199C-151.85 0.799114 -150.891 0.773001 -149.91 0.787172C-148.553 0.812914 -147.484 0.817501 -146.127 0.717837C-144.405 0.645568 -142.659 0.591991 -140.932 0.627889C-138.883 0.611357 -136.956 0.603966 -134.904 0.704575C-133.826 0.761256 -133.329 0.766518 -132.251 0.683386C-129.674 0.517594 -127.291 0.681006 -124.744 0.58205C-123.033 0.496084 -121.848 0.419721 -120.118 0.624718C-119.191 0.731703 -118.065 0.718794 -117.121 0.718557C-116.696 0.718085 -116.245 0.709055 -115.822 0.720864C-114.417 0.737396 -113.047 0.782503 -111.645 0.848867C-110.615 0.894211 -109.872 0.873383 -108.847 0.83229C-107.323 0.788834 -105.823 0.834426 -104.301 0.802307C-102.38 0.748696 -100.819 0.657101 -98.8864 0.865876C-97.6832 0.992227 -96.3204 0.975282 -95.0947 0.997482C-92.8879 1.03858 -90.6866 1.05952 -88.4803 1.12376C-86.9327 1.06259 -85.0053 1.05359 -83.4723 1.07792C-82.8332 1.07083 -82.1939 1.06151 -81.5543 1.05442C-77.6221 1.00435 -73.4362 1.0997 -69.538 0.852903C-68.5194 0.782051 -67.7726 0.72956 -66.7367 0.754594C-65.5387 0.782699 -64.3706 0.787759 -63.1713 0.768865C-61.7351 0.733912 -60.2909 0.64527 -58.8593 0.778234C-57.6399 0.905294 -56.7068 0.794866 -55.5021 0.6978C-53.3015 0.550193 -51.1192 0.663227 -48.9625 0.455633C-47.7932 0.335422 -47.1272 0.322008 -45.9601 0.37491C-45.2369 0.386719 -44.5355 0.41529 -43.8079 0.410803C-42.8296 0.403718 -41.854 0.381561 -40.8767 0.365973C-39.4484 0.34708 -38.0002 0.382387 -36.5775 0.29217C-35.1794 0.192978 -34.1119 0.220215 -32.7225 0.2828C-31.886 0.316573 -31.0417 0.313507 -30.2084 0.352712C-29.5394 0.390735 -28.5945 0.56288 -27.9719 0.782991C-26.3617 0.801885 -25.5093 0.445734 -23.653 0.576572C-22.4696 0.549177 -21.2868 0.530557 -20.1024 0.503634C-19.098 0.482379 -17.9821 0.498943 -16.9959 0.371883C-15.4123 0.163108 -14.1344 0.254664 -12.5596 0.308747C-11.3138 0.340866 -10.0843 0.294605 -8.83569 0.338297C-7.99634 0.378918 -7.38795 0.399274 -6.54459 0.354874C-5.39537 0.288982 -4.27382 0.24402 -3.12154 0.227015C-2.77531 0.215207 -2.40617 0.222347 -2.05806 0.224709C-1.28436 0.225181 -0.362823 0.238891 0.397171 0.130725C1.81419 -0.0740351 2.7851 0.00222321 4.18629 0.0874809C6.2731 0.185492 8.22601 0.0234569 10.336 0.189249C11.2197 0.273089 11.6269 0.267736 12.5101 0.210583C14.1903 0.109738 15.7695 0.118886 17.4487 0.134473C18.8622 0.0981026 20.2934 0.151012 21.704 0.223988C22.8157 0.323652 23.6914 0.319354 24.8028 0.293611C25.6065 0.279441 26.3925 0.30541 27.1945 0.312495C27.8761 0.30541 28.3822 0.0371511 29.2908 0.00243401C30.5808 0.0324277 31.6322 0.445034 32.8385 0.538085L32.6477 0.354874C33.5388 0.364321 34.4334 0.345394 35.3205 0.350117C36.8974 0.366649 38.4273 0.398284 40.0059 0.338297C40.1825 0.335935 40.3681 0.321687 40.5467 0.316963C41.3733 0.293346 41.9623 0.333528 42.7884 0.427524C44.7628 0.639842 46.7941 0.530001 48.8179 0.676899C49.9234 0.775146 50.7847 0.886408 51.9037 0.761946C53.2269 0.628745 54.5623 0.718985 55.8898 0.754883C56.9948 0.773776 58.072 0.771403 59.177 0.743062C60.133 0.719209 60.8241 0.771421 61.7652 0.844398C62.9947 0.929183 64.2202 0.925843 65.4528 0.998347C66.8302 1.09376 68.0651 1.22961 69.4526 1.09593C70.5805 0.99509 71.7172 1.03881 72.8487 1.05557C74.658 1.07447 76.4635 1.11627 78.2731 1.11107C78.9412 1.10871 79.5118 1.13579 80.1407 1.18704C80.0382 1.01912 79.9341 0.852244 79.829 0.68598C80.7623 0.681257 81.6907 0.695405 82.6581 0.745945C83.5442 0.796486 83.9516 0.795249 84.8356 0.706449C86.9432 0.52814 88.8956 0.680307 90.9824 0.574266C92.3876 0.483104 93.358 0.404917 94.78 0.606843C95.8414 0.745948 97.1984 0.686335 98.2926 0.695782C98.9952 0.721052 99.6952 0.724481 100.401 0.755892C100.841 0.774785 101.279 0.799352 101.718 0.825803C102.561 0.871384 103.165 0.85177 104.003 0.813983C105.252 0.771708 106.482 0.818647 107.728 0.788181C109.306 0.736459 110.585 0.646419 112.171 0.857083C113.157 0.985324 114.27 0.969737 115.273 0.99359C116.967 1.03398 118.658 1.05835 120.351 1.11597C121.23 1.04866 121.904 1.00072 122.823 1.02127C123.955 1.04701 125.06 1.04846 126.193 1.02602C130.562 0.901798 135.267 1.12521 139.598 0.674593C140.69 0.552965 141.311 0.537656 142.406 0.58796C144.037 0.647475 145.627 0.774182 147.252 0.734269C147.511 0.717738 147.815 0.72256 148.079 0.717837C149.151 0.701305 150.241 0.701253 151.307 0.611744C152.622 0.500036 153.628 0.516803 154.937 0.569942C155.727 0.595448 156.522 0.588798 157.307 0.620681C161.535 0.858742 164.41 0.996554 168.834 0.931607ZM119.54 1.59584L119.599 1.78006C118.646 1.73755 117.695 1.6934 116.742 1.63317C117.679 1.60955 118.608 1.59702 119.54 1.59584ZM80.3618 1.55649L80.3663 1.56355C80.2439 1.55174 80.2376 1.5494 80.3618 1.55649ZM80.4537 1.71202L80.5233 1.83109L80.4841 1.82964C79.1566 1.7125 79.2133 1.67116 80.4537 1.71202ZM80.5396 1.85963L80.7057 2.14907L80.4508 2.13725C79.6986 2.08246 79.064 2.05382 78.3069 2.06633C76.7385 2.08523 75.1911 2.06724 73.6236 2.03347C75.1819 1.93711 76.7382 1.88706 78.2984 1.82258C79.0803 1.79353 79.7055 1.80847 80.4836 1.85948L80.5396 1.85963ZM80.7168 2.16796L80.7319 2.19463C80.6365 2.1899 80.5413 2.18513 80.4464 2.17805C79.6925 2.11901 79.6393 2.1075 80.4556 2.15686L80.7168 2.16796ZM80.7793 2.27895L80.8242 2.35852C80.6922 2.35616 80.5602 2.35134 80.4279 2.34425C79.68 2.29772 79.064 2.28247 78.3156 2.30562C74.9495 2.40646 75.3606 2.36658 78.3135 2.24306C79.073 2.21306 79.6866 2.22417 80.4445 2.26857C80.5562 2.2733 80.6679 2.27659 80.7793 2.27895ZM80.8384 2.38447L80.9293 2.54807C80.7555 2.54335 80.5819 2.53628 80.4083 2.52919C79.6722 2.47959 79.0579 2.45928 78.3215 2.47297C77.2479 2.49187 77.1503 2.47492 78.3189 2.39816C79.0714 2.35282 79.6764 2.35186 80.4341 2.38634L80.8384 2.38447ZM-88.8707 1.39446C-93.0254 1.26103 -93.6444 1.21798 -88.9911 1.32686L-88.8707 1.39446ZM-81.8203 1.99815C-83.1374 1.96863 -84.4654 1.91779 -85.782 1.94424C-87.9883 2.01533 -88.2337 1.97001 -86.2256 1.83137C-84.7561 1.87719 -83.2895 1.92022 -81.8203 1.99815Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M504.897 1.82042C505.523 1.84404 506.11 1.84676 506.791 1.82763C509.008 1.75961 511.214 1.71662 513.427 1.60751C513.474 1.60515 513.52 1.60281 513.567 1.60045C513.522 1.59998 513.471 1.59805 513.427 1.59829C511.237 1.56877 509.076 1.54037 506.884 1.56989L506.756 1.64269C506.525 1.64505 506.497 1.65924 506.681 1.68593L506.516 1.77991C506.281 1.78015 506.039 1.78465 505.783 1.79173L504.897 1.82042ZM249.488 0.931607C249.142 0.917437 248.773 0.926795 248.425 0.929157C247.651 0.929629 246.73 0.943339 245.97 0.835173C244.553 0.630649 243.582 0.706539 242.181 0.792505C240.094 0.89028 238.141 0.728469 236.031 0.893552C235.147 0.977865 234.74 0.971984 233.857 0.917192C232.177 0.816584 230.597 0.824775 228.918 0.840362C227.505 0.804228 226.074 0.856861 224.663 0.93031C223.551 1.02997 222.676 1.02549 221.564 1.00022C220.761 0.986051 219.974 1.01202 219.172 1.0191C218.491 1.01202 217.985 0.743853 217.076 0.7089C215.64 0.742672 214.499 1.25115 213.111 1.26343C211.93 1.23509 211.114 1.31719 209.963 1.46149C205.017 2.14379 205.027 2.69576 210.054 3.01482C211.048 3.05521 211.883 3.1097 212.87 3.24243C214.695 3.40917 215.483 3.0292 217.015 3.04927C217.589 3.26939 218.554 3.21079 219.171 3.24834C219.94 3.28731 220.718 3.28506 221.491 3.31883C222.773 3.3826 223.757 3.40922 225.047 3.30932C226.359 3.21815 227.695 3.25375 229.013 3.2358C229.914 3.21927 230.815 3.19871 231.717 3.19068C232.388 3.18596 233.035 3.21529 233.703 3.22686C234.78 3.27953 235.301 3.49713 236.381 3.37692C238.369 3.1698 240.383 3.28288 242.413 3.13504C243.525 3.03774 244.386 2.9274 245.51 3.05446C246.831 3.18766 248.164 3.09893 249.488 3.06398C253.319 3.00021 257.316 3.04025 261.161 3.00199C261.981 3.00672 262.783 3.03105 263.605 3.01381C264.737 2.98524 265.631 2.97682 266.764 3.07176C268.211 3.1386 269.665 3.18481 271.115 3.14254C272.833 3.14962 274.441 3.14966 276.16 3.0389C277.062 2.97796 277.479 2.96637 278.385 3.04596C279.611 3.13311 286.946 3.27407 288.518 3.0412C289.617 2.88934 290.997 2.94399 292.13 2.92934C293.305 2.90809 294.448 2.86089 295.62 2.7924C297.993 2.66062 300.743 2.59459 303.072 2.62245C304.205 2.64135 305.342 2.68493 306.471 2.58526C307.856 2.45277 309.091 2.58994 310.466 2.68559C311.698 2.76022 312.924 2.75685 314.152 2.84329C315.094 2.91674 315.787 2.96973 316.745 2.94635C317.85 2.9199 318.926 2.91724 320.03 2.93684C321.36 2.9751 322.698 3.06608 324.024 2.93453C325.137 2.81196 325.998 2.92267 327.098 3.02304C329.092 3.2167 331.153 3.03727 333.134 3.28265L333.125 3.28164C334.215 3.40894 334.825 3.42342 335.918 3.36957C336.272 3.35304 336.624 3.34287 336.975 3.33555C337.106 3.08214 337.242 2.82851 337.38 2.57604C337.555 2.57368 337.729 2.56655 337.905 2.55946C338.648 2.51412 339.254 2.50085 339.999 2.5266C341.818 2.5932 343.633 2.61665 345.452 2.65892C346.457 2.68254 347.569 2.66601 348.556 2.79284C350.139 3.00208 351.421 2.91205 352.996 2.85914C354.242 2.82844 355.472 2.87327 356.72 2.83147C357.559 2.79203 358.166 2.77129 359.009 2.81734C359.922 2.87095 360.825 2.91181 361.74 2.93424C361.97 2.93897 362.205 2.93898 362.433 2.94606C363.529 2.95787 364.885 2.89797 365.948 3.0399C367.367 3.24348 368.34 3.16614 369.742 3.07782C371.829 2.97603 373.782 3.13309 375.891 2.96163C376.774 2.8759 377.181 2.8767 378.066 2.93078C379.75 3.02573 381.321 3.00907 383.003 2.98498L383.261 2.98974C383.418 2.79537 383.577 2.6046 383.737 2.41661C384.089 2.44826 384.446 2.48774 384.826 2.53899C386.651 2.70549 387.438 2.32537 388.971 2.34497C389.545 2.56508 390.416 2.73775 391.034 2.77554C391.802 2.81451 392.581 2.81187 393.353 2.84588C394.635 2.90965 395.62 2.93618 396.91 2.83651C398.222 2.74535 399.558 2.78118 400.875 2.763C401.777 2.74647 402.678 2.72601 403.58 2.71846C404.251 2.71373 404.898 2.74245 405.566 2.75449C406.642 2.80692 407.256 2.79378 408.336 2.67334C410.325 2.46598 412.339 2.57888 414.369 2.43175C415.48 2.33444 416.341 2.22382 417.466 2.35088C418.787 2.48384 420.119 2.39511 421.444 2.36039C422.55 2.3415 423.628 2.34618 424.734 2.37452C425.69 2.39932 426.378 2.34716 427.317 2.27607C428.547 2.19176 429.773 2.19722 431.006 2.12471C432.387 2.03072 433.62 1.89608 435.011 2.03188C435.58 2.08313 436.152 2.09751 436.724 2.09704C437.262 2.18655 437.904 2.27915 438.65 2.37409C439.899 2.51862 440.782 2.60078 442.063 2.57243C443.568 2.58424 444.805 3.09291 446.361 3.12668C447.345 3.0922 447.895 2.82323 448.633 2.81662C449.502 2.82371 450.354 2.84967 451.226 2.8355C452.43 2.81 453.38 2.80575 454.585 2.90541C456.113 2.97816 457.665 3.03155 459.197 2.99565C461.017 3.01218 462.728 3.01952 464.55 2.91868C465.508 2.86247 465.949 2.8573 466.906 2.94232C469.194 3.1074 471.311 2.94706 473.573 3.04365C475.092 3.12938 476.144 3.20488 477.68 3.00012C478.503 2.89313 479.502 2.90586 480.341 2.90657C480.719 2.9068 481.119 2.91607 481.494 2.90426C482.742 2.88773 483.958 2.84258 485.204 2.77669C486.119 2.73087 486.778 2.75152 487.688 2.79096C489.041 2.83418 490.374 2.78858 491.724 2.82022C493.431 2.87454 494.817 2.96597 496.533 2.75766C497.602 2.63084 498.812 2.64759 499.9 2.62563C502.231 2.57674 504.506 2.52635 506.822 2.51737C509.031 2.51029 511.234 2.54878 513.443 2.56768C514.824 2.58185 516.209 2.6258 517.584 2.52472C519.283 2.38892 520.787 2.52327 522.474 2.61726C523.978 2.69024 525.475 2.68416 526.976 2.76848C528.123 2.8398 528.964 2.8923 530.13 2.8675C531.48 2.83893 532.795 2.83369 534.145 2.85093C535.762 2.88635 537.389 2.97509 539.001 2.84141C540.374 2.71388 541.425 2.82487 542.783 2.9217C545.261 3.06931 547.718 2.95641 550.146 3.16329C551.463 3.28374 552.213 3.29773 553.528 3.24459C554.343 3.23278 555.133 3.20354 555.952 3.20827C557.053 3.21772 558.153 3.23747 559.253 3.25353C560.861 3.27242 562.493 3.23465 564.094 3.32676C565.669 3.42619 566.871 3.39956 568.436 3.33627C569.265 3.30699 570.101 3.30554 570.929 3.27861C572.699 2.40691 574.511 1.56404 576.322 0.809947C575.487 0.668244 574.651 0.514179 573.711 0.495994C572.602 0.53142 571.984 0.79935 571.151 0.806199C570.173 0.799114 569.213 0.773001 568.232 0.787172C566.876 0.812914 565.806 0.817501 564.449 0.717837C562.728 0.645568 560.981 0.591991 559.255 0.627889C557.206 0.611357 555.278 0.603966 553.227 0.704575C552.148 0.761256 551.652 0.766518 550.573 0.683386C547.997 0.517594 545.613 0.681006 543.066 0.58205C541.355 0.496084 540.17 0.419721 538.44 0.624718C537.513 0.731703 536.388 0.718794 535.443 0.718557C535.018 0.718085 534.567 0.709055 534.145 0.720864C532.739 0.737396 531.37 0.782503 529.967 0.848867C528.937 0.894211 528.195 0.873383 527.17 0.83229C525.646 0.788834 524.145 0.834426 522.624 0.802307C520.703 0.748696 519.142 0.657101 517.209 0.865876C516.006 0.992227 514.643 0.975282 513.417 0.997482C511.211 1.03858 509.009 1.05952 506.803 1.12376C505.255 1.06259 503.328 1.05359 501.795 1.07792C501.156 1.07083 500.516 1.06151 499.877 1.05442C495.945 1.00435 491.759 1.0997 487.86 0.852903C486.842 0.782051 486.095 0.72956 485.059 0.754594C483.861 0.782699 482.693 0.787759 481.494 0.768865C480.058 0.733912 478.613 0.64527 477.182 0.778234C475.963 0.905294 475.029 0.794866 473.825 0.6978C471.624 0.550193 469.442 0.663227 467.285 0.455633C466.116 0.335422 465.45 0.322008 464.283 0.37491C463.56 0.386719 462.858 0.41529 462.13 0.410803C461.152 0.403718 460.176 0.381561 459.199 0.365973C457.771 0.34708 456.323 0.382387 454.9 0.29217C453.502 0.192978 452.435 0.220215 451.045 0.2828C450.209 0.316573 449.364 0.313507 448.531 0.352712C447.862 0.390735 446.917 0.56288 446.295 0.782991C444.684 0.801885 443.832 0.445734 441.975 0.576572C440.792 0.549177 439.61 0.530557 438.425 0.503634C437.421 0.482379 436.305 0.498943 435.318 0.371883C433.735 0.163108 432.457 0.254664 430.882 0.308747C429.636 0.340866 428.407 0.294605 427.158 0.338297C426.319 0.378918 425.711 0.399274 424.867 0.354874C423.718 0.288982 422.596 0.24402 421.444 0.227015C421.098 0.215207 420.729 0.222347 420.381 0.224709C419.607 0.225181 418.685 0.238891 417.925 0.130725C416.508 -0.0740351 415.538 0.00222321 414.136 0.0874809C412.05 0.185492 410.096 0.0234569 407.987 0.189249C407.103 0.273089 406.696 0.267736 405.813 0.210583C404.132 0.109738 402.553 0.118886 400.874 0.134473C399.46 0.0981026 398.029 0.151012 396.619 0.223988C395.507 0.323652 394.631 0.319354 393.52 0.293611C392.716 0.279441 391.93 0.30541 391.128 0.312495C390.447 0.30541 389.94 0.0371511 389.032 0.00243401C387.742 0.0324277 386.69 0.445034 385.484 0.538085L385.675 0.354874C384.784 0.364321 383.889 0.345394 383.002 0.350117C381.425 0.366649 379.895 0.398284 378.317 0.338297C378.14 0.335935 377.954 0.321687 377.776 0.316963C376.949 0.293346 376.36 0.333528 375.534 0.427524C373.56 0.639842 371.528 0.530001 369.505 0.676899C368.399 0.775146 367.538 0.886408 366.419 0.761946C365.096 0.628745 363.76 0.718985 362.433 0.754883C361.328 0.773776 360.251 0.771403 359.146 0.743062C358.189 0.719209 357.498 0.771421 356.557 0.844398C355.328 0.929183 354.102 0.925843 352.87 0.998347C351.492 1.09376 350.257 1.22961 348.87 1.09593C347.742 0.99509 346.605 1.03881 345.474 1.05557C343.665 1.07447 341.859 1.11627 340.049 1.11107C339.381 1.10871 338.811 1.13579 338.182 1.18704C338.284 1.01912 338.388 0.852244 338.494 0.68598C337.56 0.681257 336.632 0.695405 335.664 0.745945C334.778 0.796486 334.371 0.795249 333.487 0.706449C331.38 0.52814 329.427 0.680307 327.34 0.574266C325.935 0.483104 324.965 0.404917 323.542 0.606843C322.481 0.745948 321.124 0.686335 320.03 0.695782C319.327 0.721052 318.627 0.724481 317.921 0.755892C317.482 0.774785 317.043 0.799352 316.605 0.825803C315.762 0.871384 315.157 0.85177 314.319 0.813983C313.07 0.771708 311.841 0.818647 310.594 0.788181C309.017 0.736459 307.737 0.646419 306.151 0.857083C305.166 0.985324 304.052 0.969737 303.049 0.99359C301.355 1.03398 299.665 1.05835 297.972 1.11597C297.092 1.04866 296.419 1.00072 295.5 1.02127C294.368 1.04701 293.262 1.04846 292.13 1.02602C287.761 0.901798 283.056 1.12521 278.724 0.674593C277.632 0.552965 277.012 0.537656 275.917 0.58796C274.286 0.647475 272.696 0.774182 271.07 0.734269C270.811 0.717738 270.508 0.72256 270.243 0.717837C269.171 0.701305 268.081 0.701253 267.015 0.611744C265.7 0.500036 264.694 0.516803 263.385 0.569942C262.596 0.595448 261.801 0.588798 261.015 0.620681C256.788 0.858742 253.913 0.996554 249.488 0.931607ZM298.783 1.59584L298.724 1.78006C299.677 1.73755 300.628 1.6934 301.581 1.63317C300.644 1.60955 299.715 1.59702 298.783 1.59584ZM337.961 1.55649L337.956 1.56355C338.079 1.55174 338.085 1.5494 337.961 1.55649ZM337.869 1.71202L337.799 1.83109L337.839 1.82964C339.166 1.7125 339.11 1.67116 337.869 1.71202ZM337.783 1.85963L337.617 2.14907L337.872 2.13725C338.624 2.08246 339.259 2.05382 340.016 2.06633C341.584 2.08523 343.132 2.06724 344.699 2.03347C343.141 1.93711 341.585 1.88706 340.024 1.82258C339.242 1.79353 338.617 1.80847 337.839 1.85948L337.783 1.85963ZM337.606 2.16796L337.592 2.19463C337.687 2.1899 337.782 2.18513 337.878 2.17805C338.631 2.11901 338.685 2.1075 337.868 2.15686L337.606 2.16796ZM337.543 2.27895L337.499 2.35852C337.631 2.35616 337.763 2.35134 337.895 2.34425C338.643 2.29772 339.259 2.28247 340.007 2.30562C343.373 2.40646 342.962 2.36658 340.009 2.24306C339.25 2.21306 338.636 2.22417 337.878 2.26857C337.767 2.2733 337.655 2.27659 337.543 2.27895ZM337.484 2.38447L337.393 2.54807C337.567 2.54335 337.741 2.53628 337.915 2.52919C338.65 2.47959 339.265 2.45928 340.001 2.47297C341.075 2.49187 341.172 2.47492 340.004 2.39816C339.251 2.35282 338.646 2.35186 337.888 2.38634L337.484 2.38447ZM507.194 1.39446C511.348 1.26103 511.967 1.21798 507.314 1.32686L507.194 1.39446ZM500.143 1.99815C501.46 1.96863 502.788 1.91779 504.105 1.94424C506.311 2.01533 506.556 1.97001 504.548 1.83137C503.079 1.87719 501.612 1.92022 500.143 1.99815Z" fill="#94573C"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M-13.1233 38.4081C-14.3594 38.4317 -15.5169 38.4342 -16.8629 38.4153C-21.2382 38.3473 -25.5919 38.3043 -29.9609 38.1952C-30.0535 38.1928 -30.1446 38.1903 -30.2358 38.188C-30.1486 38.1875 -30.048 38.1857 -29.9609 38.186C-25.6375 38.1564 -21.3716 38.128 -17.0454 38.1576L-16.7934 38.2304C-16.3374 38.2327 -16.2812 38.2469 -16.6439 38.2736L-16.319 38.3673C-15.8558 38.3675 -15.378 38.372 -14.8726 38.3791L-13.1233 38.4081ZM491.013 37.5191C491.697 37.505 492.425 37.5145 493.112 37.5168C494.639 37.5173 496.458 37.531 497.959 37.4228C500.756 37.2181 502.672 37.2941 505.438 37.38C509.556 37.4778 513.412 37.3161 517.576 37.4812C519.32 37.5655 520.124 37.5597 521.868 37.5049C525.184 37.4043 528.301 37.4124 531.616 37.428C534.406 37.3919 537.231 37.4445 540.015 37.518C542.209 37.6176 543.938 37.6132 546.132 37.5879C547.718 37.5737 549.269 37.5997 550.852 37.6068C552.198 37.5997 553.197 37.3314 554.99 37.2964C557.825 37.3302 560.076 37.8387 562.816 37.851C565.149 37.8226 566.757 37.9048 569.031 38.0489C578.794 38.7314 578.772 39.2834 568.851 39.6022C566.889 39.6428 565.241 39.6974 563.292 39.8301C559.689 39.9968 558.135 39.6168 555.111 39.6367C553.977 39.8568 552.073 39.7985 550.855 39.836C549.338 39.875 547.801 39.8724 546.276 39.9062C543.746 39.9702 541.803 39.9968 539.257 39.8967C536.667 39.8055 534.03 39.8413 531.429 39.8233C529.649 39.8068 527.871 39.7862 526.091 39.7782C524.766 39.7735 523.489 39.8027 522.172 39.8142C520.045 39.8669 519.017 40.0845 516.886 39.9643C512.961 39.7572 508.986 39.8703 504.979 39.7224C502.785 39.6251 501.086 39.5148 498.866 39.6418C496.259 39.775 493.628 39.6861 491.013 39.6514C483.453 39.5878 475.563 39.6277 467.974 39.5897C466.355 39.5944 464.772 39.6185 463.149 39.6015C460.915 39.5731 459.151 39.5646 456.914 39.6596C454.057 39.7264 451.188 39.7728 448.325 39.7305C444.934 39.7376 441.76 39.7376 438.368 39.6269C436.588 39.5659 435.764 39.5543 433.976 39.6339C431.557 39.7208 417.079 39.862 413.976 39.6292C411.806 39.4773 409.083 39.5319 406.845 39.517C404.526 39.4958 402.271 39.4487 399.957 39.3802C395.272 39.2482 389.844 39.1825 385.248 39.2104C383.012 39.2293 380.767 39.2727 378.539 39.1731C375.805 39.0406 373.367 39.1779 370.653 39.2735C368.221 39.3482 365.802 39.3448 363.377 39.4312C361.518 39.5047 360.15 39.5576 358.26 39.534C356.079 39.5078 353.955 39.5051 351.775 39.5245C349.149 39.5628 346.509 39.6537 343.893 39.5222C341.694 39.3994 339.995 39.5103 337.823 39.6107C333.889 39.8041 329.82 39.6249 325.91 39.8703L325.929 39.8693C323.777 39.9966 322.573 40.011 320.414 39.9569C319.715 39.9404 319.02 39.9305 318.328 39.9229C318.07 39.6695 317.803 39.4159 317.529 39.1634C317.184 39.1611 316.839 39.1563 316.493 39.1468C315.027 39.1015 313.831 39.0884 312.36 39.1141C308.77 39.1805 305.186 39.204 301.596 39.246C299.612 39.2696 297.417 39.2532 295.47 39.3802C292.346 39.5895 289.813 39.4992 286.706 39.4465C284.246 39.4156 281.818 39.4608 279.355 39.419C277.7 39.3796 276.502 39.3587 274.837 39.4047C273.034 39.4583 271.253 39.4992 269.446 39.5216C268.993 39.5263 268.529 39.5264 268.079 39.5334C265.915 39.5453 263.239 39.4855 261.141 39.6274C258.34 39.831 256.42 39.7536 253.651 39.6655C249.532 39.5637 245.678 39.7208 241.515 39.5493C239.772 39.4636 238.968 39.4644 237.222 39.5185C233.898 39.6134 230.796 39.5967 227.477 39.5727L226.967 39.5774C226.656 39.383 226.343 39.1923 226.028 39.0043C225.332 39.0359 224.627 39.0753 223.878 39.1265C220.276 39.293 218.721 38.913 215.697 38.9326C214.564 39.1527 212.844 39.3254 211.625 39.3632C210.108 39.4022 208.571 39.3994 207.046 39.4334C204.516 39.4974 202.573 39.5238 200.027 39.4239C197.437 39.3327 194.8 39.3687 192.199 39.3505C190.42 39.334 188.641 39.3132 186.861 39.3058C185.536 39.3011 184.26 39.3297 182.942 39.342C180.816 39.3944 179.604 39.3809 177.473 39.2607C173.547 39.0534 169.573 39.1663 165.565 39.0191C163.372 38.9218 161.672 38.8113 159.452 38.9384C156.845 39.0714 154.215 38.9825 151.6 38.9478C149.416 38.9289 147.289 38.9336 145.107 38.9619C143.22 38.9867 141.862 38.9345 140.007 38.8634C137.58 38.7791 135.16 38.7846 132.727 38.7121C130 38.6181 127.567 38.4835 124.822 38.6193C123.697 38.6703 122.569 38.6849 121.439 38.6844C120.377 38.7739 119.111 38.8665 117.638 38.9615C115.172 39.106 113.43 39.1882 110.902 39.1598C107.93 39.1716 105.489 39.6804 102.418 39.7142C100.475 39.6797 99.3904 39.4108 97.9322 39.4041C96.2172 39.4112 94.5354 39.4372 92.8149 39.423C90.4376 39.3975 88.5638 39.3933 86.1856 39.4929C83.168 39.5657 80.106 39.6187 77.0807 39.583C73.4886 39.5972 70.1111 39.6069 66.5154 39.5061C64.6253 39.4496 63.7545 39.4447 61.8645 39.5297C57.3496 39.6948 53.1708 39.5321 48.7057 39.631C45.7078 39.7168 43.6299 39.7924 40.5992 39.5876C38.9736 39.4807 37.0023 39.4934 35.3463 39.4941C34.6009 39.4943 33.8111 39.5034 33.0707 39.4916C30.6063 39.4751 28.2063 39.4301 25.7483 39.3642C23.942 39.3184 22.6407 39.3389 20.8451 39.3783C18.1736 39.4216 15.5422 39.376 12.8779 39.4076C9.50822 39.4619 6.77406 39.5533 3.38596 39.345C1.27672 39.2182 -1.11168 39.2349 -3.25989 39.2127C-7.86191 39.1638 -12.3517 39.1139 -16.9228 39.1049C-21.2837 39.0978 -25.6326 39.1363 -29.9921 39.1552C-32.7175 39.1694 -35.4516 39.213 -38.1659 39.112C-41.5193 38.9762 -44.488 39.1108 -47.8182 39.2048C-50.7874 39.2778 -53.7412 39.2715 -56.7035 39.3559C-58.9679 39.4272 -60.627 39.4797 -62.9292 39.4549C-65.5934 39.4263 -68.1894 39.4212 -70.8546 39.4408C-74.0471 39.4762 -77.2579 39.5649 -80.4398 39.4312C-83.1496 39.3037 -85.2246 39.4147 -87.904 39.5115C-92.7948 39.6591 -97.6463 39.5462 -102.439 39.7531C-105.038 39.8733 -106.518 39.8876 -109.114 39.8344C-110.722 39.8226 -112.281 39.7932 -113.898 39.798C-116.071 39.805 -118.243 39.8273 -120.413 39.8434C-123.588 39.8623 -126.809 39.8245 -129.968 39.9166C-133.079 40.016 -135.45 39.9893 -138.538 39.926C-140.177 39.8967 -141.826 39.8954 -143.461 39.8684C-146.954 38.9965 -150.531 38.1537 -154.106 37.3996C-152.457 37.2579 -150.807 37.1038 -148.951 37.0858C-146.763 37.121 -145.542 37.389 -143.9 37.3959C-141.968 37.3888 -140.074 37.3628 -138.137 37.377C-135.46 37.4027 -133.349 37.407 -130.67 37.3075C-127.272 37.2353 -123.825 37.1817 -120.418 37.2176C-116.372 37.201 -112.568 37.1938 -108.519 37.2944C-106.39 37.3511 -105.41 37.356 -103.281 37.2731C-98.1961 37.1075 -93.4913 37.2707 -88.4632 37.1717C-85.0858 37.086 -82.7474 37.0098 -79.3329 37.2148C-77.5028 37.3218 -75.2818 37.3088 -73.4173 37.3085C-72.5786 37.3081 -71.6883 37.299 -70.8546 37.3108C-68.0793 37.3274 -65.3761 37.3725 -62.608 37.4388C-60.5752 37.4842 -59.11 37.4635 -57.0868 37.4224C-54.0782 37.379 -51.1161 37.4243 -48.1137 37.3924C-44.3208 37.3386 -41.2399 37.2471 -37.4255 37.4558C-35.0501 37.5822 -32.3601 37.5653 -29.9408 37.5875C-25.5853 37.6285 -21.24 37.6496 -16.8851 37.7139C-13.8304 37.6527 -10.0259 37.6435 -6.99988 37.668C-5.73874 37.6609 -4.47688 37.6515 -3.21431 37.6444C4.54744 37.5943 12.8096 37.6897 20.5041 37.4429C22.5146 37.3718 23.9888 37.3197 26.0331 37.3447C28.3981 37.3728 30.7036 37.3777 33.0707 37.3588C35.9055 37.3239 38.7563 37.2352 41.5824 37.3684C43.9887 37.4954 45.8306 37.3848 48.2088 37.2875C52.5525 37.1401 56.8598 37.253 61.117 37.0456C63.4246 36.9254 64.7391 36.9121 67.043 36.9647C68.4704 36.9765 69.8551 37.0053 71.2912 37.0008C73.2219 36.9937 75.1481 36.9715 77.0769 36.9559C79.8961 36.9371 82.7547 36.9725 85.563 36.882C88.3227 36.783 90.4293 36.8102 93.172 36.8749C94.8233 36.9087 96.4899 36.9056 98.1344 36.9448C99.4553 36.9826 101.32 37.155 102.549 37.3751C105.727 37.394 107.41 37.0378 111.074 37.1684C113.41 37.1413 115.744 37.1227 118.082 37.0958C120.065 37.0745 122.267 37.0911 124.214 36.964C127.34 36.7552 129.862 36.8468 132.971 36.9009C135.429 36.9328 137.856 36.8867 140.321 36.9304C141.977 36.9711 143.178 36.9914 144.843 36.947C147.111 36.8811 149.325 36.8362 151.6 36.8192C152.283 36.8073 153.012 36.8145 153.699 36.8168C155.226 36.8176 157.045 36.8309 158.545 36.723C161.342 36.5182 163.258 36.5946 166.024 36.6799C170.143 36.7779 173.998 36.6159 178.163 36.7817C179.907 36.8655 180.711 36.86 182.454 36.8029C185.77 36.702 188.888 36.7113 192.202 36.7269C194.992 36.6905 197.817 36.7434 200.601 36.8161C202.796 36.916 204.524 36.9118 206.718 36.886C208.304 36.8719 209.856 36.8978 211.439 36.9049C212.784 36.8978 213.783 36.6296 215.577 36.5949C218.123 36.6249 220.198 37.0375 222.579 37.1305L222.203 36.9472C223.961 36.9566 225.727 36.9378 227.478 36.9425C230.591 36.9591 233.611 36.9907 236.727 36.9307C237.075 36.9284 237.442 36.9141 237.794 36.9094C239.426 36.8858 240.588 36.926 242.219 37.0199C246.116 37.2323 250.125 37.1224 254.12 37.2693C256.302 37.3676 258.002 37.4788 260.211 37.3544C262.823 37.2209 265.459 37.3114 268.079 37.3473C270.26 37.3662 272.386 37.3638 274.567 37.3355C276.454 37.3116 277.819 37.3638 279.676 37.4368C282.103 37.5216 284.522 37.5183 286.955 37.5908C289.674 37.6862 292.111 37.822 294.85 37.6884C297.076 37.5875 299.32 37.6311 301.553 37.6479C305.124 37.6667 308.688 37.7085 312.26 37.7034C313.579 37.701 314.705 37.7282 315.946 37.7795C315.744 37.6115 315.539 37.4445 315.331 37.2783C317.173 37.2735 319.006 37.2878 320.915 37.3381C322.665 37.3886 323.469 37.3877 325.213 37.2989C329.373 37.1206 333.227 37.2726 337.346 37.1665C340.12 37.0754 342.035 36.9972 344.842 37.1991C346.937 37.338 349.615 37.2787 351.775 37.2879C353.162 37.3134 354.544 37.3168 355.938 37.3482C356.805 37.3671 357.671 37.3916 358.536 37.4181C360.2 37.4637 361.393 37.4441 363.047 37.404C365.513 37.3619 367.94 37.4087 370.4 37.3784C373.514 37.3267 376.039 37.2364 379.17 37.4473C381.115 37.5756 383.313 37.56 385.293 37.5839C388.636 37.624 391.973 37.6486 395.315 37.7062C397.051 37.6389 398.38 37.5907 400.194 37.6115C402.428 37.6373 404.61 37.6387 406.846 37.6163C415.47 37.4921 424.757 37.7155 433.306 37.2649C435.462 37.1432 436.687 37.1279 438.848 37.1782C442.067 37.2377 445.206 37.3644 448.414 37.3245C448.925 37.308 449.524 37.3128 450.047 37.3081C452.163 37.2916 454.314 37.2915 456.418 37.2017C459.014 37.0902 460.999 37.1071 463.583 37.1602C465.141 37.1855 466.711 37.1791 468.262 37.2109C476.606 37.449 482.281 37.5841 491.013 37.5191ZM393.714 38.1835L393.829 38.3677C391.95 38.3252 390.072 38.2808 388.191 38.2208C390.041 38.1972 391.874 38.1847 393.714 38.1835ZM316.382 38.1442L316.392 38.1512C316.15 38.1394 316.138 38.1371 316.382 38.1442ZM316.563 38.2995L316.701 38.4188L316.624 38.4172C314.004 38.3003 314.115 38.2589 316.563 38.2995ZM316.733 38.4473L317.061 38.7366L316.558 38.7249C315.073 38.6701 313.821 38.6414 312.326 38.6537C309.23 38.6726 306.176 38.6548 303.082 38.621C306.158 38.5249 309.23 38.4747 312.31 38.4102C313.853 38.3812 315.087 38.3961 316.623 38.4472L316.733 38.4473ZM317.083 38.7553L317.113 38.7823C316.924 38.7776 316.737 38.7728 316.549 38.7657C315.061 38.7067 314.956 38.6952 316.568 38.7445L317.083 38.7553ZM317.207 38.8666L317.295 38.9462C317.035 38.9438 316.774 38.939 316.513 38.9319C315.037 38.8854 313.821 38.8701 312.343 38.8933C305.699 38.9941 306.511 38.9542 312.339 38.8307C313.838 38.8007 315.049 38.8118 316.545 38.856C316.766 38.8607 316.987 38.8619 317.207 38.8666ZM317.323 38.9721L317.503 39.1357C317.159 39.131 316.817 39.1239 316.474 39.1169C315.021 39.0673 313.809 39.0469 312.355 39.0606C310.236 39.0795 310.044 39.0626 312.351 38.9858C313.836 38.9402 315.03 38.9395 316.526 38.974L317.323 38.9721ZM-17.6564 37.9821C-25.8569 37.8487 -27.0789 37.8057 -17.8942 37.9145L-17.6564 37.9821ZM-3.73979 38.5855C-6.33955 38.5562 -8.96104 38.5055 -11.5599 38.5319C-15.9146 38.6028 -16.399 38.5577 -12.4351 38.419C-9.5347 38.4649 -6.63997 38.5078 -3.73979 38.5855Z" fill="#94573C"></path>
            </svg>
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
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 ${
                        isActive
                          ? "bg-[#94573c] text-white border-[#94573c]"
                          : "bg-transparent text-[#94573c] border-[#94573c] hover:bg-[#94573c] hover:text-white"
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
        <div className="px-4">

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
    </div>
  )
}

export default Home
