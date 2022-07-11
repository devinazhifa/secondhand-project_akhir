const reducer = (state = [], action) => {
    switch (action.type) {
        case 'populateProducts' :
            const newState = [...action.payload.products]
            return newState
        default: 
            return state
    }
}

export default reducer