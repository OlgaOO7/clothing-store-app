import { Button, Down, Item, List, Option, Up } from './SortByPrice.styled';
import { Fragment, useState } from 'react';

export const SortByPrice = ({ handleSortChange, selected }) => {
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);

  const toggleCategoriesSearch = () => {
    setIsCategoriesShown(!isCategoriesShown);
  };
  const options = [
    'Сортування за ціною: від вищої до нижчої',
    'Сортування за ціною: від нижчої до вищої',
  ];
  return (
    <div>
      <Button
        onClick={() => toggleCategoriesSearch()}
        $isCategoriesShown={isCategoriesShown}
      >
        {selected}
        {!isCategoriesShown ? <Down /> : <Up />}
      </Button>
      <List $isCategoriesShown={isCategoriesShown}>
        {options.map((option, index) => (
          <Fragment key={index}>
            {selected !== option && (
              <Item>
                <Option
                  onClick={() => {
                    handleSortChange(option);
                    setIsCategoriesShown(false);
                  }}
                >
                  {option}
                </Option>
              </Item>
            )}
          </Fragment>
        ))}
      </List>
    </div>
  );
};
