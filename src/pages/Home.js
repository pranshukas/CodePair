import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {
	const [roomId, setRoomId] = useState('');
	const [username, setUsername] = useState('');
	const createNewRoom = (e) => {
		e.preventDefault();
		const id = uuidv4();
		console.log(id);
		setRoomId(id);
        toast.success('Created New Room');
	};

	return (
		<div className='homepage'>
			<div className='container'>
				<img className='homepagelogo' src='/logo.png' alt='logo' />
				<h4 className='mainlabel'>Paste Invitation ROOM ID</h4>
				<div className='inputGroup'>
					<input type='text' className='inputBox' placeholder='ROOM ID' value={roomId} onChange={(e) => setRoomId(e.target.value)} />
					<input type='text' className='inputBox' placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} />
					<button className='btn joinBtn'>Join</button>
					<span className='createInfo'>
						If You don't have invite then create &nbsp;
						<a href='' onClick={createNewRoom} className='createNewBtn'>
							New Room
						</a>
					</span>
				</div>
			</div>
			<footer>
				<h4>
					Built With 💛 by &nbsp;<a href='/'>Pranshu Kashyap</a>
				</h4>
			</footer>
		</div>
	);
};

export default Home;
