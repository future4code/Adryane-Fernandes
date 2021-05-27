function dateNow() {
  const date = new Date()

  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  const mounth = (date.getMonth() + 1) < 10 ?  "0" + date.getMonth() : date.getMonth() + 1
  const year = date.getFullYear()

  const formattedDate = `${day}/${mounth}/${year}`

  return formattedDate
}

export default dateNow