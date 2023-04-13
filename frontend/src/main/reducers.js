import { combineReducers} from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducer