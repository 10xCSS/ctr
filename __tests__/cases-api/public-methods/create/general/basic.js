const CTR  = require('ctr').js;
const ctr  = new CTR();

ctr.create('.test-1', {
  width: '200px'
});


const res = ctr.getRes();


module.exports = {
  res: res
};
