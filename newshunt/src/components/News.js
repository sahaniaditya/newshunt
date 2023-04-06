import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem.js";
import "./News.css";
function News(props){
    const {category} = props;
    
    const [articles,setArticles] = useState([]);
    let key = 0;
    var link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&sortBy=popularity&apiKey=9529e22fdc814764bec8ead681fc3c12`
    useEffect(()=>{
        
      const  fetchData =  async () =>{
            const newsData = await fetch(link);
             const data = await newsData.json();
             setArticles(data.articles);
            // console.log("Entered");
        
            
        }
        fetchData();
        
    },[props]);
    
    return (
        <>
        <div className="news-container">
         {articles.map((article)=>{
           return <NewsItem key={key++} article={article}/>
          })}
        </div>
        </>
    )
}
export default News;