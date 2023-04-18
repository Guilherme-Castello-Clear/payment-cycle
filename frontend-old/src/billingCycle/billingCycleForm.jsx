import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions';
import labelAndInput from '../common/form/labelAndInput';
import ItemList from './itemList'
import { ready } from 'jquery';
import Summary from './summary';


class BillingCycleForm extends Component {
    
    calculateSummary(){
        const sum = (t, v) => t + v
        return{
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){

        const { handleSubmit, readOnly, credits, debts } = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' label='Nome' cols='12 4' placeholder='Infrome o nome' component={labelAndInput} readOnly={readOnly}></Field>
                    <Field name='month' label='Mês' cols='12 4' placeholder='Infrome o mês' type='number' component={labelAndInput} readOnly={readOnly}></Field>
                    <Field name='year' label='Ano' cols='12 4' placeholder='Infrome o ano' type='number' component={labelAndInput} readOnly={readOnly}></Field>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                    <ItemList cols='12 6' list={credits} field='credits' legend='Créditos' readOnly={readOnly}></ItemList>
                    <ItemList cols='12 6' showStatus={true} list={debts} field='debts' legend='Débitos' readOnly={readOnly}></ItemList>

                </div>
                <div className="box-footer">
                    <button className={`btn btn-${this.props.submitClass}`} type='submit'>{this.props.submitLabel}</button>
                    <button className="btn btn-default" onClick={this.props.init} type='button'>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)