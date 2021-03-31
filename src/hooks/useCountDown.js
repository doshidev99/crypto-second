
export const useCountdown = (dateString) => {
  const dayFuture = new Date(dateString).setUTCDate(0)
  return [dayFuture]
}
