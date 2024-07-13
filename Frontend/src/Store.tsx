import { createContext, Dispatch, Reducer, useReducer, PropsWithChildren } from "react"

type AppState = {
    mode: string
}


const initialState: AppState = {
    mode: localStorage.getItem('mode')
        ? localStorage.getItem('mode')!
        : window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
}


type Action = {
    type: "SWITCH_MODE"
}


function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "SWITCH_MODE":
            return { mode: state.mode === 'dark' ? "light" : "dark" }


        default:
            return state;
    }


}


const defaulDispatch: Dispatch<Action> = () => initialState


const Store = createContext(

    {
        state: initialState,
        dispatch: defaulDispatch
    }
)


function StoreProvider = ( children:PropsWithChildren<{}> ) => {

    const [state, dispatch] = useReducer <Reducer<AppState, Action>>(reducer, initialState)


    return <Store.Provider value={{state, dispatch} }  {...children}/>


}


export { StoreProvider }