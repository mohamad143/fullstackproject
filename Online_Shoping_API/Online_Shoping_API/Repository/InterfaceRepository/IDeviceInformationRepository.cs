using Online_Shoping_API.Models;

namespace Online_Shoping_API.Repository.InterfaceRepository
{
    public interface IDeviceInformationRepository
    {
        List<DeviceInformation> GetDeviceInformations();
        DeviceInformation GetDeviceInformationById(int id);
        DeviceInformation GetDeviceInformationByBarcode(string barcode);
        void AddDeviceInformation(DeviceInformation deviceInformation);
        void UpdateDeviceInformation(DeviceInformation deviceInformation, DeviceInformation existingDeviceInformation);
        void RemoveDeviceInformation(DeviceInformation deviceInformation);
    }
}
