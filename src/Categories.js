import React from 'react';
import { useState, useEffect} from 'react'
import Menu from './Menu';

const Categories = (props) => {
 // console.log(   props.items.map((item)=>(item.category)))

  const [catData, setCatData] = useState(props.items);
 const [newArray, setArray]= useState([]);
 
 //useEffect(,[])

  const onClickHandler =() =>{
    
//console.log('in ClickHandler')
setArray(    props.items.map((item)=>(item.category)))


   
   }

 const onCatagoryHandler = (catItem)=>{

   

    const newData = props.items.filter((item)=>(item.category === catItem))
    console.log('onCatagoryHandler', newData)

     
     setCatData(newData);
    // console.log('catData', catData)
   }
   

const catagory = newArray.filter((item, index)=>(newArray.indexOf(item)===index));
//console.log(catagory)
  return (
    <div>
 <button onClick = {onClickHandler}> distribution</button>
 

 <Menu items = {catData} catagory = {catagory} dataHandler = {onCatagoryHandler}/>
    </div>
  )
};

export default Categories;
