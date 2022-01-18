import React from 'react'

const News = props => {
    return (
        <div>
            <h2 className='news-title'>{props.title}</h2>
            <div className='news-main'>
            <img src="https://placeimg.com/640/480/nature" className='news-img' alt={props.alt}/>
            {/* <img src={props.newsImg} className='news-img' alt={props.alt}/> */}
            <p className='news-desc'>
                {props.desc}
            </p>
            </div>
        </div>
        
    )
}

export default News