import type { NextPage } from 'next';
import Head from 'next/head';
import PageText from '../components/PageText';
import PageTitle from '../components/PageTitle';
import Frame from '../layout/Frame';
import Main from '../layout/Main';
import SideNav from '../layout/SideNav';

const Home: NextPage = () => {
  return (
    <Frame>
      <Head>
        <title>Front Reference</title>
        <meta name="description" content="Frontend 개발을 위한 참고 문서" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNav />

      <Main>
        <PageTitle marginBottom={10}>Front Reference</PageTitle>
        <PageText marginBottom={10}>
          반갑습니다! 🎉
          <br /> Front Reference는 <br />
          Front-end 개발 중에 필요한 정보와 예제 코드 등을 <br />
          쉽게 찾기 위한 목적으로 만든 웹페이지 입니다.
        </PageText>
        <PageText>
          도움이 되시길 바라고
          <br /> 보다 좋은 아이디어가 있으면 댓글 남겨주세요 🙃
        </PageText>
      </Main>
    </Frame>
  );
};

export default Home;
