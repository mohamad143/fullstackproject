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
    public class StoreItemsController : ControllerBase
    {
        private readonly Online_Shoping_APIContext _context;

        public StoreItemsController(Online_Shoping_APIContext context)
        {
            _context = context;
        }

        // GET: api/StoreItems
        [HttpGet]
        public List< StoreItem> GetStoreItem()

        {
            var iteams = _context.TB_StoreItem.ToList();
            return iteams;
        }

        // GET: api/StoreItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StoreItem>> GetStoreItem(int id)
        {
            var storeItem = await _context.TB_StoreItem.FindAsync(id);

            if (storeItem == null)
            {
                return NotFound();
            }

            return storeItem;
        }

        // POST: api/StoreItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public string PostStoreItem(StoreItem storeItem)
        {

            var storeItem1 = _context.TB_StoreItem.Where(x => x.Item_Barcode == storeItem.Item_Barcode).FirstOrDefault();
            if (storeItem1==null && storeItem.Item_Barcode!="") {
                _context.TB_StoreItem.Add(storeItem);
                _context.SaveChanges();
                return "item added";

            }
            else
            {
                return "error,you need to a new barcode";
            }



        }

        // DELETE: api/StoreItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStoreItem(int id)
        {
            var storeItem = await _context.TB_StoreItem.FindAsync(id);
            if (storeItem == null)
            {
                return NotFound();
            }

            _context.TB_StoreItem.Remove(storeItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StoreItemExists(int id)
        {
            return _context.TB_StoreItem.Any(e => e.ID == id);
        }
    }
}
