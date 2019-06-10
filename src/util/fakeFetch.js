export default () =>
  new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        data: [{ name: 'one', id: '1873312' }, { name: 'two', id: '1231234' }]
      });
    }, 1000);
  });
