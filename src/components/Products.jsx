import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterProduct = (cat) => {
    setLoading(true);
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
    setTimeout(() => setLoading(false), 1000);
  };

  return loading ? (
    <div className="flex justify-center items-center " style={{ height: 500 }}>
      <div className="l-con">
        <div className="dot d-1"></div>
        <div className="dot d-2"></div>
        <div className="dot d-3"></div>
      </div>
    </div>
  ) : (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-4">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4 uppercase">
            Products
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex justify-center py-4 mb-2 ">
          <ul className="flex sm:justify-evenly justify-center flex-wrap w-9/12 sm:w-[600px] ">
            <li
              className="hover:text-blue-800 hover:underline cursor-pointer mx-2"
              onClick={() => {
                setLoading(true);
                setFilter(data);
                setTimeout(() => setLoading(false), 1000);
              }}
            >
              All
            </li>
            <li
              className="hover:text-blue-800 hover:underline cursor-pointer mx-2"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's clothing
            </li>
            <li
              className="hover:text-blue-800 hover:underline cursor-pointer mx-2"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's clothing
            </li>
            <li
              className="hover:text-blue-800 hover:underline cursor-pointer mx-2"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </li>
            <li
              className="hover:text-blue-800 hover:underline cursor-pointer mx-2"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap -m-4">
          {filter.map((product) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  className="block relative h-48 rounded overflow-hidden"
                  to={`product/${product.id}`}
                >
                  <img
                    alt="product"
                    className="object-contain object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title.substring(0, 20)}...
                  </h2>
                  <div className="flex justify-between pr-5">
                    <p className="mt-1">${product.price}</p>
                    <p className="mt-1">{product.rating.rate}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )
    </section>
  );
};

export default Products;
