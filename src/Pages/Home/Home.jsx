import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ShowCase, Title, DivMain } from "./HomeStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Assets/CSS/index.css";
import { useEffect, useState } from "react";
import CardOpen from "../../Components/CardOpen/CardOpen";
import { Cart } from "../../Components/Cart/Cart";
import EditProduct from "../../Components/EditProduct/EditProduct";

export default function Home() {
  const productCart = useSelector(({ cart }) => cart);
  const products = useSelector(({ products }) => products);
  const [product, setProduct] = useState("");
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [editProd, setEditProd] = useState(false);
  console.log("1 - " + (openCart && productCart.length !== 0));
  console.log("2 - " + (openCart));
  console.log("3 - " + (productCart.length !== 0));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    open
      ? (document.body.className = "cardOpen")
      : (document.body.className = "cardClose");
  }, [open]);

  function renderProduct(type) {
    return products.map(
      (product, index) =>
        product.category === type && (
          <ProductCard
            product={product}
            key={index}
            setOpen={setOpen}
            setProduct={setProduct}
          />
        )
    );
  }

  return (
    <DivMain>
      {open && <CardOpen product={product} setOpen={setOpen} />}
      {openCart && productCart.length !== 0 && (
        <Cart
          setOpenCart={setOpenCart}
          setEditProd={setEditProd}
          setProduct={setProduct}
        />
      )}
      {editProd && productCart.length > 0 && (
        <EditProduct product={product} setEditProd={setEditProd} setOpenCart={setOpenCart}  />
      )}
      <Header />

      <ShowCase>
        <Title>Em destaque!</Title>
        <Slider {...settings} style={{ margin: "0 0 2vh 0" }}>
          {renderProduct("Combo")}
        </Slider>
        <Title>Sanduíches</Title>
        {renderProduct("Sanduíches")}
        <Title>Bebidas</Title>
        {renderProduct("Bebidas")}
      </ShowCase>
      {productCart.length > 0 && (
        <Footer openCart={openCart} setOpenCart={setOpenCart} />
      )}
    </DivMain>
  );
}