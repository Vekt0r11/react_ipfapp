import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers imports
import user from './reducers/user'
import anuncios from './reducers/anuncios'
import materias from './reducers/materias'

//redux-persist
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

//Store

//Configuración de persistor
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['user'] //lista de reducers que permanecerán en memoria
}

//Importamos los reducers para combinarlos
const rootReducers = combineReducers({
  user: user,
  anuncios: anuncios,
  materias: materias
})

// const store = createStore(rootReducers(), composeWithDevTools())

const persistedReducer = persistReducer(persistConfig, rootReducers)

//Exportamos la store
export const store = createStore(persistedReducer, composeWithDevTools())