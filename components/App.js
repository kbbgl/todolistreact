import React from 'react';
import CreateTodo from './create_todo'
import TodoList from './todo_list'

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: true
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];

const centerAlign = {
    display: 'flex',
    justifyContent: 'center'
};

const centerFontJumbotron = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Indie Flower'
}

export default class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }


    render(){
        return (
            <div>
            <div className="jumbotron" style={centerFontJumbotron}>
                <h1>React Todo App</h1>
            </div>
            
            <div className="container">
                    
                <div className="well well-lg" style={centerAlign}
                ><CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/></div>
                <TodoList
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}/>
                </div>
            </div>
        );
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo => todo.task == task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    createTask(task){

        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({todos: this.state.todos})
    }

    saveTask(oldTask, newTask){

        const foundTodo = _.find(this.state.todos, todo => todo.task == oldTask);
        foundTodo.task = newTask;
        this.setState({todos : this.state.todos});

    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo => todo.task == taskToDelete);
        this.setState({todos : this.state.todos});
    }
}