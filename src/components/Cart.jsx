import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotle] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.quantity * item.price)
    },0)
    setTotle(total)
  },[cart])

  if (!cart.length)
    return (
      <div className="w-full h-16 flex justify-center items-center text-3xl font-bold">
        Cart is Empty
      </div>
    );

  const increase = (p) => {
    const updateCart = cart.map((item) => {
      if (item.id === p.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/Cart");
  };

  const decrease = (p) => {
    const updateCart = cart.map((item) => {
      if (item.id === p.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/Cart");
  };

  const remHandle = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/Cart");
  };

  return (
    <div className="container flex flex-col justify-center items-center px-2">
      <div className="my-5">
        <h1 className=" font-black text-3xl">Your Cart</h1>
      </div>
      <div className="lg:w-11/12">
        <div className="flex items-center h-12 border-b bg-gray-300 rounded-md mb-2">
          <div className="w-full grid lg:grid-cols-7 grid-cols-5 h-full py-1">
            <div className="lg:col-span-4 col-span-2 flex items-center ml-1">
              <h3 className=" pl-1 font-extrabold ">Products</h3>
            </div>
            <div className="border-l border-gray-800 flex items-center">
              <h3 className=" pl-1 font-extrabold">Price</h3>
            </div>
            <div className="border-l border-gray-800 flex items-center">
              <h3 className=" pl-1 font-extrabold">Quantity</h3>
            </div>
            <div className="border-l border-gray-800 flex items-center">
              <h3 className=" pl-1 font-extrabold">Subtotal</h3>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md">
          {cart.map((item) => {
            return (
              <div className="flex flex-col justify-center ">
                <div className="w-full grid lg:grid-cols-7 grid-cols-5 py-1 ">
                  <div className="lg:col-span-4 col-span-2 flex items-center p-2 ">
                    <div className=" h-14 w-14 mr-5">
                      <img className="h-full" src={item.image} alt="p" />
                    </div>
                    <div className="flex flex-col justify-evenly">
                      <h1 className=" font-bold ">{item.title.substring(0,15)}...</h1>
                      <p
                        className=" text-xs text-red-600 mt-2 cursor-pointer font-semibold"
                        onClick={() => remHandle(item.id)}
                      >
                        remove
                      </p>
                    </div>
                  </div>
                  <div className="border-l border-gray-800 flex items-center">
                    <h3 className=" pl-2 font-extrabold">$ {item.price}</h3>
                  </div>
                  <div className="border-l border-gray-800 flex items-center px-2">
                    <button
                      onClick={() => decrease(item)}
                      className="inline-flex text-white font-extrabold bg-gray-400 border-0 py-0 px-2 focus:outline-none hover:bg-gray-500 rounded text-lg"
                    >
                      -
                    </button>
                    <h3 className=" pl-2 font-extrabold pr-2">
                      {item.quantity}
                    </h3>
                    <button
                      onClick={() => increase(item)}
                      className="inline-flex text-white font-bold bg-gray-400 border-0 py-0 px-2 focus:outline-none hover:bg-gray-500 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                  <div className="border-l border-gray-800 flex items-center">
                    <h3 className=" pl-2 font-extrabold">
                      $ {(item.price * item.quantity).toFixed(2)}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="w-full grid lg:grid-cols-7 grid-cols-5 py-1">
            <div className="lg:col-span-5 col-span-3 lg:flex flex-row items-center p-2 ">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className=" mr-2 w-60 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your promo code"
              />
              <button className=" lg:mt-0 mt-1 inline-flex text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
            <div className="flex items-center">
              <h3 className=" pl-2 font-extrabold text-lg">Subtotal</h3>
            </div>
            <div className="flex items-center">
              <h3 className=" pl-2 font-extrabold">$ {total.toFixed(2)}</h3>
            </div>
          </div>
          <div className="w-full h-10 grid lg:grid-cols-7 grid-cols-5 py-1">
            <div className="lg:col-span-5 col-span-3 flex items-center p-2 "></div>
            <div className="flex items-center">
              <h1 className=" pl-2 font-extrabold text-lg">Discount</h1>
            </div>
            <div className="flex items-center">
              <h1 className=" pl-2 font-extrabold">$ 0</h1>
            </div>
          </div>
          <div className="w-full h-10 grid lg:grid-cols-7 grid-cols-5 py-1">
            <div className="lg:col-span-5 col-span-3 flex items-center p-2 ml-1 ">
              <div className="mb-4 cursor-pointer ">
                <Link to="/products" className=" flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 100 100"
                    className=" h-6"
                  >
                    <polygon points="5,50 55,95 55,5" fill="black" />
                  </svg>
                  <span className=" font-bold text-xs ">Containue shopping</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className=" pl-2 font-extrabold text-lg">Total</h1>
            </div>
            <div className="flex items-center">
              <h1 className=" pl-2 font-extrabold">$ {total.toFixed(2)}</h1>
            </div>
          </div>
          <div className="w-full h-10 lg:grid grid-cols-7 py-2">
            <div className="lg:col-span-5 flex items-center p-2 "></div>
            <div className="flex items-center col-span-2 justify-end ">
              <button className="uppercase text-white bg-indigo-500 focus:outline-none hover:bg-indigo-600 py-2 px-3 rounded ">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
