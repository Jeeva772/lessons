import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }


    render() {
        return (
            <React.Fragment>
                 <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/">Learning Management system</NavbarBrand>
                        <div></div>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/lesson'><span className="fa fa-info fa-lg"></span> Lessons</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-info fa-lg"></span> Exams</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-list fa-lg"></span> FeedBack</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        <div>
                            <a href="/">
                            Welcome Jeeva !! LMS... </a>
                        </div>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;