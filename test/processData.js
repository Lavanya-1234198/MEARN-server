const {getData,getRaw} = require('./util');
function processData(){
    return `Processed:${getData()}`;
}
function processRaw(){
    return getRaw();
}
module.exports = {processData,processRaw};