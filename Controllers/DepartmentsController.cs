using AwesomeAngularMVCApp.CustomFilters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AwesomeAngularMVCApp.Controllers
{
    [Authorize]
    public class DepartmentsController : Controller
    {
       
        
        // GET: Departments
        public ActionResult Index()
        {
            return View();
        }
        [AllowAnonymous]

        [AuthLog(Roles = "Admin")]
        //[Authorize(Roles = "Admin")]
        public ActionResult AddNewDepartment()
        {
            return PartialView("AddDepartment");
        }

        [AuthLog(Roles = "Admin, Employee")]

        //[Authorize(Roles = "Admin, Employee")]
        public ActionResult ShowDepartments()
        {
            return PartialView("ShowDepartments");
        }
        [AuthLog(Roles = "Admin, Employee")]
        //[Authorize(Roles = "Admin, Employee")]
        public ActionResult EditDepartment()
        {
            return PartialView("EditDepartment");
        }
        [AuthLog(Roles = "Admin")]
        //[Authorize(Roles = "Admin")]
        public ActionResult DeleteDepartment()
        {
            return PartialView("DeleteDepartment");
        }
    }
}

