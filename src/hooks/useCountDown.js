
export const useCountdown = (dateString) => {

  // const _day = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(),
    // now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
  const dayFuture = new Date(dateString).setUTCDate(0)
  return [dayFuture]
}
