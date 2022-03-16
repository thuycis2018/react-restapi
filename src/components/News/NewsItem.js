import React from 'react';

const NewSingle = ({item}) => (
  <div className="col-md-4">
  <div className="card mb-4 box-shadow">
    <img src={item.urlToImage} alt={item.title} className="card-img-top" data-src="{item.urlToImage}"/>
    <div className="card-body">
      <p className="card-text">{item.source.name} <br></br>{item.title}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
        <a href={item.url} target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Read more</button></a>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default NewSingle;
