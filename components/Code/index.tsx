import styled from 'styled-components';
import CopyIcon from './CopyIcon';
import copyClipboard from './copyClipboard';
import { useContext } from 'react';
import ColorContext from '../../context/colorContext';
import applyJavascriptCodeColor from './applyJavascriptCodeColor';

type CodeProps = {
  mb?: number;
  language?: 'js';
  children: string;
};

const Code = ({ mb, language, children }: CodeProps) => {
  const { fontColor, navColor } = useContext(ColorContext);

  const handleCopy = () => {
    copyClipboard(children);
  };

  const applyColor = (codeText: string) => {
    if (language === 'js') return applyJavascriptCodeColor(codeText);
    return [{ color: '', text: codeText }];
  };

  return (
    <Container mb={mb} fontColor={fontColor} background={navColor}>
      <code>
        <pre>
          {applyColor(children).map((item, index) => (
            <span
              key={index}
              style={{ color: item.color ? item.color : undefined }}
            >
              {item.text}
            </span>
          ))}
        </pre>
      </code>
      <IconContainer
        onClick={handleCopy}
        fontColor={fontColor}
        background={navColor}
      >
        <CopyIcon />
      </IconContainer>
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

  :hover {
    div {
      transform: translateX(0);
    }
  }

  pre {
    color: ${(props) => props.fontColor};
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const IconContainer = styled.div<{ fontColor: string; background: string }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
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
    fill: ${(props) => props.fontColor};
  }

  transition: transform 0.2s;
  transform: translateX(100%);
`;

export default Code;
