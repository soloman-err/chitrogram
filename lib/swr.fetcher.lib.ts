import axiosSecure from './axios.lib';

export const fetcher = async (key: string) => {
  try {
    const response = await axiosSecure.get(`/${key}`);
    return response.data;
  } catch (error) {
    console.error('Error in fetcher:', error);
    throw error;
  }
};
