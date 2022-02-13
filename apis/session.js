export async function createSession(name){
    let response =await fetch("http://localhost:3001", {
        method:"POST",
        body:JSON.stringify({
           name:name
          }),
        headers:{'content-type': 'application/json'}
      });

    response=await response.json();
    return response;


}

export async function playSession(id,letter){
  let response=await fetch(`http://localhost:3001/play/${id}` ,
  {
    method:"POST",
    body:JSON.stringify({
      letter:letter
    }),
    headers:{'content-type': 'application/json'}
  })

   response=await response.json();
   return response;

}
  