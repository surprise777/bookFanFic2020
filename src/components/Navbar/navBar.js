// import React from 'react';
// import {Link} from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import SearchBar from './../SearchBar';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style.css";
// import {checkLogin} from '../../actions/navigation';

// class NavigationBar extends React.Component {
//     state = this.props.state;

//     render(){
//         const {login_status} = this.props;

//         return (
//         <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
//             <Navbar.Brand>Readers Club</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link>
//                         <Link to={'./../Home'}>Home</Link>
//                     </Nav.Link>
//                     <SearchBar />
//                 </Nav>
//                 <Nav>
//                     {/* {
//                     (() => {
//                         if (!login_status){
//                             return (
//                                 <button type='submit'>
//                                     Login
//                                 </button>
//                                 )
//                         }else {
//                             return (
//                                 <div>
//                                     User
//                                 </div>
//                             )
//                         }
//                     })()
//                     } */}
//                     {checkLogin(login_status)}
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         )
//     }
// }

// export default NavigationBar;