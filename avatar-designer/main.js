const inputRange = document.querySelector('.input-range')
const avatarImage = document.querySelector('.avatar')

inputRange.addEventListener("change", (e) => {
  const rangeValue = e.currentTarget.value
  avatarImage.style.borderRadius = Number.parseInt(rangeValue, 10) + 'px'
})

avatarImage.style.border = "4px solid #FF851B"
