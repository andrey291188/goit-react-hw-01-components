import css from './friends.module.css';
import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={css.item} key={id}>
          <span
            className={`${css.status} ${isOnline ? css.green : css.red}`}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
