// export async function fetchPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API Error:", error);
//     return [];
//   }
// }


export async function fetchPost(){
  try{
   const response = await fetch("https://randomuser.me/api/");
   const data = await response.json();
   return data;


  }catch(error){
      console.log("api error",error);
      return [];
  }
}