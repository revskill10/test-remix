import wrapPromise from './wrap-promise'

function fetchDataWithWrapPromise(url: string) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}
export function fetchData(url: string) {
    return fetch(url).then((res) => res.json()).then((res) => res.data)
}
export default fetchDataWithWrapPromise