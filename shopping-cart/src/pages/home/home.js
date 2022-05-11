import React, { useEffect } from "react";

import Carousal from "components/carousal/carousal";
import CategoryCard from "components/categoryCard/categoryCard";
import styles from "./home.module.scss";
import ShadowDivider from "components/shadowDivider/shadowDivider";
import { useDispatch, useSelector } from "react-redux";
import { getBannerStart, getCategoryStart } from "store/actions/productAction";
import Loader from "components/loader/loader";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.products.bannerList);
  const loading = useSelector((state) => state.products.isLoading);
  const categoryList = useSelector((state) => state.products.categoryList);

  useEffect(() => {
    dispatch(getBannerStart());
    dispatch(getCategoryStart());
  }, []);


  const categoryNavigateHandler= (category) =>{
    navigate('/products/'+category.id)
  }

  return (
    <div className={styles.home}>
      {loading ? (
        <div className={styles.home__loadingWrapper}>
          <Loader />
        </div>
      ) : (
        <>
          {" "}
          <section className={styles.home__offer}>
            <Carousal items={bannerList} delay={3000} />
          </section>
          <section className={styles.home__category}>
            {categoryList
              ?.sort((a, b) => a.order - b.order)
              .map((element, index) =>
                element?.imageUrl ? (
                  <div
                    className={styles.home__category__categoryWrapper}
                    key={index}
                  >
                    <CategoryCard categoryNavigateHandler={()=>categoryNavigateHandler(element)} item={element} />
                    {index < categoryList?.length - 1 && <ShadowDivider />}
                  </div>
                ) : null
              )}
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
