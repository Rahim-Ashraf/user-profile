import axios from "axios";


const AddPost = () => {
    const handleAddPost = (e) => {
        e.preventDefault();
        const title=e.target.title.value;
        const body=e.target.body.value;
        const data={
            title,
            body,
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(res => console.log(res.data));
    }

    return (
        <form onSubmit={handleAddPost} className="p-4 m-4 rounded-lg border bg-white">
            <label className="label">
                <span className="font-bold">Title</span>
            </label>
            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
            <label className="label">
                <span className="font-bold">Body</span>
            </label>
            <textarea name="body" placeholder="Body" className="textarea textarea-bordered w-full" required />
            <input type="submit" value="Post" className="btn bg-sky-600 font-bold text-white w-full" />
        </form>
    );
};

export default AddPost;