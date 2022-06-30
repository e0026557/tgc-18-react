import React from 'react';

export default function DisplaySignupSuccess(props) {
    return (
        <React.Fragment>
            Thank you for signing up. Please check {props.email}
        </React.Fragment>
    )
}