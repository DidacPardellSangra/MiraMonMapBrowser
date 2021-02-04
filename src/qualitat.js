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

var QualityML=null;
var ArrelURLQualityML="http://www.qualityml.org/";


// Funciona tant per capa com per capa_digi
function AfegeixQualitatACapa(capa, quality)
{
	if (!capa.metadades)
		capa.metadades={};
	if (!capa.metadades.quality)
		capa.metadades.quality=[];
	return capa.metadades.quality[capa.metadades.quality.length]=quality;
}

function FinestraMostraQualitatCapa(elem, capa, i_estil)
{
	if (!QualityML)
	{
		loadJSON("http://www.qualityml.org/qualityml.json",
				// "qualityml.json",
			function(quality_ml, extra_param) { 
				QualityML=quality_ml;
				MostraQualitatCapa(extra_param.elem, extra_param.capa, extra_param.i_estil);
			},
			function(xhr) { alert(xhr); },
			{elem:elem, capa:capa, i_estil: i_estil});
	}
	else
		MostraQualitatCapa(elem, capa, i_estil);
}

function DonaIndexIndicatorQualityML(id)
{
	for (var i=0; i<QualityML.indicator.length; i++)
	{
		if (QualityML.indicator[i].id==id)
			return i;
	}
	return -1;
}

function MostraQualitatCapa(elem, capa, i_estil)
{
	contentLayer(elem, DonaCadenaMostraQualitatCapa(capa, i_estil));
}

function DesplegaOPlegaIFramaQualityML(nom)
{
	if (document.getElementById(nom+"iframe").style.display=="none")
	{
		document.getElementById(nom+"iframe").style.display="inline";
		document.getElementById(nom+"img").src=AfegeixAdrecaBaseSRC("boto_contract.png");
	}
	else
	{
		document.getElementById(nom+"iframe").style.display="none";
		document.getElementById(nom+"img").src=AfegeixAdrecaBaseSRC("boto_expand.png");
	}
}

function DonaCadenaBotoExpandQualitatCapa(i_q, i_r, version, concept, i, id_qml)
{
var cdns=[], nom="MostraQualitatCapa_"+i_q+"_"+i_r+"_"+concept+"_"+i+"_";
	cdns.push(" <img src=\"", 
		 AfegeixAdrecaBaseSRC("boto_expand.png"), "\" id=\"",nom,"img\" ",
		 "alt=\"", DonaCadenaLang({"cat":"m�s info", "spa":"m�s info", "eng":"more info","fre":"plus d'info"}) , "\" ",
		 "title=\"",DonaCadenaLang({"cat":"m�s info", "spa":"m�s info", "eng":"more info","fre":"plus d'info"}), "\" ",
		 "onClick='DesplegaOPlegaIFramaQualityML(\"",nom,"\")'\"><iframe src=\"",ArrelURLQualityML, version, "/", concept,"/", id_qml, "\" id=\"",nom,"iframe\" style=\"display: none\" width=\"98%\" height=\"180\" scrolling=\"auto\"></iframe>");
	return cdns.join("");
}

function DonaCadenaValorsComLlistaQualitatCapa(values)
{
var cdns=[];
	if (values)
	{
		if (values.list && values.list.length)
		{
			cdns.push("&nbsp;&nbsp;<b>Value: </b>", values.list[0]);
			for (var i=1; i<values.list.length; i++)
				cdns.push(", ", values.list[i]);
		}
		if (values.units)
			cdns.push(" (", values.units, ")");
		cdns.push("<br/>");
	}
	return cdns.join("");
}

function DonaCadenaParamQualitatCapa(param)
{
var cdns=[];
	if (param)
	{
		for (var i=0; i<param.length; i++)
			cdns.push("&nbsp;&nbsp;<b>", param[i].name, ":</b> ", param[i].value, "<br/>");
	}
	return cdns.join("");
}

function DonaCadenaMostraQualitatCapa(capa, i_estil)
{
var quality;
var i_indicator, cdns=[];

	if (i_estil==-1)
		quality=capa.metadades.quality;
	else
		quality=capa.estil[i_estil].metadades.quality;
    cdns.push("<form name=\"QualitatCapa\" onSubmit=\"return false;\">");
	cdns.push("<div id=\"LayerQualitatCapa\" class=\"Verdana11px\" style=\"position:absolute;left:10px;top:10px;width:95%\">",
			DonaCadenaLang({"cat":"Qualitat de la capa", "spa":"Calidad de la capa", "eng":"Quality of the layer", "fre":"Qualit� de la couche"}), " \"", 
			(DonaCadena(capa.DescLlegenda) ? DonaCadena(capa.DescLlegenda): capa.nom));
	if (i_estil!=-1)
		cdns.push(", ", DonaCadena(capa.estil[i_estil].desc));
	cdns.push("\"<br/>");
	
	for (var i_q=0; i_q<quality.length; i_q++)
	{
		i_indicator=DonaIndexIndicatorQualityML(quality[i_q].indicator);
		cdns.push("<fieldset><legend>", 
			((i_indicator==-1) ? quality[i_q].indicator: DonaCadena(QualityML.indicator[i_indicator].name)),
			":</legend>");
		if (i_indicator!=-1)
			cdns.push(DonaCadena(QualityML.indicator[i_indicator].desc), "<br/>");
		if (quality[i_q].scope && quality[i_q].scope.env && quality[i_q].scope.env.EnvCRS)
		{
			var env=quality[i_q].scope.env.EnvCRS, decimals;
			if (DonaUnitatsCoordenadesProj(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS)=="m" && DonaUnitatsCoordenadesProj(quality[i_q].scope.env.CRS)=="�")
				decimals=ParamCtrl.NDecimalsCoordXY+4;
			else if (DonaUnitatsCoordenadesProj(quality[i_q].scope.env.CRS)=="m" && DonaUnitatsCoordenadesProj(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS)=="�")
				decimals=ParamCtrl.NDecimalsCoordXY-4;
			else
				decimals=ParamCtrl.NDecimalsCoordXY;
			cdns.push("<b>Scope:</b> Dataset fragment of this area: x=[", OKStrOfNe(env.MinX, decimals), ",", OKStrOfNe(env.MaxX, decimals), "], y=[", OKStrOfNe(env.MinY, decimals), ",", OKStrOfNe(env.MaxY, decimals), "] ");
			if (quality[i_q].scope.env.CRS.toUpperCase()==ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS.toUpperCase())
				cdns.push("<input type=\"button\" class=\"Verdana11px\" value=\"",				
				  	DonaCadenaLang({"cat":"Anar-hi", "spa":"Ir", "eng":"Go to","fre":"Aller �"}), 
					"\" onClick='PortamAAmbit(",JSON.stringify(env),")' />");
			else
				cdns.push("(CRS: ", DonaDescripcioCRS(quality[i_q].scope.env.CRS), ")");
			cdns.push("<br/>");
		}
		if (quality[i_q].statement)
			cdns.push("<b>Statement:</b> ", DonaCadena(quality[i_q].statement), "<br/>");
		if (quality[i_q].result)
		{
			for (var i_r=0; i_r<quality[i_q].result.length; i_r++)
			{	
				if (quality[i_q].result.length>1)
					cdns.push("<fieldset>");
				if (quality[i_q].result[i_r].qualityml)
				{
					var qualityml=quality[i_q].result[i_r].qualityml;
					var version=(qualityml.version) ? qualityml.version : "1.0";
					if (qualityml.measure)
					{
						cdns.push("<b>Measure:</b> ", qualityml.measure.name, DonaCadenaBotoExpandQualitatCapa(i_q, i_r, version, "measure", 0, qualityml.measure.name), "<br/>",
									DonaCadenaParamQualitatCapa(qualityml.measure.param));
					}	
					if (qualityml.domain)
					{
						for (var i_d=0; i_d<qualityml.domain.length; i_d++)
						{
							cdns.push("<b>Domain:</b> ", qualityml.domain[i_d].name, DonaCadenaBotoExpandQualitatCapa(i_q, i_r, version, "domain", i_d, qualityml.domain[i_d].name), "<br/>", 
									DonaCadenaParamQualitatCapa(qualityml.domain[i_d].param), 
									DonaCadenaValorsComLlistaQualitatCapa(qualityml.domain[i_d].values));
						}
					}	
					if (qualityml.metrics)
					{
						for (var i_m=0; i_m<qualityml.metrics.length; i_m++)
						{
							cdns.push("<b>Metrics:</b> ", qualityml.metrics[i_m].name, DonaCadenaBotoExpandQualitatCapa(i_q, i_r, version, "metrics", i_m, qualityml.metrics[i_m].name), "<br/>", 
									DonaCadenaParamQualitatCapa(qualityml.metrics[i_m].param), 
									DonaCadenaValorsComLlistaQualitatCapa(qualityml.metrics[i_m].values));
						}
					}	
				}
				else if (quality[i_q].result[i_r].values)
					cdns.push(DonaCadenaValorsComLlistaQualitatCapa(quality[i_q].result[i_r].values));
				if (quality[i_q].result.length>1)
					cdns.push("</fieldset>");
			}
		}
		cdns.push("</fieldset>");
	}
	cdns.push("</div></form>");
	return cdns.join("");
}

function DonaCodeComponentBasatEnValorParam(valor)
{
	var i, s="";
	
	for (i=0; i<valor.param.length; i++)
	{
		if (valor.param[i].clau.nom)
		{
			s+=valor.param[i].clau.nom;
			if (valor.param[i].valor.nom)
				s+="_" + valor.param[i].valor.nom;		
		}
		else
		{
			if (valor.param[i].valor.nom)
				s+=valor.param[i].valor.nom;
		}		
		if (i!=(valor.param.length-1))
			s+="_";
	}
	return s;	
}

function DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, i_component, descriptiu)
{
	var s="";
		
	if (typeof capa.estil[i_estil].component[i_component].i_valor !== "undefined") //si tinc i_valor (que pot valdre 0)
	{
		if (descriptiu)
			s=DonaCodeComponentBasatEnValorParam(capa.valors[capa.estil[i_estil].component[i_component].i_valor]);
		else
			s="v[" + capa.estil[i_estil].component[i_component].i_valor + "])";
	}	
	else if (capa.estil[i_estil].component[i_component].FormulaConsulta)
	{
		if (descriptiu)
		{	//fins que obrim la porta estem segurs que tots els v d'aqui son de la mateixa capa
			var fragment, cadena, inici, final, nou_valor="", error=false;

			fragment=capa.estil[i_estil].component[i_component].FormulaConsulta;
			
			while ((inici=fragment.indexOf("v["))!=-1)
			{
				//busco una clau de tancar
				final=fragment.indexOf("]");
				if (final==-1)
				{
					alert("Character 'v[' without ']' in 'FormulaConsulta' in capa " + capa.desc ? capa.desc : capa.nom + " estil " + i_estil);
					error=true;
					break;
				}
				nou_valor+=fragment.substring(0, inici);
				cadena=fragment.substring(inici+2, final); //-> inici+2 perqu� no vull ni "v[" ni "]"
				//aqu� "cadena" cont� el i_valor que vull				
				var index = cadena.match(/\d+/g).map(Number);
				nou_valor+=DonaCodeComponentBasatEnValorParam(capa.valors[index]);
					
				fragment=fragment.substring(final+1, fragment.length);
			}			
			nou_valor+=fragment; //el que queda		
			nou_valor=nou_valor.replace(/ /g, "");			
			if (!error)
				s=nou_valor;			
		}	
		else	
		{
			s=capa.estil[i_estil].component[i_component].FormulaConsulta;
			s=s.replace(/ /g, "");		
		}
	}	
	return s;
}

var MAX_LEN_IDENTIFICADOR_CAPA_O_ESTIL=254;

function DonaCodeCapaEstilFeedback(i_capa, i_estil)
{
var capa=ParamCtrl.capa[i_capa];
var s=capa.nom;
	
	if (i_estil==-1)
		return s;

	//estil antic -> return capa.nom + (i_estil==-1 ? "": "_" + (capa.estil[i_estil].desc ? capa.estil[i_estil].desc : DonaCadena(capa.estil[i_estil].desc)));
	
	if (capa.estil[i_estil].component.length==1)
	{	//pot ser un i_valor o un FormulaConsulta
		if (typeof capa.estil[i_estil].component[0].i_valor !== "undefined") //si no quan i_valor valia 0 no entrava!
		{			
			s+="_VALUE(" + DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, 0, true) + ")";
			if (s.length < MAX_LEN_IDENTIFICADOR_CAPA_O_ESTIL)	
				return s;

			s+="_VALUE(" + DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, 0, false) + ")";
				return s;
		}
		else if (capa.estil[i_estil].component[0].FormulaConsulta)
		{
			var s2=null, i_capes;
			if (!capa.estil[i_estil].component[0].calcul)	//per indexos predefinits el "calcul" no existeix, per� puc entrar perqu� segur que la FormulaConsulta nom�s t� v[] d'aquesta capa.
				//s2=capa.estil[i_estil].component[0].FormulaConsulta;		
				s2=DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, 0, true);							
			else
			{
				i_capes=DonaIndexosACapesDeCalcul(capa.estil[i_estil].component[0].calcul, i_capa);
				if (i_capes.length==1) //per indexos calculats per l'usuari, el "calcul" s� que existeix, i amb el darrer if he comprovat que en aquest c�lcul nom�s entren bandes d'aquesta capa (�s a dir que i_capes==1)
					//s2=capa.estil[i_estil].component[0].FormulaConsulta;		
					s2=DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, 0, true);					
			}
			
			if (s2) 
			{	//ho fem aix� per unificar la descripci� a un sol, lloc, encara que vinguem de dos casos diferents a dalt
					s+="_CALC(" + s2 + ")";				
					if (s.length < MAX_LEN_IDENTIFICADOR_CAPA_O_ESTIL)	
						return s;
						
					s+="_CALC(" + DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, 0, false) + ")";				
					return s;
			}
			
			//aqu� arribo nom�s si tinc calcul i quan l'analitzo em diu que hi ha capes "externes a la pr�pia" implicades
			alert(DonaCadenaLang({"cat": "En desenvolupament: definici� complexa de l'estil que no permet actualment crear el seu identificador ni, per tant, crear valoracions sobre el mateix.", 
				"spa": "En desarollo: definici�n compleja del estilo que no permite crear actualmente su identificador ni, por tanto, crear valoraciones sobre el mismo.", 
				"eng": "To be developed: complex definition of the style that does not allow to create its identifier nor, therefore, to create feedbacks about it.", 
				"fre": "� d�velopper: d�finition complexe du style qui ne permet pas de cr�er son identifiant ni, par cons�quent, de cr�er des valorisations sur le m�me."}));
			return null; //si no s� donar identificador a l'estil, no deixo posar feedback sobre ell
			
		//nom�s arribo aqu� (i.e. no surto) si tinc 1 sol component per� aquest no t� ni i_valor ni FormulaConsulta
			
			/*notes sobre com fer aix�: 
			
			1/ La idea �s que si ara filtro espacialment amb una banda de la mateixa capa (p.ex per scl), a formula �s 
				"(v[12]!=11)?((v[10]-v[11])/(v[10]+v[11])):null"
			i a d'alt ja m'ha tornat i_capes=1 i ho he fet
			
			2/ si filtro amb una altra capa(pex), la idea �s que la formula diu
					"(v[        13                    ]!=11)?((v[10]-v[11])/(v[10]+v[11])):null"
			pero aquest v[13] s'ha creat pel programa i ha de ser substituit en primera inst�ncia per
					"(v[{\"i_capa\":228,\"i_valor\":0}]!=11)?((v[10]-v[11])/(v[10]+v[11])):null"
			per� com els �ndexs de capa son super vol�lits, realment haur� d'anar a alguna cosa tipus
				"(v[{\"servidor\":"http://maps-***.cgi",\"nom_capa\":"SwissNationalParkLULC",\"i_valor\":0}]!=11)?((v[10]-v[11])/(v[10]+v[11])):null"
			(el servidor al meu config.json pot ser "null" que vol dir el servidor_local que �s una variable global. si �es null puc no posar-lo pq s'entenc que la nom_capa :"SwissNationalParkLULC" �s al amteix servidor que la capa de la qual faig el FB/estil (�s a dir la que t� els v[10], etc). Si relament ve d0un lloc diferent, aleshores si ho poso
			o b�, en un exemple diferent usar el mapa usos nostres 2019 per a filtra espacial el SwissNationalParkSen2 de \"servidor\":"http://maps-***.cgi"
				"(v[{\"servidor\":"http://MCSC....***.cgi",\"nom_capa\":"MUSC_2019",\"i_valor\":0}]!=11)?((v[10]-v[11])/(v[10]+v[11])):null"
			
			"calcul": "({\"i_valor\":12}!=11)?(({\"i_capa\":232,\"i_valor\":10}-{\"i_capa\":232,\"i_valor\":11})/({\"i_capa\":232,\"i_valor\":10}+{\"i_capa\":232,\"i_valor\":11})):null",
						
			capa nova
			FormulaConsulta -> i_capes diferents -> similar a aaix� -> unic cas amb i_valor
			"(v[{\"nom_capa\":\"SwissNationalParkLULC\",\"i_valor\":0}]!=11)?((v[10]-v[11])/(v[10]+v[11])):null" per� amb NOMS CAPES DFE
						
			calcul sobre calcul no tinc nom de capa, per� no passa res pq les formules s'expandeixen*/
		}		
	}
	else //if (capa.estil[i_estil].component.length==3) //si tinc tres �s que �s RGB i per tant tres i_valor -> si per alguna no tinc i_valor, cosa te�ricament no possible ara, aquell no l'afegeixo i el Identificador quedar� "amb menys components"
	{	
		var i, s2;
		
		s2="_RGB(";		
		for (i=0; i<capa.estil[i_estil].component.length; i++)
		{
			s2+=DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, i, true);
			if (i!=(capa.estil[i_estil].component.length-1))
				s2+=",";
		}
		s2+=")";
		
		if ((s2.length + s.length) < MAX_LEN_IDENTIFICADOR_CAPA_O_ESTIL)	
			return s+s2;
		
		s2="_RGB(";		
		for (i=0; i<capa.estil[i_estil].component.length; i++)
		{
			s2+=DonaCodeUnComponentCapaEstilFeedback(capa, i_estil, i, false);
			if (i!=(capa.estil[i_estil].component.length-1))
				s2+=",";
		}
		s2+=")";
		return s+s2;
		/*if (capa.estil[i_estil].component[0].i_valor && capa.estil[i_estil].component[1].i_valor && capa.estil[i_estil].component[2].i_valor)
		{
			$$ per cada una de les tres usar el i_valor
			s+="_RGB(" + "v[" + capa.estil[i_estil].component[0].i_valor + "],"+ "v[" + capa.estil[i_estil].component[1].i_valor + "],"+ "v[" + capa.estil[i_estil].component[2].i_valor + "])";
			return s;
		}	*/	
		//�$� poter salvar aquest cas per si un dia volen fer RGB de formules?
	}
	
	/*Aqu� arribo si tinc 1 sol component per� aquest no t� ni i_valor ni FormulaConsulta; si tinc 3 components per� alguna no t� i_valor, 
	o b� si tinc un nombre de components diferent de 1 o de 3 no t� sentit
	
	-> codi per si un dia volem desar un ID com a llista dels N valors, un darrera l'altre
	var i;		
	for (i=0; i<capa.estil[i_estil].component.length; i++)
	{
		if (capa.estil[i_estil].component[i].i_valor)
			s+="_" + "v[" + capa.estil[i_estil].component[i].i_valor + "]";
	}*/
	alert(DonaCadenaLang({"cat": "Definici� inesperada de l'estil que no permet crear el seu identificador ni, per tant, crear valoracions sobre el mateix.", 
		"spa": "Definici�n inesperada del estilo que no permite crear su identificador ni, por tanto, crear valoraciones sobre el mismo.", 
		"eng": "Unexpected definition of the style that does not allow to create its identifier nor, therefore, to create feedbacks about it.", 
		"fre": "D�finition inattendue du style qui ne permet pas de cr�er son identifiant ni, par cons�quent, de cr�er des valorisations sur le m�me."}));
	return null; //si no s� donar identificador a l'estil, no deixo posar feedback sobre ell
}

function FinestraFeedbackCapa(elem, i_capa, i_estil)
{
var cdns=[], s;
var capa=ParamCtrl.capa[i_capa];

	cdns.push(DonaCadenaLang({"cat":"la capa", "spa":"la capa", "eng":"the layer", "fre":"la couche"}), 
				" \"", (DonaCadena(capa.DescLlegenda) ? DonaCadena(capa.DescLlegenda): capa.nom));
 	if (i_estil!=-1)
		cdns.push(", ", DonaCadena(capa.estil[i_estil].desc));
	cdns.push("\"");

	if (!(s=DonaCodeCapaEstilFeedback(i_capa, i_estil)))
	{
		TancaFinestraLayer('feedback');
		return;
	}
	
	/*if (s.search("Sentinel2Level2a")!=-1) //�s una Sentinel2
	{
		var targets=[{title: DonaCadena(capa.desc) + (i_estil==-1 ? "": ", " + DonaCadena(capa.estil[i_estil].desc)), code: s, codespace: DonaServidorCapa(capa), role: "primary"},
				{title: "Sentinel 2 L2A Collection", code: "Sentinel2Level2aCollection", codespace: "http://datacube.uab.cat/cgi-bin/ecopotential/miramon.cgi", role: "secondary"}];
			GUFShowFeedbackMultipleTargetsInHTMLDiv(elem, "LayerFeedbackCapa", cdns.join(""), targets, ParamCtrl.idioma);		
	}
	else*/
		GUFShowFeedbackInHTMLDiv(elem,
				"LayerFeedbackCapa", 
				cdns.join(""), 
				DonaCadena(capa.desc) + (i_estil==-1 ? "": ", " + DonaCadena(capa.estil[i_estil].desc)),  //desc, es pot haver canviat, per� no �s cr�tic
				s, //identificador unic 
				DonaServidorCapa(capa), 
				ParamCtrl.idioma);
}

function AdoptaEstil(params_function, guf)
{
var i_estil_nou, estil, capa;

	if (!guf)
	{
		alert(DonaCadenaLang({"cat": "Definici� inesperada de la valoraci�. No es pot importar l'estil.", 
		"spa": "Definici�n inesperada de la valoraci�n. No se puede importar el estilo.", 
		"eng": "Unexpected definition of the feedback item. The style cannot be imported.", 
		"fre": "D�finition inattendue du �l�ment de r�troaction. Le style ne peut pas �tre import�."}));
		TancaFinestraLayer('feedbackAmbEstils');
		return;
	}
	
	if (guf.usage.usage_descr.platform && guf.usage.usage_descr.platform==encodeURI(ToolsMMN) && 
			guf.usage.usage_descr.version && guf.usage.usage_descr.version==(VersioToolsMMN.Vers+"."+VersioToolsMMN.SubVers) &&
			guf.usage.usage_descr.schema && guf.usage.usage_descr.schema==config_schema_estil &&
			guf.usage.usage_descr.code!="")
	{
		//Crea un nou estil
		capa=ParamCtrl.capa[params_function.i_capa];
		i_estil_nou=capa.estil.length;
		capa.estil[capa.estil.length]=JSON.parse(guf.usage.usage_descr.code);
		estil=capa.estil[i_estil_nou];
	
		if (capa.visible=="ara_no")
			CanviaEstatCapa(i_capa, "visible");  //CreaLlegenda(); es fa a dins.
		else
			CreaLlegenda();
	
		//Defineix el nou estil com estil actiu
		CanviaEstilCapa(params_function.i_capa, i_estil_nou, false);		
	}
	else
	{
		alert(DonaCadenaLang({"cat": "Aquesta valoraci� no cont� una descripci� d'�s reproduible v�lida per a aquest navegador de mapas, versi� o esquema. No es pot importar l'estil.", 
		"spa": "Esta valoraci�n no contiene una descripci�n de uso reproducible v�lida para este navegador de mapas, versi�n o esquema. No se puede importar el estilo.", 
		"eng": "This feedback item does not contain a valid reproducible usage description for this web map browser, version or schema. The style cannot be imported.", 
		"fre": "Cet �l�ment de r�troaction ne contient pas de description d'utilisation reproductible valide pour ce navigateur de carte web, cette version ou ce sch�ma. Le style ne peut pas �tre import�."}));
	}
	TancaFinestraLayer('feedbackAmbEstils');
	return;
}

function FinestraFeedbackAmbEstilsCapa(elem, i_capa)
{
var cdns=[], s;
var capa=ParamCtrl.capa[i_capa];

	cdns.push(DonaCadenaLang({"cat":"la capa", "spa":"la capa", "eng":"the layer", "fre":"la couche"}), 
				" \"", (DonaCadena(capa.DescLlegenda) ? DonaCadena(capa.DescLlegenda): capa.nom));
	cdns.push("\"");

	if (!(s=DonaCodeCapaEstilFeedback(i_capa, -1)))
	{
		TancaFinestraLayer('feedbackAmbEstils');
		return;
	}
	
	GUFShowPreviousFeedbackWithReproducibleUsageInHTMLDiv(elem, "LayerFeedbackAmbEstilsCapa", s, DonaServidorCapa(capa), 
		{ru_platform: encodeURI(ToolsMMN), ru_version: VersioToolsMMN.Vers+"."+VersioToolsMMN.SubVers, ru_schema: encodeURIComponent(config_schema_estil)},
		ParamCtrl.idioma, "" /*access_token_type*/, "AdoptaEstil"/*callback_function*/, {i_capa: i_capa});
}

function CalculaValidessaTemporal(param)
{
var punt={}, capa_digi=ParamCtrl.capa[param.i_capa], n_valids=0, n=0, n_dins=0, data_obj, i_camp, camp;

	if (!capa_digi.objectes.features)
		return false;
		
	for (i_camp=0; i_camp<capa_digi.atributs.length; i_camp++)
	{
		if (capa_digi.atributs[i_camp].nom==param.atribut)
		{
			camp=capa_digi.atributs[i_camp];
			break;
		}
	}
	if (i_camp==capa_digi.atributs.length)
		return false;

	for (var i_obj=0; i_obj<capa_digi.objectes.features.length; i_obj++)
	{
		var feature=capa_digi.objectes.features[i_obj];
		DonaCoordenadaPuntCRSActual(punt, capa_digi.objectes.features[i_obj], capa_digi.CRSgeometry);
		if (!EsPuntDinsEnvolupant(punt, ParamInternCtrl.vista.EnvActual))
			continue;			
		n_dins++;		
		
		/* L'objecte ha de tenir data de mesura sino no ho puc avaluar
		if (typeof feature.properties["__om_time__"]==="undefined" ||
		    feature.properties.__om_time__=="" ||
			feature.properties.__om_time__==null)
			continue;*/
		if (typeof feature.properties[param.atribut]==="undefined" ||
			feature.properties[param.atribut]=="" ||
			feature.properties[param.atribut]==null)
			continue;

		n++;
		
		if (camp.format=="dd/mm/yyyy")
		{
			var dateParts = feature.properties[param.atribut].split("/");
			if (!dateParts || dateParts.length!=3)
				continue;
			data_obj=new Date(dateParts[2]+"-"+dateParts[1]+"-"+dateParts[0]);  //fet aix� pensa que el text �s hora UTC que �s el mateix que passa amb la lectura dels formularis
		}
		else
			data_obj=new Date(feature.properties[param.atribut]);
		if(data_obj>= param.data_ini && data_obj<=param.data_fi)
			n_valids++;
	}

	if (n==0)
	{
		alert(DonaCadenaLang({"cat": "No hi ha observacions amb valors v�lids per obtenir la v�lidessa temporal en aquesta �rea", 
					"spa": "No hay observaciones con valores v�lidos para obtener la validez temporal en esta �rea", 
					"eng": "There is no observations with valid values to obtain temporal validity in this area", 
					"fre": "Il n'y a pas d'observations avec des valeurs valides pour obtenir la validit� temporelle dans ce domaine"}));
		return false;
	}
	var quality={
		scope: ((n_dins==capa_digi.objectes.features.length) ? null : {env: {EnvCRS: JSON.parse(JSON.stringify(ParamInternCtrl.vista.EnvActual)), CRS: ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS}}),
		indicator: "DQ_TemporalValidity",
		statement: DonaCadenaLang({"cat": "La validessa temporal resumida est� basada en la comparaci� de la data de cada observaci� individual indicada a l'atribut",
					"spa": "La validez temporal est� basada en la comparaci�n de la fecha de cada observaci�n individual indicada por el atributo",
					"eng": "The temporal consistency is based on the comparison of the date of each individual observation as indicated in the field",
					"fre": "The temporal consistency is based on the comparison of the date of each individual observation as indicated in "}) + 
			" \'"+param.atribut+"\' "+
			DonaCadenaLang({"cat": "amb l'interval especificat.",
					"spa": "con el intervalo especificado.",
					"eng": "against the data interval specified.",
					"fre": "against the data interval specified."}) + 
			DonaCadenaLang({"cat": "Hi ha",
					"spa": "Hay",
					"eng": "There are",
					"fre": "Il y a"}) + 
			" " + (n_dins-n) + " "+
			DonaCadenaLang({"cat": "de",
					"spa": "de",
					"eng": "of",
					"fre": "de"}) + 
			" " +n_dins+ " " + 
			DonaCadenaLang({"cat": "que no tenen informaci� sobre la validessa.",
					"spa": "que no tienen informaci�n sobre la validez.",
					"eng": "that does not have validity information.",
					"fre": "qui n'ont pas d'informations de la validit�."}),
		result: [{
			qualityml: {
				version: "1.0",
				measure: {
					name: "ValueDomain"
				},
				domain: [{
					name: "Conformance",
					param: [
					{
						name: "InitialDate",
						value: param.data_ini.toJSON()
					},
					{
						name: "FinalDate",
						value: param.data_fi.toJSON()
					}],
					values:{
						list:[param.atribut]
					}
				}],
				metrics: [{
					name: "items",
					param: [{
						name: "count",
						value: n
					}],
					values: {
						list: [n_valids]
					}
				}]
			}
		}]
	};
	AfegeixQualitatACapa(capa_digi, quality);
	return true;
}

function CalculaValidessaPosicionalBBOX(param)
{
var punt={}, capa_digi=ParamCtrl.capa[param.i_capa], n_valids=0, n_dins=0;

	if (!capa_digi.objectes.features)
		return false;
		
	for (var i_obj=0; i_obj<capa_digi.objectes.features.length; i_obj++)
	{
		var feature=capa_digi.objectes.features[i_obj];
		DonaCoordenadaPuntCRSActual(punt, capa_digi.objectes.features[i_obj], capa_digi.CRSgeometry);
		if (!EsPuntDinsEnvolupant(punt, ParamInternCtrl.vista.EnvActual))
			continue;			
		n_dins++;		
		if (EsPuntDinsEnvolupant(punt, param.env))
			n_valids++;		
	}

	if (n_dins==0)
	{
		alert(DonaCadenaLang({"cat": "No hi ha observacions amb valors v�lids per obtenir la validessa de les posicions de les observacions en aquesta �rea", 
					"spa": "No hay observaciones con valores v�lidos para obtener la validez de las posiciones de las observaciones en esta �rea", 
					"eng": "There is no observations with valid values to obtain the validity of the positions of observations in this area", 
					"fre": "Il n'y a pas d'observations avec des valeurs valides pour obtenir la validit� des positions des observations dans ce domaine"}));
		return false;
	}

	var quality={
		scope: ((n_dins==capa_digi.objectes.features.length) ? null : {env: {EnvCRS: JSON.parse(JSON.stringify(ParamInternCtrl.vista.EnvActual)), CRS: ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS}}),
		indicator: "DQ_DomainConsistency",
		statement: DonaCadenaLang({"cat": "La consist�ncia del domini resumida est� basada en la localitzaci� de cada observaci� individual present en la vista actual comparada amb l'�mbit especificat.",
					"spa": "La consistencia del dominio resumida est� basada en la localizaci�n de cada observaci�n individual present en la vista actual comparada con el �mbito especificado.",
					"eng": "The domain consistency is based on the localization of each individual observation present in the actual view against the envelope specified.",
					"fre": "The domain consistency is based on the localization of each individual observation present in the actual view against the envelope specified."}) ,
		result: [{
			qualityml: {
				version: "1.0",
				measure: {
					name: "ValueDomain"
				},
				domain: [{
					name: "Conformance",
					param: [
					{
						name: "BBOX",
						value: JSON.stringify(param.env)
					}],
					values:{
						list:["coordinates"]
					}
				}],
				metrics: [{
					name: "items",
					param: [{
						name: "count",
						value: n_dins
					}],
					values: {
						list: [n_valids]
					}
				}]
			}
		}]
	};
	AfegeixQualitatACapa(capa_digi, quality);
	return true;
}


/*function CercaCombinacioCL(objecte)
{
	if((!objecte[0] && !this[0]) || (objecte[0].toLowerCase()==this[0].toLowerCase()))   // no hauria de passar que una combinaci� f�s tot null, per� ho protegeixo per si de cas
	{	
		if((!objecte[1] && !this[1]) || (objecte[1] && this[1] && this[1].toLowerCase()==objecte[1].toLowerCase()))
		{
			if((!objecte[2] && !this[2]) || (objecte[2] && this[2] && this[2].toLowerCase()==objecte[2].toLowerCase()))
				return 1;			
		}
	}
	return 0;
}*/


function CercaCombinacioCamps(llista_comb, combinacio)
{
	if(!llista_comb ||  llista_comb.length<1)
		return null;

	/*try
	{*/						
		return llista_comb.find(function (objecte) {
			if(((!objecte[0] && !combinacio[0]) || objecte[0].toLowerCase()==combinacio[0].toLowerCase()) &&   // no hauria de passar que una combinaci� f�s tot null, per� ho protegeixo per si de cas
			   ((!objecte[1] && !combinacio[1]) || (objecte[1] && combinacio[1] && combinacio[1].toLowerCase()==objecte[1].toLowerCase())) &&
                	   ((!objecte[2] && !combinacio[2]) || (objecte[2] && combinacio[2] && combinacio[2].toLowerCase()==objecte[2].toLowerCase())))
				return true;
			return false;
		});  //tools1.js afageix suport a find() si no hi �s.
	/*}
	catch(ex)
	{								
		// En funci� de la versi� potser que no existeixi la funci� find()
		for(var i=0; i<llista_comb.length; i++)
		{
			if (CercaCombinacioCL(llista_comb[i]))
				return llista_comb[i];
		}
	}
	return null;*/
}

function CalculaConsistenciaLogicaDeCampsiLlistaValors(param)
{
var punt={}, capa_digi=ParamCtrl.capa[param.i_capa], combinacio=[], n_consistents=0, n=0, n_dins=0;

	if (!capa_digi.objectes.features)
		return false;
		
	for (var i_obj=0; i_obj<capa_digi.objectes.features.length; i_obj++)
	{
		var feature=capa_digi.objectes.features[i_obj];
		DonaCoordenadaPuntCRSActual(punt, capa_digi.objectes.features[i_obj], capa_digi.CRSgeometry);
		if (!EsPuntDinsEnvolupant(punt, ParamInternCtrl.vista.EnvActual))
			continue;			
		n_dins++;		
		
		// El primer atribut a avaluar la consist�ncia l�gica �s obligat�ri, per tant, si l'objecte que vaig a mirar no t� aquest
		// atribut no el considero dins de l'avaluci�
		if (typeof feature.properties[param.atributlogic1]==="undefined" ||
		    feature.properties[param.atributlogic1]=="" ||
			feature.properties[param.atributlogic1]==null)
			continue;			
		n++;
		combinacio[0]=feature.properties[param.atributlogic1];
		combinacio[1]=(!param.atributlogic2 || typeof feature.properties[param.atributlogic2]==="undefined" || feature.properties[param.atributlogic2]=="") ? null : feature.properties[param.atributlogic2];
		combinacio[2]=(!param.atributlogic3 || typeof feature.properties[param.atributlogic3]==="undefined" || feature.properties[param.atributlogic3]=="") ? null : feature.properties[param.atributlogic3];		
		if(CercaCombinacioCamps(param.combinacions, combinacio))  // retorna l'objecte trobat, potser es vol usar per mostrar el domini?
			n_consistents++;
	}
		
	if (n==0)
	{
		alert(DonaCadenaLang({"cat": "No hi ha observacions amb valors v�lids per obtenir la consist�ncia l�gica dels atributs en aquesta �rea", 
					"spa": "No hay observaciones con valores v�lidos para obtener la consistencia l�gica de los atributos en esta �rea", 
					"eng": "There is no observations with valid values to obtain logical consistency of attributes in this area", 
					"fre": "Il n'y a pas d'observations avec des valeurs valides pour obtenir la coh�rence logique des attributs dans ce domaine"}));
		return false;
	}
	var quality={
		scope: ((n_dins==capa_digi.objectes.features.length) ? null : {env: {EnvCRS: JSON.parse(JSON.stringify(ParamInternCtrl.vista.EnvActual)), CRS: ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS}}),
		indicator: "DQ_DomainConsistency",
		statement: DonaCadenaLang({"cat": "La consist�ncia resumida est� basada en la comparaci� dels valors de cada observaci� pels atribut/s: ",
					"spa": "La consist�ncia resumida est� basada en la comparaci�n de los valores de cada observaci�n individual para los atributo/s: ",
					"eng": "The overall consistency is based on the comparison of the values of each individual observation for the field/s: ",
					"fre": "The overall consistency is based on the comparison of the values of each individual observation for the field(s: "}) + 
			param.atributlogic1+
			(param.atributlogic2 ?  ", " : "")+
			(param.atributlogic2 ? param.atributlogic2 : "")+
			(param.atributlogic3 ?  ", " : "")+
			(param.atributlogic3 ? param.atributlogic3 : "")+
			DonaCadenaLang({"cat": " contra la llista de valors possibles especificada al domini.",
					"spa": " contra la lista de valores posibles especificada en el dominio.",
					"eng": " against the list of possible values specified in the domain.",
					"fre": " against the list of possible values specified in the domain."}) + 
			DonaCadenaLang({"cat": "Hi ha",
					"spa": "Hay",
					"eng": "There are",
					"fre": "Il y a"}) + 
			" " + (n_dins-n) + " "+
			DonaCadenaLang({"cat": "de",
					"spa": "de",
					"eng": "of",
					"fre": "de"}) + 
			" " +n_dins+ " " + 
			DonaCadenaLang({"cat": "que no tenen informaci� sobre la consist�ncia, perqu� no tenen els atributs indicats.",
					"spa": "que no tienen informaci�n sobre la consist�ncia, porque no tienen los atributos indicados.",
					"eng": "that does not have consistency information, because it does not have the specified attributes.",
					"fre": "qui n'ont pas d'informations de coher�nce, parce qu'ils n'ont pas les attributs."}),
		result: [{
			qualityml: {
				version: "1.0",
				measure: {
					name: "ValueDomain"
				},
				domain: [{
					name: "Conformance",
					param: [
					{
						name: "PossibleValues",
						value: JSON.stringify(param.combinacions)
					}],
					values:{
						list:[param.atributlogic1]
					}
				}],
				metrics: [{
					name: "items",
					param: [{
						name: "count",
						value: n
					}],
					values: {
						list: [n_consistents]
					}
				}]
			}
		}]
	};
	if(param.atributlogic2)
		quality.result[0].qualityml.domain[0].values.list.push(param.atributlogic2);
	if(param.atributlogic3)
		quality.result[0].qualityml.domain[0].values.list.push(param.atributlogic3);
	
	AfegeixQualitatACapa(capa_digi, quality);
	return true;
}

function CalculaQualExacPosicDesDeCampUncertainty(param)
{
var capa_digi=ParamCtrl.capa[param.i_capa], n=0, n_dins=0, desv_tip=0, punt={}, i, unitats;

	if (!capa_digi.objectes.features)
		return false;
		
	for (var i_obj=0; i_obj<capa_digi.objectes.features.length; i_obj++)
	{
		var feature=capa_digi.objectes.features[i_obj];
		DonaCoordenadaPuntCRSActual(punt, capa_digi.objectes.features[i_obj], capa_digi.CRSgeometry);
		if (!EsPuntDinsEnvolupant(punt, ParamInternCtrl.vista.EnvActual))
			continue;			
		n_dins++;

		if (typeof feature.properties[param.atribut]!=="undefined" &&
			feature.properties[param.atribut]!=null)
		{
			desv_tip+=(feature.properties[param.atribut]*
				feature.properties[param.atribut])
			n++;
		}
	}
	if (n==0)
	{
		alert(DonaCadenaLang({"cat": "No hi ha observacions amb incertesa posicional en aquesta �rea", 
					"spa": "No hay observaciones con incertidumbre posicional en esta �rea", 
					"eng": "There is no observations with positional uncertainty in this area", 
					"fre": "Il n'y a pas d'observations avec une incertitude de position dans ce domaine"}));
		return false;
	}
	
	desv_tip=Math.sqrt(desv_tip/n);

	i=DonaIAtributsDesDeNomAtribut(capa_digi, param.atribut);
	if (i==-1)
	{
		alert(DonaCadenaLang({"cat": "Nom d'atribut incorrecte", 
					"spa": "Nombre de atributo incorrecto", 
					"eng": "Wrong attribute name", 
					"fre": "Nom d'attribut incorrect"}) + " " +
				param.atribut + "  " +
				DonaCadenaLang({"cat": "per calcular la qualitat de la capa",
						"spa": "para calcular la calidad de la capa", 
						"eng": "to compute data quality for the layer", 
						"fre": "pour calculer la qualit� des donn�es pour la couche"}) + " " +
				(capa_digi.desc ? capa_digi.desc : capa_digi.nom));
		unitats=null;
	}
	else
		unitats=capa_digi.atributs[i].unitats;

	AfegeixQualitatACapa(capa_digi, {
		scope: ((n_dins==capa_digi.objectes.features.length) ? null : {env: {EnvCRS: JSON.parse(JSON.stringify(ParamInternCtrl.vista.EnvActual)), CRS: ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS}}),
		indicator: "DQ_AbsoluteExternalPositionalAccuracy",
		statement: DonaCadenaLang({"cat": "La exactitud resumida est� basada en la incertesa posicional de cada observaci� individual indicada a l'atribut",
					"spa": "La exactitud resumida est� basada en la incertidumbre posicional de cada observaci�n individual indicada en el atributo",
					"eng": "The overall accuracy is based on the positional uncertainty for each indiviadual observation as indicated in the field",
					"fre": "The overall accuracy is based on the positional uncertainty for each indiviadual observation as indicated in the field"}) + 
			" " +param.atribut+". " + 
			DonaCadenaLang({"cat": "Hi ha",
					"spa": "Hay",
					"eng": "There are",
					"fre": "There are"}) + 
			" " + (n_dins-n) + " "+
			DonaCadenaLang({"cat": "de",
					"spa": "de",
					"eng": "of",
					"fre": "of"}) + 
			" " +n_dins+ " " + 
			DonaCadenaLang({"cat": "que no tenen informaci� sobre la incertesa.",
					"spa": "que no tienen informaci�n sobre la incertidumbre.",
					"eng": "that does not have uncetainty information.",
					"fre": "that does not have uncetainty information."}),
		result: [{
			qualityml: {
				version: "1.0",
				measure: {
					name: "CircularMapAccuracy"
				},
				domain: [{
					name: "DifferentialErrors2D",					
					values: {
						list: [param.atribut],
						units : (unitats ? unitats : null)
					}
				}],
				metrics: [{
					name: "Half-lengthConfidenceInterval",
					param: [{
						name: "level",
						value: 0.683
					}],
					values: {
						list: [desv_tip],
						units: (unitats ? unitats : null)
					}
				}]
			}
		}]
	});
	return true;
}

function CalculaIAfegeixQualitatACapa(form, i_capa, i_estil)
{
var sel=form.metode_eval_qual, i, capa=ParamCtrl.capa[i_capa], retorn=false, param;
		
	if(sel.selectedIndex<sel.length)
	{
		if(sel.options[sel.selectedIndex].value=="PositionalAccuracyFromUncertainty")
		{
			var sel_camp=form.camp_incertesa;
			if(sel_camp.selectedIndex<sel_camp.length)
			{
				param={i_capa: i_capa, intencions: "qualitat", atribut: sel_camp.options[sel_camp.selectedIndex].value};
				if(DescarregaPropietatsCapaDigiVistaSiCal(CalculaQualExacPosicDesDeCampUncertainty, param))
					return;
				retorn=CalculaQualExacPosicDesDeCampUncertainty(param);				
			}
			else
			{
				alert(DonaCadenaLang({"cat": "Cal seleccionar un camp", "spa": "Debe seleccionar un campo", "eng": "You must select a field", "fre": "Vous devez s�lectionner un champ"}));
				return;
			}
		}
		else if (sel.options[sel.selectedIndex].value=="LogicalConsistencyFromThematicAttributes")
		{
			var camp_log1=form.camp_logic1;
			var camp_log2=form.camp_logic2;
			var camp_log3=form.camp_logic3;
			var combi=form.llista_valors_logic;
			if(camp_log1.selectedIndex<camp_log1.length)
			{
				param={i_capa: i_capa, intencions: "qualitat", atributlogic1: camp_log1.options[camp_log1.selectedIndex].value};
				if(camp_log2.selectedIndex<camp_log2.length)
				{
					if(camp_log2.options[camp_log2.selectedIndex].value!="camp_logic_empty")
						param.atributlogic2=camp_log2.options[camp_log2.selectedIndex].value;
					else
						param.atributlogic2=null;
				}
				else
					param.atributlogic2=null;
				if(camp_log3.selectedIndex<camp_log3.length)
				{
					if(camp_log3.options[camp_log3.selectedIndex].value!="camp_logic_empty")
						param.atributlogic3=camp_log3.options[camp_log3.selectedIndex].value;
					else
						param.atributlogic3=null;
				}
				else
					param.atributlogic3=null;
					
				var linies=[];
				linies=combi.value.split("\n");
				param.combinacions=[];
				for(i=0; i<linies.length; i++)
				{
					param.combinacions[i]=[];
					param.combinacions[i]=linies[i].split(";");
				}
				if(DescarregaPropietatsCapaDigiVistaSiCal(CalculaConsistenciaLogicaDeCampsiLlistaValors, param))
					return;
				retorn=CalculaConsistenciaLogicaDeCampsiLlistaValors(param);				
			}
			else
			{
				alert(DonaCadenaLang({"cat": "Cal seleccionar un camp", "spa": "Debe seleccionar un campo", "eng": "You must select a field", "fre": "Vous devez s�lectionner un champ"}));
				return;
			}
		}
		/*else if (sel.options[sel.selectedIndex].value=="ThematicAccuracyGroundTruth")
		{
			//�$�
			;
		}*/
		else if (sel.options[sel.selectedIndex].value=="TemporalValidityOfObservationData")
		{			
			// SORPRESA: Les dates s'enmagatzemen com a data UTC, per� sorpresa que si escric 2018-12-01 acaba sent 2018-12-01 01:00 i en canvi si escric 2018/12/01 acaba sent 2018-12-01 00:00. 
			// Hi ha una hora de difer�ncia!!! Aix� fa que quan comparo les dates aquestes poden estar escrites de diferent manera i per tant tenir una hora de difer�ncia.
			// Com que la data s'enmagatzema com a hora UTC aix� fa que si comparo 2018-12-01 < 2018/12/01 en realitat estigui comparant 2018-12-01 1:00 < 2017-01-31 23:00.
			// Buscant m�s he trobat que si li passes una cadena amb '-' estas indicant el format UTC i si ho fas amb '/' fas el format local
			
			var sel_camp=form.camp_temporal;
			if(sel_camp.selectedIndex>=sel_camp.length)
			{
				alert(DonaCadenaLang({"cat": "Cal seleccionar un camp", "spa": "Debe seleccionar un campo", "eng": "You must select a field", "fre": "Vous devez s�lectionner un champ"}));
				return;
			}

			if (!form.data_ini.value)
			{
				alert(DonaCadenaLang({"cat": "La data inicial no pot es pot deixar en blanc", 
									 "spa": "La fecha inicial no puede dejarse en blaco", 
									 "eng": "The initial date cannot be left blank", 
									 "fre": "La date finitiale ne peut pas �tre laiss�e en blanc"}));
				return;
			}
			var date_ini=new Date(form.data_ini.value);			

			if (!form.data_final.value)
			{
				alert(DonaCadenaLang({"cat": "La data final no pot es pot deixar en blanc", 
									 "spa": "La fecha final no puede dejarse en blaco", 
									 "eng": "The final date cannot be left blank", 
									 "fre": "La date finale ne peut pas �tre laiss�e en blanc"}));
				return;
			}
			var date_fi=new Date(form.data_final.value+"T23:59:59.999Z");  // form.data_final.value est� com a hora UTC en format cadena. Necessito que estigui al final del dia per a fer comparacions.
			
			if(date_fi<=date_ini)
			{
				alert(DonaCadenaLang({"cat": "La data final no pot ser inferior a la inicial", 
									 "spa": "La fecha final no puede ser inferior a la inicial", 
									 "eng": "The final date cannot be less than the initial date", 
									 "fre": "La date finale ne peut pas �tre inf�rieure � la date initiale"}));
				return;
			}

			param= {i_capa: i_capa, intencions: "qualitat", atribut: sel_camp.options[sel_camp.selectedIndex].value, data_ini: date_ini, data_fi: date_fi};
			if(DescarregaPropietatsCapaDigiVistaSiCal(CalculaValidessaTemporal,param))
				return;
			retorn=CalculaValidessaTemporal(param);
			
		}
		else if (sel.options[sel.selectedIndex].value=="BBoxPositionalValidity")
		{
			var env={"MinX": form.coordXmin.value, "MaxX": form.coordXmax.value, "MinY": form.coordYmin.value, "MaxY": form.coordYmax.value};
			param={i_capa: i_capa, intencions: "qualitat", env: env};
			if(DescarregaPropietatsCapaDigiVistaSiCal(CalculaValidessaPosicionalBBOX, param))
				return;
			retorn=CalculaValidessaPosicionalBBOX(param);			
			
		}
		if(retorn)
		{
			alert(DonaCadenaLang({"cat": "El par�metre de qualitat calculat est� disponible a la entrada de men� contextual 'qualitat' de la capa", 
						"spa": "El par�metro de calidad calculado est� disponible en la entrada de men� contextual 'calidad' de la capa", 
						"eng": "The calculated quality parameter is available as an entry in the context menu entry 'quality' of the layer", 
						"fre": "The calculated quality parameter is available as an entry in the context menu entry 'quality' of the layer"}) + " \"" +
				(DonaCadena(capa.desc) ? DonaCadena(capa.desc) : capa.nom) + "\".");
			TancaFinestraLayer('calculaQualitat');
		}
		else
		{
			alert(DonaCadenaLang({"cat": "No s'ha pogut calcular la qualitat de la capa", 
						"spa": "No se ha podido calcular la calidad de la capa", 
						"eng": "The quality cannot be computed for the layer", 
						"fre": "The quality cannot be computed for the layer"}) + " \"" +
				(DonaCadena(capa.desc) ? DonaCadena(capa.desc) : capa.nom) + "\".");
		}
	}
}


function DonaCadenaCampsPositionalAccuracyFromUncertainty(capa)
{
var cdns=[];	

	cdns.push("<fieldset><legend>",
				DonaCadenaLang({"cat":"Camp d'incertesa posicional", "spa":"Campo de incertidumbre posicional", "eng": "Field of positional uncertainty", "fre":"Champ d'incertitude de position"}), 
			  "</legend>");
	cdns.push("<select name=\"camp_incertesa\" class=\"Verdana11px\" >");	
	if(capa.atributs)
	{
		for(var i=0; i<capa.atributs.length; i++)	
			cdns.push("<option value=\"",capa.atributs[i].nom,"\"", (i==0 ? " selected ":""), "\>", 
					(DonaCadena(capa.atributs[i].descripcio) ? DonaCadena(capa.atributs[i].descripcio) : capa.atributs[i].nom));
	}
	cdns.push("</select></fieldset>");
	return cdns.join("");
}

function DonaCadenaCampsLogicalConsistencyFromThematicAttributes(capa)
{
var cdns=[];	

	cdns.push("<fieldset><legend>",
				DonaCadenaLang({"cat":"Atributs a verificar la consist�ncia l�gica", 
							   "spa":"Atributos a verificar la consistencia l�gica", 
							   "eng":"Fields to verify the logical consistency", 
							   "fre":"Attributs pour v�rifier la coh�rence logique"}), 
			  "</legend>");

	cdns.push("<select name=\"camp_logic1\" class=\"Verdana11px\" >");	
	if(capa.atributs)
	{
		for(var i=0; i<capa.atributs.length; i++)	
			cdns.push("<option value=\"",capa.atributs[i].nom,"\"", (i==0 ? " selected ":""), "\>", 			
				(DonaCadena(capa.atributs[i].descripcio) ? DonaCadena(capa.atributs[i].descripcio) : capa.atributs[i].nom));
	}
	cdns.push("</select><br>");
	cdns.push("<select name=\"camp_logic2\" class=\"Verdana11px\">");	
	if(capa.atributs)
	{
		cdns.push("<option value=\"camp_logic_empty\" selected \>", DonaCadenaLang({"cat":"--buit--","spa":"--vacio--", "eng":"--empty--", "fre":"--vide--"}));
		for(var i=0; i<capa.atributs.length; i++)	
			cdns.push("<option value=\"",capa.atributs[i].nom,"\" \>", 
					(DonaCadena(capa.atributs[i].descripcio) ? DonaCadena(capa.atributs[i].descripcio) : capa.atributs[i].nom));
	}
	cdns.push("</select><br>");
	cdns.push("<select name=\"camp_logic3\" class=\"Verdana11px\">");	

	if(capa.atributs)
	{
		cdns.push("<option value=\"camp_logic_empty\" selected \>", DonaCadenaLang({"cat":"--buit--","spa":"--vacio--", "eng":"--empty--", "fre":"--vide--"}));
		for(var i=0; i<capa.atributs.length; i++)	
			cdns.push("<option value=\"",capa.atributs[i].nom,"\" \>", 
				   (DonaCadena(capa.atributs[i].descripcio) ? DonaCadena(capa.atributs[i].descripcio) : capa.atributs[i].nom));
	}
	cdns.push("</select><br>");
	cdns.push( DonaCadenaLang({"cat":"Llista de valors possibles (separats per ;)", 
				   "spa":"Lista de valores posibles (separados por ;)", 
				   "eng":"List of possible values (separated by ;)", 
				   "fre":"Liste des valeurs possibles (s�par�es par ;)"}),
			  "<br><textarea name=\"llista_valors_logic\" rows=\"8\" cols=\"60\" >",
			  DonaCadenaLang({"cat":"valor1camp1;valor1camp2;valor1camp3","spa":"valor1campo1;valor1campo2;valor1campo3", "eng":"value1field1;value1field2;value1field3", "fre":"valeur1champ1;valeur1champ2;valeur1champ3"}),
			  "</textarea>");
	cdns.push("</fieldset>");
	return cdns.join("");
}

function DonaCadenaCampsThematicAccuracyGroundTruth(capa)
{
	cdns.push("<fieldset><legend>",
				DonaCadenaLang({"cat":"Capa veritat terreny", "spa":"Capa verdad terreno", "eng": "Ground truth layer", "fre":"Couche de v�rit� terrain"}), 
			  "</legend>");
	//�$�
	cdns.push("</fieldset>");
	return cdns.join("");
}


function DonaCadenaCampsTemporalValidityOfObservationData(capa)
{
var cdns=[];	

	cdns.push("<fieldset><legend>",
				DonaCadenaLang({"cat":"Camp temporal", "spa":"Campo temporal", "eng": "Temporal field", "fre":"Temporal Champ"}), 
			  "</legend>");
	cdns.push("<select name=\"camp_temporal\" class=\"Verdana11px\" >");
	if(capa.atributs)
	{
		for(var i=0; i<capa.atributs.length; i++)	
			cdns.push("<option value=\"",capa.atributs[i].nom,"\"", (i==0 ? " selected ":""), "\>", 
					(DonaCadena(capa.atributs[i].descripcio) ? DonaCadena(capa.atributs[i].descripcio) : capa.atributs[i].nom));
	}
	cdns.push("</select></fieldset>");

	cdns.push("<fieldset><legend>",
				DonaCadenaLang({"cat":"Interval de les dates d'observaci�", "spa":"Intervalo de las fechas de observaci�n", "eng": "Range of observation dates", "fre":"Plage de dates d'observation"}), 
			  "</legend>");
	
	cdns.push(DonaCadenaLang({"cat":"Data inicial", "spa":"Fecha inicial", "eng": "Initial date", "fre":"Date initiale"}), 
			": ",
			"<input type=\"date\" name=\"data_ini\" class=\"Verdana11px\" >",
			" ",
			DonaCadenaLang({"cat":"Data final", "spa":"Fecha final", "eng": "Final date", "fre":"Date finale"}),
			": ",
			"<input type=\"date\" name=\"data_final\" class=\"Verdana11px\" ><br>");	
	cdns.push("</fieldset>");
	return cdns.join("");
}

function DonaCadenaCampsBBOXPositionalValidity(capa)
{
var cdns=[], es_long_lat;	

	cdns.push("<fieldset><legend>",
				DonaCadenaLang({"cat":"�mbit geogr�fic", "spa":"�mbito geogr�fico", "eng": "Geographic extent", "fre":"Etendue g�ographique"}), 
			  "</legend>");
	
	es_long_lat=EsProjLongLat(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS);

	cdns.push("<table class=\"Verdana11px\"><tr><td align=\"right\"><label id=\"label_xmin\" for=\"coordXmin\">",
			  (es_long_lat ? DonaCadenaLang({"cat":"Longitud m�nima","spa":"Longitud m�nima","eng":"Minimum longitude","fre":"Longitude minimale"}) : DonaCadenaLang({"cat":"X m�nima","spa":"X m�nima","eng":"Minimum X","fre":"X minimale"})),
			  ": </label><input class=\"Verdana11px\" id=\"coordXmin\" name=\"coordX\" type=\"text\" size=\"10\" value=\"", 
			  OKStrOfNe(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.EnvCRS.MinX, ParamCtrl.NDecimalsCoordXY),"\"></td>",
			  "<td align=\"right\"><label id=\"label_xmax\" for=\"coordXmax\">",
			  (es_long_lat ? DonaCadenaLang({"cat":"Longitud m�xima","spa":"Longitud m�xima","eng":"Maximum longitude","fre":"Longitude maximale"}) : DonaCadenaLang({"cat":"X m�xima","spa":"X m�xima","eng":"Maxima X","fre":"X maximale"})),
			  ": </label><input class=\"Verdana11px\" id=\"coordXmax\" name=\"coordX\" type=\"text\" size=\"10\" value=\"", 
			  OKStrOfNe(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.EnvCRS.MaxX, ParamCtrl.NDecimalsCoordXY),"\"></td></tr>",
			  "<tr><td align=\"right\"><label id=\"label_ymin\" for=\"coordYmin\">",
			  (es_long_lat ? DonaCadenaLang({"cat":"Latitud m�nima","spa":"Latitud m�nima","eng":"Minimum latitude","fre":"Latitude minimale"}) : DonaCadenaLang({"cat":"Y m�nima","spa":"Y m�nima","eng":"Minimum Y","fre":"Y minimale"})),
			  ": </label><input class=\"Verdana11px\" id=\"coordYmin\" name=\"coordX\" type=\"text\" size=\"10\" value=\"", 
			  OKStrOfNe(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.EnvCRS.MinY, ParamCtrl.NDecimalsCoordXY),"\"></td>",
			  "<td align=\"right\"><label id=\"label_ymax\" for=\"coordYmax\">",
			  (es_long_lat ? DonaCadenaLang({"cat":"Latitud m�xima","spa":"Latitud m�xima","eng":"Maximum latitude","fre":"Latitude maximale"}) : DonaCadenaLang({"cat":"Y m�xima","spa":"Y m�xima","eng":"Maximum Y","fre":"Y maximale"})),
			  ": </label><input class=\"Verdana11px\" id=\"coordYmax\" name=\"coordX\" type=\"text\" size=\"10\" value=\"", 
			  OKStrOfNe(ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.EnvCRS.MaxY, ParamCtrl.NDecimalsCoordXY),"\"></td></tr></table>");

	cdns.push("</fieldset>");
	return cdns.join("");
}

function ActualitzaCampsEnFuncioMetodeAvaluacioQualitat(form, i_capa, i_estil)
{
var sel=form.metode_eval_qual;
var capa;

	capa=ParamCtrl.capa[i_capa];

	if(sel.selectedIndex<sel.length)
	{
		if(sel.options[sel.selectedIndex].value=="PositionalAccuracyFromUncertainty")
			window.document.getElementById('LayerParamEvalQual').innerHTML=DonaCadenaCampsPositionalAccuracyFromUncertainty(capa);
		else if (sel.options[sel.selectedIndex].value=="LogicalConsistencyFromThematicAttributes")
			window.document.getElementById('LayerParamEvalQual').innerHTML=DonaCadenaCampsLogicalConsistencyFromThematicAttributes(capa);
		else if (sel.options[sel.selectedIndex].value=="ThematicAccuracyGroundTruth")
			window.document.getElementById('LayerParamEvalQual').innerHTML=DonaCadenaCampsThematicAccuracyGroundTruth(capa);
		else if (sel.options[sel.selectedIndex].value=="TemporalValidityOfObservationData")
			window.document.getElementById('LayerParamEvalQual').innerHTML=DonaCadenaCampsTemporalValidityOfObservationData(capa);
		else if (sel.options[sel.selectedIndex].value=="BBoxPositionalValidity")
			window.document.getElementById('LayerParamEvalQual').innerHTML=DonaCadenaCampsBBOXPositionalValidity(capa);
	}
}

function DonaCadenaCalculaQualitatCapa(i_capa, i_estil)
{
var i_indicator, cdns=[];
var capa;

	capa=ParamCtrl.capa[i_capa];

	cdns.push("<form name=\"CalculaQualitatCapa\" onSubmit=\"return false;\">");
	cdns.push("<div id=\"LayerCalculaQualitatCapa\" class=\"Verdana11px\" style=\"position:absolute;left:10px;top:10px;width:95%\"><b>",
			DonaCadenaLang({"cat":"Calcular la qualitat de la capa", "spa":"Calcular la Calidad de la capa", "eng":"Compute the quality of the layer", "fre":"Calculer la qualit� de la couche"}), " \"", 
			(DonaCadena(capa.DescLlegenda) ? DonaCadena(capa.DescLlegenda): capa.nom));
	if (i_estil!=-1)
		cdns.push(", ", DonaCadena(capa.estil[i_estil].desc));
	cdns.push("\"<b><br/><br/>");

	cdns.push("<fieldset><legend>",
			  DonaCadenaLang({"cat":"M�tode d'avaluaci� de la qualitat", "spa":"M�todo de evaluaci�n de la calidad", "eng": "Quality assesment", "fre":"M�thode d'�valuation de la qualit�"}), 
			  "</legend>");

	cdns.push("<select name=\"metode_eval_qual\" class=\"Verdana11px\" onChange=\"ActualitzaCampsEnFuncioMetodeAvaluacioQualitat(form,",i_capa,",",i_estil,");\" >");	
	cdns.push("<option value=\"PositionalAccuracyFromUncertainty\" selected \>",
			DonaCadenaLang({"cat":"Exactitud posicional de la capa a partir de la incertessa de l'observaci�",
				   "spa":"Exactitud posicional de la capa a partir de la incertidumbre de la observaci�n",
				   "eng":"Positional accuracy of the layer from observation uncertainties",
				   "fre": "Pr�cision de positionnement de la couche par rapport � l'incertitude d'observation"}));
	cdns.push("<option value=\"LogicalConsistencyFromThematicAttributes\" \>",
			DonaCadenaLang({"cat":"Consist�ncia l�gica dels atributs tem�tics",
				   "spa":"Consistencia l�gica de los atributos tem�ticos",
				   "eng":"Logical consistency of the thematic attributes",
				   "fre": "Coh�rence logique des attributs th�matiques"}));
	/*cdns.push("<option value=\"ThematicAccuracyGroundTruth\" \>",
			DonaCadenaLang({"cat":"Exactitud tem�tica comparant amb la veritat terreny",
				   "spa":"Exactitud tem�tica comparando con la verdad terreno",
				   "eng":"Thematic accuracy comparing with the ground truth",
				   "fre": "Exactitude th�matique par rapport � la v�rit� du terrain"}));*/
	cdns.push("<option value=\"TemporalValidityOfObservationData\" \>",
			DonaCadenaLang({"cat":"Validessa temporal de la data d'observaci�",
				   "spa":"Validez temporal de la fecha de observaci�n",
				   "eng":"Temporal validity of observation date",
				   "fre": "Validit� temporelle de la date de l'observation"}));
	cdns.push("<option value=\"BBoxPositionalValidity\" \>",
			DonaCadenaLang({"cat":"Validessa de les posicions de les observacions (per envolupant)",
				   "spa":"Validez de las posiciones de las observaciones (por envolvente)",
				   "eng":"Validity of the positions of observations (by bounding box)",
				   "fre": "Validit� des positions des observations (par enveloppe)"}));
	cdns.push("</select></fieldset>");
	cdns.push("<br/><div id=\"LayerParamEvalQual\" class=\"Verdana11px\">",DonaCadenaCampsPositionalAccuracyFromUncertainty(capa),"</div>");
	cdns.push("<input type=\"button\" class=\"Verdana11px\" value=\"",				
			  DonaCadenaLang({"cat":"Calcular", "spa":"Calcular", "eng":"Compute", "fre":"Calculer"}), 
			  "\" onClick='CalculaIAfegeixQualitatACapa(form,",i_capa,",",i_estil,");' />",
			  "<input type=\"button\" class=\"Verdana11px\" value=\"",				
			  DonaCadenaLang({"cat":"Cancel�lar", "spa":"Cancelar", "eng":"Cancel", "fre":"Annuler"}), 
			  "\" onClick='TancaFinestraLayer(\"calculaQualitat\");' />");

	cdns.push("</div></form>");
	return cdns.join("");
}

function FinestraCalculaQualitatCapa(elem, i_capa, i_estil)
{
	contentLayer(elem, DonaCadenaCalculaQualitatCapa(i_capa, i_estil));
}
