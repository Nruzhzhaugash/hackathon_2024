import React from "react";

interface NewsItem {
  id: number;
  title: string;
  content: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  return (
    <div className="w-[665px] text-">
      <h1 className="text-2xl text-primary mb-[20px]">Новости</h1>
      <div className="flex flex-col items-center justify-center">
        {news.map((item) => (
          <div key={item.id} className="w-[665px] mb-[20px] overflow-hidden">
            <div className="">
              <h2 className="text-base text-orange mb-2">{item.title}</h2>
              <p className="text-lg text-primary">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
