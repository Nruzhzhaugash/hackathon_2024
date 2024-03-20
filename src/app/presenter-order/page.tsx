import PresenterOrderPage from "@/pages/PresenterOrderPage/ui/PresenterOrderPage";
import Layout from "@/widgets/Layout/Layout";
import './styles.scss';

export default function PresenterOrder() {
  return (
    <Layout type="login">
        <div className="flex items-center justify-center presenter__mobile__bg mmd:px-3 pt-[126px]">
          <h1 className="text-link text-[12px] font-normal font-involveBQ text-center">Надоели скучные застолья или походы в караоке? Мафия сделает Ваш праздник запоминающимся, а наши ведущие Мафии помогут в этом. Никто не будет скучать и живое общение гарантированно, даже если гости не были знакомы до этого вечера!</h1>
        </div>
        <main className="container pt-[60px] pb-[120px] mmd:pt-[21px] mmd:pb-10">
        <PresenterOrderPage />
      </main>
    </Layout>
  )
}