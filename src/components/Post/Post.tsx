// import { useState } from "react";

const Post = () => {
    const articlesData = [
        {
            title: "How Astrophotography changed my life",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia",
            tags: ["photography", "astronomy", "astrophotography"]
        },
        {
            title: "Which Telescope and DSLR I use",
            body: "mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia. Maecenas eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, condimentum velit.",
            tags: ["astrophotography", "astronomy", "photography"]
        },
    ]

    // const [article, setArticle] = useState(articlesData);

    return (
        <div className="p-4 my-4 space-y-10">
            {articlesData.map((article, idx) => {
                return <div key={idx} className="bg-slate-200 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold">{article.title}</h2>
                    <p>{article.body}</p>
                    <div className="divider"></div>
                    <div className="flex justify-between">
                        <div>
                            {article.tags.map((tag, tagIdx) => <button key={tagIdx} className="btn btn-xs bg-white text-sky-600 rounded-full mr-2">#{tag}</button>)}
                            <button className="btn btn-xs bg-white text-sky-600 rounded-full mr-2">+</button>
                        </div>
                        <div>
                            <button className="text-sky-600 font-bold">Read more</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Post;