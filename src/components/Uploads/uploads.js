import React from 'react';
import { Link } from 'react-router-dom';
import { handleInput, handleUpload, resetUploads } from './uploadsActions';
const FormData = require('form-data');

class Uploads extends React.Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(resetUploads())
  }

  handleInput(e){
    const { dispatch, savedVideos } = this.props;
    dispatch(handleInput(e.target.files[0], savedVideos))
  }

  handleUpload(e){
    const { dispatch, file } = this.props;
    const data = new FormData();
    data.append('file', file)
    dispatch(handleUpload(data))
  }


  render() {
    const { uploadStatus, fileName, savedVideos } = this.props;
    return (
      <div className='container' align='center'>
        <div align='left'>
          <Link to='/' >
            <button className='btn btn-primary' onClick={this.resetFile}>Home</button>
          </Link>
          <h1 align='center' id='title'>Upload Videos Here!</h1>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-header'>
                <div className='input-group'>
                  <input className='form-control' type='file' onChange={this.handleInput}/>
                  <button className='btn btn-success' onClick={this.handleUpload}>Upload</button>
                </div>
              </div>
              <div className='card-body' style={{backgroundColor: '#80808021'}}>
                <div>
                  { uploadStatus ?
                  <div>
                  <div align='center'>
                    <video width='65%' height='60%' controls>
                      <source src={`/videos/${fileName}`} type='video/mp4'></source>
                    </video> 
                    <h3>{fileName}</h3>
                    
                  </div>
                </div> : 
                <div  align='center'>
                  <img width='75%' height='40%' src='/film.png' />
                </div>
                }
              </div>
            </div>
          </div>
              {uploadStatus ?
              <div>
                <h6 style={{marginTop: '10%'}}>Upload Successful!</h6>
              </div> : null 
            }
        </div>
        </div>
      </div>
    )
  }
}

export default Uploads;
