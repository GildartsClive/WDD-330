const links = [
	{
		label: 'Week 01 - the begining - Jan 9th, 2021',
		url: 'week1/'
	},
    {
		label: 'Week 02 - new game',
		url: 'week2/'
	},
    {
		label: 'Week 03 - new game',
		url: 'week3/'
	},
    {
		label: 'Week 04 - new game',
		url: 'week4/'
	},
    {
		label: 'Week 05 - new game',
		url: 'week5/'
	},
    {
		label: 'Week 06 - new game',
		url: 'week6/'
	},
    {
		label: 'Week 07 - new game',
		url: 'week7/'
	},
    {
		label: 'Week 08 - new game',
		url: 'week8/'
	},
    {
		label: 'Week 09 - new game',
		url: 'week9/'
	},
    {
		label: 'Week 10 - new game',
		url: 'week10/'
	},
    {
		label: 'Week 11 - new game',
		url: 'week11/'
	},
    {
		label: 'Week 12 - new game',
		url: 'week12/'
	},
    {
		label: 'Week 13 - new game',
		url: 'week13/'
	},
    {
		label: 'Week 14 - new game',
		url: 'week14/'
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