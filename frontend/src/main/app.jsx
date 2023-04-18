import '../common/template/dependencies'
import React from 'react'

import {HashRouter} from 'react-router-dom'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/menssages'



export default props => (

    <HashRouter>
        <div className='wrapper'>
            <Header/>
            <SideBar/>
            <Routes></Routes>
            <Footer></Footer>
            <Messages></Messages>
        </div>
    </HashRouter>
)