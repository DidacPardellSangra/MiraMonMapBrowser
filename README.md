# MiraMonMapBrowser

## Mission
The most popular map browsers available (e.g. Leaflet, OpenLayers) require you to call JavaScript libraries from your page. This assumes some knowledge of JavaScript. The MiraMon Map Browser is designed in a way that does not require the user to have any knowledge of coding. Instead, the JavaScript code interprets a config.json file that configures all aspects of the browser in a declarative way, including distribution of the elements in the screen as well as the list of data layers and services shown. The used of the MiraMon Map Browser is expected to edit the config.json only.

Our aim is to support as many OGC web services and OGA API standards as possible. The Map Browser can be used to present and analyze information coming from standard OGC web services from any vendor. However, we also experiment with extensions of the OGC standards and this can be obtained by combining the Browser with the MiraMon Map Server CGI. The most significant example of extension that we promote is the use of WMS with binary arrays.

General information about the main functionalities of the map browser here: https://www.miramon.cat/USA/Prod-NavegadorServidor.htm

## Code

The code of the map browser is in the SRC folder. To test it, you can set a copy of the SRC folder in your web server folder (for example, in Windows IIS, folder in C:\inetpub\wwwroot\MiraMonMapBrowser). The landing page of the browser is called index.htm. The code of the MiraMon Map Browser can be used with no modification.

The MiraMon Map Browser can be configured to your purposes populating a file named config.json document. The SRC folder does not contain a config.json file to prevent accidental lost of your instance configuration when updating. Several examples of config.json documents can be found in [the examples](src/examples) folder. You can request a Windows application called Adm_MMN.exe to edit some parts of config.json in a more user friendly way by sending a request to suport@miramon.uab.cat (unfortunately this application does not allow to configure the recent functionalities).

The config.json file data model is described and can be validated using a [json schema file](src/config-schema.json)

It is also possible to load a config file with a different name by calling the landing page with the extra parameter index.htm?config={name-config-json}

## Evolution
Commit descriptions provide information about updates and corrections not listed here

## Attribution
The MiraMon Map Browser is part of the MiraMon project managed by CREAF.

More information about this product can be found in the [MiraMon website](https://www.miramon.cat/USA/Prod-NavegadorServidor.htm#MiraMonMapBrowser) with some [examples of applications](https://www.miramon.cat/CAT/Servidors.htm)

## Licence
The code is distributed under the GNU AFFERO GENERAL PUBLIC LICENSE. We encourage reuse of our code. We will appreciate a reference in the acknowledgements of any modified code.

## Publications
Masó J., Zabala A., Pons X. (2020) Protected Areas from Space Map Browser with Fast Visualization and Analytical Operations on the Fly. Characterizing Statistical Uncertainties and Balancing Them with Visual Perception . ISPRS International Journal of Geo-Information. Vol.9 (5), pp.30-Article Id: 300. DOI: 10.3390/ijgi9050300 . In Internet: https://www.mdpi.com/2220-9964/9/5/300/pdf
