

const Video = () => {
    return (
        <div className="lg:mt-4">
            <h2 className="text-2xl font-bold py-2">Videos</h2>
            <div><video className="rounded-lg" src="./assets/Video.mp4" controls></video></div>
            <div className="flex gap-2 my-auto border border-red-300">
                <div className="h-12 w-full"><video className="rounded-lg h-full" src="./assets/Video.mp4" controls></video></div>
                <div className="h-12 w-full"><video className="rounded-lg" src="./assets/Video.mp4" controls></video></div>
                <div className="h-12 w-full"><video className="rounded-lg" src="./assets/Video.mp4" controls></video></div>
            </div>
        </div>
    );
};

export default Video;