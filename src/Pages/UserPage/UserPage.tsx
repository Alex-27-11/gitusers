import React from 'react';
import './UserPage.scss';
import { useAppSelector } from '../../hooks/redux';
import { Link } from 'react-router-dom';

const UserPage: React.FC = () => {

	const { user } = useAppSelector(state => state.github);

return (
<div className='userPage'>
	<div className="userPage__container">
		<div className="userPage__inner">
			<Link to={'/gitusers'} className="userPage__buttonHome">Home</Link>
			<div className="userPage__boxImg">
				<img src={user.avatar_url} alt="avatar" className="userPage__img" />
			</div>
			<div className="userPage__info">
				<h2 className="userPage__login">{user.login}</h2>
				<p className="userPage__avatar-url">{user.avatar_url}</p>
				<p className="userPage__events-url">{user.events_url}</p>
			</div>
		</div>
	</div>
</div>
);
};

export default UserPage;