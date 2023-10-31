const inputRange = document.querySelector('.input-range')
const inputColor = document.querySelector('.input-color')
const avatarImage = document.querySelector('.avatar')


inputRange.addEventListener("change", (e) => {
  const rangeValue = e.currentTarget.value
  avatarImage.style.borderRadius = Number.parseInt(rangeValue, 10) + 'px'
})

inputColor.addEventListener("change", (e) => {
  const colorValue = e.currentTarget.value
  avatarImage.style.border = "4px solid" + colorValue
})

