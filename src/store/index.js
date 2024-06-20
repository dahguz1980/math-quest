import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from '../features/Preference/PreferenceSlice'
import headerTitleReducer from '../features/HeaderTitle/HeaderTitleSlice'

export default configureStore ( {
    reducer: {
        preference: preferenceReducer,
        headerTitle: headerTitleReducer
    }
})