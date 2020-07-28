import React from 'react';
import moment from 'moment'
import './feed.css';

const Feed = (props: any) => {
    const { data } = props
    const dateDifference = (date: string) => moment(date).fromNow()

    return (
        <div onClick={() => props.clickCommunity(data.url)} className="feed-wrap pointer">
            <figure className="feed-img">
                <img alt="feed-img" src={data.urlToImage} />
            </figure>
            <div className="desc comment">
                <span className="comment">
                    {<strong>{data.title} </strong>}
                </span>
                <p className="description">{data.description}</p>
            </div>
            <span className='date'>{dateDifference(data.publishedAt)}</span>
        </div>
    );
}

export default Feed;
