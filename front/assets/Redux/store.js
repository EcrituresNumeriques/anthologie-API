//Redux store
import { createStore } from 'redux'
import {login} from './Reducers/Login.js'

export let store = createStore(login);
