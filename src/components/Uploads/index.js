import { connect } from 'react-redux';
import Uploads from './uploads';

function mapStoreToProps(store){
    return {
        input: store.uploads.input,
        file: store.uploads.file,
        fileName: store.uploads.fileName,
        uploadStatus: store.uploads.uploadStatus,
        savedVideos: store.uploads.savedVideos
    }
}

export default connect(mapStoreToProps)(Uploads);
