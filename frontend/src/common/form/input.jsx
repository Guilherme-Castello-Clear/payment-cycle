import React from 'react'

export default props => (
    <input {...props.input} className='form-control' placeholder={props.place} readOnly={props.readOnly} type={props.type}/>
)