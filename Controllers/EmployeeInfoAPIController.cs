using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using AwesomeAngularMVCApp.Models;

namespace AwesomeAngularMVCApp.Controllers
{
    public class EmployeeInfoAPIController : ApiController
    {
        private ApplicationDbContext context = new ApplicationDbContext();

        public EmployeeInfoAPIController()
        {
        }

        [Route("api/EmployeeInfoAPI/GetEmployeeInfo")]
        [HttpGet, HttpPost]
        public IQueryable<EmployeeInfo> GetEmployeeInfo()
        {
            return context.EmployeeInfo;

        }

        [Route("api/EmployeeInfoAPI/GetEmployeeInfo/{Id}")]
        [HttpGet, HttpPost]
        [ResponseType(typeof(EmployeeInfo))]
        public IHttpActionResult GetEmployeeInfo(int id)
        {
            EmployeeInfo employeeInfo = context.EmployeeInfo.Find(id);
            if (employeeInfo == null)
            {
                return NotFound();
            }
            return Ok(employeeInfo);
        }

        [Route("api/EmployeeInfoAPI/GetEmployeeInfo/{Id}")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeInfo(int id, EmployeeInfo employeeInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeInfo.Id)
            {
                return BadRequest();
            }

            context.Entry(employeeInfo).State = EntityState.Modified;

            try
            {
                context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("api/EmployeeInfoAPI/PostEmployeeInfo")]
        [HttpGet, HttpPost]
        [ResponseType(typeof(EmployeeInfo))]
        public IHttpActionResult PostEmployeeInfo(EmployeeInfo employeeInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.EmployeeInfo.Add(employeeInfo);
            context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employeeInfo.Id }, employeeInfo);
        }



        [Route("api/EmployeeInfoAPI/GetEmployeeInfo/{Id}")]
        [HttpDelete]
        [ResponseType(typeof(EmployeeInfo))]
        public IHttpActionResult DeleteEmployeeInfo(int id)
        {
            EmployeeInfo employeeInfo = context.EmployeeInfo.Find(id);
            if (employeeInfo == null)
            {
                return NotFound();
            }

            context.EmployeeInfo.Remove(employeeInfo);
            context.SaveChanges();

            return Ok(employeeInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeInfoExists(int id)
        {
            return context.EmployeeInfo.Count(e => e.Id == id) > 0;
        }
    }
}
