import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/form/input'
import If from '../common/operador/if'

import Grid from '../common/layout/grid'

class ItemList extends Component {

    add(index, item = {}){
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index){
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows(){
        const list = this.props.list || [];
        
        return list.map((item, index) => (
            <tr key={index}>
                {console.log(list[index].name)}
                <td><Field name={`${this.props.field}[${index}].name`} placeholder="Informe o nome" readOnly={this.props.readOnly} component={Input} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} placeholder="Informe o nome" readOnly={this.props.readOnly} component={Input} /></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`} placeholder="Informe o status" readOnly={this.props.readOnly} component={Input} /></td>
                </If>
                <td>
                    <button type='button' onClick={() => this.add(index + 1)} className='btn btn-success'>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' onClick={() => this.add(index + 1, item)} className='btn btn-warning'>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' onClick={() => this.remove(index)} className='btn btn-danger'>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)