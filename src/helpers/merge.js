export const merge = (state, obj) => {
    const newState = state.map((card) =>
        card.id === obj.id ?
        Object.assign(card, obj) :
        card);
    return newState;
};