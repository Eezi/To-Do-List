import React, {Component} from 'react'
import Todos from './components/Todos'
import uuid from 'uuid'
import styled from 'styled-components'
import AddTodo from './components/AddTodo'
import axios from 'axios'

const Container = styled.div`
    margin: 100px auto;
    text-align: center;
    
`;


class App extends Component {
  state = {
      todos: []
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({todos: res.data}))
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
delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addTodo = title => {
    //Lisätään data backendiin
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

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
