import React from 'react';

// Note: we can pass an object as props
export default function Task(props) {
    return (
        <React.Fragment>
            <li className='list-group-item'>
                <label className='form-check-label me-2'>
                    {props.task.description}
                </label>
                <input
                    type='checkbox'
                    className='form-check-input'
                    checked={props.task.done}
                />
            </li>
        </React.Fragment>
    )
}