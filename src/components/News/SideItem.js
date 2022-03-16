import React from 'react';

const SideItem = ({item}) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank">
      <div className="section">
        <p>{item.title} <span className="text-muted">({item.source.name})</span></p>
      </div>
    </a>
  </div>
);

export default SideItem;
