import { connect } from 'react-redux';
import Home from './home';

function mapStoreToProps(store){
    return {
        homeTest: store.home.homeTest
        
    }
}

export default connect(mapStoreToProps)(Home);