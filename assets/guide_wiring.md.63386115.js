import{_ as e,o as t,c as r,S as a}from"./chunks/framework.8fda3224.js";const n="/sunsynk/assets/usb-wave-rs485.e28b8c70.webp",s="/sunsynk/assets/usb-rs485-cable.b8a1448e.webp",i="/sunsynk/assets/usb-rs485-rj45.62bc958d.webp",o="/sunsynk/assets/eth-hf5142.9c1f5021.webp",l="/sunsynk/assets/eth-hf5142-settings.6d1f7f61.webp",m=JSON.parse('{"title":"Adaptors & Wiring","description":"","frontmatter":{},"headers":[],"relativePath":"guide/wiring.md","filePath":"guide/wiring.md","lastUpdated":1692299928000}'),h={name:"guide/wiring.md"},d=a('<h1 id="adaptors-wiring" tabindex="-1">Adaptors &amp; Wiring <a class="header-anchor" href="#adaptors-wiring" aria-label="Permalink to &quot;Adaptors &amp; Wiring&quot;">​</a></h1><h2 id="rs485-wiring" tabindex="-1">RS485 wiring <a class="header-anchor" href="#rs485-wiring" aria-label="Permalink to &quot;RS485 wiring&quot;">​</a></h2><p>RS485 requires a twisted pair, this works with CAT5 network cable and RJ-45 connectors.</p><p>If the RJ-45 connector on the inverter side is crimped according to <a href="https://en.wikipedia.org/wiki/ANSI/TIA-568#Wiring" target="_blank" rel="noreferrer">T568A/T568B</a>, you can use the pinout in the following table. If the two outermost colors you see on the connector are brown and green, it is probably T568A; if they are brown and orange, it is probably T568B.</p><table><thead><tr><th style="text-align:center;">RJ45 Pin<br>(inverter side)</th><th style="text-align:center;">Wire Color<br>(when using T568A)</th><th style="text-align:center;">Wire Color<br>(when using T568B)</th><th style="text-align:center;">RS485<br>pins</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">Green-White</td><td style="text-align:center;">Orange-White</td><td style="text-align:center;">B/D-</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">Green</td><td style="text-align:center;">Orange</td><td style="text-align:center;">A/D+</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">Orange-White</td><td style="text-align:center;">Green-White</td><td style="text-align:center;">GND</td></tr></tbody></table><h2 id="usb-to-rs485-adaptors" tabindex="-1">USB-to-RS485 adaptors <a class="header-anchor" href="#usb-to-rs485-adaptors" aria-label="Permalink to &quot;USB-to-RS485 adaptors&quot;">​</a></h2><ol><li><p>Wave USB-to-RS485 <a href="https://www.robotics.org.za/W17286" target="_blank" rel="noreferrer">example</a></p><p>This is my preferred adaptor. It includes a GND and lightning/ESD protection, TVS diodes and a resettable fuse.</p><p><img src="'+n+'" alt="Wave" width="360" height="360"></p><p>Wave also has a RS485-to-Ethernet module. (which does not work!)</p></li><li><p>USB-to-RS485 adaptor with cable <a href="https://www.robotics.org.za/index.php?route=product/product&amp;product_id=5947" target="_blank" rel="noreferrer">example</a></p><p>Includes a GND and TVS diode and USB self recovery options.</p><p><img src="'+s+'" alt="Cable" width="360" height="360"></p></li></ol><p>Other tested adaptors</p><ul><li><p>USB-to-RS485 3 Pin adaptor <a href="https://www.robotics.org.za/RS485-3P" target="_blank" rel="noreferrer">example</a></p><p>Includes a GND and TVS diode and USB self recovery options.</p></li><li><p>2-Wire USB-to-RS485 <a href="https://www.robotics.org.za/RS485-MINI" target="_blank" rel="noreferrer">example</a></p><p>This is the adaptor I started with. It works, but does not include a GND, so your success might vary. <img src="'+i+'" alt="2-wire" width="250" height="250"></p></li></ul><h2 id="ethernet-to-rs485-gateways" tabindex="-1">Ethernet-to-RS485 gateways <a class="header-anchor" href="#ethernet-to-rs485-gateways" aria-label="Permalink to &quot;Ethernet-to-RS485 gateways&quot;">​</a></h2><ol><li><p>USR-W630 Wifi-to-RS485</p><p>This is a tested Wifi-to-RS485 gateway, which also includes a GND.</p><p>Requires <code>READ_SENSORS_BATCH_SIZE</code> set to 8 or less</p></li><li><p>USR-W610 Wifi-to-RS485</p><p>This is a tested Wifi-to-RS485 gateway. Usually significantly cheaper than the W630, however it does not include a GND.</p><p>Requires <code>READ_SENSORS_BATCH_SIZE</code> set to 8 or less</p></li><li><p>HF5142B Modbus/serial to ethernet (4x RS232/485/422 to 4x E-Ports)</p><p><img src="'+o+'" alt="gateway"></p><p>This gateway was tested with the Deye 8k EU Hybrid inverter. The following serial settings were used:</p><p><img src="'+l+'" alt="settings" width="400" height="400"></p></li></ol><h2 id="sunsynk-inverters" tabindex="-1">Sunsynk Inverters <a class="header-anchor" href="#sunsynk-inverters" aria-label="Permalink to &quot;Sunsynk Inverters&quot;">​</a></h2><h3 id="sunsynk-3-6kw-inverter" tabindex="-1">Sunsynk 3.6kW Inverter <a class="header-anchor" href="#sunsynk-3-6kw-inverter" aria-label="Permalink to &quot;Sunsynk 3.6kW Inverter&quot;">​</a></h3><img src="https://github.com/kellerza/sunsynk/raw/main/images/inv-ss-3-6kw.png" width="80%"><h3 id="sunsynk-ecco-3-6kw-hybrid-inverter" tabindex="-1">Sunsynk Ecco 3.6kW Hybrid Inverter <a class="header-anchor" href="#sunsynk-ecco-3-6kw-hybrid-inverter" aria-label="Permalink to &quot;Sunsynk Ecco 3.6kW Hybrid Inverter&quot;">​</a></h3><p>Model number: <code>SUN-3.6K-SG04LP1-EU</code></p><p>This likely applies to similar models in the Ecco range: <code>SUN-3K-SG04LP1-24-EU / SUN-3K-SG04LP1-EU / SUN-5K-SG04LP1-EU / SUN-6K-SG04LP1-EU</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The newer Ecco inverters have a combined RS485 and CAN-BUS port. If your battery is already using the port for its CAN-BUS communications, an RJ45 splitter is required to separate the communications between RS485 and CAN-BUS.</p><p><a href="https://solar-assistant.io/help/deye/2_in_1_bms_port" target="_blank" rel="noreferrer">SolarAssistant have a helpful page</a> that explains the wiring of the port and the splitter required.</p></div><img src="https://github.com/kellerza/sunsynk/raw/main/images/inv-ss-ecco-3-6kw.png" width="80%"><p><a href="https://github.com/kellerza/sunsynk/raw/main/images/inv-ss-ecco-3-6kw-485can.png" target="_blank" rel="noreferrer">Closer view of the RS485/CAN port</a></p><h3 id="sunsynk-5-5kw-inverter" tabindex="-1">Sunsynk 5.5kW Inverter <a class="header-anchor" href="#sunsynk-5-5kw-inverter" aria-label="Permalink to &quot;Sunsynk 5.5kW Inverter&quot;">​</a></h3><p>Tested with: USB-to-RS485 adaptor sourced from Banggood, very similar to <a href="https://www.robotics.org.za/RS485-MINI?search=rs485" target="_blank" rel="noreferrer">this</a>.</p><p>NOTE: RJ-45 port marked <strong>RS485</strong> (bottom right) does not work.</p><h3 id="sunsynk-8-8kw-inverter" tabindex="-1">Sunsynk 8.8kW Inverter <a class="header-anchor" href="#sunsynk-8-8kw-inverter" aria-label="Permalink to &quot;Sunsynk 8.8kW Inverter&quot;">​</a></h3><img src="https://github.com/kellerza/sunsynk/raw/main/images/inv-ss-8kw.png" width="80%"><p>Tested with: USB-to-485 adaptor sourced from Micro Robotics, <a href="https://www.robotics.org.za/index.php?route=product/product&amp;product_id=5947" target="_blank" rel="noreferrer">here</a></p><h2 id="deye-inverters" tabindex="-1">Deye Inverters <a class="header-anchor" href="#deye-inverters" aria-label="Permalink to &quot;Deye Inverters&quot;">​</a></h2><h3 id="deye-8kw-inverter" tabindex="-1">Deye 8kW Inverter <a class="header-anchor" href="#deye-8kw-inverter" aria-label="Permalink to &quot;Deye 8kW Inverter&quot;">​</a></h3><img src="https://github.com/kellerza/sunsynk/raw/main/images/inv-deye-8kw.png" width="80%"><p>RS485 is the blue line - top left, as with the Sunsynk inverters. Yellow is the CAN-comms with the Pylontech batteries</p><h2 id="turbo-energy-inverter" tabindex="-1">Turbo-Energy Inverter <a class="header-anchor" href="#turbo-energy-inverter" aria-label="Permalink to &quot;Turbo-Energy Inverter&quot;">​</a></h2><h3 id="turbo-energy-5kw-inverter" tabindex="-1">Turbo-Energy 5kW Inverter <a class="header-anchor" href="#turbo-energy-5kw-inverter" aria-label="Permalink to &quot;Turbo-Energy 5kW Inverter&quot;">​</a></h3><p>Tested with: USB-to-RS485 adaptor sourced from Aliexpress, very similar to <a href="https://www.robotics.org.za/RS485-3P" target="_blank" rel="noreferrer">this</a>.</p>',33),p=[d];function c(u,g,w,b,k,y){return t(),r("div",null,p)}const f=e(h,[["render",c]]);export{m as __pageData,f as default};