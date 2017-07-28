import {styles} from './scss/styles.scss';

function component() {
	var element = document.createElement('div');
	element.className = "alert alert-success";
	element.setAttribute("role", "alert");
	element.innerHTML = "Webpack Scaffolding is running using Bootstrap 4";

	return element;
}

document.body.appendChild(component());