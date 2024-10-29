
export const myFetchGetRequest=async()=>{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts');
    const resJson= await response.json();
    return resJson;

}
export const myFetchPostRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    
    const resJson = await response.json();
    return resJson;
};
export const myFetchPutRequest = async (id, data) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1' + id,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    );
  
    const resJson = await response.json();
    return resJson;
  };
  export const myFetchDeleteRequest = async id => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1' + id,
      {
        method: 'DELETE',
        
        },
  
    );
    console.log(response);
  
    // const resJson = await response.json();
    return -1;
  };



