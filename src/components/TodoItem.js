import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from '../Todo.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";


class TodoItem extends Component {

    getStyle = () => {  
        return {
        listStyle: 'none',
        textDecoration: this.props.todo.completed ? 
        'line-through' : 'none'
        }
    }
   
    render() {
        const { id, title } = this.props.todo;
        return(
            <div >
                <li className={classes.Lista} style={this.getStyle()}>
                    <input className={classes.Checkbox}  type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input> 
                    <p>{title}</p>
                    <button  onClick={this.props.delTodo.bind(this, id)}><IoIosCloseCircleOutline/></button>
                </li>
                
            </div>
            
              
        )
    }
}
//PropTypes
TodoItem.proptype = {
    todo: PropTypes.object.isRequired
}
export default TodoItem;