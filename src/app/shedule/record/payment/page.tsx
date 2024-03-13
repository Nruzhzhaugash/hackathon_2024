import PaymentPage from "@/pages/Payment/ui/PaymentPage";
import Layout from "@/widgets/Layout/Layout";

export default function Payment() {
  return (
    <Layout type="login">
      <main className="container pt-[60px] pb-[120px]">
        <h1 className="text-2xl text-primary font-bold font-keetanoKB mb-[56px]">Покупка</h1>
        <PaymentPage />
      </main>
    </Layout>
  )
}