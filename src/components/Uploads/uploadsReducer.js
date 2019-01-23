const initialstate = {
    input: {},
    upload: '',
    file: '',
    fileName:'',
    uploadStatus: '',
    savedVideos: []

}

const uploadsReducer = (state = initialstate, action) => {
    const { payload, type } = action;

    switch(type) {
        case 'HANDLE_INPUT': {
            return {
                ...state,
                file: payload.input,
                fileName: payload.input.name,
                uploadStatus: false
            }
        }
        case 'HANDLE_UPLOAD_FULFILLED': {
            const newItems = [...state.savedVideos];
            if(payload.content.length > 0) {
                newItems.push(payload.content[payload.content.length-1])
            }
            return {
                ...state,
                uploadStatus: true,
                savedVideos: newItems,
            }
        }
        case 'RESET_UPLOADS': {
            return {
                ...state,
                uploadStatus: false,
                file: '',
                fileName: ''
            }
        }
        default: {
            return state
        }
    }
}

export default uploadsReducer; 
