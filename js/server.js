const IPFS = require('ipfs');
const node = new IPFS();

const json = {
  name: 'Noman',
  age: 100,
  friends: [
    {
      name: 'Bob',
      age: 80,
    },
    {
      name: 'Judy',
      age: 80,
    }
  ],
};

function addJson(json) {
  return new Promise((resolve, reject) => {
    node.files.add(new Buffer(JSON.stringify(json)), (error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result);
    });
  })
}

function logSuccess(result) {
  console.log('\nNice!\n', result);
}

function logError(error) {
  console.error('\nUh oh!\n', error);
}

node.on('ready', () => {
  addJson(json)
    .then(logSuccess, logError)
});
