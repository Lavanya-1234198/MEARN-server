//jest to test out http get method
//well test if it contains all the params or not
const app = require('./index');//super Test
const request = require('supertest');

describe('GET /users',()=>{
    test('GET users from /user api',async ()=>{
        const res = await request(app)
        .get('/users')
        .expect(200);
        //const data = res.data 
        console.log(res.body.getAllUsers[0])
        const data = res.body;
       data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('id')
            expect(user).toHaveProperty('email')
        })
    })

})
