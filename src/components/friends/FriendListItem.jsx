import css from './friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name  }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.green : css.red}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    
};

export default FriendListItem