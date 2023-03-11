import React, { Component } from 'react'



export default class NewsItem extends Component {
    render() {
        let {title,urlToImage,date,url} = this.props;
        let publishedAt = new Date(date);

        return (
            <div className="container">
                <div className="card">
                    <img className="card-img-top" src={urlToImage} alt="Not Found" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <button className="btn btn-primary" type="button"><a className="text-decoration-none" style={{color:"white"}} href={url} target="_blank" rel="noreferrer"> Read More</a></button>
                        <p className="card-text"><small className="text-muted"><strong>Published At : </strong> {publishedAt.getDate()}-{publishedAt.getDay()}-{publishedAt.getFullYear()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
