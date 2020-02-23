import React, {Component} from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classes from '../Todo.module.css'


class Todos extends Component {

    render(){
        
        return(
           
                <div>
                    {this.props.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo} />
                    ))}
                </div>
               
            
        )
    }
}
//PropTypes
Todos.proptype = {
    todos: PropTypes.array.isRequired
}

export default Todos;