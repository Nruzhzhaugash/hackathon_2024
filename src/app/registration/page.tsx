import RegistrationPage from "@/pages/Registration/ui/RegistrationPage";
import Layout from "@/widgets/Layout/Layout";

export default function Registration() {
  return (
    <Layout type="login">
      <main className="container">
        <RegistrationPage />
      </main>
    </Layout>
  );
}
