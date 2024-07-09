//asyncronus functions for unit testing
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')

    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:1234});
    },1000)
}
module.exports={fetchData,MyData};
