import { useEffect, useState } from "react";
import { AuthContextProps } from "../../utils/PropsType";
import { SUCCESS_STATUS, UserContext } from "../../utils/variables";
import Cookies from 'js-cookie';
import { myInfoAPI, signInAPI } from "../../utils/api";

const AuthContext = ({children}: AuthContextProps) => {
    const [user, setUser] = useState<unknown>({})
    const [userLoading, setUserLoading] = useState<boolean>(true)
 
    useEffect(()=> {
        (
            async () => {
                try {
                    const res = await fetch(myInfoAPI)
                    if(res.status in SUCCESS_STATUS) {
                        const data = await res.json()
                        setUser(data)
                    } else {
                        setUser({});                
                        Cookies.remove('accessToken');
                    }
                } catch (err : unknown ) {
                    console.log(err);
                    Cookies.remove('accessToken');
                    setUser({})
                } finally {
                    setUserLoading(false)
                }
            }
        )()
    }, [])

    const logOut = () => {
        Cookies.remove('accessToken');
        setUser({});
    }

    const logIn = async ({email, password} : {email: string, password: string}) => {
        try {
            setUserLoading(true)
            const res = await fetch(signInAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await res.json()
            setUserLoading(false)
            if(res.status in SUCCESS_STATUS) {
                setUser(data)
                return {success: true, message: "Successfully signed in."}
            } else if(res.status === 500) {
                setUser({})
                return {success: false, message: data?.message}
            } else {
                setUser({})
                return {success: false, message: data?.message}
            }
        } catch (err: unknown) {
            setUserLoading(false)
            throw err
        }
    }

    const values = {
        user, setUser, userLoading, setUserLoading, logOut, logIn
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;