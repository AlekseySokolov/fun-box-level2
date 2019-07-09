export const cardContainer = (status) =>
    status === "default" ?
        "card-container" :
        status === "inactive" ?
        "card-container card-container-inactive" :
        status === "active"  ? "card-container card-container-active" :
        null;

export const cardContainerCard = (status) =>
    status === "default" ?
        "card-container__card" :
        status === "inactive" ?
        "card-container__card card-inactive" :
        status === "active"  ? "card-container__card card-active" :
        null;

export const cardContainerTextWrapper = (status) =>
    status === "default" ?
        "card-container__text-wrapper" :
        status === "inactive" ?
        "card-container__text-wrapper text-inactive" :
        status === "active"  ? "card-container__text-wrapper" :
        null;

export const cardContainerSlogan = (status,slogan) =>
    slogan === "Котэ не одобряет?" ? "card-container__slogan not-approve" :
    status === "default" ?
        "card-container__slogan" :
        status === "inactive" ?
        "card-container__slogan text-inactive" :
         status === "active"  ? "card-container__slogan" :
        null;

export const cardContainerBonus = (status) =>
    status === "default" ?
        "card-container__bonus" :
        status === "inactive" ?
        "card-container__bonus text-inactive" :
        status === "active"  ? "card-container__bonus" :
        null;

export const cardContainerImage = (status) =>
    status === "default" ?
        "card-container__image" :
        status === "inactive" ?
        "card-container__image image-inactive" :
        status === "active"  ? "card-container__image" :
        null;

export const cardContainerCircle = (status) =>
    status === "default" ?
        "card-container__circle" :
        status === "inactive" ?
        "card-container__circle circle-inactive" :
        status === "active"  ? "card-container__circle circle-active" :
        null;