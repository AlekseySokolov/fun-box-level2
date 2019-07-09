import React from 'react';
import "./card.css";

import {
    cardContainer,
    cardContainerCard,
    cardContainerTextWrapper,
    cardContainerSlogan,
    cardContainerBonus,
    cardContainerImage,
    cardContainerCircle} from "./classNames";
import {CardFooter} from "./CardFooter";

export const Card = (props) => {
    const {
        slogan,
        company,
        desc,
        portions,
        gifts,
        motivation,
        img,
        weight,
        unit,
        status,
        onClick,
        onMouseLeave} = props;

    return (
        <div className={cardContainer(status)}>
            <div className={cardContainerCard(status)} onClick={onClick} onMouseLeave={onMouseLeave}>
                <div className={cardContainerTextWrapper(status)}>
                    <p className={cardContainerSlogan(status, slogan)}>
                        {slogan}
                    </p>
                    <h3 className="card-container__title">
                        {company}
                    </h3>
                    <h4 className="card-container__desc">
                        {desc}
                    </h4>
                    <p className={cardContainerBonus(status)}>
                        {portions} <br />{gifts}<br />{motivation}
                    </p>
                </div>
                <img className={cardContainerImage(status)} src={img} alt="cat"/>
                <div className={cardContainerCircle(status)}>
                    <p className="card-container__circle-text big">{weight}</p>
                    <p className="card-container__circle-text small">{unit}</p>
                </div>
            </div>
            <CardFooter {...props}/>
        </div>
    )
};