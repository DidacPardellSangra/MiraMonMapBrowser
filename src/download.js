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

    Copyright 2001, 2020 Xavier Pons

    Aquest codi JavaScript ha estat realitzat per Joan Mas� Pau 
    (joan maso at uab cat) i Nuria Juli� (n julia at creaf uab cat)
    dins del grup del MiraMon. MiraMon �s un projecte del Centre
    de recerca i aplicacions forestals (CREAF) que elabora programari de 
    Sistema d'Informaci� Geogr�fica i de Teledetecci� per a la 
    visualitzaci�, consulta, edici� i an�lisi de mapes r�sters i 
    vectorials. Elabora programari d'escriptori i tamb� servidors i clients 
    per Internet. No tots aquests productes s�n gratu�ts o de codi obert. 
    En particular, el Navegador de Mapes del MiraMon (client per Internet) 
    es distribueix sota els termes de la llic�ncia "GNU General Public 
    License". Es pot actualitzar des de www.creaf.uab.cat/miramon/mmn
*/

//M�duls sobre la desc�rrega.

"use strict"

var MMZWindow=null;
function ObtenirMMZ()
{
	if (MMZWindow==null || MMZWindow.closed)
	{
	    MMZWindow=window.open("mmz.htm","FinestraMMZ",'toolbar=no,status=no,scrollbars=no,location=no,menubar=no,directories=no,resizable=yes,width=500,height=320');
            ShaObertPopUp(MMZWindow);
	}
	else
	{
	    MMZWindow.focus();
	    MMZWindow.mmz1.RedibuixaMMZ();    
	}
}

/*
var WCSWindow=null;
var i_capa_wcs;
function ObreFinestraWCS(i)
{
    i_capa_wcs=i;
    if (WCSWindow==null || WCSWindow.closed)
    {
        WCSWindow=window.open("wcs.htm","FinestraWCS",'toolbar=no,status=no,scrollbars=no,location=no,menubar=no,directories=no,resizable=yes,width=500,height=550');
        ShaObertPopUp(WCSWindow);
    }
    else
    {
        WCSWindow.focus();
		WCSWindow.wcs1.DibuixaOpcionsWCS();    
    }	
}
*/

function AvaluaRespostaEstatDescarrega(doc, param_extra)
{
var percentatge=-1, s="";
var nom_fitxer, descp_fitxer;
var node, node2;

	//en cas d'error crec que hauria de modificar el formulari perqu� no estigui esperant indefinidament el fitxer
	if(doc)
	{
		var root=doc.documentElement;	
		if(root)
		{
			node=root.getElementsByTagName('status');
			node=node[0];
			if(node && node.childNodes)
			{
				for(var i=0; i<node.childNodes.length; i++)
				{
					node2=node.childNodes[i];
					if(node2.nodeName=="ProcessAccepted")
					{
						percentatge=0;
						break;
					}
					else if(node2.nodeName=="ProcessStarted")
					{
						percentatge=node2.getAttribute('percentCompleted');
						break;
					}
					else if(node2.nodeName=="ProcessSucceeded")
					{
						percentatge=100;
						break;
					}
				}
				s=node2.textContent;
			}
		}
	}
	
	if(percentatge==-1)
	{
		alert(DonaCadenaLang({"cat":"S'ha produ�t algun error durant l'enviament del fitxer. Torna-ho a intentar",
						  "spa":"Se ha producido algun error durante el env�o del fichero. Vu�lvalo a intentar",
						  "eng":"Has been occurred an error while sending the file. Try again",
						  "fre":"Une erreur vient de se produire pendant l'envoi du fichier. R�essayez"}));
		CanviaEstatEventConsola(null, param_extra.i_event, EstarEventError);
		return;
	}
	document.getElementById("finestra_download_status").innerHTML=s;
	if(percentatge>=0 && percentatge<100)
		param_extra.timeout=setTimeout("CreaEstatDescarrega("+param_extra.temps+", "+param_extra.i_capa_wcs+")", param_extra.temps);
	else
		CanviaEstatEventConsola(null, param_extra.i_event, EstarEventTotBe);

	return;
}

function CreaEstatDescarrega(temps, i_capa_wcs, i_event)
{
var cdns=[], cadena_cgi;

	cdns.push("VERSION=1.1.0&REQUEST=DonaEstatProces&IDPROCES=", self.IdProces, "_", self.NIdProces, "&FORMAT=text/xml");  //"&TEMPS_REFRESC=", temps
	cadena_cgi=AfegeixNomServidorARequest(DonaServidorCapa(ParamCtrl.capa[i_capa_wcs]), cdns.join(""), ParamCtrl.UsaSempreMeuServidor==true ? true : false, DonaCorsServidorCapa(ParamCtrl.capa[i_capa_wcs]));

	//parent.wcs3.location.href=cadena_cgi;
	//document.getElementById("finestra_download_status").innerHTML=cadena_cgi;
	loadFile(cadena_cgi, "text/xml", AvaluaRespostaEstatDescarrega, function(text, param_extra) {alert(text); if (param_extra.timeout){ clearTimeout(param_extra.timeout), param_extra.timeout=null}}, {"temps": temps, "i_capa_wcs": i_capa_wcs, "i_event": i_event, "timeout": null});
}

function DescarregaWCS(oferir_vincle, i_capa_wcs)
{
var cdns=[], cdns_req=[], capa=ParamCtrl.capa[i_capa_wcs];

	cdns.push("<CENTER>"+DonaCadenaLang({"cat":"Espereu si us plau", "spa":"Espere por favor", "eng":"Please, wait", "fre":"Attendez, s'il-vous-pla�t"})+"...<br>"+
						   "<small>("+
						DonaCadenaLang({"cat":"La generaci� de la desc�rrega de la capa podria trigar alguns minuts",
										"spa":"La generaci�n de la descarga de la capa podr�a demorarse algunos minutos",
										"eng":"Generaci�n of layer to be download can be take some minutes",
										"fre":"La cr�ation du t�l�chargement de la couche pourrai prendre quelques minutes"}) +
						")</small><br>"+
						DonaCadenaLang({"cat":"Preparant la capa sol�licitada", 
									"spa":"Preparando la capa solicitada",
									"eng":"Preparing the requeried layer",
									"fre":"En pr�parant la couche demand�e"}) +
						":<br>");
//canvi d'ambit si la consulta �s completa i hi ha sel�leccionat x,y o ambit.
	cdns.push(DonaCadena(capa.desc));
	cdns.push("</CENTER>");
	contentLayer(getLayer(window, "finestra_download_opcions"), cdns.join(""));

	var env=DonaEnvolupantDescarregaAmbCTipicaCompleta();

	var res_cov=ParamCtrl.ResGetCoverage[capa.ResCoverage];
	cdns_req.push("SERVICE=WCS&VERSION=1.0.0&REQUEST=GetCoverage&CRS=", 
				ParamCtrl.ImatgeSituacio[ParamInternCtrl.ISituacio].EnvTotal.CRS, 
				"&BBOX=", env.MinX, ",", env.MinY, ",", env.MaxX, ",", env.MaxY, 
				"&COVERAGE=", capa.nom, 
				"&RESX=", res_cov.ll.x.sel, "&RESY=", res_cov.ll.y.sel, "&FORMAT=");
	var format_cov=ParamCtrl.FormatGetCoverage[capa.FormatCoverage];
	for (var i=0; i<format_cov.ll.length; i++)
	{
		if (format_cov.ll[i].sel)
		{
			cdns_req.push(format_cov.ll[i].nom);
			break;
		}
	}
	if (oferir_vincle)
		cdns_req.push("; disposition=attachment");

	var param_cov=ParamCtrl.ParGetCoverage[capa.ParamCoverage];
	if (param_cov.ll)
	{
		for (var i_par=0; i_par<param_cov.ll.length; i_par++)
		{
			cdns_req.push("&", param_cov.ll[i_par].nom.nom, "=");
			if (param_cov.ll[i_par].cardin=="i")
			{
                cdns_req.push(param_cov.ll[i_par].valors.sel);
			}
			else if (param_cov.ll[i_par].cardin=="1")
			{
				if (param_cov.ll[i_par].nom.nom=="TIME" && param_cov.ll[i_par].valors==null)
				{
					var i_data_sel=DonaIndexDataCapa(capa, null);
					cdns_req.push(DonaDataJSONComATextISO8601(capa.data[i_data_sel], capa.FlagsData));
				}
				else
				{
				 	for (var i=0; i<param_cov.ll[i_par].valors.length; i++)
					{
						if (param_cov.ll[i_par].valors[i].sel)
						{
							cdns_req.push(param_cov.ll[i_par].valors[i].nom);
							break;
						}
					}
				}
			}
			else
			{
	  		 	if (param_cov.ll[0].nom.nom=="RADIOMET" &&
					(((param_cov.ll[0].valors[0].nom=="opti_nat" || param_cov.ll[0].valors[0].nom=="opti_fals") &&
							 param_cov.ll[0].valors[0].sel) || 
						(((param_cov.ll[0].valors.length>0 && param_cov.ll[0].valors[1].nom=="opti_fals") ||
								(param_cov.ll[0].valors.length>0 && param_cov.ll[0].valors[1].nom=="opti_nat")) && 
							 (param_cov.ll[0].valors.length>0 && param_cov.ll[0].valors[1].sel))))
				{
					cdns_req.push("RGB");
				}
				else
				{
				 	var j=0;
					for (var i=0; i<param_cov.ll[i_par].valors.length; i++)
					{
						if (param_cov.ll[i_par].valors[i].sel)
						{
							if (j!=0)
								cdns_req.push(",");
							cdns_req.push(param_cov.ll[i_par].valors[i].nom);
							j++;
						}
					}
				}
			}			
		}
	}
	var form_ctipica=DonaFormulariCTipicaCompleta();
	if (form_ctipica)
	{
		if (form_ctipica.retallar[2].checked) //per_objecte
		{
			for (var i=0; i<capa_consulta.length; i++)
			{
				if (form_ctipica.ctipica.capa[i].checked)
				{
				     //triar l'ambit del objecte.
					//�$�NJ: aix� no crec que funcioni est� malament, en un estil molt antic
					 cdns_req.push("&TYPENAME=", capa_consulta[i].nom, "&FILTER=(<Filter xmlns=\"http://www.opengis.net/ogc\"><PropertyIsEqualTo><PropertyName>", capa_consulta[i].nom, ".", capa_consulta[i].camp, "</PropertyName><Literal>", capa_consulta[i].proj_camp[ctipica_valor].valor, "</Literal></PropertyIsEqualTo></Filter>)");
					 break;
				}
			}
		}
	}	
	if (self.IdProces)
	{
		self.NIdProces++;
		cdns_req.push("&IDPROCES=", self.IdProces, "_", self.NIdProces);
	}
	//Eliminat el 13-07-2008
	//if (oferir_vincle)
	//	cdns_req.push("&INFO_FORMAT=text/html");
	var cadena_cgi=AfegeixNomServidorARequest(DonaServidorCapa(capa), cdns_req.join(""), 
			ParamCtrl.UsaSempreMeuServidor==true ? true : false, DonaCorsServidorCapa(capa));	

	//Aquest sistema per controlar l'estat no sembla funcionar.
	var iframe=document.getElementById("finestra_download_hidden");
	iframe.i_event=CreaIOmpleEventConsola("GetCoverage", i_capa_wcs, cadena_cgi, TipusEventGetCoverage);
	iframe.onerror=function(event) {
			CanviaEstatEventConsola(event, window.i_event, EstarEventError);
			window.onload=null;
		};
	iframe.onload=function(event) {
			CanviaEstatEventConsola(event, window.i_event, EstarEventTotBe);
		};
	iframe.src=cadena_cgi;
	//

	if (IdProces  && NIdProces)
		setTimeout("CreaEstatDescarrega(ParamCtrl.TempsRefresc, "+i_capa_wcs+")",ParamCtrl.TempsRefresc, iframe.i_event);
}

function MarcaIHabilitaCheckBoxCoverage(nom, marca, habilita)
{
    if (marca==null)
	    ;
	else if (marca)
	    nom.checked=true;
	else
	    nom.checked=false;

    if (habilita)
	    nom.disabled=false;
	else
	    nom.disabled=true;
}

function CanviaParamCoverage(i_par,i_sel, i_capa_wcs)
{
	var param_cov=ParamCtrl.ParGetCoverage[ParamCtrl.capa[i_capa_wcs].ParamCoverage];
	if (param_cov.ll[i_par].cardin=="1")
	{
		if(param_cov.ll[i_par].valors)
		{
			for (var j=0; j<param_cov.ll[i_par].valors.length; j++)
				param_cov.ll[i_par].valors[j].sel=false;
			
			if(i_sel<param_cov.ll[i_par].valors.length)
				param_cov.ll[i_par].valors[i_sel].sel=true;
		}		
	}
	else //"n"
		param_cov.ll[i_par].valors[i_sel].sel=!param_cov.ll[i_par].valors[i_sel].sel;
}

//Excepcions a la norma general:
function ParamCoverageGrisos(i_par, i_capa_wcs)
{
	var param_cov=ParamCtrl.ParGetCoverage[ParamCtrl.capa[i_capa_wcs].ParamCoverage];
	
	if (param_cov.ll.length>i_par+1 &&
	    	param_cov.ll[i_par].nom.nom=="RADIOMET" &&
		param_cov.ll[i_par+1].nom.nom=="BAND")
	{
		for (var j=0; j<param_cov.ll[i_par].valors.length; j++)
		{
			if (param_cov.ll[i_par].valors[j].sel==true)
			{
				if (param_cov.ll[i_par].valors[j].nom=="opti_nat")
				{
					for (var k=0; k<param_cov.ll[i_par+1].valors.length; k++)
					{
						if (param_cov.ll[i_par+1].valors[k].nom=="3-R" ||  //TM o ETM
						        param_cov.l[i_par+1].valors[k].nom=="2-G" ||
							param_cov.l[i_par+1].valors[k].nom=="1-B" ||
							param_cov.ll[i_par+1].valors[k].nom=="4-R" ||  //Combinaci� color_natural landsat 8
							param_cov.ll[i_par+1].valors[k].nom=="3-G" ||
							param_cov.ll[i_par+1].valors[k].nom=="2-B")
						{
							//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+1].nom.nom + "_" + k +", true, false)");
							MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+1].nom.nom + "_" + k], true, false);
							param_cov.ll[i_par+1].valors[k].sel=true;
						}
					    	else
						{
							//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+1].nom.nom + "_" + k +", false, false)");
							MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+1].nom.nom + "_" + k], false, false);
							param_cov.ll[i_par+1].valors[k].sel=false;
						}
					}
					break;
				}
				else if (param_cov.ll[i_par].valors[j].nom=="opti_fals")
				{
					for (var k=0; k<param_cov.ll[i_par+1].valors.length; k++)
					{
						if (param_cov.ll[i_par+1].valors[k].nom=="4-IRp"  || //TM o ETM						
						        param_cov.ll[i_par+1].valors[k].nom=="5-IRm1" ||
							param_cov.ll[i_par+1].valors[k].nom=="3-R"    ||
							param_cov.ll[i_par+1].valors[k].nom=="4-IRp2" || //MSS45
							param_cov.ll[i_par+1].valors[k].nom=="1-G"    ||
							param_cov.ll[i_par+1].valors[k].nom=="2-R"    ||							
							param_cov.ll[i_par+1].valors[k].nom=="7-IRp2" || //MSS13
							param_cov.ll[i_par+1].valors[k].nom=="4-G"    ||
							param_cov.ll[i_par+1].valors[k].nom=="5-R"    ||
							param_cov.ll[i_par+1].valors[k].nom=="5-NIR"   || //landsat 8
							param_cov.ll[i_par+1].valors[k].nom=="6-SWIR1" ||
							param_cov.ll[i_par+1].valors[k].nom=="4-R")
						{
					 	    	//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+1].nom.nom +  "_" + k +", true, false)");
							MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+1].nom.nom +  "_" + k], true, false);
							param_cov.ll[i_par+1].valors[k].sel=true;
						}
						else
						{
							//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+1].nom.nom +  "_" + k +", false, false)");
							MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+1].nom.nom +  "_" + k], false, false);
							param_cov.ll[i_par+1].valors[k].sel=false;
						}
					}
					break;
				}
				else
				{
					for (var k=0; k<param_cov.ll[i_par+1].valors.length; k++)
				    	{
						//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+1].nom.nom + "_" + k +", null, true)");
						MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+1].nom.nom + "_" + k], null, true);
					}
				}
			}
		}
	}
	if (param_cov.ll.length>i_par+2 &&
    		param_cov.ll[i_par].nom.nom=="RADIOMET" &&
	    	param_cov.ll[i_par+2].nom.nom=="QUALITY")
	{
		for (var j=0; j<param_cov.ll[i_par].valors.length; j++)
		{
			if (param_cov.ll[i_par].valors[j].sel==true)
			{
				if (param_cov.ll[i_par].valors[j].nom=="opti_nat" ||
				    param_cov.ll[i_par].valors[j].nom=="opti_fals")
				{
					//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+2].nom.nom + ", null, true)");
					MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+2].nom.nom], null, true);
					break;
				}
			    	else
				{
					//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[i_par+2].nom.nom + ", null, false)");
					MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[i_par+2].nom.nom], null, false);
					break;
				}
			}
		}
	}
}

function CanviaParamCoverageIGrisos(i_par,i, i_capa_wcs)
{    
	CanviaParamCoverage(i_par,i, i_capa_wcs);
	ParamCoverageGrisos(i_par, i_capa_wcs);	
}

function CanviaFormatCoverage(i, i_capa_wcs)
{
var format_cov=ParamCtrl.FormatGetCoverage[ParamCtrl.capa[i_capa_wcs].FormatCoverage];
	for (j=0; j<format_cov.ll.length; j++)
		format_cov.ll[j].sel=false;
	format_cov.ll[i].sel=true;
}

function CanviaParamTextCoverage(nom,i_par,i, i_capa_wcs)
{
var param_cov=ParamCtrl.ParGetCoverage[ParamCtrl.capa[i_capa_wcs].ParamCoverage];

	param_cov.ll[i_par].valors.sel =document.botons_param_wcs.nom;
}

function CreaSelectorAPartirDeLesDatesCapa(i_capa_wcs, nom, i_par)
{
var cdns=[], i_data_sel=DonaIndexDataCapa(ParamCtrl.capa[i_capa_wcs], null);

	if (ParamCtrl.capa[i_capa_wcs].data.length>8)
	{
		cdns.push("<select name=\"", nom,
			"\"",
			((i_par==-1) ? "" : " onChange=\"ParamCtrl.capa["+i_capa_wcs+"].i_data=parseInt(document.botons_param_wcs."+nom+".value);\""),
			">");
													
		for (var i=0; i<ParamCtrl.capa[i_capa_wcs].data.length; i++)
			cdns.push("<option value=\""+i+"\""+
				 ((i_data_sel==i) ? " SELECTED" : "") + "> "+
				 DonaDataCapaComATextBreu(i_capa_wcs, i)+"</option>");
		cdns.push("</select><br>");
	}
	else
	{
		for (var i=0; i<ParamCtrl.capa[i_capa_wcs].data.length; i++)
			cdns.push("<input TYPE=\"radio\" NAME=\"",
				nom, "\" ",
				((i_data_sel==i) ? "CHECKED " : ""),
				((i_par==-1) ? "" : "onClick=\"CanviaParamCoverageIGrisos("+i_par+","+i+","+i_capa_wcs+");\""),
				"> ", DonaDataCapaComATextBreu(i_capa_wcs, i)+"<br>");
	}
	return cdns.join("");
}

function DibuixaOpcionsWCS(i_capa_wcs)
{
var cdns=[], capa=ParamCtrl.capa[i_capa_wcs];

	if ( typeof capa.ParamCoverage!=="undefined" && ParamCtrl.ParGetCoverage!=null &&  // Cal fer !=null perqu� ParGetCoverage pot valer 0 i ho interpreta com a false i no entra quan ho hauria de fer
  		ParamCtrl.ParGetCoverage[capa.ParamCoverage].ll)
	{
		cdns.push("<form name=\"botons_param_wcs\" onSubmit=\"DibuixaOpcionsDescarregaWCS("+i_capa_wcs+");return false;\">"+
				   "<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=\"2\">");
		var param_cov=ParamCtrl.ParGetCoverage[capa.ParamCoverage];
		cdns.push("<center><font size=\"3\"><b>"+DonaCadenaLang({"cat":"Capa","spa":"Capa","eng":"Layer","fre":"Couche"})+" "+
			DonaCadena(capa.desc)+"</b></font><br>",
			DonaCadenaLang({"cat": "Desc�rrega selectiva de la zona",
						"spa": "Descarga selectiva de la zona",
						"eng": "Selective download of the zone",
						"fre": "T�l�chargement s�lectif de la zone"})," (OGC-WCS)",
			"</center>");
		for (var i_par=0; i_par<param_cov.ll.length; i_par++)
		{
			cdns.push("<fieldset><legend><b>"+DonaCadena(param_cov.ll[i_par].nom.desc));
			if (param_cov.ll[i_par].cardin=="i")
			{
				cdns.push(" ["+ param_cov.ll[i_par].valors.v1 +"  </b><small>("+ 
					DonaCadena(param_cov.ll[i_par].valors.desc1) +")</small><b>-"+
					param_cov.ll[i_par].valors.v2 +"</b><small>("+
					DonaCadena(param_cov.ll[i_par].valors.desc2) +
					")</small><b>]:</b></legend> <input TYPE=\"text\" NAME=\""+ param_cov.ll[i_par].nom.nom +
					"\" VALUE=\""+param_cov.ll[i_par].valors.sel+
					"\" SIZE=\"10\" onChange=\"ParamCtrl.capa["+i_capa_wcs+"].ParamCoverage.ll["+i_par+
					"].valors.sel=document.botons_param_wcs."+param_cov.ll[i_par].nom.nom+".value;\"><br>");
			}
			else if (param_cov.ll[i_par].cardin=="1")
			{
				cdns.push(":</b></legend>");
				if (param_cov.ll[i_par].nom.nom=="TIME" && param_cov.ll[i_par].valors==null)
				{
					cdns.push(CreaSelectorAPartirDeLesDatesCapa(i_capa_wcs, param_cov.ll[i_par].nom.nom, i_par));
				}
				else
				{
			  		for (var i=0; i<param_cov.ll[i_par].valors.length; i++)
                		cdns.push("<input TYPE=\"radio\" NAME=\""+ 
							param_cov.ll[i_par].nom.nom + "\" "+ 
							((param_cov.ll[i_par].valors[i].sel) ? "CHECKED " : "") + 
							"onClick=\"CanviaParamCoverageIGrisos("+i_par+","+i+","+i_capa_wcs+");\"> "+
							DonaCadena(param_cov.ll[i_par].valors[i].desc)+"<br>");
				}
			}			 	 
			else
			{
				cdns.push(":</b></legend>");
				for (var i=0; i<param_cov.ll[i_par].valors.length; i++)
		    	{
		            cdns.push("<input TYPE=\"checkbox\" NAME=\"" + 
						param_cov.ll[i_par].nom.nom + "_" + i + "\" " + 
						((param_cov.ll[i_par].valors[i].sel) ? "CHECKED " : "")  +
						"onClick=\"CanviaParamCoverageIGrisos("+i_par+","+i+","+i_capa_wcs+");\"> "+
						DonaCadena(param_cov.ll[i_par].valors[i].desc)+"<br>");
				}
			}
			cdns.push("</fieldset>");
		}
		cdns.push("<center><input NAME=\"seguent\" ID=\"seguent\" TYPE=\"submit\" VALUE=\""+DonaCadenaLang({"cat":"Seg�ent", "spa":"Siguiente", "eng":"Next", "fre":"Suivant"})+"\"></center>"+
						   "</font></form>");
		contentLayer(getLayer(window, "finestra_download_opcions"), cdns.join(""));

		ParamCoverageGrisos(0, i_capa_wcs);

		//Provisional fins que disposem de les imatges corregides radiom�tricament.
		var param_cov=ParamCtrl.ParGetCoverage[capa.ParamCoverage];
		if (param_cov.ll[0].nom.nom=="RADIOMET")
		{
	        for (var j=0; j<param_cov.ll[0].valors.length; j++)
			{
			    if (param_cov.ll[0].valors[j].nom=="corr")
				{
					//eval("MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs." + param_cov.ll[0].nom.nom + "[j], null, false)");
					MarcaIHabilitaCheckBoxCoverage(document.botons_param_wcs[param_cov.ll[0].nom.nom + "["+j+"]"], null, false);
				}
			}
		}
	}
	else
	{
		DibuixaOpcionsDescarregaWCS(i_capa_wcs);
	}
}

function DonaMissatgeSiMMZCalMiraMon()
{
var cdns=[];
	cdns.push("<br><small>");
	if (ParamCtrl.DescarregesCertificades)
		cdns.push(DonaCadenaLang({"cat":"Per el format MMZ o MMZX, si no teniu instal�lat o actualitzat el Lector Universal de Mapes del MiraMon, <a href=\"http://www.creaf.uab.cat/miramon/mmr/cat\" target=\"_blank\">descarregueu-lo</a>",
					"spa":"Para el formato MMZ o MMZX, si no tiene instalado o actualizado el Lector Universal de Mapas de MiraMon, <a href=\"http://www.creaf.uab.cat/miramon/mmr/esp\" target=\"_blank\">desc�rguelo</a>",
					"eng":"For the MMZ or MMZX format, if you don't have installed or updated MiraMon Universal Map Reader, please, <a href=\"http://www.creaf.uab.cat/miramon/mmr/usa\" target=\"_blank\">download it</a>",
					"fre":"Pour le format MMZ ou MMZX, si vous n'avez pas install� o� actualis� le Lecteur Universel de Cartes du MiraMon, please, <a href=\"http://www.creaf.uab.cat/miramon/mmr/usa\" target=\"_blank\">download it</a>"}));
	else
		cdns.push(DonaCadenaLang({"cat":"Per poder visualitzar les capes en format MMZ o MMZX cal tenir correctament instal�lat el programa MiraMon.", 
					"spa":"Para poder visualitzar las capas en formato MMZ o MMZX es necessario tener correctamente instalado el programa MiraMon.", 
					"eng":"In order to be able to view the layers in MMZ of MMZX format, and installed version of the MiraMon software is required.",
					"fre":"Pour pouvoir visualiser les couches en MMZ du format MMZX, et la version install�e du logiciel MiraMon est n�cessaire"}));
	cdns.push("</small>");
	return cdns.join("");
}


function DibuixaOpcionsDescarregaWCS(i_capa_wcs)
{
var cdns=[], missatge_mmz=false;


	cdns.push("<form name=\"botons_descarrega\" onSubmit=\"DescarregaWCS(false, "+i_capa_wcs+");return false;\">"+
				   "<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=\"2\">");
				   
	cdns.push("<center><font size=\"3\"><b>"+DonaCadenaLang({"cat":"Capa","spa":"Capa","eng":"Layer","fre":"Couche"})+" "+
			DonaCadena(ParamCtrl.capa[i_capa_wcs].desc)+"</b></font><br>",
			DonaCadenaLang({"cat": "Desc�rrega selectiva de la zona",
						"spa": "Descarga selectiva de la zona",
						"eng": "Selective download of the zone",
						"fre": "T�l�chargement s�lectif de la zone"})," (OGC-WCS)<br>",
			"</center>");
	var format_cov=ParamCtrl.FormatGetCoverage[ParamCtrl.capa[i_capa_wcs].FormatCoverage];
	cdns.push("<fieldset><legend><b>", DonaCadenaLang({"cat": "Format",
				"spa": "Formato",
				"eng": "Format",
				"fre": "Format"}), ":</b></legend>");

	for (var i=0; i<format_cov.ll.length; i++)
	{
		cdns.push("<input TYPE=\"radio\" NAME=\"format\" ", 
				((format_cov.ll[i].sel) ? "CHECKED " : ""),
				"onClick=\"CanviaFormatCoverage("+i+");\"> ",
				DonaCadena(format_cov.ll[i].desc)+"<br>");
		if (format_cov.ll[i].nom=="application/x-mmz" || format_cov.ll[i].nom=="application/x-mmzx")
			missatge_mmz=true;
	}
	cdns.push("</fieldset>");
	if (missatge_mmz)
		cdns.push(DonaMissatgeSiMMZCalMiraMon())

	/* Els sistema de desc�rrega se simplifica donat que la opci� "Generar i obrir" nom�s funciona amb Internet explorer.
	cdns.push("<br><center>",
			"<input name=\"obrir\" TYPE=\"submit\" VALUE=\"",
			DonaCadenaLang({"cat":"Generar i obrir directament","spa":"Generar y ofrecer directamente","eng":"Generate and offer directly","fre":"Cr�er et ouvrir directement"}),
			"\"></br><input TYPE=\"button\" VALUE=\"",
			DonaCadenaLang({"cat":"Preparar i oferir","spa":"Preparar y ofrecer","eng":"Prepare and offer","fre":"Pr�parer et t�l�charger"}),
			"\" onClick=\"DescarregaWCS(true, ",i_capa_wcs,")\">",
			" (",DonaCadenaLang({"cat":"per a guardar el fitxer", "spa":"para guardar el fichero", "eng":"to save file", "fre":"pour enregistrer le fichier"}),")</center>");*/

	cdns.push("<br><center><input TYPE=\"button\" VALUE=\"",
			DonaCadenaLang({"cat":"Descarregar","spa":"Descargar","eng":"Download","fre":"T�l�charger"}),
			"\" onClick=\"DescarregaWCS(true, ",i_capa_wcs,")\"></center>");

	cdns.push("</font></form>");
	contentLayer(getLayer(window, "finestra_download_opcions"), cdns.join(""));
}

function EsCapaDecarregableIndividualment(capa)
{
	if ((typeof capa.FormatCoverage!=="undefined" && capa.FormatCoverage!=null) ||  // Cal fer expressament diferent de null perqu� si fem nom�s fem capa.FormatCoverage, com que val 0 �s false i no entra
		 capa.DescarregaTot)
		return true;
	return false;
}

function DeterminaTimeDescarregaCapa(i_capa)
{
var i, s, capa=ParamCtrl.capa[i_capa];

	if (capa.data)
	{
		if (capa.data.length>8)
			return OfereixOpcionsDescarregaTot(i_capa, document.botons_descarrega.TIME.selectedIndex);
		else if (capa.data.length==1)
			return OfereixOpcionsDescarregaTot(i_capa, 0);
		else
		{
			for (i=0; i<capa.data.length; i++)
			{
				if (document.botons_descarrega.TIME[i].checked)
					return OfereixOpcionsDescarregaTot(i_capa, i);
			}
		}
	}
	return OfereixOpcionsDescarregaTot(i_capa, null); //Aix� no hauria de passar mai, per� per si de cas.
}

function DibuixaTimeDescarregaTot(i_capa)
{
var cdns=[], capa=ParamCtrl.capa[i_capa];

	if (capa.data)
	{
		cdns.push("<form name=\"botons_descarrega\" onSubmit=\"DeterminaTimeDescarregaCapa("+i_capa+");return false;\">"+
				   "<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=\"2\">");
		cdns.push("<center><font size=\"3\"><b>"+DonaCadenaLang({"cat":"Capa","spa":"Capa","eng":"Layer","fre":"Couche"})+" "+
				DonaCadena(capa.desc)+"</b></font><br>",
				DonaCadenaLang({"cat": "Desc�rrega de la capa completa",
							"spa": "Descarga de la capa completa",
							"eng": "Download the full layer",
							"fre": "T�l�chargement de la couche compl�te"}),"<br>",
				"</center>");

		if (capa.data)
		{
			//Aquesta part es part fer millor
			cdns.push("<fieldset><legend><b>")
		
			if (typeof capa.FlagsData==="undefined" || capa.FlagsData===null || 
				(capa.DataMostraDia && capa.DataMostraHora))
				cdns.push(DonaCadenaLang({"cat": "Data i hora",
					"spa": "Fecha y hora",
					"eng": "Date and time",
					"fre": "Date et l'heure"}));
			else if (capa.DataMostraHora)
				cdns.push(DonaCadenaLang({"cat": "Hora",
					"spa": "Hora",
					"eng": "Time",
					"fre": "L'heure"}));
			else	
				cdns.push(DonaCadenaLang({"cat": "Data",
					"spa": "Fecha",
					"eng": "Date",
					"fre": "Date"}));
			cdns.push(":</b></legend>");
			cdns.push(CreaSelectorAPartirDeLesDatesCapa(i_capa, "TIME", -1));
			cdns.push("</fieldset>")
		}
		cdns.push("<center><input NAME=\"seguent\" ID=\"seguent\" TYPE=\"submit\" VALUE=\""+DonaCadenaLang({"cat":"Seg�ent", "spa":"Siguiente", "eng":"Next", "fre":"Suivant"})+"\"></center>"+
						   "</font></form>");
		contentLayer(getLayer(window, "finestra_download_opcions"), cdns.join(""));
	}
	else
		OfereixOpcionsDescarregaTot(i_capa, null);
}

function OfereixOpcionsDescarregaTot(i_capa, i_data)
{
var cdns=[], capa=ParamCtrl.capa[i_capa], missatge_mmz=false;

	cdns.push("<form name=\"botons_descarrega\" onSubmit=\"DescarregaFitxerCapa("+i_capa+");return false;\">"+
				   "<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=\"2\">");
	cdns.push("<center><font size=\"3\"><b>"+DonaCadenaLang({"cat":"Capa","spa":"Capa","eng":"Layer","fre":"Couche"})+" "+
			DonaCadena(capa.desc)+"</b></font><br>",
			DonaCadenaLang({"cat": "Desc�rrega de la capa completa",
						"spa": "Descarga de la capa completa",
						"eng": "Download the full layer",
						"fre": "T�l�chargement de la couche compl�te"}),"<br>",
			"</center>");

	cdns.push("<fieldset><legend><b>", DonaCadenaLang({"cat": "Opci�",
				"spa": "Opici�n",
				"eng": "Option",
				"fre": "Option"}), ":</b></legend>");


	for (var i=0; i<capa.DescarregaTot.length; i++)
	{
		//S'ha de demanar la descarrega de la url enviant-la a l'iframe ocult.
		for (var i_format=0; i_format<capa.DescarregaTot[i].format.length; i_format++)
		{
			cdns.push("<a href=\"", DonaNomFitxerDescarregaTot(i_capa, i, i_format, i_data), "\" target=\"_blank\">",DonaCadena(capa.DescarregaTot[i].desc),
				"</a> (",DonaCadena(ParamCtrl.FormatDescarregaTot[capa.DescarregaTot[i].format[i_format]].format.desc),
				")<br>");
			if (ParamCtrl.FormatDescarregaTot[capa.DescarregaTot[i].format[i_format]].format.nom=="application/x-mmz" || 
			    ParamCtrl.FormatDescarregaTot[capa.DescarregaTot[i].format[i_format]].format.nom=="application/x-mmzx")
				missatge_mmz=true;
		}
	}
	cdns.push("</fieldset>");
	if (missatge_mmz)
		cdns.push(DonaMissatgeSiMMZCalMiraMon())
	
	cdns.push("</font></form>");

	contentLayer(getLayer(window, "finestra_download_opcions"), cdns.join(""));
}

function DibuixaTriaDescarregaWCSoTot(i_capa)
{
var cdns=[];

	cdns.push("<form name=\"botons_descarrega\" onSubmit=\"if (document.botons_descarrega.protocol[0].checked==true){ DibuixaTimeDescarregaTot("+i_capa+");return false;}else{DibuixaOpcionsWCS("+i_capa+");return false;}\">"+
		   "<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=\"2\">");
				   
	cdns.push("<center><font size=\"3\"><b>"+DonaCadenaLang({"cat":"Capa","spa":"Capa","eng":"Layer","fre":"Couche"})+" "+
			DonaCadena(ParamCtrl.capa[i_capa].desc)+"</b></font><br></center>");
	cdns.push("<input TYPE=\"radio\" NAME=\"protocol\" checked=\"checked\"> ",
				DonaCadenaLang({"cat": "Desc�rrega de la capa completa",
						"spa": "Descarga de la capa completa",
						"eng": "Download the full layer",
						"fre": "T�l�chargement de la couche compl�te"}),"<br>");
	cdns.push("<input TYPE=\"radio\" NAME=\"protocol\"> ",
				DonaCadenaLang({"cat": "Desc�rrega selectiva de la zona",
						"spa": "Descarga selectiva de la zona",
						"eng": "Selective download of the zone",
						"fre": "T�l�chargement s�lectif de la zone"}),"<br>");

	cdns.push("<center><input NAME=\"seguent\" ID=\"seguent\" TYPE=\"submit\" VALUE=\""+DonaCadenaLang({"cat":"Seg�ent", "spa":"Siguiente", "eng":"Next", "fre":"Suivant"})+"\"></center>"+
						   "</font></form>");
	contentLayer(getLayer(window, "finestra_download_opcions"), cdns.join(""));
	return;
}

function OmpleFinestraDownload(i_capa)
{
var cdns=[], capa;

	//<div class=\"Verdana11px\">
	cdns.push("<center>", DonaCadena(ParamCtrl.TitolCaixa), "</center>");
	cdns.push("<div id=\"finestra_download_opcions\" style=\"overflow-y: auto; height:250px;\"></div>");
	cdns.push("<iframe id=\"finestra_download_hidden\" width=\"1\" height=\"1\" style=\"display:none\"></iframe>");
	cdns.push(DonaCadenaLang({"cat":"Estat", "spa":"Estado", "eng":"Status", "fre":"statut"}), ":<div id=\"finestra_download_status\" style=\"height: 52px; width: 98%; background-color: #EEEEEE\"></div>");
	cdns.push("<div align=\"right\"><a href=\"javascript:void(0);\" onclick='TancaFinestraLayer(\"download\");'>",
		DonaCadenaLang({"cat":"Tancar", "spa":"Cerrar", "eng":"Close", "fre":"Quitter"}),"</a></div>");

	contentFinestraLayer(window, "download", cdns.join(""));

	capa=ParamCtrl.capa[i_capa];

	if (typeof capa.FormatCoverage!=="undefined" && capa.FormatCoverage!=null && 
	    typeof capa.DescarregaTot!=="undefined" && capa.DescarregaTot!=null)
		DibuixaTriaDescarregaWCSoTot(i_capa)
	else if (typeof capa.FormatCoverage!=="undefined" && capa.FormatCoverage!=null)
		DibuixaOpcionsWCS(i_capa);
	else if (typeof capa.DescarregaTot!=="undefined" && capa.DescarregaTot!=null)
		DibuixaTimeDescarregaTot(i_capa);
	
	return;
}

function MostraFinestraDownload(i_capa)
{
	if (!ObreFinestra(window, "download", DonaCadenaLang({"cat":"de descarregar", 
							  "spa":"de descargar",
							  "eng":"of downloading",
							  "fre":"de t�l�chargement"})))
		return;
	OmpleFinestraDownload(i_capa);
}
