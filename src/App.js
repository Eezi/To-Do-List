import React, {Component} from 'react'
import uuid from 'uuid'
import Todos from './components/Todos'
import classes from './Todo.module.css'
import styled from 'styled-components'
import AddTodo from './components/AddTodo'

const Container = styled.div`
    margin: 100px auto;
    text-align: center;
    
`;


class App extends Component {
  state = {
      todos: [
          {
              title: 'Siivoa kämppä',
              id: uuid.v4(),
              completed: false
          },
          {
            title: 'Käy kaupassa',
            id: uuid.v4(),
            completed: false
        },
        {
            title: 'Kirjota opparia',
            id: uuid.v4(),
            completed: false
        },
      ]
  }
  // Toggle todo
 markComplete = (id) => {
   this.setState({todos: this.state.todos.map(todo => {
       if(todo.id === id) {
           todo.completed = !todo.completed
       }
       return todo;
       
   })})
}
//Delete todo
delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo =>
     todo.id !== id)]})
}

addTodo = (title) => {
    const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]

    })
}

render() {
    
    return(
        <Container>
            <h1>Tehtävälista</h1>
            <AddTodo addTodo={this.addTodo}/>
             <Todos todos={this.state.todos} 
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                    addTodo={this.addTodo}/>
           
        </Container>

    )
}
}

export default App;
