import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is :{props.info} </p>
    </div>
)
const requireAuthebtication = (WarrpedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WarrpedComponent {...props}/>:<h1>You are not authenticated</h1>}
        </div>
    );
}
const AuthInfo = requireAuthebtication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info={'there is Corona sick in china'} />, document.getElementById('app'));