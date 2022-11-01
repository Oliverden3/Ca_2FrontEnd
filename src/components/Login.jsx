import React from 'react';

function Login(props) {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="User Name"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
