"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Check() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(99);
  const [discount, setDiscount] = useState(500);
  const [deliveryMethod, setDeliveryMethod] = useState("Delivery");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryMethod: "Delivery",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  // Fetch cart items from backend
  useEffect(() => {
    if (!token) {
      toast.error("Please login first to view your cart.");
      router.replace("/contact");
      return;
    }
    axios
      .get(`https://student-alliance-api.code4bharat.com/api/cart/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCartItems(res.data.items || []);
        // Calculate subtotal
        const calculatedSubtotal = (res.data.items || []).reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        setSubtotal(calculatedSubtotal);
      })
      .catch(() => {
        setCartItems([]);
        setSubtotal(0);
      });
  }, [token, user, router]);

  const total = subtotal + shippingFee - discount;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare order data as expected by your backend
      const orderData = {
        customerId: user._id, // Required for your model
        customerDetails: formData,
        orderDetails: {
          items: cartItems.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
          })),
          subtotal,
          shippingFee,
          discount,
          total,
          orderDate: new Date().toISOString(),
        },
        paymentStatus: "pending",
      };

      // Send order to backend
      const response = await axios.post(
        "https://student-alliance-api.code4bharat.com/api/orders",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        console.log("Order submitted successfully:", response.data);
        setSubmitStatus({
          success: true,
          message: "Order submitted successfully!",
          orderId: response.data.orderId,
        });
        // Optionally: clear cart, redirect, etc.
      } else {
        setSubmitStatus({
          success: false,
          message: response.data.message || "Failed to submit order",
        });
      }
    } catch (err) {
      setSubmitStatus({
        success: false,
        message:
          err.response?.data?.message ||
          "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 max-w-6xl mx-auto">
      {/* Checkout Form - Conditionally Rendered */}
      {showCheckoutForm ? (
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 bg-gradient-to-br from-indigo-900 to-purple-800 rounded-xl shadow-2xl text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Summary Section */}
              <div className="lg:order-2">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-6 text-yellow-300"
                >
                  Your Order
                </motion.h2>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded-lg border border-white/20 mr-3"
                        />
                        <div>
                          <p className="font-medium">{item.product.name}</p>
                          <span className="text-sm text-gray-300">
                            {item.quantity} ×{" "}
                            {formatCurrency(item.product.price)}
                          </span>
                        </div>
                      </div>
                      <span className="font-semibold text-yellow-300">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}

                  <div className="mt-4 space-y-3 pt-3 border-t border-white/10">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">
                        {formatCurrency(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-medium">
                        {formatCurrency(shippingFee)}
                      </span>
                    </div>
                    <div className="flex justify-between text-green-300">
                      <span>Discount</span>
                      <span className="font-medium">
                        -{formatCurrency(discount)}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2">
                      <span>Total</span>
                      <span className="text-yellow-300">
                        {formatCurrency(total)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Form Section */}
              <div className="lg:order-1">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-6 text-yellow-300"
                >
                  Billing Details
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4 mb-6"
                >
                  {["Delivery"].map((method) => (
                    <button
                      key={method}
                      className={`px-4 py-2 rounded-lg border ${
                        deliveryMethod === method
                          ? "bg-yellow-400 text-gray-900"
                          : "bg-white/10 text-white"
                      } hover:shadow-md transition`}
                      onClick={() => setDeliveryMethod(method)}
                      type="button"
                    >
                      {method}
                    </button>
                  ))}
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: "Full name", name: "name", type: "text" },
                    { label: "Email address", name: "email", type: "email" },
                    { label: "Phone number", name: "phone", type: "tel" },
                    { label: "Country", name: "Country", type: "text" },
                    { label: "Address", name: "Address", type: "text" },
                    { label: "City", name: "city", type: "text" },
                    { label: "State", name: "state", type: "text" },
                    { label: "ZIP Code", name: "zipCode", type: "text" },
                  ].map((field, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <label className="block text-sm font-medium text-white/80">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        className="mt-1 w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/20 text-white transition placeholder-white/50"
                        required
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    className="flex items-center gap-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="accent-yellow-400"
                    />
                    <label htmlFor="terms" className="text-sm text-white/80">
                      I agree to Terms and Conditions
                    </label>
                  </motion.div>

                  {submitStatus && (
                    <motion.div
                      className={`p-3 rounded-md ${
                        submitStatus.success
                          ? "bg-green-100 text-green-700"
                          : "bg-green-200 text-green-700"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {submitStatus.message}
                      {submitStatus.success && submitStatus.orderId && (
                        <div className="mt-2 text-sm">
                          Order ID: {submitStatus.orderId}
                        </div>
                      )}
                    </motion.div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={() => setShowCheckoutForm(false)}
                      className="w-full py-3 px-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Back to Cart
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? "Processing..." : "Complete Payment"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-gradient-to-br from-indigo-900 to-purple-800 text-white rounded-xl shadow-2xl flex flex-col justify-between border border-white/10 w-full lg:w-full"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Your Shopping Cart
              </span>
            </h3>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="mr-4 flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg border border-white/20"
                    />
                  </div>

                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <span className="text-sm text-gray-300">
                        {item.quantity}x
                      </span>
                    </div>
                    <span className="font-semibold text-yellow-300">
                      {formatCurrency(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 mt-6">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-300 transition-all"
                />
                <button className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 px-5 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all font-medium shadow-md hover:shadow-yellow-400/40 active:scale-95">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex justify-between border-b border-white/20 pb-3">
              <span>Subtotal</span>
              <span className="font-medium">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-3">
              <span>Shipping</span>
              <span className="font-medium">{formatCurrency(shippingFee)}</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-3 text-green-300">
              <span>Discount</span>
              <span className="font-medium">-{formatCurrency(discount)}</span>
            </div>
            <div className="flex justify-between font-bold text-2xl pt-3">
              <span>Total</span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                {formatCurrency(total)}
              </span>
            </div>

            <button
              onClick={() => setShowCheckoutForm(true)}
              className="w-full mt-6 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-yellow-400/40"
            >
              Proceed to Payment
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p className="text-sm text-gray-300">
                100% Secure Checkout - SSL Encrypted
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
