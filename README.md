[![NPM version](https://img.shields.io/npm/v/@eugle/oneui.svg)](https://www.npmjs.com/package/@eugle/oneui)

# Basic UI
One UI is a fully customized front-end UI library based on the Styled-Components framework and React component thinking. Use Flex layout and CSS3 style to write specifications.


# Feature
With One UI, you can build any front-end UI interface you want. Flexible, customize any of your UI interface. Follow the All in js idea, let CSS styles pass parameters like React components, and compile front-end CSS styles through Styled-Components.
One UI has now released the official version, but you can still fix some problems in complex usage scenarios through pull request.


# Why？
Why invented One UI? Alright... (note, this part contains some of my personal opinions!)
Before inventing One UI, I tried many different front-end UI libraries. I found that although they are basically no problem when writing simple examples, once you want to build some complex and beautiful pages with a high degree of freedom, you will find some deep-seated problems. For example, the UI library hard-codes the document structure specification , Difficult to customize. Similar layout structures can be used out of the box, but in many cases you can't customize them for personal needs.


# Principle
One UI tries to solve the problem of arbitrary customization through some principles:
<li>Based on Styled-Components. Use Styled-Components consistent construction method to compile CSS styles</li>
<li>Flex Box layout mode</li>
<li>Flexible native HTML tag switching. Reconstruct native HTML tags such as div to Div, React components starting with capital letters</li>
<li>When you don’t want to use One UI, you can use native tags directly</li>
<li>Concise parameter transfer. Reduce the native CSS style to one letter as much as possible</li>

# Usage

**use npm**  
npm i -s @eugle/oneui

**use yarn**  
yarn add @eugle/oneui

**ES6**  
import {Div} from '@eugle/oneui'

**API**  
# GlobalColor  

Customize the default color  
```
GlobalColor({  
	primary: '#35b8e0',  
	primaryRGB: '53,184,224',  
	primaryG: '#0081ee',  
	success: '#10c469',  
	successRGB: '16,196,105',  
	successG: '#009f5a',   
	danger: '#ff5b5b',  
	dangerRGB: '255,93,93',
	dangerG: '#e02e2e',
	warning: '#f9c851',
	warningRGB: '249,200,81',
	warningG: '#ff8a00',
	info: '#002fa7',
	infoRGB: '0,47,167',
	infoG: '#002687',
}); 
```

RGB at the end represents the format of '255,255,255' for transparency
G at the end is used to set the color at the end of the gradient

# Reference
[Styled-Components](https://www.styled-components.com/). Official document  
[HTML5](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5). Guide  
[CSS3](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started). Guide  
[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web). Web development technology  
[React](https://reactjs.org/). Official document    

If this is not enough, you can also read the heavily annotated source code of One UI at any time.

# Contribution
Contributions in all forms are welcome！
