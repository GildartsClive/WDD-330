const links = [
	{
		label: 'Week 01 - the begining! - Jan 9th, 2021',
		url: 'week1/week1.html'
	},
    {
		label: 'Week 02 - new game',
		url: 'week2/week2.html'
	},
    {
		label: 'Week 03 - new game',
		url: 'week3/week3.html'
	},
    {
		label: 'Week 04 - new game',
		url: 'week4/week4.html'
	},
    {
		label: 'Week 05 - new game',
		url: 'week5/week5.html'
	},
    {
		label: 'Week 06 - new game',
		url: 'week6/week6.html'
	},
    {
		label: 'Week 07 - new game',
		url: 'week7/week7.html'
	},
    {
		label: 'Week 08 - new game',
		url: 'week8/week8.html'
	},
    {
		label: 'Week 09 - new game',
		url: 'week9/week9.html'
	},
    {
		label: 'Week 10 - new game',
		url: 'week10/week10.html'
	},
    {
		label: 'Week 11 - new game',
		url: 'week11/week11.html'
	},
    {
		label: 'Week 12 - new game',
		url: 'week12/week12.html'
	},
    {
		label: 'Week 13 - new game',
		url: 'week13/week13.html'
	},
    {
		label: 'Week 14 - new game',
		url: 'week14/week14.html'
	},
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