export class UserService
{
    constructor(userRepo)
    {
        this.userRepo = userRepo;
    }

    async getAllUsers()
    {

    }

    async getUserByEmail(email)
    {

    }
    async getUserById(id)
    {

    }

    async addUser(data)
    {
        return data
        // return await this.userRepo.insert(data)
    }

    async updateUserByEmail(email, data)
    {

    }

    async updateUserById(Id, data)
    {

    }

    async removeUser(field)
    {

    }
}
