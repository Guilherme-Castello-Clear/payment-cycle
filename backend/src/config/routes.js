const express = require('express')
const auth = require('./auth')
const BillingCycle = require('../api/billingCycle/billingCycleService')

module.exports = function (server) {

    //Protected

    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    BillingCycle.register(protectedApi, '/billingCycles')

    //Publics

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')

    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}