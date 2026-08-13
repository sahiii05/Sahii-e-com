import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaCheckCircle,
} from "react-icons/fa";

const ProductDetails = () => {
  const images = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700",
    "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=700",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700",
  ];

  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white border" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Red", class: "bg-red-600" },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(0);
  const [message, setMessage] = useState("");

  const addToCart = () => {
    setCart(cart + quantity);
    setMessage("✔ Product Added To Cart Successfully");
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT */}

        <div>

          <div className="overflow-hidden rounded-2xl shadow-xl">

            <img
              src={mainImage}
              alt=""
              className="w-full h-[600px] object-cover hover:scale-110 duration-500 cursor-zoom-in"
            />

          </div>

          <div className="flex gap-4 mt-5">

            {images.map((img, i) => (

              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 rounded-lg object-cover cursor-pointer border-2 duration-300
                ${
                  mainImage === img
                    ? "border-black scale-105"
                    : "border-gray-300 hover:border-black"
                }`}
              />

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <p className="text-red-600 font-semibold uppercase">
            Premium Collection
          </p>

          <h1 className="text-5xl font-bold mt-2">
            Premium Oversized T-Shirt
          </h1>

          <div className="flex items-center gap-4 mt-5">

            <span className="text-4xl font-bold text-red-600">
              £39
            </span>

            <span className="text-2xl text-gray-400 line-through">
              £59
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              34% OFF
            </span>

          </div>

          <div className="flex items-center mt-4">

            ⭐⭐⭐⭐⭐

            <span className="ml-3 text-gray-500">
              (245 Reviews)
            </span>

          </div>

          <p className="mt-6 text-gray-600 leading-8">

            Premium cotton oversized t-shirt with soft breathable
            fabric and relaxed fit. Perfect for daily casual wear.

          </p>

          {/* SIZE */}

          <div className="mt-8">

            <h3 className="font-bold mb-3">
              Select Size
            </h3>

            <div className="flex gap-3">

              {sizes.map((size) => (

                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-lg border transition
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>

          {/* COLOR */}

          <div className="mt-8">

            <h3 className="font-bold mb-3">
              Select Color
            </h3>

            <div className="flex gap-4">

              {colors.map((color) => (

                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full ${color.class}
                  ${
                    selectedColor === color.name
                      ? "ring-4 ring-orange-500"
                      : ""
                  }`}
                ></button>

              ))}

            </div>

            <p className="mt-3 text-gray-500">
              Selected :
              <span className="font-semibold ml-2">
                {selectedColor}
              </span>
            </p>

          </div>

          {/* QUANTITY */}

          <div className="mt-8">

            <h3 className="font-bold mb-3">
              Quantity
            </h3>

            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
                className="bg-gray-200 px-4 py-2 rounded-lg text-xl"
              >
                -
              </button>

              <span className="text-xl font-bold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="bg-gray-200 px-4 py-2 rounded-lg text-xl"
              >
                +
              </button>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={addToCart}
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800"
            >
              Add To Cart ({cart})
            </button>

            <button className="border border-black px-8 py-4 rounded-lg hover:bg-black hover:text-white">
              Buy Now
            </button>

            <button
              onClick={() =>
                setWishlist(!wishlist)
              }
              className="border px-5 rounded-lg hover:bg-red-50"
            >
              {wishlist ? (
                <FaHeart
                  className="text-red-500 text-2xl"
                />
              ) : (
                <FaRegHeart
                  className="text-2xl"
                />
              )}
            </button>

          </div>

          {message && (

            <div className="bg-green-100 text-green-700 mt-6 p-4 rounded-lg font-semibold">
              {message}
            </div>

          )}

          {/* STOCK */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">

              <FaCheckCircle className="text-green-600"/>

              <span className="text-green-700 font-semibold">
                In Stock
              </span>

            </div>

            <div className="flex items-center gap-3">

              <FaTruck/>

              <span>
                Free Delivery in 3-5 Days
              </span>

            </div>

            <div className="flex items-center gap-3">

              <FaUndo/>

              <span>
                7 Days Easy Return
              </span>

            </div>

            <div className="flex items-center gap-3">

              <FaShieldAlt/>

              <span>
                Secure Payments
              </span>

            </div>

          </div>

          {/* OFFER */}

          <div className="mt-10 bg-orange-50 border border-orange-300 rounded-xl p-5">

            <h3 className="font-bold text-orange-600">
              Today's Offer
            </h3>

            <p className="mt-2 text-gray-700">
              Apply Coupon
              <span className="font-bold text-red-600">
                SAVE20
              </span>
              &nbsp;to get extra 20% OFF.
            </p>

          </div>

        </div>

      </div>
      {/* ====================== PRODUCT TABS ====================== */}

<div className="mt-20">

  <div className="border-b flex gap-8 text-lg font-semibold">

    <button className="border-b-2 border-black pb-3">
      Description
    </button>

    <button className="text-gray-500 hover:text-black pb-3">
      Reviews
    </button>

    <button className="text-gray-500 hover:text-black pb-3">
      Shipping
    </button>

  </div>

  <div className="mt-8">

    <h2 className="text-2xl font-bold mb-5">
      Product Description
    </h2>

    <p className="text-gray-600 leading-8">
      Experience premium comfort with our oversized cotton
      T-Shirt. Crafted from 100% breathable cotton, this
      T-shirt offers a relaxed fit that is perfect for
      everyday wear. The soft fabric keeps you comfortable
      throughout the day while maintaining a stylish,
      modern look.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-10">

      <div>

        <h3 className="font-bold text-xl mb-4">
          Features
        </h3>

        <ul className="space-y-3 text-gray-600">

          <li>✔ 100% Premium Cotton</li>

          <li>✔ Breathable Fabric</li>

          <li>✔ Soft Touch Material</li>

          <li>✔ Fade Resistant</li>

          <li>✔ Oversized Fit</li>

          <li>✔ Lightweight</li>

          <li>✔ Stretchable Fabric</li>

        </ul>

      </div>

      <div>

        <h3 className="font-bold text-xl mb-4">
          Specifications
        </h3>

        <table className="w-full">

          <tbody>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Fabric
              </td>

              <td>
                Cotton
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Sleeve
              </td>

              <td>
                Half Sleeve
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Fit
              </td>

              <td>
                Oversized
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Neck
              </td>

              <td>
                Round Neck
              </td>
            </tr>

            <tr>
              <td className="py-3 font-semibold">
                Country
              </td>

              <td>
                India
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</div>

{/* ====================== CUSTOMER REVIEWS ====================== */}

<div className="mt-24">

  <h2 className="text-3xl font-bold mb-8">
    Customer Reviews
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        name: "Rahul",
        rating: "⭐⭐⭐⭐⭐",
        review:
          "Excellent quality. Fabric feels premium and very comfortable.",
      },

      {
        name: "Aman",
        rating: "⭐⭐⭐⭐⭐",
        review:
          "Worth every penny. Perfect oversized fitting.",
      },

      {
        name: "Priya",
        rating: "⭐⭐⭐⭐",
        review:
          "Loved the colour and stitching quality.",
      },

    ].map((item, index) => (

      <div
        key={index}
        className="border rounded-xl p-6 shadow-sm hover:shadow-xl duration-300"
      >

        <h3 className="font-bold text-lg">
          {item.name}
        </h3>

        <p className="my-3">
          {item.rating}
        </p>

        <p className="text-gray-600 leading-7">
          {item.review}
        </p>

      </div>

    ))}

  </div>

</div>

{/* ====================== RELATED PRODUCTS ====================== */}

<div className="mt-24">

  <h2 className="text-3xl font-bold mb-8">
    Related Products
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {images.map((img, i) => (

      <div
        key={i}
        className="group border rounded-xl overflow-hidden hover:shadow-xl duration-300"
      >

        <div className="overflow-hidden">

          <img
            src={img}
            alt=""
            className="h-72 w-full object-cover group-hover:scale-110 duration-500"
          />

        </div>

        <div className="p-5">

          <h3 className="font-bold">
            Premium T-Shirt
          </h3>

          <p className="text-gray-500 mt-2">
            Casual Wear
          </p>

          <div className="flex justify-between items-center mt-4">

            <span className="text-red-600 font-bold text-xl">
              £39
            </span>

            <button
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              View
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

{/* ====================== RECENTLY VIEWED ====================== */}

<div className="mt-24">

  <h2 className="text-3xl font-bold mb-8">
    Recently Viewed
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {images.map((img, i) => (

      <div
        key={i}
        className="rounded-xl overflow-hidden border hover:shadow-lg duration-300"
      >

        <img
          src={img}
          className="h-60 w-full object-cover"
          alt=""
        />

        <div className="p-4">

          <h4 className="font-semibold">
            Casual Oversized Tee
          </h4>

          <p className="text-red-600 font-bold mt-2">
            £35
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

{/* ====================== NEWSLETTER ====================== */}

<div className="mt-24 bg-black rounded-2xl text-white p-12 text-center">

  <h2 className="text-4xl font-bold">
    Get Latest Offers
  </h2>

  <p className="mt-4 text-gray-300">
    Subscribe to receive exclusive deals and new arrivals.
  </p>

  <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">

    <input
      type="email"
      placeholder="Enter your email"
      className="px-5 py-4 rounded-lg text-black w-full md:w-96 outline-none"
    />

    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold">
      Subscribe
    </button>

  </div>

</div>

    </section>
  );
};

export default ProductDetails;