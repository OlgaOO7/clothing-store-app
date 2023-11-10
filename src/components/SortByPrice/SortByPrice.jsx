import { useDispatch } from 'react-redux';
import { getProductsSortByPrice } from 'redux/products/operations';

import { Select } from './SortByPrice.styled';
import { useCallback } from 'react';

export const SortByPrice = ({ page }) => {
  const dispatch = useDispatch();

  const handleSortChange = useCallback(
    order => {
      dispatch(
        getProductsSortByPrice({
          page,
          sort:
            order === 'lowestToHighest'
              ? 'price.value,asc'
              : 'price.value,desc',
        })
      );
    },
    [dispatch, page]
  );
  return (
    <div>
      <Select id="sortOption" onChange={e => handleSortChange(e.target.value)}>
        <option value="lowestToHighest">
          Сортування за ціною: від нижчої до вищої
        </option>
        <option value="highestToLowest">
          Сортування за ціною: від вищої до нижчої
        </option>
      </Select>
    </div>
  );
};
