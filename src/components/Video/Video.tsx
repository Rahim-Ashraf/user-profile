

const Video = () => {
    return (
        <div className="lg:mt-4">
            <h2 className="text-2xl font-bold py-2">Videos</h2>
            <div><video className="rounded-lg" src="./assets/Video.mp4" controls></video></div>
            <div className="flex gap-1 my-2 h-full">
                <div className="w-full"><video className="rounded-lg" src="./assets/mini-video.mp4" controls></video></div>
                <div className="w-full"><video className="rounded-lg" src="./assets/mini-video.mp4" controls></video></div>
                <div className="w-full"><video className="rounded-lg" src="./assets/mini-video.mp4" controls></video></div>
            </div>
            <p className="text-sky-600 font-bold text-end">More +</p>
        </div>
    );
};

export default Video;