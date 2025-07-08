"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const ProfilePage = () => {
  const token = useSelector((state) => state.auth.token);
  const userFromRedux = useSelector((state) => state.auth.user);
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !userFromRedux?._id) {
      toast.error("Please login first!");
      router.push("/contact");
      return;
    }

    const fetchProfileAndOrders = async () => {
      try {
        // Fetch user profile
        const profileRes = await axios.get(
          `https://student-alliance-api.code4bharat.com/api/customers/${userFromRedux._id}`
        );
        console.log(profileRes.data);
        setUser(profileRes.data);

        // Fetch user orders
        const ordersRes = await axios.get(
          `https://student-alliance-api.code4bharat.com/api/orders/customer/${userFromRedux._id}`
        );
        setOrders(ordersRes.data);
      } catch (err) {
        toast.error("Failed to fetch profile or orders");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndOrders();
  }, [token, userFromRedux, router]);

  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    try {
      const res = await axios.put(
        `https://student-alliance-api.code4bharat.com/api/customers/${userFromRedux._id}`,
        formData
      );
      setUser(res.data.customer || res.data); // Adjust based on your backend response
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const order = await axios.get(`https://student-alliance-api.code4bharat.com/api/orders`);
      console.log(order.data);
      setOrders(order.data);
    };

    fetchOrders();
  }, []);

  const handleCancel = async (orderId) => {
    try {

      const res = await axios.put(
        `https://student-alliance-api.code4bharat.com/api/orders/${orderId}/cancel`
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: "Cancelled" } : order
        )
      );
      toast.success("Order cancelled successfully!");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to cancel order. Try again."
      );
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <div className="flex flex-col sm:flex-row items-center">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-indigo-100">{user.email}</p>
                {!isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditing(true)}
                    className="mt-3 px-4 py-2 text-black bg-white bg-opacity-20 rounded-md text-sm font-medium hover:bg-opacity-30 transition"
                  >
                    Edit Profile
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "profile"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "orders"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                My Orders
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === "profile" ? (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Address
                          </label>
                          <textarea
                            name="address"
                            rows={3}
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save Changes
                        </motion.button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Full Name
                          </h3>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.name}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Email
                          </h3>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.email}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Phone
                          </h3>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.phone}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Address
                          </h3>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-lg font-medium text-gray-900">
                    Order History
                  </h2>
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No orders yet
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Your order history will appear here
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {orders.map((order) => (
                        <motion.div
                          key={order._id}
                          whileHover={{ y: -2 }}
                          className="bg-gray-50 rounded-lg p-6 shadow-sm"
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">
                                Order #{order._id}
                              </h3>
                              <p className="text-sm text-gray-500">
                                Placed on{" "}
                                {new Date(order.orderDate).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-500">
                                Payment: {order.paymentStatus}
                              </p>
                              <p className="text-sm text-gray-500">
                                Status: {order.orderStatus}
                              </p>
                            </div>
                            <div className="mt-3 sm:mt-0">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  order.orderStatus === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : order.orderStatus === "Cancelled"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {order.orderStatus}
                              </span>
                            </div>
                          </div>

                          {/* Order Items */}
                          <div className="mt-4 border-t border-gray-200 pt-4">
                            <ul className="space-y-4">
                              {order.items.map((item, idx) => (
                                <li
                                  key={item._id || item.product || idx}
                                  className="flex items-center"
                                >
                                  <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:justify-between">
                                    <div>
                                      <h5 className="text-sm font-medium text-gray-900">
                                        Product:{" "}
                                        {item.product?.name || item.product}
                                      </h5>
                                      <p className="text-sm text-gray-500">
                                        Qty: {item.quantity}
                                      </p>
                                    </div>
                                    {/* If you have price per item, show it here */}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Totals */}
                          <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div>
                              <p className="text-sm text-gray-500">
                                Subtotal: {order.subtotal}
                              </p>
                              <p className="text-sm text-gray-500">
                                Shipping: {order.shippingFee}
                              </p>
                              <p className="text-sm text-gray-500">
                                Discount: {order.discount}
                              </p>
                              <p className="text-lg font-medium text-gray-900">
                                Total: {order.total}
                              </p>
                            </div>
                            {order.orderStatus !== "Cancelled" &&
                              order.orderStatus !== "Delivered" && (
                                <button
                                  onClick={() => handleCancel(order._id)}
                                  className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 transition"
                                >
                                  Cancel Order
                                </button>
                              )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
