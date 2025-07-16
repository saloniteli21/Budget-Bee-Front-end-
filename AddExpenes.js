import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Model } from './Model';

export const AddExpense = ({ rows, setRows }) => {
  const { rowid } = useParams(); 
    const navigate = useNavigate();

  const [defaultValue, setDefaultValue] = useState({
    name: '',
    amount: '',
    type: ''
  });

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]); 
    navigate(`/add-expense/edit/${rows.length}`); 
  };

  return (
    <Model
      closeModel={() => navigate('/')}
      onSubmit={handleSubmit}
      defaultValue={defaultValue}
    />
  );
};
