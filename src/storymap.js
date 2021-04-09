/*
    This file is part of MiraMon Map Browser.
    MiraMon Map Browser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    MiraMon Map Browser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
    See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General
    Public License along with MiraMon Map Browser.
    If not, see https://www.gnu.org/licenses/licenses.html#AGPL.

    MiraMon Map Browser can be updated from
    https://github.com/grumets/MiraMonMapBrowser.

    Copyright 2001, 2021 Xavier Pons

    Aquest codi JavaScript ha estat idea de Joan Mas� Pau (joan maso at uab cat)
    amb l'ajut de Nuria Juli� (n julia at creaf uab cat)
    dins del grup del MiraMon. MiraMon �s un projecte del
    CREAF que elabora programari de Sistema d'Informaci� Geogr�fica
    i de Teledetecci� per a la visualitzaci�, consulta, edici� i an�lisi
    de mapes r�sters i vectorials. Aquest progamari programari inclou
    aplicacions d'escriptori i tamb� servidors i clients per Internet.
    No tots aquests productes s�n gratu�ts o de codi obert.

    En particular, el Navegador de Mapes del MiraMon (client per Internet)
    es distribueix sota els termes de la llic�ncia GNU Affero General Public
    License, mireu https://www.gnu.org/licenses/licenses.html#AGPL.

    El Navegador de Mapes del MiraMon es pot actualitzar des de
    https://github.com/grumets/MiraMonMapBrowser.
*/

"use strict"

//Mostra la finestra que cont� el llistat d'hist�ries
function MostraFinestraTriaStoryMap()
{
	if (!ObreFinestra(window, "triaStoryMap"))
		return;
	OmpleFinestraTriaStoryMap(window, "triaStoryMap");
}

//Omple la finestra amb el llistat d'hist�ries (i mostra la imatge de pre-visualitzaci� de la hist�ria).
function OmpleFinestraTriaStoryMap(win, name)
{
var cdns=[], storyMap, i_story;

	//StoryMap=ParamCtrl.StoryMap[i_story];
	cdns.push("<br>",
		DonaCadenaLang({"cat":"Selecciona una hist�ria", "spa":"Selecciona una historia", "eng":"Select a story", "fre":"S�lectionnez une histoire"}), ":" ,
						"<br>");
		for (i_story=0; i_story<ParamCtrl.StoryMap.length; i_story++)
		{
			cdns.push(//"<a href=\"javascript:void(0)\" onclick=\"IniciaStoryMap(", i_story, ");\">",
																					//Si trobes src imatge de la story ? ensenya la imatge de la story: sin� ensenya la imatge per defecte 1griscala
		          "<img align='middle' src='",(ParamCtrl.StoryMap[i_story].src)?ParamCtrl.StoryMap[i_story].src:AfegeixAdrecaBaseSRC("1griscla.gif"),"' height='100' width='150'>",
							"<a href=\"javascript:void(0)\" onclick=\"IniciaStoryMap(", i_story, ");\">",
							"<br>",
							ParamCtrl.StoryMap[i_story].desc,
							"</a><br><br>");
		}
	contentFinestraLayer(win, name, cdns.join(""));
}

//Inicia una storymap
function IniciaStoryMap(i_story)
{
 			loadFile(ParamCtrl.StoryMap[i_story].url, "text/html", CreaStoryMap, /*alert,*/ i_story);
			//alert(ParamCtrl.StoryMap[i_story].url)

			//Mode Pantalla Completa en iniciar la hist�ria: OK
			//openFullscreen(document.documentElement);

			//Despla�ar finestra a l'esquerra de la pantalla quan Mode Pantalla Completa: PENDENT
}

//Crea Storymap
function CreaStoryMap(text_html, extra_param)
{
var i_story=extra_param, elem;
		//alert(text_html) //Es mostra el codi htm de la hist�ria dins l'alerta.

			//amagar caixa triaStoryMap: PENDENT

			//Fer visible Finestra storyMap: OK
			//JM
			elem=getFinestraLayer(window, "storyMap")
			elem.innerHTML=text_html;
			//AB
			ObreFinestra(window, "storyMap")
}

//En el config.js podem afegir una arrar d'histories
//storyMap: ["desc": "Inicis Covid-19", "src": "inicisCovid.htm"],
//Necessitem Afegir un array d'hist�ries en el config.json (i el config-schema.json)
//Necessitem Afegir un bot� a la Barra amb un llibre obert (fam-fam-fam)
//Necessitem Afegir una caixa de dialeg que mostri la llista de les histories (a.k.a. llista dels desc)
//Necessitem Afegir una caixa on carregar el contingut del html
//Necessitem Fer una crida ajax() tools1.js per obtenir l'html de la historia i posar-li amb contentFinestraLayer(window, "storyMap", "<div onScroll='ExecutaAttributsStoryMapVisible(this);'>"+contingut_html+"</div>");
//Necessitem associar la funci� ExecutaAttributsStoryMapVisible() a un event onScroll

//https://www.w3schools.com/jsref/prop_node_nodetype.asp

function isScrolledIntoView(el) {

    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

function RecorreNodesFillsAttributsStoryMapVisible(nodes)
{
	var punt, hihacanvis;
	for (var i = 0; i < nodes.length; i++)
	{
		if (nodes[i].nodeType!=Node.ELEMENT_NODE)
			continue;
		if (!isScrolledIntoView(nodes[i]))
			continue;
		hihacanvis=false;

		if (nodes[i].attributes)
		{
			for (var i_at = 0; i_at < nodes[i].attributes.length; i_at++)
			{
				if (nodes[i].attributes[i_at].name=="mm-center")
				{
					var mmcenter = nodes[i].attributes[i_at].value;

					punt=JSON.parse(mmcenter);

						if(isNaN(punt.x) || isNaN(punt.y))
						{
					  	   alert(DonaCadenaLang({"cat":"Format de les coordenades erroni:\nS'ha d'indicar un valor num�ric.",
											"spa":"Formato de las coordenadas err�neo:\nSe debe indicar un valor num�rico.",
											"eng":"Coordinate format is incorrectly:\nIt Must indicate a numeric value.",
											"fre":"Format des coordonn�es erron�:\nVous devez indiquer une valeur num�rique."}));
						   return;
						}
						CentraLaVista(punt.x, punt.y);
						hihacanvis=true;
				}
				else if (nodes[i].attributes[i_at].name=='mm-zoom')
				{
					var costat=parseFloat(nodes[i].attributes[i_at].value);

					for (var nivell=0; nivell<ParamCtrl.zoom.length; nivell++)
					{
						if (ParamCtrl.zoom[nivell].costat==costat)
						{
							CanviaNivellDeZoom(nivell);
							hihacanvis=true;
							break;
						}
					}
					if (nivell==ParamCtrl.zoom.length)
						alert("El costat sol�licitat no �s un dels costats disponibles en aquest navegador.");
				}
				else if (nodes[i].attributes[i_at].name=="mm-capa")
				{
					//alert("capa");
					return true;
					// Index de la capa
				}
				else if (nodes[i].attributes[i_at].name=="mm-estil")
				{
					//alert("estil");
					return true;
					// Estil de la capa
				}
				if (hihacanvis)
					RepintaMapesIVistes();
			}
		}
		if (nodes[i].childNodes && nodes[i].childNodes.length)
		{
			if (RecorreNodesFillsAttributsStoryMapVisible(nodes[i].childNodes))
				return true;
		}
	}
	return false;
}

function ExecutaAttributsStoryMapVisible(event)
{
	var div=getFinestraLayer(window, "storyMap")

	RecorreNodesFillsAttributsStoryMapVisible(div.childNodes);
	//Donat el node elem mirar, un a un, tots els nodes fills https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes
        //Per a cada node:
        //Mirar si �s visible amb isScrolledIntoView()
        //Mirar si te cap attribut el nom del qual comen�a per "mm-"
        //Si en trobo un,
           //Executar cada atribut a partir de la funci� que t� associada
           //Plegar
}
