import '../styles/globals.css';
import DashboardLayout from '../components/DashboardLayout/DashboardLayout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
 
  const Layout = Component.Layout || DashboardLayout;

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp;
