import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";






export default class News extends Component {
    apiKey ="faaac73b30554b5e8594a031c9dbe76c"

    static defaultProps = {
        country: "us",
        category: "general",
    }
    static propTypes = {
        category: PropTypes.string,
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: this.props.pageSize,
            totalResult: 0
        }
    }
    // handleNext = async () => {
    //     this.setState({
    //         loading: true
    //     })
    //     let url = `https://newsapi.org/v2/top-headlines?&apiKey=${this.apiKey}&category=${this.props.category}&country=${this.props.country}&pageSize=9&page=${this.state.page + 1}`;
    //     let data = await fetch(url);
    //     let news = await data.json();
    //     this.setState({
    //         articles: news.articles,
    //         totalResult: news.totalResults,
    //         page: this.state.page + 1,
    //         loading: false
    //     })
    // }
    // handlePrev = async () => {
    //     this.setState({
    //         loading: true
    //     })
    //     let url = `https://newsapi.org/v2/top-headlines?&apiKey=${this.apiKey}&category=${this.props.category}&country=${this.props.country}&pageSize=9&page=${this.state.page - 1}`;
    //     let data = await fetch(url);
    //     let news = await data.json();
    //     this.setState({
    //         articles: news.articles,
    //         totalResult: news.totalResults,
    //         page: this.state.page - 1,
    //         loading: false
    //     })
    // }
    fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?&apiKey=${this.apiKey}&category=${this.props.category}&country=${this.props.country}&pageSize=9&page=${this.state.page+1}`;
        


        let data = await fetch(url);
        let news = await data.json();

        this.setState({
            articles: (this.state.articles).concat(news.articles),
            loading: false,
            page:this.state.page+1
        })
    }
     componentDidMount=async()=> {
        
        this.setState({
            loading: true
        })
        this.props.setProgress(10);
        document.title = this.props.docTitle;
        let url = `https://newsapi.org/v2/top-headlines?&apiKey=${this.apiKey}&category=${this.props.category}&country=${this.props.country}&pageSize=9&page=${this.state.page}`;
        this.props.setProgress(25);

        let data = await fetch(url);
        this.props.setProgress(50);
        let news = await data.json();
        this.props.setProgress(75);
        
        this.setState({
            articles: news.articles,
            totalResult: news.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    render() {
        return (
            <div className="container my-3 text-center">
                <h1><strong>Saiyan News - Top Headlines</strong></h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.loading && <Spinner />}
                            {this.state.articles.map((element) => {
                                return <div key={element.url} className="my-3 col-md-4 col-sm-6">

                                    <NewsItem title={element.title} url={element.url} description={element.description ? element.description.slice(0, 89) : "Read More By Clicking The Link"} date={element.publishedAt} urlToImage={element.urlToImage ? element.urlToImage : 'https://i.ytimg.com/vi/aO6yXBGtQxs/maxresdefault.jpg'} apiKey={this.apiKey} />

                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="button d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="btn btn-dark">Previous</button>
                    <button disabled={this.state.page === Math.ceil((this.state.totalResult / this.state.pageSize))} onClick={this.handleNext} type="button" className="btn btn-dark">Next</button>
                </div> */}
            </div>


        )
    }
}

