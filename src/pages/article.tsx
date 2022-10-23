import React, { useEffect } from 'react'
import { Link } from 'gatsby';
import ArticleCard from "../components/card/ArticleCard";


const professional = require ( "./../assets/professional.jpg");

const imageUrl = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

const Article = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="w-full ">
                <h1 className="mx-10 font-bold text-5xl pt-10">Article</h1>
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 mr-2">
                    <Link to ="/articlepage"><ArticleCard image={imageUrl } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ imageUrl} /> </Link> 
                    <Link to ="/articlepage"><ArticleCard image={imageUrl } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ imageUrl} /> </Link>
                    <Link to ="/articlepage"><ArticleCard image={imageUrl } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ imageUrl} /> </Link>
                    <Link to ="/articlepage"><ArticleCard image={imageUrl } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ imageUrl} /> </Link>
                    <Link to ="/articlepage"><ArticleCard image={imageUrl } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ imageUrl} /> </Link>
                    <Link to ="/articlepage"><ArticleCard image={imageUrl } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ imageUrl} /> </Link>
                    
                </div>
            </div>
        </>
   );
}

export default Article;