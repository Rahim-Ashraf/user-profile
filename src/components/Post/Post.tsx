import { useState } from "react";

const Post = () => {
    const articlesData = [
        {
            id: 1,
            title: "How Astrophotography changed my life",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia",
            tags: ["photography", "astronomy", "astrophotography"]
        },
        {
            id: 2,
            title: "Which Telescope and DSLR I use",
            body: "mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia. Maecenas eget Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, condimentum velit.",
            tags: ["astrophotography", "astronomy", "photography"]
        },
    ]

    const [articleId, setArticleId] = useState(0);
    const handleReadMore = (id: number) => {
        if (articleId === id) {
            setArticleId(0)
        } else {
            setArticleId(id)
        }
    }

    return (
        <div className="p-4 space-y-12">
            {articlesData.map((article) => {
                return <div key={article.id} className="bg-slate-200 p-6 rounded-lg">
                    <h2 className="text-xl md:text-2xl font-bold">{article.title}</h2>
                    <p>{articleId !== article.id ? article.body.slice(0, 150) + " ....." : article.body}</p>
                    <div className="divider"></div>
                    <div className="flex justify-between">
                        <div>
                            {article.tags.map((tag, tagIdx) => <button key={tagIdx} className="px-1 bg-white text-sky-600 rounded-full mr-2 text-xs md:text-base">#{tag}</button>)}
                            <button className="btn btn-xs bg-white text-sky-600 rounded-full mr-2">+</button>
                        </div>
                        <div>
                            <button onClick={() => handleReadMore(article.id)} className="text-sky-600 font-bold">{articleId !== article.id ? "Read more" : "Read less"}</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Post;