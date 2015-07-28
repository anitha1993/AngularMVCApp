using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
//using AwesomeAngularMVCApp.Migrations;

namespace AwesomeAngularMVCApp.Models
{
    public class ApplicationUser : IdentityUser
    {

//        public int DepartmentId;
        public virtual Departments Department { get; set; }
        public int LoginCount { get; set; }
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
           // Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, Configuration>());
        }
        public DbSet<EmployeeInfo> EmployeeInfo { get; set; }
        public DbSet<Departments> Departments { get; set; }
        public static void Initialize()
        {
            UserManager<ApplicationUser> UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            RoleManager<IdentityRole> RoleManager = new RoleManager<IdentityRole>(new
                                     RoleStore<IdentityRole>(new ApplicationDbContext()));




            string name = "Admin";
            string password = "123456";
                    
            //Create Role Admin if it does not exist
            if (!RoleManager.RoleExists(name))
            {
                var roleresult = RoleManager.Create(new IdentityRole(name));
            }

            //Create User=Admin with password=123456
            var user = new ApplicationUser();
            user.UserName = name;

            var adminresult = UserManager.Create(user, password);

            //Add User Admin to Role Admin
            if (adminresult.Succeeded)
            {
                var result = UserManager.AddToRole(user.Id, name);
            }
        }
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        //public System.Data.Entity.DbSet<AwesomeAngularMVCApp.Models.ApplicationUser> ApplicationUsers { get; set; }

        //public override System.Data.Entity.DbSet<AwesomeAngularMVCApp.Models.ApplicationUser> Users { get; set; }

        // public System.Data.Entity.DbSet<AwesomeAngularMVCApp.Models.ApplicationUser> ApplicationUsers { get; set; }
    }
}