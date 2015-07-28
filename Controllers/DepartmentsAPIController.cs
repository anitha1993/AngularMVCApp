using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using AwesomeAngularMVCApp.Models;

namespace AwesomeAngularMVCApp.Controllers
{
    public class DepartmentsAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();


        [Route("api/DepartmentsAPI/GetDepartments")]
        [HttpGet, HttpPost]
        public IQueryable<Departments> GetDepartments()
        {
            return db.Departments;
        }

        [Route("api/DepartmentsAPI/GetDepartments/{Id}")]
        [HttpGet, HttpPost]
        [ResponseType(typeof(Departments))]
        public IHttpActionResult GetDepartments(int id)
        {
            Departments departments = db.Departments.Find(id);
            if (departments == null)
            {
                return NotFound();
            }

            return Ok(departments);
        }

        [Route("api/DepartmentsAPI/GetDepartments/{Id}")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDepartments(int id, Departments departments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != departments.Id)
            {
                return BadRequest();
            }

            db.Entry(departments).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentsExists(id))
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
        
        [Route("api/DepartmentsAPI/PostDepartments")]
        [HttpPost]
        [ResponseType(typeof(Departments))]
        public IHttpActionResult PostDepartments(Departments departments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Departments.Add(departments);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = departments.Id }, departments);
        }

        [Route("api/DepartmentsAPI/GetDepartments/{Id}")]
        [HttpDelete]
        [ResponseType(typeof(Departments))]
        public IHttpActionResult DeleteDepartments(int id)
        {
            Departments departments = db.Departments.Find(id);
            if (departments == null)
            {
                return NotFound();
            }

            db.Departments.Remove(departments);
            db.SaveChanges();

            return Ok(departments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentsExists(int id)
        {
            return db.Departments.Count(e => e.Id == id) > 0;
        }
    }
}