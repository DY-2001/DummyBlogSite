import { useState } from "react";
import { useEffect } from "react";
import PostList from "./PostList";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://dummyapi.io/data/v1/post?page=1&limit=10"
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "app-id": "6362cc30616c64145fc71dec"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  return <div className="home">
    {posts && <PostList posts={posts} title="All Blogs!"/>}
  </div>;
};

export default Home;
