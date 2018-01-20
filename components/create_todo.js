import React from 'react';

export default class CreateTodo extends React.Component{

    render(){
        console.log(this.props.todos)

        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type='text' placeholder="What do I need to do" ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event){

        event.preventDefault();
        console.log(this.refs.createInput.value);

        if(this.refs.createInput.value != ''){
            this.props.createTask(this.refs.createInput.value);
            this.refs.createInput.value = "";
        }
        else{
            alert("Please input task");
        }

    }

}