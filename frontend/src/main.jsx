import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {store,persistor} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react"
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
    
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <App />
    <Toaster/>
    </PersistGate>
    </Provider>
,


)
