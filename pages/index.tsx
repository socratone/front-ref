import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/Button';
import Frame from '../layout/Frame';
import Main from '../layout/Main';
import SideNav from '../layout/SideNav';

const Home: NextPage = () => {
  return (
    <Frame>
      <Head>
        <title>Front Ref</title>
        <meta name="description" content="Frontend 개발을 위한 참고 문서" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNav />

      <Main>
        <Button>어서오세요</Button>
      </Main>
    </Frame>
  );
};

export default Home;
