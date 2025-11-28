import React, { useEffect, useState } from "react";
import { fetchPosts } from "./api";
import {Card} from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchPosts();
      setPosts(data);
      console.log("data fetched",data);
    }

    loadData();
  }, []);

  return (
    <div>
      <h1>Api Fetching </h1>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            width: "18rem",
            display: "inline-block",
            margin: "4px",
            maxHeight: "300px",
           maxWidth:'250px'
           
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder",color:"goldenrod" }}>{post.title}</Card.Title>

            <Card.Text style={{color:'burlywood'}}>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
