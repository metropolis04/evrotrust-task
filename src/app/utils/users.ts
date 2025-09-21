import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "db", "users.json");
const fileData = fs.readFileSync(filePath, "utf-8");

export interface User {
    email: string
    password: string
    id: number
}

export type UserClient = Omit<User, "password">

interface SuccessResponse<T> {
    success: true
    data:T
}

interface ErrorResponse {
    success: false
    error: string
}

export type ClientSuccessLoginResponse<T> = SuccessResponse<T> & {
    token: string
}

export type DataResponse<T> = SuccessResponse<T> | ErrorResponse

export type ClientLoginResponse<T> = ClientSuccessLoginResponse<T> | ErrorResponse

// inj.gaydarov@gmail.com password is 123456

const users:User[] = JSON.parse(fileData);

const dataUtils = {
    getUsers: () => {
        return users
    },
    findUser(data:Omit<User, "id">):DataResponse<Omit<User, "id">> {
        const user = users.find(value => value.email === data.email && value.password === data.password);
        if (user) {
            return {
                success: true,
                data: user,
            }
        }
        return {
            success: false,
            error: "User not found"
        }
    },
    checkEmail(email:string) {
       const isEmailVerified = users.find(value => value.email === email);
       if (isEmailVerified) {
        return {
            success: true
        }
       }
       return {
            success: false,
            error: "Email was not found"
        }
    }
};

Object.freeze(dataUtils);
export default dataUtils;