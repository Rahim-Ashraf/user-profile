
type PostType = {
    post: {
        id: number
        title: string
        body: string
    }
}

const LatestPost = (props: PostType) => {
    return (
        <div className="max-w-80 ml-4 bg-[#1F1F1F] text-white p-4 my-4 rounded-lg space-y-4">
            <h2 className="text-xl font-bold">{props.post.title}</h2>
            <p>{props.post.body}</p>
            <button className="btn bg-sky-600 text-white border-none">Viw Detail</button>
        </div>
    );
};

export default LatestPost;