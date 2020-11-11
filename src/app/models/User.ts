import { RegisteredUser } from './RegisteredUser';

export interface User {
    userid: number
    username: string
    password: string
    dateRegistered: Date
    myReg: RegisteredUser
}