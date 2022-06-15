(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),s=(a(13),a(1));a(15);function o(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/"},e.aboutText)),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/"},e.contactText))),c.a.createElement("div",{className:"form-check form-switch"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),c.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Toggler")))))}function m(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],r=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},c.a.createElement("h1",null,e.heading),c.a.createElement("div",{className:"mb-3"},c.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"light",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=l.toUpperCase();r(t),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=l.toLowerCase();r(t),e.showAlert("Converted to Lowercase","success")}},"Convert to Lowercase"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){r(""),e.showAlert("Cleared all","success")}},"Clear all"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied!","success")}},"Copy Text"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=l,window.speechSynthesis.speak(t),e.showAlert("Text to Speech has been started","success")}},"Text to Speech"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=l,window.speechSynthesis.pause(t),e.showAlert("Text to Speech has been paused","success")}},"Pause Text to Speech"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=l,window.speechSynthesis.resume(t),e.showAlert("Text to Speech has been resume","success")}},"Play Text to Speech"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=new SpeechSynthesisUtterance;t.text=l,window.speechSynthesis.cancel(t),e.showAlert("Text to Speech has been canceled","success")}},"Cancel Text to Speech"),c.a.createElement("button",{className:"btn btn-primary ms-2 mt-2",onClick:function(){var t=l.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra spaces removed!","success")}},"Remove all extra Spaces")),c.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},c.a.createElement("h1",null,"Your text summary"),c.a.createElement("p",null,l.split(" ").length," words and ",l.length," characters"),c.a.createElement("p",null,.008*l.split(" ").length," minutes away to read the contents."),c.a.createElement("h2",{className:"m-auto"},"Preview"),c.a.createElement("p",null,l.length>0?l:"Enter something in the above text-box to preview it here!")))}o.defaultProps={title:"tile here",aboutText:"About text here",contactText:"Contact text here"};var i=function(e){return e.alert&&c.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},c.a.createElement("strong",null," ",e.alert.type),":",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),u=Object(s.a)(r,2),h=u[0],b=u[1],d=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1525)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(o,{title:"Textutils",aboutText:"About Textutils",contactText:"Contact Us",mode:a,toggleMode:function(){"light"===a?(l("dark"),document.body.style.backgroundColor="#042743",d("Dark Mode is enabled","success")):(l("light"),document.body.style.backgroundColor="#fff",d("Light Mode is enabled","success"))}}),c.a.createElement(i,{alert:h}),c.a.createElement("div",{classNames:"container my-3"},c.a.createElement(m,{heading:"Enter the text to analyze below...",showAlert:d,mode:a,"my-3":!0})))},h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null))),h()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.bf3de919.chunk.js.map