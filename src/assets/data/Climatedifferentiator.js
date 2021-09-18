export const climatedifferentiator = (hourly) => {
  let hours = 0
  let summary = null
  const summaries = []
  for (let i=0; i < hourly.length; i++){
    const hour = hourly[i]
    if (!summary) {
      hours = 1
      summary = hour.summary
    } else if (summary === hour.summary) {
      hours++
    } else {
      summaries.push({ hours, summary })
      hours = 1
      summary = hour.summary
    }
  }   
  summaries.push({ hours, summary })

  return summaries;
}