import React from 'react';
import MuiButton from '@material-ui/core/Button';

const Button = ({ ...props }) => {
	return <MuiButton {...props} />;
};

export default Button;