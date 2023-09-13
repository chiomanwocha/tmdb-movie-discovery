export function convertToUTC (dateString) {
  const dateParts = dateString?.split('-')
  const year = parseInt(dateParts[0])
  const month = parseInt(dateParts[1]) - 1
  const day = parseInt(dateParts[2])
  const date = new Date(Date.UTC(year, month, day))

  const utcString = date.toISOString()

  return utcString
}
