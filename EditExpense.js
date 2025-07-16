import React, { useState, useEffect } from 'react';
import { useNavigate, useParams,useLocation } from 'react-router-dom';
import { Model } from './Model';

export const EditExpense = ({ rows, setRows }) => {
  const { idx } = useParams();
  const navigate = useNavigate();
  const location =useLocation();

  const [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
    if (idx && rows.length > 0) {
      
      const rowToEdit = rows[parseInt(idx)]; 
      setDefaultValue(rowToEdit);
    }
  }, [idx, rows]);

  const handleSubmit = (editedRow) => {
    const updatedRows = [...rows];
    updatedRows[parseInt(idx)] = editedRow; 
    setRows(updatedRows);
    
  };

  if (!defaultValue) return null;

  return (
    <Model
      closeModel={() => navigate('/add-expense')}
      onSubmit={handleSubmit}
      defaultValue={defaultValue}
    />
  );
};
