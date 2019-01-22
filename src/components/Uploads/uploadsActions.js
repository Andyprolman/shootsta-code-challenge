import axios from 'axios';
import FormData from 'form-data';

export const handleInput = input => {
  return {
    type: 'HANDLE_INPUT',
    payload: input
  }
}

export const handleUpload = (data) => {
  // console.log('file: ', data);
  // console.log('fileName: ', file.name)

  // const data = new FormData()
  // data.append('file', file, file.name);

  for (var key of data.entries()) {
    console.log('data: ', key[0] + ', ' + key[1])
  }

  const options ={
    content: data
  }

  return {
    type: 'HANDLE_UPLOAD',
    payload: 
    
    axios.post('/uploads', data, {
      // headers: {
      //   'accept': 'multipart/form-data',
      //   'content-type': 'multipart/form-data'
      // }
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }
}