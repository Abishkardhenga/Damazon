declare namespace Express {
    export interface Request {
        user: {
            _id: string
            email: string
            name: string
            isAdmin: boolean
            token: string
        }
    }
}