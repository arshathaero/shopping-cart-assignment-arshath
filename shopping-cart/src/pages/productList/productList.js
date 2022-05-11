import React, { useEffect, useState } from "react";
import ProductCard from "components/productCard/productCard";
import styles from "./productList.module.scss";
import Dropdown from "components/dropdown/dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductListStart,
  getCategoryStart,
} from "store/actions/productAction";
import { addToCartStart } from "store/actions/cartAction";
import Loader from "components/loader/loader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  const { id: categoryId } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.products.isLoading);
  const categoryList = useSelector((state) => state.products.categoryList);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getProductListStart());
    if (!categoryList?.length) {
      dispatch(getCategoryStart());
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryId) {
      const findCategory = categoryList.find(
        (element) => element.id === categoryId
      );
      setSelectedCategory(findCategory);
    }
  }, [categoryList]);

  useEffect(() => {
    if (selectedCategory) {
      setList(filterCatgory(selectedCategory?.id));
    } else {
      setList(productList);
    }
  }, [selectedCategory, productList]);

  function filterCatgory(selectedCategoryId) {
    const newArray = productList.filter(
      (element) => element.category === selectedCategoryId
    );
    return newArray;
  }

  const handleCategory = (category) => {
    if (selectedCategory.id === category.id) {
      setSelectedCategory("");
      navigate("/products");
    } else {
      setSelectedCategory(category);
      navigate("/products/" + category.id);
    }
  };

  const buyNowHandler = (product) => {
    dispatch(addToCartStart(product));
  };

  return loading ? (
    <div className={styles.loadingWrapper}>
      <Loader />
    </div>
  ) : (
    <div className={styles.productList}>
      <div className={styles.productList__menu}>
        <ul className={styles.productList__menu__categories}>
          {categoryList
            .sort((a, b) => a.order - b.order)
            ?.map((element) => (
              <li
                onClick={() => handleCategory(element)}
                className={`${styles.categories__category} ${
                  element.id === selectedCategory?.id &&
                  styles.categories__active
                }`}
                key={element.id}
              >
                {element.name}
              </li>
            ))}
        </ul>
        <Dropdown
          className={styles.productList__menu__categoryDropdown}
          options={categoryList}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          handleCategory={handleCategory}
        />
      </div>
      <div className={styles.productList__products}>
        {list?.length ? (
          list?.map((element) => (
            <ProductCard
              key={element.id}
              data={element}
              btnClick={() => buyNowHandler(element)}
            />
          ))
        ) : (
          <div className={styles.productList__noProduct}>
            <h2>No Product Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
