import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-8 overflow-hidden">


      {/* HEADER */}

      <header className="max-w-6xl mx-auto mb-12 text-center">

        <div className="text-3xl font-extrabold tracking-widest text-gray-800 mb-3">
          BRICK & SPEAK
        </div>


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


      <section className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">


        {/* decorative LEGO blocks */}

        <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>




        <div className="relative">


          <p className="text-blue-500 font-semibold text-lg mb-5">
            Курсы английского языка для детей 6–11 лет
          </p>



          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Английский,
            который ребёнок
            любит учить
          </h1>




          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Английский через LEGO,
            игры и общение —
            ребёнок учится использовать язык,
            а не просто запоминать слова.
          </p>




          <div className="bg-yellow-50 rounded-2xl p-5 mb-8 border border-yellow-100">


            <p className="text-lg font-semibold text-gray-900">
              Уже в первый год обучения
            </p>


            <p className="text-gray-700">
              дети начинают читать на английском.
            </p>


          </div>





          <a
            href="#signup"
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






        <div className="rounded-3xl overflow-hidden shadow-xl bg-blue-50 relative">


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








      {/* WHY BRICK & SPEAK */}



      <section className="relative bg-gray-50 rounded-3xl py-16 px-6 mb-24">


        <div className="absolute top-5 right-5 text-5xl opacity-20">
          🧱
        </div>



        <div className="max-w-6xl mx-auto">



          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🧩 Что делает Brick & Speak особенным?
            </h2>


            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаём пространство, где ребёнок учит английский
              с интересом, уверенностью и удовольствием.
            </p>


          </div>





          <div className="grid md:grid-cols-3 gap-6">



            {[
              {
                icon: "👥",
                title: "Мини-группы до 6 детей",
                text: "Преподаватель видит каждого ребёнка и помогает раскрыть его сильные стороны."
              },

              {
                icon: "⭐",
                title: "Нас выбирают дети и родители",
                text: "Родители замечают успехи ребёнка и рост уверенности."
              },

              {
                icon: "🧩",
                title: "LEGO + английский",
                text: "Мы соединяем язык, творчество и конструирование."
              },

              {
                icon: "📖",
                title: "Опытные преподаватели",
                text: "Профессиональный подход помогает ребёнку сохранять интерес к языку."
              },

              {
                icon: "🏡",
                title: "Уютная атмосфера без стресса",
                text: "Ребёнок не боится ошибок и постепенно становится увереннее."
              },

              {
                icon: "🤲",
                title: "Забота о каждом ребёнке",
                text: "Пропущенное занятие можно индивидуально или в паре отработать."
              }

            ].map((item,index)=>(


              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
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


        </div>


      </section>      {/* LESSONS */}


      <section className="relative bg-blue-50 rounded-3xl py-16 px-6 mb-24">


        <div className="absolute bottom-5 left-5 text-5xl opacity-20">
          🧱
        </div>


        <div className="max-w-6xl mx-auto">



          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💬 Как проходят занятия Brick & Speak?
            </h2>


            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Английский язык через общение, творчество и практику.
            </p>


          </div>





          <div className="grid md:grid-cols-4 gap-6">



            {[
              {
                icon: "💬",
                title: "Коммуникативный подход",
                text: "Ребёнок учится использовать английский в общении с первых занятий."
              },

              {
                icon: "📚",
                title: "Чтение с первого года",
                text: "Изучаем буквы, звуки и правила чтения. Ребёнок постепенно начинает читать самостоятельно."
              },

              {
                icon: "📖",
                title: "Pearson Fly High",
                text: "Программа основана на проверенных материалах международного издательства Pearson."
              },

              {
                icon: "🧩",
                title: "LEGO и творчество",
                text: "Каждое занятие — это не только английский, но и создание, игра и проекты."
              }

            ].map((item,index)=>(


              <div
                key={index}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >


                <div className="text-4xl mb-4">
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


        </div>


      </section>






      {/* BONUS */}



      <section className="relative bg-yellow-50 rounded-3xl py-16 px-6 mb-24">


        <div className="absolute top-5 right-5 text-5xl opacity-20">
          ⭐
        </div>



        <div className="max-w-6xl mx-auto">



          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🧡 Больше, чем просто урок английского
            </h2>


            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы заботимся не только о знаниях, но и о комфорте ребёнка.
            </p>


          </div>





          <div className="grid md:grid-cols-3 gap-8">



            {[
              {
                icon: "🔄",
                title: "Отработка пропущенных занятий",
                text: "Если ребёнок пропустил урок, материал можно восполнить индивидуально или в паре."
              },


              {
                icon: "🧱",
                title: "LEGO-зона для детей",
                text: "До или после занятия ребёнок может бесплатно играть и создавать свои LEGO-проекты."
              },


              {
                icon: "👨‍👩‍👧",
                title: "Семейная скидка 15%",
                text: "Для семей, где английский изучают несколько детей."
              }

            ].map((item,index)=>(


              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >


                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-3xl mb-5">
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


        </div>


      </section>      {/* SPACE */}



      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">


        <div>


          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            🧱 Наше пространство
          </h2>



          <p className="text-xl text-gray-600 leading-relaxed">
            Мы создаём место, куда детям хочется приходить.
            Здесь английский сочетается с творчеством,
            игрой и общением.
          </p>



          <div className="mt-6 flex gap-3 text-2xl">
            🟨 🟦 🟥
          </div>



        </div>





        <div className="rounded-3xl overflow-hidden shadow-lg">


          <Image
            src="/images/collage.jpg"
            alt="Пространство Brick & Speak"
            width={800}
            height={600}
            className="w-full object-cover"
          />


        </div>



      </section>







      {/* REVIEWS */}



      <section className="relative bg-gray-50 rounded-3xl py-16 px-6 mb-24">


        <div className="absolute top-5 left-5 text-5xl opacity-20">
          💛
        </div>



        <div className="max-w-6xl mx-auto">



          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💛 Родители видят результат
            </h2>



            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Самая важная оценка нашей работы — это интерес детей и доверие родителей.
            </p>


          </div>





          <div className="grid md:grid-cols-3 gap-8">



            {[
              {
                photo: "/images/ekaterina.jpg",
                letter: "",
                name: "Екатерина",
                role: "мама Назара",
                text: "За весь год ребёнок ни разу не отказался идти на занятия — наоборот, всегда ждал их с нетерпением. LEGO + английский — это отличное сочетание: интересно играть и одновременно учиться."
              },


              {
                photo: "/images/julia.jpg",
                letter: "",
                name: "Юлия",
                role: "мама Никиты",
                text: "Очень интересный подход к изучению иностранного языка в комбинации с LEGO."
              },


              {
                photo: "/images/maria.jpg",
                letter: "",
                name: "Мария",
                role: "мама Платона",
                text: "Профессиональный и индивидуальный подход не только к ученикам, но и к каждому родителю."
              },


              {
                photo: "",
                letter: "Е",
                name: "Елена",
                role: "мама Саши",
                text: "Интересный формат занятий, небольшие группы помогают лучше усваивать материал. Замечательное отношение."
              },


              {
                photo: "",
                letter: "В",
                name: "Вера",
                role: "мама Александра",
                text: "У ребёнка появился запас английских слов, он начал читать. Для нас это большой шаг вперёд!"
              },


              {
                photo: "",
                letter: "А",
                name: "Андрей",
                role: "папа Влада",
                text: "Ребёнок запомнил много английских слов. Детям очень нравится."
              }

            ].map((item,index)=>(


              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition"
              >



                <div className="flex items-center gap-4 mb-5">


                  {item.photo ? (


                    <Image
                      src={item.photo}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />


                  ) : (


                    <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-xl font-bold text-gray-700">
                      {item.letter}
                    </div>


                  )}



                  <div>

                    <h3 className="font-bold text-gray-900">
                      {item.name}
                    </h3>


                    <p className="text-gray-500">
                      {item.role}
                    </p>


                  </div>


                </div>





                <div className="text-yellow-400 mb-3">
                  ★★★★★
                </div>




                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>



              </div>


            ))}


          </div>


        </div>


      </section>      {/* PRICE */}



      <section className="relative bg-blue-50 rounded-3xl py-16 px-6 mb-24">


        <div className="absolute bottom-5 right-5 text-5xl opacity-20">
          🧱
        </div>



        <div className="max-w-6xl mx-auto">



          <div className="text-center mb-12">


            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💰 Стоимость обучения
            </h2>


            <p className="text-xl text-gray-600">
              Все занятия проходят в мини-группах до 6 детей.
            </p>


          </div>





          <div className="grid md:grid-cols-3 gap-6">



            {[
              {
                title: "6–7 лет",
                text: "2 раза в неделю\n45 минут",
                price: "110 BYN / месяц"
              },


              {
                title: "7–9 лет",
                text: "2 раза в неделю\n60 минут\n\nили\n\n90 минут",
                price: "130 BYN / месяц\n170 BYN / месяц"
              },


              {
                title: "9–11 лет",
                text: "2 раза в неделю\n60 минут\n\nили\n\n90 минут",
                price: "140 BYN / месяц\n180 BYN / месяц"
              }


            ].map((item,index)=>(


              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >


                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>



                <p className="text-gray-600 whitespace-pre-line mb-5">
                  {item.text}
                </p>



                <p className="text-xl font-bold text-gray-900 whitespace-pre-line">
                  {item.price}
                </p>



              </div>


            ))}



          </div>





          {/* INDIVIDUAL */}



          <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm max-w-xl mx-auto text-center">


            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              👤 Индивидуальные занятия
            </h3>



            <p className="text-gray-600 mb-4">
              Персональный темп обучения и внимание преподавателя.
            </p>



            <p className="text-xl font-bold text-gray-900">
              35 BYN / занятие (45 минут)
            </p>



          </div>





          <div className="mt-8 text-center text-gray-600">


            <p>
              💛 В стоимость входит:
            </p>


            <p className="mt-2">
              мини-группа до 6 детей · Pearson Fly High · LEGO-проекты · поддержка преподавателя
            </p>


          </div>



        </div>


      </section>      {/* SIGNUP */}



      <section
        id="signup"
        className="relative bg-yellow-50 rounded-3xl py-16 px-6 mb-16 overflow-hidden"
      >


        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>




        <div className="relative max-w-4xl mx-auto text-center">


          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Хотите узнать больше о Brick & Speak?
          </h2>



          <p className="text-xl text-gray-600 mb-8">
            Оставьте заявку, и мы расскажем о программе,
            ответим на вопросы и поможем подобрать подходящую группу для ребёнка.
          </p>




          <a
            href="#"
            className="inline-block rounded-full bg-yellow-400 px-10 py-5 text-lg font-semibold text-gray-900 shadow-lg hover:scale-105 transition"
          >
            Оставить заявку
          </a>



        </div>


      </section>







      {/* FOOTER */}



      <footer className="text-center text-gray-500 py-8">


        <p className="font-semibold">
          Brick & Speak · English through LEGO
        </p>



        <p className="mt-2">
         📍 Могилёв, ул. Тимирязевская, 44
📞 +375 (29) 975-50-42
📞 +375 (29) 623-97-69
        </p>



      </footer>





    </main>
  );
}