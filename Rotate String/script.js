let str = 'w3resource';

const intervalId = setInterval(() => {
  str = str.slice(-1) + str.slice(0, -1); // move last char to front
  console.log(str);
}, 500);

setTimeout(() => {
  clearInterval(intervalId);
  console.log('Rotation stopped after 5 seconds.');
}, 5000);

