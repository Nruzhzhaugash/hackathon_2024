import { GoogleButton } from "@/features/googleButton/ui/GoogleButton";
import VkLogo from "@/shared/ui/icons/vk/logo";
import MButton from "@/shared/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div>
      <div className=" flex items-center justify-between pt-[60px] mb-[140px]">
        <div className="text-primary">
          <h1 className="text-2xl font-keetanoKB mb-[50px]">ВХОД</h1>
          <form action="">
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Почта \ Номер</h2>
              <input
                type="text"
                className="text-base text-primary w-[265px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                placeholder="Введите почту"
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Пароль</h2>
              <input
                type="password"
                className="text-base text-primary w-[265px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                placeholder="Введите пароль"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link href="/api/auth/signin">
                <MButton
                  label="Войти"
                  className="mr-[20px] py-[10px] px-[60px] bg-primary text-link font-obrazec text-[32px]"
                >
                  Войти
                </MButton>
              </Link>
              <div className="flex">
                <VkLogo />
                <GoogleButton />
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-top justify-between">
          <div className="mr-[50px]">
            <Image
              src="/signin/people.png"
              alt="photo of game"
              width={455}
              height={455}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <Image
              src="/signin/people2.png"
              alt="photo of game"
              width={250}
              height={150}
            />
            <Image
              src="/signin/people3.png"
              alt="photo of game"
              width={250}
              height={250}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
