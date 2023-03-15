import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    name: string,
    surname: string,
    email: string,
    cpf: string,
    phone: string,
    pass: string
}

type Action = {
    type: UserActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type ProviderProps = {
    children: ReactNode;
}

const initialData: State = {
    name: '',
    surname: '',
    email: '',
    cpf: '',
    phone: '',
    pass: ''
}

const UserContext = createContext<ContextType | undefined>(undefined);

export enum UserActions {
    setUser
}

const userReducer = (state: State, action: Action) => {
    switch (action.type) {
        case UserActions.setUser:
            return {
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email,
                cpf: action.payload.cpf,
                phone: action.payload.phone,
                pass: action.payload.pass
            };
        default:
            return state;
    }
}

export const UserProvider = ({children}: ProviderProps) => {
    const [state, dispatch] = useReducer(userReducer, initialData);
    const value = {state, dispatch};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser precisa ser usado dentro do UserProvider');
    }
    return context;
}