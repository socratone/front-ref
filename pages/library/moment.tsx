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

const MomentPage = () => {
  return (
    <Frame>
      <Nav />

      <Main>
        <Title mb={10}>Moment</Title>

        <BulletText mb={10}>
          한국말로 표기하려면 다음을 불러와야 한다.
        </BulletText>
        <Code mb={10}>{`import 'moment/locale/ko';`}</Code>

        <SubTitle mb={10}>입력과 아웃</SubTitle>
        <Code mb={10}>
          {`moment('2021-12-25', 'YYYY-MM-DD').format('YYYY년 MMMM Do a h시 mm분 ss초');`}
        </Code>
        <Preview>
          {moment('2021-12-25', 'YYYY-MM-DD').format(
            'YYYY년 MMMM Do a h시 mm분 ss초'
          )}
        </Preview>
      </Main>
    </Frame>
  );
};

export default MomentPage;
