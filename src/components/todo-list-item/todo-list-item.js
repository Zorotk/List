import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {label, onToggleDone, onTogleImportant, done, important,urgently,onToggleUrgently} = this.props;


        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        if (urgently) {
            classNames += ' urgently'
        }

        return (

            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
          {label}
        </span>

 <button type="button"
         className="btn btn-outline-success btn-sm float-right"
         onClick={onToggleUrgently}>
     <i className="fa fa-exclamation"/>


        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onTogleImportant}>
          <i className="fa fa-pencil fa-fw"/>



        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right" onClick={this.props.onDelete}>
          <i className="fa fa-trash-o"/>
        </button>
      </span>
        );
    };
}

