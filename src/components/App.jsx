import React from 'react';
import { Data } from '../components/data/Data.jsx';
import { Friends } from '../components/friends/Friends.jsx';
import { Transactions } from '../components/transactions/Transactions.jsx';
import { Profile } from '../components/user/Profile.jsx';
import user from '../folders_data/user.json/user.json';
import dataInfo from '../folders_data/data.json/data.json';
import dataFriends from '../folders_data/friends.json/friends.json'
import dataTransactions from '../folders_data/transactions.json/transactions.json'


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Data 
      title="Upload stats" 
      items={dataInfo} 
      />
      <Friends friends={dataFriends}/>
      <Transactions items={dataTransactions}/>
    </>
  );
};
