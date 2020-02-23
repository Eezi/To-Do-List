import React, {Component } from 'react'
import classes from '../Todo.module.css'

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    //Add new task
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}  >
                <input
                className={classes.Input}
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Lisää tehtävä..."
                onChange={this.onChange}
                />
                <input 
                className={classes.Nappi} 
                type="submit" value="Lisää"
                 />
            </form>
        )
    }
}
export default AddTodo;