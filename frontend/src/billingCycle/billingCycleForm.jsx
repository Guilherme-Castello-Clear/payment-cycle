import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form'
import { init } from './billingCycleActions';
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
                    <button className="btn btn-default" onClick={this.props.init} type='button'>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)