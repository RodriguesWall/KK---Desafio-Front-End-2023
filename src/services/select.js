import { api } from './axios';

const Services = {
    listProduct: async ({rowsPerPage, page}) => {
        const response = await api
          .get('/kuantoKusta/product/list', {
            params: {rowsPerPage, page}
          })
          .then(({ ...response }) => response)
          .catch(({ ...response }) => response)
    
        return response
    },
    getEspecificProduct: async ({id}) => {
      const response = await api
        .get('/kuantoKusta/product/especific', {
          params: {
            id
          }
        })
        .then(({ ...response }) => response)
        .catch(({ ...response }) => response)
  
      return response
    }
}
export default Services;