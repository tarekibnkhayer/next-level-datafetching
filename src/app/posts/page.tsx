interface Post {
    id: number,
    title: string,
    description: string,
    likes: number,
}

const PostPage = async () => {
    const res   = await fetch("http://localhost:8000/posts", {
        cache: "force-cache"
    });
    const posts: Post[] = await res.json();
    return (
        <div>
          <h1 className="text-3xl text-center">Total Post: {posts.length} </h1>  
          <div className="grid lg:grid-cols-3 gap-5 mx-4">
          {
            posts.map((post:Post) => <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Title: {post.title}</h2>
              <p>Description: {post.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Likes: {post.likes}</button>
              </div>
            </div>
          </div>)
          }
          </div>
        </div>
    );
};

export default PostPage;