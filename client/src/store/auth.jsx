import { useContext, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"));
    const storeTokenInLS = (serverToken)=>{
        return localStorage.setItem("token",serverToken);
    };

    let isLoggedIn=!!token;

    const LogoutUser=()=>{
        setToken("");
        localStorage.removeItem("token");
    }

    return(

        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS , LogoutUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=>{
    const authContextValue = useContext(AuthContext);

    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}


// import { createContext, useContext } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {

//   //function to stored the token in local storage
//   const storeTokenInLS = (serverToken) => {
//     return localStorage.setItem("token", serverToken);
//   };

//   return (
//     <AuthContext.Provider value={{ storeTokenInLS }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const authContextValue = useContext(AuthContext);
//   if (!authContextValue) {
//     throw new Error("useAuth used outside of the Provider");
//   }
//   return authContextValue;
// };

