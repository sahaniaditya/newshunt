import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem.js";
import "./News.css";
function News(props){
    const {category} = props;
   
    
  const [page,setPage] = useState(1);
  
   
    let key = 0; 
    
    const [articles,setArticles] = useState([]);
    const [total,setTotal] = useState(0);
    
    var link = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&category=${category}&pageSize=20&sortBy=popularity&apiKey=3d4cc2e047964abfa7c4d950477efd03`
    useEffect(()=>{
        
      const  fetchData =  async () =>{
        
            const newsData = await fetch(link);
             const data = await newsData.json();
             setTotal(data.totalResults);
             
             setArticles(data.articles);
            
        
            
        }
        fetchData();
        
    },[props,total,page]);
   
    
    return (
        <>
       
        <div className="news-container">
         {articles.map((article)=>{
           return <NewsItem key={key++} article={article}/>
          })}
        </div>
        <br/>
        <br/>
        <br/>
        <div className="footer-container">
            <div className="btn btn-left"><button onClick={()=> setPage(page - 1)}  disabled={(page <= 1) ? true : false}><i  className="fa-solid fa-arrow-left"></i></button></div>
            <div className="btn btn-right"><button onClick={() => setPage(page + 1)} disabled={(page < (Math.ceil(total / 20))) ? false : true}><i   className="fa-solid fa-arrow-right"></i></button></div>
        </div>
        </>
    )
}
export default News;