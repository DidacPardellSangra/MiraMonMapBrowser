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

    Copyright 2001, 2023 Xavier Pons

    Aquest codi JavaScript ha estat idea de Joan Mas� Pau (joan maso at uab cat)
    amb l'ajut de Alba Brobia (a brobia at creaf uab cat) i Didac Pardell (d.pardell at creaf uab cat)
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

var MessageLang={
	"TheLanguageName": {
	  "cat": "Catal�",
	  "spa": "Espa�ol",
	  "eng": "English",
	  "fre": "Fran�ais",
	  "cze": "Anglictina"
	},
	"MissingMessage": {
	  "cat": "Missatge no trobat",
	  "spa": "Mensage no encontrado",
	  "eng": "Missing message",
	  "fre": "Message non trouv�",
	  "cze": "Chybej�c� zpr�va"
	},
	"neitherRecognizedNorImplemented": {
	  "cat": "no reconnegut o implementat",
	  "spa": "no reconocido o implementado",
	  "eng": "neither recognized nor implemented",
	  "fre": "Ni reconnu ni mis en �uvre",
	  "cze": "nen� rozpozn�n ani implementov�n"
	},
	"UseTheFormat": {
	  "cat": "Useu el format",
	  "spa": "Use el formato",
	  "eng": "Use the format",
	  "fre": "Utilisez le format",
	  "cze": "Pou�ijte form�t"
	},
	"WrongFormatParameter": {
	  "cat": "Format de par�metre incorrecte",
	  "spa": "Formato de parametro incorrecto",
	  "eng": "Wrong format in parameter",
	  "fre": "Format incorrect dans le param�tre",
	  "cze": "�patn� form�t v parametru"
	},
	"ModifyName": {
	  "cat": "Modifica el nom",
	  "spa": "Modifica el nombre",
	  "eng": "Modify the name",
	  "fre": "Modifier le nom",
	  "cze": "Upravit n�zev"
	},
	"AddLayer": {
	  "cat": "Afegir capa",
	  "spa": "A�adir capa",
	  "eng": "Add layer",
	  "fre": "Ajouter couche",
	  "cze": "Pridat vrstvu"
	},
	"Georeference": {
	  "cat": "Georefer�ncia",
	  "spa": "Georeferencia",
	  "eng": "Georeference",
	  "fre": "G�or�f�rence",
	  "cze": "Georeference (noun)"
	},
	"Coordinates": {
	  "cat": "Coordenades",
	  "spa": "Coordenadas",
	  "eng": "Coordinates",
	  "fre": "Coordonn�es",
	  "cze": "Souradnice"
	},
	"CentralPoint": {
	  "cat": "Punt central",
	  "spa": "Punto central",
	  "eng": "Central point",
	  "fre": "Point central",
	  "cze": "Stredn� bod"
	},
	"CurrentReferenceSystem": {
	  "cat": "Sistema de refer�ncia actual",
	  "spa": "Sistema de referencia actual",
	  "eng": "Current reference system",
	  "fre": "Syst�me de r�f�rence actuel",
	  "cze": "Aktu�ln� referencn� syst�m"
	},
	"AvailableBoundary": {
	  "cat": "�mbit disponible",
	  "spa": "�mbito disponible",
	  "eng": "Available boundary",
	  "fre": "Champ disponible",
	  "cze": "Dostupn� hranice"
	},
	"CellSize": {
	  "cat": "Costat de cel�la",
	  "spa": "Lado de celda",
	  "eng": "Cell size",
	  "fre": "Taille de la cellule",
	  "cze": "Velikost bunky"
	},
	"CellArea": {
	  "cat": "�rea de la cel�la",
	  "spa": "�rea de celda",
	  "eng": "Cell area",
	  "fre": "Zone de la cellule",
	  "cze": "Plocha bunky"
	},
	"metadata": {
	  "cat": "metadades",
	  "spa": "metadatos",
	  "eng": "metadata",
	  "fre": "m�tadonn�es",
	  "cze": "metadata"
	},
	"Metadata": {
	  "cat": "Metadades",
	  "spa": "Metadatos",
	  "eng": "Metadata",
	  "fre": "M�tadonn�es",
	  "cze": "Metadata"
	},
	"Quality": {
	  "cat": "Qualitat",
	  "spa": "Calidad",
	  "eng": "Quality",
	  "fre": "Qualit�",
	  "cze": "Kvalita"
	},
	"Lineage": {
	  "cat": "Llinatge",
	  "spa": "Linaje",
	  "eng": "Lineage",
	  "fre": "Lignage",
	  "cze": "Linie"
	},
	"Feedback": {
	  "cat": "Valoracions",
	  "spa": "Valoraciones",
	  "eng": "Feedback",
	  "fre": "r�troaction",
	  "cze": "Zpetn� vazba"
	},
	"PieChart": {
	  "cat": "Gr�fic circular",
	  "spa": "Gr�fico circular",
	  "eng": "Pie chart",
	  "fre": "Diagramme � secteurs",
	  "cze": "Kol�cov� graf"
	},
	"Histogram": {
	  "cat": "Histograma",
	  "spa": "Histograma",
	  "eng": "Histogram",
	  "fre": "Histogramme",
	  "cze": "Histogram"
	},
	"Selection": {
	  "cat": "Selecci�",
	  "spa": "Selecci�n",
	  "eng": "Selection",
	  "fre": "S�lection",
	  "cze": "V�ber"
	},
	"Open": {
	  "cat": "Obrir",
	  "spa": "Abrir",
	  "eng": "Open",
	  "fre": "Ouvrir",
	  "cze": "Otevr�t"
	},
	"Save": {
	  "cat": "Desar",
	  "spa": "Guardar",
	  "eng": "Save",
	  "fre": "Sauvegarder",
	  "cze": "Ulo�it"
	},
	"close": {
	  "cat": "tancar",
	  "spa": "cerrar",
	  "eng": "close",
	  "fre": "quitter",
	  "cze": "zavr�t"
	},
	"Close": {
	  "cat": "Tancar",
	  "spa": "Cerrar",
	  "eng": "Close",
	  "fre": "Quitter",
	  "cze": "Zavr�t"
	},
	"print": {
	  "cat": "imprimir",
	  "spa": "imprimir",
	  "eng": "print",
	  "fre": "imprimer",
	  "cze": "tisk"
	},
	"indicates": {
	  "cat": "indica",
	  "spa": "indica",
	  "eng": "indicates",
	  "fre": "indique",
	  "cze": "oznacuje"
	},
	"show": {
	  "cat": "mostrar",
	  "spa": "mostrar",
	  "eng": "show",
	  "fre": "afficher",
	  "cze": "zobrazit"
	},
	"Show": {
	  "cat": "Mostrar",
	  "spa": "Mostrar",
	  "eng": "Show",
	  "fre": "Afficher",
	  "cze": "Zobrazit"
	},
	"Shown": {
	  "cat": "Mostrades",
	  "spa": "Mostradas",
	  "eng": "Shown",
	  "fre": "Montr�",
	  "cze": "Zobrazeno"
	},
	"Hide": {
	  "cat": "Amagar",
	  "spa": "Ocultar",
	  "eng": "Hide",
	  "fre": "Cacher",
	  "cze": "Skr�t"
	},
	"UnderDevelopment": {
	  "cat": "En desenvolupament.",
	  "spa": "En desarrollo.",
	  "eng": "Under development.",
	  "fre": "En d�veloppement.",
	  "cze": "Ve v�voji."
	},
	"layer": {
	  "cat": "capa",
	  "spa": "capa",
	  "eng": "layer",
	  "fre": "couche",
	  "cze": "vrstva"
	},
	"Layer": {
	  "cat": "Capa",
	  "spa": "Capa",
	  "eng": "Layer",
	  "fre": "Couche",
	  "cze": "Vrstva"
	},
	"LayerId": {
	  "cat": "Identificador de la capa",
	  "spa": "Identificador de la capa",
	  "eng": "Layer identifier",
	  "fre": "Identificateur de couche",
	  "cze": "Identifik�tor vrstvy"
	},
	"Layers": {
	  "cat": "Capes",
	  "spa": "Capas",
	  "eng": "Layers",
	  "fre": "Couches",
	  "cze": "Vrstvy"
	},
	"theLayer": {
	  "cat": "la capa",
	  "spa": "la capa",
	  "eng": "the layer",
	  "fre": "la couche",
	  "cze": "vrstva"
	},
	"TheLayer": {
	  "cat": "La capa",
	  "spa": "La capa",
	  "eng": "The layer",
	  "fre": "La couche",
	  "cze": "Vrstva"
	},
	"ofTheLayer": {
	  "cat": "de la capa",
	  "spa": "de la capa",
	  "eng": "of the layer",
	  "fra": "de la couche",
	  "cze": "vrstvy"
	},
	"Add": {
	  "cat": "Afegir",
	  "spa": "A�adir",
	  "eng": "Add",
	  "fre": "Ajouter",
	  "cze": "Pridat"
	},
	"Explore": {
	  "cat": "Explorar",
	  "spa": "Explorar",
	  "eng": "Explore",
	  "fre": "Examiner",
	  "cze": "Prozkoumat"
	},
	"AddLayers": {
	  "cat": "Afegir capes",
	  "spa": "A�adir capas",
	  "eng": "Add layers",
	  "fre": "Ajouter couches",
	  "cze": "Pridat vrstvy"
	},
	"Expression": {
	  "cat": "F�rmula",
	  "spa": "F�rmula:",
	  "eng": "Expression",
	  "fre": "Formule",
	  "cze": "V�raz"
	},
	"Value": {
	  "cat": "Valor",
	  "spa": "Valor",
	  "eng": "Value",
	  "fre": "Valeur",
	  "cze": "Hodnota"
	},
	"InitialValue": {
	  "cat": "Valor inicial",
	  "spa": "Valor inicial",
	  "eng": "Initial value",
	  "fre": "Valeur initiale",
	  "cze": "Poc�tecn� hodnota"
	},
	"TheValue": {
	  "cat": "El valor",
	  "spa": "El valor",
	  "eng": "The value",
	  "fre": "La valeur",
	  "cze": "Hodnota"
	},
	"Operator": {
	  "cat": "Operador",
	  "spa": "Operador",
	  "eng": "Operator",
	  "fre": "Op�rateur",
	  "cze": "Oper�tor"
	},
	"Parameters": {
	  "cat": "Par�metres",
	  "spa": "Par�metros",
	  "eng": "Parameters",
	  "fre": "Parameters",
	  "cze": "Parametry"
	},
	"date": {
	  "cat": "data",
	  "spa": "fecha",
	  "eng": "date",
	  "fre": "date",
	  "cze": "datum"
	},
	"Date": {
	  "cat": "Data",
	  "spa": "Fecha",
	  "eng": "Date",
	  "fre": "Date",
	  "cze": "Datum"
	},
	"Field": {
	  "cat": "Camp",
	  "spa": "Camp",
	  "eng": "Field",
	  "fre": "Champ",
	  "cze": "Pole"
	},
	"ofTheField": {
	  "cat": "del camp",
	  "spa": "del campo",
	  "eng": "of the field",
	  "fre": "du champ",
	  "cze": "pole"
	},
	"Title": {
	  "cat": "T�tol",
	  "spa": "T�tulo",
	  "eng": "Title",
	  "fre": "Titre",
	  "cze": "N�zev"
	},
	"Condition": {
	  "cat": "Condici�",
	  "spa": "Condici�n",
	  "eng": "Condition",
	  "fre": "Condition",
	  "cze": "Podm�nka"
	},
	"OK": {
	  "cat": "Acceptar",
	  "spa": "Aceptar",
	  "eng": " OK ",
	  "fre": "Accepter",
	  "cze": " OK "
	},
	"Cancel": {
	  "cat": "Cancel�lar",
	  "spa": "Cancelar",
	  "eng": "Cancel",
	  "fre": "Annuler",
	  "cze": "Zru�it"
	},
	"Apply": {
	  "cat": "Aplicar",
	  "spa": "Aplicar",
	  "eng": "Apply",
	  "fre": "Appliquer",
	  "cze": "Pou��t"
	},
	"Presentation": {
	  "cat": "Presentaci�",
	  "spa": "Presentaci�n",
	  "eng": "Presentation",
	  "fre": "Pr�sentation",
	  "cze": "Prezentace"
	},
	"Graphical": {
	  "cat": "Gr�fica",
	  "spa": "Gr�fica",
	  "eng": "Graphical",
	  "fre": "Graphique",
	  "cze": "Grafick�"
	},
	"Textual": {
	  "cat": "Textual",
	  "spa": "Textual",
	  "eng": "Textual",
	  "fre": "Textuelle",
	  "cze": "Textov�"
	},
	"Unsorted": {
	  "cat": "Cap",
	  "spa": "Ninguno",
	  "eng": "Unsorted",
	  "fre": "Non tri�",
	  "cze": "Netr�den�"
	},
	"ColorPalette": {
	  "cat": "Paleta de colors",
	  "spa": "Paleta de colores",
	  "eng": "Color palette",
	  "fre": "Palette de couleurs",
	  "cze": "Paleta barev"
	},
	"Colors": {
	  "cat": "Colors",
	  "spa": "Colores",
	  "eng": "Colors",
	  "fre": "Couleurs",
	  "cze": "Barvy"
	},
	"Current": {
	  "cat": "Actual",
	  "spa": "Actual",
	  "eng": "Current",
	  "fre": "Actuel",
	  "cze": "Aktu�ln�"
	},
	"Previous": {
	  "cat": "Pr�via",
	  "spa": "Previa",
	  "eng": "Previous",
	  "fre": "Pr�c�dente",
	  "cze": "Predchoz�"
	},
	"View": {
	  "cat": "Vista",
	  "spa": "Vista",
	  "eng": "View",
	  "fre": "Vue",
	  "cze": "Zobrazit"
	},
	"Width": {
	  "cat": "Ample",
	  "spa": "Ancho",
	  "eng": "Width",
	  "fre": "Largeur",
	  "cze": "��rka"
	},
	"Height": {
	  "cat": "Alt",
	  "spa": "Alto",
	  "eng": "Height",
	  "fre": "Hauteur",
	  "cze": "V��ka"
	},
	"LayerName": {
	  "cat": "Nom de la capa",
	  "spa": "Nombre de la capa",
	  "eng": "Name of the layer",
	  "fre": "Nom de la couche",
	  "cze": "N�zev vrstvy"
	},
	"ModalClass": {
	  "cat": "Classe modal",
	  "spa": "Clase modal",
	  "eng": "Modal class",
	  "fre": "Classe modale",
	  "cze": "Mod�ln� tr�da"
	},
	"PercentageMode": {
	  "cat": "Percentatge de la moda",
	  "spa": "Porcentaje de la moda",
	  "eng": "Percentage of the mode",
	  "fre": "Pourcentage de mode",
	  "cze": "Procento re�imu"
	},
	"Sum": {
	  "cat": "Suma",
	  "spa": "Suma",
	  "eng": "Sum",
	  "fre": "Somme",
	  "cze": "Soucet"
	},
	"SumArea": {
	  "cat": "Suma �rea",
	  "spa": "Suma �rea",
	  "eng": "Sum area",
	  "fre": "Somme area",
	  "cze": "Soucet plochy"
	},
	"Mean": {
	  "cat": "Mitjana",
	  "spa": "Media",
	  "eng": "Mean",
	  "fre": "Moyenne",
	  "cze": "Prumer"
	},
	"Variance": {
	  "cat": "Varian�a",
	  "spa": "Varianza",
	  "eng": "Variance",
	  "fre": "Variance",
	  "cze": "Rozptyl"
	},
	"StandardDeviation": {
	  "cat": "Desviaci� est�ndard",
	  "spa": "Desviaci� est�ndar",
	  "eng": "Standard deviation",
	  "fre": "�cart-type",
	  "cze": "Smerodatn� odchylka"
	},
	"Mode": {
	  "cat": "Moda",
	  "spa": "Moda",
	  "eng": "Mode",
	  "fre": "Mode",
	  "cze": "M�d"
	},
	"Minimum": {
	  "cat": "M�nim",
	  "spa": "M�nimo",
	  "eng": "Minimum",
	  "fre": "Minimum",
	  "cze": "Minimum"
	},
	"Maximum": {
	  "cat": "M�xim",
	  "spa": "M�ximo",
	  "eng": "Maximum",
	  "fre": "Maximum",
	  "cze": "Maximum"
	},
	"Range": {
	  "cat": "Rang",
	  "spa": "Rango",
	  "eng": "Range",
	  "fre": "Gamme",
	  "cze": "Rozsah"
	},
	"SortingOrder": {
	  "cat": "Ordre",
	  "spa": "Orden",
	  "eng": "Sorting order",
	  "fre": "Ordre de tri",
	  "cze": "Radit podle"
	},
	"Others": {
	  "cat": "Altres",
	  "spa": "Otros",
	  "eng": "Others",
	  "fre": "Autres",
	  "cze": "Ostatn�"
	},
	"Link": {
	  "cat": "Enlla�",
	  "spa": "Enlace",
	  "eng": "Link",
	  "fre": "Relier",
	  "cze": "Odkaz"
	},
	"Point": {
	  "cat": "Punt",
	  "spa": "Punto",
	  "eng": "Point",
	  "fre": "Point",
	  "cze": "Bod"
	},
	"Query": {
	  "cat": "Consulta",
	  "spa": "Consulta",
	  "eng": "Query",
	  "fre": "Recherche",
	  "cze": "Dotaz"
	},
	"QueryByLocation": {
	  "cat": "Consulta per localitzaci�",
	  "spa": "Consulta por localizaci�n",
	  "eng": "Query by location",
	  "fre": "Requ�te par emplacement",
	  "cze": "Dotaz podle lokality"
	},
	"Options": {
	  "cat": "Opcions",
	  "spa": "Opciones",
	  "eng": "Options",
	  "fre": "Options",
	  "cze": "Mo�nosti"
	},
	"Select": {
	  "cat": "Seleccionar",
	  "spa": "Seleccionar",
	  "eng": "Select",
	  "fre": "S�lectionner",
	  "cze": "Vyberte"
	},
	"pleaseWait": {
	  "cat": "espereu",
	  "spa": "espere",
	  "eng": "please wait",
	  "fre": "attendez",
	  "cze": "pockejte pros�m"
	},
	"PleaseWait": {
	  "cat": "Espereu si us plau",
	  "spa": "Espere por favor",
	  "eng": "Please, wait",
	  "fre": "Attendez, s'il-vous-pla�t",
	  "cze": "Pros�m, pockejte"
	},
	"DateTime": {
	  "cat": "Data i hora",
	  "spa": "Fecha y hora",
	  "eng": "Date and time",
	  "fre": "Date et l'heure",
	  "cze": "Datum a cas"
	},
	"Next": {
	  "cat": "Seg�ent",
	  "spa": "Siguiente",
	  "eng": "Next",
	  "fre": "Suivant",
	  "cze": "Dal��"
	},
	"Format": {
	  "cat": "Format",
	  "spa": "Formato",
	  "eng": "Format",
	  "fre": "Format",
	  "cze": "Form�t"
	},
	"Download": {
	  "cat": "Descarregar",
	  "spa": "Descargar",
	  "eng": "Download",
	  "fre": "T�l�charger",
	  "cze": "St�hnout"
	},
	"of": {
	  "cat": "de",
	  "spa": "de",
	  "eng": "of",
	  "fre": "de",
	  "cze": "z"
	},
	"Time": {
	  "cat": "Hora",
	  "spa": "Hora",
	  "eng": "Time",
	  "fre": "L'heure",
	  "cze": "Cas"
	},
	"Option": {
	  "cat": "Opci�",
	  "spa": "Opici�n",
	  "eng": "Option",
	  "fre": "Option",
	  "cze": "Mo�nost"
	},
	"Status": {
	  "cat": "Estat",
	  "spa": "Estado",
	  "eng": "Status",
	  "fre": "Statut",
	  "cze": "Stav"
	},
	"tabSeparatedText": {
	  "cat": "text separat per tabulacions",
	  "spa": "texto separado por tabulaciones",
	  "eng": "tab-separated text",
	  "fre": "texte s�par� par des tabulations",
	  "cze": "text oddelen� tabul�torem"
	},
	"Style": {
	  "cat": "Estil",
	  "spa": "Estilo",
	  "eng": "Style",
	  "fre": "Style",
	  "cze": "Styl"
	},
	"Count": {
	  "cat": "Recompte",
	  "spa": "Cuenta",
	  "eng": "Count",
	  "fre": "Compter",
	  "cze": "Pocet"
	},
	"Area": {
	  "cat": "�rea",
	  "spa": "�rea",
	  "eng": "Area",
	  "fre": "Zone",
	  "cze": "Oblast"
	},
	"NoData": {
	  "cat": "Sense dades",
	  "spa": "Sin datos",
	  "eng": "No data",
	  "fre": "Pas de donn�es",
	  "cze": "��dn� �daje"
	},
	"Class": {
	  "cat": "Classe",
	  "spa": "Clase",
	  "eng": "Class",
	  "fre": "Classe",
	  "cze": "Tr�da"
	},
	"All": {
	  "cat": "Totes",
	  "spa": "Todas",
	  "eng": "All",
	  "fre": "Toutes",
	  "cze": "V�echny"
	},
	"Dynamic": {
	  "cat": "Din�mic",
	  "spa": "Din�mico",
	  "eng": "Dynamic",
	  "fre": "Dynamique",
	  "cze": "Dynamick�"
	},
	"Disabled": {
	  "cat": "Desactivat)",
	  "spa": "Desactivado",
	  "eng": "Disabled",
	  "fre": "D�sactiv�",
	  "cze": "Vypnuto"
	},
	"layerOrStyleNotVisible": {
	  "cat": "capa o estil no visible",
	  "spa": "capa o estil no visible",
	  "eng": "layer or style not visible",
	  "fre": "couche or style non visible",
	  "cze": "vrstva nebo styl nen� viditeln�"
	},
	"Statistics": {
	  "cat": "Estad�stics",
	  "spa": "Estad�sticos",
	  "eng": "Statistics",
	  "fre": "Statistique",
	  "cze": "Statistiky"
	},
	"Statistic": {
	  "cat": "Estad�stic",
	  "spa": "Estad�stico",
	  "eng": "Statistic",
	  "fre": "Statistique",
	  "cze": "Statistika"
	},
	"ContingencyTable": {
	  "cat": "Taula de conting�ncia",
	  "spa": "Tabla de contingencia",
	  "eng": "Contingency table",
	  "fre": "Tableau de contingence",
	  "cze": "Kontingencn� tabulka"
	},
	"Columns": {
	  "cat": "Columnes",
	  "spa": "Columnas",
	  "eng": "Columns",
	  "fre": "Colonnes",
	  "cze": "Sloupce"
	},
	"columns": {
	  "cat": "columnes",
	  "spa": "columnas",
	  "eng": "columns",
	  "fre": "colonnes",
	  "cze": "sloupce"
	},
	"Rows": {
	  "cat": "Files",
	  "spa": "Filas",
	  "eng": "Rows",
	  "fre": "Lignes",
	  "cze": "R�dky"
	},
	"rows": {
	  "cat": "files",
	  "spa": "filas",
	  "eng": "rows",
	  "fre": "lignes",
	  "cze": "r�dky"
	},
	"name": {
	  "cat": "nom",
	  "spa": "nombre",
	  "eng": "name",
	  "fre": "nom",
	  "cze": "n�zev"
	},
	"Name": {
	  "cat": "Nom",
	  "spa": "Nombre",
	  "eng": "Name",
	  "fre": "Nom",
	  "cze": "N�zev"
	},
	"Band": {
	  "cat": "Banda",
	  "spa": "Banda",
	  "eng": "Band",
	  "fre": "Bande",
	  "cze": "P�smo"
	},
	"Measure": {
	  "cat": "Mesura",
	  "spa": "Medida",
	  "eng": "Measure",
	  "fre": "Mesure",
	  "cze": "Opatren�"
	},
	"copy": {
	  "cat": "copiar",
	  "spa": "copiar",
	  "eng": "copy",
	  "fre": "copier",
	  "cze": "kop�rovat"
	},
	"help": {
	  "cat": "ajuda",
	  "spa": "ayuda",
	  "eng": "help",
	  "fre": "aider",
	  "cze": "n�poveda"
	},
	"InteractiveHelp": {
	  "cat": "Ajuda interactiva",
	  "spa": "Ayuda interactiva",
	  "eng": "Interactive help",
	  "fre": "Aide int�ractive",
	  "cze": "Interaktivn� n�poveda"
	},
	"popDown": {
	  "cat": "incrustar",
	  "spa": "incrustar",
	  "eng": "pop down",
	  "fre": "incruster",
	  "cze": "vyskakovac� okno - dolu"
	},
	"popUp": {
	  "cat": "desincrustar",
	  "spa": "desincrustar",
	  "eng": "pop up",
	  "fre": "desincruster",
	  "cze": "vyskakovac� okno - nahoru"
	},
	"KappaCoef": {
	  "cat": "Index Kappa",
	  "spa": "Indice Kappa",
	  "eng": "Kappa coefficient",
	  "fre": "Coefficient kappa",
	  "cze": "Koeficient kappa"
	},
	"none": {
	  "cat": "cap",
	  "spa": "ninguno",
	  "eng": "none",
	  "fre": "aucun",
	  "cze": "��dn�"
	},
	"and": {
	  "cat": "i",
	  "spa": "y",
	  "eng": "and",
	  "fre": "et",
	  "cze": "a"
	},
	"or": {
	  "cat": "o",
	  "spa": "o",
	  "eng": "or",
	  "fre": "ou",
	  "cze": "nebo"
	},
	"Working": {
	  "cat": "Processant",
	  "spa": "Procesando",
	  "eng": "Working",
	  "fre": "En traitement",
	  "cze": "Pracovn�"
	},
	"Source": {
	  "cat": "Font",
	  "spa": "Fuente",
	  "eng": "Source",
	  "fre": "Source",
	  "cze": "Zdroj"
	},
	"Agent": {
	  "cat": "Agent",
	  "spa": "Agente",
	  "eng": "Agent",
	  "fre": "Agent",
	  "cze": "Agent"
	},
	"Agents": {
	  "cat": "Agents",
	  "spa": "Agentes",
	  "eng": "Agents",
	  "fre": "Agents",
	  "cze": "Agenti"
	},
	"Executable": {
	  "cat": "Executable",
	  "spa": "Ejecutable",
	  "eng": "Executable",
	  "fre": "Ex�cutable",
	  "cze": "Spustiteln�"
	},
	"compilationDate": {
	  "cat": "data de compilaci�",
	  "spa": "fecha de compilaci�n",
	  "eng": "compilation date",
	  "fre": "date de compilation",
	  "cze": "datum kompilace"
	},
	"CompilationDate": {
	  "cat": "Data de compilaci�",
	  "spa": "Fecha de compilaci�n",
	  "eng": "Compilation date",
	  "fre": "Date de compilation",
	  "cze": "Datum kompilace"
	},
	"Algorithm": {
	  "cat": "Algorisme",
	  "spa": "Algoritmo",
	  "eng": "Algorithm",
	  "fre": "Algorithme",
	  "cze": "Algoritmus"
	},
	"Algorithms": {
	  "cat": "Algorismes",
	  "spa": "Algoritmos",
	  "eng": "Algorithms",
	  "fre": "Algorithmes",
	  "cze": "Algoritmy"
	},
	"Functionality": {
	  "cat": "Funcionalitat",
	  "spa": "Funcionalidad",
	  "eng": "Functionality",
	  "fre": "Fonctionnalit�",
	  "cze": "Funkcnost"
	},
	"Functionalities": {
	  "cat": "Funcionalitats",
	  "spa": "Funcionalidades",
	  "eng": "Functionalities",
	  "fre": "Fonctionnalit�s",
	  "cze": "Funkce"
	},
	"Step": {
	  "cat": "Pas",
	  "spa": "Paso",
	  "eng": "Step",
	  "fre": "�tape",
	  "cze": "Krok"
	},
	"role": {
	  "cat": "paper",
	  "spa": "papel",
	  "eng": "role",
	  "fre": "r�le",
	  "cze": "role"
	},
	"reference": {
	  "cat": "refer�ncia",
	  "spa": "referencia",
	  "eng": "reference",
	  "fre": "r�f�rence",
	  "cze": "odkaz"
	},
	"description": {
	  "cat": "descripci�",
	  "spa": "descripci�n",
	  "eng": "description",
	  "fre": "description",
	  "cze": "popis"
	},
	"Description": {
	  "cat": "Descripci�",
	  "spa": "Descripci�n",
	  "eng": "Description",
	  "fre": "Descriptif",
	  "cze": "Popis"
	},
	"purpose": {
	  "cat": "prop�sit",
	  "spa": "prop�sito",
	  "eng": "purpose",
	  "fre": "raison",
	  "cze": "�cel"
	},
	"Start": {
	  "cat": "Inici ",
	  "spa": "Inicio",
	  "eng": "Start",
	  "fre": "D�part",
	  "cze": "Start"
	},
	"Type": {
	  "cat": "Tipus ",
	  "spa": "Tipo",
	  "eng": "Type",
	  "fre": "Type",
	  "cze": "Typ"
	},
	"Attribute": {
	  "cat": "Atribut: ",
	  "spa": "Atributo:",
	  "eng": "Attribute:",
	  "fre": "Attribut:",
	  "cze": "Atribut:"
	},
	"TheProperty": {
	  "cat": "La propietat",
	  "spa": "La propiedad",
	  "eng": "The property",
	  "fre": "La propri�t�",
	  "cze": "Vlastnost"
	},
	"End": {
	  "cat": "Fi",
	  "spa": "Fin",
	  "eng": "End",
	  "fre": "But",
	  "cze": "Konec"
	},
	"mustBe": {
	  "cat": "ha de ser",
	  "spa": "debe ser",
	  "eng": "must be",
	  "fre": "doit �tre",
	  "cze": "mus� b�t"
	},
	"YouMayContinue": {
	  "cat": "Es deixa continuar",
	  "spa": "Se deja continuar",
	  "eng": "You may continue",
	  "fre": "Il est permis de continuer",
	  "cze": "Mu�ete pokracovat"
	},
	"approx": {
	  "cat": "aprox",
	  "spa": "aprox",
	  "eng": "approx",
	  "fre": "approx",
	  "cze": "pribli�ne"
	},
	"atLat": {
	  "cat": "a lat",
	  "spa": "a lat",
	  "eng": "at lat",
	  "fre": "� lat",
	  "cze": "na late"
	},
	"automatic": {
	  "cat": "autom�tic",
	  "spa": "autom�tico",
	  "eng": "automatic",
	  "fre": "automatique",
	  "cze": "automatick�"
	},
	"indicatedAt": {
	  "cat": "indicada a",
	  "spa": "indicada en",
	  "eng": "indicated at",
	  "fre": "indiqu�e �",
	  "cze": "uvedeno na"
	},
	"cannotBeActivated": {
	  "cat": "no pot ser activada",
	  "spa": "no puede ser activada",
	  "eng": "cannot be activated",
	  "fre": "ne peut pas �tre activ�e",
	  "cze": "nelze aktivovat"
	},
	"CannotFindStyle": {
	  "cat": "No trobo l'estil",
	  "spa": "No encuentro el estilo",
	  "eng": "Cannot find style",
	  "fre": "Impossible trouver le style",
	  "cze": "Nelze naj�t styl"
	},
	"ForLayer": {
	  "cat": "per a la capa",
	  "spa": "para la capa",
	  "eng": "for the layer",
	  "fre": "pour cette couche",
	  "cze": "pro vrstvu"
	},
	"CannotFindLayer": {
	  "cat": "No trobo la capa",
	  "spa": "No encuentro la capa",
	  "eng": "Cannot find layer",
	  "fre": "Impossible trouver la couche",
	  "cze": "Nelze naj�t vrstvu"
	},
	"request": {
	  "cat": "petici�",
	  "spa": "petici�n",
	  "eng": "request",
	  "fre": "demande",
	  "cze": "po�adavek"
	},
	"Request": {
	  "cat": "Petici�",
	  "spa": "Petici�n",
	  "eng": "Request",
	  "fre": "Demande",
	  "cze": "Po�adavek"
	},
	"unknown": {
	  "cat": "desconeguda",
	  "spa": "desconocida",
	  "eng": "unknown",
	  "fre": "inconnu",
	  "cze": "nezn�m�"
	},
	"IncompleteTag": {
	  "cat": "Etiqueta incomplerta",
	  "spa": "Etiqueta incompleta",
	  "eng": "Incomplete tag",
	  "fre": "�tiquette incompl�te",
	  "cze": "Ne�pln� znacka"
	},
	"MissingAttribute": {
	  "cat": "Manca atribut",
	  "spa": "Falta atributo",
	  "eng": "Missing attribute",
	  "fre": "Manque attribut",
	  "cze": "Chybej�c� atribut"
	},
	"MissingMandatoryTag": {
	  "cat": "Manca etiqueta obligat�ria",
	  "spa": "Falta etiqueta obligatoria",
	  "eng": "Missing mandatory tag",
	  "fre": "Manque �tiquette obligatorire",
	  "cze": "Chybej�c� povinn� znacka"
	},
	"missingMandatoryNestedTags": {
	  "cat": "manquen etiquetes anidades obligat�ries",
	  "spa": "falten etiquetas anidadas obligatorias",
	  "eng": "missing mandatory nested tags",
	  "fre": "des �tiquettes nich�es obligatoires manquantes",
	  "cze": "chybej�c� povinn� vlo�en� znacky"
	},
	"Authorship": {
	  "cat": "Autoria",
	  "spa": "Autor�a",
	  "eng": "Authorship",
	  "fre": "Paternit�",
	  "cze": "Autorstv�"
	},
	"Publisher": {
	  "cat": "Editor",
	  "spa": "Editor",
	  "eng": "Publisher",
	  "fre": "�diteur",
	  "cze": "Vydavatel"
	},
	"Generated": {
	  "cat": "Generar",
	  "spa": "Generar",
	  "eng": "Generate",
	  "fre": "G�n�rer",
	  "cze": "Generovat"
	},
	"GeneratedBy": {
	  "cat": "Generat amb",
	  "spa": "Generado con",
	  "eng": "Generated by",
	  "fre": "G�n�r� par",
	  "cze": "Vygenerov�no podle"
	},
	"Boundaries": {
	  "cat": "�mbit",
	  "spa": "�mbito",
	  "eng": "Boundaries",
	  "fre": "Champ",
	  "cze": "Hranice"
	},
	"TimeResolution": {
	  "cat": "Interval de temps",
	  "spa": "Int�rvalo de tiempo",
	  "eng": "Time resolution",
	  "fre": "R�solution temporelle",
	  "cze": "Casov� rozli�en�"
	},
	"UpdateDate": {
	  "cat": "Data d'actualitzaci�",
	  "spa": "Fecha de actualizaci�n",
	  "eng": "Update date",
	  "fre": "Date de mise � jour",
	  "cze": "Datum aktualizace"
	},
	"CreatorApplication": {
	  "cat": "Creat amb",
	  "spa": "Creado con",
	  "eng": "Creator application",
	  "fre": "Cr�� avec",
	  "cze": "Aplikace tvurce"
	},
	"Rights": {
	  "cat": "Drets",
	  "spa": "Derechos",
	  "eng": "Rights",
	  "fre": "Droits",
	  "cze": "Pr�va"
	},
	"GeospatialExtent": {
	  "cat": "Extensi� geoespacial",
	  "spa": "Extensi�n geoespacial",
	  "eng": "Geospatial extent",
	  "fre": "Extension g�ospatiale",
	  "cze": "Geoprostorov� rozsah"
	},
	"TemporalExtent": {
	  "cat": "Extensi� temporal",
	  "spa": "Extensi�n temporal",
	  "eng": "Temporal extent",
	  "fre": "Extension temporelle",
	  "cze": "Casov� rozsah"
	},
	"Preview": {
	  "cat": "Previsualitzaci�",
	  "spa": "Previsualizaci�n",
	  "eng": "Preview",
	  "fre": "Aper�u",
	  "cze": "N�hled"
	},
	"ContentDescription": {
	  "cat": "Descripci� del contingut",
	  "spa": "Descripci�n del contenido",
	  "eng": "Content description",
	  "fre": "Description du contenu",
	  "cze": "Popis obsahu"
	},
	"ContentReference": {
	  "cat": "Refer�ncia al contingut",
	  "spa": "Referencia al contenido",
	  "eng": "Content by reference",
	  "fre": "Contenu par r�f�rence",
	  "cze": "Obsah podle odkazu"
	},
	"SourceMetadata": {
	  "cat": "Metadades de la font",
	  "spa": "Metadatos de la fuente",
	  "eng": "Source metadata",
	  "fre": "M�tad�nn�es de source",
	  "cze": "Zdrojov� metadata"
	},
	"MinimumDisplayScale": {
	  "cat": "Escala m�nima de visualitzaci�",
	  "spa": "Escala m�nima de visualizaci�n",
	  "eng": "Minimum display scale",
	  "fre": "�chelle d'affichage minimale",
	  "cze": "Minim�ln� mer�tko zobrazen�"
	},
	"MaximumDisplayScale": {
	  "cat": "Escala m�xima de visualitzaci�",
	  "spa": "Escala m�xima de visualizaci�n",
	  "eng": "Maximum display scale",
	  "fre": "�chelle d'affichage maximale",
	  "cze": "Maxim�ln� mer�tko zobrazen�"
	},
	"Offering": {
	  "cat": "Oferta de servei ('offering')",
	  "spa": "Oferta de servicio ('offering')",
	  "eng": "Offering",
	  "fre": "Offre de services ('offering')",
	  "cze": "Nab�zej�c�"
	},
	"LayerActiveAndVisible": {
	  "cat": "La capa estar� activa i visible",
	  "spa": "La capa estar� activa y visible",
	  "eng": "Layer will be active and visible",
	  "fre": "La couche sera active et visible",
	  "cze": "Vrstva bude aktivn� a viditeln�"
	},
	"LayerNotVisible": {
	  "cat": "La capa no estar� visible",
	  "spa": "La capa no estar� visible",
	  "eng": "Layer will be not visible",
	  "fre": "La couche ne sera pas visible",
	  "cze": "Vrstva nebude viditeln�"
	},
	"LayersOnView": {
	  "cat": "Capes de la vista",
	  "spa": "Capas de la vista",
	  "eng": "Layers on this view",
	  "fre": "Couches sur ce point de vue",
	  "cze": "Vrstvy v tomto zobrazen�"
	},
	"AddToView": {
	  "cat": "Afegir a vista",
	  "spa": "A�adir a vista",
	  "eng": "Add to view",
	  "fre": "Ajoutez � la vue",
	  "cze": "Pridat do zobrazen�"
	},
	"AddSelectedLayersCurrentVisu": {
	  "cat": "Afegeix les capes seleccionades a la visualitzaci� actual",
	  "spa": "A�ade las capas seleccionadas a la visualizaci�n actual",
	  "eng": "Add the selected layers to the current visualization",
	  "fre": "Ajoutez les couches choisies � la visualisation actuelle",
	  "cze": "Prid�n� vybran�ch vrstev do "
	},
	"CloseViewOpen": {
	  "cat": "Tancar vista i obrir",
	  "spa": "Cerrar vista y abrir",
	  "eng": "Close view and open",
	  "fre": "Fermer la vue et ovrir",
	  "cze": "Zavr�t zobrazen� a otevr�t"
	},
	"CloseOpenNewSelectedLayers": {
	  "cat": "Tanca la visualitzaci� actual i obra una nova amb les capes seleccionades",
	  "spa": "Cierra la visualizaci�n actual y abre una nueva con las capas seleccionadas",
	  "eng": "Close the current visualization and open a new one with the selected layers",
	  "fre": "Fermez la visualisation en cours et ouvrez une nouvelle avec les couches choisies",
	  "cze": "Zavr�t aktu�ln� vizualizaci a otevr�t "
	},
	"DocumentLanguage": {
	  "cat": "Idioma del document",
	  "spa": "Idioma del documento",
	  "eng": "Document language",
	  "fre": "Langue du document",
	  "cze": "Jazyk dokumentu"
	},
	"Author": {
	  "cat": "Autor",
	  "spa": "Autor",
	  "eng": "Author",
	  "fre": "Auteur",
	  "cze": "Autor"
	},
	"MandatoryField": {
	  "cat": "Camp obligatori",
	  "spa": "Campo obligatorio",
	  "eng": "Mandatory field",
	  "fre": "Champ obligatoire",
	  "cze": "Povinn� pole"
	},
	"NotHaveOffering": {
	  "cat": "no t� cap 'offering'",
	  "spa": "no tiene ning�n 'offering'",
	  "eng": "do not have any offering",
	  "fre": "n'a pas 'offering'",
	  "cze": "nemaj� ��dnou nab�dku"
	},
	"moreInfo": {
	  "cat": "m�s info",
	  "spa": "m�s info",
	  "eng": "more info",
	  "fre": "plus d'info",
	  "cze": "v�ce informac�"
	},
	"ThereAre": {
	  "cat": "Hi ha",
	  "spa": "Hay",
	  "eng": "There are",
	  "fre": "Il y a",
	  "cze": "Tam jsou"
	},
	"WrongAttributeName": {
	  "cat": "Nom d'atribut incorrecte",
	  "spa": "Nombre de atributo incorrecto",
	  "eng": "Wrong attribute name",
	  "fre": "Nom d'attribut incorrect",
	  "cze": "�patn� n�zev atributu"
	},
	"MustSelectField": {
	  "cat": "Cal seleccionar un camp",
	  "spa": "Debe seleccionar un campo",
	  "eng": "You must select a field",
	  "fre": "Vous devez s�lectionner un champ",
	  "cze": "Mus�te vybrat pole"
	},
	"empty": {
	  "cat": "buit",
	  "spa": "vacio",
	  "eng": "empty",
	  "fre": "vide",
	  "cze": "pr�zdn�"
	},
	"separatedBy": {
	  "cat": "separats per",
	  "spa": "separados por",
	  "eng": "separated by",
	  "fre": "s�par�es par",
	  "cze": "oddelen� podle"
	},
	"TemporalField": {
	  "cat": "Camp temporal",
	  "spa": "Campo temporal",
	  "eng": "Temporal field",
	  "fre": "Temporal Champ",
	  "cze": "Casov� pole"
	},
	"byBoundingBox": {
	  "cat": "per envolupant",
	  "spa": "por envolvente",
	  "eng": "by bounding box",
	  "fre": "par enveloppe",
	  "cze": "ohranicuj�c�m polem"
	},
	"Compute": {
	  "cat": "Calcular",
	  "spa": "Calcular",
	  "eng": "Compute",
	  "fre": "Calculer",
	  "cze": "V�poc�tat"
	},
	"resize": {
	  "cat": "redimensionar",
	  "spa": "redimensionar",
	  "eng": "resize",
	  "fre": "redimensionner",
	  "cze": "zmena velikosti"
	},
	"symbolizeLayer": {
	  "cat": "per simbolitzar la capa",
	  "spa": "para simbolizar la capa",
	  "eng": "to symbolize the layer",
	  "fre": "por symboliser la couche",
	  "cze": "symbolizovat vrstvu"
	},
	"UnsuppServiceType": {
	  "cat": "Tipus de servei suportat",
	  "spa": "Tipo de servicio no suportado",
	  "eng": "Unsupported service type",
	  "fre": "Type de service non support�e",
	  "cze": "Nepodporovan� typ slu�by"
	},
	"toTheStart": {
	  "cat": "al inici",
	  "spa": "al inicio",
	  "eng": "to the start",
	  "fre": "au d�but",
	  "cze": "na zac�tek"
	},
	"stepBack": {
	  "cat": "retrocedir un",
	  "spa": "retroceder una",
	  "eng": "step back",
	  "fre": "revenir un",
	  "cze": "krok zpet"
	},
	"pause": {
	  "cat": "pausa",
	  "spa": "pausa",
	  "eng": "pause",
	  "fre": "pause",
	  "cze": "pauza"
	},
	"play": {
	  "cat": "reproduir",
	  "spa": "reproducir",
	  "eng": "play",
	  "fre": "reproduire",
	  "cze": "prehr�t"
	},
	"repeatedlyPlay": {
	  "cat": "reproduir repetitivament",
	  "spa": "reproducir repetit�vamente",
	  "eng": "repeatedly play",
	  "fre": "reproduire � plusieurs reprises",
	  "cze": "opakovane prehr�vat"
	},
	"stepForward": {
	  "cat": "avan�ar un",
	  "spa": "avanzar una",
	  "eng": "step forward",
	  "fre": "avancer un",
	  "cze": "krok vpred"
	},
	"toTheEnd": {
	  "cat": "al final",
	  "spa": "al final",
	  "eng": "to the end",
	  "fre": "� la fin",
	  "cze": "a� do konce"
	},
	"SpeedyBy": {
	  "cat": "Rapidesa per",
	  "spa": "Rapidez por",
	  "eng": "Speed by",
	  "fre": "Vitesse pour",
	  "cze": "Rychlost podle"
	},
	"StartDate": {
	  "cat": "Data inicial",
	  "spa": "Fecha inicial",
	  "eng": "Start date",
	  "fre": "Date de d�but",
	  "cze": "Datum zah�jen�"
	},
	"EndDate": {
	  "cat": "Data final",
	  "spa": "Fecha final",
	  "eng": "End date",
	  "fre": "Date de fin",
	  "cze": "Datum konce"
	},
	"Load": {
	  "cat": "Carregar",
	  "spa": "Cargar",
	  "eng": "Load",
	  "fre": "Charge",
	  "cze": "Nac�st"
	},
	"Loading": {
	  "cat": "Carregant",
	  "spa": "Cargando",
	  "eng": "Loading",
	  "fre": "Chargement",
	  "cze": "Nac�t�n�"
	},
	"WrongFormat": {
	  "cat": "Format incorrecte",
	  "spa": "Formato incorrecto",
	  "eng": "Wrong format",
	  "fre": "Format incorrect",
	  "cze": "�patn� form�t"
	},
	"TryAgain": {
	  "cat": "Torna-ho a intentar",
	  "spa": "Vu�lvalo a intentar",
	  "eng": "Try again",
	  "fre": "R�essayez",
	  "cze": "Zkuste to znovu"
	},
	"SendingFile": {
	  "cat": "Enviant fitxer",
	  "spa": "Enviando fichero",
	  "eng": "Sending file",
	  "fre": "Fichier en cours d�envoi",
	  "cze": "Odes�l�n� souboru"
	},
	"Predefined": {
	  "cat": "Predefinit",
	  "spa": "Predefinido",
	  "eng": "Predefined",
	  "fre": "Pr�d�finie",
	  "cze": "Preddefinovan�"
	},
	"Local": {
	  "cat": "Local",
	  "spa": "Local",
	  "eng": "Local",
	  "fre": "Local",
	  "cze": "M�stn�"
	},
	"ChangeFile": {
	  "cat": "Canviar el fitxer",
	  "spa": "Cambiar el fichero",
	  "eng": "Change a file",
	  "fre": "Changer le fichier",
	  "cze": "Zmenit soubor"
	},
	"Send": {
	  "cat": "Enviar",
	  "spa": "Enviar",
	  "eng": "Send",
	  "fre": "Envoyer",
	  "cze": "Odeslat"
	},
	"Url": {
	  "cat": "URL",
	  "spa": "URL",
	  "eng": "URL",
	  "fre": "URL",
	  "cze": "URL"
	},
	"OutputParameter": {
	  "cat": "Par�metres de sortida",
	  "spa": "Par�metros de salida",
	  "eng": "Output parameters",
	  "fre": "Param�tres de sortie",
	  "cze": "V�stupn� parametry"
	},
	"Execute": {
	  "cat": "Executar",
	  "spa": "Ejecutar",
	  "eng": "Execute",
	  "fre": "Ex�cuter",
	  "cze": "Spustit"
	},
	"UserConfiguration": {
	  "cat": "Configuraci� d'usuari",
	  "spa": "Configuraci�n de usuario",
	  "eng": "User configuration",
	  "fre": "Configuration de l'utilisateur",
	  "cze": "Konfigurace u�ivatele"
	},
	"SelectConfigLoad": {
	  "cat": "Selecciona un fitxer de configuraci� a carregar",
	  "spa": "Selecciona un fichero de configuraci�n para cargar",
	  "eng": "Select a config file to load",
	  "fre": "S�lectionnez un fichier de configuration � charger",
	  "cze": "V�ber konfiguracn�ho souboru k nacten�"
	},
	"FileName": {
	  "cat": "Nom del fitxer",
	  "spa": "Nombre del fichero",
	  "eng": "File name",
	  "fre": "Nom du fichier",
	  "cze": "N�zev souboru"
	},
	"FileNameToSave": {
	  "cat": "Nom del fitxer a guardar",
	  "spa": "Nombre del fichero a guardar",
	  "eng": "File name to save",
	  "fre": "Nom du fichier � sauvegarder",
	  "cze": "N�zev souboru k ulo�en�"
	},
	"WrongNumberElementsLine": {
	  "cat": "Nombre d'elements incorrecte a la l�nia",
	  "spa": "N�mero de elementos incorrecto en la l�nea",
	  "eng": "Wrong number of elements in line",
	  "fre": "Wrong number of elements in line",
	  "cze": "�patn� pocet prvku v r�dku"
	},
	"WrongFormatInLine": {
	  "cat": "Format incorrecte a la l�nia",
	  "spa": "Formato incorrecto en la l�nea",
	  "eng": "Wrong values format in line",
	  "fre": "Mauvais format en ligne",
	  "cze": "�patn� form�t hodnot v r�dku"
	},
	"cntxmenu": {
	  "ShareLayer": {
		"cat": "Compartir capa",
		"spa": "Compartir capa",
		"eng": "Share layer",
		"fre": "Partager couche",
		"cze": "Sd�len� vrstvy"
	  },
	  "RemoveLayer": {
		"cat": "Eliminar capa",
		"spa": "Eliminar capa",
		"eng": "Remove layer",
		"fre": "Effacer couche",
		"cze": "Odstranen� vrstvy"
	  },
	  "MoveLayer": {
		"cat": "Moure la capa",
		"spa": "Mover la capa",
		"eng": "Move layer",
		"fre": "D�placer la couche",
		"cze": "Presun vrstvy"
	  },
	  "ToTheTop": {
		"cat": "A sobre de tot",
		"spa": "Encima de todo",
		"eng": "To the top",
		"fre": "En haut de",
		"cze": "Na vrchol"
	  },
	  "Up": {
		"cat": "A sobre",
		"spa": "Encima",
		"eng": "Up",
		"fre": "Au-dessus",
		"cze": "Nahoru"
	  },
	  "Down": {
		"cat": "A sota",
		"spa": "Debajo",
		"eng": "Down",
		"fre": "Au-dessous",
		"cze": "Dolu"
	  },
	  "ToTheEnd": {
		"cat": "A sota de tot",
		"spa": "Debajo de todo",
		"eng": "To the end",
		"fre": "En bas",
		"cze": "Na konec"
	  },
	  "EditStyle": {
		"cat": "Edita estil",
		"spa": "Editar estilo",
		"eng": "Edit style",
		"fre": "Modifier le style",
		"cze": "Upravit styl"
	  },
	  "ofEditingStyle": {
		"cat": "de editar l'estil",
		"spa": "de editar el estilo",
		"eng": "of editing the style",
		"fre": "pour modifier le style",
		"cze": "�pravy stylu"
	  },
	  "StyleName": {
		"cat": "Nom de l'estil",
		"spa": "Nombre del estilo",
		"eng": "Name of the style",
		"fre": "Nom du style",
		"cze": "N�zev stylu"
	  },
	  "ConfusionMatrix": {
		"cat": "Matriu de confusi�",
		"spa": "Matriz de confusi�n",
		"eng": "Confusion matrix",
		"fre": "Matrice de confusion",
		"cze": "Matice zmatku"
	  },
	  "StatisticByCategory": {
		"cat": "Estad�stic per categoria",
		"spa": "Estad�stico por categoria",
		"eng": "Statistic by category",
		"fre": "Statistique par cat�gorie",
		"cze": "Statistika podle kategorie"
	  },
	  "Statistic": {
		"cat": "Estad�stic",
		"spa": "Estad�stico",
		"eng": "Statistic",
		"fre": "Statistique",
		"cze": "Statistika"
	  },
	  "Surface": {
		"cat": "Superf�cie",
		"spa": "Superficie",
		"eng": "Surface",
		"fre": "Surface",
		"cze": "Povrch"
	  },
	  "RGBCombination": {
		"cat": "Combinaci� RGB",
		"spa": "Combinaci�n RGB",
		"eng": "RGB combination",
		"fre": "Combinaison RVB",
		"cze": "Kombinace RGB"
	  },
	  "Reclassification": {
		"cat": "Reclassificaci�",
		"spa": "Reclasificaci�n",
		"eng": "Reclassification",
		"fre": "Reclassement",
		"cze": "Reklasifikace"
	  },
	  "RetrieveStyles": {
		"cat": "Recupera estils",
		"spa": "Recupera estilos",
		"eng": "Retrieve styles",
		"fre": "R�cup�rer les styles",
		"cze": "Vyhled�vat styly"
	  },
	  "ShareStyle": {
		"cat": "Compartir estil",
		"spa": "Compartir estilo",
		"eng": "Share style",
		"fre": "Partager style",
		"cze": "Sd�let styl"
	  },
	  "DeleteStyle": {
		"cat": "Esborrar estil",
		"spa": "Borrar estilo",
		"eng": "Delete style",
		"fre": "Effacer style",
		"cze": "Odstranit styl"
	  },
	  "ComputeQuality": {
		"cat": "Calcula la qualitat",
		"spa": "Calcula la calidad",
		"eng": "Compute the quality",
		"fre": "Calculer la qualit�",
		"cze": "V�pocet kvality"
	  },
	  "toComputeTheQuality": {
		"cat": "de calcular la qualitat",
		"spa": "de calcular la calidad",
		"eng": "to compute the quality",
		"fre": "pour calculer la qualit�",
		"cze": "vypoc�tat kvalitu"
	  },
	  "NewLayerAdded": {
		"cat": "La nova capa afegida",
		"spa": "La nueva capa a�adida",
		"eng": "The new added layer",
		"fre": "La nouvelle couche ajout�e",
		"cze": "Nove pridan� vrstva"
	  },
	  "ZoomToLayer": {
		"cat": "Zoom a capa",
		"spa": "Zoom a capa",
		"eng": "Zoom to layer",
		"fre": "Afficher en entier",
		"cze": "Pribl�en� k vrstve"
	  },
	  "WhyNotVisible": {
		"cat": "Perqu� no visible",
		"spa": "Porque no visible",
		"eng": "Why not visible",
		"fre": "Pourquoi pas visible",
		"cze": "Proc nen� videt"
	  },
	  "notVisibleInCurrentZoom": {
		"cat": "no �s visible al nivell de zoom actual del navegador",
		"spa": "no es visible al nivel de zoom actual del navegador",
		"eng": "is not visible in the current zoom level of the browser",
		"fre": "n'est pas visible au niveau du zoom actuel du navigateur",
		"cze": "nen� viditeln� v aktu�ln� �rovni "
	  },
	  "notVisibleInCurrentCRS": {
		"cat": "no �s visible amb el CRS actual",
		"spa": "no es visible en el CRS actual",
		"eng": "is not visible in the current CRS",
		"fre": "n'est pas visible au CRS actuel",
		"cze": "nen� viditeln� v aktu�ln�m CRS"
	  },
	  "notVisibleInCurrentView": {
		"cat": "no �s visible en �mbit actual de la vista",
		"spa": "no es visible en el �mbito actual de la vista",
		"eng": "is not visible in the current view extent",
		"fre": "n'est pas visible dans l'�tendue de la vue actuelle",
		"cze": "nen� viditeln� v aktu�ln�m rozsahu "
	  },
	  "OnlyVisibleInTheFollowCRS": {
		"cat": "Nom�s �s visible en els seg�ents CRSs",
		"spa": "Solo es visible en los seguientes CRSs:",
		"eng": "It is only visible in the following CRSs",
		"fre": "Il n'est visible que dans les CRS suivants",
		"cze": "Je viditeln� pouze v n�sleduj�c�ch CRSs"
	  },
	  "toTheLayer": {
		"cat": "a la capa",
		"spa": "a la capa",
		"eng": "to the layer",
		"fre": "� la couche",
		"cze": "ve vrstve"
	  },
	  "containsReferencesEraseContinue": {
		"cat": "cont� refer�ncies a la capa que s'est� intentant esborrar i deixar� de funcionar. Vols continuar",
		"spa": "contiene referencias a la capa que se est� intentando borrar y dejar� de funcionar. Desea continuar",
		"eng": "contains references to the layer that you are trying to erase and will stop working. Do you want to continue",
		"fre": "contient des r�f�rences � la couche que vous essayez d'effacer et de cesser de travailler. Voulez-vous continuer",
		"cze": "obsahuje odkazy na vrstvu, kterou "
	  },
	  "containsReferencesStyleEraseContinue": {
		"cat": "cont� refer�ncies a l'estil que s'est� intentant esborrar i deixar� de funcionar. Vols continuar",
		"spa": "contiene referencias al estilo que se est� intentando borrar y dejar� de funcionar. Desea continuar",
		"eng": "contains references to the style that you are trying to erase and will stop working. Do you want to continue",
		"fre": "contient des r�f�rences au style que vous essayez d'effacer et de cesser de travailler. Voulez-vous continuer",
		"cze": "obsahuje odkazy na styl, "
	  },
	  "ChooseTwoDifferentLayers": {
		"cat": "Cal triar dues capes diferents o la mateixa en estils i/o dates diferents.",
		"spa": "Es necesario elegir dos capas diferentes o la misma en estilos y/o fechas diferentes.",
		"eng": "You should choose two different layers or the same in different styles and/or dates.",
		"fre": "You should choose two different layers or the same in different styles and/or dates.",
		"cze": "Meli byste si vybrat dve ruzn� vrstvy "
	  },
	  "_and_": {
		"cat": " i ",
		"spa": " y ",
		"eng": " and ",
		"fre": " et ",
		"cze": " a"
	  },
	  "CombinationOf": {
		"cat": "Combinaci� de ",
		"spa": "Combinaci�n de ",
		"eng": "Combination of ",
		"fre": "Combination of ",
		"cze": "Kombinace "
	  },
	  "byCategoryOf": {
		"cat": "per categoria de",
		"spa": "por categor�as de",
		"eng": "by category of",
		"fre": "par cat�gorie de",
		"cze": "podle kategorie"
	  },
	  "byCategoriesOf": {
		"cat": "per les categories de",
		"spa": "para las categor�as de",
		"eng": "by categories of",
		"fre": "par cat�gories des",
		"cze": "podle kategori�"
	  },
	  "withStatisticsOf": {
		"cat": " amb estadistics de ",
		"spa": " con estad�sticos de ",
		"eng": " with statistics of ",
		"fre": " avec statistiques par ",
		"cze": " se statistikami "
	  },
	  "WrongNumberElementsInLine": {
		"cat": "Nombre d'elements incorrecte a la l�nia",
		"spa": "N�mero de elementos incorrecto en la l�nea",
		"eng": "Wrong number of elements in line",
		"fre": "Wrong number of elements in line",
		"cze": "Chybn� pocet prvku v r�dku"
	  },
	  "WrongValuesFormatInLine": {
		"cat": "Format incorrecte dels valors a la l�nia",
		"spa": "Formato incorrecto de los valores en la l�nea",
		"eng": "Wrong values format in line",
		"fre": "Wrong values format in line",
		"cze": "Chybn� form�t hodnot v r�dku"
	  },
	  "WrongOldValueInLine": {
		"cat": "Valor a canviar incorrecte a la l�nia",
		"spa": "Valor a cambiar incorrecto en la l�nea",
		"eng": "Wrong old value in line",
		"fre": "Ancienne valeur erron�e dans la ligne",
		"cze": "�patn� star� hodnota v r�dku"
	  },
	  "CannotObtainValidResponseFromServer": {
		"cat": "No s'ha obtingut cap resposta v�lida del servidor sol�licitat",
		"spa": "No se ha obtenido ninguna respuesta v�lida del servidor solicitado",
		"eng": "Cannot obtain any valid response from server",
		"fre": "Aucune r�ponse valide n'a �t� obtenue du serveur demand�",
		"cze": "Ze se serveru nelze z�skat "
	  },
	  "ServerURL": {
		"cat": "URL del servidor",
		"spa": "URL del servidor",
		"eng": "server URL",
		"fre": "URL du serveur",
		"cze": "adresa URL serveru"
	  },
	  "SelectAllLayers": {
		"cat": "Seleccionar totes les capes",
		"spa": "Seleccionar todas las capas",
		"eng": "Select all layers",
		"fre": "S�lectionner toutes les couches",
		"cze": "Vybrat v�echny vrstvy"
	  },
	  "ServerNotHaveLayerInBrowserReferenceSystem": {
		"cat": "Aquest servidor no t� cap capa disponible en el sistema de refer�ncia actual del navegador",
		"spa": "Este servidor no tiene ninguna capa disponible en el sistema de refer�ncia actual del navegador",
		"eng": "This server don't have any layer in the browser actual reference system",
		"fre": "Ce serveur n'a aucune couche disponible dans le syst�me de r�f�rence actuel du navigateur",
		"cze": "Tento server nem� v "
	  },
	  "ServerNotHaveLayer": {
		"cat": "Aquest servidor no t� cap capa disponible",
		"spa": "Este servidor no tiene ninguna capa disponible",
		"eng": "This server don't have any layer",
		"fre": "Ce serveur n'a aucune couche disponible",
		"cze": "Tento server nem� ��dnou vrstvu"
	  },
	  "ValidURLMustBeProvided": {
		"cat": "Cal indicar una adre�a v�lida",
		"spa": "Se debe indicar una direcci�n v�lida",
		"eng": "A valid URL must be provided",
		"fre": "Vous devez indiquer une adresse valide",
		"cze": "Mus� b�t zad�na platn� adresa URL"
	  },
	  "ChooseOneFromList": {
		"cat": "Seleccciona'n un de la llista",
		"spa": "Escoja uno de la lista",
		"eng": "Choose one from list",
		"fre": "S�lectionnez un objet de la liste",
		"cze": "Vyberte jednu ze seznamu"
	  },
	  "toShowInformationOrHelp": {
		"cat": "per mostrar informaci� o ajuda",
		"spa": "para mostrar informaci�n o ayuda",
		"eng": "to show information or help",
		"fre": "pour afficher des informations ou de l'aide",
		"cze": "pro zobrazen� informac� nebo n�povedy"
	  },
	  "AddReclassifiedLayerAsNewStyle": {
		"cat": "Afegeix capa reclassificada com un nou estil",
		"spa": "A�ada capa reclasificada como un nuevo estilo",
		"eng": "Add reclassified layer as a new style",
		"fre": "Ajouter une couche reclass�e en tant que nouveau style",
		"cze": "Pridat reklasifikovanou vrstvu "
	  },
	  "LayerToReclassify": {
		"cat": "Capa a reclassificar",
		"spa": "Capa a reclasificar",
		"eng": "Layer to reclassify",
		"fre": "Couche � reclassifier",
		"cze": "Vrstva, kterou chcete reklasifikovat"
	  },
	  "ReclassifyingExpression": {
		"cat": "F�rmula de reclassificaci�",
		"spa": "F�rmula de reclasificaci�n:",
		"eng": "Reclassifying expression",
		"fre": "Formule de reclassement",
		"cze": "V�raz pro reklasifikaci"
	  },
	  "ResultOfReclassificationAddedAsNewStyleWithName": {
		"cat": "El resultat de la reclassificaci� ser� afegit com a un estil nou de nom",
		"spa": "El resultado de la reclasssificaci�n ser� a�adido como un estilo nuevo de nombre",
		"eng": "The result of the reclassification will be added as a new style with name",
		"fre": "Le r�sultat du reclassement sera ajout� en tant que nouveau style avec le nom",
		"cze": "V�sledek "
	  },
	  "LayerForExpression": {
		"cat": "Capa per a la f�rmula",
		"spa": "Capa para la f�rmula",
		"eng": "Layer for the expression",
		"fre": "Couche pour l'expression",
		"cze": "Vrstva pro v�raz"
	  },
	  "WriteInExpression": {
		"cat": "Escriu a la f�rmula",
		"spa": "Escribe en f�rmula",
		"eng": "Write in expression",
		"fre": "Ecrire � la formule",
		"cze": "Z�pis do v�razu"
	  },
	  "OperatorsFunctionsForExpression": {
		"cat": "Operadors i funcions per a la f�rmula",
		"spa": "Operadores y funciones para la f�rmula",
		"eng": "Operators and functions for the expression",
		"fre": "Op�rateurs et fonctions pour l'expression",
		"cze": "Oper�tory a funkce pro v�raz"
	  },
	  "ResultOfSelectionAddedAsNewLayerStyleWithName": {
		"cat": "El resultat de la selecci� ser� afegit com a una capa/estil nou de nom",
		"spa": "El resultado de la selecci�n ser� a�adido como una capa/estilo nuevo de nombre",
		"eng": "The result of the selection will be added as a new layer/style with name",
		"fre": "Le r�sultat de la s�lection sera ajout� en tant que nouveau couche/style avec le nom",
		"cze": "V�sledek v�beru "
	  },
	  "AddGeometricOverlayLayerBetweenTwoCategoricalLayers": {
		"cat": "Afegir una capa de superposici� geom�trica entre dues capes categ�riques",
		"spa": "A�adir una capa de superposici�n geom�trica entre dos capas categ�ricas",
		"eng": "Add a geometric overlay layer between two categorical layers",
		"fre": "Ajouter un couche de superposition g�om�trique entre deux couche cat�goriels",
		"cze": "Prid�n� "
	  },
	  "AddGeometricOverlay": {
		"cat": "Afegir superposici� geom�trica",
		"spa": "A�adir superposici�n geom�trica",
		"eng": "Add geometric overlay",
		"fre": "Ajouter une superposition g�om�trique",
		"cze": "Pridat geometrick� prekryv"
	  },
	  "AddStatisticalFieldsToCategoricalLayerFromAnotherLayer": {
		"cat": "Afegir camps estad�stics a una capa categ�rica des d'una altra capa (de qualsevol tipus)",
		"spa": "A�ada capa combinada a partir de dues capas existentes",
		"eng": "Add statistical fields to a categorical layer from another layer (of any type)",
		"fre": "Ajouter des champs statistiques � une couche cat�gorielle � partir d'une autre couche (de tout type)",
		"cze": "Prid�n� "
	  },
	  "AddStatisticalFields": {
		"cat": "Afegir camps estad�scs",
		"spa": "A�adir campos estad�sticos",
		"eng": "Add statistical fields",
		"fre": "Ajouter des champs statistiques",
		"cze": "Pridat statistick� pole"
	  },
	  "NewLayerFromServer": {
		"cat": "Capa nova de servidor",
		"spa": "Capa nueva de servidor",
		"eng": "New layer from server",
		"fre": "Nouvelle couche du serveur",
		"cze": "Nov� vrstva ze serveru"
	  },
	  "NewLayerFromDisk": {
		"cat": "Capa nova de disc local",
		"spa": "Capa nueva de disco local",
		"eng": "New layer from local drive",
		"fre": "Nouvelle couche du lecteur local",
		"cze": "Nov� vrstva z m�stn� jednotky"
	  },
	  "NewLayerFromURL": {
		"cat": "Capa nova des de URL",
		"spa": "Capa nueva desde URL",
		"eng": "New layer from URL",
		"fre": "Nouvelle couche du URL",
		"cze": "Nov� vrstva z adresy URL"
	  },
	  "SpecifyServerURL": {
		"cat": "Especifica l'adre�a URL del servidor",
		"spa": "Especifique la direcci�n URL del servidor",
		"eng": "Specify the server URL",
		"fre": "Sp�cifiez l'adresse URL du serveur",
		"cze": "Zadejte adresu URL serveru"
	  },
	  "orChooseOnFromServiceList": {
		"cat": "o Seleccciona'n un de la llista de serveis",
		"spa": "o Escoja uno de la lista de servicios",
		"eng": "or Choose one from service list",
		"fre": "ou s�lectionnez un des services de la liste",
		"cze": "nebo Vyberte jednu ze seznamu slu�eb"
	  },
	  "ofAddingLayerToBrowser": {
		"cat": "d'afegir capes al navegador",
		"spa": "de a�adir capas al navegador",
		"eng": "of adding a layer to browser",
		"fre": "pour ajouter des couches au navigateur",
		"cze": "prid�n� vrstvy do prohl�ece"
	  },
	  "LayerCalculator": {
		"cat": "Calculadora de capes",
		"spa": "Calculadora de capas",
		"eng": "Layer calculator",
		"fre": "Calculateur de couches",
		"cze": "Kalkulacka vrstev"
	  },
	  "toMakeCalculationsOfLayers": {
		"cat": "per fer c�lculs de capes",
		"spa": "para hacer c�lculos de capas",
		"eng": "to make calculations of layers",
		"fre": "pour r�aliser de calculs des couches",
		"cze": "pro prov�den� v�poctu vrstev"
	  },
	  "AnalyticalCombinationLayers": {
		"cat": "Combinaci� anal�tica de capes",
		"spa": "Combinaci�n anal�tica de capas",
		"eng": "Analytical combination of layers",
		"fre": "Combinaison analytique de couches",
		"cze": "Analytick� kombinace vrstev"
	  },
	  "toCombineLayers": {
		"cat": "per combinar capes",
		"spa": "para combinar capas",
		"eng": "to combine layers",
		"fre": "pour correspondre des couches",
		"cze": "ke kombinaci vrstev"
	  },
	  "toReclassifyLayer": {
		"cat": "per reclassificar la capa",
		"spa": "para reclasificar la capa",
		"eng": "to reclassify the layer",
		"fre": "pour reclassifier de couche",
		"cze": "k preklasifikov�n� vrstvy"
	  },
	  "WriteValueInExpression": {
		"cat": "Escriu valor a la f�rmula",
		"spa": "Escribe valor en f�rmula",
		"eng": "Write value in expression",
		"fre": "�crire une valeur dans l'expression",
		"cze": "Z�pis hodnoty ve v�razu"
	  },
	  "RecommendedRangeOfValues": {
		"cat": "Interval de valors recomenats",
		"spa": "Intervalo de valores recomendados",
		"eng": "Recommended range of values",
		"fre": "Intervalle des valeurs recommand�es",
		"cze": "Doporucen� rozsah hodnot"
	  },
	  "anyValue": {
		"cat": "qualsevol valor",
		"spa": "cualquier valor",
		"eng": "any value",
		"fre": "toute valeur",
		"cze": "libovoln� hodnota"
	  },
	  "constant": {
		"cat": "constant",
		"spa": "constante",
		"eng": "constant",
		"fre": "constant",
		"cze": "konstanta"
	  },
	  "selector": {
		"cat": "selector",
		"spa": "selector",
		"eng": "selector",
		"fre": "s�lecteur",
		"cze": "selektor"
	  },
	  "SelectedInLayer": {
		"cat": "Seleccionada a la capa",
		"spa": "Seleccionada en la capa",
		"eng": "Selected in the layer",
		"fre": "S�lectionn� dans la couche",
		"cze": "Vybran� ve vrstve"
	  },
	  "byDefault": {
		"cat": "per defecte",
		"spa": "por defecto",
		"eng": "by default",
		"fre": "par d�faut",
		"cze": "podle v�choz�ho nastaven�"
	  },
	  "OnlyShowValuesOfLayer": {
		"cat": "Mostra nom�s els valors de la capa",
		"spa": "Muestra solo los valores de la capa",
		"eng": "Only show the values of the layer",
		"fre": "Afficher uniquement les valeurs de la couche",
		"cze": "Zobrazit pouze hodnoty vrstvy"
	  },
	  "ofTheStyle": {
		"cat": "de l'estil",
		"spa": "del estil",
		"eng": "of the style",
		"fre": "du style",
		"cze": "stylu"
	  },
	  "ofTheField": {
		"cat": "del camp",
		"spa": "del campo",
		"eng": "of the field",
		"fre": "du champ",
		"cze": "pole"
	  },
	  "thatConformFollowingConditions": {
		"cat": "que complexien les condicions seg�ents",
		"spa": "que cumplen las siguientes condiciones",
		"eng": "that conform the following conditions",
		"fre": "qui se conforment aux conditions suivantes",
		"cze": "kter� splnuj� n�sleduj�c� podm�nky"
	  },
	  "NexusWithNextCondition": {
		"cat": "Nexe amb la seg�ent condici�",
		"spa": "Nexo con la siguiente condici�n",
		"eng": "Nexus with next condition",
		"fre": "Nexus avec la prochaine condition",
		"cze": "Nexus s dal�� podm�nkou"
	  },
	  "TheResultOfSelectionAddedAsNewStyleWithName": {
		"cat": "El resultat de la selecci� ser� afegit com a un estil nou de nom",
		"spa": "El resultado de la selecci�n ser� a�adido como un estilo nuevo de nombre",
		"eng": "The result of the selection will be added as a new style with name",
		"fre": "Le r�sultat de la s�lection sera ajout� en tant que nouveau style avec le nom",
		"cze": "V�sledek v�beru bude "
	  },
	  "ofQueryByAttributeSelectionByCondition": {
		"cat": "de selecci� per condici�",
		"spa": "de selecci�n por condici�n",
		"eng": "of query by attribute selection by condition",
		"fre": " pour s�lection par condition",
		"cze": "dotazu podle v�beru "
	  },
	  "ofRGBCombination": {
		"cat": "de combinaci� RGB",
		"spa": "de combinaci�n RGB",
		"eng": "of RGB combination",
		"fre": "pour combinaison RVB",
		"cze": "kombinace RGB"
	  },
	  "SelectThreeComponentsOfLayer": {
		"cat": "Sel�lecciona les 3 components de la capa",
		"spa": "Selecciona las 3 componentes de la capa",
		"eng": "Select the three components of the layer",
		"fre": "S�lectionnez les trois composants de la couche",
		"cze": "V�ber tr� slo�ek vrstvy"
	  },
	  "Component": {
		"cat": "Component",
		"spa": "Componente",
		"eng": "Component",
		"fre": "Composant",
		"cze": "Slo�ka"
	  },
	  "RGBCombinationAddedAsNewStyleWithName": {
		"cat": "La combinaci� RGB ser� afegida com a un estil nou de nom",
		"spa": "La combinaci�n RGB ser� a�adida como un estilo nuevo de nombre",
		"eng": "The RGB combination will be added as a new style with name",
		"fre": "La combinaison RVB sera ajout� en tant que nouveau style avec le nom",
		"cze": "Kombinace RGB bude prid�na "
	  },
	  "SelectionStatisticValue": {
		"cat": "Selecci� del valor estad�stic",
		"spa": "Selecci�n del valor estad�stico",
		"eng": "Selection of statistic value",
		"fre": "S�lection de la valeur statistique",
		"cze": "V�ber statistick� hodnoty"
	  },
	  "StatisticalValueToDisplayForLayer": {
		"cat": "Valor estad�stic a mostrar per la capa",
		"spa": "Valor estad�stico para mostrar para la capa",
		"eng": "Statistical value to display for the layer",
		"fre": "Valeur statistique � afficher pour la couche",
		"cze": "Statistick� hodnota, kter� se "
	  },
	  "StatisticalValueOf": {
		"cat": "Valor estad�stic de",
		"spa": "Valor estad�stico de",
		"eng": "Statistical value of",
		"fre": "Valeur statistique des",
		"cze": "Statistick� hodnota"
	  },
	  "Ascending": {
		"cat": "Ascendent",
		"spa": "Ascendiente",
		"eng": "Ascending",
		"fre": "Ascendant",
		"cze": "Vzestupne"
	  },
	  "Descending": {
		"cat": "Descendent",
		"spa": "Descendiente",
		"eng": "Descending",
		"fre": "Descendant",
		"cze": "Sestupne"
	  },
	  "CannotEditStyleNeverVisualized": {
		"cat": "No es pot editar un estil no visualitzat",
		"spa": "No es puede editar un estilo no visualizado",
		"eng": "You cannot edit a style never visualized",
		"fre": "Vous ne pouvez pas �diter un style jamais visualis�",
		"cze": "Styl, kter� nebyl nikdy "
	  },
	  "StyleLayer": {
		"cat": "Estil de la capa",
		"spa": "Estilo de la capa",
		"eng": "Style of the layer",
		"fre": "Style de la couche",
		"cze": "Styl vrstvy"
	  },
	  "ValueForStretchingColor": {
		"cat": "Valors per l'estirament de color",
		"spa": "Valores para el estiramiento de color",
		"eng": "Value for stretching of color",
		"fre": "Valeur pour l'�tirement de la couleur",
		"cze": "Hodnota pro rozta�en� barvy"
	  },
	  "computed": {
		"cat": "calculat",
		"spa": "calculado",
		"eng": "computed",
		"fre": "calcul�",
		"cze": "vypocten�"
	  },
	  "Adopt": {
		"cat": "Adoptar",
		"spa": "Adoptar",
		"eng": "Adopt",
		"fre": "Adopter",
		"cze": "Prijmout"
	  },
	  "SunPositionForComputationIllumination": {
		"cat": "Posici� del sol pel c�lcul de la il�luminaci�",
		"spa": "Posici� del sol para el c�lculo de la iluminaci�n",
		"eng": "Sun position for the computation of the illumination",
		"fre": "Position du soleil par le calcul de l'�clairement",
		"cze": "Poloha slunce pro v�pocet "
	  },
	  "Azimuth": {
		"cat": "Azimut",
		"spa": "Azimut",
		"eng": "Azimuth",
		"fre": "Azimut",
		"cze": "Azimut"
	  },
	  "originNorthNorthClockwiseDegress": {
		"cat": "origen al nord nord i en sentit horari (en graus)",
		"spa": "origen en el norte norte y en el sentido de las agujas del reloj (en grados)",
		"eng": "origin north north and clockwise (in degress)",
		"fre": "origine au nord nord et dans le sens des aiguilles d'une montre (en degr�s)"
	  },
	  "Elevation": {
		"cat": "Elevaci�",
		"spa": "Elevaci�n",
		"eng": "Elevation",
		"fre": "�l�vation",
		"cze": "Nadmorsk� v��ka"
	  },
	  "fromGroundDegress": {
		"cat": "des del terra (en graus)",
		"spa": "desde el suelo (en grados)",
		"eng": "from the ground (in degress)",
		"fre": "� partir du sol (en degr�s)",
		"cze": "od zeme (ve stupn�ch)"
	  },
	  "ReliefExaggerationFactor": {
		"cat": "Factor d'exageraci� del relleu",
		"spa": "Factor de exageraci�n del relieve",
		"eng": "Relief exaggeration factor",
		"fre": "Facteur d'exag�ration du relief",
		"cze": "Faktor prev��en� reli�fu"
	  },
	  "Greyscale": {
		"cat": "Escala de grisos",
		"spa": "Escala de grises",
		"eng": "Greyscale",
		"fre": "Niveaux de gris",
		"cze": "Stupnice �edi"
	  },
	  "IncorrectAzimuth": {
		"cat": "Azimut incorrecte. Hauria de ser un n�mero entre 0 i 360. Aplicant el valor per defecte",
		"spa": "Azimut incorrecto. Deber�a ser un n�mero entre 0 y 360. Aplicando el valor por defecto",
		"eng": "Incorrect azimuth. It should be a number between 0 and 360. Applying the default value",
		"fre": "Azimut incorrect. Il doit s'agir d'un nombre compris entre 0 et 360. Application de la valeur par d�faut",
		"cze": "Nespr�vn� azimut. Melo by to b�t c�slo mezi 0 a "
	  },
	  "IncorrectElevation": {
		"cat": "Elevaci� incorrecta. Hauria de ser un n�mero entre 0 i 90. Aplicant el valor per defecte",
		"spa": "Elevaci�n incorrecta. Deber�a ser un n�mero entre 0 y 90. Aplicando el valor por defecto",
		"eng": "Incorrect elevation. It should be a number between 0 and 90. Applying the default value",
		"fre": "�l�vation incorrect. Il doit s'agir d'un nombre compris entre 0 et 90. Application de la valeur par d�faut",
		"cze": "Nespr�vn� nadmorsk� v��ka. Melo by to b�t "
	  },
	  "IncorrectReliefExaggerationFactor": {
		"cat": "Factor d'exageraci� del relleu incorrecte. Hauria de ser un n�mero major de 0.0001. Aplicant el valor per defecte",
		"spa": "Factor de exageraci�n del relieve incorrecta. Deber�a ser un n�mero mayor que 0.0001. Aplicando el valor por defecto",
		"eng": "Incorrect relief exaggeration factor. It should be a number bigger than 0.0001. Applying the default value",
		"fre": "Facteur d'exag�ration du relief incorrect. Il doit s'agir d'un nombre sup�rieur � 0,0001. Application de la valeur par d�faut",
		"cze": "Nespr�vn� faktor prev��en� "
	  },
	  "ofModifingName": {
		"cat": "de modificar el nom",
		"spa": "de modificar el nombre",
		"eng": "of modifing the name",
		"fre": "pour modifier le nom",
		"cze": "o �prave n�zvu"
	  },
	  "LayerNameInLegend": {
		"cat": "Nom de la capa a la llegenda",
		"spa": "Nombre de la capa en la leyenda",
		"eng": "Name of the layer in the legend",
		"fre": "Nom de la couche dans la l�gende",
		"cze": "N�zev vrstvy v legende"
	  },
	  "forShowingLinageInformation": {
		"cat": "de mostrar la informaci� del llinatge",
		"spa": "de mostrar la informaci�n del linaje",
		"eng": "for showing the linage information",
		"fre": "pour afficher les informations de lignage",
		"cze": "pro zobrazen� informac� o linii"
	  },
	  "forShowingQualityInformation": {
		"cat": "de mostrar la informaci� de qualitat",
		"spa": "de mostrar la informaci�n de calidad",
		"eng": "for showing the quality information",
		"fre": "pour afficher l'information de qualit�",
		"cze": "pro zobrazen� informac� o kvalite"
	  },
	  "ofUserFeedback": {
		"cat": "de valoracions dels usuaris",
		"spa": "de valoraciones de los usuarios",
		"eng": "of user feedback",
		"fre": "pour la r�troaction de l'utilisateur",
		"cze": "zpetn� vazby od u�ivatele"
	  },
	  "_withStatisticOf_": {
		"cat": " amb estadistics de ",
		"spa": " con estad�sticos de ",
		"eng": " with statistic of ",
		"fre": " avec statistiques des ",
		"cze": " se statistikou"
	  },
	  "StatisticalDescriptorDisplayNeedSelected": {
		"cat": "Cal sel�leccionar el descriptor estad�stic a mostrar per la capa",
		"spa": "Debe seleccionar el descriptor estad�stico para mostrar para la capa",
		"eng": "The statistical descriptor to display for the layer needs to be selected",
		"fre": "Le descripteur statistique � afficher pour la couche doit �tre s�lectionn�",
		"cze": "Je treba vybrat "
	  }
	},
	"storymap": {
	  "Storymaps": {
		"cat": "Relats amb mapes",
		"spa": "Relatos con mapas",
		"eng": "Storymaps",
		"fre": "Carte de l'histoire",
		"cze": "Pr�behov� mapy"
	  },
	  "SelectStory": {
		"cat": "Selecciona un relat",
		"spa": "Selecciona un relato",
		"eng": "Select a story",
		"fre": "S�lectionnez une histoire",
		"cze": "V�ber pr�behu"
	  },
	  "NoStoryInThisArea": {
		"cat": "No hi ha cap relat associat a aquesta zona",
		"spa": "No hay ning�n relato asociado a esta zona",
		"eng": "There are no stories associated with this area",
		"fre": "Il n'y a pas d'histoires associ�es � cette zone",
		"cze": "K t�to oblasti nejsou prirazeny ��dn� pr�behy"
	  },
	  "ParameterValueFoundIs": {
		"cat": "El valor del par�metre indicat �s",
		"spa": "El valor del par�metro indicado es",
		"eng": "The parameter value found is",
		"fre": "La valeur de param�tre trouv�e est",
		"cze": "Nalezen� hodnota parametru je"
	  },
	  "ActionOnMap": {
		"cat": "Acci� sobre el mapa",
		"spa": "Acci�n sobre el mapa",
		"eng": "Action on the map",
		"fre": "Agir sur la carte",
		"cze": "Akce na mape"
	  },
	  "NewStorymap": {
		"cat": "Nou relat amb mapes",
		"spa": "Nuevo relato con mapas",
		"eng": "New storymaps",
		"fre": "Nouvelle carte de l'histoire",
		"cze": "Nov� pr�behov� mapy"
	  }
	},
	"tresD": {
	  "Graphic_3D": {
		"cat": "Gr�fic 3D",
		"spa": "Gr�fico 3D",
		"eng": "3D Graphic",
		"fre": "Diagramme 3D",
		"cze": "3D grafika"
	  },
	  "VerticalScale": {
		"cat": "Escala vertical",
		"spa": "Escala vertical",
		"eng": "Vertical scale",
		"fre": "�chelle verticale",
		"cze": "Vertik�ln� mer�tko"
	  }
	},
	"canviprj": {
	  "LongLatConversionNotImplementedforRefSys": {
		"cat": "Pas a longitud/latitud no implementat per aquest sistema de refer�ncia",
		"spa": "Paso a longitud/latitud no implementado para este sistema de referencia",
		"eng": "Longitude/latitude conversion has not been implemented for this reference system",
		"fre": "Conversion � longitude/latitude pas impl�ment� pour ce syst�me de r�f�rence",
		"cze": "Prevod zemepisn� d�lky a "
	  },
	  "MapCoordConversionNotImplementedInRefSys": {
		"cat": "Pas a coordenades mapa no implementat per aquest sistema de refer�ncia",
		"spa": "Paso a coordenades mapa no implementado para este sistema de referencia",
		"eng": "Map coordinates conversion has not been implemented for this reference system",
		"fre": "Conversion � coordonn�es de la carte pas impl�ment� pour ce syst�me de r�f�rence.",
		"cze": "Prevod mapov�ch "
	  },
	  "LambertConformalConicZoneIII_NTF": {
		"cat": "Lambert C�nica Conforme Zona III - NTF",
		"spa": "Lambert C�nica Conforme Zona III - NTF",
		"eng": "Lambert Conformal Conic Zone III - NTF",
		"fre": "Lambert Conique Conforme Zone III �NTF",
		"cze": "Lambert Conformal Conic Zone III "
	  },
	  "LambertConformalConicZoneIIext_NTF": {
		"cat": "Lambert C�nica Conforme Zona IIext - NTF",
		"spa": "Lambert C�nica Conforme Zona IIext - NTF",
		"eng": "Lambert Conformal Conic Zone IIext - NTF",
		"fre": "Lambert Conique Conforme Zone IIext�NTF",
		"cze": "Lambert Conformal Conic Zone "
	  },
	  "LambertConformalConicZoneIIIext_NTF": {
		"cat": "Lambert C�nica Conforme Zona IIIext - NTF",
		"spa": "Lambert C�nica Conforme Zona IIIext - NTF",
		"eng": "Lambert Conformal Conic Zone IIIext - NTF",
		"fre": "Lambert Conique Conforme Zone IIIext �NTF",
		"cze": "Lambert Conformal Conic Zone "
	  },
	  "LambertConformalConicICCMediterranianRegion": {
		"cat": "Lambert C�nica Conforme ICC Regi� Mediterr�nia",
		"spa": "Lambert C�nica Conforme ICC Regi�n Mediterr�nea",
		"eng": "Lambert Conformal Conic ICC Mediterranian Region",
		"fre": "Lambert Conique Conforme ICC R�gion M�diterran�enne",
		"cze": "Lambert Conformal "
	  },
	  "MercatorParallel_41d25m_ED50": {
		"cat": "Mercator paral�lel 41� 25' - ED50",
		"spa": "Mercator paralelo 41�25' - ED50",
		"eng": "Mercator parallel 41�25' - ED50",
		"fre": "Mercator parall�le 41�25' - ED50",
		"cze": "Mercator parallel 41�25' - ED50"
	  },
	  "MercatorParallel_41d25m_WGS84": {
		"cat": "Mercator paral�lel 41� 25' - WGS84",
		"spa": "Mercator paralelo 41�25' - WGS84",
		"eng": "Mercator parallel 41�25' - WGS84",
		"fre": "Mercator parall�le 41�25' - WGS84",
		"cze": "Mercator parallel 41�25' - WGS84"
	  },
	  "MercatorParallel_40d36m_ED50": {
		"cat": "Mercator paral�lel 40� 36' - ED50",
		"spa": "Mercator paralelo 40�36' - ED50",
		"eng": "Mercator parallel 40�36' - ED50",
		"fre": "Mercator parall�le 40�36' � ED50",
		"cze": "Mercator parallel 40�36' - ED50"
	  },
	  "MercatorParallelEquator_ED50": {
		"cat": "Mercator paral�lel Equador - ED50",
		"spa": "Mercator paralelo Ecuador - ED50",
		"eng": "Mercator parallel Equator - ED50",
		"fre": "Mercator parall�le Equateur � ED50",
		"cze": "Mercator parallel Equator - ED50"
	  },
	  "MercatorParallelEquator_WGS84": {
		"cat": "Mercator paral�lel Equador - WGS84",
		"spa": "Mercator paralelo Ecuador - WGS84",
		"eng": "Mercator parallel Equator - WGS84",
		"fre": "Mercator parall�le Equateur- WGS84",
		"cze": "Mercator parallel Equator - WGS84"
	  },
	  "WebMercator": {
		"cat": "Web Mercator",
		"spa": "Web Mercator",
		"eng": "Web Mercator",
		"fre": "Web Mercator",
		"cze": "Web Mercator"
	  }
	},
	"capavola": {
	  "Proj": {
		"cat": "Proj",
		"spa": "Proy",
		"eng": "Proj",
		"fre": "Proj",
		"cze": "Proj"
	  },
	  "DeviceLocation": {
		"cat": "Ubicaci� dispositiu",
		"spa": "Ubicaci�n dispositivo",
		"eng": "Device location",
		"fre": "Emplacement de l'appareil",
		"cze": "Um�sten� zar�zen�"
	  },
	  "AroundZone": {
		"cat": "Zona al voltant",
		"spa": "Zona alrededor",
		"eng": "Around zone",
		"fre": "Zone autour",
		"cze": "Okol� z�ny"
	  },
	  "GoTo": {
		"cat": "Anar-hi",
		"spa": "Ir",
		"eng": "Go to",
		"fre": "Aller �",
		"cze": "Prej�t na"
	  },
	  "ofGoToCoordinate": {
		"cat": "d'anar a coordenada",
		"spa": "de ir a coordenada",
		"eng": "of go-to coordinate",
		"fre": "pour aller � la coordonn�e",
		"cze": "souradnice go-to"
	  },
	  "RequestedPointOutsideBrowserEnvelope": {
		"cat": "El punt sol�licitat est� fora de l'�mbit de navegaci�",
		"spa": "El punto solicitado est� fuera del �mbito de navegaci�n",
		"eng": "The requested point is outside browser envelope",
		"fre": "Le point requis se trouve dehors le milieu de navigation",
		"cze": "Po�adovan� bod je mimo "
	  },
	  "toInsertNewPoints": {
		"cat": "per inserir punts nous",
		"spa": "para insertar puntos nuevos",
		"eng": "to insert new points",
		"fre": "pour ins�rer de nouveaux points",
		"cze": "pro vlo�en� nov�ch bodu"
	  },
	  "UserDeniedRequestGeolocation": {
		"cat": "L'usuari ha denegat la sol�licitud de geolocalitzaci�",
		"spa": "El usuario ha denegado la solicitud de geolocalizaci�n",
		"eng": "User denied the request for geolocation",
		"fre": "L'utilisateur a refus� la demande de g�olocalisation",
		"cze": "U�ivatel odm�tl po�adavek na "
	  },
	  "LocationInfoUnavailable": {
		"cat": "La informaci� sobre la ubicaci� no est� disponible",
		"spa": "La informaci�n sobre la ubicaci�n no est� disponible",
		"eng": "Location information is unavailable",
		"fre": "Les informations de localisation ne sont pas disponibles",
		"cze": "Informace o poloze nejsou k dispozici"
	  },
	  "RequestGetUserLocationTimedOut": {
		"cat": "S'ha esgotat el temps d'espera de la sol�licitud per obtenir la ubicaci� de l'usuari",
		"spa": "Se ha agotado el tiempo de espera de la solicitud para obtener la ubicaci�n del usuario",
		"eng": "Request to get user location timed out",
		"fre": "La demande d�obtention de l�emplacement de l�utilisateur a expir�",
		"cze": "Po�adavek na z�sk�n� polohy "
	  },
	  "UnknownErrorObtainingLocation": {
		"cat": "S'ha produ�t un error desconegut durant l'obtenci� de la ubicaci�",
		"spa": "Se ha producido un error desconocido durante la obtenci�n de la geolocalizaci�n",
		"eng": "An unknown error occurred while obtaining the location",
		"fre": "Une erreur inconnue s'est survenue lors de l'obtention de l'emplacement",
		"cze": "Pri z�sk�v�n� um�sten� do�lo k "
	  },
	  "CoordIncorrectFormat": {
		"cat": "Format de les coordenades erroni",
		"spa": "Formato de las coordenadas err�neo",
		"eng": "Coordinate format is incorrect",
		"fre": "Format des coordonn�es erron�",
		"cze": "Form�t souradnic je nespr�vn�"
	  },
	  "NumericalValueMustBeIndicated": {
		"cat": "S'ha d'indicar un valor num�ric",
		"spa": "Se debe indicar un valor num�rico",
		"eng": "A numerical value must be indicated",
		"fre": "Vous devez indiquer une valeur num�rique",
		"cze": "Mus� b�t uvedena c�seln� hodnota"
	  },
	  "GeolocationNotSupportedByBrowser": {
		"cat": "La geolocalitzaci� no est� suportada en aquest navegador",
		"spa": "La geolocalizaci�n no est� soportada en este navegador",
		"eng": "Geolocation is not supported by this browser",
		"fre": "La g�olocalisation n'est pas prise en charge dans ce navigateur",
		"cze": "Geolokace nen� t�mto prohl�ecem "
	  }
	},
	"commands": {
	  "ZoomSizeIncorrectFormat": {
		"cat": "Format del valor del costat de zoom erroni",
		"spa": "Formato del lado de zoom err�neo",
		"eng": "Zoom size format is incorrect.",
		"fre": "Format des zoom erron�",
		"cze": "Form�t velikosti zoomu je nespr�vn�."
	  },
	  "NumericalValueIsRequired": {
		"cat": "S'ha d'indicar un valor num�ric",
		"spa": "Se debe indicar un valor num�rico",
		"eng": "A numerical value is required",
		"fre": "Vous devez indiquer une valeur num�rique",
		"cze": "Je vy�adov�na c�seln� hodnota"
	  },
	  "ZoomSizeNotAvailableBrowser": {
		"cat": "El costat de zoom sol�licitat no �s un dels costats disponibles en aquest navegador.",
		"spa": "El lado de zoom solicitado no es uno de los lados disponibles en este navegador.",
		"eng": "The requested zoom size is not available in this browser.",
		"fre": "La taille de zoom demand�e n'est pas disponible dans ce navigateur.",
		"cze": "Po�adovan� velikost zvet�en� nen� v "
	  },
	  "CRSNotAvailableBrowser": {
		"cat": "El CRS sol�licitat no te un mapa de situaci� associat en aquest navegador i no est� disponible.",
		"spa": "El CRS solicitado no tiene un mapa de situaci�n asociado i no est� disponibles en este navegador.",
		"eng": "The requested CRS has no situation map associated and it is not available in this browser.",
		"fre": "Le CRS demand� n'a pas de carte de situation associ�e et n'est pas disponible dans ce navigateur.",
		"cze": "Po�adovan� poc�tacov� rezervacn� syst�m "
	  },
	  "CoordIncorrectFormat": {
		"cat": "Format de les coordenades erroni",
		"spa": "Formato de las coordenadas err�neo",
		"eng": "Coordinate format is incorrect",
		"fre": "Format des coordonn�es erron�",
		"cze": "Form�t souradnic je nespr�vn�"
	  },
	  "TwoNumericalValuesRequiredFormat": {
		"cat": "S'ha d'indicar dos valors num�rics en el format",
		"spa": "Se debe indicar dos valores num�ricos en el formato",
		"eng": "Two numerical values are required with the format",
		"fre": "Deux valeurs num�riques sont requises dans le format",
		"cze": "Ve form�tu jsou vy�adov�ny dve "
	  },
	  "SelectionsIncorrectFormat": {
		"cat": "Format de les consultes erroni",
		"spa": "Formato de las consultas err�neo",
		"eng": "Query format is incorrect",
		"fre": "Format des requete erron�",
		"cze": "Form�t dotazu je nespr�vn�"
	  },
	  "HistogramsIncorrectFormat": {
		"cat": "Format dels histogrames erroni",
		"spa": "Formato de los histogramas err�neo",
		"eng": "Histogram format is incorrect",
		"fre": "Format d'histogramme erron�",
		"cze": "Form�t histogramu je nespr�vn�"
	  },
	  "LyQNameRequired": {
		"cat": "S'han d'indicar l'identificador de la capa, la consulta i el nom del nou estil en el format",
		"spa": "Debe indicar el identificador de la capa, la consulta y el nombre del nuevo estilo en el formato",
		"eng": "The layer identifier, query, and new style name must be specified in the format",
		"fre": "L'identifiant de la couche, la requ�te et le nom du nouveau style doivent �tre sp�cifi�s dans le format",
		"cze": "Identifik�tor vrstvy, dotaz a n�zev nov�ho stylu "
	  },
	  "LyRequired": {
		"cat": "S'han d'indicar l'identificador de la capa",
		"spa": "Debe indicar el identificador de la capa",
		"eng": "The layer identifier, must be specified in the format",
		"fre": "L'identifiant de la couche, �tre sp�cifi�s dans le format",
		"cze": "Identifik�tor vrstvy, mus� b�t zad�n ve form�tu"
	  }
	},
	"consola": {
	  "Console": {
		"cat": "Consola",
		"spa": "Consola",
		"eng": "Console",
		"fre": "Console",
		"cze": "Konzole"
	  },
	  "ofWatchingReportsConsole": {
		"cat": "de veure els informes de la consola",
		"spa": "de ver los informes de la consola",
		"eng": "of watching the reports in the console",
		"fre": "pour regarder les rapports dans la console",
		"cze": "sledov�n� hl�en� v konzole"
	  },
	  "DeleteAll": {
		"cat": "Esborra-ho tot",
		"spa": "Borrar todo",
		"eng": "Delete all",
		"fre": "Tout effacer",
		"cze": "Smazat v�e"
	  }
	},
	"consult": {
	  "NoDataForRequestedPoint": {
		"cat": "No hi ha dades pel punt consultat",
		"spa": "No hay datos para el punto consultado",
		"eng": "There are no data for the requested point",
		"fre": "Pas de donn�es au point consult�",
		"cze": "Pro po�adovan� bod nejsou k dispozici "
	  },
	  "andActiveQueryableLayers": {
		"cat": "i les capes consultables actives",
		"spa": "y las capas consultables activas",
		"eng": "and active queryable layers",
		"fre": "et les couches consultables activ�es",
		"cze": "a aktivn� dotazovateln� vrstvy"
	  },
	  "ChartValueCopiedClipboardFormat": {
		"cat": "Els valors del gr�fic han estat copiats al portaretalls en format",
		"spa": "Los valores del gr�fico han sido copiados al portapapeles en formato",
		"eng": "The values of the chart have been copied to clipboard in the format",
		"fre": "Les valeurs du graphique ont �t� copi�es dans le presse-papiers dans le format",
		"cze": "Hodnoty grafu byly zkop�rov�ny do "
	  },
	  "MessagesNotDisplayedAgain": {
		"cat": "Aquests missatge no es tornar� a mostrar",
		"spa": "Este mensaje no se volver� a mostrar",
		"eng": "These messages will not be displayed again",
		"fre": "Ces messages ne seront plus affich�s",
		"cze": "Tyto zpr�vy se ji� nebudou zobrazovat"
	  },
	  "CopySeriesValues": {
		"cat": "Copia valors de la s�rie",
		"spa": "Copiar valores de la serie",
		"eng": "Copy series values",
		"fre": "Copier les valeurs des s�ries",
		"cze": "Kop�rov�n� hodnot rad"
	  },
	  "FollowingCoordinateSelected": {
		"cat": "S'ha seleccionat la seg�ent coordenada",
		"spa": "Se ha seleccionado la siguiente coordenada",
		"eng": "The following coordinate has been selected",
		"fre": "La coordonn�e suivante a �t� s�lectionn�e",
		"cze": "Byla vybr�na n�sleduj�c� souradnice"
	  },
	  "IfCorrectValidateIt": {
		"cat": "Si �s correcte, ja la podeu validar.",
		"spa": "Si es correcta, ya la puede validar.",
		"eng": "If it is correct, you can already validate it.",
		"fre": "Si correcte, vous pouvez la valider.",
		"cze": "Pokud je spr�vn�, mu�ete ji ji� potvrdit."
	  },
	  "BrowserClosedReturnForm": {
		"cat": "Es tancar� la finestra de navegaci� i tornar� al formulari.",
		"spa": "Se cerrar� la ventana de navegaci�n y volver� al formulario.",
		"eng": "Browser window will be closed and will return to form.",
		"fre": "La fen�tre du navigateur va se fermer et vous serez redirig�s vers le formulaire.",
		"cze": "Okno prohl�ece se zavre a vr�t� se do "
	  },
	  "IfIncorrectClicksViewAgain": {
		"cat": "Si �s incorrecte, torni a clicar sobre la vista.",
		"spa": "Si es incorrecta, vuelva a cliquear sobre la vista.",
		"eng": "If it is incorrect, click on the view again.",
		"fre": "Si incorrecte, cliquez une autre fois sur la vue.",
		"cze": "Pokud je nespr�vn�, kliknete na "
	  },
	  "ValidateCoordinate": {
		"cat": "Validar Coordenada",
		"spa": "Validar Coordenada",
		"eng": "Validate Coordinate",
		"fre": "Valider coordonn�e",
		"cze": "Overen� souradnice"
	  },
	  "WaitingForData": {
		"cat": "Esperant dades",
		"spa": "Esperando datos",
		"eng": "Waiting for data",
		"fre": "En attente des donn�es",
		"cze": "Cek�n� na data"
	  },
	  "ProfileTransversalCutQueriedLine": {
		"cat": "Perfil del tall transversal de la l�nia consultada",
		"spa": "Perfil del corte transversal de la l�nea consultada",
		"eng": "Profile of the transversal cut of the queried line",
		"fra": "Profil de la coupe transversale de la ligne interrog�e",
		"cze": "Profil pr�cn�ho rezu dotazovan� "
	  },
	  "PreviousLayer": {
		"cat": "Anterior capa",
		"spa": "Anterior capa",
		"eng": "Previous layer",
		"fre": "Pr�c�dente couche",
		"cze": "Predchoz� vrstva"
	  },
	  "NextLayer": {
		"cat": "Seg�ent capa",
		"spa": "Siguiente capa",
		"eng": "Next layer",
		"fre": "Suivant couche",
		"cze": "Dal�� vrstva"
	  },
	  "noconsul_htm": {
		"cat": "noconsul.htm",
		"spa": "noconsul_spa.htm",
		"eng": "noconsul_eng.htm",
		"fre": "noconsul_fre.htm",
		"cze": "noconsul_eng.htm"
	  },
	  "NotImplementedYetRESTful": {
		"cat": "De moment no implementat per RESTful",
		"spa": "De momento no implementado para RESTful",
		"eng": "Not implemented yet for RESTful",
		"fre": "Pas encore impl�ment� pour RESTful",
		"cze": "Zat�m neimplementov�no pro RESTful"
	  }
	},
	"ctipica": {
	  "AnyMatch": {
		"cat": "Cap coincid�ncia",
		"spa": "Ninguna coincidencia",
		"eng": "Any match",
		"fre": "Aucune co�ncidence",
		"cze": "Jak�koli shoda"
	  },
	  "UpdatingList": {
		"cat": "Actualitzant la llista",
		"spa": "Actualizando la lista",
		"eng": "Updating the list",
		"fre": "La liste est en train d'�tre actualis�e",
		"cze": "Aktualizace seznamu"
	  },
	  "toBeShownInFrame": {
		"cat": "per a mostrar al frame",
		"spa": "para mostrar en el frame",
		"eng": "to be shown in the frame",
		"fre": "� montrer au frame",
		"cze": "kter� se m� zobrazit v r�mecku"
	  },
	  "notInTypicalQueryLayerList": {
		"cat": "no �s a la llista de capes amb consulta t�pica",
		"spa": "no est� en la lista de capas con consulta t�pica",
		"eng": "is not in the typical query layer list",
		"fre": "ne se trouve pas dans la liste de couches avec recherche typique",
		"cze": "nen� v typick�m seznamu vrstvy dotazu"
	  },
	  "isIncorrect": {
		"cat": "�s incorrecte",
		"spa": "es incorrecta",
		"eng": "is incorrect",
		"fre": "est incorrecte",
		"cze": "je nespr�vn�"
	  },
	  "UseBrowserToolsPlaceOnView": {
		"cat": "Usa les eines del navegador per situar-te sobre la vista.\nA continuaci� f�s clic sobre la vista per determinar la coordenada i la informaci� del punt a validar.\nPer finalitzar, prem [Validar Coordenada] o [Cancel�lar] des de la finestra de validaci�.",
		"spa": "Utiliza las herramientas del navegador para situarte sobre la vista.\nA continuaci�n haz clic sobre la vista para determinar la coordenada y la informaci�n del punto a validar.\nPara finalizar aprieta [Validar Coordenada] o [Cancelar] desde la ventana de validaci�n.",
		"eng": "You have to use browser tools to place on the view.\n Later, you have to click on the view to determine the coordinate\nand the information of the point of validating.\nTo finish you have to click [Validate coordinate] or [Cancel] from the validation window.",
		"fre": "Utilisez les outils du navigateur pour vous placer sur la vue.\n Ensuite cliquez sur la vue pour d�terminer la coordonn�\net l'information du point � valider.\nFinalement, pressez [Valider Coordonn�e] o� [Annuler] de la fen�tre de validation.",
		"cze": "K um�sten� na zobrazen� mus�te pou��t "
	  }
	},
	"download": {
	  "ErrorWhileSendingTryAgain": {
		"cat": "S'ha produ�t algun error durant l'enviament del fitxer. Torna-ho a intentar",
		"spa": "Se ha producido algun error durante el env�o del fichero. Vu�lvalo a intentar",
		"eng": "An error has been occurred while sending the file. Try again",
		"fre": "Une erreur vient de se produire pendant l'envoi du fichier. R�essayez",
		"cze": "Pri odes�l�n� souboru do�lo k chybe. "
	  },
	  "LayerDownloadedTakeMinutes": {
		"cat": "La generaci� de la desc�rrega de la capa podria trigar alguns minuts",
		"spa": "La generaci�n de la descarga de la capa podr�a demorarse algunos minutos",
		"eng": "Generation of layer to be downloaded can take some minutes",
		"fre": "La cr�ation du t�l�chargement de la couche pourrai prendre quelques minutes",
		"cze": "Generov�n� vrstvy ke sta�en� mu�e "
	  },
	  "PreparingRequestedLayer": {
		"cat": "Preparant la capa sol�licitada",
		"spa": "Preparando la capa solicitada",
		"eng": "Preparing the requested layer",
		"fre": "En pr�parant la couche demand�e",
		"cze": "Pr�prava po�adovan� vrstvy"
	  },
	  "SelectiveDownloadZone": {
		"cat": "Desc�rrega selectiva de la zona",
		"spa": "Descarga selectiva de la zona",
		"eng": "Selective download of the zone",
		"fre": "T�l�chargement s�lectif de la zone",
		"cze": "Selektivn� sta�en� z�ny"
	  },
	  "MMZ_MMZX_NotInstalledDownload": {
		"cat": "Pel format MMZ o MMZX (ISO 19165-1), si no teniu instal�lat o actualitzat el Lector Universal de Mapes del MiraMon, descarregueu-lo",
		"spa": "Para el formato MMZ o MMZX (ISO 19165-1), si no tiene instalado o actualizado el Lector Universal de Mapas de MiraMon, desc�rguelo",
		"eng": "For the MMZ or MMZX format (ISO 19165-1), if you don't have installed or updated MiraMon Universal Map Reader, please, download it",
		"fre": "Pour le format MMZ ou MMZX (ISO 19165-1), si vous n'avez pas install� o� actualis� le Lecteur Universel de Cartes du MiraMon, please, download it",
		"cze": "Pokud nem�te nainstalovanou nebo "
	  },
	  "ViewLayers_MMZ_MMZX_InstalledMM": {
		"cat": "Per poder visualitzar les capes en format MMZ o MMZX (ISO 19165-1) cal tenir correctament instal�lat el programa MiraMon.",
		"spa": "Para poder visualitzar las capas en formato MMZ o MMZX (ISO 19165-1) es necessario tener correctamente instalado el programa MiraMon.",
		"eng": "In order to be able to view the layers in MMZ or MMZX format (ISO 19165-1), an installed version of the MiraMon software is required.",
		"fre": "Pour pouvoir visualiser les couches en MMZ du format MMZX (ISO 19165-1), et la version install�e du logiciel MiraMon est n�cessaire",
		"cze": "Pro zobrazen� vrstev ve form�tu "
	  },
	  "DownloadLayerCompleted": {
		"cat": "Desc�rrega la capa completa",
		"spa": "Descarga de la capa completa",
		"eng": "Download the complete layer",
		"fre": "T�l�chargement de la couche compl�te",
		"cze": "St�hnete si kompletn� vrstvu"
	  },
	  "DownloadLayer": {
		"cat": "Desc�rrega de capes",
		"spa": "Descarga de capas",
		"eng": "Layer download",
		"fre": "T�l�charger des couches",
		"cze": "Sta�en� vrstvy"
	  },
	  "ofDownloading": {
		"cat": "de descarregar",
		"spa": "de descargar",
		"eng": "of downloading",
		"fre": "de t�l�chargement",
		"cze": "stahov�n�"
	  }
	},
	"params": {
	  "ViewAreaBackgroundColor": {
		"cat": "Color de fons de la vista",
		"spa": "Color de fondo de la vista",
		"eng": "Background color of the view area",
		"fre": "Couleur du fond",
		"cze": "Barva pozad� oblasti zobrazen�"
	  },
	  "SituationRectangleColor": {
		"cat": "Color del rectangle de situaci�",
		"spa": "Color del rect�ngulo de situaci�n",
		"eng": "Color of the situation rectangle",
		"fre": "Couleur du rectangle de situation",
		"cze": "Barva obd�ln�ku situace"
	  },
	  "WidthOfTheView": {
		"cat": "Mida de l'ample de la vista",
		"spa": "Tama�o del ancho de la vista",
		"eng": "Width of the view",
		"fre": "Dimensions de la largeur de la vue",
		"cze": "��rka zobrazen�"
	  },
	  "LateralJumpPerc": {
		"cat": "Perc. de salt lateral",
		"spa": "Porc. de salto lateral",
		"eng": "Lateral jump perc.",
		"fre": "Pourc. de saut lat�ral",
		"cze": "Bocn� skok perc."
	  },
	  "ShowCleanMap_View": {
		"cat": "Mostra vista del mapa neta",
		"spa": "Muestra vista del mapa limpia",
		"eng": "Show a clean map view",
		"fre": "Afficher une vue de carte propre",
		"cze": "Zobrazen� cist�ho zobrazen� mapy"
	  },
	  "ZoomPan_2Clicks": {
		"cat": "Zoom i pan basat en 2 simples clics (ergon�mic)",
		"spa": "Zoom y pan basado en 2 simples clics (ergon�mico)",
		"eng": "Zoom and pan based in 2 simples clicks (ergonomic)",
		"fre": "Zoom et pan bas� en 2 simples clics (ergonomique)",
		"cze": "Pribl�en� a posun na z�klade 2 jednoduch�ch "
	  },
	  "ZoomPan_1ClickDrag": {
		"cat": "Zoom i pan en 1 clic i arrossegant",
		"spa": "Zoom y pan en 1 clic y arrastrando",
		"eng": "Zoom and pan with 1 click and dragging",
		"fre": "Zoom et pan en 1 cliques et glisser",
		"cze": "Pribl�en� a posun pomoc� 1 kliknut� a ta�en�"
	  },
	  "NOfFigures": {
		"cat": "N. decimals",
		"spa": "N. decimales",
		"eng": "N. of decimal figures",
		"fre": "N. d�cimales",
		"cze": "N. desetinn�ch c�sel"
	  },
	  "Corners": {
		"cat": "Cantonades",
		"spa": "Esquinas",
		"eng": "Corners",
		"fre": "Coins",
		"cze": "Rohy"
	  },
	  "None_underlined": {
		"cat": "cap",
		"spa": "ninguna",
		"eng": "none",
		"fre": "aucune",
		"cze": "��dn�"
	  },
	  "None_underlined_char": {
		"cat": "a",
		"spa": "a",
		"eng": "n",
		"fre": "a",
		"cze": "n"
	  },
	  "Proj_underlined_p": {
		"cat": "Proj",
		"spa": "Proy",
		"eng": "Proj",
		"fre": "Proj",
		"cze": "Proj"
	  },
	  "Proj_underlined_r": {
		"cat": "Proj",
		"spa": "Proy",
		"eng": "Proj",
		"fre": "Proj",
		"cze": "Proj"
	  },
	  "ShowWindow_underlined": {
		"cat": "Mostra finestra",
		"spa": "Muestra ventana",
		"eng": "Show window",
		"fre": "Afficher la fen�tre",
		"cze": "Zobrazit okno"
	  },
	  "ShowWindow_underlined_char": {
		"cat": "m",
		"spa": "m",
		"eng": "h",
		"fre": "f",
		"cze": "h"
	  },
	  "JsonConfigurationFile": {
		"cat": "Fitxer de configuraci� JSON",
		"spa": "Fichero de configuraci�n JSON",
		"eng": "JSON configuration file",
		"fre": "Fichier de configuration JSON)",
		"cze": "Konfiguracn� soubor JSON"
	  },
	  "changesAboveWillBeApplied": {
		"cat": "s'�aplicaran els canvis anteriors",
		"spa": "los cambios anteriores se aplicar�n",
		"eng": "changes above will be applied",
		"fre": "les modifications ci-dessus s'appliqueront",
		"cze": "v��e uveden� zmeny budou pou�ity"
	  },
	  "ofChangingParameters": {
		"cat": "de canviar par�metres",
		"spa": "de cambiar par�metros",
		"eng": "of changing parameters",
		"fre": "pour changement de param�tres",
		"cze": "men�c�ch se parametru"
	  },
	  "LayersOutSideTheBBox": {
		"cat": "Capes fora de l'�mbit actual",
		"spa": "Capas fuera del �mbito actual",
		"eng": "Layers outside the current bounding box",
		"fre": "Calques en dehors de la zone de d�limitation actuelle",
		"cze": "Vrstvy mimo aktu�ln� ohranicuj�c� r�mecek"
	  },
	  "LayersOutSideScale": {
		"cat": "Capes sense suport pel nivell de zoom actual",
		"spa": "Capas sin soporte para el nivel de zoom actual",
		"eng": "Layers without suport for the current zoom level",
		"fre": "Calques sans prise en charge du niveau de zoom actuel",
		"cze": "Vrstvy bez podpory pro aktu�ln� �roven zvet�en�"
	  },
	  "LayersWithoutSupportCurrentCRS": {
		"cat": "Capes sense suport pel CRS actual",
		"spa": "Capas sin soporte para el CRS actual",
		"eng": "Layers without suport for the current CRS",
		"fre": "Calques sans prise en charge du CRS actuel",
		"cze": "Vrstvy bez podpory aktu�ln�ho CRS"
	  }
	},
	"editavec": {
	  "InsertTransactionObjectIntoLayer": {
		"cat": "La transacci� d'inserci� a la capa",
		"spa": "La transacci�n de inserci�n a la capa",
		"eng": "The insert transaction of the object into the layer",
		"fre": "L'op�ration d'insertion de l'objet dans la couche",
		"cze": "Transakce vlo�en� objektu do "
	  },
	  "hasFailed": {
		"cat": "ha fallat",
		"spa": "ha fallado",
		"eng": "has failed",
		"fre": "a �chou�",
		"cze": "selhala"
	  },
	  "InsertTransactionObject": {
		"cat": "La transacci� d'inserci� de l'objecte",
		"spa": "La transacci�n de inserci�n del objeto",
		"eng": "The insert transaction of the object",
		"fre": "La transaction d'insertion de l'objet",
		"cze": "Transakce vlo�en� objektu"
	  },
	  "successfullyCompleted": {
		"cat": "ha finalitzat amb �xit",
		"spa": "ha finalizado con �xito",
		"eng": "has been successfully completed",
		"fre": "a �t� achev� avec succ�s",
		"cze": "byla �spe�ne dokoncena"
	  },
	  "toReportResultTransaction": {
		"cat": "per informar del resultat de la transacci�",
		"spa": "para informar del resultado de la transacci�n",
		"eng": "to report the result of the transaction",
		"fre": "pour rapporter le r�sultat de la transaction",
		"cze": "hl�en� v�sledku transakce"
	  },
	  "ClickOnViewDeterminesCoordNewPoint": {
		"cat": "Un clic sobre la vista determina la coordenada del nou punt. Ompliu en aquesta fitxa les propietats del objecte que conegueu i premeu [D'acord] per enviar el punt al servidor.",
		"spa": "Un clic sobre la vista determina la coordenada del punto nuevo. Rellena en esta ficha los datos del objeto que conozcas y pulsa [Aceptar] para enviar el punto al servidor.",
		"eng": "A click on the view determines the coordinate of the new point. In this tab fill the properties of the feature that you known and press [OK] to send the point to the server.",
		"fre": "Un clic sur la vue d�termine la coordonn�e du nouveau point. Dans cet onglet remplissez les propri�t�s de la fonctionnalit� que vous connaissez et appuyez sur [Accepter] pour envoyer le point au serveur.",
		"cze": "Kliknut�m na zobrazen� urc�te "
	  }
	},
	"histopie": {
	  "ImageValuesCopiedClipboardFormat": {
		"cat": "Els valors de la imatge han estat copiats al portaretalls en format",
		"spa": "Los valores de la image han sido copiados al portapapeles en formato",
		"eng": "The values of the image have been copied to clipboard in the format",
		"fre": "Les valeurs du graphique ont �t� copi�es dans le presse-papier dans le format",
		"cze": "Hodnoty obr�zku byly zkop�rov�ny "
	  },
	  "ClassDescription": {
		"cat": "Descripci� de classe",
		"spa": "Descripci�n de clase",
		"eng": "Class description",
		"fre": "Description de la classe",
		"cze": "Popis tr�dy"
	  },
	  "ClassValue": {
		"cat": "Valor de classe",
		"spa": "Valor de classe",
		"eng": "Class value",
		"fre": "Valeur de classe",
		"cze": "Hodnota tr�dy"
	  },
	  "AreaPercentage": {
		"cat": "Percentatge de l'�rea",
		"spa": "Porcentaje del �rea",
		"eng": "Percentage of area",
		"fre": "Pourcentage de zone",
		"cze": "Procento plochy"
	  },
	  "ClassCentalValue": {
		"cat": "Valor central de la classe",
		"spa": "Valor central de la classe",
		"eng": "Class cental value",
		"fre": "Classe valeur centrale"
	  },
	  "CountByCategory": {
		"cat": "Recompte per categoria",
		"spa": "Cuenta por categor�a",
		"eng": "Count by category",
		"fre": "Compter par cat�gorie",
		"cze": "Pocet podle kategorie"
	  },
	  "AreaByCategory": {
		"cat": "�rea per categoria",
		"spa": "�rea por categor�a",
		"eng": "Area by category",
		"fre": "Zone par cat�gorie",
		"cze": "Plocha podle kategorie"
	  },
	  "Similarity": {
		"cat": "Semblan�a",
		"spa": "Similitud",
		"eng": "Similarity",
		"fra": "Similitude",
		"cze": "Podobnost"
	  },
	  "MeanPlusDev": {
		"cat": "Mitjana+desv",
		"spa": "Media+desv",
		"eng": "Mean+dev",
		"fre": "Moyenne+�cart",
		"cze": "Prumer+odchylka"
	  },
	  "MeanMinusDev": {
		"cat": "Mitjana-desv",
		"spa": "Media-desv",
		"eng": "Mean-dev",
		"fre": "Moyenne-�cart",
		"cze": "Prumer-odchylka"
	  },
	  "ChartValuesCopiedClipboard": {
		"cat": "Els valors del gr�fic han estat copiats al portaretalls",
		"spa": "Los valores del gr�fico han sido copiados al portapapeles",
		"eng": "The values of the chart have been copied to clipboard",
		"fre": "Les valeurs du graphique ont �t� copi�es dans le presse-papier",
		"cze": "Hodnoty grafu byly zkop�rov�ny do "
	  },
	  "CutTails": {
		"cat": "Retall de cues",
		"spa": "Recorte de colas",
		"eng": "Tail trimming",
		"fre": "Coupe de la queue",
		"cze": "Orez�v�n� oc�sku"
	  }
	},
	"datahora": {
	  "ofData": {
		"cat": "de",
		"spa": "de",
		"eng": "",
		"fre": ""
	  },
	  "PrepMonthOfTheYear0": {
		"cat": "de gener",
		"spa": "de enero",
		"eng": "January",
		"fre": "Janvier",
		"cze": "Leden"
	  },
	  "PrepMonthOfTheYear1": {
		"cat": "de febrer",
		"spa": "de febrero",
		"eng": "February",
		"fre": "F�vrier",
		"cze": "�nor"
	  },
	  "PrepMonthOfTheYear2": {
		"cat": "de mar�",
		"spa": "de marzo",
		"eng": "March",
		"fre": "Mars",
		"cze": "Brezen"
	  },
	  "PrepMonthOfTheYear3": {
		"cat": "d'abril",
		"spa": "de abril",
		"eng": "April",
		"fre": "Avril",
		"cze": "Duben"
	  },
	  "PrepMonthOfTheYear4": {
		"cat": "de maig",
		"spa": "de mayo",
		"eng": "May",
		"fre": "Mai",
		"cze": "Kveten"
	  },
	  "PrepMonthOfTheYear5": {
		"cat": "de juny",
		"spa": "de junio",
		"eng": "June",
		"fre": "Juin",
		"cze": "Cerven"
	  },
	  "PrepMonthOfTheYear6": {
		"cat": "de juliol",
		"spa": "de julio",
		"eng": "July",
		"fre": "Juillet",
		"cze": "Cervenec"
	  },
	  "PrepMonthOfTheYear7": {
		"cat": "d'agost",
		"spa": "de agosto",
		"eng": "August",
		"fre": "Ao�t",
		"cze": "Srpen"
	  },
	  "PrepMonthOfTheYear8": {
		"cat": "de setembre",
		"spa": "de setiembre",
		"eng": "September",
		"fre": "Septembre",
		"cze": "Z�r�"
	  },
	  "PrepMonthOfTheYear9": {
		"cat": "d'octubre",
		"spa": "de octubre",
		"eng": "October",
		"fre": "Octobre",
		"cze": "R�jen"
	  },
	  "PrepMonthOfTheYear10": {
		"cat": "de novembre",
		"spa": "de noviembre",
		"eng": "November",
		"fre": "Novembre",
		"cze": "Listopad"
	  },
	  "PrepMonthOfTheYear11": {
		"cat": "de desembre",
		"spa": "de diciembre",
		"eng": "December",
		"fre": "D�cembre",
		"cze": "Prosinec"
	  },
	  "MonthOfTheYear0": {
		"cat": "Gener",
		"spa": "Enero",
		"eng": "January",
		"fre": "Janvier",
		"cze": "Leden"
	  },
	  "MonthOfTheYear1": {
		"cat": "Febrer",
		"spa": "Febrero",
		"eng": "February",
		"fre": "F�vrier",
		"cze": "�nor"
	  },
	  "MonthOfTheYear2": {
		"cat": "Mar�",
		"spa": "Marzo",
		"eng": "March",
		"fre": "Mars",
		"cze": "Brezen"
	  },
	  "MonthOfTheYear3": {
		"cat": "Abril",
		"spa": "Abril",
		"eng": "April",
		"fre": "Avril",
		"cze": "Duben"
	  },
	  "MonthOfTheYear4": {
		"cat": "Maig",
		"spa": "Mayo",
		"eng": "May",
		"fre": "Mai",
		"cze": "Kveten"
	  },
	  "MonthOfTheYear5": {
		"cat": "Juny",
		"spa": "Junio",
		"eng": "June",
		"fre": "Juin",
		"cze": "Cerven"
	  },
	  "MonthOfTheYear6": {
		"cat": "Juliol",
		"spa": "Julio",
		"eng": "July",
		"fre": "Juillet",
		"cze": "Cervenec"
	  },
	  "MonthOfTheYear7": {
		"cat": "Agost",
		"spa": "Agosto",
		"eng": "August",
		"fre": "Ao�t",
		"cze": "Srpen"
	  },
	  "MonthOfTheYear8": {
		"cat": "Setembre",
		"spa": "Setiembre",
		"eng": "September",
		"fre": "Septembre",
		"cze": "Z�r�"
	  },
	  "MonthOfTheYear9": {
		"cat": "Octubre",
		"spa": "Octubre",
		"eng": "October",
		"fre": "Octobre",
		"cze": "R�jen"
	  },
	  "MonthOfTheYear10": {
		"cat": "Novembre",
		"spa": "Noviembre",
		"eng": "November",
		"fre": "Novembre",
		"cze": "Listopad"
	  },
	  "MonthOfTheYear11": {
		"cat": "Desembre",
		"spa": "Diciembre",
		"eng": "December",
		"fre": "D�cembre",
		"cze": "Prosinec"
	  }
	},
	"barra": {
	  "ZoomIn": {
		"cat": "Acostar",
		"spa": "Acercar",
		"eng": "Zoom in",
		"fre": "Rapprocher",
		"cze": "Pribl�en�"
	  },
	  "ZoomOut": {
		"cat": "Allunyar",
		"spa": "Alejar",
		"eng": "Zoom out",
		"fre": "�loigner",
		"cze": "Zvet�en� a zmen�en�"
	  },
	  "goToCoordinate": {
		"cat": "anar a coordenada",
		"spa": "ir a coordenada",
		"eng": "go to coordinate",
		"fre": "aller � la coordonn�e",
		"cze": "prej�t na souradnice"
	  },
	  "GoToCoordinate": {
		"cat": "Anar a coordenada",
		"spa": "Ir a coordenada",
		"eng": "Go to coordinate",
		"fre": "Aller � la coordonn�e",
		"cze": "Prej�t na souradnice"
	  },
	  "previousView": {
		"cat": "vista pr�via",
		"spa": "vista previa",
		"eng": "previous view",
		"fre": "vue pr�alable",
		"cze": "predchoz� zobrazen�"
	  },
	  "PreviousView": {
		"cat": "Vista pr�via",
		"spa": "Vista previa",
		"eng": "Previous view",
		"fre": "Vue pr�alable",
		"cze": "Predchoz� zobrazen�"
	  },
	  "generalView": {
		"cat": "vista general",
		"spa": "vista general",
		"eng": "general view",
		"fre": "vue g�n�rale",
		"cze": "obecn� zobrazen�"
	  },
	  "GeneralView": {
		"cat": "Vista general",
		"spa": "Vista general",
		"eng": "General view",
		"fre": "Vue g�n�rale",
		"cze": "Obecn� zobrazen�"
	  },
	  "PanView": {
		"cat": "Mou vista",
		"spa": "Mueve vista",
		"eng": "Pan view",
		"fre": "D�place vue",
		"cze": "Pohled na panorama"
	  },
	  "CenterWhereClick": {
		"cat": "Centra on faci clic",
		"spa": "Centra donde haga clic",
		"eng": "Center where click",
		"fre": "Centre o� cliquer",
		"cze": "Stredisko, kde kliknete"
	  },
	  "WindowZoom": {
		"cat": "Zoom de finestra",
		"spa": "Zoom de ventana",
		"eng": "Window zoom",
		"fre": "Zoom de fen�tre",
		"cze": "Pribl�en� okna"
	  },
	  "NewView": {
		"cat": "Nova vista",
		"spa": "Nova vista",
		"eng": "New view",
		"fre": "Nouvelle vue",
		"cze": "Nov� zobrazen�"
	  },
	  "Validation": {
		"cat": "Validaci�",
		"spa": "Validaci�n",
		"eng": "Validation",
		"fre": "Validation",
		"cze": "Overov�n�"
	  },
	  "EditANewPoint": {
		"cat": "Editar un nou punt",
		"spa": "Editar un nuevo punto",
		"eng": "Edit a new point",
		"fre": "�diter un nouveaux point",
		"cze": "Upravit nov� bod"
	  },
	  "TypicalOrObjectQuery": {
		"cat": "Consulta t�pica o per objectes",
		"spa": "Consulta t�pica o por objetos",
		"eng": "Typical or object query",
		"fre": "Recherche typique o� par objets",
		"cze": "Typick� nebo objektov� dotaz"
	  },
	  "TimeSeriesAnimations": {
		"cat": "Series temporals i animacions",
		"spa": "Series temporales y animaciones",
		"eng": "Time series and animations",
		"fre": "S�ries chronologiques et animations",
		"cze": "Casov� rady a animace"
	  },
	  "LinkToMap": {
		"cat": "Enlla� al mapa",
		"spa": "Enlace al mapa",
		"eng": "Link to map",
		"fre": "Lien � la carte",
		"cze": "Odkaz na mapu"
	  },
	  "LinksToServers": {
		"cat": "Enlla�os als servidors",
		"spa": "Enlaces a los servidores",
		"eng": "Links to the servers",
		"fre": "Lien aux serveurs",
		"cze": "Odkazy na servery"
	  },
	  "RestartFromServer": {
		"cat": "Reiniciar des de servidor",
		"spa": "Reiniciar desde servidor",
		"eng": "Restart from server",
		"fre": "Red�marrer depuis le serveur",
		"cze": "Restart ze serveru"
	  },
	  "InstallMiraMonReader": {
		"cat": "Instal�lar el Lector Universal de Mapes del MiraMon",
		"spa": "Instalar el Lector Universal de Mapas de MiraMon",
		"eng": "Install MiraMon Universal Map Reader",
		"fre": "Installer le Lecteur Universel de Cartes du Miramon",
		"cze": "Instalace univerz�ln� ctecky map MiraMon"
	  }
	},
	"llegenda": {
	  "Legend": {
		"cat": "Llegenda",
		"spa": "Leyenda",
		"eng": "Legend",
		"fre": "L�gende",
		"cze": "Legenda"
	  },
	  "queryable": {
		"cat": "consultable",
		"spa": "consultable",
		"eng": "queryable",
		"fre": "consultable",
		"cze": "dotazovateln�"
	  },
	  "nonQueryable": {
		"cat": "no consultable",
		"spa": "no consultable",
		"eng": "non queryable",
		"fre": "non consultable",
		"cze": "nedotazovateln�"
	  },
	  "downloadable": {
		"cat": "descarregable",
		"spa": "descargable",
		"eng": "downloadable",
		"fre": "t�l�chargeable",
		"cze": "ke sta�en�"
	  },
	  "nonDownloadable": {
		"cat": "no descarregable",
		"spa": "no descargable",
		"eng": "no downloadable",
		"fre": "non t�l�chargeable",
		"cze": "bez mo�nosti sta�en�"
	  },
	  "visible": {
		"cat": "visible",
		"spa": "visible",
		"eng": "visible",
		"fre": "visible",
		"cze": "viditeln�"
	  },
	  "nonVisible": {
		"cat": "no visible",
		"spa": "no visible",
		"eng": "non visible",
		"fre": "non visible",
		"cze": "neviditeln�"
	  },
	  "semitransparent": {
		"cat": "semitransparent",
		"spa": "semitransparente",
		"eng": "semitransparent",
		"fre": "semi transparent",
		"cze": "polopruhledn�"
	  },
	  "foldLegend": {
		"cat": "plega llegenda",
		"spa": "recoge leyenda",
		"eng": "fold legend up",
		"fre": "plie l�gende",
		"cze": "slo�it legendu nahoru"
	  },
	  "unfoldLegend": {
		"cat": "desplega llegenda",
		"spa": "expande leyenda",
		"eng": "unfold legend",
		"fre": "d�plier l�gende",
		"cze": "rozlo�it legendu"
	  },
	  "processingService": {
		"cat": "servei de processos",
		"spa": "servicio de procesos",
		"eng": "processing service",
		"fre": "service des processus",
		"cze": "slu�ba zpracov�n�"
	  },
	  "animableButNoDate": {
		"cat": "indica que �s AnimableMultiTime per� no t� dates definides",
		"spa": "indica que es AnimableMultiTime pero no tiene fechas definidas",
		"eng": "indicates that is AnimableMultiTime but it has no dates defined",
		"fre": "Indique que c'est AnimableMultiTime, mais il n'a pas de dates d�finies",
		"cze": "oznacuje, �e je AnimableMultiTime, ale nem� "
	  },
	  "NotPossibleDownloadLayersSameGroup": {
		"cat": "No �s possible descarregar dues capes del mateix grup",
		"spa": "No es posible descargar dos capas del mismo grupo",
		"eng": "It is not possible to download two layers from the same group",
		"fre": "Impossible de t�l�charger deux couches du m�me groupe",
		"cze": "Nen� mo�n� st�hnout dve vrstvy "
	  },
	  "UnknownState": {
		"cat": "Estat no reconegut",
		"spa": "Estado no reconocido",
		"eng": "Unknown state",
		"fre": "�tat non reconnu",
		"cze": "Nezn�m� st�t"
	  }
	},
	"imgrle": {
	  "UnsupportedColor": {
		"cat": "Color no suportat",
		"spa": "Color no suportado",
		"eng": "Unsupported color",
		"fre": "Couleur non support�e",
		"cze": "Nepodporovan� barva"
	  },
	  "LayerSingleComponentNeedPallette": {
		"cat": "Una capa amb una sola component ha de tenir definits els colors de la paleta",
		"spa": "Una capa con una sola componente debe tener definidos los colores de la paleta",
		"eng": "A layer with a single component must define a pallette of colors",
		"fre": "Une couche d'un composant unique doit avoir d�fini les couleurs de la palette"
	  },
	  "LayerMustHave1or3Components": {
		"cat": "Una capa no pot tenir 2 components. Ha de tenir definides 1 o 3 components.",
		"spa": "Una capa no puede tener 2 componentes. Debe tener definidas 1 o 3 componentes",
		"eng": "A layer can not have 2 component. It must have defined 1 or 3 components",
		"fre": "Une couche ne peut pas avoir deux composants. Vous devez avoir d�fini un ou trois composants",
		"cze": "Vrstva nemu�e m�t 2 slo�ky. Mus� m�t "
	  },
	  "LayerIMGNoDefinesComponents": {
		"cat": "La capa ha estat demanada com img per� no hi ha components definides al estil actual.",
		"spa": "La capa ha sido solicitada como img pero no tiene componentes definidas en el estilo actual.",
		"eng": "The layer is requested as img but there are no defined components for the current style.",
		"fre": "La couche est requise comme img mais il n'y a pas de composants d�finis pour le style actuel.",
		"cze": "Vrstva je po�adov�na jako img, ale pro "
	  }
	},
	"miramon": {
	  "NotPossibleShowLayersSameGroup": {
		"cat": "No �s possible mostrar dues capes del mateix grup",
		"spa": "No es posible mostrar dos capas del mismo grupo",
		"eng": "It is not possible to show two layers from the same group",
		"fre": "Impossible de montrer deux couches du m�me groupe",
		"cze": "Nen� mo�n� zobrazit dve vrstvy ze "
	  },
	  "alsoMemberToTheGroup": {
		"cat": "que tamb� format part del grup",
		"spa": "que tambi�n forma parte del grupo",
		"eng": "that also is member to the group",
		"fre": "appartenant aussi au groupe",
		"cze": "kter� je tak� clenem skupiny"
	  },
	  "willBeDeselected": {
		"cat": "ser� desmarcada",
		"spa": "ser� desmarcada",
		"eng": "will be deselected",
		"fre": "va �tre d�s�lectionn�e",
		"cze": "bude zru�en v�ber"
	  },
	  "LayerTIFFIMGMustHaveValues": {
		"cat": "Una capa amb FormatImatge image/tiff o application/x-img ha de definir un array de 'valors'",
		"spa": "Una capa con FormatImatge image/tiff o application/x-img debe definir un array de 'valors'",
		"eng": "A layer with FormatImatge image/tiff or application/x-img must define an array of 'valors'",
		"fre": "Une couche avec FormatImatge image/tiff ou application/x-img doit d�finir un tableau de 'valeurs'",
		"cze": "Vrstva s FormatImatge image/tiff nebo "
	  },
	  "LayerBinaryArrayMustBeHTTPS": {
		"cat": "Una capa amb FormatImatge image/tiff o application/x-img ha de ser servida en https:",
		"spa": "Una capa con FormatImatge image/tiff o application/x-img debe ser servida en https:",
		"eng": "A layer with FormatImatge image/tiff or application/x-img must be provided in https:",
		"fre": "Une couche avec FormatImatge image/tiff ou application/x-img doit �tre fourni en https",
		"cze": "Vrstva s FormatImatge image/tiff nebo "
	  },
	  "LayerSetToNoVisibleQueriable": {
		"cat": "La capa no es podria carregar i es declara no visible ni consultable",
		"spa": "La capa no es podr�a carregar por lo que declara no visible ni consultable",
		"eng": "The layer will not load so it is declared as neither visible nor queriable",
		"fre": "La couche ne se chargera pas, elle est donc d�clar�e comme ni visible ni interrogeable",
		"cze": "Vrstva se nenacte, tak�e nen� "
	  },
	  "ExecuteProcessWPS": {
		"cat": "Executar un proces (WPS)",
		"spa": "Ejecutar un proceso (WPS)",
		"eng": "Execute a process (WPS)",
		"fre": "Ex�cuter un processus (WPS)",
		"cze": "Spustit proces (WPS)"
	  },
	  "AddLayerToMap": {
		"cat": "Afegir capa al mapa",
		"spa": "A�adir capa al mapa",
		"eng": "Add layer to map",
		"fre": "Ajouter une couche � la carte",
		"cze": "Prid�n� vrstvy do mapy"
	  },
	  "SelectionByCondition": {
		"cat": "Selecci� per condicions",
		"spa": "Selecci�n por condici�n",
		"eng": "Selection by condition",
		"fre": "S�lection par condition",
		"cze": "V�ber podle podm�nky"
	  },
	  "TimeSeriesAnalysisAndAnimations": {
		"cat": "An�lisi de s�ries temporals i animacions",
		"spa": "Analisis de series temporales y animaciones",
		"eng": "Time series analysis and animations",
		"fre": "Analyse de s�ries chronologiques et animations",
		"cze": "Anal�za casov�ch rad a animace"
	  },
	  "RequestConsole": {
		"cat": "Consola de peticions",
		"spa": "Consola de peticiones",
		"eng": "Request console",
		"fre": "Console de demandes",
		"cze": "Vy��d�n� konzoly"
	  },
	  "ReclassifierLayerValues": {
		"cat": "Reclassificadora de valors de la capa",
		"spa": "Reclasificadora de valores de la capa",
		"eng": "Reclassifier of layer values",
		"fre": "Reclassificateur de valeurs de couches",
		"cze": "Reklasifik�tor hodnot vrstev"
	  },
	  "FeedbackContainingStyles": {
		"cat": "Valoracions que contenen estils",
		"spa": "Valoraciones que contienen estilos",
		"eng": "Feedback containing styles",
		"fre": "R�troaction contenant des styles",
		"cze": "Zpetn� vazba obsahuj�c� styly"
	  },
	  "OpenOrSaveContext": {
		"cat": "Obrir o desar el contexte",
		"spa": "Abrir o guardar el contexto",
		"eng": "Open or save the context",
		"cze": "Otevren� nebo ulo�en� kontextu"
	  },
	  "LinksToOGCServicesBrowser": {
		"cat": "Enlla�os als servidors OGC del navegador",
		"spa": "Enlaces a los servidors OGC del navegador",
		"eng": "Links to OGC services in the browser",
		"fre": "Liens aux serveurs OGC du navigateur",
		"cze": "Odkazy na slu�by OGC v prohl�eci"
	  },
	  "storyMapTitle": {
		"cat": "titol del relat",
		"spa": "t�tulo del ralato",
		"eng": "storymap title",
		"fre": "titre de l'histoire",
		"cze": "n�zev mapy pr�behu"
	  },
	  "InformationHelp": {
		"cat": "Informaci�/Ajuda",
		"spa": "Informaci�n/Ayuda",
		"eng": "Information/Help",
		"fre": "Information/Aide",
		"cze": "Informace/n�poveda"
	  },
	  "InsertNewPoint": {
		"cat": "Inserir un punt nou",
		"spa": "Insertar un punto nuevo",
		"eng": "Insert new point",
		"fre": "Ins�rer un nouveaux point",
		"cze": "Vlo�en� nov�ho bodu"
	  },
	  "ResultOfTheTransaction": {
		"cat": "Resultat de la transacci�",
		"spa": "Resulado de la transacci�n",
		"eng": "Result of the transaction",
		"fre": "R�sultats de la transaction",
		"cze": "V�sledek transakce"
	  },
	  "NoPreviousView": {
		"cat": "No hi ha cap vista pr�via a recuperar",
		"spa": "No hay ninguna vista previa a recuperar",
		"eng": "There is no previous view to be shown",
		"fre": "Il n'y a pas une vue pr�alable � r�cup�rer",
		"cze": "Neexistuje ��dn� predchoz� pohled, kter� by se "
	  },
	  "NoFullScreenMultiBrowser": {
		"cat": "No es possible saltar a pantalla completa en un navegador multivista",
		"spa": "No es posible saltar a pantalla completa en un navegador multivista",
		"eng": "You cannot go full screen in a multiview browser",
		"fre": "Vous ne pouvez pas acc�der au plein �cran dans un navigateur � vues multiples.",
		"cze": "V prohl�eci s v�ce zobrazen�mi nelze "
	  },
	  "BrowserPopUpWindowsLocked": {
		"cat": "Aquest navegador t� les finestres emergents bloquejades",
		"spa": "Este navegador tiene las ventanas emergentes bloqueadas",
		"eng": "Sorry, this browser has pop-up windows locked",
		"fre": "Ce navigateur a les fen�tres �mergentes ferm�es",
		"cze": "Omlouv�me se, tento prohl�ec m� uzamcen� "
	  },
	  "ChangeBrowserConfig": {
		"cat": "Canvia la configuraci� del teu navegador",
		"spa": "Modifique la configuraci�n de su navegador",
		"eng": "Please change browser configuration",
		"fre": "Changez la configuration de votre navigateur",
		"cze": "Zmente pros�m konfiguraci prohl�ece"
	  },
	  "SomeInternetExplorerClickYellowBand": {
		"cat": "En algunes versions d'Internet Explorer, nom�s cal fer un clic sobre la faixa groga superior",
		"spa": "En algunas versiones de Internet Explorer, un clic sobre la banda amarilla superior es suficiente",
		"eng": "In some Internet Explorer versions only a click on top yellow band will fix it",
		"fre": "Dans certaines versions d'Internet Explorer, il suffit de cliquer sur la barre jaune sup�rieure",
		"cze": "V nekter�ch verz�ch Internet "
	  },
	  "FinishValidation": {
		"cat": "Validaci� finalitzada",
		"spa": "Validaci�n finalizada",
		"eng": "Finished validation",
		"fre": "Validation termin�e",
		"cze": "Dokonceno overov�n�"
	  },
	  "MayCloseBrowser": {
		"cat": "Pots tancar el navegador",
		"spa": "Puedes cerrar el navegador",
		"eng": "You may close the browser",
		"fre": "Vous pouvez fermer le navigateur",
		"cze": "Mu�ete zavr�t prohl�ec"
	  },
	  "MainServerBrowser": {
		"cat": "Servidor principal d'aquest navegador",
		"spa": "Servidor principal de este navegador",
		"eng": "Main Server of this browser",
		"fre": "Serveur principal du navigateur",
		"cze": "Hlavn� server tohoto prohl�ece"
	  },
	  "OtherServersUsed": {
		"cat": "Altres servidors usats",
		"spa": "Otros servidores usados",
		"eng": "Others servers used",
		"fre": "Autres serveurs utilis�s",
		"cze": "Ostatn� pou��van� servery"
	  },
	  "ServerUrlNotDetermine": {
		"cat": "No s'han pogut determinar les adre�es dels servidors usats en aquest navegador",
		"spa": "No se han podido determinar las direcciones de los servidores usados en este navegador",
		"eng": "It could not determine the servers URL used in this browser",
		"fre": "Impossible de d�terminer les adresses des serveurs utilis�s avec ce navigateur",
		"cze": "Nepodarilo se urcit adresu URL serveru "
	  },
	  "OWSContextDocument": {
		"cat": "Document de context OWS",
		"spa": "Documento de contexto OWS",
		"eng": "OWS context document",
		"fre": "Document de contexte OWS",
		"cze": "Kontextov� dokument OWS"
	  },
	  "LinkToView": {
		"cat": "Enlla� a aquesta vista",
		"spa": "Enlace a esta vista",
		"eng": "Link to this view",
		"fre": "Lien � cette vue",
		"cze": "Odkaz na toto zobrazen�"
	  },
	  "NoMoreZoomOut": {
		"cat": "No hi ha zoom inferior a mostrar",
		"spa": "No hay zoom inferior a mostrar",
		"eng": "There is no more zoom out to be shown",
		"fre": "Il n'y a pas un zoom inf�rieur � montrer",
		"cze": "Nen� mo�n� zobrazit dal�� zvet�en�"
	  },
	  "NoMoreZoomIn": {
		"cat": "No hi ha zoom superior a mostrar",
		"spa": "No hay zoom superior a mostrar",
		"eng": "There is no more zoom in to be shown",
		"fre": "Il n'y a pas un zoom sup�rieur � montrer",
		"cze": "Ji� nen� mo�n� zobrazit ��dn� dal�� pribl�en�"
	  },
	  "timeSeries": {
		"cat": "de s�ries temporals",
		"spa": "de series temporales",
		"eng": "of time series",
		"fre": "pour s�ries chronologiques",
		"cze": "casov� rady"
	  },
	  "BinaryPayloadNotFound": {
		"cat": "No trobo BinaryPayload a la resposta GetTile en SOAP",
		"spa": "No encuentro BinaryPayload la respuesta GetTile en SOAP",
		"eng": "BinaryPayload cannot be found on GetTile SOAP answer",
		"fre": "Impossible trouver BinaryPayload � la r�ponse GetTile � SOAP",
		"cze": "BinaryPayload nelze nal�zt v odpovedi "
	  },
	  "FormatNotFound": {
		"cat": "No trobo Format a la resposta GetTile en SOAP",
		"spa": "No encuentro Format en la respuesta GetTile en SOAP",
		"eng": "Format cannot be found on GetTile SOAP answer",
		"fre": "Impossible trouver Format � la r�ponse GetTile � SOAP",
		"cze": "V odpovedi GetTile SOAP nelze nal�zt form�t"
	  },
	  "BinaryPayloadAndPayloadContentNotFound": {
		"cat": "No trobo BinaryContent ni PayloadContent a la resposta GetTile en SOAP",
		"spa": "No encuentro BinaryContent ni PayloadContent en la respuesta GetTile en SOAP",
		"eng": "BinaryPayload and PayloadContent cannot be found on GetTile SOAP answer",
		"fre": "Impossible trouver BinaryPayload ou PayloadContent � la r�ponse GetTile � SOAP",
		"cze": "BinaryPayload a "
	  },
	  "ShowLegend": {
		"cat": "Mostra llegenda",
		"spa": "Muestra legenda",
		"eng": "Show legend",
		"fre": "Afficher la l�gende",
		"cze": "Zobrazit legendu"
	  },
	  "ShowSituationMap": {
		"cat": "Mostra mapa de situaci�",
		"spa": "Muestra mapa de situaci�n",
		"eng": "Show situation map",
		"fre": "Afficher la carte de situation",
		"cze": "Zobrazit situacn� mapu"
	  },
	  "ShowInfoCurrentPosition": {
		"cat": "Mostra informaci� de la posici�",
		"spa": "Muestra informaci�n sobre la posici�n",
		"eng": "Show information about current position",
		"fre": "Afficher des informations sur la position actuelle",
		"cze": "Zobrazit informace o aktu�ln� poloze"
	  },
	  "moveNorthWest": {
		"cat": "mou al Nord-Oest",
		"spa": "mover al NorOeste",
		"eng": "move to North-West",
		"fre": "d�placer vers le Nord-Ouest",
		"cze": "presunout na severoz�pad"
	  },
	  "moveNorth": {
		"cat": "mou al Nord",
		"spa": "mover al Norte",
		"eng": "move to North",
		"fre": "d�placer vers le Nord",
		"cze": "presunout na sever"
	  },
	  "moveNorthEast": {
		"cat": "mou al Nord-Est",
		"spa": "mover al Noreste",
		"eng": "move to North-East",
		"fre": "d�placer vers le Nord-Est",
		"cze": "presunout na severov�chod"
	  },
	  "moveWest": {
		"cat": "mou a l'Oest",
		"spa": "mover al Oeste",
		"eng": "move to West",
		"fre": "d�placer vers l'Ouest",
		"cze": "presunout na z�pad"
	  },
	  "moveEast": {
		"cat": "mou a l'Est",
		"spa": "mover al Este",
		"eng": "move to East",
		"fre": "d�placer vers l'Est",
		"cze": "presunout na v�chod"
	  },
	  "moveSouthWest": {
		"cat": "mou al Sud-Oest",
		"spa": "mover al Suroeste",
		"eng": "move to South-West",
		"fre": "d�placer vers le Sud-Ouest",
		"cze": "presunout na jihoz�pad"
	  },
	  "moveSouth": {
		"cat": "mou al Sud",
		"spa": "mover al Sur",
		"eng": "move to South",
		"fre": "d�placer vers le Sud",
		"cze": "presunout na jih"
	  },
	  "moveSouthEast": {
		"cat": "mou al Sud-Est",
		"spa": "mover al Sureste",
		"eng": "move to South-East",
		"fre": "d�placer vers le Sud-Est",
		"cze": "presunout na jihov�chod"
	  },
	  "IncreaseZoomLevel": {
		"cat": "augmenta 1 nivell de zoom",
		"spa": "augmenta 1 nivel de zoom",
		"eng": "increase 1 zoom level",
		"fre": "augmenter 1 niveau de zoom",
		"cze": "zv��it �roven pribl�en� o 1"
	  },
	  "ReduceZoomLevel": {
		"cat": "redueix 1 nivell de zoom",
		"spa": "reduce 1 nivel de zoom",
		"eng": "reduce 1 zoom level",
		"fre": "r�duire 1 niveau de zoom",
		"cze": "sn�it o 1 �roven pribl�en�"
	  },
	  "exitFullScreen": {
		"cat": "sortir de pantalla completa",
		"spa": "salir de pantalla completa",
		"eng": "exit full screen",
		"fre": "Quitter le mode plein �cran",
		"cze": "ukoncit celou obrazovku"
	  },
	  "fullScreen": {
		"cat": "pantalla completa",
		"spa": "pantalla completa",
		"eng": "full screen",
		"fre": "plein �cran",
		"cze": "na celou obrazovku"
	  },
	  "StyleNumberNotNumberLayers": {
		"cat": "El nombre d'estils no es correspon amb el nombre de capes",
		"spa": "El n�mero de estilos no se corresponde con el n�mero de capas",
		"eng": "Style number is not the same of the number of layers",
		"fre": "Le nombre de styles ne correspond pas au nombre de couches",
		"cze": "C�slo stylu nen� stejn� jako pocet "
	  },
	  "CannotFindServerToResponse": {
		"cat": "No s'ha trobat el par�metre 'SERVERTORESPONSE'",
		"spa": "No se ha encontrado el par�metro 'SERVERTORESPONSE'",
		"eng": "Cannot find the 'SERVERTORESPONSE' parameter",
		"fre": "Le param�tre 'SERVERTORESPONSE' n'a pas �t� trouv�",
		"cze": "Nelze naj�t parametr 'SERVERTORESPONSE'"
	  },
	  "CannotFindTestLayers": {
		"cat": "No s'ha trobat el par�metre 'TEST_LAYERS'",
		"spa": "No se ha encontrado el par�metro 'TEST_LAYERS'",
		"eng": "Cannot find the 'TEST_LAYERS' parameter",
		"fre": "Le param�tre 'TEST_LAYERS' n'a pas �t� trouv�",
		"cze": "\"Nelze naj�t parametr \"\"TEST_LAYERS\"\".\""
	  },
	  "CannotFindTestFields": {
		"cat": "No s'ha trobat el par�metre 'TEST_FIELDS'",
		"spa": "No se ha encontrado el par�metro 'TEST_FIELDS'",
		"eng": "Cannot find the 'TEST_FIELDS' parameter",
		"fre": "Le param�tre 'TEST_FIELDS' n'a pas �t� trouv�",
		"cze": "\"Nelze naj�t parametr \"\"TEST_FIELDS\"\".\""
	  },
	  "FieldNumberNotNumberLayers": {
		"cat": "El nombre de camps no es correspon amb el nombre de capes",
		"spa": "El n�mero de campos no se corresponde con el n�mero de capas",
		"eng": "Field number is not the same of the number of layers",
		"fre": "Le nombre de champs ne correspond pas au nombre de couches",
		"cze": "C�slo pole nen� stejn� jako pocet vrstev"
	  },
	  "ValuesNumberNotNumberLayers": {
		"cat": "El nombre de valors no es correspon amb el nombre de capes",
		"spa": "El n�mero de valores no se corresponde con el n�mero de capas",
		"eng": "Field values number is not the same of the number of layers",
		"fre": "Le nombre de valeurs ne correspond pas au nombre de couches",
		"cze": "Pocet hodnot pole nen� stejn� jako "
	  },
	  "indicatedTestLayerNotExist": {
		"cat": " indicada al par�metre TEST_LAYERS no existeix",
		"spa": " indicada en el par�metro TEST_LAYERS no existe",
		"eng": "indicated in TEST_LAYERS parameter does not exist",
		"fre": "indiqu�e au param�tre TEST_LAYERS n'existe pas",
		"cze": "parametr TEST_LAYERS neexistuje"
	  },
	  "RequestedPoint": {
		"cat": "El punt sol�licitat",
		"spa": "El punto solicitado",
		"eng": "The requested point",
		"fre": "Le point requis",
		"cze": "Po�adovan� bod"
	  },
	  "isOutsideBrowserEnvelope": {
		"cat": "est� fora de l'�mbit de navegaci�",
		"spa": "est� fuera del �mbito de navegaci�n",
		"eng": "is outside browser envelope",
		"fre": "se trouve dehors le milieu de navigation",
		"cze": "je mimo ob�lku prohl�ece"
	  },
	  "CannotFindXYParameters": {
		"cat": "No s'ha trobat els par�metres 'X' i 'Y'.",
		"spa": "No se ha encontrado los par�metro 'X' y 'Y'.",
		"eng": "Cannot find 'X' and 'Y' parameters.",
		"fre": "Les param�tres 'X' et 'Y' n�ont pas �t� trouv�s.",
		"cze": "Nelze naj�t parametry 'X' a 'Y'."
	  },
	  "TheVersion": {
		"cat": "La versi� de",
		"spa": "La versi�n de",
		"eng": "The version of",
		"fre": "La version",
		"cze": "Verze"
	  },
	  "notAccrodingVersion": {
		"cat": "no es correspon amb la versi� de",
		"spa": "no se corresponde con la versi�n de",
		"eng": "it is not according with the version of",
		"fre": "ne correspond pas � la version de",
		"cze": "nen� v souladu s verz�"
	  },
	  "UpgradeCorrectly": {
		"cat": "Actualitza't correctament",
		"spa": "Actualicese correctamente",
		"eng": "Please, upgrade it correctly",
		"fre": "S'il vous pla�t, actualisez vous correctement",
		"cze": "Pros�m, aktualizujte jej spr�vne"
	  },
	  "ServerHasNewConfMap": {
		"cat": "El servidor incorpora una configuraci� del mapa m�s nova",
		"spa": "El servidor incorpora una configuraci�n del mapa m�s nueva",
		"eng": "The server has a newer configuration for the map",
		"fre": "Le serveur int�gre une configuration de carte plus r�cente",
		"cze": "Server m� novej�� konfiguraci mapy"
	  },
	  "AcceptToAdopt": {
		"cat": "Acceptes adoptar-la?",
		"spa": "�Acepta adoptarla?",
		"eng": "Do you accept to adopt it?",
		"fre": "Acceptez-vous de l'adopter",
		"cze": "Souhlas�te s jej�m prijet�m?"
	  },
	  "SavingStatusMapNotPossible": {
		"cat": "No ser� possible guardar l'estat del mapa",
		"spa": "No ser� posible guardar el estado del mapa",
		"eng": "Saving the status of the map will not possible",
		"fre": "Il ne sera pas possible de sauvegarder le statut de la carte",
		"cze": "Ulo�en� stavu mapy nen� mo�n�"
	  },
	  "CapaDigiNoLongerSupported": {
		"cat": "CapaDigi ja no se suporta",
		"spa": "CapaDigi ya no se soporta",
		"eng": "CapaDigi no longer supported",
		"fre": "CapaDigi n'est plus pris en charge",
		"cze": "CapaDigi ji� nen� podporov�no"
	  },
	  "UseLayerModelInstead": {
		"cat": "seu una \"capa\" amb \"model\": \"vector\"",
		"spa": "Use una \"capa\" con \"model\": \"vector\"",
		"eng": "Use a \"capa\" with \"model\": \"vector\" instead",
		"fre": "Utilisez un \"capa\" avec le \"model\": \"vector\"",
		"cze": "\"Pou�ijte \"\"capa\"\" s \"\"model\"\": m�sto toho "
	  },
	  "ValueIgnoredAttributeShowable": {
		"cat": "El valor ser� ignorat i l'atribut marcat com a mostrable",
		"spa": "El valor ser� ignorado y el atributo marcado como mostrable",
		"eng": "The value will be ignored and the attribute marked as showable",
		"fre": "La valeur sera ignor�e et l'attribut marqu� comme affichable",
		"cze": "Hodnota bude ignorov�na a atribut "
	  },
	  "ZoomSizesSortedBiggerFirst": {
		"cat": "Els costats de zoom han d'estat ordenats amb el m�s gran primer",
		"spa": "Los lados de zoom deben estar ordenados con el m�s grande primero",
		"eng": "The zoom sizes must be sorted with the bigger first",
		"fre": "Les tailles de zoom doivent �tre tri�es par ordre croissant",
		"cze": "Velikosti zvet�en� mus� b�t serazeny "
	  },
	  "NivellZoomCostatNotIndicated": {
		"cat": "El NivellZoomCostat no �s cap del costats indicats a la llista de zooms",
		"spa": "El NivellZoomCostat no es ninguno de los 'costat' indicados en la lista de zooms",
		"eng": "The NivellZoomCostat is not one of the indicated 'costat' in the zoom array",
		"fre": "Le NivellZoomCostat n'est pas l'un des 'costat' indiqu�s dans la matrice de zoom",
		"cze": "\"NivellZoomCostat nen� jednou z "
	  },
	  "NotFindBBox": {
		"cat": "No trobo les 4 coordenades a BBOX",
		"spa": "No encuentro las 4 coordenadas en BBOX",
		"eng": "Cannot find 4 coordinates at BBOX",
		"fre": "Impossible de trouver les 4 coordonn�es � BBOX",
		"cze": "Nelze naj�t 4 souradnice v BBOX"
	  },
	  "IndicatedQueryLayers": {
		"cat": "indicada a QUERY_LAYERS",
		"spa": "indicada en QUERY_LAYERS",
		"eng": "indicated at QUERY_LAYERS",
		"fre": "indiqu�e � QUERY_LAYERS",
		"cze": "uveden� v QUERY_LAYERS"
	  },
	  "butTransparenciaDoesNotAllowIt": {
		"cat": "per� capa.transparencia no permet semitraspar�ncia",
		"spa": "pero capa.transparencia no permite semitrasparencia",
		"eng": "but capa.transparencia does not allow semitransparency",
		"fre": "mais capa.transparencia n'autorise pas la semi-transparence",
		"cze": "ale capa.transparencia neumo�nuje "
	  },
	  "andIsInsteadSetTo": {
		"cat": "i en canvi est� definit com a",
		"spa": "y en cambio est� definido como",
		"eng": "and is instead set to",
		"fre": "et est � la place d�finie sur",
		"cze": "a m�sto toho je nastavena na hodnotu"
	  },
	  "andIsInsteadSetOtherwise": {
		"cat": "i en canvi est� definida d'una altra manera",
		"spa": "y en cambio est� definido de otra manera",
		"eng": "and is set otherwise",
		"fre": "et est d�finie autrement",
		"cze": "a jinak je nastavena"
	  }
	},
	"authens": {
	  "Login": {
		"cat": "Iniciar sessi�",
		"spa": "Iniciar sesi�n",
		"eng": "Login",
		"fre": "Se connecter",
		"cze": "Prihl�en�"
	  },
	  "LoginAccountFailed": {
		"cat": "Error o cancel�laci� de la identificaci� amb el compte de",
		"spa": "Error o cancelaci�n de la identificaci�n en la cuenta de",
		"eng": "Login in your account failed or cancelled in",
		"fre": "La connexion � votre compte a �chou� ou a �t� annul�e dans",
		"cze": "Prihl�en� k �ctu se nezdarilo nebo bylo zru�eno "
	  },
	  "ContinueWithoutAuthentication": {
		"cat": "Vols continuar sense autentificaci�",
		"spa": "Desea continuar sin autentificaci�n",
		"eng": "Do you what to continue without authentication",
		"fre": "Faites-vous quoi continuer sans authentification",
		"cze": "Chcete pokracovat bez overen�"
	  },
	  "SessionsAlreadyStarted": {
		"cat": "Les sessions han estat ja iniciades",
		"spa": "Las sesiones han sido ya iniciadas",
		"eng": "The sessions were already started",
		"fre": "Les s�ances �taient d�j� commenc�es",
		"cze": "Relace ji� byly zah�jeny"
	  },
	  "CloseTheStartedSessions": {
		"cat": "Vols tancar les sessions iniciades?",
		"spa": "�Desea cerrar las sesiones iniciadas?",
		"eng": "Do you want to close the started sessions?",
		"fre": "Voulez-vous fermer les sessions ouvertes?",
		"cze": "Chcete ukoncit zah�jen� relace?"
	  },
	  "BrowserContainsLayersRequireLogin": {
		"cat": "Aquest navegador cont� capes que requereixen inici de sessi�",
		"spa": "Este navegador contiene capas que requieren inicio de sesi�n",
		"eng": "This browser contains layers that require login",
		"fre": "Ce navigateur contient des couches qui n�cessitent une connexion",
		"cze": "Tento prohl�ec obsahuje vrstvy, "
	  },
	  "DoYouWantToLogInNow": {
		"cat": "Vols iniciar sessi� ara?",
		"spa": "�Desea iniciar sesi�n ahora?",
		"eng": "Do you want to log in now?",
		"fre": "Voulez-vous vous connecter maintenant?",
		"cze": "Chcete se nyn� prihl�sit?"
	  }
	},
	"llinatge": {
	  "Process": {
		"cat": "Proc�s",
		"spa": "Proceso",
		"eng": "Process",
		"fre": "Processus",
		"cze": "Proces"
	  },
	  "Processes": {
		"cat": "Processos",
		"spa": "Procesos",
		"eng": "Processes",
		"fre": "Processus",
		"cze": "Procesy"
	  },
	  "ProcessGroup": {
		"cat": "Grup de processos",
		"spa": "Grupo de procesos",
		"eng": "Process group",
		"fre": "Groupe de processus",
		"cze": "Skupina procesu"
	  },
	  "ResultingDataset": {
		"cat": "Capa Resultat",
		"spa": "Capa Resultado",
		"eng": "Resulting dataset",
		"fre": "Jeu de donn�es r�sultant",
		"cze": "V�sledn� soubor dat"
	  },
	  "GroupWithFollowing": {
		"cat": "Agrupar amb el segu�nt",
		"spa": "Agrupar con el seguiente",
		"eng": "Group with the following",
		"fre": "Grouper avec le suivant",
		"cze": "Skupina s n�sleduj�c�mi �daji"
	  },
	  "GroupWithPrevious": {
		"cat": "Agrupar amb l'anterior",
		"spa": "Agrupar con el anterior",
		"eng": "Group with the previous",
		"fre": "Grouper avec le pr�c�dent",
		"cze": "Skupina s predchoz�m"
	  },
	  "UngroupRecentLevel": {
		"cat": "Desagrupa un nivell m�s recent",
		"spa": "Desagrupar un nivel m�s reciente",
		"eng": "Ungroup a more recent level",
		"fre": "Dissocier un niveau plus r�cent",
		"cze": "Odskupen� s novej�� �rovn�"
	  },
	  "UngroupOlderLevel": {
		"cat": "Desagrupa un nivell m�s antic",
		"spa": "Desagrupar un nivel m�s antiguo",
		"eng": "Ungroup an older level",
		"fre": "Dissocier un niveau plus ancien",
		"cze": "Odskupen� star�� �rovne"
	  },
	  "VisibleElements": {
		"cat": "Elements visibles",
		"spa": "Elementos visibles",
		"eng": "Visible elements",
		"fre": "�l�ments visibles",
		"cze": "Viditeln� prvky"
	  },
	  "InternalSources": {
		"cat": "Fonts intermitges/temporals",
		"spa": "Fuentes intermedias/temporales",
		"eng": "Internal/temporary sources",
		"fre": "Sources interm�diaires / temporaires",
		"cze": "Intern�/docasn� zdroje"
	  },
	  "LeafSources": {
		"cat": "Fonts fulles",
		"spa": "Fuentes hoja",
		"eng": "Leaf sources",
		"fre": "Sources feuilles",
		"cze": "Listov� zdroje"
	  },
	  "ProcessSteps": {
		"cat": "Passos del proc�s",
		"spa": "Pasos del proceso",
		"eng": "Process steps",
		"fre": "�tapes du processus",
		"cze": "Kroky procesu"
	  },
	  "ProcessingTools": {
		"cat": "Eines de processament",
		"spa": "Herramientas de procesamiento",
		"eng": "Processing tools",
		"fre": "Outils de traitement",
		"cze": "Zpracovatelsk� n�stroje"
	  },
	  "TheUnion": {
		"cat": "La uni�",
		"spa": "La uni�n",
		"eng": "The union",
		"fre": "L'union",
		"cze": "Svaz"
	  },
	  "DatasetsIndependentsGraphs": {
		"cat": "Cada capa en un gr�fic independent",
		"spa": "Cada capa en un gr�fico independiente",
		"eng": "Datasets as independents graphs",
		"fre": "Chaque couche sur un graphique s�par�",
		"cze": "Datov� sady jako nez�visl� grafy"
	  },
	  "TheIntersection": {
		"cat": "La intersecci�",
		"spa": "La intersecci�n",
		"eng": "The intersection",
		"fre": "l'intersection",
		"cze": "Prunik"
	  },
	  "TheComplementIntersection": {
		"cat": "El complement de la intersecci�",
		"spa": "El complemento de la intersecci�n",
		"eng": "The complement of the intersection",
		"fre": "Le compl�ment de l'intersection",
		"cze": "Doplnek pruniku"
	  },
	  "TheSubstractionFirst": {
		"cat": "La resta de la primera",
		"spa": "La resta del primero",
		"eng": "The substraction of the first",
		"fre": "La soustraction de la premi�re"
	  },
	  "MoreOneDataset": {
		"cat": "Quan hi ha m�s d'una capa",
		"spa": "Cuando hay m�s de una capa",
		"eng": "When more than one dataset",
		"fre": "Quand il y a plus d'une couche",
		"cze": "Kdy� je v�ce ne� jedna datov� sada"
	  },
	  "SimpleQuery": {
		"cat": "Consulta simple",
		"spa": "Consulta simple",
		"eng": "Simple query",
		"fre": "Requ�te simple",
		"cze": "Jednoduch� dotaz"
	  },
	  "StartNode": {
		"cat": "Node inicial",
		"spa": "Nodo inicial",
		"eng": "Start node",
		"fre": "Noeud initial",
		"cze": "Poc�tecn� uzel"
	  },
	  "EndNode": {
		"cat": "Node final",
		"spa": "Nodo final",
		"eng": "End node",
		"fre": "Noeud finale",
		"cze": "Koncov� uzel"
	  },
	  "ComplexQuery": {
		"cat": "Consulta complexa",
		"spa": "Consulta compleja",
		"eng": "Complex query",
		"fre": "Requ�te complexe",
		"cze": "Komplexn� dotaz"
	  },
	  "QueryFilterOptions": {
		"cat": "Opcions de visualitzaci�, consulta i filtre",
		"spa": "Opciones de visualizaci�n, consulta y filtro",
		"eng": "Show, query and filter options",
		"fre": "Options de visualisation, consultations et filtrage",
		"cze": "Mo�nosti zobrazen�, dotazov�n� a filtrov�n�"
	  }
	},
	"owsc": {
	  "EmptyGeospatialContent": {
		"cat": "Aquesta entrada no t� cap contingut geoespacial (cap etiqueta 'offering' definida)",
		"spa": "Esta entrada carece de contenido geoespacial (ninguna etiqueta 'offering' definida)",
		"eng": "This entry is empty of geospatial content (no 'offering' tag defined)",
		"fre": "Cette entr�e manque du contenu g�ospatial (aucune �tiquette 'offering' d�finie)",
		"cze": "\"Tento z�znam neobsahuje geoprostorov� obsah "
	  },
	  "NonComptibleCRS": {
		"cat": "Sistema de refer�ncia de coordenades no compatible.",
		"spa": "Sistema de referencia de coordenadas no compatible.",
		"eng": "Non-compatible Coordinate Reference System.",
		"fre": "Syst�me de r�f�rence de coordonn�es non compatible.",
		"cze": "Nekompatibiln� souradnicov� referencn� syst�m."
	  },
	  "FormatWhereNotHaveEnvelope": {
		"cat": "El format de 'where' no inclou cap 'Envelope' o 'Polygon' de 2 o m�s punts",
		"spa": "El formato de 'where' no incluye ning�n 'Envelope' o 'Polygon' de 2 o m�s puntos",
		"eng": "The format of 'where' do not have any 'Envelope' or 'Polygon' of 2 or more points",
		"fre": "Le format de 'where' n'inclut pas de 'Envelope' ou ' Polygon ' de 2 ou plus de points",
		"cze": "\"Form�t \"\"kde\"\" nem� ��dn� \"\"Envelope\"\" "
	  },
	  "NonSupportedOperation": {
		"cat": "'Operation' no acceptada",
		"spa": "'Operation' no soportada",
		"eng": "Non supported operation",
		"fre": "'Operation' non support�e",
		"cze": "Nepodporovan� operace"
	  },
	  "NonSupportedOperationMethod": {
		"cat": "M�tode d'operaci�",
		"spa": "M�todo de operaci�n",
		"eng": "Non supported operation method",
		"fre": "M�thode d'op�ration",
		"cze": "Nepodporovan� operacn� metoda"
	  },
	  "OnlyGetSupported": {
		"cat": "no acceptat (nom�s GET �s acceptat actualment)",
		"spa": "no aceptado (s�lo GET es soportado actualmente)",
		"eng": "(only GET is currently supported)",
		"fre": "non accept�e (seulement 'GET' est actuellement support�e)",
		"cze": "(v soucasn� dobe je podporov�na pouze operace GET)"
	  },
	  "AttributeHrefNotFound": {
		"cat": "L'atribut 'href' no s'ha trobat en l'operaci�",
		"spa": "El atributo 'href' no se encontr� en la operaci�n",
		"eng": "Attribute 'href' was not found in the operation",
		"fre": "L'attribut 'href' n'a pas �t� trouv� dans l'op�ration",
		"cze": "V operaci nebyl nalezen atribut 'href'."
	  },
	  "requestUrlCannotObtained": {
		"cat": "la 'requestURL' no es pot obtenir",
		"spa": "la 'requestURL' no se puede obtener",
		"eng": "the 'requestURL' cannot be obtained",
		"fre": "le 'requestURL' ne peut pas �tre obtenu",
		"cze": "nelze z�skat 'requestURL'"
	  },
	  "MissingMandatoryCodeAttribute": {
		"cat": "Falta l'atribut obligatori 'code' en l' 'offering' de",
		"spa": "Falta el atributo obligatorio 'code' en el 'offering' de",
		"eng": "Missing mandatory 'code' attribute on offering",
		"fre": "Manque l'attribut obligatoire 'code' sur l' 'offereing' de",
		"cze": "\"Chyb� povinn� atribut \"\"code\"\" pri "
	  },
	  "NonSupportedOfferingType": {
		"cat": "Tipus d''offering' no acceptat",
		"spa": "Tipo de 'offering' no soportado",
		"eng": "Non supported offering type",
		"fre": "Type d' 'offering' non support�",
		"cze": "Nepodporovan� typ nab�dky"
	  },
	  "OwsContextDocumentNotHaveFeed": {
		"cat": "El document de context OWS no t� \"feed\" com a node arrel.",
		"spa": "El documento de contexto OWS no tiene \"feed\" como nodo raiz.",
		"eng": "The OWS context document does not have \"feed\" as a root node.",
		"fre": "Le document de context OWS n'a pas \"feed\" comme un noeud racine.",
		"cze": "\"Kontextov� dokument OWS nem� jako "
	  },
	  "DisabledLayersCannotOpened": {
		"cat": "Les capes inactives no es poden obrir (moure el punter per sobre del nom mostrar� una descripci� del motiu)",
		"spa": "Las capas inactivas no se pueden abrir (mover el puntero por encima del nombre mostrar� una descripci�n del motivo)",
		"eng": "Disabled layers cannot be opened (move the cursor over the layer name will make appear a description of the reason)",
		"fre": "Les couches inactives ne peuvent pas �tre ouvertes (mouvoir le pointeur sur le nom montrera une description du motif)",
		"cze": "Zak�zan� vrstvy nelze otevr�t (po najet� "
	  },
	  "OwscDocumentNotStandardCompliant": {
		"cat": "El teu document OWSC no ser� compatible amb l'est�ndard ja que no has proporcionat un t�tol v�lid",
		"spa": "Su documento OWSC no ser� compatible con el est�ndar ya que no ha proporcionado un t�tulo v�lido",
		"eng": "Your OWSC document will not be standard compliant as you have not provided a valid title",
		"fre": "Votre document OWSC ne sera pas conforme avec le norme car vous n'avez pas fourni un titre valable",
		"cze": "V� dokument OWSC nebude v souladu se "
	  },
	  "DownloadOwscDocument": {
		"cat": "Descarrega document OWSC",
		"spa": "Descarga documento OWSC",
		"eng": "Download OWSC document",
		"fre": "T�l�chargez document OWSC",
		"cze": "St�hnete si dokument OWSC"
	  },
	  "LanguageWhichDocumentingOws": {
		"cat": "Llengua en qu� s'est� documentant aquest arxiu OWS Context",
		"spa": "Idioma en el que se est� documentando este archivo OWS Context",
		"eng": "Language at which you are documenting this OWS Context file",
		"fre": "La langue � lequel vous documentez ce fichier de Contexte OWS",
		"cze": "Jazyk, ve kter�m dokumentujete tento OWS "
	  },
	  "TitleContextDocument": {
		"cat": "Un t�tol per al document de context",
		"spa": "Un t�tulo para el documento de contexto",
		"eng": "A title for the Context document",
		"fre": "Un titre pour le document de context",
		"cze": "N�zev kontextov�ho dokumentu"
	  },
	  "DescriptionContextDocumentContent": {
		"cat": "Descripci� de la finalitat o el contingut del document de context",
		"spa": "Descripci�n de la finalidad o el contenido del documento de contexto",
		"eng": "Description of the Context document purpose or content",
		"fre": "Description du but ou du contenu du document de context",
		"cze": "Popis �celu nebo obsahu "
	  },
	  "EntityResponsibleMakingContextDoc": {
		"cat": "Una entitat directament responsable de crear el document de context (en general tu o la teva organitzaci�)",
		"spa": "Una entidad directamente responsable de crear el documento de contexto (por lo general usted o su organizaci�n)",
		"eng": "An entity primarily responsible for making the Context Document (usually you or your organisation)",
		"fre": "Une entit� principalement responsable de faire le document de contexte (d'habitude vous ou votre organisation)",
		"cze": "Subjekt prim�rne odpovedn� za "
	  },
	  "IdentifiePublisherContextDoc": {
		"cat": "Identificador de l'editor del document de context",
		"spa": "Identificador del editor del documento de contexto",
		"eng": "Identifier for the publisher of the Context document",
		"fre": "Identifiant de l'�diteur du document de contexte",
		"cze": "Identifik�tor vydavatele kontextov�ho "
	  },
	  "RightsOverContextDoc": {
		"cat": "Drets sobre el document de context",
		"spa": "Derechos sobre el documento de contexto",
		"eng": "Rights over the context document",
		"fre": "Les droits sur le document de contexte",
		"cze": "Pr�va ke kontextov�mu dokumentu"
	  },
	  "InformationRightsContextDoc": {
		"cat": "Informaci� sobre els drets continguts en i sobre el document de context",
		"spa": "Informaci�n sobre los derechos contenidos en y sobre el documento de contexto",
		"eng": "Information about rights held in and over the Context document",
		"fre": "Informations sur les droits d�tenus dans et sur le document de contexte",
		"cze": "Informace o pr�vech, kter� jsou dr�ena v "
	  },
	  "NotPossibleLoadContextDoc": {
		"cat": "El document de context no s'ha pogut carregar",
		"spa": "El documento de contexto no se ha podido cargar",
		"eng": "It was not possible to load the context document",
		"fre": "Il n'�tait pas possible de charger le document de contexte",
		"cze": "Kontextov� dokument nebylo mo�n� nac�st"
	  },
	  "StateMapBrowserSavedOwsContextDocumentStandard": {
		"cat": "L'estat actual del navegador de mapes es desar� mitjan�ant l'est�ndar de documents de context OWS",
		"spa": "El estado actual del navegador de mapas se guardar� usando el est�ndar de documentos de contexto OWS",
		"eng": "The current state of the map browser will be saved using the OWS Context document standard",
		"fre": "L'�tat actuel du navigateur des cartes sera sauv� utilisant la norme de document de Contexte OWS",
		"cze": "Aktu�ln� stav mapov�ho "
	  },
	  "MayRestoreUsingFileOrOwsCompliantClient": {
		"cat": "El podr� restaurar m�s tard usant el fitxer amb aquest navegador de mapes o qualsevol altre client compatible amb OWS",
		"spa": "Lo podr� restaurar m�s tarde usando el archivo con este navegador de mapas o cualquier cliente compatible con OWS",
		"eng": "You may restore it later using the file in this map browser or any other OWS compliant client",
		"fre": "Vous pouvez le reconstituer pour utiliser plus tard le fichier dans ce navigateur des cartes ou un autre client conforme OWS",
		"cze": "Pozdeji jej mu�ete obnovit "
	  }
	},
	"paleta": {
	  "WrongColorIndex": {
		"cat": "�ndex de color incorrecte",
		"spa": "�ndice de color incorrecto",
		"eng": "Wrong color index",
		"fre": "Index de couleur incorrect",
		"cze": "�patn� barevn� index"
	  },
	  "ColorIndicesHaveToBe": {
		"cat": "Els �ndexs de color han d'anar de 0 a 255",
		"spa": "Los �ndices de color deberian ir entre 0 y 255",
		"eng": "Color indices have to be between 0 and 255",
		"fre": "Les valeurs des index de couleurs doivent �tre comprises entre 0 et 255",
		"cze": "Barevn� indexy mus� b�t v rozmez� 0 a� 255."
	  },
	  "ColorNotObjectInFormat": {
		"cat": "Aquest color no es un objecte RGB en format",
		"spa": "Este color no es un objecto RGB en formato",
		"eng": "This color is not an object in the format",
		"fre": "Cette couleur n'est pas un objet au format",
		"cze": "Tato barva nen� objektem ve form�tu"
	  },
	  "HastagColorIndices": {
		"cat": "Els ### s�n �ndexs de color que han d'anar de 0 a 255.",
		"spa": "Los ### s�n �ndices de color deberian ir entre 0 y 255.",
		"eng": "The ### are Color indices that have to be between 0 and 255.",
		"fre": "Les ### sont des indices de couleur qui doivent �tre compris entre 0 et 255",
		"cze": "### jsou barevn� indexy, kter� mus� b�t mezi 0 a "
	  }
	},
	"qualitat": {
	  "QualityOfLayer": {
		"cat": "Qualitat de la capa",
		"spa": "Calidad de la capa",
		"eng": "Quality of the layer",
		"fre": "Qualit� de la couche",
		"cze": "Kvalita vrstvy"
	  },
	  "ComplexDefinitionOfStyle": {
		"cat": "En desenvolupament: definici� complexa de l'estil que no permet actualment crear el seu identificador ni, per tant, crear valoracions sobre el mateix",
		"spa": "En desarollo: definici�n compleja del estilo que no permite crear actualmente su identificador ni, por tanto, crear valoraciones sobre el mismo",
		"eng": "To be developed: complex definition of the style that does not allow to create its identifier nor, therefore, to create feedbacks about it",
		"fre": "� d�velopper: d�finition complexe du style qui ne permet pas de cr�er son identifiant ni, par cons�quent, de cr�er des valorisations sur le m�me",
		"cze": "K rozpracov�n�: komplexn� definice "
	  },
	  "UnexpectedDefinitionOfStyle": {
		"cat": "Definici� inesperada de l'estil que no permet crear el seu identificador ni, per tant, crear valoracions sobre el mateix",
		"spa": "Definici�n inesperada del estilo que no permite crear su identificador ni, por tanto, crear valoraciones sobre el mismo",
		"eng": "Unexpected definition of the style that does not allow to create its identifier nor, therefore, to create feedbacks about it",
		"fre": "D�finition inattendue du style qui ne permet pas de cr�er son identifiant ni, par cons�quent, de cr�er des valorisations sur le m�me",
		"cze": "Neocek�van� definice stylu, kter� "
	  },
	  "UnexpectedDefinitionOfFeedback": {
		"cat": "Definici� inesperada de la valoraci�",
		"spa": "Definici�n inesperada de la valoraci�n",
		"eng": "Unexpected definition of the feedback item",
		"fre": "D�finition inattendue du �l�ment de r�troaction",
		"cze": "Neocek�van� definice polo�ky "
	  },
	  "StyleCannotImported": {
		"cat": "No es pot importar l'estil",
		"spa": "No se puede importar el estilo",
		"eng": "The style cannot be imported",
		"fre": "Le style ne peut pas �tre import�",
		"cze": "Styl nelze importovat"
	  },
	  "FeedbackNotValidReproducibleDescription": {
		"cat": "Aquesta valoraci� no cont� una descripci� d'�s reproduible v�lida per a aquest navegador de mapas, versi� o esquema",
		"spa": "Esta valoraci�n no contiene una descripci�n de uso reproducible v�lida para este navegador de mapas, versi�n o esquema",
		"eng": "This feedback item does not contain a valid reproducible usage description for this web map browser, version or schema",
		"fre": "Cet �l�ment de r�troaction ne contient pas de description d'utilisation reproductible valide pour ce navigateur de carte web, cette version ou ce sch�ma",
		"cze": "Tato polo�ka zpetn� vazby "
	  },
	  "NoObservationsValidObtainValidity": {
		"cat": "No hi ha observacions amb valors v�lids per obtenir la v�lidessa temporal en aquesta �rea",
		"spa": "No hay observaciones con valores v�lidos para obtener la validez temporal en esta �rea",
		"eng": "There is no observations with valid values to obtain temporal validity in this area",
		"fre": "Il n'y a pas d'observations avec des valeurs valides pour obtenir la validit� temporelle dans ce domaine",
		"cze": "V t�to oblasti neexistuj� ��dn� "
	  },
	  "ConsistencyBasedOnComparisonObservation": {
		"cat": "La validessa temporal resumida est� basada en la comparaci� de la data de cada observaci� individual indicada a l'atribut",
		"spa": "La validez temporal est� basada en la comparaci�n de la fecha de cada observaci�n individual indicada por el atributo",
		"eng": "The temporal consistency is based on the comparison of the date of each individual observation as indicated in the field",
		"fre": "La coh�rence temporelle est bas�e sur la comparaison de la date de chaque observation individuelle telle qu'elle est indiqu�e dans le champ",
		"cze": "Casov� shoda je zalo�ena "
	  },
	  "dataIntervalSpecified": {
		"cat": "amb l'interval especificat",
		"spa": "con el intervalo especificado",
		"eng": "against the data interval specified",
		"fre": "against the data interval specified",
		"cze": "s uveden�m datov�m intervalem"
	  },
	  "notValdityInformation": {
		"cat": "que no tenen informaci� sobre la validessa",
		"spa": "que no tienen informaci�n sobre la validez",
		"eng": "that does not have validity information",
		"fre": "qui n'ont pas d'informations de la validit�",
		"cze": "kter� nem� informace o platnosti"
	  },
	  "NoObservationsValidityPositions": {
		"cat": "No hi ha observacions amb valors v�lids per obtenir la validessa de les posicions de les observacions en aquesta �rea",
		"spa": "No hay observaciones con valores v�lidos para obtener la validez de las posiciones de las observaciones en esta �rea",
		"eng": "There is no observations with valid values to obtain the validity of the positions of observations in this area",
		"fre": "Il n'y a pas d'observations avec des valeurs valides pour obtenir la validit� des positions des observations dans ce domaine",
		"cze": "Neexistuj� ��dn� pozorov�n� s "
	  },
	  "DomainConsistencyOnLocationIndividual": {
		"cat": "La consist�ncia del domini resumida est� basada en la localitzaci� de cada observaci� individual present en la vista actual comparada amb l'�mbit especificat",
		"spa": "La consistencia del dominio resumida est� basada en la localizaci�n de cada observaci�n individual present en la vista actual comparada con el �mbito especificado",
		"eng": "The domain consistency is based on the localization of each individual observation present in the actual view against the envelope specified",
		"fre": "La coh�rence du domaine est bas�e sur la localisation de chaque observation individuelle pr�sente dans la vue r�elle par rapport � l'enveloppe sp�cifi�e",
		"cze": "Konzistence oblasti je "
	  },
	  "NoObservationsLogicalConsistency": {
		"cat": "No hi ha observacions amb valors v�lids per obtenir la consist�ncia l�gica dels atributs en aquesta �rea",
		"spa": "No hay observaciones con valores v�lidos para obtener la consistencia l�gica de los atributos en esta �rea",
		"eng": "There is no observations with valid values to obtain logical consistency of attributes in this area",
		"fre": "Il n'y a pas d'observations avec des valeurs valides pour obtenir la coh�rence logique des attributs dans ce domaine",
		"cze": "Neexistuj� ��dn� pozorov�n� s "
	  },
	  "OverallConsistencyComparisonIndividualObservation": {
		"cat": "La consist�ncia resumida est� basada en la comparaci� dels valors de cada observaci� pels atribut/s",
		"spa": "La consist�ncia resumida est� basada en la comparaci�n de los valores de cada observaci�n individual para los atributo/s",
		"eng": "The overall consistency is based on the comparison of the values of each individual observation for the field/s",
		"fre": "La coh�rence globale est bas�e sur la comparaison des valeurs de chaque observation individuelle pour les champ/s",
		"cze": "Celkov� "
	  },
	  "listPossibleValuesDomain": {
		"cat": "contra la llista de valors possibles especificada al domini",
		"spa": "contra la lista de valores posibles especificada en el dominio",
		"eng": "against the list of possible values specified in the domain",
		"fre": "against the list of possible values specified in the domain",
		"cze": "se seznamem mo�n�ch hodnot uveden�ch v "
	  },
	  "notConsistencyInformationSpecifiedAttributes": {
		"cat": "que no tenen informaci� sobre la consist�ncia, perqu� no tenen els atributs indicats.",
		"spa": "que no tienen informaci�n sobre la consist�ncia, porque no tienen los atributos indicados.",
		"eng": "that does not have consistency information, because it does not have the specified attributes.",
		"fre": "qui n'ont pas d'informations de coher�nce, parce qu'ils n'ont pas les attributs.",
		"cze": "kter� nem� informace "
	  },
	  "NoObservationsPositionalUncertainty": {
		"cat": "No hi ha observacions amb incertesa posicional en aquesta �rea",
		"spa": "No hay observaciones con incertidumbre posicional en esta �rea",
		"eng": "There is no observations with positional uncertainty in this area",
		"fre": "Il n'y a pas d'observations avec une incertitude de position dans ce domaine",
		"cze": "V t�to oblasti nejsou ��dn� "
	  },
	  "computeDataQuality": {
		"cat": "per calcular la qualitat de la capa",
		"spa": "para calcular la calidad de la capa",
		"eng": "to compute data quality for the layer",
		"fre": "pour calculer la qualit� des donn�es pour la couche",
		"cze": "pro v�pocet kvality dat pro vrstvu"
	  },
	  "AccuracyPositionalUncertainty": {
		"cat": "La exactitud resumida est� basada en la incertesa posicional de cada observaci� individual indicada a l'atribut",
		"spa": "La exactitud resumida est� basada en la incertidumbre posicional de cada observaci�n individual indicada en el atributo",
		"eng": "The overall accuracy is based on the positional uncertainty for each indiviadual observation as indicated in the field",
		"fre": "The overall accuracy is based on the positional uncertainty for each indiviadual observation as indicated in the field",
		"cze": "Celkov� presnost je zalo�ena na "
	  },
	  "noUncertaintyInformation": {
		"cat": "que no tenen informaci� sobre la incertesa",
		"spa": "que no tienen informaci�n sobre la incertidumbre",
		"eng": "that does not have uncertainty information",
		"fre": "qui n'a pas d'information sur l'incertitude",
		"cze": "kter� nem� informace o nejistote"
	  },
	  "InitialDateNotBlank": {
		"cat": "La data inicial no pot es pot deixar en blanc",
		"spa": "La fecha inicial no puede dejarse en blaco",
		"eng": "The initial date cannot be left blank",
		"fre": "La date finitiale ne peut pas �tre laiss�e en blanc",
		"cze": "Poc�tecn� datum nelze ponechat pr�zdn�"
	  },
	  "FinalDateNotBlank": {
		"cat": "La data final no pot es pot deixar en blanc",
		"spa": "La fecha final no puede dejarse en blaco",
		"eng": "The final date cannot be left blank",
		"fre": "La date finale ne peut pas �tre laiss�e en blanc",
		"cze": "Konecn� datum nelze ponechat pr�zdn�"
	  },
	  "FinalDateNotLessInitialDate": {
		"cat": "La data final no pot ser inferior a la inicial",
		"spa": "La fecha final no puede ser inferior a la inicial",
		"eng": "The final date cannot be less than the initial date",
		"fre": "La date finale ne peut pas �tre inf�rieure � la date initiale",
		"cze": "konecn� datum nesm� b�t krat�� ne� "
	  },
	  "QualityParamAvailableMenu": {
		"cat": "El par�metre de qualitat calculat est� disponible a la entrada de men� contextual 'qualitat' de la capa",
		"spa": "El par�metro de calidad calculado est� disponible en la entrada de men� contextual 'calidad' de la capa",
		"eng": "The calculated quality parameter is available as an entry in the context menu entry 'quality' of the layer",
		"fre": "Le param�tre de qualit� calcul� est disponible en tant qu'entr�e dans l'entr�e du menu contextuel 'qualit�' de la couche",
		"cze": "\"Vypocten� parametr kvality je k "
	  },
	  "QualityNotComputedLayer": {
		"cat": "No s'ha pogut calcular la qualitat de la capa",
		"spa": "No se ha podido calcular la calidad de la capa",
		"eng": "The quality cannot be computed for the layer",
		"fre": "La qualit� ne peut pas �tre calcul�e pour la couche",
		"cze": "Pro vrstvu nelze vypoc�tat kvalitu"
	  },
	  "FieldPositionalUncertainty": {
		"cat": "Camp d'incertesa posicional",
		"spa": "Campo de incertidumbre posicional",
		"eng": "Field of positional uncertainty",
		"fre": "Champ d'incertitude de position",
		"cze": "Pole polohov� nejistoty"
	  },
	  "FieldsVerifyLogicalConsistency": {
		"cat": "Atributs a verificar la consist�ncia l�gica",
		"spa": "Atributos a verificar la consistencia l�gica",
		"eng": "Fields to verify the logical consistency",
		"fre": "Attributs pour v�rifier la coh�rence logique",
		"cze": "Pole pro overen� logick� "
	  },
	  "ListPossibleValues": {
		"cat": "Llista de valors possibles ",
		"spa": "Lista de valores posibles ",
		"eng": "List of possible values ",
		"fre": "Liste des valeurs possibles",
		"cze": "Seznam mo�n�ch hodnot "
	  },
	  "valueField": {
		"cat": "valor1camp1;valor1camp2;valor1camp3",
		"spa": "valor1campo1;valor1campo2;valor1campo3",
		"eng": "value1field1;value1field2;value1field3",
		"fre": "valeur1champ1;valeur1champ2;valeur1champ3",
		"cze": "hodnota1pole1hodnota1pole2hodnota1pole3"
	  },
	  "GroundTruthLayer": {
		"cat": "Capa veritat terreny",
		"spa": "Capa verdad terreno",
		"eng": "Ground truth layer",
		"fre": "Couche de v�rit� terrain",
		"cze": "Pozemn� pravdivostn� vrstva"
	  },
	  "RangeObservationDates": {
		"cat": "Interval de les dates d'observaci�",
		"spa": "Intervalo de las fechas de observaci�n",
		"eng": "Range of observation dates",
		"fre": "Plage de dates d'observation",
		"cze": "Rozsah dat pozorov�n�"
	  },
	  "InitialDate": {
		"cat": "Data inicial",
		"spa": "Fecha inicial",
		"eng": "Initial date",
		"fre": "Date initiale",
		"cze": "Poc�tecn� datum"
	  },
	  "FinalDate": {
		"cat": "Data final",
		"spa": "Fecha final",
		"eng": "Final date",
		"fre": "Date finale",
		"cze": "Konecn� datum"
	  },
	  "GeographicExtent": {
		"cat": "�mbit geogr�fic",
		"spa": "�mbito geogr�fico",
		"eng": "Geographic extent",
		"fre": "Etendue g�ographique",
		"cze": "Geografick� rozsah"
	  },
	  "MinimumLongitude": {
		"cat": "Longitud m�nima",
		"spa": "Longitud m�nima",
		"eng": "Minimum longitude",
		"fre": "Longitude minimale",
		"cze": "Minim�ln� zemepisn� d�lka"
	  },
	  "MinimumX": {
		"cat": "X m�nima",
		"spa": "X m�nima",
		"eng": "Minimum X",
		"fre": "X minimale",
		"cze": "Minim�ln� X"
	  },
	  "MaximumLongitude": {
		"cat": "Longitud m�xima",
		"spa": "Longitud m�xima",
		"eng": "Maximum longitude",
		"fre": "Longitude maximale",
		"cze": "Maxim�ln� zemepisn� d�lka"
	  },
	  "MaximumX": {
		"cat": "X m�xima",
		"spa": "X m�xima",
		"eng": "Maximum X",
		"fre": "X maximale",
		"cze": "Maxim�ln� X"
	  },
	  "MinimumLatitude": {
		"cat": "Latitud m�nima",
		"spa": "Latitud m�nima",
		"eng": "Minimum latitude",
		"fre": "Latitude minimale",
		"cze": "Minim�ln� zemepisn� ��rka"
	  },
	  "MinimumY": {
		"cat": "Y m�nima",
		"spa": "Y m�nima",
		"eng": "Minimum Y",
		"fre": "Y minimale",
		"cze": "Minim�ln� Y"
	  },
	  "MaximumLatitude": {
		"cat": "Latitud m�xima",
		"spa": "Latitud m�xima",
		"eng": "Maximum latitude",
		"fre": "Latitude maximale",
		"cze": "Maxim�ln� zemepisn� ��rka"
	  },
	  "MaximumY": {
		"cat": "Y m�xima",
		"spa": "Y m�xima",
		"eng": "Maximum Y",
		"fre": "Y maximale",
		"cze": "Maxim�ln� Y"
	  },
	  "ComputeQualityLayer": {
		"cat": "Calcular la qualitat de la capa",
		"spa": "Calcular la Calidad de la capa",
		"eng": "Compute the quality of the layer",
		"fre": "Calculer la qualit� de la couche",
		"cze": "V�pocet kvality vrstvy"
	  },
	  "QualityAssesment": {
		"cat": "M�tode d'avaluaci� de la qualitat",
		"spa": "M�todo de evaluaci�n de la calidad",
		"eng": "Quality assesment",
		"fre": "M�thode d'�valuation de la qualit�"
	  },
	  "PositionalLayerObsUncertainties": {
		"cat": "Exactitud posicional de la capa a partir de la incertessa de l'observaci�",
		"spa": "Exactitud posicional de la capa a partir de la incertidumbre de la observaci�n",
		"eng": "Positional accuracy of the layer from observation uncertainties",
		"fre": "Pr�cision de positionnement de la couche par rapport � l'incertitude d'observation",
		"cze": "Presnost polohy vrstvy z nejistot "
	  },
	  "LogicalConsistencyThematicAttr": {
		"cat": "Consist�ncia l�gica dels atributs tem�tics",
		"spa": "Consistencia l�gica de los atributos tem�ticos",
		"eng": "Logical consistency of the thematic attributes",
		"fre": "Coh�rence logique des attributs th�matiques",
		"cze": "Logick� konzistence tematick�ch "
	  },
	  "TemporalValidityObsDate": {
		"cat": "Validessa temporal de la data d'observaci�",
		"spa": "Validez temporal de la fecha de observaci�n",
		"eng": "Temporal validity of observation date",
		"fre": "Validit� temporelle de la date de l'observation",
		"cze": "Casov� platnost data pozorov�n�"
	  },
	  "ValidityPositionsObs": {
		"cat": "Validessa de les posicions de les observacions",
		"spa": "Validez de las posiciones de las observaciones",
		"eng": "Validity of the positions of observations",
		"fre": "Validit� des positions des observations",
		"cze": "Platnost polohy pozorov�n�"
	  }
	},
	"tools": {
	  "LayerTypeWindow": {
		"cat": "No s'ha definit la layer de tipus finestra",
		"spa": "No se ha definido la layer de tipo ventana",
		"eng": "The layer",
		"fre": "La layer de type fen�tre",
		"cze": "Vrstva"
	  },
	  "notDefinedNotFunctionality": {
		"cat": "i per tant no es pot usar la funcionalitat",
		"spa": "y en consecuencia no se puede usar la funcionalidad",
		"eng": "has not been defined and its not possible use the functionality",
		"fre": "n'a �t� pas d�finie et il n'est donc pas possible d'utilise l'outil",
		"cze": "nebyla definov�na a nen� mo�n� pou��t "
	  },
	  "TheValueOf": {
		"cat": "El valor de",
		"spa": "El valor de",
		"eng": "The value of",
		"fre": "La valeur de",
		"cze": "Hodnota"
	  },
	  "requiresACharacter": {
		"cat": "ha de contenir un caracter",
		"spa": "debe contenir un caracter",
		"eng": "requires a character",
		"fre": "n�cessite un caract�re",
		"cze": "vy�aduje znak"
	  },
	  "ReferencesOtherJSONNotSupported": {
		"cat": "Encara no se suporten valors de $ref amb refer�ncies a altres fitxers JSON",
		"spa": "A�n no se suporta valores de $ref con referencias a otros ficheros JSON",
		"eng": "$ref values with references to other JSON files are still not supported",
		"fre": "Les valeurs $ref avec des r�f�rences � d'autres fichiers JSON ne sont toujours pas prises en charge",
		"cze": "Hodnoty $ref s odkazy na jin� "
	  },
	  "isNotDefined": {
		"cat": "no est� definit",
		"spa": "no est� definido",
		"eng": "is not defined",
		"fre": "n'est pas d�fini",
		"cze": "nen� definov�n"
	  },
	  "isNotObject": {
		"cat": "no �s un objecte",
		"spa": "no es un objecto",
		"eng": "is not an object",
		"fre": "n'est pas un objet",
		"cze": "nen� objektem"
	  }
	},
	"vector": {
	  "CannotSelectObjectLayerNoExist": {
		"cat": "No es poden seleccionar els objectes sol�licitats perqu� la capa no existeix",
		"spa": "No se pueden seleccionar los objetos solicitados porqu� la capa no existe",
		"eng": "Cannot select request objecte because the layer doesn't exist",
		"fre": "Les objets demand�s ne peuvent pas �tre s�lectionn�es parce que la couche n'existe pas",
		"cze": "Nelze vybrat objekt po�adavku, "
	  }
	},
	"video": {
	  "NoLayerAvailableForAnimation": {
		"cat": "No hi ha cap capa disponible per l'�nimaci� en aquesta �rea o zoom.",
		"spa": "No hi ha ninguna capa disponible para la animaci�n en este �rea o zoom.",
		"eng": "There is no layer available for the animation in this area or zoom.",
		"fre": "Il n'y a pas de couche disponible pour la animation dans cette zone ou le zoom",
		"cze": "Pro animaci v t�to oblasti nebo "
	  },
	  "TimeSeries": {
		"cat": "S�ries temporals",
		"spa": "Series temporales",
		"eng": "Time series",
		"fre": "S�ries chronologiques",
		"cze": "Casov� rada"
	  },
	  "TemporalScale": {
		"cat": "Escala temporal",
		"spa": "Escala temporal",
		"eng": "Temporal scale",
		"fre": "�chelle temporelle",
		"cze": "Casov� mer�tko"
	  },
	  "Interval": {
		"cat": "Interval",
		"spa": "Intervalo",
		"eng": "Interval",
		"fre": "Intervalle",
		"cze": "Interval"
	  },
	  "Animations": {
		"cat": "Animacions",
		"spa": "Animaciones",
		"eng": "Animations",
		"fre": "Animations",
		"cze": "Animace"
	  },
	  "Graph": {
		"cat": "Gr�fic",
		"spa": "Gr�fico",
		"eng": "Graph",
		"fre": "Graphique",
		"cze": "Graf"
	  },
	  "NumPhotosValue": {
		"cat": "N. fotog. amb valor",
		"spa": "N. fotog. con valor",
		"eng": "N. photos with value",
		"fre": "N. fotog. avec valeur",
		"cze": "N. fotografi� s hodnotou"
	  },
	  "StartSeasonDay": {
		"cat": "Dia d'inici de la temporada",
		"spa": "D�a de inicio de la temporada",
		"eng": "Start of the Season day",
		"fre": "Jour de d�but de saison",
		"cze": "Zac�tek dne sez�ny"
	  },
	  "PeakSeasonDay": {
		"cat": "Dia el m�xim de la temporada",
		"spa": "D�a del m�ximo de la temporada",
		"eng": "Peak of the Season day",
		"fre": "Journ�e de pointe de la saison",
		"cze": "Den vrcholu sez�ny"
	  },
	  "EndSeasonDay": {
		"cat": "Dia de fi de la temporada",
		"spa": "D�a de final de la temporada",
		"eng": "End of the Season day",
		"fre": "Jour de fin de saison",
		"cze": "Den konce sez�ny"
	  },
	  "LengthSeasonDays": {
		"cat": "Dies D'allargada de la temporada",
		"spa": "D�as de longitud de la temporada",
		"eng": "Length of the season (days)",
		"fre": "Dur�e de la saison (jours)",
		"cze": "D�lka sez�ny (dny)"
	  },
	  "StartSeasonValue": {
		"cat": "Valor d'inici de la temporada",
		"spa": "Valor de inicio de la temporada",
		"eng": "Start of the Season value",
		"fre": "Valeur de d�but de saison",
		"cze": "Hodnota zac�tku sez�ny"
	  },
	  "PeakSeasonValue": {
		"cat": "Valor m�xim de la temporada",
		"spa": "Valor m�ximo de la temporada",
		"eng": "Peak of the Season value",
		"fre": "Valeur maximale de la saison",
		"cze": "Vrcholov� hodnota sez�ny"
	  },
	  "EndSeasonValue": {
		"cat": "Valor de fi de la temporada",
		"spa": "Valor de final de la temporada",
		"eng": "End of the Season value",
		"fre": "Valeur de fin de saison",
		"cze": "Hodnota na konci sez�ny"
	  },
	  "SeasonBaseValue": {
		"cat": "Valor base la temporada",
		"spa": "Valor base de la temporada",
		"eng": "Season base value",
		"fre": "Valeur de base de la saison",
		"cze": "Z�kladn� hodnota sez�ny"
	  },
	  "AmplitudeSeason": {
		"cat": "Amplitud de la temporada",
		"spa": "Amplitud de la temporada",
		"eng": "Amplitude of the season",
		"fre": "Amplitude de la saison",
		"cze": "Amplituda sez�ny"
	  },
	  "RateGreening": {
		"cat": "Taxa de verdor",
		"spa": "Tasa de verdor",
		"eng": "Rate of Greening",
		"fre": "Taux de verdissement",
		"cze": "M�ra ozelenen�"
	  },
	  "RateSenescing": {
		"cat": "Taxa de senec�ncia",
		"spa": "Tasa de sensecencia",
		"eng": "Rate of Senescing",
		"fre": "Taux de s�nescente"
	  },
	  "frames": {
		"cat": "fotogrames",
		"spa": "fotogramas",
		"eng": "frames",
		"fre": "cadres",
		"cze": "r�my"
	  },
	  "LoadingFilm": {
		"cat": "Carregant rodet",
		"spa": "Cargando carrete",
		"eng": "Loading film",
		"fre": "Chargement film",
		"cze": "Vkl�d�n� filmu"
	  },
	  "LoadingFrames": {
		"cat": "Carregant fotogrames",
		"spa": "Cargando fotogramas",
		"eng": "Loading frames",
		"fre": "Chargement des cadres",
		"cze": "Vkl�d�n� sn�mku"
	  },
	  "AllowedPercentageVoidSpace": {
		"cat": "Percentatge tolerat de superf�cie buida",
		"spa": "Porcentage tolerado de superficie vacia",
		"eng": "Allowed percentage of void space",
		"fre": "Pourcentage de surface vide tol�r�",
		"cze": "Povolen� procento pr�zdn�ho prostoru"
	  },
	  "ComputingStatisticSeries": {
		"cat": "Calculant estad�stic de la s�rie",
		"spa": "Calculando estad�stico de la serie",
		"eng": "Computing statistic of the series",
		"fre": "Statistique de calcul de la s�rie",
		"cze": "V�pocet statistiky s�rie"
	  },
	  "UnsupportedStatisticalFunction": {
		"cat": "Funci� estad�stica no suportada",
		"spa": "Funci�n estad�stica no soportada",
		"eng": "Unsupported statistical function",
		"fre": "Statistical function non support�e",
		"cze": "Nepodporovan� statistick� funkce"
	  },
	  "ComputingGraphicSeries": {
		"cat": "Calculant grafic x/t de la s�rie",
		"spa": "Calculando gr�fico x/t de la serie",
		"eng": "Computing graphic x/t of the series",
		"fre": "Informatique graphique x/t de la s�rie",
		"cze": "V�pocet grafick� x/t rady"
	  },
	  "ValuesImageCopiedClipboard": {
		"cat": "Els valors de la imatge han estat copiats al portaretalls en format r�ster ASCII",
		"spa": "Los valores de la imagen han sido copiados al portapapeles en formato r�ster ASCII",
		"eng": "The values of the image have been copied to clipboard in ASCII raster format",
		"fre": "Les valeurs de l'image ont �t� copi�es dans le presse-papier dans le format raster ASCII",
		"cze": "Hodnoty sn�mku byly zkop�rov�ny do "
	  },
	  "LoadingThumbnails": {
		"cat": "Carregant miniatures",
		"spa": "Cargando miniaturas",
		"eng": "Loading thumbnails",
		"fre": "Chargement des vignettes",
		"cze": "Nac�t�n� miniatur"
	  },
	  "WrongValueTemporalScale": {
		"cat": "Valor incorrecte de l'escala temporal",
		"spa": "Valor incorrecto de la escala temporal",
		"eng": "Wrong value in temporal scale",
		"fre": "Valeur incorrect de l'�chelle temporelle",
		"cze": "�patn� hodnota v casov� stupnici"
	  },
	  "IncorrectValueIntervalSeconds": {
		"cat": "Valor incorrecte de l'interval de segons",
		"spa": "Valor incorrecto del intervaluo de segundos",
		"eng": "Incorrect value of the interval of seconds",
		"fre": "Valeur incorrecte de l'intervalle de secondes",
		"cze": "Nespr�vn� hodnota sekundov�ho intervalu"
	  },
	  "WillUse": {
		"cat": "Usar� 5.0",
		"spa": "Usar� 5.0",
		"eng": "I'll use 5.0",
		"fre": "Je vais utiliser 5.0",
		"cze": "Pou�iji hodnotu 5,0"
	  },
	  "SelectTempScaleInterval": {
		"cat": "Sel�lecciona escala temporal o interval",
		"spa": "Seleccione escala temporal o intervalo",
		"eng": "Select temporal scale or interval",
		"fre": "S�lectionner �chelle temporelle o� intervalle",
		"cze": "Vyberte casovou stupnici nebo interval"
	  }
	},
	"wps": {
	  "Result": {
		"cat": "Resultat: ",
		"spa": "Resultado: ",
		"eng": "Result: ",
		"fre": "R�sultat: ",
		"cze": "V�sledek: "
	  },
	  "Accepted": {
		"cat": "Acceptat",
		"spa": "Aceptado",
		"eng": "Accepted",
		"fre": "Accept�",
		"cze": "Prijato"
	  },
	  "Started": {
		"cat": "Iniciat",
		"spa": "Iniciado",
		"eng": "Started",
		"fre": "Initi�",
		"cze": "Spu�teno"
	  },
	  "percentCompleted": {
		"cat": "percentatge completat",
		"spa": "porcentaje completado",
		"eng": "percent completed",
		"fre": "pourcentage compl�t�",
		"cze": "procento dokonceno"
	  },
	  "Paused": {
		"cat": "Pausat",
		"spa": "Pausado",
		"eng": "Paused",
		"fre": "En pause",
		"cze": "Paused"
	  },
	  "Succeeded": {
		"cat": "Finalitzat",
		"spa": "Finalizado",
		"eng": "Succeeded",
		"fre": "Termin�",
		"cze": "�spe�n�"
	  },
	  "Failed": {
		"cat": "Error: ",
		"spa": "Error: ",
		"eng": "Failed: ",
		"fre": "Erreur: ",
		"cze": "Ne�spe�ne:"
	  },
	  "NoValueDefinedParameter": {
		"cat": "No s'ha definit cap valor pel par�metre",
		"spa": "No se ha definido ning�n valor para el par�metro",
		"eng": "No value has been defined by parameter",
		"fre": "Aucun valeur d�fini pour le param�tre",
		"cze": "U parametru nebyla definov�na ��dn� hodnota"
	  },
	  "NecessarySendFileBeforeExecProcess": {
		"cat": "Cal enviar el fitxer al servidor abans d'executar el proc�s",
		"spa": "Es necesario enviar el fichero al servidor antes de ejecutar el proceso",
		"eng": "It is necessary to send the file to the server before executing the process",
		"fre": "Il faut envoyer le fichier au serveur avant d'ex�cuter le processus",
		"cze": "Pred spu�ten�m procesu je nutn� "
	  },
	  "URLIntroducedInParameter": {
		"cat": "La URL introdu�da en el par�metre",
		"spa": "La URL introducida en el parametro",
		"eng": "The URL introduced in the parameter",
		"fre": "La URL introduite au param�tre",
		"cze": "Adresa URL uveden� v parametru"
	  },
	  "isInvalid": {
		"cat": "�s inv�lida",
		"spa": " es invalida",
		"eng": "is invalid",
		"fre": "n'est pas valide",
		"cze": "je neplatn�"
	  },
	  "StateExecution": {
		"cat": "Estat de l'execuci�",
		"spa": "Estado de la ejecuci�n",
		"eng": "State of execution",
		"fre": "�tat de l'ex�cution",
		"cze": "Stav prov�den�"
	  },
	  "ExecutionTime": {
		"cat": "Temps d'execuci�",
		"spa": "Tiempo de ejecuci�n",
		"eng": "Execution time",
		"fre": "Dur�e d�ex�cution",
		"cze": "Cas proveden�"
	  },
	  "AdvancedOptions": {
		"cat": "Opcions avan�ades",
		"spa": "Opciones avanzadas",
		"eng": "Advanced options",
		"fre": "Options avanc�es",
		"cze": "Roz��ren� mo�nosti"
	  },
	  "ErrorBuildingExecReq": {
		"cat": "Error al construir la petici� d'execuci�",
		"spa": "Error al construir la petici�n de ejecuci�n",
		"eng": "Error while building execution request",
		"fre": "Erreur en construisant la demande d'ex�cution",
		"cze": "Chyba pri sestavov�n� po�adavku na proveden�"
	  },
	  "AllowedFormatsParameter": {
		"cat": "Formats permesos by parameter",
		"spa": "Formatos permitidos by parameter",
		"eng": "Allowed formats by parameter",
		"fre": "Formats permis by parameter",
		"cze": "Povolen� form�ty podle parametru"
	  },
	  "OccurredErrorSendingFile": {
		"cat": "S'ha produ�t algun error durant l'enviament del fitxer",
		"spa": "Se ha producido algun error durante el env�o del fichero",
		"eng": "Has been occurred an error while sending the file",
		"fre": "Une erreur vient de se produire pendant l'envoi du fichier",
		"cze": "Do�lo k chybe pri odes�l�n� souboru"
	  },
	  "InputParameters": {
		"cat": "Par�metres d'entrada",
		"spa": "Par�metros de entrada",
		"eng": "Input parameters",
		"fre": "Param�tres d'entr�e",
		"cze": "Vstupn� parametry"
	  },
	  "LayerProcess": {
		"cat": "Capa a processar",
		"spa": "Capa a procesar",
		"eng": "Layer to process",
		"fre": "Couche � traiter",
		"cze": "Vrstva ke zpracov�n�"
	  },
	  "OperationExecute": {
		"cat": "Operaci� a executar: ",
		"spa": "Operaci�n a ejecutar: ",
		"eng": "Operation to execute: ",
		"fre": "Op�ration � ex�cuter: ",
		"cze": "Operace, kter� se m� prov�st: "
	  },
	  "someProcessWithoutOperation": {
		"cat": "t� processos sense cap operaci� definida",
		"spa": "tiene procesos sin ninguna operaci�n definida",
		"eng": "have some process without any operation defined",
		"fre": "a des processus sans aucune op�ration d�finie",
		"cze": "m�t nejak� proces bez definovan� operace"
	  },
	  "notAnyExecProcesDefined": {
		"cat": "no t� capa proc�s executable definit",
		"spa": "no tiene ning�n proceso ejecutable definido",
		"eng": "do not have any executable proces defined",
		"fre": "n'a aucun processus ex�cutable d�finit"
	  },
	  "addingLayersToBrowser": {
		"cat": "d'afegir capes al navegador",
		"spa": "de a�adir capas al navegador",
		"eng": "of adding a layer to the browser",
		"fre": "pour ajouter des couches au navigateur",
		"cze": "prid�n� vrstvy do prohl�ece"
	  }
	},
	"urls": {
	  "helpHtm": {
		"cat": "ajuda/cat/ajuda.htm",
		"spa": "ajuda/spa/ajuda.htm",
		"eng": "ajuda/eng/ajuda.htm",
		"fre": "ajuda/fre/ajuda.htm",
		"cze": "ajuda/eng/ajuda.htm"
	  },
	  "installerMMRExe": {
		"cat": "http://www.creaf.uab.cat/miramon/mmr/cat/exe/Inst_MMR.EXE",
		"spa": "http://www.creaf.uab.cat/miramon/mmr/esp/exe/Inst_MMR.EXE",
		"eng": "http://www.creaf.uab.cat/miramon/mmr/usa/exe/Inst_MMR.EXE",
		"fre": "http://www.creaf.uab.cat/miramon/mmr/cat/exe/Inst_MMR.EXE",
		"cze": "http://www.creaf.uab.cat/miramon/mmr/usa/exe/Inst_MMR.EXE"
	  }
	}
  }
