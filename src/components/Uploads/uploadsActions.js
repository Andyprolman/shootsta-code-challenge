import axios from 'axios';

export const handleInput = (input, savedVideos) => {
  return {
    type: 'HANDLE_INPUT',
    payload: {
      input, 
      savedVideos
    }
  }
}

export const handleUpload = (data) => {
  return {
    type: 'HANDLE_UPLOAD',
    payload: 
    
    axios.post('/api/upload', data)
      .then(response => {
        if(response.data.status == 'File Uploaded'){
          return response.data
        }
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }
}

export const resetUploads = () => {
  return {
    type: 'RESET_UPLOADS',
    payload: false
  }
}
