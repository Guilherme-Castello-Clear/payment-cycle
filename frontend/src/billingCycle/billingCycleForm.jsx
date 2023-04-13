import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    
    render(){

        const { handleSubmit } = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' label='Nome' cols='12 4' placeholder='Infrome o nome' component={labelAndInput}></Field>
                    <Field name='month' label='Mês' cols='12 4' placeholder='Infrome o mês' type='number' component={labelAndInput}></Field>
                    <Field name='year' label='Ano' cols='12 4' placeholder='Infrome o ano' type='number' component={labelAndInput}></Field>
                </div>
                <div className="box-footer">
                    <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)