import jwt from "jsonwebtoken"

export const verifyToken = (request, response, next) => {
    const token = request.cookies.jwt

    if(!token) {
        return response.status(401).send("Not authenticated.")
    }
    jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {
        if (error) {
            return response.status(403).send("Token is not valid or expired.")
        }
        request.userId = payload.userId
        next()
    })
} 