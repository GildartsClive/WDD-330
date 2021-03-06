const links = [
	{
		label: 'Notes',
		url: 'notes/week4notes.png'
	},
	{
		label: 'Code',
		url: 'code/groupworkweek4.html'
	},
	{
		label: 'Back to Menu',
		url: '../index.html'
	}
];

const ol = document.querySelector("ol");

for (const item of links) {
    const listitem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", item.url);
    link.textContent = item.label;
    listitem.appendChild(link);
    
    ol.appendChild(listitem);
}