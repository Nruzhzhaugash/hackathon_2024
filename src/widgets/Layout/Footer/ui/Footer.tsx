import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import Facebook from "@/shared/ui/icons/footer/facebook";
import Twiiter from "@/shared/ui/icons/footer/twitter";
import Vk from "@/shared/ui/icons/footer/vk";
import Link from "next/link";
import './footer.scss';

export default function Footer() {
  return (
    <footer className="bg-brown pt-12 pb-[66px]">
      <div className="container grid footer__grid">
        <div className="left">
          <h1 className="text-xl text-link mb-6 font-bold">Подпишись на нашу рассылку</h1>
          <h3 className="text-lg font-bold mb-[22px] text-link">Электронная почта:</h3>
          <form className="mb-[25px] flex items-center gap-2.5">
            <div className="px-[50px] py-[11px] bg-link">
              <Input 
                type="email" 
                className="text-lg font-bold text-brown" 
                autoComplete="off"
              />
            </div>
            <Button 
              className="px-[34px] py-[11px] font-bold text-lg text-primary bg-link"
              label="Подписаться"
            />
          </form>
          <div className="flex items-center gap-10">
            <Twiiter /> <Vk /> <Facebook />
          </div>
        </div>
        <div className="right pt-5 flex gap-[51px]">
          <div className="flex flex-col gap-[21px]">
            <Link href={"/"} className="text-link font-bold text-lg">Главная</Link>
            <Link href={''} className="text-link font-bold text-lg">Статьи</Link>
            <Link href={''} className="text-link font-bold text-lg">Новости</Link>
          </div>
          <div className="flex flex-col gap-[21px]">
            <Link href={''} className="text-link font-bold text-lg">Рейтинг</Link>
            <Link href={''} className="text-link font-bold text-lg">Расписание</Link>
          </div>
          <div className="flex flex-col gap-[21px]">
            <Link href={''} className="text-link font-bold text-lg">О клубе</Link>
            <Link href={''} className="text-link font-bold text-lg">Галерея</Link>
            <Link href={''} className="text-link font-bold text-lg">Партнёры</Link>
          </div>
          <div className="flex">
            <Link href={''} className="text-link font-bold text-lg">Заказать ведущего</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}