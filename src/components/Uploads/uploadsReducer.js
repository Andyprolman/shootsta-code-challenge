const initialstate = {
    uploadsTest: 'test'
}

const uploadsReducer = (state = initialstate, action) => {
    const { payload, type } = action;

    switch(type) {
        default: {
            return state
        }
    }
}

export default uploadsReducer; 