import AppError from '../utils/AppError.js'

export class UserService
{
    constructor(userRepo)
    {
        this.userRepo = userRepo;
    }

    async getUserByEmail(email)
    {
        const user = await this.userRepo.findOne({ email })
        if (!user)
            throw new AppError('user not found', 404);
        return user;
    }

    async addUser(data)
    {
        return await this.userRepo.insert(data)
    }

    async updateUserByEmail(loggedUser, email, data)
    {
        const user = this.userRepo.findOne({ email })
        if (!user)
            throw new AppError('user not found', 404);
        if (user.email != loggedUser.email)
            throw new AppError('you are not allowed to do such operation', 403);
        try {
            await this.userRepo.update({ email }, data);
        } catch (error) {
            throw new AppError('not a valid data', 401);
        }
    }
    
    async removeUser(field)
    {
        const user = this.userRepo.findOne({ email })
        if (!user)
            throw new AppError('user not found', 404);
        if (user.email != loggedUser.email)
            throw new AppError('you are not allowed to do such operation', 403);
        await this.userRepo.delete({ email });
    }
}
