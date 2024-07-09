//call the async function here
const {fetchData,MyData} = require('./test/async');

test('The data expected is admin',done=>{
    //done is a callback parameter it used to validated to test case is executed or not .it is used only for asyncronues functions
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }
        catch(err){
            done(err);
        }
    }
    fetchData(callback);
})

test('Callback Mydata',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(1234);
            done();
        }
        catch(err){
            done(err);
        }
    }
    MyData(callback);
})
//Mock Function
test('Mocking callback function',done=>{
    const Mockfunction = jest.fn(data=>{
        expect(data).toBe('admin')
        console.log('Mock Function')
        done();

    })
    fetchData(Mockfunction);
})
 