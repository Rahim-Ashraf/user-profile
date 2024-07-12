

const Photos = () => {
    return (
        <>
        <h2 className="text-2xl font-bold py-2">Photos</h2>
            <div className="flex gap-0">
                <img className="rounded-tl-xl w-40" src="./assets/Rectangle2.png" alt="Rectangle2" />
                <img className="rounded-tr-xl w-40" src="./assets/Rectangle1.png" alt="Rectangle1" />
            </div>
            <div className="flex gap-0">
                <img className="rounded-bl-xl w-40" src="./assets/Rectangle4.png" alt="Rectangle3" />
                <img className="rounded-br-xl w-40" src="./assets/Rectangle3.png" alt="Rectangle4" />
            </div>
        </>
    );
};

export default Photos;