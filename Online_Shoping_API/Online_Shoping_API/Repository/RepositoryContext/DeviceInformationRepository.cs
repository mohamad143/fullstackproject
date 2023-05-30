using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;

namespace Online_Shoping_API.Repository.RepositoryContext
{
    public class DeviceInformationRepository : IDeviceInformationRepository
    {
        private readonly Online_Shoping_APIContext _context;

        public DeviceInformationRepository(Online_Shoping_APIContext context)
        {
            _context = context;
        }

        public List<DeviceInformation> GetDeviceInformations()
        {
            return _context.TB_Device_Information.ToList();
        }

        public  DeviceInformation GetDeviceInformationById(int id)
        {
            return  _context.TB_Device_Information.Find(id);
        }

        public DeviceInformation GetDeviceInformationByBarcode(string barcode)
        {
            return _context.TB_Device_Information.FirstOrDefault(x => x.Barcode == barcode);
        }

        public void AddDeviceInformation(DeviceInformation deviceInformation)
        {
            _context.TB_Device_Information.Add(deviceInformation);
            _context.SaveChanges();
        }

        public void UpdateDeviceInformation(DeviceInformation deviceInformation, DeviceInformation existingDeviceInformation)
        {
            _context.Entry(existingDeviceInformation).CurrentValues.SetValues(deviceInformation);
            _context.SaveChanges();
        }

        public void RemoveDeviceInformation(DeviceInformation deviceInformation )
        {    
            _context.TB_Device_Information.Remove(deviceInformation);
            _context.SaveChanges();
            
        }
    }

}
