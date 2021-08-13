/* eslint-disable default-case */
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //Remove after finish Developing
    // token: "BQCdoWckd8ixEsk3oGiUHHSsuSZW0Wgv7aQbuU2S6ZqznEQ6RSk0HQRcdP_eTpZJ_lchkq5-SRkWTzGqQG5bbxgoPleD6Q-sLKCMhmAVF5eo6Od4zjkRdHTrNRCNRCwWRZ1IJkf8QxKxY35EAXBpkJ3oRCYfNueFPtJYvC4Gpfz24n-x",
};

const reducer = (state, action) => {

    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };
        
        default:
            return state;
    }
};


export default reducer;