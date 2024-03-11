import Button from "@/shared/ui/Button/Button";
import NewsFeed from "@/features/news/ui/News";
// import Raiting from "@/features/raiting/ui/Raiting";
import Articles from "@/features/articles/ui/Articles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newData = [
  {
    id: 1,
    title: "02 января 2019г.",
    content:
      "Друзья! Приглашаем вас принять участние в мини турнире «Мафия с Консильери»! Да ориентировочно с 2.01 по 07.01 уточняется",
  },
  {
    id: 2,
    title: "24 марта 2016г.",
    content:
      "Друзья! В сентябре состоится второй чемпионат Европы по мафии (EUROMAF 2016), который проходит при поддержке нашего клуба! В предверии этого события мы приготовили для вас сюрприз!",
  },
  {
    id: 3,
    title: "18 февраля 2016г.",
    content:
      "Друзья! Впереди 3 дня праздников и Маф-Клуб Showtime приготовил для вас насыщенную программу!",
  },
];

const articleData = [
  {
    id: 1,
    title: "18 февраля 2016г.",
    rank: "Новичкам",
    content:
      "Дорогие игроки! Мы решили облегчить вам всем жизнь, особенно, новичкам, которым теперь будет быстрее, комфортнее постигать захватывающий мир  «Мафии», и впервые обобщили в один самый полный и подробный Словарь всю мафиозную терминологию и сленг, которые на настоящий момент используются в этой замечательной игре. Для вашего удобства мы расположили все термины в алфавитном порядке.  С уважением, Евгений Рогачевский и Григор Дердьян. ",
  },
  {
    id: 2,
    title: "29 ноября 2015г.",
    rank: "Любителям",
    content:
      "Автор статьи — г-н Наполеон, член маф-клуба» «Мафия. Закрытые игры»» г.Минск. Известный белорусский игрок в МАФИЮ с неординарным стилем игры. Участник многочисленного количества турниров Белоруссии, России и Украины!",
  },
];

export const MainPage = () => {
  return (
    <section>
      <div className="mt-[60px] mb-[100px] relative h-[700px] w-[1295px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/main/people.png"
            alt="background"
          />
        </div>
        <div className="relative flex flex-col mt-[260px] items-center justify-center z-10 text-center text-link">
          <h1 className="text-2xl font-bold mb-4">
            Следующая игра состоится 9 марта 2024
          </h1>
          <Button
            className="bg-link text-primary text-2xl w-[380px] h-[100px] my-[38px] py-[24px] px-[70px]"
            label="УЧАСТВОВАТЬ"
          />
          <div className="text-center w-[885px] mb-[130px]">
            <p className="text-xl">
              КАФЕДРА ВКУСА м. Ломоносовский проспект, Ломоносовский пр-кт,
              д.29, к. 3
            </p>
          </div>
        </div>
      </div>
      <div className="my-[100px]">
        <h2 className="text-2xl mb-[82px]">
          СОЦИАЛЬНАЯ РОЛЕВАЯ ИГРА «МАФИЯ»: ТАКТИКА И СТРАТЕГИЯ ПО КЛАССИЧЕСКИМ
          ПРАВИЛАМ
        </h2>
        <div className="flex items-center justify-between mb-[70px]">
          <img src="/main/people3.png" alt="photo" />
          <div className="w-[630px]">
            <h3 className="text-xl mb-[50px]">СЕКРЕТЫ ИГРЫ МАФИЯ</h3>
            <p className="text-base">
              Правила и суть игры «Мафия» на первый взгляд довольны просты.
              Играющих может быть 10 человек. Ведущий раздает каждому участнику
              по карте и этим определяет их роли в игре «Мафия». 7 красных карт
              получат игроки, которые будут представлять команду мирных жителей.
              Один из них – Шериф, возглавляющий всю команду. Те, кто получает
              черные карты, становятся группой мафиози, предводителем которой
              является Дон...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[630px]">
            <h3 className="text-xl mb-[50px]">
              Интеллектуальная игра «Мафия»: как научиться играть?
            </h3>
            <p className="text-base">
              Общая стратегия игры в «Мафию» приблизительно одинакова во всех
              разновидностях и основывается на правилах, хотя в последнее время
              появляется все больше аналогов и интересных дополнительных
              нюансов. Однако в любом случае каждый игрок использует чисто
              индивидуальные приемы: тактика и секреты игры в классическую Мафию
              разрабатываются в зависимости от собственного опыта. Ведь недаром
              считается, что это — психологическая игра...
            </p>
          </div>
          <img src="/main/people2.png" alt="photo" />
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between mb-[100px]">
        <NewsFeed news={newData} />
        {/* <Raiting /> */}
      </div>
      <div>
        <Articles articles={articleData} />
      </div>
    </section>
  );
};
