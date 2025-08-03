export class UserController
{
    constructor(fastify, userService)
    {
        this.fastify = fastify
        this.userService = userService
    }

    async getUser(req, res)
    {
        await this.fastify.authenticate(req)
        const { email } = req.body
        const user = await this.userService.getUserByEmail(email)
        res.send({ user })
    }
    
    async addUser(req, res)
    {
        const body = JSON.parse(req.body)
        const {firstName,lastName,email,password,gender,dob} = body
        const user = await this.userService.addUser({
            first_name: firstName,
            last_name: lastName,
            gender,
            dob,
            email,
            password,
        });
        res.status(201).send(user);
    }

    async updateUser(req, res)
    {
        await this.fastify.authenticate(req)
        await this.userService.updateUserByEmail(req.user, req.body.email, req.body.data);
        res.send({ message: 'updated successfully' })
    }

    async deleteUser(req, res)
    {
        await this.fastify.authenticate(req)
        await this.userService.removeUser(req.user, req.body.email);
        res.send({ message: 'user deleted successfully' })
    
    }
}
