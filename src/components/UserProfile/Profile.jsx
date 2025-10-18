"use client";

import { useState, useEffect } from "react";
import { User, Edit3, Save, X, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const ProfilePage = () => {
  const token = useSelector((state) => state.auth.token);
  const userFromRedux = useSelector((state) => state.auth.user);
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (!token || !userFromRedux?._id) {
      toast.error("Please login first!");
      router.push("/contact");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `https://student-alliance-api.code4bharat.com/api/customers/${userFromRedux._id}`
        );
        setUser(res.data);
      } catch (err) {
        toast.error("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, userFromRedux, router]);

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    try {
      const res = await axios.put(
        `https://student-alliance-api.code4bharat.com/api/customers/${userFromRedux._id}`,
        formData
      );
      setUser(res.data.customer || res.data);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center mb-4 border-4 border-white border-opacity-30">
                    <User className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
                  <p className="text-indigo-100 text-sm">{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Profile Information
                  </h2>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit Profile
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 border-gray-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 border-gray-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 border-gray-200"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          name="address"
                          rows={4}
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 resize-none border-gray-200"
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-md font-medium"
                      >
                        <Save className="w-5 h-5" /> Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                      >
                        <X className="w-5 h-5" /> Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-500">Full Name</h3>
                      <p className="text-lg font-medium">{user.name}</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-500">Email</h3>
                      <p className="text-lg font-medium">{user.email}</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-500">Phone</h3>
                      <p className="text-lg font-medium">{user.phone}</p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-500">Address</h3>
                      <p className="text-lg font-medium">{user.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
