import { api } from './axios';

const Services = {
    listProduct: async ({rowsPerPage, page, searchTerm}) => {
        const response = await api
          .get('/kuantoKusta/product/list', {
            params: {rowsPerPage, page, searchTerm}
          })
          .then(({ ...response }) => response)
          .catch(({ ...response }) => response)
    
        return response
      }
}
export default Services;