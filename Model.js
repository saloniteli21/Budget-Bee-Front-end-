import React, {useState} from 'react';
import "./Model.css";

export const Model = ({closeModel ,onSubmit,defaultValue}) => {

    const[formState, setFormState] = useState(defaultValue ||{
        name: "",
        amount: "",
        type: "",
    });

    const [errors,setErrors] = useState("")

    const validateForm =() =>{
        if(formState.name &&formState.amount && formState.type){
            setErrors("")
            return true;
        }else{
            let errorFeilds =[];
            for(const[key,value]of Object.entries(formState)){
                if(!value) {
                    errorFeilds.push(key);
                }
            }
            setErrors(errorFeilds.join(", "));
            return false;

        }
        

    };
    
    

    const handelChange =(e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });

    };

    const handelSubmit = (e) => {
        e.preventDefault();
        if(!validateForm ()) return;

        onSubmit(formState)

        closeModel();
    }


  return (
    <div className="model-conainer" onClick ={(e) => {
        if(e.target.className==="model-container")closeModel();

    }}
    >
        <div className ="model">
            <form>
                <div className ="form-group">
                    <label htmlFor ="Expense Name">Expense Name</label>
                    <input name= "name" value ={formState.name} onChange = {handelChange}/>
                </div>
                <div className ="form-group">
                    <label htmlFor ="Amount">Amount</label>
                    <input name= "amount" value ={formState.amount}onChange = {handelChange}/>
                </div>
                <div className ="form-group">
                    <label htmlFor ="type">Type of Expense</label>
                    <select name= "type" value ={formState.type}onChange = {handelChange}>
                        <option value ="Select">Select</option>
                        <option value ="Heathcare">Healthcare</option>
                        <option value =" Investment">Investment</option>
                        <option value =" Entertainment">Entertainment</option>
                        <option value ="Shopping">Shopping</option>
                    </select>
                </div>
                {errors && <div>{`Please include: ${errors}`}</div>}


                
                <button type ="submit" className="btn" onClick = {handelSubmit}>Submit</button>
            </form>
            
        </div>
    </div>
  )
}
