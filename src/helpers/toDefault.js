export const toDefault = (card) => {
    const newObjCard = {
        ...card,
        slogan : "Сказочное заморское яство",
        status : "default"
    };
    return newObjCard;
};