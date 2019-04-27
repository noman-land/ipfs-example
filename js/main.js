import '../sass/style.sass';

import { logError, logSuccess, ready } from './utils/domUtils';
import { addText } from './utils/ipfsUtils';

const handleSubmit = event => {
  event.preventDefault();
  const text = document.getElementById('stuff').value;
  addText(text).then(logSuccess, logError);
};

ready(() => {
  document.getElementById('add-stuff').addEventListener('submit', handleSubmit)
});
