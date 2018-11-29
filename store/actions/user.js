import * as actionTypes from './actionTypes';

export const changeUserPic = (imgUrl) => {
    return {
        type: actionTypes.CHANGE_USER_PICTURE,
        imgUrl
    };
};