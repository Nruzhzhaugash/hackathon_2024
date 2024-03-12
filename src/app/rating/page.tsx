import RatingPage from "@/pages/RatingPlayer/ui/RatingPlayer";
import Layout from "@/widgets/Layout/Layout";

export default function Rating() {
  return (
    <Layout type="login">
      <main className="container pt-[60px] pb-[120px]">
        <h1 className="text-primary text-2xl font-bold mb-[50px]">Рейтинг игроков</h1>
        <RatingPage />
      </main>
    </Layout>
  )
}