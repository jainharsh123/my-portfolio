let slider = document.getElementById('slider');
// Move to the previous slide
function prevButtonn() {
  slider.scrollBy({
    left: -450, // Adjust the scroll distance based on the slide width
    behavior: 'smooth'
  });
}

// Move to the next slide
function nextButtonn() {
  slider.scrollBy({
    left: 450, // Adjust the scroll distance based on the slide width
    behavior: 'smooth'
  });
};

// let second = document.getElementById('second');
// // Move to the previous slide
// function prevButtonn() {
//   second.scrollBy({
//     left: -420, // Adjust the scroll distance based on the slide width
//     behavior: 'smooth'
//   });
// }

// // Move to the next slide
// function nextButtonn() {
//   second.scrollBy({
//     left: 420, // Adjust the scroll distance based on the slide width
//     behavior: 'smooth'
//   });
// };

let icon = document.getElementsByTagName("i");
// toggle theme //
function myFunction() {

  let element = document.getElementById("light_theme");
  element.classList.toggle("light");
  

}
// Get references to the elements
let openModalButton = document.getElementById("openModal");
let closeModalButton = document.getElementById("closeModal");
let modalContainer = document.getElementById("modalContainer");
let submitBtn = document.getElementById("submit");

// Function to open the modal
function openModal() {
  modalContainer.style.display = "block";

}

// Function to close the modal
function closeModal() {
  modalContainer.style.display = "none";
}

// Add event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

let inputData = document.getElementById("inputData");
for(let i = 0 ; i < inputData.length; i++){
  console.log(inputData);
  submitBtn.addEventListener("click" , ()=>{
    if(inputData.value !== ""){
      alert("Thank You")
    }else{
      alert("fill inputs");
    }
  })
}
