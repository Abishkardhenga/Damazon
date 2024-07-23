    
    import  { Request } from "express"
    export interface ModifiedRequest extends Request {
        user: {
            _id: string
            email: string
            name: string
            isAdmin: boolean
            token: string
        }
    }
