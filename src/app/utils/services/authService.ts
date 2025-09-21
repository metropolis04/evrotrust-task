import { cookies } from 'next/headers';
import { verifyJwt, parseJwt } from './jwtService';

interface ResetData {
    email: string
    iat: number
    exp: number
    reset: boolean
}


export interface AuthDataType {
    isLoggedIn: boolean | undefined
    resetData: ResetData | false | undefined
}

export const getAuth = async (): Promise<AuthDataType> => {

    
    const cookiesList = await cookies();
    const isLoggedIn = cookiesList.has('nc_token');
    const resetToken = cookiesList.get('et_reset_token');
    let isResetActive;
    if (resetToken) {
        isResetActive = verifyJwt(resetToken.value);
    }
    
    return {
        isLoggedIn : isLoggedIn ? verifyJwt(cookiesList.get('nc_token')?.value) : false,
        resetData: isResetActive && resetToken ? parseJwt(resetToken.value) : false
    }
}