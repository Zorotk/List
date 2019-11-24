import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import AddItemForm from "../add-item-form/add-item-form";

export default class App extends Component {
    maxId = 100
    state = {
        todoData: [
            this.createTodoItem('Test 1'),
            this.createTodoItem('Test 2'),
            this.createTodoItem('Test 3')
        ],
        search: '',
        filter:'all'
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            urgently:false,
            done: false,
            id: this.maxId++
        }
    }
    onToggleUrgently=(id)=>{
        this.setState(({todoData})=>{
            return {todoData:this.toggleProperty(todoData,id,'urgently')}
            })
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'done')}
        })
    }
    onTogleImportant = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'important')}
        })
    }
    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex(e => e.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
    }


    onItemAdd = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem]
            return {todoData: newArr}
        })
    }
    onDelete = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(e => e.id === id)
            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            return {
                todoData: newArr
            }
        })
    }

    search(items, search) {
        if (search.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    onFilterChange= (filter) => {
        this.setState({filter})
    }
    onSearchChange = (search) => {
        this.setState({search})
    }
    filter(items,filter){
        switch (filter) {
            case 'all':
                return items
            case 'active':
              return   items.filter(item=>!item.done)
            case 'done':
                return  items.filter(item=>item.done)
            case 'urgently':
                return items.filter(item=>item.urgently)
            default:
                return items

        }
    }

    render() {
        const {todoData, search,filter} = this.state
        const visibleItem = this.filter(this.search(todoData, search),filter)
        const doneCount = todoData.filter(e => e.done).length
        const urgentlyCount=todoData.filter(e=>e.urgently).length
        const todoCount = todoData.length - doneCount
        return (

            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} urgently={urgentlyCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>

                    <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}/>
                </div>
                <AddItemForm onItemAdd={this.onItemAdd}/>
                <TodoList todos={visibleItem}
                          onDelete={this.onDelete}
                          onToggleDone={this.onToggleDone}
                          onTogleImportant={this.onTogleImportant}
                          onToggleUrgently={this.onToggleUrgently}/>



            </div>
        );
    }
};

