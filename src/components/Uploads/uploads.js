import React from 'react';
const FormData = require('form-data')
import { handleInput, handleUpload } from './uploadsactions';

class Uploads extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

  }

  handleInput(e){
    const { dispatch } = this.props;
    //const data = new FormData()
    //console.log('test: ', e.target.files[0])
    //console.log('test2: ', new FormData(e.target.files[0]));
    dispatch(handleInput(e.target.files[0]))
  }

  handleUpload(e){
    const { dispatch, file } = this.props;
    const data = new FormData();
    console.log('data: ', data.append('file', file))
    console.log('dirname: ', __dirname)
    dispatch(handleUpload(data))
  }

  render() {
    return (
      <div className='container'>
        <div>
          <h1>Uploads Page!</h1>
        </div>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>Upload Video Here</span>
          </div>
          <input className='form-control' type='file' onChange={this.handleInput}/>
          <button className='btn btn-primary' onClick={this.handleUpload}>Upload</button>
        </div>
      </div>
    )
  }
}

export default Uploads;