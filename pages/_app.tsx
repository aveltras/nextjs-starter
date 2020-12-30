import { PartialNextContext, withUrqlClient } from "next-urql";
import NextApp, { AppContext, AppProps } from "next/app";
import fetch from "isomorphic-fetch";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

App.getInitialProps = async (ctx: AppContext) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return { ...appProps };
};

export default withUrqlClient((ctx: PartialNextContext) => ({
  url: "http://localhost:3000/api",
  fetch,
  fetchOptions: {
    credentials: "include",
    headers: ctx?.req ? { cookie: ctx?.req.headers.cookie } : undefined,
  },
}))(
  // @ts-ignore
  App
);
