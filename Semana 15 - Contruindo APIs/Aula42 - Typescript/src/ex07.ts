type infosProduct = {
  name: string;
  price: number;
  classification: string;
  discountPrice?: number;
};

enum discountByCategory {
  summer = 5 / 100,
  winter = 10 / 100,
  bath = 4 / 100,
  underwear = 7 / 100,
}

const products: infosProduct[] = [
  {
    name: "Saia",
    price: 12,
    classification: "summer",
  },
  {
    name: "Cueca",
    price: 6,
    classification: "underwear",
  },
  {
    name: "Casaco de couro",
    price: 200,
    classification: "winter",
  },
  {
    name: "Biquini",
    price: 50,
    classification: "bath",
  },
  {
    name: "short",
    price: 35,
    classification: "summer",
  },
];

function checkingDiscount(products: infosProduct[]): void {
  const discountProducts = products.map((product) => {
    switch (product.classification) {
      case "summer":
        product.discountPrice = product.price - product.price * discountByCategory.summer;
        break;
      case "winter":
        product.discountPrice = product.price - product.price * discountByCategory.winter;
        break;
      case "bath":
        product.discountPrice = product.price - product.price * discountByCategory.bath;
        break;
      case "underwear":
        product.discountPrice = product.price - product.price * discountByCategory.underwear;
        break;
    }
    return product;
  });

  console.table(discountProducts);
}

checkingDiscount(products);
