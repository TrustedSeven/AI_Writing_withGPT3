import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout/Layout';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <Layout>
      <Register></Register>
    </Layout>
  );
};

RegisterPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default RegisterPage;
