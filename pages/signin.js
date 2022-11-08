import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout/Layout';
import Login from '../components/Login';
import Feature from '../components/Feature';

const LoginPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

LoginPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default LoginPage;


