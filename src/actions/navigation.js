import React from 'react';

export const checkLogin = (login_status) => {
    if (!login_status){
        return (
            <button type='submit'>
                Login
            </button>
        )
    }
}