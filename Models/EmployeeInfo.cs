using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AwesomeAngularMVCApp.Models
{
    public class EmployeeInfo
    {

        public int Id { get; set; }

        [Required(ErrorMessage = "Employee Name is Required")]
        public string EmpName { get; set; }
        public string Salary { get; set; }

        [Required(ErrorMessage = "Department Name is Required")]
        public string DeptName { get; set; }

        [Required(ErrorMessage = "Designation is Required")]
        public string Designation { get; set; }

        //[ForeignKey(DepartmentId)]
        //public int DepartmentId { get; set; }
        public virtual Departments Department { get; set; }

    }
}
