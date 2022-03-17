import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Error from './Error';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
   // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=c77e4ba7a52545d48e09b60e9567587c`;
    const url='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.features
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewsItem key={item.properties.ids} item={item} />
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
