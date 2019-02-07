import React, {Component} from 'react';
import {Button, Modal, Table, Card} from 'react-materialize';

class Vendors extends Component {
	render() {
		return (
			<div>
				<Table class='highlight'>
					<thead>
						<tr>
							<th data-field="id">Vendor ID</th>
							<th data-field="name">Vendor Name</th>
							<th data-field="Contact1">Main Contact</th>
							<th data-field="Owners">Owners by Team</th>
							<th data-field="Actions">Actions</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>80459283</td>
							<td>WW Grainger</td>
							<td>
								Don Heisner
								<br/>
								907 - 564 - 6905
								<br/>
								bp_alaska@graiger.com
							</td>

							<td className='alignIcons'>
								<Modal
									header = 'VM Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='Vendor' icon='business'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de Vendor</p>
								</Modal>
								<Modal
									header = 'CM Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='Carrier' icon='local_shipping'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de Carrier</p>
								</Modal>
								<Modal
									header = 'CSR Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='CSR' icon='group'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de CSR</p>
								</Modal>
							</td>
							<td className='alignIcons'>
								<Button className='teal darken-2' waves='light' icon='edit'/>
								<Button className='teal darken-2' waves='light' icon='delete'/>
							</td>
						</tr>
						<tr>
							<td>80045629</td>
							<td>Alaska Instrument</td>
							<td>
								Crystal Baloran
								<br/>
								907 - 561 - 7511
								<br/>
								crystalb@alaskainstrument.com
							</td>
							<td className='alignIcons'>
								<Modal
									header = 'VM Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='light' tooltip='Vendor' icon='business'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de Vendor</p>
								</Modal>
								<Modal
									header = 'CM Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='Carrier' icon='local_shipping'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de Carrier</p>
								</Modal>
								<Modal
									header = 'CSR Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='CSR' icon='group'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de CSR</p>
								</Modal>
							</td>
							<td className='alignIcons'>
								<Button className='teal darken-2' waves='light' icon='edit'/>
								<Button className='teal darken-2' waves='light' icon='delete'/>
							</td>
						</tr>
						<tr>
							<td>83480234</td>
							<td>GLM Energy</td>
							<td>
								Paula Lovett
								<br/>
								907 - 283 - 4230 ext 3
								<br/>
								<a href="mailto:plovett@glmenergyllc.com">plovett@glmenergyllc.com</a>
							</td>
							<td className='alignIcons'>
								<Modal
									header = 'VM Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='light' tooltip='Vendor' icon='business'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de Vendor</p>
								</Modal>
								<Modal
									header = 'CM Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='Carrier' icon='local_shipping'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de Carrier</p>
								</Modal>
								<Modal
									header = 'CSR Team Owner'
									actions ={
										<span>
											<Button className='teal darken-2 modal-close' waves='light' icon='close' tooltip='Close'/>
										</span>
									}
									trigger={
										<Button className='teal darken-2' waves='green' tooltip='CSR' icon='group'/>
								}>
									<p> Aquí se desplegarán Owner y Backup de CSR</p>
								</Modal>
							</td>
							<td className='alignIcons'>
								<Button className='teal darken-2' waves='light' icon='edit'/>
								<Button className='teal darken-2' waves='light' icon='delete'/>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	};
};

export default Vendors;
