import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class HomePage extends React.Component {
  
    render() {
        const { user} = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user}!</h1>
                <p>You're logged in with React!!</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

const  mapStateProps =(state)=> {
    return{
        user:state.user
    }
}


const connectedHomePage = connect(mapStateProps)(HomePage);
export { connectedHomePage as HomePage };