import { useEffect } from "react";
import { useState, useRef } from "react";
import { CartProductsContainer } from "../cart/Cartelements";

const LazyTrendig = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      console.log("el: ", el);
      console.log("entries: ", entries);
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(document.getElementById("cart-products-container"));
  }, []);

  return <div id="LazyTrending">{show ? <CartProductsContainer /> : null}</div>;
};

export default LazyTrendig;
