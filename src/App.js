import React from 'react';
import './App.css';
import { CATEGORIES } from './data';
import CategoryFilters from './components/CategoryFilters';
import TasksContainer from './components/TasksContainer';

class App extends React.Component {
  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    filter: 'All'
  }

  handleClick = (e) => {    
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    const filteredTasks = this.state.tasks.filter(task => this.state.filter === 'All' ? task : task.category.includes(this.state.filter));
    return (
      <div className="App">
        <button className="toggle off"> Stretch features disabled</button>
        <h2>My tasks</h2>
        <CategoryFilters handleClick={this.handleClick} categories={CATEGORIES} filter={this.state.filter} />
        <TasksContainer tasks={filteredTasks}/>
      </div>
    );
  }
}


export default App;
