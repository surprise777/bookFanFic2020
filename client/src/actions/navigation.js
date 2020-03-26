import React from 'react';

export const checkLogin = function(login_status) {
    if (!login_status){
        return (<button type='submit'>
                Login
            </button>)
    }else {
        return (<div>user</div>)
    }
}