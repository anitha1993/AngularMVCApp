namespace AwesomeAngularMVCApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUsers", "Department_Id", "dbo.Departments");
            DropIndex("dbo.AspNetUsers", new[] { "Department_Id" });
            AddColumn("dbo.EmployeeInfoes", "DepartmentId", c => c.Int(nullable: false));
            CreateIndex("dbo.EmployeeInfoes", "DepartmentId");
            AddForeignKey("dbo.EmployeeInfoes", "DepartmentId", "dbo.Departments", "Id", cascadeDelete: true);
            DropColumn("dbo.EmployeeInfoes", "DeptName");
            DropColumn("dbo.AspNetUsers", "Department_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "Department_Id", c => c.Int());
            AddColumn("dbo.EmployeeInfoes", "DeptName", c => c.String());
            DropForeignKey("dbo.EmployeeInfoes", "DepartmentId", "dbo.Departments");
            DropIndex("dbo.EmployeeInfoes", new[] { "DepartmentId" });
            DropColumn("dbo.EmployeeInfoes", "DepartmentId");
            CreateIndex("dbo.AspNetUsers", "Department_Id");
            AddForeignKey("dbo.AspNetUsers", "Department_Id", "dbo.Departments", "Id");
        }
    }
}
