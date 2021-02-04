import {useState, useEffect, useCallback} from 'react';

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [expirationToken, setExpirationToken] = useState();
    const [userId, setUserId] = useState(false);

    const login = useCallback((uid, token, expirationDate) => {
        setToken(token);
        setUserId(uid);
        //set the expiration date for token
        const expirationTokenDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
        setExpirationToken(expirationTokenDate);
        //use localStorage to store userId and token to save the login wan refrecheng the brawser
        localStorage.setItem('userData', JSON.stringify({
            userId: uid,
            token: token,
            expiration: expirationTokenDate.toISOString()
        }));
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.userId, storedData.token, new Date(storedData.expiration));
        }
    }, [login]);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setExpirationToken(null);
        localStorage.removeItem('userData');
    }, [])

    useEffect(() => {
        if (token && expirationToken) {
            const remainingTime = expirationToken.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    
    }, [token, logout, expirationToken]);

    return {userId, token, login, logout};
};