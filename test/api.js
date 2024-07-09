async function FetchData(){
    return{getAllUsers:[{
        "id":"1",
        "name":"abc",
        "email":"@.com",
        "password":"123"
    }]}
   /* try{
        const response = await fetch('http://localhost:3001/users');
    if(!response){
        throw new Error("Failed to  fetch");
    }
    const data = response.json();
    return data

    }catch(err){
        throw err;
    }*/
};
module.exports = FetchData;