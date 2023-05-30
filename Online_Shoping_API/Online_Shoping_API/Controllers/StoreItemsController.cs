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
    public class StoreItemsController : ControllerBase
    {
        private readonly IStoreItemRepository _storeItemRepository;

        public StoreItemsController(IStoreItemRepository storeItemRepository)
        {
            _storeItemRepository = storeItemRepository;
        }

        [HttpGet]
        public List<StoreItem> GetStoreItem()
        {
            return _storeItemRepository.GetStoreItems();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StoreItem>> GetStoreItem(int id)
        {
            var storeItem = await _storeItemRepository.GetStoreItemById(id);

            if (storeItem == null)
            {
                return NotFound();
            }

            return storeItem;
        }

        [HttpPut]
        public string PutStoreItem(StoreItem storeItem)
        {
            var existingstoreItem = _storeItemRepository.GetStoreItemByBarcode(storeItem.Item_Barcode);
            if (existingstoreItem != null)
            {
                storeItem.ID = existingstoreItem.ID;
                _storeItemRepository.UpdateStoreItem(storeItem, existingstoreItem);
                return "done(:";
            }
            else
            {
                return "store item not found";
            }
        }

        [HttpPost]
        public string PostStoreItem(StoreItem storeItem)
        {
            var existingStoreItem = _storeItemRepository.GetStoreItemByBarcode(storeItem.Item_Barcode);
            if (existingStoreItem == null && storeItem.Item_Barcode != "")
            {
                _storeItemRepository.AddStoreItem(storeItem);
                return "item added";
            }
            else
            {
                return "error, you need to use a new barcode";
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStoreItem(int id)
        {
            var storeItem = await _storeItemRepository.GetStoreItemById(id);
            if (storeItem == null)
            {
                return NotFound();
            }

            _storeItemRepository.RemoveStoreItem(storeItem);
            return NoContent();
        }
    }
}
