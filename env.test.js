let dataSets = [];
//execute my env before all
beforeAll(()=>{
    dataSets = ['Raju','Lavanya','Likhitha'];

})
beforeEach(()=>{
    console.log('Before Each Setup is called')
})
afterEach(()=>{
    console.log('After Each Setup is called')
})
afterAll(()=>{
    dataSets=[];

})
test('Test case',()=>{
    expect(dataSets.length).toBe(3)
})
test('Data sset contains',()=>{
    expect(dataSets).toContain('Lavanya');
})
test('Data sset contains',()=>{
    expect(dataSets).toContain('Likhitha');
})