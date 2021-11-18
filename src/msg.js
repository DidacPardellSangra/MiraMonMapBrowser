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

var MessageLang={
	MissingMessage: {"cat":"Missatge no trobat", "spa":"Mensage no encontrado", "eng":"Missing message", "fre":"Message non trouv�"},
	ModifyName: {"cat":"Modifica el nom", "spa":"Modifica el nombre", "eng":"Modify the name", "fre":"Modifier le nom"},
	AddLayer: {"cat":"Afegir capa", "spa":"A&ntilde;adir capa", "eng":"Add layer", "fre":"Ajouter couche"},
	Metadata: {"cat":"Metadades", "spa":"Metadatos", "eng":"Metadata", "fre":"M�tadonn�es"},
	Quality: {"cat":"Qualitat", "spa":"Calidad", "eng":"Quality", "fre":"Qualit�"},
	Lineage: {"cat":"Llinatge", "spa":"Linaje", "eng":"Lineage", "fre":"Lignage"},
	Feedback: {"cat":"Valoracions", "spa":"Valoraciones", "eng":"Feedback", "fre":"r�troaction"},
	PieChart: {"cat":"Gr�fic circular", "spa":"Gr�fico circular", "eng":"Pie chart", "fre":"Diagramme � secteurs"},
	Histogram: {"cat":"Histograma", "spa":"Histograma", "eng":"Histogram", "fre":"Histogramme"},
  Selection:{"cat":"Selecci�", "spa":"Selecci�n", "eng":"Selection", "fre":"S�lection"},
  close: {"cat":"tancar", "spa":"cerrar", "eng":"close", "fre":"quitter"},
  UnderDevelopment: {"cat":"En desenvolupament.", "spa":"En desarrollo.", "eng":"Under development.", "fre":"En d�veloppement."},
  layer: {"cat":"capa", "spa":"capa", "eng":"layer", "fre":"couche"},
  Layer: {"cat":"Capa", "spa":"Capa", "eng":"Layer", "fre":"Couche"},
  LayerId: {"cat":"Identificador de la capa", "spa":"Identificador de la capa", "eng":"Layer identifier", "fre":"Identificateur de couche"},
  Layers: {"cat":"Capes","spa":"Capas","eng":"Layers","fre":"Couches"},
  Add: {"cat":"Afegir", "spa":"A�adir", "eng":"Add", "fre":"Ajouter"},
	Cancel: {"cat":"Cancel�lar", "spa":"Cancelar", "eng":"Cancel", "fre":"Annuler"},
  Expression: {"cat":"F�rmula", "spa":"F�rmula:", "eng":"Expression", "fre":"Formule"},
  Value: {"cat":"Valor", "spa":"Valor", "eng":"Value", "fre":"Valeur"},
  Operator: {"cat":"Operador", "spa":"Operador", "eng":"Operator", "fre":"Op�rateur"},
  Date: {"cat":"Data", "spa":"Fecha", "eng":"Date", "fre":"Date"},
  Field: {"cat":"Camp", "spa":"Camp", "eng":"Field", "fre":"Champ"},
    Title: {"cat":"T&iacute;tol", "spa":"T&iacute;tulo", "eng":"Title", "fre":"Titre"},
  Condition: {"cat":"Condici�", "spa":"Condici�n", "eng":"Condition", "fre":"Condition"},
  OK: {"cat":"Acceptar", "spa":"Aceptar", "eng":"OK", "fre":"Accepter"},
  Presentation: {"cat":"Presentaci�", "spa":"Presentaci�n","eng":"Presentation", "fre":"Pr�sentation"},
  Graphical: {"cat":"Gr�fica", "spa":"Gr�fica", "eng":"Graphical", "fre":"Graphique"},
  Textual: {"cat":"Textual", "spa":"Textual", "eng":"Textual", "fre":"Textuelle"},
  Unsorted: {"cat":"Cap", "spa":"Ninguno", "eng":"Unsorted", "fre":"Non tri�"},
  ColorPalette: {"cat":"Paleta de colors", "spa":"Paleta de colores", "eng":"Color palette", "fre":"Palette de couleurs"},
  Current: {"cat": "Actual", "spa": "Actual", "eng": "Current", "fre": "Actuel"},
  Previous: {"cat": "Pr�via", "spa": "Previa", "eng": "Previous", "fre": "Pr�c�dente"},
  LayerName:{"cat":"Nom de la capa", "spa":"Nombre de la capa", "eng":"Name of the layer", "fre":"Nom de la couche"},
  ModalClass: {"cat": "Classe modal", "spa": "Clase modal", "eng": "Modal class", "fre": "Classe modale"},
  PercentageMode: {"cat": "Percentatge de la moda", "spa": "Porcentaje de la moda", "eng": "Percentage of the mode", "fre": "Pourcentage de mode"},
  Sum: {"cat": "Suma", "spa": "Suma", "eng": "Sum", "fre": "Somme"},
  SumArea: {"cat": "Suma �rea", "spa": "Suma �rea", "eng": "Sum area", "fre": "Somme area"},
  Mean: {"cat": "Mitjana", "spa": "Media", "eng": "Mean", "fre": "Moyenne"},
  Variance: {"cat": "Varian�a", "spa": "Varianza", "eng": "Variance", "fre": "Variance"},
  StandardDeviation: {"cat": "Desviaci� est�ndard", "spa": "Desviaci� est�ndar", "eng": "Standard deviation", "fre": "�cart-type"},
  Minimum: {"cat":"M�nim", "spa":"M�nimo", "eng":"Minimum", "fre":"Minimum"},
	Maximum: {"cat":"M�xim", "spa":"M�ximo", "eng":"Maximum", "fre":"Maximum"},
  Range: {"cat": "Rang", "spa": "Rango", "eng": "Range", "fre": "Gamme"},
  SortingOrder: {"cat":"Ordre", "spa":"Orden","eng":"Sorting order", "fre":"Ordre de tri"},
  Others: {"cat":"Altres", "spa":"Otros", "eng":"Others", "fre":"Autres"},
	cntxmenu:{
		ShareLayer: {"cat":"Compartir capa", "spa":"Compartir capa", "eng":"Share layer", "fre":"Partager couche"},
		RemoveLayer: {"cat":"Esborrar capa", "spa":"Borrar capa", "eng":"Delete layer", "fre":"Effacer couche"},
		MoveLayer: {"cat":"Moure la capa", "spa":"Mover la capa", "eng":"Move layer", "fre":"D�placer la couche"},
		ToTheTop: {"cat":"A sobre de tot","spa":"Encima de todo", "eng":"To the top", "fre":"En haut de"},
		Up: {"cat":"A sobre","spa":"Encima", "eng":"Up", "fre":"Au-dessus"},
		Down: {"cat":"A sota", "spa":"Debajo::", "eng":"Down", "fre":"Au-dessous"},
		ToTheEnd: {"cat":"A sota de tot", "spa":"Debajo de todo", "eng":"To the end", "fre":"En bas"},
		ComputeQuality: {"cat":"Calcula la qualitat", "spa":"Calcula la calidad", "eng":"Compute the quality", "fre":"Calculer la qualit�"},
		EditStyle: {"cat":"Edita estil", "spa":"Editar estilo", "eng":"Edit style", "fre":"Modifier le style"},
		ofEditingStyle: {"cat":"de editar l'estil", "spa":"de editar el estilo", "eng":"of editing the style", "fre":"pour modifier le style"},
    StyleName: {"cat":"Nom de l'estil", "spa":"Nombre del estilo", "eng":"Name of the style", "fre":"Nom du style"},
		ConfusionMatrix: {"cat":"Matriu de confusi�", "spa":"Matriz de confusi�n", "eng":"Confusion matrix", "fre":"Matrice de confusion"},
		ContingencyTable: {"cat":"Taula de conting�ncia", "spa":"Tabla de contingencia", "eng":"Contingency table", "fre":"Tableau de contingence"},
		StatisticByCategory: {"cat": "Estad�stic per categoria", "spa": "Estad�stico por categoria", "eng": "Statistic by category", "fre": "Statistique par cat�gorie"},
		Statistic: {"cat": "Estad�stic", "spa": "Estad�stico", "eng": "Statistic", "fre": "Statistique"},
		Surface: {"cat":"Superf�cie", "spa":"Superficie", "eng":"Surface", "fre":"Surface"},
		RGBCombination: {"cat":"Combinaci� RGB", "spa":"Combinaci�n RGB", "eng":"RGB combination", "fre":"Combinaison RVB"},
		Reclassification: {"cat":"Reclassificaci�", "spa":"Reclasificaci�n", "eng":"Reclassification", "fre":"Reclassement"},
    RetrieveStyles: {"cat":"Recupera estils", "spa":"Recupera estilos", "eng":"Retrieve styles", "fre":"R�cup�rer les styles"},
    ShareStyle: {"cat":"Compartir estil", "spa":"Compartir estilo", "eng":"Share style", "fre":"Partager style"},
    DeleteStyle: {"cat":"Esborrar estil", "spa":"Borrar estilo", "eng":"Delete style", "fre":"Effacer style"},
    ComputeQuality: {"cat":"Calcula la qualitat", "spa":"Calcula la calidad", "eng":"Compute the quality", "fre":"Calculer la qualit�"},
		toComputeTheQuality: {"cat":"de calcular la qualitat", "spa":"de calcular la calidad", "eng":"to compute the quality", "fre":"pour calculer la qualit�"},
		NewLayerAdded: {"cat":"La nova capa afegida", "spa":"La nueva capa a�adida", "eng":"The new added layer", "fre":"La nouvelle couche ajout�e"},
		notVisibleInCurrentZoom: {"cat":"no �s visible al nivell de zoom actual del navegador", "spa":"no es visible al nivel de zoom actual del navegador", "eng":"is not visible in the current zoom level of the browser", "fre":"n'est pas visible au niveau du zoom actuel du navigateur"},
		TheLayer: {"cat":"La capa", "spa":"La capa", "eng":"The layer", "fre":"La couche"},
    toTheLayer: {"cat":"a la capa", "spa":"a la capa", "eng":"to the layer", "fre":"� la couche"},
    containsReferencesEraseContinue: {"cat":"cont� refer�ncies a la capa que s'est� intentant esborrar i deixar� de funcionar. Vols continuar", "spa": "contiene referencias a la capa que se est� intentando borrar y dejar� de funcionar. Desea continuar", "eng": "contains references to the layer that you are trying to erase and will stop working. Do you want to continue", "fre": "contient des r�f�rences � la couche que vous essayez d'effacer et de cesser de travailler. Voulez-vous continuer"},
    containsReferencesStyleEraseContinue: {"cat":"cont� refer�ncies a l'estil que s'est� intentant esborrar i deixar� de funcionar. Vols continuar", "spa": "contiene referencias al estilo que se est� intentando borrar y dejar� de funcionar. Desea continuar", "eng": "contains references to the style that you are trying to erase and will stop working. Do you want to continue", "fre": "contient des r�f�rences au style que vous essayez d'effacer et de cesser de travailler. Voulez-vous continuer"},
		ChooseTwoDifferentLayers: {"cat":"Cal triar dues capes diferents o la mateixa en estils i/o dates diferents.", "spa":"Es necesario elegir dos capas diferentes o la misma en estilos y/o fechas diferentes.", "eng":"You should choose two different layers or the same in different styles and/or dates.", "fre": "You should  choose two different layers or the same in different styles and/or dates."},
    CombinationOf: {"cat": "Combinaci� de ", "spa": "Combinaci�n de ", "eng": "Combination of ", "fre": "Combination of "},
    byCategoryOf: {"cat":"per categoria de","spa":"por categor�as de","eng":"by category of", "fre":"par cat�gorie de"},
    byCategoriesOf: {"cat":"per les categories de", "spa":"para las categor�as de", "eng":"by categories of", "fre":"par cat�gories des"},
		withStatisticsOf:{"cat":" amb estadistics de ","spa":" con estad�sticos de ","eng":" with statistics of ", "fre":" avec statistiques par "},
		WrongNumberElementsInLine: {"cat": "Nombre d'elements incorrecte a la l�nia", "spa": "N�mero de elementos incorrecto en la l�nea", "eng": "Wrong number of elements in line","fre": "Wrong number of elements in line"},
		WrongValuesFormatInLine: {"cat": "Format incorrecte dels valors a la l�nia", "spa": "Formato incorrecto de los valores en la l�nea", "eng": "Wrong values format in line", "fre": "Wrong values format in line"},
		WrongOldValueInLine: {"cat": "Valor a canviar incorrecte a la l�nia", "spa": "Valor a cambiar incorrecto en la l�nea", "eng": "Wrong old value in line", "fre": "Ancienne valeur erron�e dans la ligne"},
		CannotObtainValidResponseFromServer: {"cat":"No s'ha obtingut cap resposta v�lida del servidor sol�licitat", "spa":"No se ha obtenido ninguna respuesta v�lida del servidor solicitado", "eng":"Cannot obtain any valid response from server", "fre":"Aucune r�ponse valide n'a �t� obtenue du serveur demand�"},
    ServerURL: {"cat":"URL del servidor:", "spa":"URL del servidor:", "eng":"server URL:", "fre":"URL du serveur:"},
    SelectAllLayers: {"cat":"Seleccionar totes les capes", "spa":"Seleccionar todas las capas", "eng":"Select all layers", "fre":"S�lectionner toutes les couches"},
		ServerNotHaveLayerInBrowserReferenceSystem: {"cat":"Aquest servidor no t� cap capa disponible en el sistema de refer�ncia actual del navegador", "spa":"Este servidor no tiene ninguna capa disponible en el sistema de refer�ncia actual del navegador", "eng":"This server don't have any layer in the browser actual reference system", "fre":"Ce serveur n'a aucune couche disponible dans le syst�me de r�f�rence actuel du navigateur"},
		ValidURLMustBeProvided: {"cat":"Cal indicar una adre�a v�lida", "spa":"Se debe indicar una direcci�n v�lida","eng":"A valid URL must be provided","fre":"Vous devez indiquer une adresse valide"},
    ChooseOneFromList: {"cat":"Seleccciona'n un de la llista", "spa":"Escoja uno de la lista","eng": "Choose one from list", "fre":"S�lectionnez un objet de la liste"},
		toShowInformationOrHelp: {"cat":"per mostrar informaci� o ajuda", "spa":"para mostrar informaci�n o ayuda","eng":"to show information or help", "fre":"pour afficher des informations ou de l'aide"},
		AddReclassifiedLayerAsNewStyle: {"cat":"Afegeix capa reclassificada com un nou estil", "spa":"A�ada capa reclasificada como un nuevo estilo","eng":"Add reclassified layer as a new style", "fre":"Ajouter une couche reclass�e en tant que nouveau style"},
    LayerToReclassify: {"cat":"Capa a reclassificar", "spa":"Capa a reclasificar", "eng":"Layer to reclassify", "fre":"Couche � reclassifier"},
    ReclassifyingExpression: {"cat":"F�rmula de reclassificaci�", "spa":"F�rmula de reclasificaci�n:", "eng":"Reclassifying expression", "fre":"Formule de reclassement"},
		ResultOfReclassificationAddedAsNewStyleWithName: {"cat":"El resultat de la reclassificaci� ser� afegit com a un estil nou de nom", "spa":"El resultado de la reclasssificaci�n ser� a�adido como un estilo nuevo de nombre", "eng":"The result of the reclassification will be added as a new style with name", "fre":"Le r�sultat du reclassement sera ajout� en tant que nouveau style avec le nom"},
    LayerForExpression: {"cat":"Capa per a la f�rmula", "spa":"Capa para la f�rmula", "eng":"Layer for the expression", "fre":"Couche pour l'expression"},
    WriteInExpression: {"cat":"Escriu a la f�rmula", "spa":"Escribe en f�rmula", "eng":"Write in expression", "fre":"Ecrire � la formule"},
    OperatorsFunctionsForExpression: {"cat":"Operadors i funcions per a la f�rmula", "spa":"Operadores y funciones para la f�rmula", "eng":"Operators and functions for the expression", "fre":"Op�rateurs et fonctions pour l'expression"},
    ResultOfSelectionAddedAsNewLayerStyleWithName: {"cat":"El resultat de la selecci� ser� afegit com a una capa/estil nou de nom", "spa":"El resultado de la selecci�n ser� a�adido como una capa/estilo nuevo de nombre", "eng":"The result of the selection will be added as a new layer/style with name", "fre":"Le r�sultat de la s�lection sera ajout� en tant que nouveau couche/style avec le nom"},
    AddGeometricOverlayLayerBetweenTwoCategoricalLayers: {"cat":"Afegir una capa de superposici� geom�trica entre dues capes categ�riques", "spa":"A�adir una capa de superposici�n geom�trica entre dos capas categ�ricas", "eng":"Add a geometric overlay layer between two categorical layers", "fre":"Ajouter un couche de superposition g�om�trique entre deux couche cat�goriels"},
    AddGeometricOverlay: {"cat":"Afegir superposici� geom�trica", "spa":"A�adir superposici�n geom�trica", "eng":"Add geometric overlay", "fre":"Ajouter une superposition g�om�trique"},
    AddStatisticalFieldsToCategoricalLayerFromAnotherLayer: {"cat":"Afegir camps estad�stics a una capa categ�rica des d'una altra capa (de qualsevol tipus)", "spa":"A�ada capa combinada a partir de dues capas existentes", "eng":"Add statistical fields to a categorical layer from another layer (of any type)", "fre":"Ajouter des champs statistiques � une couche cat�gorielle � partir d'une autre couche (de tout type)"},
    AddStatisticalFields: {"cat":"Afegir camps estad�scs", "spa":"A�adir campos estad�sticos", "eng":"Add statistical fields", "fre":"Ajouter des champs statistiques"},
    NewLayerFromServer:{"cat":"Capa nova de servidor", "spa":"Capa nueva de servidor:", "eng":"New layer from server", "fre":"Nouvelle couche du serveur"},
    SpecifyServerURL: {"cat":"Especifica l'adre�a URL del servidor", "spa":"Especifique la direcci�n URL del servidor", "eng":"Specify the server URL", "fre":"Sp�cifiez l'adresse URL du serveur"},
    orChooseOnFromServiceList: {"cat":"o Seleccciona'n un de la llista de serveis", "spa":"o Escoja uno de la lista de servicios", "eng":"or Choose one from service list", "fre":"ou s�lectionnez un des services de la liste"},
		ofAddingLayerToBrowser: {"cat":"d'afegir capes al navegador", "spa":"de a�adir capas al navegador", "eng":"of adding a layer to browser", "fre":"pour ajouter des couches au navigateur"},
		toMakeCalculationsOfLayers: {"cat":"per fer c�lculs de capes", "spa":"para hacer c�lculos de capas", "eng":"to make calculations of layers", "fre":"pour r�aliser de calculs des couches"},
		toCombineLayers: {"cat":"per combinar capes", "spa":"para combinar capas", "eng":"to combine layers", "fre":"pour correspondre des couches"},
		toReclassifyLayer: {"cat":"per reclassificar la capa", "spa":"para reclasificar la capa", "eng":"to reclassify the layer", "fre":"pour reclassifier de couche"},
    WriteValueInExpression: {"cat":"Escriu valor a la f�rmula", "spa":"Escribe valor en f�rmula", "eng":"Write value in expression", "fre":"�crire une valeur dans l'expression"},
    RecommendedRangeOfValues: {"cat":"Interval de valors recomenats", "spa":"Intervalo de valores recomendados", "eng":"Recommended range of values", "fre":"Intervalle des valeurs recommand�es"},
    anyValue: {"cat":"qualsevol valor", "spa":"cualquier valor", "eng":"any value", "fre":"toute valeur"},
    constant: {"cat":"constant", "spa":"constante", "eng":"constant", "fre":"constant"},
    SelectedInLayer: {"cat":"Seleccionada a la capa", "spa":"Seleccionada en la capa", "eng":"Selected in the layer", "fre":"S�lectionn� dans la couche"},
    byDefault: {"cat":"per defecte","spa":"por defecto","eng":"by default", "fre":"par d�faut"},
		OnlyShowValuesOfLayer: {"cat":"Mostra nom�s els valors de la capa", "spa":"Muestra solo los valores de la capa", "eng":"Only show the values of the layer", "fre":"Afficher uniquement les valeurs de la couche"},
    ofTheStyle: {"cat":"de l'estil", "spa":"del estil", "eng":"of the style", "fre":"du style"},
    ofTheField: {"cat":"del camp", "spa":"del campo", "eng":"of the field", "fre":"du champ"},
		thatConformFollowingConditions: {"cat":"que complexien les condicions seg�ents", "spa":"que cumplen las siguientes condiciones", "eng":"that conform the following conditions", "fre":"qui se conforment aux conditions suivantes"},
    NexusWithNextCondition: {"cat":"Nexe amb la seg�ent condici�", "spa":"Nexo con la siguiente condici�n", "eng":"Nexus with next condition", "fre":"Nexus avec la prochaine condition"},
    none: {"cat":"cap", "spa":"ninguno", "eng":"none", "fre":"aucun"},
    _and_: {"cat": " i ", "spa": " y ", "eng": " and ", "fre": " et "},
    and: {"cat": "i", "spa": "y", "eng": "and", "fre": "et"},
    or: {"cat":"o", "spa":"o", "eng":"or", "fre":"ou"},
    TheResultOfSelectionAddedAsNewStyleWithName: {"cat":"El resultat de la selecci� ser� afegit com a un estil nou de nom", "spa":"El resultado de la selecci�n ser� a�adido como un estilo nuevo de nombre", "eng":"The result of the selection will be added as a new style with name", "fre":"Le r�sultat de la s�lection sera ajout� en tant que nouveau style avec le nom"},
		ofQueryByAttributeSelectionByCondition: {"cat":"de selecci� per condici�","spa":"de selecci�n por condici�n", "eng":"of query by attribute selection by condition", "fre":" pour s�lection par condition"},
		ofRGBCombination: {"cat":"de combinaci� RGB", "spa":"de combinaci�n RGB", "eng":"of RGB combination", "fre":"pour combinaison RVB"},
    SelectThreeComponentsOfLayer: {"cat":"Sel�lecciona les 3 components de la capa", "spa":"Selecciona las 3 componentes de la capa", "eng":"Select the three components of the layer", "fre":"S�lectionnez les trois composants de la couche"},
    Component: {"cat":"Component", "spa":"Componente", "eng":"Component", "fre":"Composant"},
    RGBCombinationAddedAsNewStyleWithName: {"cat":"La combinaci� RGB ser� afegida com a un estil nou de nom", "spa":"La combinaci�n RGB ser� a�adida como un estilo nuevo de nombre", "eng":"The RGB combination will be added as a new style with name", "fre":"La combinaison RVB sera ajout� en tant que nouveau style avec le nom"},
		SelectionStatisticValue: {"cat":"Selecci� del valor estad�stic", "spa":"Selecci�n del valor estad�stico","eng":"Selection of statistic value", "fre":"S�lection de la valeur statistique"},
		StatisticalValueToDisplayForLayer: {"cat":"Valor estad�stic a mostrar per la capa", "spa":"Valor estad�stico para mostrar para la capa", "eng":"Statistical value to display for the layer", "fre":"Valeur statistique � afficher pour la couche"},
    StatisticalValueOf: {"cat":"Valor estad�stic de", "spa":"Valor estad�stico de", "eng":"Statistical value of", "fre":"Valeur statistique des"},
    Ascending: {"cat":"Ascendent", "spa":"Ascendiente", "eng":"Ascending", "fre":"Ascendant"},
    Descending: {"cat":"Descendent", "spa":"Descendiente", "eng":"Descending", "fre":"Descendant"},
    CannotEditStyleNeverVisualized: {"cat":"No es pot editar un estil no visualitzat", "spa":"No es puede editar un estilo no visualizado", "eng":"You cannot edit a style never visualized", "fre":"Vous ne pouvez pas �diter un style jamais visualis�"},
    StyleLayer: {"cat":"Estil de la capa", "spa":"Estilo de la capa", "eng":"Style of the layer", "fre":"Style de la couche"},
    ValueForStretchingColor: {"cat":"Valors per l'estirament de color", "spa":"Valores para el estiramiento de color", "eng":"Value for stretching of color", "fre":"Valeur pour l'�tirement de la couleur"},
    computed: {"cat":"calculat", "spa":"calculado", "eng":"computed", "fre":"calcul�"},
    Adopt: {"cat":"Adoptar", "spa":"Adoptar", "eng":"Adopt", "fre":"Adopter"},
    SunPositionForComputationIllumination: {"cat":"Posici� del sol pel c�lcul de la il�luminaci�", "spa":"Posici� del sol para el c�lculo de la iluminaci�n", "eng":"Sun position for the computation of the illumination", "fre":"Position du soleil par le calcul de l'�clairement"},
    Azimuth: {"cat":"Azimut", "spa":"Azimut", "eng":"Azimuth", "fre":"Azimut"},
    originNorthNorthClockwiseDegress: {"cat":"origen al nord nord i en sentit horari (en graus)", "spa":"origen en el norte norte y en el sentido de las agujas del reloj (en grados)", "eng":"origin north north and clockwise (in degress)", "fre":"origine au nord nord et dans le sens des aiguilles d'une montre (en degr�s)"},
		Elevation: {"cat":"Elevaci�", "spa":"Elevaci�n", "eng":"Elevation", "fre":"�l�vation"},
    fromGroundDegress: {"cat":"des del terra (en graus)", "spa":"desde el suelo (en grados)", "eng":"from the ground (in degress)", "fre":"� partir du sol (en degr�s)"},
    ReliefExaggerationFactor: {"cat":"Factor d'exageraci� del relleu", "spa":"Factor de exageraci�n del relieve", "eng":"Relief exaggeration factor", "fre":"Facteur d'exag�ration du relief"},
    Greyscale: {"cat": "Escala de grisos", "spa": "Escala de grises", "eng": "Greyscale", "fre": "Niveaux de gris"},
    IncorrectAzimuth: {"cat":"Azimut incorrecte. Hauria de ser un n�mero entre 0 i 360. Aplicant el valor per defecte", "spa":"Azimut incorrecto. Deber�a ser un n�mero entre 0 y 360. Aplicando el valor por defecto", "eng":"Incorrect azimuth. It should be a number between 0 and 360. Applying the default value", "fre":"Azimut incorrect. Il doit s'agir d'un nombre compris entre 0 et 360. Application de la valeur par d�faut"},
    IncorrectElevation:{"cat":"Elevaci� incorrecta. Hauria de ser un n�mero entre 0 i 90. Aplicant el valor per defecte", "spa":"Elevaci�n incorrecta. Deber�a ser un n�mero entre 0 y 90. Aplicando el valor por defecto", "eng":"Incorrect elevation. It should be a number between 0 and 90. Applying the default value", "fre":"�l�vation incorrect. Il doit s'agir d'un nombre compris entre 0 et 90. Application de la valeur par d�faut"},
    IncorrectReliefExaggerationFactor: {"cat":"Factor d'exageraci� del relleu incorrecte. Hauria de ser un n�mero major de 0.0001. Aplicant el valor per defecte", "spa":"Factor de exageraci�n del relieve incorrecta. Deber�a ser un n�mero mayor que 0.0001. Aplicando el valor por defecto", "eng":"Incorrect relief exaggeration factor. It should be a number bigger than 0.0001. Applying the default value", "fre":"Facteur d'exag�ration du relief incorrect. Il doit s'agir d'un nombre sup�rieur � 0,0001. Application de la valeur par d�faut"},
		ofModifingName: {"cat":"de modificar el nom", "spa":"de modificar el nombre", "eng":"of modifing the name", "fre":"pour modifier le nom"},
    LayerNameInLegend: {"cat":"Nom de la capa a la llegenda", "spa":"Nombre de la capa en la leyenda", "eng":"Name of the layer in the legend", "fre":"Nom de la couche dans la l�gende"},
		forShowingLinageInformation: {"cat":"de mostrar la informaci� del llinatge", "spa":"de mostrar la informaci�n del linaje", "eng":"for showing the linage information", "fre":"pour afficher les informations de lignage"},
		forShowingQualityInformation: {"cat":"de mostrar la informaci� de qualitat", "spa":"de mostrar la informaci�n de calidad", "eng":"for showing the quality information", "fre":"pour afficher l'information de qualit�"},
		ofUserFeedback: {"cat":"de valoracions dels usuaris", "spa":"de valoraciones de los usuarios", "eng":"of user feedback", "fre":"pour la r�troaction de l'utilisateur"},
	_withStatisticOf_: {"cat":" amb estadistics de ","spa":" con estad�sticos de ","eng":" with statistic of ", "fre":" avec statistiques des "},
		StatisticalDescriptorDisplayNeedSelected: {"cat":"Cal sel�leccionar el descriptor estad�stic a mostrar per la capa", "spa":"Debe seleccionar el descriptor estad�stico para mostrar para la capa", "eng":"The statistical descriptor to display for the layer needs to be selected", "fre":"Le descripteur statistique � afficher pour la couche doit �tre s�lectionn�"}
	},
  storymap:{
		SelectStory: {"cat":"Selecciona una hist�ria", "spa":"Selecciona una historia", "eng":"Select a story", "fre":"S�lectionnez une histoire"},
		WrongFormat_mm_center_Parameter: {"cat":"Format del par�metre mm-center incorrecte", "spa":"Formato del parametro mm-center icnorrecto", "eng":"Wrong format in mm-center parameter", "fre":"Format incorrect dans le param�tre mm-center"},
		ParameterValueFoundIs: {"cat":"El valor del par�metre indicat �s:", "spa":"El valor del par�metro indicado es:", "eng":"The parameter value found is:", "fre":"La valeur de param�tre trouv�e est:"},
		WrongFormat_mm_time_Parameter: {"cat":"Format del par�metre mm-time incorrecte", "spa":"Formato del par�metro mm-time icnorrecto", "eng":"Wrong format in mm-time parameter", "fre":"Format incorrect dans le param�tre mm-time"}
	},
	tresD:{
		Dynamic: {"cat":"Din�mic", "spa":"Din�mico", "eng":"Dynamic", "fre":"Dynamique"},
		Disabled: {"cat":"Desactivat (capa o estil no visible)", "spa":"Desactivado (capa o estil no visible)", "eng":"Disabled (layer or style not visible)", "fre":"D�sactiv� (couche or style non visible)"},
		Graphic_3D: {"cat":"Gr�fic 3D", "spa":"Gr�fico 3D", "eng":"3D Graphic", "fre":"Diagramme 3D"},
		VerticalScale: {"cat":"Escala vertical", "spa":"Escala vertical", "eng":"Vertical scale", "fre":"�chelle verticale"},
  },
	cntxmenu2:{
		statistics:
		{
			display:
			{
				SampleMessage: {"cat":"Cal sel�leccionar el descriptor estad�stic a mostrar per la capa", "spa":"Debe seleccionar el descriptor estad�stico para mostrar para la capa", "eng":"The statistical descriptor to display for the layer needs to be selected", "fre":"Le descripteur statistique � afficher pour la couche doit �tre s�lectionn�"}
			}
		}
	}
}
