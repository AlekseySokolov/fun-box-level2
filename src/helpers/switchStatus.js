import {toActive} from "./toActive";
import {toDefault} from "./toDefault";

export const switchStatus = (card, UPDATE_THE_DATA, RETURN_DATA) => {
    return card.status === "default" ?
        UPDATE_THE_DATA(toActive(card)):
        card.status === "active" ?
            RETURN_DATA(toDefault(card)):
            null
};