import NewsPage from "@/pages/News/ui/NewsPage";
import Layout from "@/widgets/Layout/Layout";

export default function News() {
  return (
    <Layout type="login">
      <main className="container">
        <NewsPage />
      </main>
    </Layout>
  );
}
