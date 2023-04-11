import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component {
    render(){
        return(
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'></ContentHeader>
                <Content>
                    <ValueBox cols='12 4' color='green' value='R$10,00' text='Total de Créditos' icon='bank'/>
                    <ValueBox cols='12 4' color='red' value='R$10,00' text='Total de Débitos' icon='credit-card'/>
                    <ValueBox cols='12 4' color='blue' value='R$0,00' text='Valor Consolidado' icon='money'/>
                </Content>
            </div>
        )
    }
}

export default Dashboard