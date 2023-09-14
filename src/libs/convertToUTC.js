export function convertToUTC (dateString) {
  const dateParts = dateString.split('-')
  const year = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10) - 1
  const day = parseInt(dateParts[2], 10)

  const dateObject = new Date(Date.UTC(year, month, day))

  return (dateObject.toUTCString())
}
