import Code from '../../components/Code';
import PageTitle from '../../components/PageTitle';
import Preview from '../../components/Preview';
import Frame from '../../layout/Frame';
import Main from '../../layout/Main';
import SideNav from '../../layout/SideNav';

const MomentPage = () => {
  return (
    <Frame>
      <SideNav />
      <Main>
        <PageTitle marginBottom={10}>Moment</PageTitle>
        <div>• moment 사용 방법</div>
        <Code style={{ marginBottom: '10px' }}>
          {"moment().format('YYYY년 MMMM Do a h시 mm분 ss초');"}
        </Code>
        <Preview>2021년 12월 24일 오후 9시 28분 20초</Preview>
      </Main>
    </Frame>
  );
};

export default MomentPage;
