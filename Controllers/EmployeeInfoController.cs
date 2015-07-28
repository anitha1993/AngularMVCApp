using AwesomeAngularMVCApp.CustomFilters;
using System.Web.Mvc;

namespace AwesomeAngularMVCApp.Controllers
{
    public class EmployeeInfoController : Controller
    {
       // [Authorize]
       [AuthLog]
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }
        [AuthLog(Roles = "Admin, Employee")]
        public ActionResult EmployeeLanding()
        {
            return View();
        }

        [AuthLog(Roles = "Admin")]
        //[Authorize(Roles = "Admin")]
        public ActionResult AddNewEmployee()
        {
            return PartialView("AddEmployee");
        }

      // [Authorize(Roles ="Admin, Employee")]
        [AuthLog(Roles = "Admin, Employee")]
       // [AllowAnonymous]
        public ActionResult ShowEmployees()
        {
            return PartialView("ShowEmployees");
        }

       // [Authorize(Roles = "Admin")]
           [AuthLog(Roles = "Admin")]
        public ActionResult EditEmployee()
        {
            return PartialView("EditEmployee");
        }

        //[Authorize(Roles = "Admin")]
         [AuthLog(Roles = "Admin")]
        public ActionResult DeleteEmployee()
        {
            return PartialView("DeleteEmployee");
        }
    }
}