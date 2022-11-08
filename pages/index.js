import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import verifyToken from '../getInitialProps/verifyToken';

const Home=()=> {
  return (
    <>
      <SeoHead title='Welcome to Lutuy' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
Home.getInitialProps = function (ctx) {
  verifyToken(ctx);
};
export default Home;