import React from 'react';

const NewSingle = ({item}) => (
  <div className="col-md-4">
  <div className="card mb-4 box-shadow">
    
    <div className="card-body">
      <p className="card-text"><strong>Magtitude: {item.properties.mag}</strong><br/>{item.properties.place} </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
        <a href={item.properties.url} target="_blank"><button type="button" className="btn btn-sm btn-outline-secondary">Read more</button></a>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default NewSingle;
