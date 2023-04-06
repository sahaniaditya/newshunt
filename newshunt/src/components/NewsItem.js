import React from "react";
import "./NewsItem.css";
import Noimage from "./images/noimage.png";
function NewsItem(props){
    const countLetters = (sen) =>{
        if(sen === null)
        return false;
         var l = sen.length;
         if(l > 230)
          return false;
         return true;
    }
    const reducedSen = (sen) =>{
        if(sen === null)
         return "...";
        return sen.substring(0,231);
    }
    const {article} = props;
    return (
        <>
        <div className="card-container">
            <div className="card-title">{article.title}</div>
            <div className="card-image"><img src={(article.urlToImage) ?  article.urlToImage : Noimage} alt={article.title}/></div>
            <div className="card-description">{countLetters(article.description) ? article.description : (reducedSen(article.description)+".....")}</div>
            <div className="card-link">Source : <a href={article.url}>{article.source.name}</a></div>
        </div>
        </>
    )
}
export default NewsItem;