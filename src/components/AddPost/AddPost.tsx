import axios from "axios";
import Swal from "sweetalert2";


const AddPost = () => {
    const handleAddPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            body: { value: string };
        };
        const title = target.title.value;
        const body = target.body.value;
        const data = {
            title,
            userId: 15,
            body,
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(res => {
                console.log(res.data)
                if (res.data.id > 100) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your post uploaded",
                        text: `Your post id ${res.data.id}`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    target.title.value = "";
                    target.body.value = "";
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message
                });
            });
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