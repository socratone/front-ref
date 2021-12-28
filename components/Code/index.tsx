import styled from 'styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copyClipboard from './copyClipboard';
import { useContext } from 'react';
import ColorContext from '../../context/colorContext';

type CodeProps = {
  mb?: number;
  children: string;
};

const Code = ({ mb, children }: CodeProps) => {
  const { fontColor, navColor } = useContext(ColorContext);

  const handleCopy = () => {
    copyClipboard(children);
  };

  return (
    <Container mb={mb} fontColor={fontColor} background={navColor}>
      <code>
        <pre>{children}</pre>
      </code>
      <IconEventArea>
        <IconContainer
          onClick={handleCopy}
          fontColor={fontColor}
          background={navColor}
        >
          <ContentCopyIcon fontSize="small" />
        </IconContainer>
      </IconEventArea>
    </Container>
  );
};

const Container = styled.article<{
  mb?: number;
  fontColor: string;
  background: string;
}>`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background: ${(props) => props.background};
  border-radius: 5px;
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : undefined)};
  overflow: hidden;

  pre {
    color: ${(props) => props.fontColor};
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const IconEventArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;

  :hover {
    div {
      transform: translateX(0);
    }
  }
`;

const IconContainer = styled.div<{ fontColor: string; background: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 5px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    ${(props) => props.background} 26%
  );
  cursor: pointer;

  :active {
    svg {
      transform: scale(0.92);
    }
  }

  svg {
    color: ${(props) => props.fontColor};
  }

  transition: transform 0.2s;
  transform: translateX(100%);
`;

export default Code;
