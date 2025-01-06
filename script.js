function volume_sphere() {
    let radius = parseFloat(document.getElementById("radius").value);
    let volumeElement = document.getElementById("volume");
    
    if (isNaN(radius) || radius < 0) {
        volumeElement.value = "NaN";
		return;
    }
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const roundedVolume = volume.toFixed(4);
    volumeElement.value = roundedVolume;
}

window.onload = document.getElementById('MyForm').onsubmit = function(event) {
    event.preventDefault();
    volume_sphere();
};
