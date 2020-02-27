import React from 'react';
import MuiContainer from '@material-ui/core/Container';
import classNames from 'classnames';

const Container = ({ fullHeight, fullWidth, children, ...props }) => {
	const className = classNames({
		'full-height': fullHeight,
		'full-width': fullWidth,
	});

	return (
		<MuiContainer className={className} {...props}>
			{children}
		</MuiContainer>
	);
};

export default Container;