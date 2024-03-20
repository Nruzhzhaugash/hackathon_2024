import SigninPage from "@/pages/Signin/ui/SigninPage";
import Layout from "@/widgets/Layout/Layout";

export default function Signin() {
  return (
    <Layout type="login">
      <main className="container">
        <SigninPage />
      </main>
    </Layout>
  );
}
