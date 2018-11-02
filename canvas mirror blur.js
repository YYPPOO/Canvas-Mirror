var desiredmargin = 5; //四周映射邊長 單位cm

var docRef = app.activeDocument;
var docWidth = docRef.width.as("cm");
var docHeight = docRef.height.as("cm");

var white = new SolidColor(); 
white.rgb.hexValue = "FFFFFF";
app.backgroundColor = white;

docRef.flatten();

var layerRef1 = docRef.artLayers[0].duplicate(docRef.artLayers[0],ElementPlacement.PLACEBEFORE);
layerRef1.applyGaussianBlur(2.5);

var layerRef3 = layerRef1.duplicate(layerRef1,ElementPlacement.PLACEBEFORE);
var layerRef5 = layerRef3.duplicate(layerRef3,ElementPlacement.PLACEBEFORE);

layerRef1.resize(new UnitValue(100,'%'),new UnitValue(-100,'%'));
layerRef3.resize(new UnitValue(-100,'%'),new UnitValue(100,'%'));
layerRef5.resize(new UnitValue(100,'%'),new UnitValue(-100,'%'));
layerRef5.resize(new UnitValue(-100,'%'),new UnitValue(100,'%'));

var layerRef2 = layerRef1.duplicate(layerRef1,ElementPlacement.PLACEBEFORE);
var layerRef4 = layerRef3.duplicate(layerRef3,ElementPlacement.PLACEBEFORE);
var layerRef6 = layerRef5.duplicate(layerRef5,ElementPlacement.PLACEBEFORE);
var layerRef7 = layerRef6.duplicate(layerRef6,ElementPlacement.PLACEBEFORE);
var layerRef8 = layerRef7.duplicate(layerRef7,ElementPlacement.PLACEBEFORE);

docRef.resizeCanvas(UnitValue(docWidth+2*desiredmargin,"cm"),UnitValue(docHeight+2*desiredmargin,"cm"));

layerRef1.translate(0,-docHeight);
layerRef2.translate(0,docHeight);
layerRef3.translate(-docWidth,0);
layerRef4.translate(docWidth,0);
layerRef5.translate(-docWidth,-docHeight);
layerRef6.translate(docWidth,-docHeight);
layerRef7.translate(-docWidth,docHeight);
layerRef8.translate(docWidth,docHeight);

docRef.flatten();