export const toActive = (card) => {
    const newObjCard = {
        ...card,
        status : "active"
    };
    return newObjCard;
};