import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPosts] = useState([]);
  const url = "https://dummyapi.io/data/v1/post/" + id;
  const monthsname = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "app-id": "6362cc30616c64145fc71dec",
      },
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

  console.log(post);
  let publishTime = new Date(post.publishDate);
  let day = publishTime.getDay();
  let month = publishTime.getMonth();
  let date = publishTime.getDate();

  return (
    <div className="blog-details">
      <div className="publishtime">
        {daysname[day]}, {monthsname[month]} {date}
      </div>
      {post && (
        <div className="img-container">
          <img className="particularImage" src={post.image}></img>
          <div className="likeBlog">
            <img
              className="likeImage"
              src="https://www.linkpicture.com/q/likelike.png"
            ></img>
            <p className="likeNumber">{post.likes}</p>

            <div className="tagdivv">
              <div className="imgdiv">
                <img
                  className="imgg"
                  src="https://www.linkpicture.com/q/tick_1.png"
                ></img>
                {post.tags && <div className="tagname">{post.tags[0]}</div>}
              </div>
              <div className="imgdiv">
                <img
                  className="imgg"
                  src="https://www.linkpicture.com/q/tick_1.png"
                ></img>
                {post.tags && <div className="tagname">{post.tags[1]}</div>}
              </div>
              <div className="imgdiv">
                <img
                  className="imgg"
                  src="https://www.linkpicture.com/q/tick_1.png"
                ></img>
                {post.tags && <div className="tagname">{post.tags[2]}</div>}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="info">
        <div className="maininfo">{post.text}</div>
        {post.owner && (
          <p className="writter">
            - {post.owner.title} {post.owner.firstName} {post.owner.lastName}{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
