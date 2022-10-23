import React , {useEffect} from "react"
import { useSelector , useDispatch} from 'react-redux'


const professional = require ("./../assets/professional.jpg");
const ArticlePage = () => {

    const article = useSelector((state:any) => state.article.article)
    const dispatch = useDispatch()
console.log("the article is " + article)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full  ">
            <div className="w-full py-20 bg-black flex items-center text-center">
                <h2 className="text-white text-6xl m-auto font-bold">{article.title}</h2>
            </div>
            <div className="flex flex-col mx-[20%] mt-10">
                <div className="flex">
                    <img src={article.authorphoto} alt="" className="w-10 h-10 rounded-full" />
                    <div className="flex items-center mx-3">
                        <p>Article by <span>{article.authorname}</span></p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-left text-xl">
                          {article.text}
                    </p>
                </div>
            </div>
            
        </div>
    );
}
export default ArticlePage;