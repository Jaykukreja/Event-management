import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler,
 NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from 'reactstrap';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render(){
		return(
			<>
				<div>
					<Navbar color = "light" light expand="md">
						<NavbarBrand href="/" style={{color:'#ff4000', fontWeight:"bold"}}>eventbrite</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar style={{fontSize:'15px'}}>
								<NavItem>
									<NavLink href="/Components/">Browse Events</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Organize
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem> Overview </DropdownItem>
										<DropdownItem> Pricing </DropdownItem>
										<DropdownItem> Blog </DropdownItem>
										<DropdownItem> Resources </DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Help
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem> How it works? </DropdownItem>
										<DropdownItem> What does it cost to create an event? </DropdownItem>
										<DropdownItem> Where are my tickets? </DropdownItem>
										<DropdownItem> How to contact the event organizer </DropdownItem>
										<DropdownItem divider />
										<DropdownItem> Help Center </DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>
									<NavLink href="/Components" style={{color: '#0040ff'}}>Create Event</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/">Sign In</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			</>
			);
	}
}

export default Navigation;