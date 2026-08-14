import React, { useEffect, useState } from "react";
import { FaTrash, FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Backend se cart ke items fetch karna
  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // 2. Cart se item delete karne ka function
  const removeItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // State update karke UI se turant hatana
        setCartItems(cartItems.filter((item) => item._id !== id));
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-white">Loading Cart...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
          <FaShoppingBag className="text-rose-500" /> Your Shopping Bag
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900/40 border border-white/10 rounded-3xl backdrop-blur-xl">
            <p className="text-zinc-400 text-lg">Your cart is currently empty.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-zinc-900/40 border border-white/10 p-4 sm:p-6 rounded-2xl backdrop-blur-xl"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-rose-500 font-black mt-1">{item.price}</p>
                  
                  <div className="flex gap-4 mt-2 text-xs text-zinc-400">
                    <span>Size: <strong className="text-white">{item.size || "Standard"}</strong></span>
                    <span>Quantity: <strong className="text-white">{item.quantity}</strong></span>
                  </div>
                </div>

                {/* Delete / Remove Button */}
                <button
                  onClick={() => removeItem(item._id)}
                  className="p-3 bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white rounded-xl transition-all cursor-pointer"
                  title="Remove Item"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;