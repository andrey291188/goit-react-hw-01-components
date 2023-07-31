import css from './friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${isOnline ? css.green : css.red}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ))
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendListItem