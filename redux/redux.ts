import { configureStore } from '@reduxjs/toolkit'
import { countriesListReducer } from './slice/countries-slice'
import { useDispatch,useSelector,TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    countriesList: countriesListReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch

export default store