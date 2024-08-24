import User from "../models/UserModel.js"

export const searchContact = async (request, response, next) => {
    try {
        const { searchTerm } = request.body

        if (searchTerm === undefined || searchTerm === null) {
            return response.status(400).send("Search term is required.")
        }

        const contacts = await User.find({
            $and: [
                { _id: { $ne: request.userId } },
                {
                    $or: [{ firstName: searchTerm}, { email: searchTerm}, { lastName: searchTerm}]
                }
            ]
        })

        return response.status(200).json({ contacts })
    } catch (error) {
        console.log({ error })

        return response.status(500).send("Internal server error")
    }
}