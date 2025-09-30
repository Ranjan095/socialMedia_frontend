import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
    </div>
  );
};

export default Home;
