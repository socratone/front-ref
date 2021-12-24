import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Button from '../components/Button';
import ColorContext from '../context/colorContext';
import Frame from '../layout/Frame';
import Main from '../layout/Main';
import SideNav from '../layout/SideNav';

const Home: NextPage = () => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Frame>
      <Head>
        <title>Front Ref</title>
        <meta name="description" content="Frontend 개발을 위한 참고 문서" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNav />

      <Main>
        <div style={{ color: fontColor }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut,
          assumenda doloribus optio, voluptatibus corrupti ea voluptate
          repellendus, ducimus nisi accusamus? Est dignissimos illum explicabo
          libero quaerat asperiores dolor dicta?
        </div>
      </Main>
    </Frame>
  );
};

export default Home;
