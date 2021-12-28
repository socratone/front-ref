const copyClipboard = (value: string) => {
  const textarea = document.createElement('textarea');
  textarea.textContent = value;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};

export default copyClipboard;
