"use client"

import { Search, Plus, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  translations, 
  allProducts,
  newProducts,
  breakfastProducts,
  pancakeProducts,
  hotDishProducts,
  burgerProducts,
  sandwichProducts,
  bakeryProducts,
  soupProducts,
  saladProducts,
  sidesProducts,
  kidsMenuProducts,
  lemonadeProducts,
  freshJuicesProducts,
  coldCoffeeProducts,
  yogurtBowlProducts,
  smoothieProducts,
  kidsDrinksProducts,
  coffeeProducts,
  dessertProducts,
  teaProducts,
  toppingsProducts,
  getTranslatedProduct,
  type Product
} from "@/data/products"

// Языки
const languages = [
  { code: 'ru', name: 'RU', fullName: 'Русский' },
  { code: 'uz', name: 'UZ', fullName: 'O\'zbek' },
  { code: 'en', name: 'EN', fullName: 'English' }
]

const menuItems = [
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

const getSectionId = (menuItem: string) => {
  const sectionMap: { [key: string]: string } = {
    "Новинки сезона": "new-products",
    Завтраки: "breakfast",
    Блины: "pancakes",
    "Горячие блюда": "hot-dishes",
    Бургеры: "burgers",
    Сендвичи: "sandwiches",
    Выпечка: "bakery",
    Супы: "soups",
    Салаты: "salads",
    Гарниры: "sides",
    "Детское меню": "kids-menu",
    Лимонады: "lemonades",
    "Свежевыжатые соки/Вода": "fresh-juices",
    "Холодный кофе": "cold-coffee",
    "Йогурты&Боулы": "yogurt-bowls",
    Смузи: "smoothies",
    "Детские напитки": "kids-drinks",
    Кофе: "coffee",
    Десерты: "desserts",
    Чаи: "teas",
    "Начинки и соусы": "toppings-sauces",
  }
  return sectionMap[menuItem] || menuItem.toLowerCase().replace(/\s+/g, "-")
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToProduct = (productId: number) => {
  const element = document.getElementById(`product-${productId}`)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" })
    
    // Добавляем визуальную подсветку
    element.classList.add("ring-4", "ring-[#94573c]", "ring-opacity-50")
    setTimeout(() => {
      element.classList.remove("ring-4", "ring-[#94573c]", "ring-opacity-50")
    }, 2000)
  }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("new-products")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<'ru' | 'uz' | 'en'>('ru')
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  // Получение текущих переводов
  const t = translations[currentLanguage]
  const currentMenuItems = t.menuCategories

  // Закрытие языкового дропдауна при клике вне его
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageDropdownOpen(false)
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  // Intersection Observer для отслеживания активного раздела
  useEffect(() => {
    const sections = [
      "new-products",
      "breakfast",
      "pancakes",
      "hot-dishes",
      "burgers",
      "sandwiches",
      "bakery",
      "soups",
      "salads",
      "sides",
      "kids-menu",
      "lemonades",
      "fresh-juices",
      "cold-coffee",
      "yogurt-bowls",
      "smoothies",
      "kids-drinks",
      "coffee",
      "desserts",
      "teas",
      "toppings-sauces",
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
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
      return
    }

    const results = allProducts.filter((product) => {
      const translatedProduct = getTranslatedProduct(product, currentLanguage)
      return translatedProduct.name.toLowerCase().includes(query.toLowerCase()) ||
             translatedProduct.description?.toLowerCase().includes(query.toLowerCase())
    })
    setSearchResults(results)
  }

  const openSearch = () => {
    setIsSearchOpen(true)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
  }

  const renderProductGrid = (products: Product[]) => (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      {products.map((product) => {
        const translatedProduct = getTranslatedProduct(product, currentLanguage)
        return (
          <div
            key={product.id}
            id={`product-${product.id}`}
            className="bg-[#f4eadc] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col min-h-[320px] sm:min-h-[350px] md:min-h-[370px] lg:min-h-[380px] hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="aspect-square bg-gray-100 rounded-2xl m-2 sm:m-3 mb-0 flex-shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={translatedProduct.name}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
              <h3 className="text-[#94573c] font-medium mb-2 sm:mb-3 text-xs sm:text-sm md:text-sm leading-tight flex-grow flex items-start">
                {translatedProduct.name}
              </h3>
              <Button
                onClick={() => openProductModal(translatedProduct)}
                className="w-full bg-[#94573c] hover:bg-[#7a4530] text-white rounded-xl py-2 sm:py-3 flex items-center justify-center space-x-1 sm:space-x-2 font-medium mt-auto text-xs sm:text-sm transition-all duration-200 flex-shrink-0"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{product.price}</span>
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f4eadc]">
      {/* Header */}
      <header className="bg-[#f4eadc] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Papakha Logo" width={120} height={40} className="h-10 w-auto object-contain" />
          </div>
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-white/50 hover:bg-white/70 rounded-lg transition-colors border border-[#94573c]/20"
              >
                <Globe className="w-4 h-4 text-[#94573c]" />
                <span className="text-[#94573c] font-medium text-sm">
                  {languages.find(lang => lang.code === currentLanguage)?.name}
                </span>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-[#94573c]/20 overflow-hidden z-50 min-w-[120px]">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setCurrentLanguage(language.code as 'ru' | 'uz' | 'en')
                        setIsLanguageDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[#f4eadc] ${
                        currentLanguage === language.code ? 'bg-[#f4eadc] text-[#94573c] font-medium' : 'text-gray-700'
                      }`}
                    >
                      {language.fullName}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Button */}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-[#f4eadc] rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#94573c] text-xl font-bold">{t.searchTitle}</h3>
              <button onClick={closeSearch} className="text-[#94573c] hover:text-[#7a4530]">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 border border-[#94573c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#94573c] focus:ring-opacity-50"
                autoFocus
              />
            </div>

            <div className="flex-1 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((product) => {
                    const translatedProduct = getTranslatedProduct(product, currentLanguage)
                    return (
                      <div
                        key={product.id}
                        onClick={() => {
                          scrollToProduct(product.id)
                          closeSearch()
                        }}
                        className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg mr-3 flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={translatedProduct.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#94573c] font-medium text-sm">{translatedProduct.name}</h4>
                          <p className="text-gray-500 text-xs">{translatedProduct.category}</p>
                        </div>
                        <div className="text-[#94573c] font-medium text-sm">{product.price}</div>
                      </div>
                    )
                  })}
                </div>
              ) : searchQuery.trim() !== "" ? (
                <div className="text-center py-8 text-gray-500">{t.noResults}</div>
              ) : (
                <div className="text-center py-8 text-gray-500">{t.startTyping}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {isProductModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#f4eadc] rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[#94573c] text-xl font-bold pr-4">{selectedProduct.name}</h3>
              <button
                onClick={closeProductModal}
                className="text-[#94573c] hover:text-[#7a4530] flex-shrink-0"
              >
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
            
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {selectedProduct.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-[#94573c] text-2xl font-bold">
                {selectedProduct.price}
              </span>
              <Button className="bg-[#94573c] hover:bg-[#7a4530] text-white px-6 py-2 rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                {t.addToCart}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Hero Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg p-6 flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold mb-2">БАМБЛ</h2>
              <h2 className="text-white text-2xl font-bold">ПАПАХА</h2>
            </div>
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-200 rounded-full"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg p-6 flex items-center justify-between relative">
            <div>
              <span className="bg-white px-2 py-1 rounded text-xs font-bold text-orange-600 mb-2 inline-block">
                🔥 ХИТ
              </span>
              <h2 className="text-[#94573c] text-xl font-bold mb-1">МАЛИНОВЫЙ</h2>
              <h2 className="text-[#94573c] text-xl font-bold">КОФЕ</h2>
            </div>
            <div className="w-20 h-20 bg-red-400 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg p-6 flex items-center justify-between">
            <div>
              <span className="bg-white px-2 py-1 rounded text-xs font-bold text-orange-600 mb-2 inline-block">
                🔥 ХИТ
              </span>
              <h2 className="text-white text-xl font-bold bg-red-600 px-2 py-1 rounded mb-1">BLUEBERRY</h2>
              <h2 className="text-white text-xl font-bold bg-red-600 px-2 py-1 rounded">BOWL</h2>
            </div>
            <div className="w-20 h-20 bg-purple-400 rounded-full"></div>
          </div>
        </div>

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

        {/* Navigation Menu */}
        <nav className="mb-8 sticky top-0 z-40 bg-[#f4eadc] py-4 -mx-6 px-6">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4 px-4" style={{ minWidth: "max-content" }}>
                {currentMenuItems.map((item, index) => {
                  const originalItem = menuItems[index]
                  const sectionId = getSectionId(originalItem)
                  const isActive = activeSection === sectionId

                  return (
                    <button
                      key={index}
                      onClick={() => scrollToSection(sectionId)}
                      className={`whitespace-nowrap text-[#94573c] hover:text-[#7a4530] transition-colors px-3 py-2 rounded-lg hover:bg-white/50 cursor-pointer ${
                        isActive ? "font-bold bg-white/50 text-[#7a4530]" : ""
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
        <section className="mb-8 sm:mb-10 md:mb-12" id="new-products">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[0]}</h2>
          {renderProductGrid(newProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="breakfast">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[1]}</h2>
          {renderProductGrid(breakfastProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="pancakes">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[2]}</h2>
          {renderProductGrid(pancakeProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="hot-dishes">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[3]}</h2>
          {renderProductGrid(hotDishProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="burgers">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[4]}</h2>
          {renderProductGrid(burgerProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="sandwiches">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[5]}</h2>
          {renderProductGrid(sandwichProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="bakery">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[6]}</h2>
          {renderProductGrid(bakeryProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="soups">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[7]}</h2>
          {renderProductGrid(soupProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="salads">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[8]}</h2>
          {renderProductGrid(saladProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="sides">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[9]}</h2>
          {renderProductGrid(sidesProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="kids-menu">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[10]}</h2>
          {renderProductGrid(kidsMenuProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="lemonades">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[11]}</h2>
          {renderProductGrid(lemonadeProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="fresh-juices">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[12]}</h2>
          {renderProductGrid(freshJuicesProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="cold-coffee">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[13]}</h2>
          {renderProductGrid(coldCoffeeProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="yogurt-bowls">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[14]}</h2>
          {renderProductGrid(yogurtBowlProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="smoothies">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[15]}</h2>
          {renderProductGrid(smoothieProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="kids-drinks">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[16]}</h2>
          {renderProductGrid(kidsDrinksProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="coffee">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[17]}</h2>
          {renderProductGrid(coffeeProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="desserts">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[18]}</h2>
          {renderProductGrid(dessertProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="teas">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[19]}</h2>
          {renderProductGrid(teaProducts)}
        </section>

        <section className="mb-8 sm:mb-10 md:mb-12" id="toppings-sauces">
          <h2 className="text-[#94573c] text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">{currentMenuItems[20]}</h2>
          {renderProductGrid(toppingsProducts)}
        </section>
      </div>
    </div>
  )
}