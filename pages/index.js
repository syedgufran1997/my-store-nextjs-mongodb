import React from "react";
// import Link from "next/link";

const Home = ({ products }) => {
  const productList = products.map((product) => {
    return (
      <div className="card" key={product._id}>
        <div className="card-image">
          <img src={product.mediaUrl} />
          <span className="card-title">{product.name}</span>
        </div>
        <div className="card-content">
          <p>RS {product.price}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link </a>
        </div>
      </div>
    );
  });

  console.log(products);
  return <div className="rootcard">{productList}</div>;
};

export async function getStaticProps() {
  const res = await fetch("http://localHost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
}
export default Home;
