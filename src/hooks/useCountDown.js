
export const useCountdown = (dateString) => {
  const dayFuture = new Date(dateString)
  return [dayFuture]
}
