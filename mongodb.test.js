const mongoose = require('mongoose')
describe('MongoDB connected',()=>{
    beforeAll(async()=>{
        const url = 'mongodb+srv://kalyanilavanya12345:kWXsaJbOUz5eLWiQ@cluster0.vujwptm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url)
    })
//cal the test case inside describe and below before all
test('MongoDB connected to server',()=>{
    expect(mongoose.connection.readyState).toBe(1);
})
})