import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Photos from "../Photos/Photos";
import Profile from "../Profile/Profile";
import Video from "../Video/Video";
import axios from "axios";
import Post from "../Post/Post";
import LatestPost from "../LatestPost/LatestPost";
import Marquee from "react-fast-marquee";

type Item = {
    id: number;
    title: string;
    body: string;
}

const Layout = () => {

    const [posts, setPosts] = useState<Item[]>([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                const data: Item[] = res.data.slice(20, 24);
                setPosts(data);
            })
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <div>
                <img className="h-48 md:h-80 w-full " src="./assets/Cover.jpg" alt="" />
            </div>
            <div className="lg:flex justify-between gap-10 bg-slate-100 max-w-screen-lg mx-auto px-4">
                <div className="lg:w-2/3">
                    <Profile></Profile>
                    <div className="flex gap-2 lg:hidden justify-between">
                        <div className="w-full">
                            <Photos></Photos>
                        </div>
                        <div className="w-full">
                            <Video></Video>
                        </div>
                    </div>
                    <div>
                        <Post></Post>
                    </div>
                </div>
                <div className="lg:w-1/3 hidden lg:block">
                    <Photos></Photos>
                    <Video></Video>
                </div>
            </div>
            <div className="bg-slate-200 max-w-screen-lg mx-auto px-4 py-10">
                <h2 className="text-center font-bold text-4xl">Latest Posts</h2>
                <Marquee>
                    <div className="flex">
                        {posts.map(post => <LatestPost key={post.id} post={post}></LatestPost>)}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Layout;