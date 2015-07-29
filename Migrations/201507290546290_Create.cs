namespace AwesomeAngularMVCApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Create : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.EmployeeInfoes", "EmpName", c => c.String(nullable: false));
            AlterColumn("dbo.EmployeeInfoes", "DeptName", c => c.String(nullable: false));
            AlterColumn("dbo.EmployeeInfoes", "Designation", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.EmployeeInfoes", "Designation", c => c.String());
            AlterColumn("dbo.EmployeeInfoes", "DeptName", c => c.String());
            AlterColumn("dbo.EmployeeInfoes", "EmpName", c => c.String());
        }
    }
}
