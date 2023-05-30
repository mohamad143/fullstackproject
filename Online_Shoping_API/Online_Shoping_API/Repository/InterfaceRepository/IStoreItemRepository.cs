using Online_Shoping_API.Models;

namespace Online_Shoping_API.Repository.InterfaceRepository
{
    public interface IStoreItemRepository
    {
        List<StoreItem> GetStoreItems();
        Task<StoreItem> GetStoreItemById(int id);
        StoreItem GetStoreItemByBarcode(string barcode);
        void AddStoreItem(StoreItem storeItem);
        void UpdateStoreItem(StoreItem storeItem, StoreItem existingstoreItem);
        void RemoveStoreItem(StoreItem storeItem);
    }
}
