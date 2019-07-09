import {toSloganNotApprove} from "./toSloganNotApprove";

export const switchSlogan = (card, UPDATE_THE_DATA) => {
    return card.status === "active" ?
        UPDATE_THE_DATA(toSloganNotApprove(card)) :
        null;
};