import React, {useState} from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id:1,
            title:'Eat', 
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all')
    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new'?'completed':'new',
        };
        setTodoList(newTodoList)
    }
    const handleShowAllClick = () => {
        setFilterStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilterStatus('new');
    }

    const renderTodoList = todoList.filter(todo=> filterStatus==='all'||filterStatus=== todo.status);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList = {renderTodoList} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>ShowAll</button>
                <button onClick={handleShowCompletedClick}>ShowCompleted</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;