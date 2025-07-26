export class UserController
{
    constructor(fastify, userService)
    {
        this.userService = userService
    }

    getUser(req, res)
    {

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
        return res.status(201).send(user);
    }
    
    updateUser(req, res)
    {
    
    }
    
    deleteUser(req, res)
    {
    
    }
    
}
