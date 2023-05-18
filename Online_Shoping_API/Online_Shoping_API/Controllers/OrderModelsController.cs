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
    public class OrderModelsController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrderModelsController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        // GET: api/OrderModels
        [HttpGet]
        public List<OrderModel> OrderModels()
        {
            var orders = _orderRepository.GetOrders();
            return orders;
        }

        // GET: api/OrderModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderModel>> GetOrderModel(int id)
        {
            var orderModel = _orderRepository.GetOrderById(id);

            if (orderModel == null)
            {
                return NotFound();
            }

            return orderModel;
        }

        // PUT: api/OrderModels/5
        [HttpPut("{id}")]
        public IActionResult PutOrderModel(int id)
        {
            var orderModel = _orderRepository.GetOrderById(id);

            if (orderModel == null)
            {
                return NotFound();
            }

            if (orderModel.Order_Status == "false")
            {
                orderModel.Order_Status = "true";
                _orderRepository.UpdateOrder(orderModel);
            }

            return Ok("Done");
        }

        // POST: api/OrderModels
        [HttpPost]
        public IActionResult PostOrderModel(OrderModel orderModel)
        {
            _orderRepository.AddOrder(orderModel);
            return Ok();
        }

        // DELETE: api/OrderModels/5
        [HttpDelete("{id}")]
        public IActionResult DeleteOrderModel(int id)
        {
            var orderModel = _orderRepository.GetOrderById(id);

            if (orderModel == null)
            {
                return NotFound();
            }

            _orderRepository.DeleteOrder(id);
            return NoContent();
        }
    }
}

