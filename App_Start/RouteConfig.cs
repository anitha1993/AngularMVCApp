using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AwesomeAngularMVCApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "EmployeeInfo", action = "Index", id = UrlParameter.Optional});
            //                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional });

            //routes.MapRoute(
            //    name: "Register",
            //    url: "account/register",
            //    defaults: new { controller = "Account", action = "Register" });

            //routes.MapRoute(
            //   name: "ShowEmployees",
            //   url: "EmployeeInfo/ShowEmployees",
            //   defaults: new { controller = "EmployeeInfo", action = "ShowEmployees" });
            //routes.MapRoute(
            //              name: "AddEmployee",
            //              url: "EmployeeInfo/AddEmployee",
            //              defaults: new { controller = "EmployeeInfo", action = "AddNewEmployee" });


            //routes.MapRoute(
            //    name: "Login",
            //    url: "Account/Login",
            //    defaults: new { controller = "Account", action = "Login" });

            //routes.MapRoute(
            //name: "EmployeeInfoIndex",
            //url: "EmployeeInfo/Index",
            //defaults: new { controller = "EmployeeInfo", action = "Index" });

            //routes.MapRoute(
            //name: "GetDepartmentsList",
            //url: "Account/GetDepartmentsList",
            //defaults: new { controller = "Account", action = "GetDepartmentsList" });

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{*url}",
            //    defaults: new { controller = "Home", action = "Index" });

        }
    }
}
