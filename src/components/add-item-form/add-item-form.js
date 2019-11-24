import React,{Component} from 'react';
import './add-item-form.css'
export default class AddItemForm extends Component{
    state={
        label:''
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if (this.state.label.length>=1){   this.props.onItemAdd(this.state.label)
            this.setState({label:''})}

    }
    render() {
        return (
            <form  onSubmit={this.onSubmit} className='addItemForm d-flex'>
                <input placeholder='Введите текст' className='form-control' type="text" value={this.state.label}  onChange={(e)=>this.setState({label:e.target.value})}/>
                <button className='btn btn-outline-secondary'>Добавить</button>
            </form>
        );
    }


};

