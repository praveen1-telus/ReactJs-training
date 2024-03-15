import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import List from './List';
import AddIcon from '@mui/icons-material/Add';




function App() {

  const [inputList, setInputList]= useState("")
  const [items,SetItems]=useState([]);
  
  const itemEvent =(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
    SetItems((oldItmes)=>{
      return [...oldItmes, inputList];
    })
    setInputList("");
  }
  const deleteItem=(id)=>{
    console.log("deleted")
    window.alert("Item has been deleted")
    SetItems((oldItmes)=>{
      return oldItmes.filter((arrElem,index)=>{
        return index!==id;
      })
      
    })
}
  return (
    <div className="main_div">
      < div className="center_div">
        <br/>
        <h1>ToDo List </h1>
        <br/>
        <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}/>
        <button className="newBtn" onClick={listOfItems}><AddIcon/></button>
        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemval,index)=>{
           return <List 
           key={index}
           id={index}
           text={itemval}
           onSelect={deleteItem}
           />
          })
          
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
