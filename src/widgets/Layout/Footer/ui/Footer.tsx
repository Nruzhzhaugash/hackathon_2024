import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import Facebook from "@/shared/ui/icons/footer/facebook";
import Twiiter from "@/shared/ui/icons/footer/twitter";
import Vk from "@/shared/ui/icons/footer/vk";
import Link from "next/link";
import "./footer.scss";
import FooterLink from "@/entities/footer_link/ui/footer_link";

export default function Footer() {
  return (
    <footer className="bg-brown pt-12 pb-[66px] mmd:pt-5 mmd:pb-5">
      <div className="container grid footer__grid">
        <div className="left mb-[61px] mmd:mb-[23px]">
          <h1 className="mmd:text-[20px] whitespace-nowrap text-xl text-link mb-6 mmd:mb-[5px] font-bold font-keetanoKB">
            Подпишись на нашу рассылку
          </h1>
          <h3 className="mmd:text-[12px] text-lg font-bold mb-[22px] mmd:mb-2.5 text-link">
            Электронная почта:
          </h3>
          <form className="mb-[25px] flex items-center gap-2.5">
            <div className="px-[50px] mmd:w-[70%] py-[7px] bg-link mmd:px-2.5 mmd:py-[0px]">
              <Input
                placeholder="Введите свою почту"
                type="email"
                className="text-lg w-[245px] font-bold px-[20px] mmd:p-0 mmd:text-[12px] footer__input text-brown focus:border-none focus:outline-none"
                autoComplete="off"
              />
            </div>
            <Button
              className="px-[34px] mmd:text-[12px] py-[11px] mmd:py-[3px] mmd:px-[7px] font-bold text-lg bg-link"
              label="Подписаться"
            />
          </form>
          <div className="flex mmd:justify-center items-center mmd:gap-2.5 gap-10">
            <Twiiter /> <Vk /> <Facebook />
          </div>
        </div>
        <div className="mmd:hidden right pt-5 flex gap-[51px]">
          <div className="flex flex-col gap-[21px]">
            <Link href={"/"} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">
              Главная
            </Link>
            <Link href={""} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">
              Статьи
            </Link>
            <Link href={""} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">
              Новости
            </Link>
          </div>
          <div className="flex flex-col gap-[21px]">
            <Link href={'/rating'} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">Рейтинг</Link>
            <Link href={'/shedule'} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">Расписание</Link>
          </div>
          <div className="flex flex-col gap-[21px]">
            <Link href={"/about"} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">
              О клубе
            </Link>
            <Link href={""} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">
              Галерея
            </Link>
            <Link href={""} className="hover:text-opacity-70 transition-all text-link font-bold text-lg">
              Партнёры
            </Link>
          </div>
          <div className="flex">
            <Link
              href={"/presenter-order"}
              className="hover:text-opacity-70 transition-all whitespace-nowrap text-link font-bold text-lg"
            >
              Заказать ведущего
            </Link>
          </div>
        </div>
      </div>
      <FooterLink />
      <div className="flex items-center justify-center flex-col mmd:flex-row gap-2.5">
        <h3 className="mmd:text-[8px] text-link text-lg font-extrabold font-obrazec">
          © 2022 — Клуб «SHOWTIME»
        </h3>
        <h3 className="mmd:text-[8px] text-link font-bold text-lg font-obrazec">
          Политика конфиденциальности
        </h3>
      </div>
    </footer>
  );
}
