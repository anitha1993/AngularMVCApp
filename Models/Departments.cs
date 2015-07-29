using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace AwesomeAngularMVCApp.Models
{
    public class Departments
    {
        public int Id { get; set; }


        [DisplayName("Department Name")]
        [Required(ErrorMessage = "Department Name is Required")]
        public string Name { get; set; }

       // public virtual List<EmployeeInfo> EmployeeInfo{ get; set; }

    }
}
