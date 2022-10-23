import React from "react";

const front = require ( "./../assets/front.jpg");
const professional = require ( "./../assets/professional.jpg");
import Layout from "./../components/Layout"

import data from "./../data/data.json"
import {setArticle} from "./../state/actions/article"
import { useSelector , useDispatch} from 'react-redux'
import {
    ArrowSmallRightIcon
       
} from "@heroicons/react/24/outline"
import { Link } from "gatsby";
import ArticleCard from "./../components/card/ArticleCard";
// import { home, article, book, question, about, donation } from "./../redux/actions/navigation"
const Home = () => {
    console.log(data)
    const dispatch = useDispatch()
    const imageUrl = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    return (
        <div className="w-full">

            {
                data.data.length > 0 ?
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 mx-10 mt-20">
                        <div>
                            <img 
                                src={data.data[0].articlephoto}
                                alt="new"
                                />
                        </div>
                        <div className="md:mx-20">
                            <div className="flex flex-col ">
                                <p className="mt-10 text-gray-700">Article</p>
                                <h1 className="text-sm md:text-6xl	font-bold text-gray-700 mt-3">{data.data[0].title}</h1>
                                <p className="mt-5 text-2xl font-bold text-gray-700	">{data.data[0].article.slice(0,100)} ..</p>
                                
                                <div className="flex items-center justify-between mt-5  ">
                                    <div className="flex items-center">
                                        <img src={data.data[0].authorphoto} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">{data.data[0].authorName}</p>
                                    </div>
                                
                                    <Link to ="/articlepage" className="bg-red-800 py-2 px-10 rounded-md text-white"  onClick = {()=>{
                                
                                dispatch(setArticle({
                                                        title : data.data[0].title,
                                                        text : data.data[0].article ,
                                                        photolocation : data.data[0].articlephoto,
                                                        authorname : data.data[0].authorName,
                                                        authorphoto : data.data[0].authorphoto
                                }));  }} >Read More </Link> 
                                </div>
                            </div>
                        
                        </div>
                    </div> : null
            }
           
            <div className="mt-20">
                <div className="w-full">
            <div className="w-full">
                <div className="flex justify-between mx-10 items-center ">
                    <p className="text-gray-500">Recent</p>
                    <div className="flex">
                        <p className="text-gray-500  hidden sm:flex ">More </p>
                         <ArrowSmallRightIcon className="w-5 text-gray-500"/> 
                    </div>
                </div>
                {/*  */}
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 mr-2">
                    
    {
        data.data.map((n)=> {
                    return(
                        <Link to ="articlepage" onClick = {()=>{
                                
                            dispatch(setArticle({
                                    title : n.title,
                                                    text : n.article ,
                                                    photolocation : n.articlephoto,
                                                    authorname : n.authorName,
                                                    authorphoto : n.authorphoto
                            }));  }} >
                                                                                                        
                            <ArticleCard 
                                image={n.articlephoto} 
                                title={n.title}
                                date={n.date}
                                text={n.article.slice(0,300)} 
                                username={n.authorName}
                                userphoto={n.authorphoto} /> 
                        </Link> 
                        
                    )
        })
    }
                  
                                                                                        
        
        
                </div>
            </div>
         
                
      </div> 
            </div>
        </div>
    );
}

export default Home;