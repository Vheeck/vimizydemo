var hund = [
	100,
	100,
	100,
	100,
]

var value = ['none']

var count = ['none']

var arr = ['none']



function SortData(vote, contestants) {	
	var total = vote[1] + vote[2] + vote[3] + vote[4];
	var input = [
		(vote[1] / total) * 100,
		(vote[2] / total) * 100,
		(vote[3] / total) * 100,
		(vote[4] / total) * 100
	];
	// }
	return inputData(vote, total, contestants, input);
}

function inputData(vote, total, contestants, input) {
	var cName = [
		'none',
		document.querySelector('#cn1'),
		document.querySelector('#cn2'),
		document.querySelector('#cn3'),
		document.querySelector('#cn4')
	]

	var score = [
		'none',
		document.querySelector('#s1'),
		document.querySelector('#s2'),
		document.querySelector('#s3'),
		document.querySelector('#s4')
	]
		
	var progress = [
		'none',
		document.querySelector('#p1'),
		document.querySelector('#p2'),
		document.querySelector('#p3'),
		document.querySelector('#p4')
	]

	var color = [
		'progress apc_p',
		'progress pdp_p',
		'progress aac_p',
		'progress ypp_p'
	]

		

	progress[1].classList = color[0];
	progress[2].classList = color[1];
	progress[3].classList = color[2];
	progress[4].classList = color[3];
	
	score[1].innerHTML = vote[1];
	score[2].innerHTML = vote[2];
	score[3].innerHTML = vote[3];
	score[4].innerHTML = vote[4];

	progress[1].style = 'width:' + input[0] + '%;';
	progress[2].style = 'width:' + input[1] + '%;';
	progress[3].style = 'width:' + input[2] + '%;';
	progress[4].style = 'width:' + input[3] + '%;';

	
	cName[1].innerHTML = contestants[1];
	cName[2].innerHTML = contestants[2];
	cName[3].innerHTML = contestants[3];
	cName[4].innerHTML = contestants[4];
}