export interface User {
    email: string,
    password: string
}

export interface UserLoginRes {
    createdAt: Date,
    email: string,
    lastname: string,
    name: string,
    password: string | null,
    updatedAt: Date,
    __v: number,
    _id: string
}