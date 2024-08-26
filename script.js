//your JS code here. If required.
let removeButton = document.getElementById('removeButton');

removeButton.addEventListener("click",myfunction);

function myfunction(){
	let colorSelect = document.getElementById('colorSelect');
	
	// Get the index of the selected option
	 const selectedColorIndex = colorSelect.selectedIndex;

    // If an option is selected, remove it
            if (selectedColorIndex !== -1) {
                colorSelect.remove(selectedColorIndex);
            }
}
