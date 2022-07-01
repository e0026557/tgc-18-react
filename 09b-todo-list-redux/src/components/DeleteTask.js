import React from 'react'

export default function DeleteTask(props) {
    return (
        <React.Fragment>
            <li className='list-group-item'>
                Are you sure you want to delete this task ({props.task.description})?
                <button
                    className='btn btn-danger btn-sm mx-2'
                    onClick={() => {
                        props.delete(props.task)
                    }}
                >
                    Delete
                </button>
                <button
                    className='btn btn-primary btn-sm mx-2'
                    onClick={props.cancelDelete}
                >
                    Cancel
                </button>
            </li>
        </React.Fragment>
    )
}