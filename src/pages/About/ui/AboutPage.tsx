export default function AboutPage() {
  return (
    <div>
      <div className="mt-[60px] mb-[120px] relative h-[700px] w-[1295px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/about/people.png"
            alt="background"
          />
        </div>
        <div className="relative flex flex-col mt-[260px] items-center justify-center text-center text-link">
          <h1 className="text-xl mb-[50px]">
            Добро пожаловать в клуб мафии “SHOWTIME"!
          </h1>
          <div className="text-center w-[770px] mb-[240px]">
            <p className="text-base font-involveRG">
              Начиная с 16 декабря 2010 года, наш клуб стал неотъемлемой частью
              игровой культуры города Москвы. Начав с городской мафии, мы с
              годами стали проводить регулярные игры в классическую мафию,
              погружаясь в захватывающие интриги и стратегии.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[120px] text-primary">
        <h2 className="text-[48px] mb-[80px] font-keetanoKB">
          СОЦИАЛЬНАЯ РОЛЕВАЯ ИГРА «МАФИЯ»: ТАКТИКА И СТРАТЕГИЯ ПО КЛАССИЧЕСКИМ
          ПРАВИЛАМ
        </h2>
        <div className="flex  justify-between mb-[80px]">
          <img src="/about/people2.png" alt="photo" />
          <div className="w-[630px]">
            <h3 className="text-xl  mb-[50px]">КЛУБ SHOWTIME</h3>
            <p className="text-base font-involveBQ">
              Это уютное пространство, где каждый может окунуться в
              захватывающий мир игры "Мафия". Мы гордимся своим многолетним
              опытом в проведении игровых вечеров и мероприятий, организованных
              для наших участников.
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-[80px]">
          <div className="w-[630px]">
            <h3 className="text-xl mb-[50px]">
              Что делает наш клуб особенным?
            </h3>
            <p className="text-base font-involveBQ">
              Общая стратегия игры в «Мафию» приблизительно одинакова во всех
              разновидностях и основывается на правилах, хотя в последнее время
              появляется все больше аналогов и интересных дополнительных
              нюансов. Однако в любом случае каждый игрок использует чисто
              индивидуальные приемы: тактика и секреты игры в классическую Мафию
              разрабатываются в зависимости от собственного опыта. Ведь недаром
              считается, что это — психологическая игра...
            </p>
          </div>
          <img src="/about/people3.png" alt="photo" />
        </div>
        <div className="flex  justify-between mb-[80px]">
          <img src="/about/people4.png" alt="photo" />
          <div className="w-[630px]">
            <h3 className="text-xl  mb-[50px]">СЕКРЕТЫ ИГРЫ МАФИЯ</h3>
            <p className="text-base font-involveBQ">
              Мы не просто проводим игры, мы создаем целые истории, в которые
              вовлечены все участники. Наши интересные сценарии разработаны с
              учетом всех деталей, чтобы каждый ход игры был органичным и
              захватывающим. Мы учитываем предпочтения и интересы наших игроков,
              чтобы обеспечить максимальное удовольствие от игрового процесса.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[120px] text-primary">
        <div className="flex flex-col items-center justify-between mb-[50px]">
          <h2 className="text-[48px] font-keetanoKB mb-[40px]">
            Часто задаваемые вопросы
          </h2>
          <div className="text-center w-[810px] mb-[50px]">
            <p className="text-base font-involveBQ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
              volutpat sed cras ornare arcu dui vivamus.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between mb-[120px]">
          <div className="">
            <div className="w-[500px] mb-[50px]">
              <h3 className="text-xl mb-[20px]">Где проводятся игры?</h3>
              <p className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </p>
            </div>
            <div className="w-[500px]">
              <h3 className="text-xl mb-[20px]">Будут ли бонусы за друзей?</h3>
              <p className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-[500px] mb-[50px]">
              <h3 className="text-xl mb-[20px]">Сколько стоит сессия?</h3>
              <p className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </p>
            </div>
            <div className="w-[500px]">
              <h3 className="text-xl mb-[20px]">Могу ли я стать ведущим?</h3>
              <p className="text-base font-involveBQ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare arcu dui vivamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
