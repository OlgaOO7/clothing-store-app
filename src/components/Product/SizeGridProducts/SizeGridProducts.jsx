import React from 'react';
import {
  SizeGridLogo,
  SizeGridTitle,
  Table,
  WrapTable,
} from './SizeGridProducts.styled';

export const SizeGridProducts = () => {
  return (
    <div style={{ userSelect: 'none' }}>
      <SizeGridTitle> Розмірна сітка</SizeGridTitle>
      <WrapTable>
        <Table>
          <colgroup>
            <col style={{ width: '30%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '14%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th>Розмір</th>
              <td>XS</td>
              <td>S</td>
              <td>M</td>
              <td>L</td>
              <td>XL</td>
            </tr>

            <tr>
              <th>Обхват грудей</th>
              <td>75-84</td>
              <td>85-90</td>
              <td>91-95</td>
              <td>96-100</td>
              <td>101-105</td>
            </tr>
            <tr>
              <th>Обхвати талії</th>
              <td>60-64</td>
              <td>65-70</td>
              <td>71-75</td>
              <td>76-80</td>
              <td>81-85</td>
            </tr>
            <tr>
              <th>Обхвати бедер</th>
              <td>85-89</td>
              <td>90-94</td>
              <td>95-98</td>
              <td>99-104</td>
              <td>105-110</td>
            </tr>
          </tbody>
        </Table>
      </WrapTable>
      <SizeGridLogo>ZATYSHNA</SizeGridLogo>
    </div>
  );
};
