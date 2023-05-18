using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;

namespace Online_Shoping_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceInformationsController : ControllerBase
    {
        private readonly IDeviceInformationRepository _deviceInformationRepository;

        public DeviceInformationsController(IDeviceInformationRepository deviceInformationRepository)
        {
            _deviceInformationRepository = deviceInformationRepository;
        }

        [HttpGet]
        public ActionResult<List<DeviceInformation>> GetDeviceInformation()
        {
            var deviceInformations = _deviceInformationRepository.GetDeviceInformations();
            return Ok(deviceInformations);
        }

        [HttpGet("{id}")]
        public  ActionResult<DeviceInformation> GetDeviceInformation(int id)
        {
            var deviceInformation =  _deviceInformationRepository.GetDeviceInformationById(id);

            if (deviceInformation == null)
            {
                return NotFound();
            }

            return deviceInformation;
        }

        [HttpPut]
        public ActionResult<string> PutDeviceInformation(DeviceInformation deviceInformation)
        {
            var existingDeviceInformation = _deviceInformationRepository.GetDeviceInformationByBarcode(deviceInformation.Barcode);

            if (existingDeviceInformation != null && existingDeviceInformation.ID != null)
            {
               
                deviceInformation.ID = existingDeviceInformation.ID;
                _deviceInformationRepository.UpdateDeviceInformation(deviceInformation, existingDeviceInformation);
                return "done(:";
            }
            else if (existingDeviceInformation == null || existingDeviceInformation.ID != null)
            {
                _deviceInformationRepository.AddDeviceInformation(deviceInformation);
                return "Information added";
            }
            else
            {
                return "oops!!";
            }
        }

        [HttpPost]
        public async Task<ActionResult<string>> PostDeviceInformation(DeviceInformation deviceInformation)
        {
            var existingDeviceInformation = _deviceInformationRepository.GetDeviceInformationByBarcode(deviceInformation.Barcode);

            if (existingDeviceInformation == null && !string.IsNullOrEmpty(deviceInformation.Barcode))
            {
                _deviceInformationRepository.AddDeviceInformation(deviceInformation);
                return "Information added";
            }
            else
            {
                return "error, try next time";
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<string> DeleteDeviceInformation(int id)
        {
            var deviceInformation = _deviceInformationRepository.GetDeviceInformationById(id);

            if (deviceInformation == null)
            {
                return NotFound();
            }

            _deviceInformationRepository.RemoveDeviceInformation(deviceInformation);
            return "removed";
        }
    }

}
