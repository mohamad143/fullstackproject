using Microsoft.EntityFrameworkCore;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;
using Online_Shoping_API.Repository.InterfaceRepository;
using Online_Shoping_API.Data;
using Online_Shoping_API.Models;


namespace Online_Shoping_API.Repository.RepositoryControllers
{

    namespace Online_Shoping_API.Repositories
    {

        public class OrderRepository : IOrderRepository
        {
            private readonly Online_Shoping_APIContext _context;

            public OrderRepository(Online_Shoping_APIContext context)
            {
                _context = context;
            }

            public List<OrderModel> GetOrders()
            {
                return _context.TB_Order.ToList();
            }

            public OrderModel GetOrderById(int id)
            {
                return _context.TB_Order.Find(id);
            }

            public void AddOrder(OrderModel order)
            {
                _context.TB_Order.Add(order);
                _context.SaveChanges();
            }

            public void UpdateOrder(OrderModel order)
            {
                _context.Entry(order).State = EntityState.Modified;
                _context.SaveChanges();
            }

            public void DeleteOrder(int id)
            {
                var order = _context.TB_Order.Find(id);
                if (order != null)
                {
                    _context.TB_Order.Remove(order);
                    _context.SaveChanges();
                }
            }
        }
    }

}