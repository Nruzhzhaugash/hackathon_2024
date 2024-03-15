import AuthPage from "@/pages/Auth/ui/AuthPage";
import Layout from "@/widgets/Layout/Layout";

export default function Auth() {
  return (
    <Layout type="login">
      <main className="container">
        <AuthPage />
      </main>
    </Layout>
  );
}
