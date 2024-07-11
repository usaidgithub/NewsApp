import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

export default function Newscomponent(props) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1); // Start with page 0
  const[totalresults,setTotalResults]=useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c3506df55723405bb05832801f4cf6b9&page=${page}`
        console.log(`Url is ${url}`)
        const response = await fetch(url);
        if (!response.ok) {
          console.log("Data accessing failed");
          return;
        }
        const data = await response.json();
        setTotalResults(data.totalResults)
        setNews(data.articles);
      } catch (error) {
        console.log("Error occurred", error);
      }
    };

    fetchNews();
  }, [page,props.country,props.category]); // Add 'page' to dependency array to re-run effect when 'page' changes

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };
 const maxpages=Math.ceil(totalresults/21)
  return (
    <>
      <div className="container my-3">
        <h2 style={{ color: 'white' }}>Latest news Here</h2>
        <div className="row">
          {news.map((record, index) => {
            let imagesrc = record.urlToImage ? record.urlToImage : "/not_available.jpg";
            return (
              <div key={index} className="col-md-4">
                <NewsItem img={imagesrc} title={record.title} content={record.description} url={record.url} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flexblox sticky-bottom" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className="btn btn-primary" onClick={handlePrevious} disabled={page === 1}>
        &larr;Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext} id='next' disabled={page>=maxpages}>
          Next&rarr;
        </button>
      </div>
    </>
  );
}
