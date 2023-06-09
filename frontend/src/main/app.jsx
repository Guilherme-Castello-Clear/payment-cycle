import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/menssages'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer></Footer>
        <Messages></Messages>
    </div>
)