import AuthorizationPage from "@/pages/Authorization/ui/AuthorizationPage";
import Layout from "@/widgets/Layout/Layout";

export default function Auth() {
  return (
    <Layout type="login">
      <main className="container">
        <AuthorizationPage />
      </main>
    </Layout>
  );
}
