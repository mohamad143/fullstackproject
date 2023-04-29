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
    public class OrderModelsController : ControllerBase
    {
        private readonly Online_Shoping_APIContext _context;

        public OrderModelsController(Online_Shoping_APIContext context)
        {
            _context = context;
        }

        // GET: api/OrderModels
        [HttpGet]
        public List<OrderModel> GetOrderModel()
        {
            return  _context.TB_Order.ToList();
        }

        // GET: api/OrderModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderModel>> GetOrderModel(int id)
        {
            var orderModel = await _context.TB_Order.FindAsync(id);

            if (orderModel == null)
            {
                return NotFound();
            }

            return orderModel;
        }

        // PUT: api/OrderModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public string PutOrderModel(int id)
        {


            var order = _context.TB_Order.Where(x => x.ID == id).FirstOrDefault();
            if (order != null)
            {
               
                if (order.Order_Status == "false")
                {
                    order.Order_Status = "true";
                    var neworder = (OrderModel)order;
                    _context.Update(neworder).State = EntityState.Modified;
                }

                _context.SaveChanges();


                return "done(:";
            }
            else
            {
                return "user not found";
            }




        }

        // POST: api/OrderModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public void PostOrderModel(OrderModel orderModel)

        {
            OrderModel orderModel1=new OrderModel();
            orderModel1.ID = orderModel.ID;
            orderModel1.Order_Email = orderModel.Order_Email;
            orderModel1.Order_Price = orderModel.Order_Price;
            orderModel1.Order_Items= orderModel.Order_Items;
            orderModel1.Order_Location = orderModel.Order_Location;
            orderModel1.Order_Date = orderModel.Order_Date;
            orderModel1.User_ID= orderModel.User_ID;
            orderModel1.Order_Status= orderModel.Order_Status;
            _context.TB_Order.Add(orderModel1);
            _context.SaveChanges();
            

            
        }

        // DELETE: api/OrderModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderModel(int id)
        {
            var orderModel = await _context.TB_Order.FindAsync(id);
            if (orderModel == null)
            {
                return NotFound();
            }

            _context.TB_Order.Remove(orderModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderModelExists(int id)
        {
            return _context.TB_Order.Any(e => e.ID == id);
        }
    }
}
