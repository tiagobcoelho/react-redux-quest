const counterReducer = ( state = 0, action) => {
    switch (action.type) {
        case 'ADDONE':
            return state + 1;
        case 'ADDTEN':
            return state + 10;
        case 'RMVONE':
            return state - 1;
        case 'RMVTEN':
            return state - 10;
        case 'RESET':
            return 0; 
        default :
            return state;  
    }
};

export default counterReducer;