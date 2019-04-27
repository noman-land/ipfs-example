import IPFS from 'ipfs';

const node = new IPFS();

node.on('ready', () => console.log('Connected to IPFS!'));

export const addText = text =>
  new Promise((resolve, reject) => {
    node.add(new Buffer(text), (error, result) =>
      error
        ? reject(error)
        : resolve(result))
  });