import Layout from "@/widgets/Layout/Layout";
import ProfilePage from "@/pages/Profile/ui/ProfilePage";

export default function Profile() {
  return (
    <Layout type="profile">
      <main className="container">
        <ProfilePage />
      </main>
    </Layout>
  );
}
