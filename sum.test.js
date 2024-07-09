//write our test cases for our unit testing
const sum = require('./test/sum')
//jest test case
//test function takes two parameters label and function
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe exactly equal value we use toBe
    //to execute out unit fun and return a value we use expect function
})
test('Object is array',()=>{
    const data=[1,2,3,4]
    
    expect(data).toEqual[1,2,3,4]
})
//toBeNull
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})
//toBeDefined
test('Value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
//toBeTruthy
test('Value is Truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})
//toBeFalse
test('Value is False',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})