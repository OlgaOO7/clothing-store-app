import axios from 'axios';

// const BASE_URL = 'https://online-store-project-backend.onrender.com/api/v1';

const BASE_URL = 'https://online-store.ddns.net/api/v1';



const fetchProducts = async (searchQuery) => {
  try {
    return await axios.get(
      `${BASE_URL}/products?title=${searchQuery}`
    );
  } catch (error) {
    console.log(error);
  }
};

export { fetchProducts };
