const inputRange = document.querySelector('.input-range')
const inputColor = document.querySelector('.input-color')
const avatarImage = document.querySelector('.avatar')
const avatarImages = document.querySelectorAll('.avatar')
const buttons = document.querySelectorAll('.button')
const inputFile = document.querySelector('.input-file')


// Add an event listener to the border radius slider and set the value
inputRange.addEventListener("change", (e) => {
  const rangeValue = e.currentTarget.value
  avatarImage.style.borderRadius = Number.parseInt(rangeValue, 10) + 'px'
})

// Add an event listener to the color picker and set the border color
inputColor.addEventListener("change", (e) => {
  const colorValue = e.currentTarget.value
  avatarImage.style.border = "4px solid" + colorValue
})

// Add a click event listener to each button
buttons.forEach(btn => {

  btn.addEventListener('click', () => {
    // Get the image path from the data-image attribute using dataset
    const imagePath = btn.dataset.image;

    // Loop through avatar images and set the image source
    avatarImages.forEach(avatar => {
      avatar.src = imagePath;
    })
  })

})


// Implement the file upload
inputFile.addEventListener('change', (e) => {
  const selectedFile = e.currentTarget.files[0]
  console.log(e.currentTarget.files[0]);

  if (selectedFile) {

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.addEventListener('load', () => {
      avatarImage.src = reader.result;
    })
  } else {
    alert('Please select a valid image file.');
    // Reset the file input
    inputFile.value = '';
  }
})


