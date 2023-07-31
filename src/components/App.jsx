import React from 'react';
import { Statistics } from './statistics/Statistics.jsx';
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
       user={user}
      />
      <Statistics 
      title="Upload stats" 
      items={dataInfo} 
      />
      <Friends friends={dataFriends}/>
      <Transactions items={dataTransactions}/>
    </>
  );
};
