import Button from "@/shared/ui/Button/Button";
import { Carousel } from "flowbite-react";

const sliderData = [
  {
    id: 1,
    title: "Следующая игра состоится 9 марта 2024",
    imgUrl: "/main/people.png",
  },
  {
    id: 2,
    title: "Следующая игра состоится 9 марта 2024",
    imgUrl: "/main/people.png",
  },
  {
    id: 3,
    title: "Следующая игра состоится 9 марта 2024",
    imgUrl: "/main/people.png",
  },
];

export default function Slider() {
  return (
    <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
      {sliderData.map((item) => (
        <div key={item.id}>
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="w-full h-full object-covebr"
              src={item.imgUrl}
              alt="background"
            />
          </div>
          <div className="relative flex flex-col mt-[260px] items-center justify-center text-center text-link">
            <h1 className="text-2xl font-bold font-keetanoKB mb-4">
              {item.title}
            </h1>
            <Button
              className="bg-link font-keetanoKB text-primary text-2xl w-[380px] h-[100px] my-[38px] py-[24px] px-[70px]"
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
      ))}
    </Carousel>
  );
}
