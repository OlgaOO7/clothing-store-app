import axios from 'axios';

// const BASE_URL = 'http://onlinestoreprojectbackend-env.eba-y62nm3qd.eu-central-1.elasticbeanstalk.com/api/v1';
const BASE_URL = 'http://onlinestoreprojectbackend.eu-central-1.elasticbeanstalk.com/api/v1';

const fetchProducts = async () => {
  try {
    return await axios.get(
      `${BASE_URL}/products`
    );
  } catch (error) {
    console.log(error);
  }
};

export { fetchProducts };