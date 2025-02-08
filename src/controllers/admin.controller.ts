import AdminService from "../services/admin.service"

export class AdminController{
    private readonly adminService: AdminService

    static create(req,res){
        return this.adminService.create(req.body)
    }


}