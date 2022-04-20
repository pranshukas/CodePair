import React, { useState } from 'react';
import Client from '../components/Client';

const EditorPage = () => {
	const [clients, setClients] = useState([
		{ socketId: 1, username: 'Pranshu K' },
		{ socketId: 2, username: 'Tushar S' },
	]);
	return (
		<div className='mainWrap'>
			<div className='aside'>
				<div className='asideInner'>
					<div className='logo'>
						<img className='logoImage' src='/logo.png' alt='logo' />
					</div>
					<h3>Connected</h3>
					<div className='clientList'>
						{clients.map((client) => (
							<Client key={client.socketId} username={client.username} />
						))}
					</div>
				</div>
			</div>
			<div className='editorWrap'>Editor Goes here ...</div>
		</div>
	);
};

export default EditorPage;
