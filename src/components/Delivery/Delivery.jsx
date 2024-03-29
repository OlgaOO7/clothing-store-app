import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { nanoid } from '@reduxjs/toolkit';

import Sprite from '../../images/sprite.svg';

import {
  ElipsRadio,
  InputStyle,
  Item,
  LabelStyle,
  List,
  Message,
  NameRadio,
  WrapForm,
  WrapInput,
  WrapList,
  WrapRadio,
  WrapTitle,
  Text,
  Icon,
} from './Delivery.styled';
import { Title, ElipsTitle } from 'components/OrderForm/OrderForm.styled';

const APIKEY = '4cfd344a4e40e9fab712995825eeaef4';

export const Delivery = ({ register, setValue, errors, formStatus }) => {
  const [searchCityName, setSearchCityName] = useState('');
  const [searchCities, setSearchCities] = useState([]);
  const [dropdownCityVisible, setDropdownCityVisible] = useState(false);
  const [dropdownWarehouseVisible, setDropdownWarehouseVisible] =
    useState(false);

  const [searchWarehouses, setSearchWarehouses] = useState('');
  const [warehouseSearchType, setWarehouseSearchType] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  const [massegeCity, setMassegeCity] = useState({
    messege: 'Loading...',
    error: false,
  });
  const [massegeWarehous, setMassegeWarehous] = useState({
    messege: 'Loading...',
    error: false,
  });

  useEffect(() => {
    if (formStatus === 'success') {
      setSearchCityName('');
      setSearchWarehouses('');
    }
  }, [formStatus]);

  const handleСityName = async () => {
    try {
      const requestData = {
        apiKey: APIKEY,
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
          Page: '1',
          CityName: searchCityName,
          Limit: '120',
        },
      };

      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (data.success) {
        const addresses = data.data[0].Addresses;
        setSearchCities(addresses);
      } else {
        setSearchCities([]);
        throw new Error(data.errors[0]);
      }
    } catch (error) {
      console.error(error);
      setMassegeCity({
        messege: 'Місто не знайдено! Перевірте правильність написання',
        error: true,
      });
    }
  };

  useEffect(() => {
    if (searchCityName.length === 0) {
      setWarehouseSearchType('');
      setWarehouses([]);
      setSearchWarehouses('');
      setMassegeWarehous({
        messege: 'Виберіть місто для перегляду відділень',
        error: true,
      });
      setMassegeCity({
        messege: 'Місто не знайдено! Перевірте правильність написання',
        error: true,
      });
    } else {
      handleСityName();
      setMassegeWarehous({
        messege: 'Loading...',
        error: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCityName]);

  const handleSearchTextChange = throttle(e => {
    const value = e.target.value;
    setSearchCityName(value.trim());

    if (value.length > 0) {
      setDropdownCityVisible(true);
    } else {
      setDropdownCityVisible(false);
    }
  }, 300);

  const handleWarehousesChange = async () => {
    try {
      const requestData = {
        apiKey: APIKEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: warehouseSearchType,
          Limit: '500',
          TypeOfWarehouseRef: '841339c7-591a-42e2-8233-7a0a00f0ed6f',
        },
      };

      if (searchWarehouses) {
        requestData.methodProperties.WarehouseRef = searchWarehouses;
      }

      const response = await fetch(
        'https://api.novaposhta.ua/v2.0/json/Address',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setWarehouses(data.data);
      }
    } catch (error) {
      console.error(
        'Помилка запиту до API Нової Пошти для населених пунктів',
        error
      );
    }
  };

  const handleCitySelect = (city, deliveryCity) => {
    setDropdownCityVisible(false);
    setSearchWarehouses('');
    setSearchCityName(`${city}`);
    setWarehouseSearchType(deliveryCity);
    setValue('city', city);
  };

  const handleSearchTextChangeWarehose = throttle(e => {
    const value = e.target.value;
    setSearchWarehouses(value);
    setDropdownWarehouseVisible(true);

    if (searchCityName.length === 0 || value.length === 0) {
      setDropdownWarehouseVisible(false);
      setWarehouses([]);
      setMassegeWarehous({
        messege: 'Виберіть місто для перегляду відділень',
        error: true,
      });
    }
  }, 300);

  const handleWarehouseSelect = warehouse => {
    setSearchWarehouses(`${warehouse}`);
    setDropdownWarehouseVisible(false);
    setValue('warehouse', warehouse);
  };
  useEffect(() => {
    if (warehouseSearchType) {
      // handleСityName();
      handleWarehousesChange();
    } else if (searchCities.length === 0) {
      setTimeout(() => {
        setMassegeWarehous({
          messege: 'Виберіть назву міста!',
          error: true,
        });
      }, 2000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWarehouses, searchCities.length]);

  // const handleFormSubmit = async e => {
  //   e.preventDefault();

  //   setIsSubmitting(true);
  //   if (!searchCityName || !searchWarehouses) {
  //     setPlaceholder(true);

  //     setIsSubmitting(false);
  //     return;
  //   } else if (searchWarehouses !== nameWarehous) {
  //     setPlaceholder(true);
  //     setSearchWarehouses('');
  //     setIsSubmitting(false);
  //     return;
  //   }
  //   const dataToSendWarehouse = `${searchCityName}, ${searchWarehouses}`;
  //   console.log(dataToSendWarehouse);

  //   // setIsSubmitting(false);
  // };
  return (
    <>
      <WrapTitle>
        <ElipsTitle>2</ElipsTitle>
        <Title>Інформація про доставку</Title>
      </WrapTitle>
      <WrapRadio>
        <ElipsRadio />
        <NameRadio>Доставка Новою поштою</NameRadio>
      </WrapRadio>
      <div>
        <WrapForm>
          <WrapInput>
            <LabelStyle htmlFor="city">Оберіть місто доставки *</LabelStyle>
            <div style={{ position: 'relative' }}>
              <InputStyle
                type="text"
                id="city"
                name="city"
                {...register('city')}
                autoComplete="off"
                placeholder="Оберіть місто доставки"
                $error={errors['city']}
                value={searchCityName}
                onChange={handleSearchTextChange}
                onClick={() => {
                  !searchCityName === '' && setDropdownCityVisible(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setDropdownCityVisible(false);
                  }, 200);
                }}
              />
              {dropdownCityVisible ? (
                <Icon>
                  <use href={`${Sprite}#icon-vector-14`} />
                </Icon>
              ) : (
                <Icon>
                  <use href={`${Sprite}#icon-vector-13`} />
                </Icon>
              )}
            </div>
            {dropdownCityVisible && (
              <WrapList>
                <List $error={massegeCity.error}>
                  {searchCities.length === 0 ? (
                    <Item>
                      <Message $error={massegeCity.error}>
                        {massegeCity.messege}
                      </Message>
                    </Item>
                  ) : (
                    searchCities.map(searchCity => (
                      <Item
                        key={nanoid()}
                        onClick={() => {
                          handleCitySelect(
                            searchCity.Present,
                            searchCity.DeliveryCity
                          );
                        }}
                      >
                        <Text>{searchCity.Present},</Text>
                      </Item>
                    ))
                  )}
                </List>
              </WrapList>
            )}
          </WrapInput>
          <WrapInput>
            <LabelStyle htmlFor="warehouse">Оберіть відділення *</LabelStyle>
            <div style={{ position: 'relative' }}>
              <InputStyle
                type="text"
                id="warehouse"
                name="warehouse"
                {...register('warehouse')}
                value={searchWarehouses}
                autoComplete="off"
                placeholder="Оберіть відділення"
                $error={errors['warehouse']}
                onChange={handleSearchTextChangeWarehose}
                onClick={() => {
                  setDropdownWarehouseVisible(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setDropdownWarehouseVisible(false);
                  }, 200);
                }}
              />
              {dropdownWarehouseVisible ? (
                <Icon>
                  <use href={`${Sprite}#icon-vector-14`} />
                </Icon>
              ) : (
                <Icon>
                  <use href={`${Sprite}#icon-vector-13`} />
                </Icon>
              )}
            </div>
            {dropdownWarehouseVisible && (
              <WrapList>
                <List>
                  {warehouses.length === 0 ? (
                    <Item>
                      <Message $error={massegeWarehous.error}>
                        {massegeWarehous.messege}
                      </Message>
                    </Item>
                  ) : (
                    warehouses
                      .filter(warehouse =>
                        warehouse.Description.toLowerCase().includes(
                          searchWarehouses.toLowerCase()
                        )
                      )
                      .map(warehouse => (
                        <Item
                          key={nanoid()}
                          onClick={() =>
                            handleWarehouseSelect(warehouse.Description)
                          }
                        >
                          <Text>{warehouse.Description}</Text>
                        </Item>
                      ))
                  )}
                </List>
              </WrapList>
            )}
          </WrapInput>
        </WrapForm>
      </div>
    </>
  );
};
