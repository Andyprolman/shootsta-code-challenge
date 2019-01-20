const initialstate = {
    homeTest: 'test'
}

const homeReducer = (state = initialstate, action) => {
    const { payload, type } = action;

    switch(type){
        default: {
            return state
        }
    }
}

export default homeReducer;