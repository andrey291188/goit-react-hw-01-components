import FriendListItem from './FriendListItem.jsx';
import css from './friends.module.css';
import PropTypes from 'prop-types';


export const Friends = ({ friends }) => {
  return <ul className={css.friend_list}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name}/>
    ))
  }
  </ul>;
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
