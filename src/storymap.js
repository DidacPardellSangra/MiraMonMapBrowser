﻿/*
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

    Copyright 2001, 2023 Xavier Pons

    Aquest codi JavaScript ha estat idea de Joan Masó Pau (joan maso at uab cat)
    amb l'ajut de Alba Brobia (a brobia at creaf uab cat)
    dins del grup del MiraMon. MiraMon és un projecte del
    CREAF que elabora programari de Sistema d'Informació Geogràfica
    i de Teledetecció per a la visualització, consulta, edició i anàlisi
    de mapes ràsters i vectorials. Aquest progamari programari inclou
    aplicacions d'escriptori i també servidors i clients per Internet.
    No tots aquests productes són gratuïts o de codi obert.

    En particular, el Navegador de Mapes del MiraMon (client per Internet)
    es distribueix sota els termes de la llicència GNU Affero General Public
    License, mireu https://www.gnu.org/licenses/licenses.html#AGPL.

    El Navegador de Mapes del MiraMon es pot actualitzar des de
    https://github.com/grumets/MiraMonMapBrowser.
*/

"use strict"

var indexStoryMapActiu=null;
const tinyTextId = "storyTextArea";
// Crea inici Storymap identificadors.
const storyTitolId = "titolRelat";
const inputThumbnailId = "inputThumbnail";
const imageThumbnailId = "imageThumbnail";
// Límit de mida per imatges. Establerta en píxels.
const midaImatgeMiniaturaMaximaPx = 150;
const midaImatgeMaximaPx = 500;
const numMaximPixels = Math.pow(midaImatgeMaximaPx, 2);
// Extensions imatges permeses.
const pngMIMETType = "image/png", jpgMIMEType = "image/jpg", jpegMIMEType = "image/jpeg";
// Identificador input imatges internes del Storymap.
const inputImageId = "imagePicker";
// Identificadors diàlegs
const dialogCaractId = "caractDialog", dialogMidesId = "midesDialog", dialogAlertaId = "dialogAlerta";
// Dialeg Mida Imatges identificadors
const lableWidthId = "labelWidth", inputWidthId = "widthMesure", lableHeightId = "labelHeight", inputHeightId = "heightMesure", confirmImageBtnId = "confirmImageBtn", chboxProportionalId = "chboxProportional", selectSizeUnitId = "selectSizeUnit";
// Dialeg Característiques checkbox identificadors i noms
const chBoxTempsId = "chboxTime", chboxTempsName = "time", chBoxCapesStyleId = "chboxLayerStyle", chboxCapesStyleName = "layerStyle",  chBoxPosZoomId = "chboxPosZoom", chboxPosZoomName = "positionZoom", confirmCaractBtnId = "confirmCaractBtn", chboxCapesName = "layers", chboxEstilsName = "styles", chboxZoomName = "zoom", chboxCoordName = "coordinates";
const pixelUnit = "px", percentageUnit = "%";
const limitsMidesImatge = {};
var resultatMidesImatge = {};
var resultatCaract = {[chboxCapesName]: {}, [chboxEstilsName]: {}, [chboxZoomName]: {}, [chboxCoordName]: {}};
const nomImgPuntSincr = "sincrPoint";

//Mostra la finestra que conté el llistat d'històries
function MostraFinestraTriaStoryMap()
{
	if (!ObreFinestra(window, "triaStoryMap"))
		return;
	OmpleFinestraTriaStoryMap(window, "triaStoryMap");
}

function TancaFinestra_triaStoryMap()
{
	indexStoryMapActiu=null;
}


function TancaFinestra_visualitzaStoryMap()
{
	indexStoryMapActiu=null;
}

//Omple la finestra amb el llistat d'històries (i mostra la imatge de pre-visualització de la història).
function OmpleFinestraTriaStoryMap(win, name)
{
var cdns=[], i_story=0, ncol=2, nstory=0, i_real_story=[], newStory={"desc": GetMessageJSON("NewStorymap", "storymap"), "src": "propies/StoryMaps/afegir.svg", "url": "", "isNew": true};

	if (ParamCtrl.StoryMap == null)
	{
		ParamCtrl.StoryMap = [];
		ParamCtrl.StoryMap.push(newStory);
	}
	else if (ParamCtrl.StoryMap[ParamCtrl.StoryMap.length-1].isNew != true)
	{
		const indexNovaStorymap = ParamCtrl.StoryMap.findIndex(story => story.isNew == true);
		if (indexNovaStorymap != -1)
		{
			ParamCtrl.StoryMap.splice(indexNovaStorymap, 1);
			ParamCtrl.StoryMap.push(newStory);
		}
		else 
		{
			ParamCtrl.StoryMap.push(newStory);	
		}
	}
	let indexSeg = 0;
	while (nstory < ParamCtrl.StoryMap.length)
	{
		if (ParamCtrl.StoryMap[nstory].EnvTotal && !EsEnvDinsAmbitActual(ParamCtrl.StoryMap[nstory].EnvTotal))
		{
			nstory++;
			continue;
		}
			
		i_real_story[indexSeg]=nstory;  // Ens quedem els índex que correpsonen a Stories dins l'àmbit del mapa.
		indexSeg++;
		nstory++;
	}
	cdns.push("<br>",
				GetMessage("SelectStory", "storymap"), ":" ,
				"<br><table class=\"Verdana11px\">");

	// Omplim totes les histories
	while (i_story<i_real_story.length)
	{
		const storyActual = ParamCtrl.StoryMap[i_real_story[i_story]];
		if ((i_story%ncol)==0)
			cdns.push("<tr>");
		cdns.push("<td style = 'vertical-align:text-top; text-align: center;'><a style='display: block;", /*background:", storyActual.compartida? "green" : "red", ";'*/" href='javascript:void(0)' onclick='");
		(storyActual.isNew) ? cdns.push("TancaICreaStoryMap();'>") : cdns.push("TancaIIniciaStoryMap(", i_real_story[i_story], ");'>");
		cdns.push("<img src='",(storyActual.src) ? storyActual.src : (storyActual.srcData) ? storyActual.srcData : AfegeixAdrecaBaseSRC("1griscla.gif"),"' height='100' width='150' border='0'><p>",
			DonaCadena(storyActual.desc),
			"</p></a><input type='image' name='upload' style='position:relative; top:0px; right:0px; height:50px; width:50px;' src='pujada_nuvol.svg' alt='Upload storymap' onclick='CompartirStorymap(", i_real_story[i_story] ,")'><br></td>");
		/* Incrementem valor en aquest precís instant per aconseguir que
		incloure els tags <tr> i </tr> sigui l'adequat, tal que quan s'inclou
		<tr> el </tr> no s'inclou fins la següent iteració que compleixi
		la condició.*/
		i_story++;
		if ((i_story%ncol)==0 || i_story==nstory)
			cdns.push("</tr>");
	}
	cdns.push("</table>");
	contentFinestraLayer(win, name, cdns.join(""));
	indexStoryMapActiu=-1;
}

function TancaIIniciaStoryMap(i_story)
{
	//Tancar la caixa de les histories
	TancaFinestraLayer("triaStoryMap");
	IniciaStoryMap(i_story);
}

// Deficinció de la nova StoryMap
var novaStoryMap = {};

function TancaICreaStoryMap()
{
	//Tancar la finestra de la graella de les histories
	TancaFinestraLayer("triaStoryMap");

	if (isFinestraLayer(window, "creaStoryMap"))
	{
		const novaStoryMapFinestra = getFinestraLayer(window, "creaStoryMap");
		novaStoryMapFinestra.replaceChildren();
		const beginingStoryMapContent = ["<label for='title'>", GetMessage('Title') + ":", "</label><input type='text' id='", storyTitolId, "' name='title' minlength='1' size='25'><br><br><img id='", imageThumbnailId, "' alt='", GetMessage("StorymapThumbnailImage", "storymap"), "' /><br><input id='", inputThumbnailId, "' type='file' align='center' accept='.jpg,.jpeg,.png' onChange='CarregaImatgeStoryMap(this, \"imageThumbnail\", )'><br><br><input class='buttonDialog' type='button' value='", GetMessage("Next"), "' onClick='SeguentPasStoryMap()'>"];
		novaStoryMapFinestra.innerHTML = beginingStoryMapContent.join("");
	}
	ObreFinestra(window, "creaStoryMap");
}
/**
 * Seqüència sincrona de operacións per a la selecció de la imatge pertinent, modificació de les mides d'aquesta i càrrega de <img> dins del HTML del Tiny.    
 * @param {*} input Element DOM tipus input que incorpora la imatge. 
 */
function CarregaImatgeStoryMap(input) 
{
	const fitxerObjectiu = input.files ? input.files[0] : null;

	if (fitxerObjectiu &&  (fitxerObjectiu.type == pngMIMETType || fitxerObjectiu.type == jpgMIMEType || fitxerObjectiu.type == jpegMIMEType))
	{
		if (input.id == inputImageId)
		{
			CarregaImatgeRelatStoryMap(fitxerObjectiu);
		}
		else if (input.id == inputThumbnailId)
		{
			CarregaImatgeMiniaturaStoryMap(fitxerObjectiu);
		}
	}
}

/**
 * Seqüència sincrona de operacións per a la selecció de la imatge pertinent, modificació de les mides d'aquesta i càrrega de <img> dins del HTML del Tiny.    
 * @param {*} fitxerImatge Element DOM tipus input que incorpora la imatge. 
 */
function CarregaImatgeRelatStoryMap(fitxerImatge) 
{
	const midesPromise = new Promise((resolve, reject) => {

		//Mirem la mida de la imatge
		const urlIamge = URL.createObjectURL(fitxerImatge);
		const imageToMesure = new Image();

		imageToMesure.onload =  function () {
			URL.revokeObjectURL(this.src);
			if (this)
			{
				resolve(this);
			}
			else
			{
				reject(new Error("Error carregant la imatge."))
			}
		};

		imageToMesure.src = urlIamge;
	}).then(result => {

		MostraDialogImatgeNavegador(result);

	});
}
/**
 * Seqüència sincrona de operacións per a la selecció de la imatge pertinent, modificació de les mides d'aquesta i càrrega de <img> de portada del relat.    
 * @param {*} fitxerImatge Element DOM tipus input que incorpora la imatge. 
 */
function CarregaImatgeMiniaturaStoryMap(fitxerImatge) 
{
	//Mirem la mida de la imatge
	const urlIamge = URL.createObjectURL(fitxerImatge);
	const imageToMesure = new Image();
	try{
		imageToMesure.onload =  function () {
			URL.revokeObjectURL(this.src);
			if (this)
			{
				const canvasThumbnailId = "canvasReduccioThumbnail";
				let canvasReduccioThumbnail = document.getElementById(canvasThumbnailId);
				if (!canvasReduccioThumbnail)
				{
					canvasReduccioThumbnail = document.createElement("canvas");
					canvasReduccioThumbnail.setAttribute("id", canvasThumbnailId);
				}
				canvasReduccioThumbnail.width = midaImatgeMiniaturaMaximaPx;
				canvasReduccioThumbnail.height = midaImatgeMiniaturaMaximaPx * this.height / this.width;
				const cntx = canvasReduccioThumbnail.getContext("2d");
				cntx.drawImage(this, 0, 0, canvasReduccioThumbnail.width, canvasReduccioThumbnail.height);
				document.getElementById(imageThumbnailId).src = canvasReduccioThumbnail.toDataURL("image/jpeg", 0.5);
 			}
		}
	}
	catch (err)
	{
		throw new Error(GetMessage("ErrorReadingImages", "storymap") + ":", {cause: err});
	}

	imageToMesure.src = urlIamge;
}
/**
 * Crea un diàleg que apareix flotant al centre de la pantalla per a que l'usuari decideixi
 * sobre la mida de la imatge que vol incorporar al Storymap. 
 * @param {*} imatge El fitxer imatge que es vol incloure a la Storymap.
 * @returns Cadena HTML amb les mides de la imatge que es preten carregar i 2 caixes de text per indicar-ne les noves mides.
 */
function CreaDialegMidesImatge(imatge)
{
	const textMides = GetMessage("OriginalMeasurementsImage", "storymap") + ": <b>" + imatge.width + GetMessage("pxWidth", "storymap") + "</b>, <b>" + imatge.height + GetMessage("pxHeight", "storymap") + "</b>."
	const dialogHtml = ["<form><p>", textMides, "</p><div align-items='stretch'><p style='align: center'><label id='" + lableWidthId + "' for='", inputWidthId, "'>"+ GetMessage("ReducedWidth", "storymap") + " (" + percentageUnit +"):</label><input type='text'  id='", inputWidthId, "' title='Only digits'><label id='" + lableHeightId + "' for='", inputHeightId, "'>"+ GetMessage("ReducedHeight", "storymap") + " (" + percentageUnit + "):</label><input type='text' title='Only digits' id='", inputHeightId, "' ></p><p><label for='" + selectSizeUnitId + "'>" + GetMessage("ChooseUnitMeasurement", "storymap") + ":</label><select id='" + selectSizeUnitId + "'><option value='" + pixelUnit + "'>" + pixelUnit + "</option><option value='" + percentageUnit + "' selected>" + percentageUnit + "</option></select><label for='", chboxProportionalId, "'>" + GetMessage("MaintainProportionality", "storymap") + "</label><input type='checkbox' id='", chboxProportionalId, "' checked></p><p style='align: center'><button id='", confirmImageBtnId, "' class='button_image_dialog buttonDialog' formmethod='dialog' value='default'>" + GetMessage("OK") + "</button><button class='button_image_dialog buttonDialog' value='cancel' formmethod='dialog'>" + GetMessage("Cancel") + "</button></p></div></form>"];

	return CreaDialog(dialogMidesId, dialogHtml.join(""));
}
/**
 * Crea un diàleg per a elegir quines característiques del mapa mantindre per un determinat fragment del relat.
 * @returns 
 */
function CreaDialegSincronitzarAmbMapa()
{
	const dialogHtml = ["<form><p>" + GetMessage("SelectMapFeatures", "storymap") + ":</p><div class='horizontalSpreadElements'><p><input type='checkbox' id='", chBoxPosZoomId, "' name='", chboxPosZoomName,"'><label for='", chBoxPosZoomId, "'>" + GetMessage("Position&Zoom", "storymap") + "</label></p><p><input type='checkbox' id='", chBoxCapesStyleId, "' name='", chboxCapesStyleName,"'><label for='", chBoxCapesStyleId, "'>" + GetMessage("Layers&Styles", "storymap") + "</label></p><p><input type='checkbox' id='", chBoxTempsId, "' name='", chboxTempsName,"'><label for='", chBoxTempsId, "'>" + GetMessage("Times", "storymap") + "</label></p></div><div class= 'horizontalSpreadElements'><button id='", confirmCaractBtnId, "' formmethod='dialog' value='default'>" + GetMessage("OK") + "</button><button value='cancel' formmethod='dialog'>" + GetMessage("Cancel") + "</button></div></form>"];

	return CreaDialog(dialogCaractId, dialogHtml.join(""));
}

function CreaDialegAlertaSeleccio()
{
	const dialogHtml = ["<form><div><p>" + GetMessage("SaveMapCharactMandatory", "storymap") + ":</p><p style= 'text-align: center;'><button class='buttonDialog' value='cancel' formmethod='dialog'>", GetMessage("OK"), "</button></p></div></form>"];

	const dialog = CreaDialog(dialogAlertaId, dialogHtml.join(""));

	dialog.setAttribute("style", "max-width: 25%;");

	return dialog;
}

function MostraDialogImatgeNavegador(imatgeSeleccionada)
{
	const esImatgeApaisada = imatgeSeleccionada.width >= imatgeSeleccionada.height;
	function calcularLimitImatges(imatgeSeleccionada)
	{
		let proporcio = imatgeSeleccionada.height/imatgeSeleccionada.width;
		if (esImatgeApaisada)
		{
			limitsMidesImatge.width = {};
			limitsMidesImatge["width"][percentageUnit] = midaImatgeMaximaPx * 100 / imatgeSeleccionada.width;
			limitsMidesImatge["width"][pixelUnit] = midaImatgeMaximaPx;
			limitsMidesImatge.height = {};
			limitsMidesImatge["height"][pixelUnit] = limitsMidesImatge["width"][pixelUnit] * proporcio;
			limitsMidesImatge["height"][percentageUnit] = limitsMidesImatge["height"][pixelUnit] * 100 / imatgeSeleccionada.height;
		}
		else 
		{
			limitsMidesImatge.height = {};
			limitsMidesImatge["height"][percentageUnit] = midaImatgeMaximaPx * 100 / imatgeSeleccionada.height;
			limitsMidesImatge["height"][pixelUnit] = midaImatgeMaximaPx;
			limitsMidesImatge.width = {};
			limitsMidesImatge["width"][pixelUnit] = limitsMidesImatge["height"][pixelUnit] * (1 / proporcio);
			limitsMidesImatge["width"][percentageUnit] = limitsMidesImatge["width"][pixelUnit] * 100 / imatgeSeleccionada.width;
		}	
	}

	calcularLimitImatges(imatgeSeleccionada);
	// Element del DOM que ens permet anclar el dialeg
	let anchorElement = document.getElementById(inputImageId);
	
	if (anchorElement)
	{
		const midesDialog = CreaDialegMidesImatge(imatgeSeleccionada);
		anchorElement.insertAdjacentElement("afterend", midesDialog);
		
		midesDialog.addEventListener("close", (event) => {
			// Després de tancar el missatge emergent de les mides.
			let resultatMides = JSON.parse(event.target.returnValue);
			if (resultatMides) {
				const canvasId = "reduccioImatges";
				let canvasReduccioImg = document.getElementById(canvasId);
				if (!canvasReduccioImg)
				{
					canvasReduccioImg = document.createElement("canvas");
					canvasReduccioImg.setAttribute("id", canvasId);
				} 

				canvasReduccioImg.width = resultatMides.width;
				canvasReduccioImg.height = resultatMides.height;

				const cntx = canvasReduccioImg.getContext("2d");
				cntx.drawImage(imatgeSeleccionada, 0, 0, resultatMides.width, resultatMides.height);
				const tinyEditor = tinymce.get(tinyTextId);
				const imatgeReduida = canvasReduccioImg.toDataURL("image/jpeg", 0.5);
				// "data:," és el resultat de crear una imatge amb canvas mides (0,0). Això passa en introduir caracters enlloc de números.
				if (tinyEditor && imatgeReduida && imatgeReduida!="data:,")
				{ 
					let writenOnTiny = tinyEditor.getContent();
					tinyEditor.setContent(writenOnTiny + "<img src='" + imatgeReduida + "' width=" + resultatMides.width + ">");
				}
			}
			resultatMidesImatge = {};
		});
		// Entrada de mides imatge
		const inputWidth = document.getElementById(inputWidthId);
		inputWidth.value = limitsMidesImatge["width"][percentageUnit];
		resultatMidesImatge.width = limitsMidesImatge["width"][percentageUnit];
		inputWidth.addEventListener("change", (event) => {
			if (chboxProportional.checked)
			{
				resultatMidesImatge = adaptImageGivenProportionaly({width: event.target.value, height: resultatMidesImatge.height}, imatgeSeleccionada, event.target);
				updateSizeInputValues(resultatMidesImatge.width, resultatMidesImatge.height);
			}
			else
			{
				resultatMidesImatge.width = parseFloat(event.target.value);
			}
			confirmBtn.disabled = checkForEmptyValuesOrNonNumbers(inputWidth, inputHeight);
		});
		const inputHeight = document.getElementById(inputHeightId);
		inputHeight.value = limitsMidesImatge["height"][percentageUnit];
		resultatMidesImatge.height = limitsMidesImatge["height"][percentageUnit];
		inputHeight.addEventListener("change", (event) => {
			if (chboxProportional.checked)
			{
				resultatMidesImatge = adaptImageGivenProportionaly({width: resultatMidesImatge.width, height: event.target.value}, imatgeSeleccionada, event.target);
				updateSizeInputValues(resultatMidesImatge.width, resultatMidesImatge.height);
			}
			else
			{
				resultatMidesImatge.height = parseFloat(event.target.value);
			}			
			confirmBtn.disabled = checkForEmptyValuesOrNonNumbers(inputWidth, inputHeight);
		});
		// Checkbox Propocional
		const chboxProportional = document.getElementById(chboxProportionalId);
		chboxProportional.addEventListener("change", (event) => {
			if (event.target.checked)
			{
				resultatMidesImatge = adaptImageGivenProportionaly(resultatMidesImatge, imatgeSeleccionada, null);
				updateSizeInputValues(resultatMidesImatge.width, resultatMidesImatge.height);
				confirmBtn.disabled = checkForEmptyValuesOrNonNumbers(inputWidth, inputHeight);
			}
		});
		// Selector de unitats
		const selector = document.getElementById(selectSizeUnitId);
		selector.addEventListener("change", (event) => {
			updateUnitChangeInputValuesLabelUnits(event.target.value, imatgeSeleccionada);
		});
		// Botó de confirmació
		const confirmBtn = document.getElementById(confirmImageBtnId);
		confirmBtn.addEventListener("click", (event) => {
			event.preventDefault();
			if (checkImageLimits())
			{
				let midesConfirmades = 0;
				selector.value == percentageUnit ? midesConfirmades = JSON.stringify({width: resultatMidesImatge.width*imatgeSeleccionada.width/100, height: resultatMidesImatge.height*imatgeSeleccionada.height/100}) : midesConfirmades = JSON.stringify(resultatMidesImatge);

				midesDialog.close(midesConfirmades); // S'envia les mides en pixels al diàleg.	
			}
			else 
			{
				alert("La mida de imatge desitjada supera el límit establert. Redueixi-la.");
			}
		});
		
		// Comprovem que no tenim valors en els caixetins de mides.
		const checkForEmptyValuesOrNonNumbers = new Function("inputWidth", "inputHeight", "return isNaN(parseFloat(inputWidth.value)) || isNaN(parseFloat(inputHeight.value))");
		
		// Comprovem per les proporcions de la imatges quines són les mides més amplies que ens podem permetre.
		function checkImageLimits()
		{
			if (chboxProportional.checked)
			{
				if (esImatgeApaisada)
				{
					return resultatMidesImatge.width <= limitsMidesImatge["width"][selector.value];
				}
				else 
				{
					return resultatMidesImatge.height <= limitsMidesImatge["height"][selector.value];
				}
			}
			else
			{
				if (selector.value == pixelUnit)
				{
					return resultatMidesImatge.width*resultatMidesImatge.height <= numMaximPixels;
				}
				else
				{
					return (resultatMidesImatge.width*imatgeSeleccionada.width/100) * (resultatMidesImatge.height*imatgeSeleccionada.height/100) <= numMaximPixels;

				}
			}
		}

		// En tenir només 1 de les dos mides definides, com adaptem l'altra dimensió per a que mantingui la proporció.
		function adaptImageGivenProportionaly(midesAdaptImatge, imatgeOriginal, novaMesura) {
			
			if(!(isNaN(midesAdaptImatge.width) && isNaN(midesAdaptImatge.height)))
			{
				let proporcio =  imatgeOriginal.height / imatgeOriginal.width;
				// Quan tenim dos valors prenem la base del width per buscar la proporcionalitat. Decisió arbitraria.
				if (!isNaN(midesAdaptImatge.width) && (novaMesura == inputWidth || novaMesura == null))
				{
					if (selector.value == percentageUnit)
					{
						let valorPxWidth = midesAdaptImatge.width * imatgeOriginal.width / 100;
						let valorPxHeight = proporcio * valorPxWidth;
	
						return {width: midesAdaptImatge.width, height: valorPxHeight * 100 / imatgeOriginal.height};
					}
					else
					{
						return {width: midesAdaptImatge.width, height: proporcio * midesAdaptImatge.width};
					}
				}
				else 
				{
					if (selector.value == percentageUnit)
					{
						let valorPxHeight = midesAdaptImatge.height * imatgeOriginal.height / 100;
						let valorPxWidth =  valorPxHeight * imatgeOriginal.width / imatgeOriginal.height;
	
						return {width: valorPxWidth * 100 / imatgeOriginal.width, height: valorPxHeight * 100 / imatgeOriginal.height};
					}
					else
					{
						return {width:  midesAdaptImatge.height * (1 / proporcio), height: midesAdaptImatge.height};
					}
				}
			} 
			else  
				return {width: NaN, height: NaN};
		};
		
		// Actualitzem els valors dels caixetins amb nous valors.
		function updateSizeInputValues(widthField, heightField) 
		{
			inputWidth.value = widthField;
			inputHeight.value = heightField;
		}

		// Actualitzem les unitats de mesura i els valors de les mides segons el nou valor del selector d'unitats.
		function updateUnitChangeInputValuesLabelUnits(nextUnit, imatgeOriginal)
		{	
			// Actualitza etiquetes unitats.
			const labelWidth = document.getElementById(lableWidthId);
			const labelHeight = document.getElementById(lableHeightId);
			if (nextUnit == percentageUnit)
			{
				labelWidth.innerText = labelWidth.innerText.replace(pixelUnit, percentageUnit);
				labelHeight.innerText = labelHeight.innerText.replace(pixelUnit, percentageUnit);
			}
			else 
			{
				labelWidth.innerText = labelWidth.innerText.replace(percentageUnit, pixelUnit);
				labelHeight.innerText = labelHeight.innerText.replace(percentageUnit, pixelUnit);
			}

			// Actualitza valors caixetins segons nova unitat de mesura.
			// Passem de valors en píxels a valors en percentatge.
			if (selector.value == percentageUnit)
			{
				resultatMidesImatge.width = isNaN(resultatMidesImatge.width) ? NaN : resultatMidesImatge.width * 100 / imatgeOriginal.width;
				resultatMidesImatge.height = isNaN(resultatMidesImatge.height) ? NaN : resultatMidesImatge.height * 100 / imatgeOriginal.height;
			}
			else // Passem de valors en percentatge a valors en píxels.
			{
				resultatMidesImatge.width = isNaN(resultatMidesImatge.width) ? NaN : resultatMidesImatge.width * imatgeOriginal.width / 100;
				resultatMidesImatge.height = isNaN(resultatMidesImatge.height) ? NaN : resultatMidesImatge.height * imatgeOriginal.height / 100;
			}

			updateSizeInputValues(resultatMidesImatge.width, resultatMidesImatge.height);
			
		}
		
		midesDialog.showModal();
	}
}

function MostraDialogCaracteristiquesNavegador(ultimElemId)
{
	const ultimElem = document.getElementById(ultimElemId);
	const tinyEditor = tinymce.get(tinyTextId);

	if (ultimElem && tinyEditor.selection.getContent({format: "html"}) != "")
	{
		const caractDialog = CreaDialegSincronitzarAmbMapa();
		ultimElem.insertAdjacentElement("afterend", caractDialog);		

		caractDialog.addEventListener("close", (event) => {
			
			if (event.target.returnValue != "")
			{
				let resultatCaractUsuari = JSON.parse(event.target.returnValue);
				
				if(resultatCaractUsuari[chboxPosZoomName]["status"])
				{
					resultatCaractUsuari[chboxCoordName]["attribute"] = {name: "data-mm-center", value: JSON.stringify(ObtenirCentre())};
					resultatCaractUsuari[chboxZoomName]["attribute"] = {name: "data-mm-zoom", value: ParamInternCtrl.vista.CostatZoomActual};
				}
	
				if(resultatCaractUsuari[chboxCapesStyleName]["status"])
				{
					const capesVisiblesIds = [];
					const estilsCapesIds = [];
					ParamCtrl.capa.filter(capa => { 
						if (capa.visible=="si")
						{
							capesVisiblesIds.push(capa.id);
							estilsCapesIds.push(capa.estil ? capa.estil[capa.i_estil].id : "")
						}
					});
					if (capesVisiblesIds.length > 0)
						resultatCaractUsuari[chboxCapesName]["attribute"] = {name: "data-mm-layers", value: capesVisiblesIds.toString()};
					if (estilsCapesIds.length > 0)
						resultatCaractUsuari[chboxEstilsName]["attribute"] = {name: "data-mm-styles", value: estilsCapesIds.toString()};
				}
	
				let divResultatCaract = document.createElement("div");
	
				Object.keys(resultatCaractUsuari).forEach((caracteristica) => {
					if(resultatCaractUsuari[caracteristica]["attribute"])
					{
						divResultatCaract.setAttribute(resultatCaractUsuari[caracteristica]["attribute"]["name"], resultatCaractUsuari[caracteristica]["attribute"]["value"]);
					}
				});
				const tinyEditor = tinymce.get(tinyTextId);
				const tinyParent = tinyEditor.selection.getNode();
				if (tinyParent && tinyParent.childNodes)
				{
					// Distingim quan la selecció s'ha fet sobre 1 sol node o sobre més d'un.
					if (tinyEditor.selection.getStart() == tinyEditor.selection.getEnd())
					{
						tinyParent.parentNode.insertBefore(divResultatCaract, tinyParent);
						divResultatCaract.appendChild(tinyParent);
					}
					else
					{
						const nodesEditor = Array.from(tinyParent.childNodes);
						const nodesToCharacterize = nodesEditor.slice(nodesEditor.indexOf(tinyEditor.selection.getStart()), nodesEditor.indexOf(tinyEditor.selection.getEnd())+1);
						tinyParent.insertBefore(divResultatCaract, tinyParent.childNodes[nodesEditor.indexOf(tinyEditor.selection.getStart())]);
						nodesToCharacterize.forEach((node) => divResultatCaract.appendChild(node));
					}
					// Afegim la imatge que indica que hem realitzat una sincronització amb el mapa.
					const paragrafImatge = document.createElement("p");
					const imatgeSincr = document.createElement("img");

					imatgeSincr.src = "storymap_sincro.svg";
					imatgeSincr.setAttribute("style","width:22px; height:22px;")
					imatgeSincr.setAttribute("name",nomImgPuntSincr);
					paragrafImatge.appendChild(imatgeSincr);
					divResultatCaract.appendChild(paragrafImatge);
				}
			}
		});

		function saveCheckStatus(checkbox)
		{
			resultatCaract[checkbox.name]["status"] = checkbox.checked;
		};

		const contenedorCheckbox = document.querySelector("dialog[id='"+ dialogCaractId + "']");
		const checkboxes = contenedorCheckbox.querySelectorAll("input[type='checkbox']");
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener("change", (event) => saveCheckStatus(event.target));
			resultatCaract[checkbox.name] = {status: false};
		});
		
		const confirmBtn = document.getElementById(confirmCaractBtnId);
		confirmBtn.addEventListener("click", (event) => {
			event.preventDefault();
			caractDialog.close(JSON.stringify(resultatCaract));
		});

		caractDialog.showModal();
	}
	else
	{
		let dialogAlerta = document.getElementById(dialogAlertaId);

		if (!dialogAlerta)
		{
			dialogAlerta = CreaDialegAlertaSeleccio();
			ultimElem.insertAdjacentElement("afterend", dialogAlerta);
		}

		dialogAlerta.showModal();
	}
}

function SeguentPasStoryMap()
{	
	GuardarInformacioInicialStoryMap();
	
	const novaStoryMapFinestra = getFinestraLayer(window, "creaStoryMap");
	novaStoryMapFinestra.replaceChildren();
	const endButtonId= "endUpButton";
	const htmlExternTiny = ["<div id='storyMapInterface'>", 
	"<input hidden id='", inputImageId, "' type='file' align='center' accept='.jpg,.jpeg,.png' onChange='CarregaImatgeStoryMap(this)'>",
	"<input id ='", endButtonId, "' class='buttonDialog' type='button' value='", GetMessage("End"), "' onClick='FinalitzarStoryMap()'>"];
	novaStoryMapFinestra.innerHTML = htmlExternTiny.join("");

	// Creo aquest textarea fora de l'string "htmlExternTiny" per a que l'eina tinymce el detecti i el pugui substituir
	const tinytextarea = document.createElement("textarea");
	tinytextarea.setAttribute("id", tinyTextId)
	//tinytextarea.innerHTML = "hello <input data-attr-invent='styyle:\"elmeue\"'></input> world"
	const endBtn = document.getElementById(endButtonId);
	endBtn.parentNode.insertBefore(tinytextarea, endBtn);
	endBtn.parentNode.insertBefore(document.createElement("br"), endBtn);

	tinymce.init({
        target: tinytextarea,
		plugins: 'code',
		toolbar: 'undo redo styles bold italic insertImageButton insertLocationZoom | alignleft aligncenter alignright alignjustify bullist numlist outdent indent code',
		promotion: false,
		min_height: 375,
		min_width: 740,
		setup: (editor) => {
			editor.ui.registry.addButton("insertImageButton", {
				text: GetMessage("AttachImage", "storymap"),
				icon: "image",
				tooltip: GetMessage("OpensImageFilesSelector", "storymap"),
				onAction: (_) => document.getElementById(inputImageId).click()
			});
			editor.ui.registry.addButton("insertLocationZoom", {
				text: GetMessage("SyncWithMap", "storymap"),
				icon: "ordered-list",
				tooltip: GetMessage("SavesMapCharacteristics", "storymap"),
				onAction: (_) => MostraDialogCaracteristiquesNavegador(endButtonId)
			});
		}
    });


}

function FinalitzarStoryMap()
{
	const tinyEditor = tinymce.get(tinyTextId);
	const tinyEditorBody = tinyEditor.getBody();
	const imatgesSincro = tinyEditorBody.querySelectorAll("img[name='" + nomImgPuntSincr + "']");
	// Eliminem les imatges que indiquen cada punt del l¡relat on s'ha sincronitzat el relat amb el mapa.
	imatgesSincro.forEach((imatge) => imatge.parentNode.removeChild(imatge));

	const cdns = ["<html><h1>"+novaStoryMap.titol+"</h1><br>", "<div>", tinyEditor.getContent({format: "html"}), "</div>","</html>"];
	novaStoryMap.relat = cdns;
	novaStoryMap.identificador = novaStoryMap.titol + "_" +  Date.now();
	GuardaEntradaStorymapConfig();
	TancaFinestraLayer("creaStoryMap");
}

function GuardaEntradaStorymapConfig()
{
	const storyMapAGuardar = {compartida: false};
	if (novaStoryMap.identificador && novaStoryMap.identificador != "")
	{
		storyMapAGuardar.id = novaStoryMap.identificador;
		
		if (novaStoryMap.titol)
			storyMapAGuardar.desc = novaStoryMap.titol;
		if (novaStoryMap.imatgePortada)
			storyMapAGuardar.srcData = novaStoryMap.imatgePortada;
		if (novaStoryMap.relat)
			storyMapAGuardar.html = novaStoryMap.relat;

		// Guardem la nova entrada de Storymap al config.
		ParamCtrl.StoryMap.push(storyMapAGuardar);
	}
}

function GuardarInformacioInicialStoryMap()
{
	novaStoryMap.titol = document.getElementById(storyTitolId).value;
	const imatgePortada = document.getElementById(imageThumbnailId);
	if (imatgePortada && imatgePortada.src != "")
		novaStoryMap.imatgePortada = imatgePortada.src;
}

//Inicia una Storymap
function IniciaStoryMap(i_story)
{
	const relatACarregar = ParamCtrl.StoryMap[i_story];
	if (relatACarregar.compartida == false) 
	{
		// Relat creat en el propi navegador i que no té fitxer .html, està al config.json directament.
		CarregaStoryMap(relatACarregar.html, i_story);
	}
	else
	{
		loadFile(DonaCadena(relatACarregar.url), "text/html", CarregaStoryMap, null /*error*/, i_story);
		//Mode Pantalla Completa en iniciar la història:
		//openFullscreen(document.documentElement);
		//Desplaçar finestra a l'esquerra de la pantalla quan Mode Pantalla Completa: PENDENT
	}	
}


//removes the <base> tag if it exists.
function RemoveBaseHTMLTag(text_html)
{
var base;
	if (-1!=(base=text_html.indexOf("<base ")) || -1!=(base=text_html.indexOf("<Base ")) || -1!=(base=text_html.indexOf("<BASE ")))
	{
		var endbase=text_html.indexOf('>', base+6);
		if (-1!=endbase)
			return text_html.substring(0, base) + text_html.substring(endbase+1);
	}
	return text_html;
}

//Crea Storymap
function CarregaStoryMap(text_html, i_story)
{
const relatACarregar = ParamCtrl.StoryMap[i_story];

	if (relatACarregar.desc)
		titolFinestraLayer(window, "storyMap", DonaCadena(relatACarregar.desc));

	if (typeof relatACarregar.MargeEsq!=="undefined" || typeof relatACarregar.MargeSup!=="undefined" ||
	    relatACarregar.Ample || relatACarregar.Alt)
	{
		var rect=getRectFinestraLayer(window, "storyMap");
		moveFinestraLayer(window, "storyMap", (typeof relatACarregar.MargeEsq!=="undefined" && relatACarregar.MargeEsq>=0) ? relatACarregar.MargeEsq : rect.esq,
				(typeof relatACarregar.MargeSup!=="undefined" && relatACarregar.MargeSup>=0) ? relatACarregar.MargeSup : rect.sup,
				(relatACarregar.Ample) ? relatACarregar.Ample : rect.ample,
				(relatACarregar.Alt) ? relatACarregar.Alt : rect.alt);
	}

	contentFinestraLayer(window, "storyMap", RemoveBaseHTMLTag(text_html));

	ObreFinestra(window, "storyMap")
	indexStoryMapActiu=i_story;

	AfegeixMarkerStoryMapVisible();

	darrerNodeStoryMapVisibleExecutat=null;
	ExecutaAttributsStoryMapVisible();
}
// Reiniciar els valors que intervenen en la creació de l'StoryMap.
function TancaFinestra_storyMap()
{
	const novaStoryMapFinestra = getFinestraLayer(window, "creaStoryMap");
	tinymce.remove("textarea");
	novaStoryMapFinestra.replaceChildren();
	novaStoryMap = {};
	indexStoryMapActiu=null;
}

function isElemScrolledIntoViewDiv(el, div, partial)
{
	var rect_el = el.getBoundingClientRect();
	var rect_div=div.getBoundingClientRect();

	if (partial)
	{
		//Partially visible elements return true:
		//return rect_div.top < rect_el.bottom && rect_div.bottom > rect_el.top;
		return rect_div.top <= rect_el.top+rect_el.height*partial && rect_div.bottom >= rect_el.top;
	}
	//Only completely visible elements return true:
	//return (elemTop >= 0) && (elemBottom <= window.innerHeight);
	return rect_div.top <= rect_el.top && rect_div.bottom >= rect_el.bottom;
}

function AfegeixMarkerStoryMapVisible()
{
	var div=getFinestraLayer(window, "storyMap");
	AfegeixMarkerANodesFillsStoryMapVisible(div, div.childNodes, 0);
}

//Els tags "vendor specific" han de començar per "data-" https://www.w3schools.com/tags/att_data-.asp
function AfegeixMarkerANodesFillsStoryMapVisible(div, nodes, i_mm)
{
var node, attribute;

	for (var i = 0; i < nodes.length; i++)
	{
		node=nodes[i];
		if (node.nodeType!=Node.ELEMENT_NODE)
			continue;
		if (node.attributes)
		{
			for (var i_at = 0; i_at < node.attributes.length; i_at++)
			{
				attribute=node.attributes[i_at];
				if (attribute.name=='data-mm-crs' || attribute.name=="data-mm-center" || attribute.name=='data-mm-zoom' || attribute.name=="data-mm-layers" ||
					attribute.name=="data-mm-time" || attribute.name=='data-mm-sels' || attribute.name=='data-mm-histos')
				{
					//Afegir el simbol dins
					// Create a text node:
					var divNode = document.createElement("span");
					divNode.innerHTML=DonaTextImgGifSvg("id_storymap_mm_action_"+i_mm, "storymap_mm_action_"+i_mm, "storymap_action", 14, GetMessage("ActionOnMap", "storymap"), null);
					i_mm++;
					node.insertBefore(divNode, node.children[0]);
					break;
				}
			}
		}
		if (node.childNodes && node.childNodes.length)
		{
			if (AfegeixMarkerANodesFillsStoryMapVisible(div, node.childNodes, i_mm))
				return true;
		}
	}
	return false;
}

var darrerNodeStoryMapVisibleExecutat=null;

function RecorreNodesFillsAttributsStoryMapVisible(div, nodes)
{
var hihacanvis, node, attribute;

	//var div=getFinestraLayer(window, "storyMap");

	for (var i = 0; i < nodes.length; i++)
	{
		node=nodes[i];
		if (node.nodeType!=Node.ELEMENT_NODE)
			continue;
		if (!isElemScrolledIntoViewDiv(node, div, 0.85))
			continue;
		hihacanvis=false;

		if (node.attributes)
		{
			if (darrerNodeStoryMapVisibleExecutat==node)
				return false;

			for (var i_at = 0; i_at < node.attributes.length; i_at++)
			{
				attribute=node.attributes[i_at];
				if (attribute.name=='data-mm-crs')   //NEcessito aplicar aquest abans que tots els altres.
				{
					if (attribute.value.trim().length)
					{
						if (0==CommandMMNSetCRS(attribute.value.trim()))
							hihacanvis=true;
					}
				}
			}
			for (var i_at = 0; i_at < node.attributes.length; i_at++)
			{
				attribute=node.attributes[i_at];
				if (attribute.name=="data-mm-center")
				{
					var mmcenter = attribute.value.trim();
					if (mmcenter.length)
					{
						var punt;
						try {
							punt=JSON.parse(mmcenter);
						}
						catch (e) {
							alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name + ". " + e + ". " +
										GetMessage("ParameterValueFoundIs", "storymap") + ": "  + mmcenter);
							break;
						}
						if (0==CommandMMNSetCenterCoord(punt))
							hihacanvis=true;
					}
					else
						alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name);
				}
				else if (attribute.name=='data-mm-zoom')
				{
					if (attribute.value.trim().length)
					{
						if (0==CommandMMNSetZoom(parseFloat(attribute.value.trim())))
							hihacanvis=true;
					}
				}
				else if (attribute.name=="data-mm-layers")
				{
					for (var i_styles = 0; i_styles < node.attributes.length; i_styles++)
					{
						if (node.attributes[i_styles].name=="data-mm-styles")
							break;
					}
					CommandMMNSetLayersAndStyles(attribute.value.trim(),
							(i_styles == node.attributes.length) ? null : node.attributes[i_styles].value.trim(),
							"data-mm-layers");
					hihacanvis=true;
				}
				else if (attribute.name=="data-mm-time")
				{
					var datejson;
					var mmtime = attribute.value.trim();
					if (mmtime.length)
					{
						try
						{
							datejson=JSON.parse(mmtime);
						}
						catch (e)
						{
							alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name + ". " + e + ". "+
										GetMessage("ParameterValueFoundIs", "storymap") + ": " + mmtime);
							break;
						}
						if (0==CommandMMNSetChangeDateTime(datejson))
							hihacanvis=true;
					}
				}
				else if (attribute.name=='data-mm-sels')
				{
					var mmsels = "["+attribute.value.trim().replaceAll('¨', '\'')+"]";
					if (mmsels.length>3)
					{
						var sels;
						try {
							sels=JSON.parse(mmsels);
						}
						catch (e) {
							alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name + ". " + e + ". " +
										GetMessage("ParameterValueFoundIs", "storymap") + ": "  + mmsels);
							break;
						}
						if (0==CommandMMNSelections(sels))
							hihacanvis=true;
					}
					else
						alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name);
				}
				else if (attribute.name=='data-mm-histos')
				{
					var mmhistos = "["+attribute.value.trim()+"]";
					if (mmhistos.length>3)
					{
						var histos;
						try {
							histos=JSON.parse(mmhistos);
						}
						catch (e) {
							alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name + ". " + e + ". " +
										GetMessage("ParameterValueFoundIs", "storymap") + ": "  + mmhisto);
							break;
						}
						if (0==CommandMMNHistograms(histos))
							hihacanvis=true;
					}
					else
						alert(GetMessage("WrongFormatParameter")+ ": " + attribute.name);
				}
			}
			if (hihacanvis)
			{
				darrerNodeStoryMapVisibleExecutat=node;
				if (!histos)
					TancaTotsElsHistogramaFinestra();
				RepintaMapesIVistes();
				return true;
			}
		}
		if (node.childNodes && node.childNodes.length)
		{
			if (RecorreNodesFillsAttributsStoryMapVisible(div, node.childNodes))
				return true;
		}
	}
	return false;
}

var timerExecutaAttributsStoryMapVisible=null;

function ExecutaAttributsStoryMapVisibleEvent(event)
{
	if (timerExecutaAttributsStoryMapVisible)
		clearTimeout(timerExecutaAttributsStoryMapVisible);
	timerExecutaAttributsStoryMapVisible=setTimeout(ExecutaAttributsStoryMapVisible,500);
}

function ExecutaAttributsStoryMapVisible()
{
	var div=getFinestraLayer(window, "storyMap")
	RecorreNodesFillsAttributsStoryMapVisible(div, div.childNodes);
	timerExecutaAttributsStoryMapVisible=null;
}

// Puja al Nimmbus un relat de mapes.
function CompartirStorymap(i_story)
{
	const relatACompartir = ParamCtrl.StoryMap[i_story];
	GUFCreateFeedbackWithReproducibleUsage([{title: relatACompartir.desc, code: relatACompartir.desc, codespace: ParamCtrl.ServidorLocal}],
			{abstract: null, specific_usage: GetMessage("ShareStorymap", "storymap"),
			ru_code: JSON.stringify(relatACompartir.html), ru_code_media_type: "application/json",
			ru_platform: ToolsMMN, ru_version: VersioToolsMMN.Vers+"."+VersioToolsMMN.SubVers, ru_schema: config_schema_storymap
			},
			ParamCtrl.idioma, "");
}
