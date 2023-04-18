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

    const authService = require('../api/user/authService')

    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken', authService.validateToken)
}