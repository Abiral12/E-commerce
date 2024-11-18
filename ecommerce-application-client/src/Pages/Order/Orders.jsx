import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/config/apiConfig";
import Navbar from "../../Components/Customer/Navbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("/order/getall"); // Update this endpoint to match your backend
        if (response.data.success) {
          setOrders(response.data.allorder); // Adjust based on your backend response structure
        } else {
          setError("Failed to fetch orders.");
        }
      } catch (err) {
        setError("An error occurred while fetching orders.");
        err
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <Navbar/>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 shadow">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Order ID</th>
                <th className="border border-gray-200 px-4 py-2">Customer</th>
                <th className="border border-gray-200 px-4 py-2">Items</th>
                <th className="border border-gray-200 px-4 py-2">Total</th>
                <th className="border border-gray-200 px-4 py-2">Date</th>
                <th className="border border-gray-200 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    {order.id}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">{order.customer}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    {order.items.map((item) => (
                      <p key={item.id}>{item.name} (x{item.quantity})</p>
                    ))}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-right">
                    ${order.total}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
