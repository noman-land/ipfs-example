import IPFS from 'ipfs';
import '../sass/style.sass';

const node = new IPFS();

const PUBLIC_GATEWAY = 'https://ipfs.io/ipfs';

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  function addText(text) {
    return new Promise((resolve, reject) => {
      node.add(new Buffer(text), (error, result) => {
        if (error) {
          return reject(error);
        }

        return resolve(result);
      });
    })
  }

  function logSuccess([{ hash }]) {
    const url = `${PUBLIC_GATEWAY}/${hash}`;
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

  function logError(error) {
    console.error('\nUh oh!\n', error);
  }

  document.getElementById('add-stuff').addEventListener('submit', event => {
    event.preventDefault();
    const text = document.getElementById('stuff').value;
    addText(text).then(logSuccess, logError);
  });

  node.on('ready', () => {
    console.log('Connected to IPFS!');
  });
});
