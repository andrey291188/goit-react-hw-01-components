import FriendListItem from './FriendListItem.jsx';
import css from './friends.module.css';


export const Friends = ({ friends }) => {
  return <ul className={css.friend_list}>
    <FriendListItem friends={friends}/>
  </ul>;
};


