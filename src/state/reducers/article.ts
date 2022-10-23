const initialState = {
    article : {
        text : null,
        photolocation : null,
        authorname : null,
        authorphoto : null 
       }
}

const navigationReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case 'SET':

            return {
                ...state,
                article: action.payload,
            };

            
        
        default:
            return state;
    }
}

export default navigationReducer;

