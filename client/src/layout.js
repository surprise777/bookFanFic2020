import React from 'react';
import Header from './components/Header/header';

const Layout = ({ children, pageName, handler, state, app, ...props }) => {
	return (
		<div className="main">
			<React.Fragment>
				<Header handler={handler}  state={state} app={app}/>
				<div className="main-content">
						<div className={pageName} >{children}</div>
				</div>
			</React.Fragment>
		</div>
	);
};

export default Layout;
