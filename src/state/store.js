import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const store = configureStore({reducer}, {}, applyMiddleware(thunk)) 