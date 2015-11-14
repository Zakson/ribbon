
function hideAllSubmenus(){
		var submenu = document.getElementById('submenu');
		var submenus = submenu.getElementsByTagName('ul');
		for(var i = 0, len = submenus.length; i < len; i++) {
			submenus[i].style.display = 'none';
		}
}

function activateRibbon(){

	var ribbon = document.getElementById('Ribbon');

	ribbon.onmouseleave = function(){hideAllSubmenus()};
	var allsm = ribbon.getElementsByTagName('li');
	for(var i = 0, len = allsm.length; i < len; i++) {
		allsm[i].onmouseenter = function (e) {		
			var el=(window.event)
                        ? window.event.srcElement
                        : e.target,tags=document.getElementsByTagName(el.tagName);
			el.className = "invaded";
		}
		allsm[i].onmouseleave = function (e) {		
			var el=(window.event)
                        ? window.event.srcElement
                        : e.target,tags=document.getElementsByTagName(el.tagName);
			el.className = "";
		}		
	
	}
	var menuGlowne = document.getElementById('menuGlowne');

	var elements = menuGlowne.getElementsByTagName('li');
	for(var i = 0, len = elements.length; i < len; i++) {
		elements[i].onmouseenter = function (e) {
		
		hideAllSubmenus();
		
		 var el=(window.event)
                        ? window.event.srcElement
                        : e.target,tags=document.getElementsByTagName(el.tagName);
						
			var label = el.textContent;
			
			el.className = "invaded";
			
			var nm = 'menu'+label;
			 document.getElementById(nm).style.display = 'block';

			
		}
	}

}
/*
window.onbeforeunload = function() {
    return "Pozosta³y niezapisane dokumenty.";
}
*/