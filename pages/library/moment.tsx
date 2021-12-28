import moment from 'moment';
import 'moment/locale/ko';
import Code from '../../components/Code';
import Title from '../../components/Title';
import Preview from '../../components/Preview';
import Frame from '../../layout/Frame';
import Main from '../../layout/Main';
import Nav from '../../layout/Nav';
import BulletText from '../../components/BulletText';
import SubTitle from '../../components/SubTitle';
import Text from '../../components/Text';

const MomentPage = () => {
  return (
    <Frame>
      <Nav />

      <Main>
        <Title>Moment</Title>

        <SubTitle>사용 목적 🎯</SubTitle>

        <Text>
          실무에서 날짜와 관련된 데이터를 다루다 보면 코딩 테스트에서만 써먹었던
          알고리즘을 다시 꺼내는 일이 생깁니다.
          <br />
          이런 때에 moment를 이용하면 날짜 데이터를 손쉽게 다룰 수 있습니다.
        </Text>

        <SubTitle>설치</SubTitle>

        <Text>node 프로젝트의 터미널에서 다음을 입력합니다.</Text>

        <Code>npm install moment</Code>

        <Text>
          프로젝트의 한 부분에 아래를 넣어야 요일 등이 한글로 바뀝니다.
        </Text>

        <Code>{`import 'moment/locale/ko';`}</Code>

        <SubTitle>인풋과 아웃풋</SubTitle>

        {/* 
        <Code>
          {`moment('2021-12-25', 'YYYY-MM-DD').format('YYYY년 MMMM Do a h시 mm분 ss초');`}
        </Code>
        <Preview>
          {moment('2021-12-25', 'YYYY-MM-DD').format(
            'YYYY년 MMMM Do a h시 mm분 ss초'
          )}
        </Preview> */}
      </Main>
    </Frame>
  );
};

export default MomentPage;
