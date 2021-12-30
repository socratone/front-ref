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
import TitleHeader from '../../components/TitleHeader';

const MomentPage = () => {
  return (
    <Frame>
      <Nav />

      <Main>
        <TitleHeader title="Moment" url="https://momentjs.com/" />

        <SubTitle>사용 목적 🎯</SubTitle>

        <Text>
          실무에서 날짜와 관련된 데이터를 다루다 보면 코딩 테스트에서만 써먹었던
          알고리즘을 다시 꺼내는 일이 생깁니다.
          <br />
          이런 때에 moment를 이용하면 날짜 데이터를 손쉽게 다룰 수 있습니다.
        </Text>

        <SubTitle>설치 ⚙️</SubTitle>

        <Text>node 프로젝트의 터미널에서 다음을 입력합니다.</Text>

        <Code>npm install moment</Code>

        <Text>
          프로젝트의 한 부분에 아래를 넣어야 요일 등이 한글로 바뀝니다.
        </Text>

        <Code language="js">{`import 'moment/locale/ko';`}</Code>

        <SubTitle>값을 넣는 방법</SubTitle>

        <Text>
          아래와 같은 방법으로 moment의 첫 번째 인자에 값을 넣어 Moment 객체를
          만들 수 있습니다.
        </Text>

        <Code language="js">{`moment('2021-12-25'); // Moment 객체를 return`}</Code>

        <Text>세부 시간도 넣을 수 있습니다.</Text>

        <Code language="js">{`moment('2021-12-25 10:20:30');`}</Code>

        <SubTitle>값을 출력하는 방법</SubTitle>

        <Text>
          만들어진 Moment 객체의 값을 출력하려면 format 메소드를 씁니다.
        </Text>

        <Code language="js">
          {`const date = moment('2021-12-25 10:20:30');
date.format('YYYY년 MMMM Do a h시 mm분 ss초'); // 아래 문자를 return
// 2021년 12월 25일 오전 10시 20분 30초`}
        </Code>

        <Text mb={10}>많이 사용하는 출력 예제들을 적어보겠습니다.</Text>

        <BulletText>날짜</BulletText>
        <Code language="js">{`moment('2021-12-25').format('YYYY년 MMMM Do');`}</Code>
        <Preview>{moment('2021-12-25').format('YYYY년 MMMM Do')}</Preview>

        <BulletText>전부</BulletText>
        <Code language="js">{`moment('2021-12-25 10:20:30').format('YYYY년 MMMM Do a h시 mm분 ss초');`}</Code>
        <Preview>
          {moment('2021-12-25 10:20:30').format(
            'YYYY년 MMMM Do a h시 mm분 ss초'
          )}
        </Preview>

        <BulletText>12시간제</BulletText>
        <Code language="js">{`moment('2021-12-25 20:20:30').format('a h시 mm분');`}</Code>
        <Preview>{moment('2021-12-25 20:20:30').format('a h시 mm분')}</Preview>

        <BulletText>24시간제</BulletText>
        <Code language="js">{`moment('2021-12-25 20:20:30').format('HH시 mm분');`}</Code>
        <Preview>{moment('2021-12-25 20:20:30').format('HH시 mm분')}</Preview>
      </Main>
    </Frame>
  );
};

export default MomentPage;
