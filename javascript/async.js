console.log("started")
async function getpost(){
    const api="jsonplaceholder.typicode.com/users"
    const response = await fetch(api)
    console.log(response)
    const data=await response.jsion()
    console.log("data",data);
        
    
}