import {cardsData} from "./cardsData";
import {merge} from "../helpers/merge";

export const cardStateReducer = (state = cardsData, action) => {
    switch (action.type) {
        case "UPDATE_THE_DATA" :
            return state = merge(state, action.payload)
        case "RETURN_DATA" :
            return state = merge(state, action.payload)
        default :
            return state
    }
};