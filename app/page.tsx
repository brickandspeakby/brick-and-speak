import Image from "next/image";

export default function Home() {
  const formLink = "https://forms.gle/2AJ6B3GeTVt1Zwqt7";

  return (
    <main className="min-h-screen bg-white px-6 py-8">

      {/* HEADER */}
      <header className="max-w-6xl mx-auto mb-12 text-center">

        <Image
          src="/logo.png"
          alt="Brick & Speak"
          width={180}
          height={90}
          priority
          className="mx-auto h-auto"
        />

      </header>


      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">


        <div>

          <p className="text-blue-500 font-semibold text-lg mb-5">
            Курсы английского языка для детей 6–11 лет
          </p>


          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Английский,
            который
            ребёнок любит
            учить
          </h1>


          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Английский через LEGO, игры и общение.
            Ребёнок учится использовать язык,
            а не просто запоминать слова.
          </p>


          <div className="bg-yellow-50 rounded-2xl p-5 mb-8">

            <p className="text-lg font-semibold text-gray-900">
              Уже в первый год обучения
            </p>

            <p className="text-gray-700">
              дети начинают читать на английском языке.
            </p>

          </div>


          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-10 py-5 text-lg font-semibold text-gray-900 shadow-lg hover:scale-105 transition"
          >
            Оставить заявку
          </a>


          <div className="mt-8 space-y-2 text-gray-600">

            <p>✓ Мини-группы до 6 детей</p>
            <p>✓ Могилёв</p>
            <p>✓ Индивидуальное внимание каждому ребёнку</p>

          </div>


        </div>



        <div className="rounded-3xl overflow-hidden shadow-xl bg-blue-50">

          <Image
            src="/images/lesson.jpg"
            alt="Занятие Brick & Speak"
            width={700}
            height={900}
            className="w-full h-[550px] object-cover"
            priority
          />

        </div>


      </section>



      {/* ABOUT */}
      <section className="max-w-6xl mx-auto mb-24">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Что делает Brick & Speak особенным?
          </h2>


          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Английский язык через игру, творчество,
            LEGO и живое общение.
          </p>

        </div>



        <div className="rounded-3xl overflow-hidden shadow-lg mb-12">

          <Image
            src="/images/collage.jpg"
            alt="Brick & Speak"
            width={1200}
            height={700}
            className="w-full object-cover"
          />

        </div>
        <div className="grid md:grid-cols-3 gap-8">


          {[
            {
              icon: "🧱",
              title: "Английский через LEGO",
              text: "Ребёнок использует английский язык в игре, строительстве и общении."
            },

            {
              icon: "👥",
              title: "Мини-группы",
              text: "Небольшое количество детей позволяет уделить внимание каждому ребёнку."
            },

            {
              icon: "💬",
              title: "Живое общение",
              text: "Мы учимся говорить, понимать и использовать английский в реальных ситуациях."
            }

          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
            >

              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-5">
                {item.icon}
              </div>


              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>


              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>


            </div>

          ))}


        </div>


      </section>



      {/* BONUSES */}

      <section className="max-w-6xl mx-auto mb-24">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Больше, чем просто урок английского
          </h2>


          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаём комфортные условия,
            чтобы ребёнок учился с удовольствием
            и получал поддержку на каждом этапе.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {[
            {
              icon: "🔄",
              title: "Отработка пропущенных занятий",
              text: "Если ребёнок пропустил урок, мы помогаем восполнить материал индивидуально или в паре. Важные темы не остаются без внимания."
            },


            {
              icon: "🧱",
              title: "LEGO-пространство для детей",
              text: "До или после занятия ребёнок может играть и создавать свои LEGO-проекты в нашей уютной игровой комнате."
            },


            {
              icon: "👨‍👩‍👧",
              title: "Семейная скидка 15%",
              text: "Если английский изучают несколько детей из одной семьи, действует специальная скидка."
            }

          ].map((item, index) => (


            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition"
            >

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center-center justify-center text-3xl mb-5">
                {item.icon}
              </div>


              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>


              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>


            </div>


          ))}


        </div>


      </section>
      {/* PROGRAM */}

      <section className="max-w-6xl mx-auto mb-24">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Программа обучения
          </h2>


          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Английский язык для детей 6–11 лет:
            постепенно, интересно и с понятным результатом.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {[
            {
              title: "6–7 лет",
              text: "Первые шаги в английском языке: слова, фразы, песни, игры, чтение по слогам и первые разговорные навыки."
            },

            {
              title: "7–9 лет",
              text: "Развитие словарного запаса, чтения, понимания речи и уверенного использования английского через практику."
            },

            {
              title: "9–11 лет",
              text: "Расширение грамматики, разговорной практики и подготовка к более сложным этапам изучения языка."
            },

            {
              title: "Индивидуальные занятия",
              text: "Персональная программа обучения с учётом уровня и целей ребёнка."
            }

          ].map((item, index) => (

            <div
              key={index}
              className="bg-blue-50 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>


              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>

            </div>

          ))}


        </div>


      </section>



      {/* PRICES */}

      <section className="max-w-6xl mx-auto mb-24">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Стоимость занятий
          </h2>


          <p className="text-xl text-gray-600">
            Выберите подходящий формат обучения.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {[
            {
              title: "6–7 лет",
              text: "2 раза в неделю по 45 минут — 110 BYN / месяц"
            },

            {
              title: "7–9 лет",
              text: "2 раза в неделю по 60 минут — 130 BYN / месяц"
            },

            {
              title: "7–9 лет",
              text: "2 раза в неделю по 90 минут — 170 BYN / месяц"
            },

            {
              title: "9–11 лет",
              text: "2 раза в неделю по 60 минут — 140 BYN / месяц"
            },

            {
              title: "9–11 лет",
              text: "2 раза в неделю по 90 минут — 180 BYN / месяц"
            },

            {
              title: "Индивидуальное занятие",
              text: "45 минут — 35 BYN"
            }

          ].map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-200 p-8 hover:shadow-md transition"
            >

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>


              <p className="text-gray-600 text-lg">
                {item.text}
              </p>


            </div>

          ))}


        </div>


      </section>
      {/* REVIEWS */}

      <section className="max-w-6xl mx-auto mb-24">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы родителей
          </h2>


          <p className="text-xl text-gray-600">
            Самое важное — чтобы ребёнок шёл на английский с удовольствием.
          </p>


        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {[
            {
              image: "/images/ekaterina.jpg",
              name: "Екатерина, мама Назара",
              text: "Порадовало то, что ребёнок за весь год ни разу не отказался идти на занятия, наоборот, всегда ждал их с нетерпением. Занятия очень увлекательные, разнообразные и интересные. Полезное комбо LEGO + английский."
            },


            {
              image: "/images/julia.jpg",
              name: "Юлия, мама Никиты",
              text: "Интересный подход в изучении иностранного языка в комбинации с LEGO."
            },


            {
              image: "/images/maria.jpg",
              name: "Мария, мама Платона",
              text: "Профессиональный и индивидуальный подход не только к ученикам, но и к каждому родителю."
            },


            {
              image: null,
              name: "Андрей, папа Влада",
              text: "Запомнил много английских слов. Детям очень нравится."
            },


            {
              image: null,
              name: "Вера, мама Александра",
              text: "В памяти ребёнка теперь есть запас слов на английском языке, начал читать. Для нас год с Вами — это большой шаг вперёд!"
            },


            {
              image: null,
              name: "Елена, мама Саши",
              text: "Красивое и правильное произношение, быстрое запоминание стишков и песен на английском. Интересный формат занятий и замечательное отношение."
            }

          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >

              {item.image ? (

                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mb-5"
                />

              ) : (

                <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-3xl mb-5">
                  💬
                </div>

              )}


              <p className="text-gray-600 leading-relaxed mb-5">
                {item.text}
              </p>


              <h3 className="font-bold text-gray-900">
                {item.name}
              </h3>


            </div>

          ))}


        </div>


      </section>



      {/* FINAL CTA */}

      <section className="max-w-4xl mx-auto text-center mb-20 bg-blue-50 rounded-3xl p-10">


        <h2 className="text-4xl font-bold text-gray-900 mb-5">
          Готовы попробовать английский по-другому?
        </h2>


        <p className="text-xl text-gray-600 mb-8">
          Оставьте заявку, и мы расскажем о программе и подберём подходящую группу.
        </p>


        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-yellow-400 px-10 py-5 text-lg font-semibold text-gray-900 shadow-lg hover:scale-105 transition"
        >
          Оставить заявку
        </a>


      </section>
      {/* CONTACTS */}

      <section className="max-w-6xl mx-auto mb-20">

        <div className="bg-gray-50 rounded-3xl p-10 text-center">


          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Контакты
          </h2>


          <p className="text-xl text-gray-700 mb-3">
            Brick & Speak
          </p>


          <p className="text-gray-600 mb-2">
            📍 Могилёв, ул. Тимирязевская 44, каб. 24
          </p>


          <p className="text-gray-600 mb-2">
            ☎ (29) 975 50 42
          </p>


          <p className="text-gray-600">
            ☎ (29) 623 97 69
          </p>


        </div>


      </section>



      {/* FOOTER */}

      <footer className="text-center text-gray-500 py-8">

        <p>
          Brick & Speak · English through LEGO
        </p>


        <p className="mt-2">
          Могилёв, Беларусь
        </p>


      </footer>


    </main>
  );
}
