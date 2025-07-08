"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      toast.error("Please login first to view your cart.");
      router.replace("/contact");
      return;
    }

    const fetchCartItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://student-alliance-api.code4bharat.com/api/cart/${user._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        
        const data = await response.json();
        
        // Validate and normalize cart items with unique keys
        const validatedItems = (data.items || []).map((item, index) => {
          const product = item.product || {};
          return {
            ...item,
            // Create a unique key combining product ID and index as fallback
            key: product._id ? `${product._id}-${index}` : `item-${index}`,
            product: {
              _id: product._id || `temp-${index}`,
              name: product.name || 'Unnamed Product',
              price: product.price || 0,
              originalPrice: product.originalPrice || null,
              description: product.description || '',
              image: product.image || '/placeholder-product.jpg'
            },
            quantity: item.quantity || 1
          };
        });
        
        setCartItems(validatedItems);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
        setCartItems([]);
        toast.error("Failed to load cart items");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [token, user, router]);

  const shippingFee = 199;
  const freeShippingThreshold = 999;

  const handleQuantityChange = (id, amount) => {
    const updatedCart = cartItems.map((item) =>
      item.product._id === id
        ? { 
            ...item, 
            quantity: Math.max(1, (item.quantity || 1) + amount) 
          }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.product._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const applyCoupon = () => {
    if (!subtotal) return;
    
    if (couponCode.toUpperCase() === "PETLOVER10") {
      setDiscount(subtotal * 0.1);
      setShowCouponInput(false);
      toast.success("10% discount applied!");
    } else if (couponCode.toUpperCase() === "FREESHIP") {
      setDiscount(shippingFee);
      setShowCouponInput(false);
      toast.success("Free shipping applied!");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.product?.price || 0) * (item.quantity || 1),
    0
  );

  const total =
    subtotal + (subtotal >= freeShippingThreshold ? 0 : shippingFee) - discount;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4 text-black md:p-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative">
          <h1 className="text-2xl font-bold px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
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
            Your Shopping Cart (
            {cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0)} items)
          </h1>
          {cartItems.length > 0 && (
            <button
              onClick={() => {
                setCartItems([]);
                localStorage.setItem("cart", JSON.stringify([]));
                toast.success("Cart cleared successfully");
              }}
              className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors text-sm flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Clear Cart
            </button>
          )}
        </div>

        <div className="p-4 md:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4 animate-bounce">😕</div>
              <h2 className="text-xl font-semibold">Your cart feels lonely</h2>
              <p className="text-gray-500 mt-2">
                Your pet deserves the best! Fill your cart with goodies.
              </p>
              <Link href={"/shop1"}>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:from-orange-600 hover:to-pink-600  hover:scale-105 transform transition-transform duration-300 flex items-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.key}
                    className="flex flex-col md:flex-row items-center justify-between p-4 mb-4 border border-gray-100 hover:border-orange-200 hover:shadow-sm rounded-lg transition-all duration-200 bg-white"
                  >
                    <div className="flex items-center w-full md:w-auto">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-lg mr-4 border border-gray-200"
                        onError={(e) => {
                          e.target.src = "/placeholder-product.jpg";
                        }}
                      />
                      <div className="flex-1">
                        <h2 className="font-bold text-lg hover:text-orange-500 transition-colors">
                          {item.product.name}
                        </h2>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {item.product.description}
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="text-orange-500 font-bold">
                            {formatCurrency(item.product.price)}
                          </span>
                          {item.product.originalPrice && (
                            <>
                              <span className="line-through text-gray-400 ml-2 text-sm">
                                {formatCurrency(item.product.originalPrice)}
                              </span>
                              <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
                                {Math.round(
                                  (1 -
                                    item.product.price /
                                      item.product.originalPrice) *
                                    100
                                )}
                                % OFF
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0">
                      <div className="flex items-center mr-6 md:mr-8">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product._id, -1)
                          }
                          className="px-3 py-1 bg-gray-100 rounded-l-full hover:bg-gray-200 transition-colors active:scale-95 text-gray-700"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-50 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product._id, 1)
                          }
                          className="px-3 py-1 bg-gray-100 rounded-r-full hover:bg-gray-200 transition-colors active:scale-95 text-gray-700"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center">
                        <span className="font-bold mr-4 text-lg">
                          {formatCurrency(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product._id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
                          aria-label="Remove item"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0)}{" "}
                  items)
                </span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {subtotal >= freeShippingThreshold ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    formatCurrency(shippingFee)
                  )}
                </span>
              </div>

              {subtotal < freeShippingThreshold && (
                <div className="text-sm text-center py-2 bg-orange-50 text-orange-700 rounded-lg">
                  Spend {formatCurrency(freeShippingThreshold - subtotal)} more
                  to get <span className="font-bold">FREE shipping</span>!
                </div>
              )}

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount Applied</span>
                  <span className="font-medium">
                    -{formatCurrency(discount)}
                  </span>
                </div>
              )}

              {showCouponInput ? (
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    className="px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500 flex-1"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => setShowCouponInput(false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Coupon / Discount</span>
                  <button
                    onClick={() => setShowCouponInput(true)}
                    className="text-orange-500 hover:text-orange-600 underline transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                    {discount > 0 ? "Change coupon" : "Apply coupon code"}
                  </button>
                </div>
              )}

              <div className="border-t pt-3 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-orange-500">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href={{
                pathname: "/checkout",
                query: { cart: JSON.stringify(cartItems) },
              }}
            >
              <button className="w-full mt-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
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
                Proceed to Checkout
              </button>
            </Link>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-500 space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Delivery expected in 2-4 business days
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                Free returns within 15 days
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}