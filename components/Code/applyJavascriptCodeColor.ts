type Word = {
  [word: string]: boolean;
};

type WordColor = {
  [word: string]: string;
};

const sixLetterReservedWord: Word = {
  import: true,
  return: true,
};

const fiveLetterReservedWord: Word = {
  const: true,
  while: true,
  class: true,
};

const fourLetterReservedWord: Word = {};

const threeLetterReservedWord: Word = {
  let: true,
  for: true,
};

const twoLetterReservedWord: Word = {
  if: true,
};

const wordColor: WordColor = {
  import: 'purple',
  return: 'purple',
  const: 'darkblue',
  while: 'purple',
  class: 'darkblue',
  let: 'darkblue',
  for: 'darkblue',
};

const getReservedWord = (queue: string) => {
  if (queue.length >= 6) {
    const word = queue.substring(queue.length - 6);
    if (sixLetterReservedWord[word]) return word;
  }

  if (queue.length >= 5) {
    const word = queue.substring(queue.length - 5);
    if (fiveLetterReservedWord[word]) return word;
  }

  if (queue.length >= 4) {
    const word = queue.substring(queue.length - 4);
    if (fourLetterReservedWord[word]) return word;
  }

  if (queue.length >= 3) {
    const word = queue.substring(queue.length - 3);
    if (threeLetterReservedWord[word]) return word;
  }

  if (queue.length >= 2) {
    const word = queue.substring(queue.length - 2);
    if (twoLetterReservedWord[word]) return word;
  }

  return '';
};

const applyJavascriptCodeColor = (codeText: string) => {
  const results = [];
  let queue = '';

  let isRemark = false;
  let isString = false;

  for (let i = 0; i < codeText.length; i++) {
    const char = codeText[i];
    const nextChar = codeText[i + 1];

    queue += char;

    if (isRemark) {
      // 줄바꿈이거나 마지막일 때에는 주석을 끝낸다.
      if (char === '\n' || !nextChar) {
        results.push({ color: 'green', text: queue });
        queue = '';
        isRemark = false;
      }
      continue;
    }

    // 주석 시작
    if (
      !isRemark &&
      queue[queue.length - 2] + queue[queue.length - 1] === '//'
    ) {
      isRemark = true;
      results.push({ color: '', text: queue.substring(0, queue.length - 2) });
      queue = '//';
      continue;
    }

    // string 마침
    if (isString) {
      if (char === "'") {
        results.push({ color: 'brown', text: queue });
        queue = '';
        isString = false;
      }
      continue;
    }

    // string 시작
    if (!isString && char === "'") {
      isString = true;
      results.push({ color: '', text: queue.substring(0, queue.length - 1) });
      queue = "'";
      continue;
    }

    // 다음 글자가 공백 등으로 구분돼 있지 않으면 예약어를 확인할 필요 없이 다음으로 넘어간다.
    if (nextChar !== ' ' && nextChar !== '\n' && nextChar !== undefined) {
      continue;
    }

    // 어떤 예약어인지 확인
    const reservedWord = getReservedWord(queue);
    // 예약어라면 예약어 앞의 글자와 예약어를 적당히 처리한 후 queue에서 비운다.
    if (reservedWord) {
      const preReservedWord = queue.substring(
        0,
        queue.length - reservedWord.length
      );
      results.push({ color: '', text: preReservedWord });
      results.push({ color: wordColor[reservedWord], text: reservedWord });
      queue = '';
    }
  }

  if (queue.length > 0) {
    results.push({ color: '', text: queue });
  }

  return results;
};

export default applyJavascriptCodeColor;
