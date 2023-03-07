import { AuthContext } from "hok/AuthProvider";
import { useContext } from "react";



export function useAuth(){
    return useContext(AuthContext)
}