let checkLower, checkUpper, checkNumber, checkSymbol;
const passLen = 8;
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = lowerCase.toUpperCase();
const number = '0123456789';
const symbol = '!@#$%^&*()_+={}[]|~`/-.<>,?;:';
const lowerCaseField = document.getElementById('lowercase');
const upperCaseField = document.getElementById('uppercase');
const numberField = document.getElementById('number');
const symbolField = document.getElementById('symbol');
const outputField = document.getElementById('output');
const customField = document.getElementById('custom');
const hiddenMsg = document.getElementById('hiddenMsg');
lowerCaseField.value = lowerCase;
upperCaseField.value = upperCase;
numberField.value = number;
symbolField.value = symbol;
let p = '';
let a = '';

function rndPassGen() {
	checkLower = document.getElementById('lowercaseactive').checked;
	checkUpper = document.getElementById('uppercaseactive').checked;
	checkNumber = document.getElementById('numberactive').checked;
	checkSymbol = document.getElementById('symbolactive').checked;
	let l = lowerCaseField.value,
		u = upperCaseField.value,
		n = numberField.value,
		s = symbolField.value,
		c = customField.value;
	l = checkLower ? l : '';
	u = checkUpper ? u : '';
	n = checkNumber ? n : '';
	s = checkSymbol ? s : '';
	let q = '',
		o = '';
	p = l + n + s + u + c;
	for (let i = 0; i < passLen; i++) {
		o += p != '' ? p[Math.floor(Math.random() * p.length)] : '';
	}
	outputField.value = o;
	a = o;
}
document.getElementById('generate').addEventListener('click', rndPassGen);

function copyTextFunc() {
	let copyText = outputField;
	copyText.select();
	copyText.setSelectionRange(0, outputField.length);
	navigator.clipboard.writeText(copyText.value);
	hiddenMsg.classList.remove('hidden');
}
document.getElementById('copy').addEventListener('click', copyTextFunc);
document.getElementById('hiddenMsg').addEventListener('click', () => {
	hiddenMsg.classList.add('hidden');
});

function shuffle() {
	let s = a;
	let o = '';
	let temp;
	let t1, t2;
	for (let i = 0; i < s.length * 2; i++) {
		t1 = Math.floor(Math.random() * s.length);
		t2 = Math.floor(Math.random() * s.length);
		temp = s[t1];
		s = s.replaceAt(t1, s[t2]);
		s = s.replaceAt(t2, temp);
	}
	return s;
}
document.getElementById('shuffle').addEventListener('click', () => {
	outputField.value = shuffle();
});

function reset() {
	document.getElementById('lowercaseactive').checked = 'checked';
	document.getElementById('uppercaseactive').checked = 'checked';
	document.getElementById('numberactive').checked = 'checked';
	document.getElementById('symbolactive').checked = 'checked';
	customField.value = '';
	outputField.value = '';
	hiddenMsg.classList.add('hidden');
}
document.getElementById('reset').addEventListener('click', reset);

String.prototype.replaceAt = function (index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}
	return this.slice(0, index) + replacement + this.slice(index + 1);
};
