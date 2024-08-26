//your JS code here. If required.
let removeButton = document.getElementById('removeButton');

removeButton.addEventListener("click",myfunction);

function myfunction(){
	let colorSelect = document.getElementById('colorSelect');
	 const selectedColorIndex = colorSelect.selectedIndex;

            if (selectedColorIndex !== -1) {
                colorSelect.remove(selectedColorIndex);
            }
}
