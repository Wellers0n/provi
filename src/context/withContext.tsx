import React from 'react'

const Context = React.createContext([])

export const withContext = Component => props => {
    const [contextState, setContextState] = React.useState({})

    return (
        <Context.Provider value={[contextState, setContextState]}>
            <Component {...props} />
        </Context.Provider>
    )
}

export default Context
