namespace AwesomeAngularMVCApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class rollback : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.EmployeeInfoes", "Department_Id", c => c.Int());
            CreateIndex("dbo.EmployeeInfoes", "Department_Id");
            AddForeignKey("dbo.EmployeeInfoes", "Department_Id", "dbo.Departments", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.EmployeeInfoes", "Department_Id", "dbo.Departments");
            DropIndex("dbo.EmployeeInfoes", new[] { "Department_Id" });
            DropColumn("dbo.EmployeeInfoes", "Department_Id");
        }
    }
}
