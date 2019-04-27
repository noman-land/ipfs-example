export const logError = error => console.error('\nUh oh!\n', error);

export const logSuccess = ([{ hash }]) => {
  const url = `https://ipfs.io/ipfs/${hash}`;
  const link = document.createElement('a');
  const span = document.createElement('span');
  const resultDiv = document.getElementsByClassName('result')[0];

  span.innerText = 'Find your content at ';
  link.href = link.innerText = url;
  link.target = '_blank';

  resultDiv.innerHTML = '';

  resultDiv
    .appendChild(span)
    .appendChild(link);
}

export const ready = fn => {
  const isReady = document.attachEvent
    ? document.readyState === "complete"
    : document.readyState !== "loading"

  isReady
    ? fn()
    : document.addEventListener('DOMContentLoaded', fn)
}