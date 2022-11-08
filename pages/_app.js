import "../styles/tailwind.css";
import "../styles/slick.css";
import { wrapper } from '../redux';
import App from 'next/app';
import { removeError } from '../redux/actions/errorActions';
// import 'bootstrap/dist/css/bootstrap.css'


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch(removeError());
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
// export default MyApp;
export default wrapper.withRedux(MyApp);