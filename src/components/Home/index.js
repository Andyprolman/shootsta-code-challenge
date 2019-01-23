import { connect } from 'react-redux';
import Home from './home';

function mapStoreToProps(store){
    return {
        savedVideos: store.uploads.savedVideos
    }
}

export default connect(mapStoreToProps)(Home);
