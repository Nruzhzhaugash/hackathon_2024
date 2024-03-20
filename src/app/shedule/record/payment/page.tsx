import PaymentPage from "@/pages/Payment/ui/PaymentPage";
import Layout from "@/widgets/Layout/Layout";
import PaymentShedule from "@/widgets/PaymentShedule/ui/PaymentShedult";

export default function Payment() {
  return (
    <Layout type="login">
      <main className="container pt-[60px] pb-[120px]">
        <PaymentShedule />
        <PaymentPage />
      </main>
    </Layout>
  )
}