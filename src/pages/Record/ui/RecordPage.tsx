"use client";
import React from "react";
import MButton from "@/shared/ui/Button/Button";
import MImage from "@/shared/ui/Image/Image";
import Link from "next/link";

const data = [
  { id: 1, src: "/record/zakaz.png" },
  { id: 2, src: "/record/zakaz-1.png" },
  { id: 3, src: "/record/zakaz.png" },
];

export default function RecordPage() {
  return (
    <section>
      <div className="flex gap-[390px] mb-[30px]">
        <div className="">
          <h1 className="text-primary text-2xl font-bold font-keetanoKB mb-[30px]">
            СРЕДА В КАФЕДРЕ ВКУСА
          </h1>
          <h2 className="text-primary text-2xl font-bold font-keetanoKB mb-[51px]">
            С 20:00 до 02:00
          </h2>
        </div>
        {/* <div className="mt-6">
          <h1 className="text-2xl text-center mb-7 text-primary font-keetanoKB font-bold">
            7 / 15
          </h1>
          <Link href="/shedule/record/payment">
            <MButton
              label="5000 тг"
              className="py-2.5 px-[60px] bg-primary text-link text-2xl font-keetanoKB font-bold"
            />
          </Link>
        </div> */}
      </div>
      <div className="font-involveRG text-[20px]">
        <p className="font-keetano text-lg font-bold text-primary w-[541px]">
          Адрес: м. Ломоносовский проспект, Ломоносовский пр-кт, д. 29, к. 3,
          парковка бесплатная
        </p>
        <p className=" text-primary font-bold mb-[30px]">
          Удобное расположение по адресу м. Ломоносовский проспект,
          Ломоносовский пр-кт, д. 29, к. 3, (500 метров от метро) Для гостей
          на автомобиле собственная бесплатная парковка.
        </p>
        <p className=" text-primary font-bold mb-[50px]">
          Играем по Профессиональным (классическим) правилам игры в Мафию! Доп.
          Информация по тел. +7 (962) 962-22-33
        </p>
      </div>

      <div className="flex flex-col gap-[50px]">
        <h2 className="text-lg text-primary font-bold font-keetanoKB">
          Фото места
        </h2>
        <div className="flex items-center justify-center gap-20">
          {data.map(({ src, id }) => (
            <MImage key={id} src={src} alt="p" />
          ))}
        </div>
      </div>
      <div className="mt-[50px]">
        <h2 className="text-xl text-primary">Свободных мест</h2>
        <div className="my-[50px] flex  text-center">
          <Link href="/shedule/record/payment">
            <MButton
              label="5000 тг"
              className="py-2.5 px-[60px] bg-primary text-link text-2xl font-keetanoKB font-bold"
            />
          </Link>
          <h3 className="ml-[50px] text-[48px] mb-7 text-primary font-keetanoKB font-bold">
            7 / 15
          </h3>
        </div>
        <Link href="/payment-method">
          <p className=" text-[20px] text-brown underline font-involveRG ">
            Больше о видах покупок можете узнать тут{" "}
          </p>
        </Link>
      </div>
    </section>
  );
}
