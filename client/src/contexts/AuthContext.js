import React, { createContext, useState, useEffect } from 'react';
import auth from '../apis/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await auth.isAuthenticated();
                setUser(data.user);
                setIsAuthenticated(data.isAuthenticated);
                setIsLoaded(true);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, [])
    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> :
                <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                    {children}
                </AuthContext.Provider>}
        </div>
    )
}

