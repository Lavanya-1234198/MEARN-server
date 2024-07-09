
//mock the getData and ProcessData 
jest.mock('./test/util',()=>({
    getData:jest.fn(),
    getRaw:jest.fn()
}))

const {getData,getRaw} = require('./test/util')
const {processData,processRaw} = require('./test/processData')
//mock the return value
test('Mocked the process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data');
});
test('Mocke Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})
