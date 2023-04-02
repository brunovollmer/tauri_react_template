import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

import rootSaga from '@/store/sagas'
import nameReducer from '@/store/name'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
  reducer: {
    name: nameReducer,
  },
})

sagaMiddleware.run(rootSaga)

export default store
