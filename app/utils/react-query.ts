import { QueryClient } from 'react-query'
 
export const createQueryClient = ({ suspense = true }) => new QueryClient({
   defaultOptions: {
     queries: {
       suspense,
     },
   },
 })