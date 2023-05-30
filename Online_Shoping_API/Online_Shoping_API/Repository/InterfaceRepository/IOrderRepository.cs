using Online_Shoping_API.Models;

namespace Online_Shoping_API.Repository.InterfaceRepository
{
    public interface IOrderRepository
    {
        List<OrderModel> GetOrders();
        OrderModel GetOrderById(int id);
        void AddOrder(OrderModel order);
        void UpdateOrder(OrderModel order);
        void DeleteOrder(int id);
    }
}
