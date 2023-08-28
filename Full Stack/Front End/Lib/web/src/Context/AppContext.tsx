import React, { ReactNode, useState } from "react"

interface IApplicationContext {
    loginUserInfo: string
    setLoginUserInfo: (a: any) => void
}
let ContextInitializer = {
    loginUserInfo: 'abc',
    setLoginUserInfo: (a: any) => { }
}

export let ApplicationContext = React.createContext<IApplicationContext>(ContextInitializer)
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    let [loginUserInfo, setLoginUserInfo] = useState<any>('abc')
    return <>
        <ApplicationContext.Provider value={{ loginUserInfo, setLoginUserInfo }}>
            {children}
        </ApplicationContext.Provider>
    </>
}