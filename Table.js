import React, {useState}from 'react';
import './Table.css';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const Table = ({ rows, deleteRow }) => {
  const navigate = useNavigate();


  const[currentPage, setCurrentPage] = useState(0);
  const rowsPerPage =5;

  
  if (!Array.isArray(rows)) return null;
  
  const handlePageChange = (newPage)=> {
    
      setCurrentPage(newPage);
  };
  



  const handleEdit = (idx) => {
    const globalIndex =currentPage*rowsPerPage + idx;
    navigate(`/add-expense/edit/${globalIndex}`); 
  };
  const paginatedRows = rows.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <div classname="table-wrapper">
      <table className="table">
        <thead>
          <tr>
          
            <th>Expense Name</th>
            <th className="expand">Expense Amount</th>
            <th>Expense Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            paginatedRows.map((row, idx) => (
              <tr key={idx}>
                
                <td>{row.name}</td>
                <td className="expand">{row.amount}</td>
                <td>{row.type}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                    <BsFillPencilFill className="edit-btn" onClick={() => handleEdit(idx)} />
                  </span>
                </td>
              </tr>
            ))

            
          }
          <tr>
            
            <td>Soft Toys</td>
            <td>2000</td>
            <td>Shopping
                <span className ="label label-live"></span>
            </td>
            <td>
                <span className = "actions">
                    <BsFillTrashFill className ="delete-btn"/>
                    <BsFillPencilFill className ="edit-btn" />
                </span>
            </td>
          </tr>
        </tbody>
      </table>
      
      
      <div className="pagination">
        {Array.from({ length: Math.ceil(rows.length / rowsPerPage) }, (_, index) => (
          <button
            key={index}
            className={currentPage === index ? 'active' : ''}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
