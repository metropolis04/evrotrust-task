import { cookies } from 'next/headers';
import { verifyJwt, parseJwt } from './jwtService';

export interface AuthDataType {
    isLoggedIn: boolean
    resetData: {
        email: string
        iat: number
        exp: number
        reset: boolean
    }
}

export const getAuth = async (): Promise<AuthDataType> => {

    const cookiesList = await cookies();
    const isLoggedIn = cookiesList.has('nc_token');
    const isResetActive = cookiesList.has('et_reset_token') ? verifyJwt(cookiesList.get('et_reset_token')?.value) : null;
    
    return {
        isLoggedIn : isLoggedIn ? verifyJwt(cookiesList.get('nc_token')?.value) : false,
        resetData: isResetActive ? parseJwt(cookiesList.get('et_reset_token')?.value) : false
    }
}