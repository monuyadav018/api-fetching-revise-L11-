import React, { useEffect, useState } from "react";
import { fetchPost } from "./api";
import RandomUser from "./RandomUsers/Random";
import { Button } from "react-bootstrap";


function App() {
  const [userData, setUserData] = useState(null);
  // const [val, setVal] = useState(null);

  // useEffect(() => {
  //   async function loadData() {
  //     const data = await fetchPost();
  //     setUserData(data.results[0]);
  //   }
  //   loadData();
  // }, []);
  useEffect(()=>{
    fetchPost().then((user)=> setUserData(user.results[0]));
  },[]);
  const refresh =()=>{
     fetchPost().then((user) => setUserData(user.results[0]));

  }
  return (
    <div className="grid-page">
      <h1>RandomUser ...</h1>
      {/* "data" is prop here */}
      {userData && <RandomUser newData={userData} />}
      <Button onClick={refresh}  style={{margin:'10px'}}>Refresh User</Button>
    </div>
  );
}

export default App;
