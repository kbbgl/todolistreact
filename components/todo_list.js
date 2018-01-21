import React from 'react';
import TodoListHeader from './todo_list_header';
import TodoListItem from  './todo_list_item';
import _  from 'lodash';

export default class TodoList extends React.Component{

    renderItems(){

        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index
        }{...todo} {...this.props}/>);
    } 

    render(){
        return (
            <table className="table">
                <TodoListHeader/>
                <tbody >
                {this.renderItems()}
                </tbody>
            </table>
        );
    }
}