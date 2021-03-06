import type { NextPage } from 'next';
import Head from 'next/head';
import Text from '../components/Text';
import Title from '../components/Title';
import Frame from '../layout/Frame';
import Main from '../layout/Main';
import Nav from '../layout/Nav';

const Home: NextPage = () => {
  return (
    <Frame>
      <Head>
        <title>Front Reference</title>
        <meta name="description" content="Frontend 개발을 위한 참고 문서" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Main>
        <Title mb={10}>Front Reference</Title>
        <Text mb={10}>
          반갑습니다! 🎉
          <br /> Front Reference는 <br />
          Front-end 개발 중에 필요한 정보와 예제 코드 등을 <br />
          쉽게 찾기 위한 목적으로 만든 웹페이지입니다.
        </Text>
        <Text>
          도움이 되시길 바라고
          <br /> 보다 좋은 아이디어가 있으면 댓글 남겨주세요 🙃
        </Text>
      </Main>
    </Frame>
  );
};

export default Home;
