const FetchData = require('./test/api');

jest.mock('node-fetch');

test('GET /users api data',async()=>{
    const data = await FetchData();
    console.log(data);
    expect(data).toHaveProperty('getAllUsers')
    //test if 
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('name')
        expect(user).toHaveProperty('email')
        expect(user).toHaveProperty('password')
        
        
    })
})