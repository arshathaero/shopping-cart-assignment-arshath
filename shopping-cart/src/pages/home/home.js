import React from "react";
import offer1 from "assets/images/offers/offer1.jpg";
import offer2 from "assets/images/offers/offer2.jpg";
import offer3 from "assets/images/offers/offer3.jpg";
import offer4 from "assets/images/offers/offer4.jpg";
import offer5 from "assets/images/offers/offer5.jpg";
import baby from "assets/images/category/baby.png";
import bakery from "assets/images/category/bakery.png";
import beauty from "assets/images/category/beauty.png";
import beverages from "assets/images/category/beverages.png";
import fruits from "assets/images/category/fruits.png";

import Carousal from "components/carousal/carousal";
import CategoryCard from "components/categoryCard/categoryCard";
import styles from "./home.module.scss";
import ShadowDivider from "components/shadowDivider/shadowDivider";
const Home = () => {
  const offerBanner = [offer1, offer2, offer3, offer4, offer5];

  const categoryData = [
    {
      img: fruits,
      title: "Fruits & Vegetables",
      description: "A variety of fresh fruits and vegetables.",
      buttonName: "Explore fruit-and-veg",
      buttonClick: () => null,
      align: "left",
    },
    {
      img: bakery,
      title: "Bakery Cakes and Dairy",
      description:
        "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
      buttonName: "Explore bakery-cakes-dairy",
      buttonClick: () => null,
      align: "right",
    },
    {
      img: beverages,
      title: "Beverages",
      description:
        "Our beverage department will emsure your fridge is always fully stocked. Shop for soda, juice, beer and more.",
      buttonName: "Explore beverages",
      buttonClick: () => null,
      align: "left",
    },
    {
      img: beauty,
      title: "Beauty and Hygiene",
      description:
        "Buy beauty and personal care products online in india at best prices.",
      buttonName: "Explore beauty-hygiene",
      buttonClick: () => null,
      align: "right",
    },
    {
      img: baby,
      title: "Baby Care",
      description: "Shop online for Products, Diaper, Skin Care Products etc.",
      buttonName: "Explore baby",
      buttonClick: () => null,
      align: "left",
    },
  ];
  return (
    <div className={styles.home}>
      <section className={styles.home__offer}>
        <Carousal items={offerBanner} delay={2000} />
      </section>
      <section className={styles.home__category}>
        {categoryData?.map((element, index) => (
          <div className={styles.home__category__categoryWrapper} key={index}>
            <CategoryCard item={element} />
            {index < categoryData?.length - 1 && <ShadowDivider />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
