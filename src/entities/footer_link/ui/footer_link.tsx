import Logo from "@/shared/ui/icons/header/logo";

export default function FooterLink() {
  return (
    <div className="flex items-center justify-center gap-[95px] mb-9">
      <h3 className="text-lg text-link font-bold">showtime@gmail.com</h3>
      <h3 className="text-lg text-link font-bold">+7 (962) 962 22 33</h3>
      <h3 className="text-lg text-link font-bold">Адреса клубов</h3>
      <Logo />
    </div>
  )
}