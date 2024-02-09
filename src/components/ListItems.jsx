import React from 'react'
import Item from './Item'

const ListItems = (props) => {
if(props.items.length === 0){
  return(
    <p className='nodata'>You haven't added any tasks yet</p>
  )
}else{
    return (
      <ul>
        {props.items.map((text)=><Item title={text} key={text + Math.random()} delete={props.delete}/>)}
      </ul>
    )}
  }
  export default ListItems
