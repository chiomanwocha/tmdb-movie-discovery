export const getGenreName = (data, id) => {
  const result = data?.genres?.find((item) => item?.id === id)
  if (result) {
    return result?.name
  }
}
