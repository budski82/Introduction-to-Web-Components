// Web Component file, it only need to run
// doesn't require being imported to main.js

class WebComp extends HTMLElement{
	constructor(){
		super()

	}
}

customElements.define('web-comp', WebComp)