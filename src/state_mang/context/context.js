// @flow 
import * as React from 'react';
import {createContext , useReducer } from 'react';
import { Combain } from '../reducer/combain';

export const MovieContext = createContext()

export const MovieContextCom = ({children}) => {
    const [state , dispatch] = useReducer(Combain , {})
    return (
        <MovieContext.Provider value={{state , dispatch}} >
            {children}
        </MovieContext.Provider>
    );
};