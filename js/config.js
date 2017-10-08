/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.06
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "S.T.A.L.K.E.R Roleplay";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "QF6ENkSKLRM", name: "Addaraya - Gurza Dreaming"},
	{youtube: "stWUtXdn7sQ", name: "Сталкер - песня про Чистое Небо"},
	{youtube: "AGhcWH5C6q4", name: "СТАЛКЕР - Зона отчуждения(песня)"},
	{youtube: "xEvyf-EE1K8", name: "STALKER - 2000 БАКСОВ"},
	{youtube: "I_WhqUmtnLI", name: "S.T.A.L.K.E.R. - Три пути (Римейк)"},
	{youtube: "yp1oPFhmgmg", name: "Гимн Военных"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Get out of here S.T.A.L.K.E.R",
"S.T.A.L.K.E.R is an acronym for Scavengers, Trespassers, Adventurers, Loners, Killers, Explorers, Robbers",
"Ah Nuu Cheeki Breeki Iv Damke",
"Vodka, a cheap alternative to antirad meds, is the easiest way to reduce the effects of radiation on the body.",
"Technicians in Stalker Camps can upgrade your weapons, suits and helmets.",
"The weight you are carrying reduces your endurance. Excess weight will restrict your mobility, while being completely overloaded will stop you from moving altogether.",
"You can hide and show different markers on the map in your PDA using filters. Filter buttons are located above the map, under the current mission line.",
"Some suits have integrated helmets. It is not possible to use other helmets with such suits.",
"To wait an emission out, take cover in a reliable building or underground. When an emission is approaching, the nearest cover will be marked on your PDA",
"Weapon flatness affects bullet trajectory, while handling determines the time it takes the sight to return to its original position after firing.",
"You can use a bandage, a military medkit or Vinca drugs to stop bleeding. If you don't deal with it quickly, bleeding can seriously damage your health.",
"Drugs don't take effect immediately and some last for quite a long time.",
"You can access detailed information about the current mission by checking your PDA.",
"You can unload the weapons you find to get more ammo. To do this, right-click on the weapon in your backpack and select the appropriate action from the context menu.",
"To use an item via the quick access slot, drag it from your backpack to one of the four slots above the artifact containers.",
"You need a detector to search for artifacts. The best detectors make searching easier and may even detect more valuable artifacts.",
"One of the most common threats in The Zone is radiation. Serious exposure will harm your health and can be terminal if not treated adequately.",
"As well as addressing your hunger, food will also slightly improve your health.",
"Energy drinks temporarily improve your endurance recovery, which increases your potential mobility.",
"Take some food with you when going on a long raid. If you get really hungry, your endurance recovery will suffer greatly.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;