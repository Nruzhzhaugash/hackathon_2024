import ShedulePage from "@/pages/ShedulePage/ui/ShedulePage";
import Layout from "@/widgets/Layout/Layout";

export default function Shedule() {
  return (
    <Layout type="login">
      <main className="container pt-[60px] pb-[120px]">
        <h1 className="text-2xl text-primary font-bold mb-[50px] font-keetanoKB">РАСПИСАНИЕ ИГР `МАФИЯ`</h1>
        <ShedulePage />
      </main>
    </Layout>
  )
}