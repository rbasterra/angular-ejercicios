export interface User {
    email: string,
    password: string
}



export interface UserSignUp {
    name: string,
    lastname: string,
    email: string,
    password: string,
    phone: number,
    birthdate: Date,
    address: string,
    city: string,
    postal_code: number,
    province: string
}

export interface UserLogged {
    name: string,
    lastname: string,
    email: string,
    password: string,
    phone?: number,
    birthdate?: Date,
    address?: string,
    city?: string,
    postal_code?: number,
    province?: string,
    __v: number,
    _id: string,
    createdAt: Date,
    updatedAt: Date
}
