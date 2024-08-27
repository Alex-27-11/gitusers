import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { IUser } from '../../models/models';
import { stringLen } from '../../utils/StringLen';

interface ICardProps {
	user: IUser;
	onLikeClick: (userId: number) => void;
	onRemoveClick: (userId: number) => void;
	onAddingUser: (user: IUser) => void;
	isLiked: boolean;
 }

const Card: React.FC<ICardProps> = ({ user, onLikeClick, onRemoveClick, onAddingUser, isLiked }) => {
	return (
	  <div className="card__user" onClick={() => onAddingUser(user)} >
		 <Link to={"/username"} className="card__link">
			<div className="card__boxImg">
			  <img src={user.avatar_url} alt="" />
			</div>
		 </Link>
		 <Link to={"/username"} className="card__link">
			<div className="card__userInfo">
			  <h3 className='card__login'>{stringLen(32, user.login)} </h3>
			  <p className='card__type'>{stringLen(32, user.type)}</p>
			  <p className='card__url'>{stringLen(32, user.avatar_url)}</p>
			</div>
		 </Link>
		 <div className="card__buttons">
			<button
			  className={isLiked ? "card__buttonLike card__buttonLike-active" : "card__buttonLike"}
			  onClick={() => onLikeClick(user.id)}
			>
			  \/</button>
			<button className="card__buttonRemove" onClick={() => onRemoveClick(user.id)}>
			  X
			</button>
		 </div>
	  </div>
	);
 };

export default Card;