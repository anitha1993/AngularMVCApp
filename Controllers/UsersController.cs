using AwesomeAngularMVCApp.CustomFilters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AwesomeAngularMVCApp.Controllers
{
    public class UsersController : Controller
    {
        // [Authorize]
        [AuthLog]
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }
        
        [AuthLog(Roles = "Admin")]
        //[Authorize(Roles = "Admin")]
        public ActionResult AddNewUser()
        {
            return PartialView("AddUser");
        }

        // [Authorize(Roles ="Admin, Employee")]
        [AuthLog(Roles = "Admin, Employee")]
        // [AllowAnonymous]
        public ActionResult ShowUsers()
        {
            return PartialView("ShowUsers");
        }

        // [Authorize(Roles = "Admin")]
        [AuthLog(Roles = "Admin")]
        public ActionResult EditUser()
        {
            return PartialView("EditUser");
        }

        //[Authorize(Roles = "Admin")]
        [AuthLog(Roles = "Admin")]
        public ActionResult DeleteUser()
        {
            return PartialView("DeleteUser");
        }
    }
}