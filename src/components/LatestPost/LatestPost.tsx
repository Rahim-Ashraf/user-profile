import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

type PostType = {
    post: {
        id: number
        title: string
        body: string
    }
}

const LatestPost = (props: PostType) => {
    const handleDeletePost = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Delete the post!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Can't delete post",
                            text: err.message
                        })
                    })
            }
        });

    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const handleUpdatePost = (e: React.FormEvent<HTMLFormElement>) => {
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
        console.log(data);
        axios.patch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, data)
            .then(res => {
                console.log(res.data)
                if (res.status===200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `post id ${props.post.id} has been updated`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    onCloseModal();
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
        <div className="flex flex-col max-w-80 ml-4 bg-[#1F1F1F] text-white p-4 my-4 rounded-lg space-y-4">
            <h2 className="text-xl font-bold">{props.post.title}</h2>
            <p>{props.post.body}</p>
            <div className="flex-grow flex justify-between items-end">
                <button onClick={onOpenModal} className="btn bg-sky-600 text-white border-none">Update Post</button>
                <button onClick={() => handleDeletePost(props.post.id)} className="btn btn-error font-bold">Delete Post</button>
            </div>
            <div>
                <Modal open={open} onClose={onCloseModal} center>
                    <form onSubmit={handleUpdatePost} className="min-w-60 md:min-w-96  p-4 m-10 rounded-lg border bg-white">
                        <label className="label">
                            <span className="font-bold">Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={props.post.title} className="input input-bordered w-full" required />
                        <label className="label">
                            <span className="font-bold">Body</span>
                        </label>
                        <textarea name="body" defaultValue={props.post.body} className="textarea textarea-bordered h-60 w-full" required />
                        <input type="submit" value="Update" className="btn mt-4 bg-sky-600 font-bold text-white w-full" />
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default LatestPost;