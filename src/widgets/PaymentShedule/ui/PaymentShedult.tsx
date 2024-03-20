import Link from "next/link";

export default function PaymentShedule() {
  return (
    <div className="flex items-center justify-between mb-[56px]">
      <h1 className="text-2xl text-primary font-bold font-keetanoKB">Покупка</h1>
      <Link 
        className="hover:underline transition-all text-primary font-bold font-involveRG  text-[30px]" 
        href={'/shedule/record/payment/payment-method'}
      >
        Способы оплаты
      </Link>
    </div>
  )
}