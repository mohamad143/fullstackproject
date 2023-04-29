using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;

namespace Online_Shoping_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceInformationsController : ControllerBase
    {
        private readonly Online_Shoping_APIContext _context;

        public DeviceInformationsController(Online_Shoping_APIContext context)
        {
            _context = context;
        }

        // GET: api/DeviceInformations
        [HttpGet]
        public List<DeviceInformation> GetDeviceInformation()
        {
         
            return  _context.TB_Device_Information.ToList();
        }

        // GET: api/DeviceInformations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeviceInformation>> GetDeviceInformation(int id)
        {
          if (_context.TB_Device_Information == null)
          {
              return NotFound();
          }
            var deviceInformation = await _context.TB_Device_Information.FindAsync(id);

            if (deviceInformation == null)
            {
                return NotFound();
            }

            return deviceInformation;
        }

       

        // POST: api/DeviceInformations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public string PostDeviceInformation(DeviceInformation deviceInformation)
        {
            var deviceInformation1 = _context.TB_Device_Information?.Where(x => x.Barcode == deviceInformation.Barcode).FirstOrDefault();
            if (deviceInformation1 ==null&& deviceInformation.Barcode!="")
            {
                _context.TB_Device_Information?.Add(deviceInformation);
                _context.SaveChanges();
                return "Information added";
            }
            else {
                return "error,try next time";

            }
           

            
        }

        // DELETE: api/DeviceInformations/5
        [HttpDelete("{id}")]
        public string DeleteDeviceInformation(int id)

        {
            var deviceInformation = _context.TB_Device_Information?.Find(id);
            if(deviceInformation != null) {
                _context.TB_Device_Information?.Remove(deviceInformation);
                _context.SaveChanges();
                return "removed";
            }
            else {
                return "no Information";

            }

           


        }

        private bool DeviceInformationExists(int id)
        {
            return (_context.TB_Device_Information?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
