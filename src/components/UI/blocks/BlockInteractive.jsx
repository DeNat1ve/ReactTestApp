import React, { useState } from 'react';
import './blockInteractive.css'
import DeleteSvg from '../../svg/Delete'
import LikeSvg from '../../svg/Like'
import DislikeSvg from '../../svg/Dislike'

const BlockInteractive = (props) => {

    const [isLiked, setLike] = useState(false)
    const [isDisliked, setDisliked] = useState(false)

    const Like = () => {
        if (!isLiked) {
            setLike(true)
            setDisliked(false)
            props.rating.likes += 1
        }
        else {
            setLike(false)
            props.rating.likes -= 1
        }
    }

    const Dislike = () => {
        if (!isDisliked) {
            setDisliked(true)
            setLike(false)
            props.rating.dislikes += 1
        }
        else {
            setDisliked(false)
            props.rating.dislikes -= 1
        }
    }

    return (
        <div className="block" >
            <div className="title">{props.block.title}</div>
            <div className="line-horizontal-container"><div className="line-horizontal w120px"></div></div>
            <div className="body">{props.block.body}</div>
            <div className="interactive">
                <div className="rating">
                    <button className={`like ${isLiked ? 'selected' : ''}`} onClick={Like}>
                        <LikeSvg />
                    </button>
                    <span className={`like-counter ${isLiked ? 'selected' : ''}`}> {props.rating.likes}</span>
                    <button className={`dislike ${isDisliked ? 'selected' : ''}`} onClick={Dislike}>
                        <DislikeSvg />
                    </button>
                    <span className={`dislike-counter ${isDisliked ? 'selected' : ''}`}> {props.rating.dislikes}</span>
                </div>
                <button className="delete" onClick={() => props.remove(props.block)}>
                    <DeleteSvg />
                </button>
            </div>
        </div >
    );
};

export default BlockInteractive;