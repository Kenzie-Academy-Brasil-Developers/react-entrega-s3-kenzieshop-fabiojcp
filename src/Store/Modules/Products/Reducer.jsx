const products = [
  {
    qnt: 1,
    id: 1,
    name: "Hamburguer",
    bio: "Hambúrguer grelhado na brasa, queijo prato, alface, tomate e maionese caseira no pão de hambúrguer",
    category: "Sanduíches",
    price: 14,
    img: "https://i.imgur.com/Vng6VzV.png",
  },
  {
    qnt: 1,
    id: 2,
    name: "Cheddar",
    bio: "Hambúrguer grelhado na brasa, lascas de cebola assada, maionese caseira e queijo cheddar derretido no pão de hambúrguer",
    category: "Sanduíches",
    price: 16,
    img: "https://i.imgur.com/eEzZzcF.png",
  },
  {
    qnt: 1,
    id: 3,
    name: "CalaBacon",
    bio: "Hambúrguer de calabresa toscana grelhada na brasa, bacon, queijo prato, alface, tomate e maionese caseira no pão de hambúrguer.",
    category: "Sanduíches",
    price: 18,
    img: "https://i.imgur.com/soOUeeW.png",
  },
  {
    qnt: 1,
    id: 4,
    name: "X-Picanha",
    bio: "Hambúrguer de picanha grelhado na brasa, queijo prato, alface, tomate e maionese caseira no pão de hambúrguer",
    category: "Sanduíches",
    price: 18,
    img: "https://i.imgur.com/eEzZzcF.png",
  },
  {
    qnt: 1,
    id: 5,
    name: "Fanta Guaraná Lata",
    bio: "",
    category: "Bebidas",
    price: 5,
    img: "https://i.imgur.com/YuIbfCi.png",
  },
  {
    qnt: 1,
    id: 6,
    name: "Coca-Cola Lata",
    bio: "",
    category: "Bebidas",
    price: 4.99,
    img: "https://i.imgur.com/KC2ihEN.png",
  },
  {
    qnt: 1,
    id: 7,
    name: "Milkshake Ovomaltine",
    category: "Bebidas",
    bio: "",
    price: 8.99,
    img: "https://i.imgur.com/iNkD4Pq.png",
  },
  {
    id: 8,
    name: "Picanha Shake",
    bio: "X-Picanha com nosso especial MilkShake Ovomaltine",
    category: "Combo",
    price: 25,
    img: "https://i.imgur.com/VeITgIx.png",
  },
  {
    qnt: 1,
    id: 9,
    name: "Burguer&coquinha",
    bio: "Hamburguer Tradicional com uma coca lata",
    category: "Combo",
    price: 16,
    img: "https://i.imgur.com/Q6fpmPw.png",
  },
  {
    qnt: 1,
    id: 9,
    name: "Cheddar&Guaraná",
    bio: "Cheddar com um guaraná lata",
    category: "Combo",
    price: 16,
    img: "https://i.imgur.com/5kzLcdU.png",
  },
];

const productsReducer = (state = products, action) => {
  return state;
};
export default productsReducer;
