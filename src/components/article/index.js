import React, { useState, useEffect } from 'react';
import { FadeInDiv } from './style';
import iconArrowImg from '../../assets/icons/arrow.svg';

const Article = (props) => {
    useEffect(() => {

    }, []);
    return (
        <div className="col-xl-4 col-md-6">
            <FadeInDiv>
                <div className="article article__offset wow fadeIn">
                    <div className="article-cover">
                        <img src={props.articleImage} alt="" />
                        <div className="cover__hover">
                            <a href="blog-inner.html" className="cover__hover-img">
                                <img src={iconArrowImg} alt="Go" />
                            </a>
                        </div>
                    </div>
                    <div className="article-top">
                        <a className="article-top__title title" href="blog-inner.html">
                            {props.articleTitle}
                        </a>
                    </div>
                    <div className="article-content">
                        <p className="article-content__text text18">
                            {props.articleContent}
                        </p>
                    </div>
                </div>
            </FadeInDiv>
        </div>
    )
}

export default Article;