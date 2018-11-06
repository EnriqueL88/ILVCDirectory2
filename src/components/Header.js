import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar brand='ILVC Directory' className='blue darken-4' left>
			<ul class="left hide-on-med-and-down">
				<li>
					<a href="/">
						<i class="material-icons left">contacts</i>
						Home
					</a>
				</li>
			</ul>
			<ul class="left hide-on-med-and-down">
				<li>
					<a href="/">
						<i class="material-icons left">business</i>
						VM Team
					</a>
				</li>
				<li>
					<a href="/">
						<i class="material-icons left">local_shipping</i>
						CM Team
					</a>
				</li>
				<li>
					<a href="/">
						<i class="material-icons left">group</i>
						CSR Team
					</a>
				</li>
			</ul>
		</Navbar>
	</div>
)

export default Header;
