import { all, fork } from 'redux-saga/effects'
import { nameSaga } from './name.saga'

function* rootSaga() {
  yield all([fork(nameSaga)])
}

export default rootSaga
