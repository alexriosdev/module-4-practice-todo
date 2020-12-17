import React, { Component } from 'react';
import Tasks from './Tasks';

class TasksContainer extends Component {
  render() {
    return (
      <div className="tasks">
        <h5>Tasks</h5>
        {this.props.tasks.map((task, index) => <Tasks key={index} task={task} />)}       
      </div>
    );
  }
}

export default TasksContainer;