//your JS code here. If required.
let removeButton = document.getElementByID('removeButton');

removeButton.addEventListener("click",myfunction);

function myfunction(){
	let colorSelect = document.getElementByID('colorSelect');
	 const selectedColorIndex = colorSelect.selectedIndex;

            if (selectedColorIndex !== -1) {
                colorSelect.remove(selectedColorIndex);
            }
}
