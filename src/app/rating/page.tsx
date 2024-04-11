import RatingPage from "@/pages/RatingPlayer/ui/RatingPlayer";
import Layout from "@/widgets/Layout/Layout";

export default function Rating() {
  return (
    <Layout type="login">
      <main className="container pt-[60px] pb-[120px]">
        <RatingPage />
        <p className="text-base mt-[50px] font-normal font-involveBQ text-center text-primary">
          В конце каждого месяца и года мы награждаем лучших игроков клуба
          ценными призами и званиями. Это отличная возможность для вас
          продемонстрировать свои навыки и стать частью истории нашего клуба.
        </p>
      </main>
    </Layout>
  );
}
