import React, { useEffect, useState } from 'react';
import { useSearchUsersQuery } from '../../store/github/github.api';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import './MainPage.scss'
import { IUser } from '../../models/models';
import Card from '../../components/Card/Card';

const MainPage: React.FC = () => {
	const { data } = useSearchUsersQuery('');
	const { addUsers, addUser, addRemoveId, addLikedUsersIds } = useActions();
	const { users } = useAppSelector(state => state.github);
	const { removeId } = useAppSelector(state => state.github);
	const { likedUsersIds } = useAppSelector(state => state.github);
	const [sortedUsers, setSortedUsers] = useState<IUser[]>([]);
	const [isFiltered, setIsFiltered] = useState(true);

	useEffect(() => {
		if (data) {
			 addUsers(data);
		}
  }, [data]);

	useEffect(() => {
		if (users) {
			 setSortedUsers(users || []); 
		}
		 if (removeId.length === 0) {
			return
		 } else {
			setSortedUsers(users.filter(user => !removeId.includes(user.id)));
		 }
  }, [users, removeId]);

	const handleLikeClick = (userId: number) => {
		if (likedUsersIds.includes(userId)) {
			addLikedUsersIds(likedUsersIds.filter(id => id !== userId));
		 } else {
			addLikedUsersIds([...likedUsersIds, userId]);
		 }
  };

  const handleRemoveClick = (userId: number) => {
	addRemoveId(userId);
	addLikedUsersIds(likedUsersIds.filter(id => id !== userId))
  }

  const handleShowsClick = () => {
	setIsFiltered(!isFiltered);
    if (isFiltered) {
      const newSortedUsers = [...sortedUsers]
        .filter(user => likedUsersIds.includes(user.id))
      setSortedUsers(newSortedUsers);
    } else {
      const newSortedUsers = [...users]
        .filter(user => !removeId.includes(user.id));
      setSortedUsers(newSortedUsers);
    }
  }

  const addingUser = (user: IUser) => {
	addUser(user);
  }

	return (
		<div className='mainPage'>
			<div className="mainPage__container">
				<div className="mainPage__inner">
					<button className="mainPage__showButton" onClick={handleShowsClick}>Shows likes</button>
					<div className="mainPage__usersBox">
						{sortedUsers && sortedUsers.map(user => (
							<Card
							key={user.id}
							user={user}
							onLikeClick={handleLikeClick}
							onRemoveClick={handleRemoveClick}
							onAddingUser={addingUser}
							isLiked={likedUsersIds.includes(user.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
);
};

export default MainPage;