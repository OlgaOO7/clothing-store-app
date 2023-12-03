import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Modal } from './Modal/Modal';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { SimilarProducts } from './SimilarProducts/SimilarProducts';
import { AdditionalInformation } from './AdditionalInformation/AdditionalInformation';
import { ColorOptions } from './ColorOptions/ColorOptions';
import { SizeOptions } from './SizeOptions/SizeOptions';
import { QuantityControls } from './QuantityControls/QuantityControls';
import { ProductImage } from './ProductImage/ProductImage';
import { SizeGridproducts } from './SizeGridProducts/SizeGridproducts';

import {
  Container,
  Title,
  Money,
  Text,
  SizeGridButton,
  BuyButton,
  ImageWrap,
  SliderList,
  InfoWrap,
  ProductWrap,
  SizeWrap,
  TextQuantity,
  InfoMessage,
} from './Product.styled';

export const Product = ({ productsId }) => {
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [clickedIndex, setClickedIndex] = useState(0); // велике фото
  const [colorValue, setColorValue] = useState(null);
  const [activeSizeId, setActiveSizeId] = useState(null);
  const [skuIdProduct, setSkuIdProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState(null);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // Продукт
    const getProductId = async () => {
      try {
        const { data } = await axios.get(`/products/${productsId}`);
        setProduct(data);

        const { value } = data.skuSet[0].characteristics.find(
          ({ characteristic }) => characteristic.title === 'color'
        );
        setColorValue(value);

        const { availableQuantity } = data.skuSet[0];
        setAmount(availableQuantity);
      } catch (error) {
        console.error('Помилка:', error);
      }
    };

    // аналогічні продукти
    const getSimilarProductId = async () => {
      try {
        const { data } = await axios.get(
          `/products/similar_products/${productsId}`
        );
        setSimilarProducts(data);
      } catch (error) {
        console.error('Помилка:', error);
      }
    };
    getProductId();
    getSimilarProductId();
  }, [productsId]);

  // Loder
  if (
    !product ||
    product.length === 0 ||
    !similarProducts ||
    similarProducts.length === 0
  ) {
    return <div>Loading...</div>;
  }

  // Отримання унікальних кольорів
  const uniqueColors = Array.from(
    new Set(
      product.skuSet.flatMap(({ characteristics }) =>
        characteristics
          .filter(({ characteristic }) => characteristic.title === 'color')
          .map(({ value }) => value)
      )
    )
  );

  //фільтр фото по кольору
  const filterPhoto = product.photos.filter(
    item => item.colorValue === colorValue
  );

  // активний розмір
  const selectSize = (id, skuId) => {
    if (id === activeSizeId) {
      setActiveSizeId(null);
      setSkuIdProduct(null);
    } else {
      setActiveSizeId(id);
      setSkuIdProduct(skuId);
    }
  };

  // Розміри, що відповідають обраному кольору
  const sizesForSelectedColor = product.skuSet.filter(({ characteristics }) =>
    characteristics.some(
      ({ characteristic, value }) =>
        characteristic.title === 'color' && value === colorValue
    )
  );

  // відкриття модалки
  const toggleModal = () => setOpenModal(prevState => !prevState);

  // дававання та зменшення кількості товару
  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(prevState => prevState - 1);
    setMessage(false);
  };

  const increaseQuantity = () => {
    if (amount > quantity) {
      setQuantity(prevState => prevState + 1);
      setMessage(false);
    } else {
      setMessage(true);
    }
  };

  //додавання в кошик
  const addToCart = () => {
    if (!skuIdProduct) {
      alert('Виберіть розмір!');
      return;
    }

    const productToBasket = {
      sessionId: productsId,
      skuId: skuIdProduct,
      price: product.price.value,
      quantity,
      amount: product.price.value * quantity,
    };

    console.log(productToBasket);
  };

  // console.log(filterPhoto);
  // console.log(product);
  // console.log(similarProducts.content);

  return (
    <>
      <Container>
        <Breadcrumbs category={product.category} />
        <ProductWrap>
          <ImageWrap>
            {/* photo */}
            <ProductImage
              filterPhoto={filterPhoto}
              clickedIndex={clickedIndex}
            />
            {/* слайдер */}
            {filterPhoto.length > 1 && (
              <SliderList>
                <ImageSlider
                  photos={filterPhoto}
                  renderPhotos={setClickedIndex}
                />
              </SliderList>
            )}
          </ImageWrap>

          {/* info */}
          <InfoWrap>
            <Title>{product.title}</Title>
            <Money>
              {product.price.value} {product.price.currency.code}
            </Money>
            <Text>{product.description}</Text>
            {/* Кольори */}
            <ColorOptions
              uniqueColors={uniqueColors}
              colorValue={colorValue}
              setClickedIndex={setClickedIndex}
              setColorValue={setColorValue}
            />
            <SizeWrap>
              {/* Розміри */}

              <SizeOptions
                sizesForSelectedColor={sizesForSelectedColor}
                selectSize={selectSize}
                activeSizeId={activeSizeId}
              />

              {/* відкрити модалку */}
              <SizeGridButton onClick={toggleModal}>
                Розмірна сітка
              </SizeGridButton>
            </SizeWrap>

            {/* кількіcть */}
            {amount <= 0 ? (
              <TextQuantity>Немає в наявності</TextQuantity>
            ) : (
              <div>
                <QuantityControls
                  decreaseQuantity={decreaseQuantity}
                  increaseQuantity={increaseQuantity}
                  quantity={quantity}
                />
                {message && (
                  <InfoMessage>
                    Дана кількість цього товару недоступна
                  </InfoMessage>
                )}
              </div>
            )}

            {/* додати в кошик */}
            <BuyButton type="button" onClick={addToCart} disabled={amount <= 0}>
              Додати в кошик
            </BuyButton>

            {/* додаткова інформація */}
            <AdditionalInformation />
          </InfoWrap>
        </ProductWrap>

        {/* схожі товари */}
        {similarProducts.content.length !== 0 && (
          <SimilarProducts
            setQuantity={setQuantity}
            similarProducts={similarProducts}
            setClickedIndex={setClickedIndex}
          />
        )}
      </Container>

      {/* модалка */}
      {openModal && (
        <Modal toggleModal={toggleModal} openModal={openModal}>
          <SizeGridproducts />
        </Modal>
      )}
    </>
  );
};
