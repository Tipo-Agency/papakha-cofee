"use client"

const menuData = {
  coffee: {
    title: "КОФЕ",
    items: [
      {
        name: "ЭСПРЕССО",
        description: "классический итальянский кофе из отборных зерен",
        price: "250 ₽",
      },
      {
        name: "АМЕРИКАНО",
        description: "эспрессо с горячей водой для мягкого вкуса",
        price: "280 ₽",
      },
      {
        name: "КАПУЧИНО",
        description: "эспрессо с взбитым молоком и нежной пенкой",
        price: "320 ₽",
      },
      {
        name: "ЛАТТЕ",
        description: "мягкий кофе с большим количеством молока",
        price: "340 ₽",
      },
      {
        name: "ФЛЭТ УАЙТ",
        description: "двойной эспрессо с микропенкой из цельного молока",
        price: "360 ₽",
      },
      {
        name: "МОККА",
        description: "эспрессо с шоколадом и взбитыми сливками",
        price: "380 ₽",
      },
    ],
  },
  breakfast: {
    title: "ЗАВТРАК",
    items: [
      {
        name: "КРУАССАН С ЛОСОСЕМ",
        description: "свежий круассан с слабосоленым лососем и сливочным сыром",
        price: "450 ₽",
      },
      {
        name: "АВОКАДО ТОСТ",
        description: "цельнозерновой хлеб с авокадо и помидорами черри",
        price: "380 ₽",
      },
      {
        name: "ЯЙЦА БЕНЕДИКТ",
        description: "английский маффин с ветчиной и яйцом пашот",
        price: "420 ₽",
      },
      {
        name: "ГРАНОЛА БОУЛ",
        description: "домашняя гранола с греческим йогуртом и ягодами",
        price: "350 ₽",
      },
      {
        name: "ПАНКЕЙКИ",
        description: "пышные американские панкейки с кленовым сиропом",
        price: "320 ₽",
      },
    ],
  },
  desserts: {
    title: "ДЕСЕРТЫ",
    items: [
      {
        name: "ТИРАМИСУ",
        description: "классический итальянский десерт с маскарпоне",
        price: "280 ₽",
      },
      {
        name: "ЧИЗКЕЙК НЬЮ-ЙОРК",
        description: "нежный сливочный чизкейк с ягодным соусом",
        price: "320 ₽",
      },
      {
        name: "ШОКОЛАДНЫЙ ФОНДАН",
        description: "теплый шоколадный кекс с жидкой начинкой",
        price: "350 ₽",
      },
      {
        name: "КРЕМ-БРЮЛЕ",
        description: "классический французский десерт с карамельной корочкой",
        price: "290 ₽",
      },
    ],
  },
  drinks: {
    title: "НАПИТКИ",
    items: [
      {
        name: "СВЕЖЕВЫЖАТЫЙ СОК",
        description: "апельсиновый, яблочный или морковный",
        price: "220 ₽",
      },
      {
        name: "СМУЗИ БОУЛ",
        description: "густой смузи из ягод и фруктов с топпингами",
        price: "380 ₽",
      },
      {
        name: "ЛИМОНАД",
        description: "освежающий домашний лимонад с мятой",
        price: "180 ₽",
      },
      {
        name: "ЧАЙ",
        description: "черный, зеленый или травяной на выбор",
        price: "150 ₽",
      },
    ],
  },
}

export default function RestaurantMenu() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-center text-gray-900 mb-16 tracking-wide">МЕНЮ</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Coffee Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8 tracking-widest">{menuData.coffee.title}</h3>
              <div className="space-y-6">
                {menuData.coffee.items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-gray-900 uppercase tracking-wide text-base mb-2 group-hover:underline transition-all duration-200 cursor-pointer">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm italic font-light leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-medium text-base whitespace-nowrap">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8 tracking-widest">{menuData.desserts.title}</h3>
              <div className="space-y-6">
                {menuData.desserts.items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-gray-900 uppercase tracking-wide text-base mb-2 group-hover:underline transition-all duration-200 cursor-pointer">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm italic font-light leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-medium text-base whitespace-nowrap">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Breakfast Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8 tracking-widest">{menuData.breakfast.title}</h3>
              <div className="space-y-6">
                {menuData.breakfast.items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-gray-900 uppercase tracking-wide text-base mb-2 group-hover:underline transition-all duration-200 cursor-pointer">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm italic font-light leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-medium text-base whitespace-nowrap">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-8 tracking-widest">{menuData.drinks.title}</h3>
              <div className="space-y-6">
                {menuData.drinks.items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-gray-900 uppercase tracking-wide text-base mb-2 group-hover:underline transition-all duration-200 cursor-pointer">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm italic font-light leading-relaxed">{item.description}</p>
                      </div>
                      <span className="text-gray-900 font-medium text-base whitespace-nowrap">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
