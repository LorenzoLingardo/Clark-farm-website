import React from 'react'

const News = props => {
    return (
        <div className='news-main'>
            <h2 className='news-title'>
                {props.title}
            </h2>
            <img src={props.newsImg} className='news-img' alt={props.alt}/>
            <p className='news-desc'>
                {props.desc}
            </p>
        </div>
    )
}

export default News