import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        
        console.log('inside home');
    }

    render(){
        return(
            <div>
                <h1>Home Page!</h1>
                <button className='btn btn-primary'>Shootsta</button>
            </div>
        )
    }
}

export default Home;