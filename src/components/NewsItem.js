import React from 'react';

export default function NewsItem(props) {
  return (
    <div className="card mb-3">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title mb-4">{props.title}</h5>
        <p className="card-text">
          {props.content}
        </p>
        <a href={props.url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
