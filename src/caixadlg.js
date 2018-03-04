/* 
    This file is part of MiraMon Map Browser.
    MiraMon Map Browser is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Foobar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with MiraMon Map Browser.  If not, see "http://www.gnu.org/licenses/".

    Copyright 2001, 2016 Xavier Pons

    Aquest codi JavaScript ha estat realitzat per Joan Mas� Pau 
    (joan maso at uab cat) i Nuria Juli� (n julia at creaf uab cat)
    dins del grup de MiraMon. MiraMon �s un projecte del Centre
    de recerca i aplicacions forestals (CREAF) que elabora programari de 
    Sistema d'Informaci� Geogr�fica i de Teledetecci� per a la 
    visualitzaci�, consulta, edici� i an�lisi de mapes r�sters i 
    vectorials. Elabora programari d'escriptori i tamb� servidors i clients 
    per Internet. No tots aquests productes s�n gratu�ts o de codi obert. 
    En particular, el Navegador de Mapes del MiraMon (client per Internet) 
    es distribueix sota els termes de la llic�ncia "GNU General Public 
    License". Es pot actualitzar des de www.creaf.uab.cat/miramon/mmn
*/

/*createMiniWinLayer("prova de caixa que es mou", //main context
				   "prova de caixa que es mou",  //titles
				   400,250,550,550, //left, topo, width, height
				   "#00CCCC", //bar colour
				   "#FFFFFF", //main colour
				   null,null,null,"tanca_consulta.gif",null,null,1,false,null,true);*/

createFinestraLayer(this, "executarProces", {"cat":"Executar un proces (WPS)", "spa":"Ejecutar un proceso (WPS)", "eng": "Execute a process (WPS)", "fre":"Ex�cuter un processus (WPS)"}, boto_tancar, 400, 250, 550, 550, "nWSeCR", "ara_no", false, null, null);
createLayer(this, "menuContextualCapa", 277, 168, 110, 140, "wC", "no", false, null, null);  //L'alt real es controla des de la funci� OmpleLayerContextMenuCapa i l'ample real des de l'estil MenuContextualCapa 
createFinestraLayer(this, "afegirCapa", {"cat":"Afegir capa al navegador", "spa":"A�adir capa al navegador", "eng": "Add layer to browser", "fre":"Rajouter couche au navigateur"}, boto_tancar, 420, 150, 520, 700, "nWSeC", "ara_no", false, null, null);
createFinestraLayer(this, "seleccioCondicional", {"cat":"Selecci� per condicions", "spa":"Selecci�n por condici�n", "eng": "Selection by condition", "fre":"S�lection par condition"}, boto_tancar, 320, 100, 490, 555, "NWCR", "ara_no", false, null, null);
createFinestraLayer(this, "combinacioRGB", {"cat":"Combinaci� RGB", "spa":"Combinaci�n RGB", "eng":"RGB combination", "fre":"Combinaison RVB"}, boto_tancar, 220, 90, 430, 275, "NwCR", "ara_no", false, null, null);
createFinestraLayer(this, "editaEstil", {"cat":"Edita estil", "spa":"Editar estilo", "eng":"Edit style", "fre":"Modifier le style"}, boto_tancar, 240, 110, 430, 275, "NwCR", "ara_no", false, null, null);
createFinestraLayer(this, "anarCoord", {"cat":"Anar a coordenada", "spa":"Ir a coordenada", "eng": "Go to coordinate","fre": "Aller � la coordonn�e"}, boto_tancar, 297, 298, 250, 130, "NwCR", "no", false, null, null);
createFinestraLayer(this, "multi_consulta",{"cat":"Consulta","spa": "Consulta", "eng": "Query", "fre":"Recherche"}, boto_tancar, 1, 243, 243, 661, "nWSe", "ara_no", false, null, null);
createFinestraLayer(this, "param", {"cat":"Par�metres", "spa":"Par�metros", "eng": "Parameters","fre": "Parameters"}, boto_tancar, 277, 200, 480, 320, "NwCR", "no", false, null, null);
createFinestraLayer(this, "download", {"cat":"Desc�rrega de capes", "spa":"Descarga de capas", "eng":"Layer download", "fre":"T�l�charger des couches"}, boto_tancar, 190, 120, 400, 360, "NwCR", "no", false, null, null);
createFinestraLayer(this, "video", {"cat":"V�deo", "spa":"V�deo", "eng":"Video", "fre":"Vid�o"}, boto_tancar, 20, 1, 900, 610, "NWCR", "no", false, null, null);
createFinestraLayer(this, "consola", {"cat":"Consola de peticions", "spa":"Consola de peticiones", "eng": "Request console","fre": "Console de demandes"}, boto_tancar, 277, 220, 500, 300, "Nw", "ara_no", false, null, null);
createFinestraLayer(this, "enllac", {"cat":"Obrir o desar el contexte","spa":"Abrir o guardar el contexto","eng": "Open or save the context"}, boto_tancar, 650, 165, 450, 200, "NwCR", "ara_no", false, null, null);
createFinestraLayer(this, "enllacWMS", {"cat":"Enlla�os als servidors WMS del navegador", "spa":"Enlaces a los servidors WMS del navegador","eng": "Links to WMS", "fre":"Liens aux serveurs WMS du navigateur"}, boto_tancar, 650, 165, 400, 120, "NwCR", "ara_no", false, null, null);
