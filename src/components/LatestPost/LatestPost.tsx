import axios from "axios"

type PostType = {
    post: {
        id: number
        title: string
        body: string
    }
}

const LatestPost = (props: PostType) => {
const handleDeletePost=()=>{
    axios.delete()
}

    return (
        <div className="flex flex-col max-w-80 ml-4 bg-[#1F1F1F] text-white p-4 my-4 rounded-lg space-y-4">
            <h2 className="text-xl font-bold">{props.post.title}</h2>
            <p>{props.post.body}</p>
            <div className="flex-grow flex justify-between items-end">
                <button className="btn bg-sky-600 text-white border-none">Update Post</button>
                <button onClick={()=>handleDeletePost()} className="btn btn-error font-bold">Delete Post</button>
            </div>
        </div>
    );
};

export default LatestPost;