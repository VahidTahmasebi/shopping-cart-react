import Layout from "../Layout/Layout";
import { useAuth } from "../Providers/AuthProvider";

const ProfilePage = () => {
  const { name, phoneNumber, email } = useAuth();

  return (
    <Layout>
      <p>{name}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
    </Layout>
  );
};

export default ProfilePage;
