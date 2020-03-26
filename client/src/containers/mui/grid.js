import React from 'react';
import MuiGrid from '@material-ui/core/Grid';
import classNames from 'classnames';

const Grid = ({ fullHeight, fullWidth, children, className, ...props }) => {
	const computedClassName = classNames(className, {
		'full-height': fullHeight,
		'full-width': fullWidth,
	});

	return (
		<MuiGrid className={computedClassName} {...props}>
			{children}
		</MuiGrid>
	);
};

export default Grid;