import React from "react";

interface Article {
  id: number;
  title: string;
  rank: string;
  content: string;
}
interface ArticleFeedProps {
  articles: Article[];
}
interface rankColor {
  colorByRank: "Новичкам" | "Любителям" | "Профи";
}

const Articles: React.FC<ArticleFeedProps> = ({ articles }) => {
  return (
    <div className="mb-[120px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-primary mb-[20px] font-keetanoKB">
          Статьи
        </h2>
        <div className="flex items-center">
          <div className="flex items-center mr-[40px]">
            <div className="bg-green rounded-full w-5 h-5 mr-[3px]"></div>
            <p className="text-base text-green">Новичкам</p>
          </div>
          <div className="flex items-center mr-[40px]">
            <div className="bg-orangeSecond rounded-full w-5 h-5 mr-[3px]"></div>
            <p className="text-base text-orangeSecond">Любителям</p>
          </div>
          <div className="flex items-center mr-[40px]">
            <div className="bg-black rounded-full w-5 h-5 mr-[3px]"></div>
            <p className="text-base text-black">Профи</p>
          </div>
        </div>
      </div>
      <div>
        {articles.map((item) => (
          <div key={item.id} className="mb-[20px]">
            <h2 className="text-base text-orange mb-[9px]">{item.title}</h2>
            <p
              className={`text-base mb-[10px] ${
                item.rank == "Новичкам" ? "text-green" : ""
              }
                                    ${
                                      item.rank == "Любителям"
                                        ? "text-orangeSecond"
                                        : ""
                                    }
                                    ${
                                      item.rank == "Профи" ? "text-black" : ""
                                    }`}
            >
              {item.rank}
            </p>
            <p className="text-base text-primary">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
