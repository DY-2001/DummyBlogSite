import { Link } from "react-router-dom";
const PostList = ({ posts, title }) => {
    // posts.data && console.log(posts.data[0])
  return (
    <div className="BlogList">
      <h2>{title}</h2>
      {posts.data && posts.data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.text}</h2>
            <p>written by - {blog.owner.title} {blog.owner.firstName} {blog.owner.lastName} </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
