const initialstate = {
    input: {},
    upload: '',
    file: '',
    fileName:'',

}

const uploadsReducer = (state = initialstate, action) => {
    const { payload, type } = action;

    switch(type) {
        case 'HANDLE_INPUT': {
            return {
                ...state,
                file: payload,
                fileName: payload.name,
            }
        }
        case 'HANDLE_UPLOAD_FULFILLED': {
            console.log('payload: ', payload)
            return {
                ...state,
                file: payload
            }
        }
        default: {
            return state
        }
    }
}

export default uploadsReducer; 