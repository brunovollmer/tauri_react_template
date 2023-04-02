import { put, takeEvery, call } from 'redux-saga/effects'
import { setGreeting, setName } from '../name'
import { invoke } from '@tauri-apps/api/tauri'
import { PayloadAction } from '@reduxjs/toolkit'

function* setDevicesSaga(action: PayloadAction<string>) {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  const rustGreeting = yield call(invoke, 'greet', { name: action.payload })
  yield put(setGreeting(rustGreeting as string))
}

export function* nameSaga() {
  yield takeEvery(setName.type, setDevicesSaga)
}
