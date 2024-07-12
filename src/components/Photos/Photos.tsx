

const Photos = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold py-2">Photos</h2>
            <div className="flex gap-0">
                <div className="max-w-40"><img className="rounded-tl-xl" src="./assets/Rectangle2.png" alt="Rectangle2" /></div>
                <div className="max-w-40"><img className="rounded-tr-xl" src="./assets/Rectangle1.png" alt="Rectangle1" /></div>
            </div>
            <div className="flex gap-0">
                <div className="max-w-40"><img className="rounded-bl-xl" src="./assets/Rectangle4.png" alt="Rectangle4" /></div>
                <div className="max-w-40"><img className="rounded-br-xl" src="./assets/Rectangle3.png" alt="Rectangle3" /></div>
            </div>
            <p className="text-sky-600 font-bold text-end">More +</p>
        </div>
    );
};

export default Photos;