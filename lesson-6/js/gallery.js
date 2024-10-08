// STEP 1: Initialize and declare variables
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

/* STEP 2: Loop 5 times to create the <img> elements */
for(let i = 1;i < 6; i++){
		/* STEP 3a: Create a new DOM node - an image element */
		const newImage =document.createElement('img');
		/* STEP 3b: Set the src attribute to be the path of one of the images inside the images folder, using setAttribute() */
		newImage.setAttribute('src',`images/pic${i}.jpg`);
		/* Append the new image element to the thumbBar div, named in STEP 1 */
			thumbBar.appendChild(newImage);
		/* STEP 3c: Build event handler for each <img> */

		// newImage.addEventListener('click',function(event){
		// 	console.log('Image Clicked');
		// 	//Grab the src attribute from the image that was clicked
		// 	let imgSrc = event.target.getAttribute('src');
		// 	console.log(imgSrc);
		// 	//Update the main image using function below
		 	//displayImage(imgSrc);
		// })

};
/* STEP 4: Function to change the src of the main <img> */
function displayImage(value){
	displayedImage.setAttribute('src',value);
}
	// Rewrite the src attribute of the .displayed-img element


/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? 
Build a click handler on the parent element, and 
capture each target (and its attributes) from the event object */
thumbBar.addEventListener('click',function(event){
	if(event.target && event.target.nodeName  === 'IMG'){
		//grab the src attribute of the element that was clicked
		let imgSrc= event.target.getAttribute('src');
		displayImage(imgSrc);
	}
});
	// event.target is the element that was clicked

		// grab the src attribute of the element that was clicked

		// change the main image
		

		
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
