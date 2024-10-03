import React from 'react'

function TodoList(props) {
  return (
    <div>
        <li className='list'>
          {
            props.items
          }
          <span className='icons'> 
        <i className="fa-solid fa-trash-can" onClick={()=> props.deletItem(props.index)    }></i>   

          </span>

        </li>
    </div>
  )
}

export default TodoList;