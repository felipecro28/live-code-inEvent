const features = [
	{ name: 'Virtual Lobby', category: 'start'},
	{ name: 'Live App', category: 'start'},
	{name: 'Multi-events', category: 'start'},
	{ name: 'Event website', category: 'registration'},
	{ name: 'Forms', category: 'registration'},
	{ name: 'Lists', category: 'registration'},
	{ name: 'Live Studio', category: 'live'},
	{ name: 'Video Conferencing', category: 'live'},
	{ name: 'Badge design', category: 'live'},
	{ name: 'Reports', category: 'compliance'},
	{ name: 'Virtual Lobby', category: 'compliance'},
]

function showContentFeature(){
	const featureNameList = document.querySelector('#thFeature')
	for (i=0; i<features.length; i++){
	const itemFeature = document.createElement('td')
	itemFeature.classList.add(`${features[i].category}`)
	const text = document.createTextNode(`${features[i].name}`)
	itemFeature.appendChild(text)
	featureNameList.appendChild(itemFeature)
		}
}

function showContentCategory(){
	const featureNameList = document.querySelector('#thCategory')
	for (i=0; i<features.length; i++){
	const itemFeature = document.createElement('td')
	itemFeature.classList.add(`${features[i].category}`)
	const text = document.createTextNode(`${features[i].category}`)
	itemFeature.appendChild(text)
	featureNameList.appendChild(itemFeature)
	}
}

function displayRemove(arr, category){
	for (i=0; i< arr.length; i++){
		arr[i].style.display = 'none'
	}
	const exibition = document.getElementsByClassName(category)
	console.log(exibition)
	for (i of exibition){
		i.style.display = 'flex'
	}
}

function filterCategory(category){
	if (category != 'all'){
	const filterList = document.querySelectorAll('td')
	displayRemove(filterList, category)}
	else{
		const filterList = document.querySelectorAll('td')
		for (i of filterList){
			i.style.display = 'flex'
	}
}
}

showContentFeature()
showContentCategory()

