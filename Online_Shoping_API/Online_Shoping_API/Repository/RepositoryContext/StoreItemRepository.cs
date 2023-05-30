using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;

namespace Online_Shoping_API.Repository.RepositoryContext
{
    public class StoreItemRepository : IStoreItemRepository
    {
        private readonly Online_Shoping_APIContext _context;

        public StoreItemRepository(Online_Shoping_APIContext context)
        {
            _context = context;
        }

        public List<StoreItem> GetStoreItems()
        {
            return _context.TB_StoreItem.ToList();
        }

        public async Task<StoreItem> GetStoreItemById(int id)
        {
            return await _context.TB_StoreItem.FindAsync(id);
        }

        public StoreItem GetStoreItemByBarcode(string barcode)
        {
            return _context.TB_StoreItem.FirstOrDefault(x => x.Item_Barcode == barcode);
        }

        public void AddStoreItem(StoreItem storeItem)
        {
            _context.TB_StoreItem.Add(storeItem);
            _context.SaveChanges();
        }

        public void UpdateStoreItem(StoreItem storeItem,StoreItem existingstoreItem)
        {
            _context.Entry(existingstoreItem).CurrentValues.SetValues(storeItem);
            _context.SaveChanges();
        }

        public void RemoveStoreItem(StoreItem storeItem)
        {
            _context.TB_StoreItem.Remove(storeItem);
            _context.SaveChanges();
        }
    }
}
