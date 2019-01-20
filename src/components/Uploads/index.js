import { connect } from 'react-redux';
import Uploads from './uploads';

function mapStoreToProps(store){
    return {
        uploadsTes: store.uploads.uploadsTest
    }
}

export default connect(mapStoreToProps)(Uploads);