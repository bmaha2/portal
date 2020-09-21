import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
      super(props);
    this.state = {
        
      news: [],
    };
  }

  componentDidMount() {
    const url =
      `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=92b5295a8e624122aa119ef71adc2f8c`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch(error => console.log(error))
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
