import axios from 'axios';
import CONSTS from '../consts/consts';

const { API, PRODUCT } = CONSTS;

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API}/${PRODUCT}`);
    return data;
  } catch (error) {
    console.log('something went wrong');
    return [];
  }
};
