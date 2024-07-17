import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react';

// Define action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Define User type
interface User {
  username: string;
}

// Define Auth State type
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Define Auth Actions type
type AuthAction =
  | { type: typeof LOGIN; payload: User }
  | { type: typeof LOGOUT };

// Define initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Create the Auth Context
const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Define the reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// AuthProvider component to provide the auth context
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
