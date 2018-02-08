var images = document.getElementsByTagName('img');

// console.log(images);

var lightbox = document.getElementById('lightbox');

for (var i = 0; i < images.length; i++) {
	var currentImage = images[i];

	var imagePlaceholder = document.getElementById('image-placeholder');

	// if (currentImage.getAttribute('id') != 'image-placeholder') {
		currentImage.onclick = function() {
			console.log(this);

		    imagePlaceholder.src = this.getAttribute('src');
		    lightbox.style.display = 'block';
		}
    // }
}

var closeLightboxButton = document.getElementById('close-icon');

closeLightboxButton.onclick = function() { 
  document.getElementById('lightbox').style.display = 'none';
}
