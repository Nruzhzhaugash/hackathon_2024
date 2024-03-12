import PresenterOrderPage from "@/pages/PresenterOrderPage/ui/PresenterOrderPage";
import Layout from "@/widgets/Layout/Layout";

export default function PresenterOrder() {
  return (
    <Layout type="login">
      <main className="container pt-[60px] pb-[120px]">
        <PresenterOrderPage />
      </main>
    </Layout>
  )
}