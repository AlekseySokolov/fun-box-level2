import React from "react";
import "./cardsContainer.css";
import {Card} from "../Card/Card";
import {connect} from "react-redux";
import * as actions from "../../actions/actions";
import {switchStatus} from "../../helpers/switchStatus";
import {switchSlogan} from "../../helpers/switchSlogan";


const CardsWrapper = ({cardState, UPDATE_THE_DATA, RETURN_DATA}) => {
    return (
        <section className="card-wrapper">
            {cardState.map((card) =>
                <Card
                    key={card.desc}
                    slogan={card.slogan}
                    company={card.company}
                    desc={card.desc}
                    portions={card.bonus.portions}
                    gifts={card.bonus.gifts}
                    motivation={card.bonus.motivation}
                    img={card.img}
                    weight={card.weight}
                    unit={card.unit}
                    status={card.status}
                    footerText={card.detailed}
                    onClick={() => switchStatus(card, UPDATE_THE_DATA, RETURN_DATA)}
                    onMouseLeave={() => switchSlogan(card, UPDATE_THE_DATA)}
                />)}
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        cardState : state.cardState
    }
}

export default connect(mapStateToProps, actions)(CardsWrapper)