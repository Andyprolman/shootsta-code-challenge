import { connect } from 'react-redux';
import Uploads from './uploads';
import { fileURLToPath } from 'url';

function mapStoreToProps(store){
    return {
        input: store.uploads.input,
        file: store.uploads.file,
        fileName: store.uploads.fileName
    }
}

export default connect(mapStoreToProps)(Uploads);