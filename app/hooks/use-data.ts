import { fetchData } from '~/utils/fetch-data'
import { useQuery } from 'react-query'
export const key = 'd6ac91ac-6dab-4ff0-a08e-9348d7deed51'

export const fetchResource = () => {
    return fetchData(
  `https://run.mocky.io/v3/${key}`
)}

export const useData = ({ suspense = true }) => {
  return useQuery(key, fetchResource, { suspense })
}