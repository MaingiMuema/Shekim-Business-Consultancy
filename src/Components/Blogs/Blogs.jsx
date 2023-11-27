import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=YOUR_API_KEY');
          setArticles(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchNews();
    }, []);

    return (
        <div className='container'>
            <h1 className='my-4 text-center'>Business/Financial Articles</h1>
            <div className='row d-flex justify-content-center'>
                {articles.map((item, index) => (
                    <div className='col-4 m-2'>                         
                        <div key={index} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={item.url} className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
