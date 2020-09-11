import React, { createContext, useState, useEffect } from 'react';
import auth from '../apis/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await auth.isAuthenticated();
                setUser(data.user);
                setIsAuthenticated(data.isAuthenticated);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, [])
    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

