import jwt from "jsonwebtoken"
import { compare } from "bcrypt"
import User from "../models/UserModel.js"
import axios from "axios"

const tokenExpiration = 3 * 24 * 60 * 60 * 1000
const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: tokenExpiration })
}

export const signup = async (request, response, next) => {
    try {
        const { email, password, cep } = request.body
        if (!email || !password || !cep) {
            return response.status(400).send("Email, Password and CEP is required.")
        }

        const cepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        if (cepResponse.data.erro) {
            return response.status(400).send("Invalid CEP. Please provide a valid one.")
        }

        const user = await User.create({ email, password, address: cepResponse.data.logradouro})
        response.cookie("jwt", createToken(email, user.id), {
            tokenExpiration,
            secure: true,
            sameSite: "None"
        })

        return response.status(201).json({
            user: {
                id: user.id,
                email: user.email
            }
        })
    } catch (error) {
        console.log({ error })

        return response.status(500).send("Internal server error")
    }
}

export const login = async (request, response, next) => {
    try {
        const { email, password } = request.body
        if (!email || !password) {
            return response.status(400).send("Email and Password is required.")
        }
        const user = await User.findOne({ email })
        const auth = await compare(password, user.password)
        if (!user || !auth) {
            return response.status(404).message("User or Password is not correct.")
        }

        response.cookie("jwt", createToken(email, user.id), {
            tokenExpiration,
            secure: true,
            sameSite: "None"
        })

        return response.status(200).json({
            user: {
                id: user.id,
                email: user.email
            }
        })
    } catch (error) {
        console.log({ error })

        return response.status(500).send("Internal server error")
    }
}

export const getUserInfo = async (request, response, next) => {
    try {
        const userData = await User.findById(request.userId)
        if (!userData) {
            return response.status(404).send("User with given id not found.")
        }
        return response.status(200).json(
            {
                id: userData.id,
                email: userData.email
            })
    } catch (error) {
        console.log({ error })

        return response.status(500).send("Internal server error")
    }
}