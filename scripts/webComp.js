// Web Component file, it only need to run
// doesn't require being imported to main.js

const template = document.createElement('template')
template.innerHTML=`
  <div>
	  <h1>BOO Big Bang BOO</h1>
		<slot name="title">Some default fallback text</slot>
		<slot name="items"
	</div>
`




class WebComp extends HTMLElement{
	constructor(){
		super()
    
		const shadowRoot = this.attachShadow({'mode': 'closed'})
		// let div = document.createElement('div')
		// div.textContent = `Big Bang Boom`
		// shadowRoot.append(div)
    let clone = template.content.cloneNode(true)
		shadowRoot.append(clone)

	}
}

customElements.define('web-comp', WebComp)