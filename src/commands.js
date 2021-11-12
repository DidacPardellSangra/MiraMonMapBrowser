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
    amb l'ajut de Alba Brobia (a brobia at creaf uab cat)
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

//----

function CommandMMNChangeZoom(costat)
{
	if (isNaN(costat))
	{
		alert(DonaCadenaLang({"cat":"Format del valor del costat de zoom erroni:\nS'ha d'indicar un valor num�ric.",
					"spa":"Formato del lado de zoom err�neo:\nSe debe indicar un valor num�rico.",
					"eng":"Zoom size format is incorrectly:\nIt Must indicate a numeric value.",
					"fre":"Format des zoom erron�:\nVous devez indiquer une valeur num�rique."}));
		return;
	}
	for (var nivell=0; nivell<ParamCtrl.zoom.length; nivell++)
	{
		if (ParamCtrl.zoom[nivell].costat==costat)
		{
			CanviaNivellDeZoom(nivell, false);
			return 0;
		}
	}
	if (nivell==ParamCtrl.zoom.length)
		alert(DonaCadenaLang({"cat":"El costat de zoom sol�licitat no �s un dels costats disponibles en aquest navegador.",
					"spa":"El lado de zoom solicitado no es uno de los lados disponibles en este navegador.",
					"eng":"The zoom size requested is not available in this browser.",
					"fre":"	La taille de zoom demand�e n'est pas disponible dans ce navigateur."}));
	return 1;
}

function CommandMMNCenterCoord(punt)
{
	if(typeof punt.x === 'undefined' || typeof punt.y === 'undefined' || isNaN(punt.x) || isNaN(punt.y))
	{
		alert(DonaCadenaLang({"cat":"Format de les coordenades erroni:\nS'ha d'indicar dos valors num�rics en el format: ",
					"spa":"Formato de las coordenadas err�neo:\nSe debe indicar dos valores num�ricos en el formato: ",
					"eng":"Coordinate format is incorrectly:\nTwo numerical values are required in the format: ",
					"fre":"Format des coordonn�es erron�:\nDeux valeurs num�riques sont requises dans le format: "}) + "{x: ##, y: ##}");
			return 1;
	}
	CentraLaVista(punt.x, punt.y);
	return 0;
}