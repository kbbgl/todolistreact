import React from 'react';

export default class TodoListItem extends React.Component{
    
    
    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionsSection(){
        if(this.state.isEditing){
            return(
                <td>
                    <button className= "btn btn-success btn-lg" onClick={this.onSaveClick.bind(this)}><span className="glyphicon glyphicon-floppy-disk"></span> Save</button>
                    <button className="btn btn-warning btn-lg" onClick={this.onCancelClick.bind(this)}><span className="glyphicon glyphicon-remove"></span> Cancel</button> 
                </td>
            );
        }

        return(
            <td>
                <button className= "btn btn-default btn-lg" onClick={this.onEditClick.bind(this)}><span className="glyphicon glyphicon-pencil"></span> Edit</button>
                <button className="btn btn-danger btn-lg" onClick={this.props.deleteTask.bind(this, this.props.task)}><span className="glyphicon glyphicon-trash"></span> Delete</button>
            </td>
        );
    }

    renderTaskSection(){

        const { task, isCompleted} = this.props;
        const taskStyle = {
            color : isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditing){
            return(
                <td>
                    <form className="form-group" onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput"/>
                    </form>
                </td>
            )
        }

        if(isCompleted){
            return (
                <td className="success"
                    onClick={this.props.toggleTask.bind(this, task)}>
                    {task}
                </td>
            );
        }
        else{
            return (
                <td className="danger"
                    onClick={this.props.toggleTask.bind(this, task)}>
                    {task}
                </td>
            );
        }
        
    }
    
    render(){
        return (
                <tr>
                    {this.renderTaskSection()}
                    {this.renderActionsSection()}
                </tr>
        );
    }

    onEditClick(){
        this.setState({isEditing: true});
    }

    onCancelClick(){
        this.setState({isEditing: false});
    }

    onSaveClick(event){
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing : false})
    }

}