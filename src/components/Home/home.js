import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { savedVideos } = this.props;
    return (
      <div className='container' >
        <div>
          <h1 align='center' id='title'>Welcome to Shootsta!</h1>
          {savedVideos.length == 0 ? 
            <div>
              <div>
                <Link to='/upload'>
                  <button className='btn btn-primary'>Upload Your First Video!</button>
                </Link>
              </div>
              <div align='center' style={{marginTop: '5%' }}>
                <p>No videos have been uploaded yet.</p>
              </div> 
            </div> : 
          <div>
            <Link to='/upload'>
              <button className='btn btn-primary'>Upload a video!</button>
            </Link>
          </div>
          }
        </div>
        <div align='center'> 
          <ul align='center'>
            {savedVideos.map(item => (
              <li align='center'>
                <div align='center'>
                  <video width='320' height='240' controls>
                    <source src={`videos/${item}`} type='video/mp4'></source>
                  </video>
                </div>
                <div>
                  <h6>{item}</h6>
                </div>
              </li>
            ) )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;
