import { ListOfButtons, ButtonGray, Button, Ellips } from './Pagination.styled';
export const Pagination = ({ totalPage, page, handlePageChange }) => {
  return (
    <ListOfButtons>
      {Array.from({ length: totalPage }).map((_, index) => {
        const range = 4;
        const start = Math.max(0, page - range);
        const end = Math.min(totalPage - 1, page + range);

        if (index === start && start > 0) {
          return <Ellips key="startEllipsis">...</Ellips>;
        }

        if (index >= start && index <= end) {
          return (
            <li key={index}>
              {page === index ? (
                <Button onClick={() => handlePageChange(index)}>
                  {index + 1}
                </Button>
              ) : (
                <ButtonGray onClick={() => handlePageChange(index)}>
                  {index + 1}
                </ButtonGray>
              )}
            </li>
          );
        }

        if (index === end + 1 && end < totalPage - 4) {
          return <Ellips key="endEllipsis">...</Ellips>;
        }

        if (index > totalPage - 4) {
          return (
            <li key={index}>
              {page === index ? (
                <Button onClick={() => handlePageChange(index)}>
                  {index + 1}
                </Button>
              ) : (
                <ButtonGray onClick={() => handlePageChange(index)}>
                  {index + 1}
                </ButtonGray>
              )}
            </li>
          );
        }

        return null;
      })}
    </ListOfButtons>
  );
};
