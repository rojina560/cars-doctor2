import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {users, loader} = useContext(AuthContext);
    if(loader){
        return <progress className="progress w-56" value="10" max="100"></progress>
    }
    if(users?.email){
        return children;
    }
    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoutes;