using System.ComponentModel.DataAnnotations.Schema;

namespace AwesomeAngularMVCApp.Models
{
    public class EmployeeInfo
    {
       
        public int Id { get; set; }
        public string EmpName { get; set; }
        public string Salary { get; set; }
        public string DeptName { get; set; }
        public string Designation { get; set; }

        //[ForeignKey(DepartmentId)]
        //public int DepartmentId { get; set; }
        public virtual Departments Department { get; set; }

    }
}
