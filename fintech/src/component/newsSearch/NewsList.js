import React from "react";
import NewsListItem from "./NewsListItem";

const NewsList = ({ searchResult }) => {
  return (
    <div>
      {searchResult.map((news) => {
        return <NewsListItem 
        title={news.title} 
        contents={news.contents} 
        url={news.url}
        key={news.index}
        ></NewsListItem>;
      })}
    </div>
  );
};

export default NewsList;