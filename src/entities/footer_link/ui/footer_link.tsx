import Logo from "@/shared/ui/icons/header/logo";

export default function FooterLink() {
  return (
    <div className="flex items-center justify-center gap-[95px] mmd:gap-[26px] mmd:mb-4 mb-9">
      <h3 className="text-lg text-link font-bold mmd:text-[8px]">showtime@gmail.com</h3>
      <h3 className="text-lg text-link font-bold mmd:text-[8px]">+7 (962) 962 22 33</h3>
      <h3 className="text-lg text-link font-bold mmd:text-[8px]">Адреса клубов</h3>
      <Logo />
    </div>
  )
}