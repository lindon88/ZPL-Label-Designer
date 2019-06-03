if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.labelControl)
    com.logicpartners.labelControl = {};

com.logicpartners.labelControl.generatezpl = function (designer) {
    var self = this;
    this.designer = designer;
    this.workspace = $("<div></div>").addClass("designerLabelControlCustom").attr("title", "Label Size");

    this.buttonContainer = $("<div></div>").appendTo(this.workspace);

    this.button = $("<button class='label-designer-btn__warning'>View ZPL</button>").appendTo(this.buttonContainer)
        .on("click", function () {
            var zpl = self.designer.generateZPL();
            console.log(zpl.data + zpl.zpl);
        });

    this.button = $("<button class='label-designer-btn__warning'>Export</button>").appendTo(this.buttonContainer)
        .on("click", function () {
            var zpl = self.designer.exportMetaData();
            console.log(zpl.json);
        });

    this.button = $("<button class='label-designer-btn__warning'>Import</button>").appendTo(this.buttonContainer)
        .on("click", function () {

            var jsonInput = prompt("Your meta data input");
            self.designer.importFromMetaData(jsonInput);
        });

    this.update = function () {
        this.widthController.val(this.designer.labelWidth / this.designer.dpi);
        this.heightController.val(this.designer.labelHeight / this.designer.dpi);
    }
};

if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.labelControl)
	com.logicpartners.labelControl = {};
	
com.logicpartners.labelControl.size = function(designer) {
	var self = this;
	this.designer = designer;
	this.workspace = $("<div></div>").addClass("designerLabelControl").attr("title", "Label Size");
	
	this.widthContainer = $("<div>Width (inches): </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.widthController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.val(this.designer.labelWidth / this.designer.dpi)
		.appendTo(this.widthContainer)
		.on("blur", function() {
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.heightContainer = $("<div>Height (inches): </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.heightController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.val(this.designer.labelHeight / this.designer.dpi)
		.appendTo(this.heightContainer)
		.on("blur", function() {
			
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
		this.dpiContainer = $("<div>DPI: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
		this.dpiController = $("<input type=\"text\" />")
			.addClass("designerLabelControlElement")
			.css({
				// width : "50px"
			})
			.val(this.designer.dpi)
			.appendTo(this.dpiContainer)
			.on("blur", function() {
				
					self.updateDesigner();
			})
			.on("keypress", function(e) {
				if (e.which == 13) {
					e.preventDefault();
					self.updateDesigner();
				}
			});
		
			// this.batchNumberContainer = $("<div>Batch Number: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
			// this.batchNumberController = $("<input type=\"checkbox\" id=\"batchNumberControllerId\" name=\"vehicle1\" value=\"Bike\"> ")
			// 	.addClass("designerLabelControlElement")
			// 	.css({
			// 		// width : "50px"
			// 	})
			// 	.val(this.designer.batchNumber)
			// 	.appendTo(this.batchNumberContainer)
			// 	.on("blur", function() {
					
			// 			self.updateDesigner();
			// 	})
			// 	.on("keypress", function(e) {
			// 		if (e.which == 13) {
			// 			e.preventDefault();
			// 			self.updateDesigner();
			// 		}
			// 	});
		
			// 	this.labelNumberContainer = $("<div>Label Number: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
			// 	this.labelNumberController = $("<input type=\"checkbox\" id=\"labelNumberControllerId\" name=\"vehicle1\" value=\"Bike\"> ")
			// 		.addClass("designerLabelControlElement")
			// 		.css({
			// 			// width : "50px"
			// 		})
			// 		.val(this.designer.labelNumber)
			// 		.appendTo(this.labelNumberContainer)
			// 		.on("blur", function() {
						
			// 				self.updateDesigner();
			// 		})
			// 		.on("keypress", function(e) {
			// 			if (e.which == 13) {
			// 				e.preventDefault();
			// 				self.updateDesigner();
			// 			}
			// 		});
		
	this.updateDesigner = function() {
		var dpi = this.designer.dpi;
		
		if (!isNaN(this.dpiController.val())) dpi = this.dpiController.val();
		this.designer.dpi = dpi;
		
		var width = this.designer.labelWidth / this.designer.dpi;
		var height = this.designer.labelHeight / this.designer.dpi;
		
		if (!isNaN(this.widthController.val())) width = this.widthController.val();
		if (!isNaN(this.heightController.val())) height = this.heightController.val();
		
		this.designer.updateLabelSize(width, height);
		this.widthController.val(width);
		this.heightController.val(height);
	};
		
	this.update = function() {
		this.widthController.val(this.designer.labelWidth / this.designer.dpi);
		this.heightController.val(this.designer.labelHeight / this.designer.dpi);
	}
};
function CODE128(c,p){function m(){return-1==c.search(r)?!1:!0}function a(q,g,e,a){var k;k=""+b(e);k+=g(q);k+=b(a(q,e));return k+"1100011101011"}function l(q){for(var g="",e=0;e<q.length;e++){var a;a:{for(a=0;a<h.length;a++)if(h[a][0]==q[e]){a=h[a][1];break a}a=""}g+=a}return g}function d(a){for(var g="",e=0;e<a.length;e+=2)g+=b(parseInt(a.substr(e,2)));return g}function f(a,g){for(var e=0,k=0;k<a.length;k++){var b;a:{for(b=0;b<h.length;b++)if(h[b][0]==a[k]){b=h[b][2];break a}b=0}e+=b*(k+1)}return(e+
g)%103}function n(a,g){for(var e=0,k=1,b=0;b<a.length;b+=2)e+=parseInt(a.substr(b,2))*k,k++;return(e+g)%103}function b(a){for(var b=0;b<h.length;b++)if(h[b][2]==a)return h[b][1];return""}p=p||"B";this.string128=c+"";this.valid=m;this.encoded=function(){return m(c)?k["code128"+p](c):""};var h=[[" ","11011001100",0],["!","11001101100",1],['"',"11001100110",2],["#","10010011000",3],["$","10010001100",4],["%","10001001100",5],["&","10011001000",6],["'","10011000100",7],["(","10001100100",8],[")","11001001000",
9],["*","11001000100",10],["+","11000100100",11],[",","10110011100",12],["-","10011011100",13],[".","10011001110",14],["/","10111001100",15],["0","10011101100",16],["1","10011100110",17],["2","11001110010",18],["3","11001011100",19],["4","11001001110",20],["5","11011100100",21],["6","11001110100",22],["7","11101101110",23],["8","11101001100",24],["9","11100101100",25],[":","11100100110",26],[";","11101100100",27],["<","11100110100",28],["=","11100110010",29],[">","11011011000",30],["?","11011000110",
31],["@","11000110110",32],["A","10100011000",33],["B","10001011000",34],["C","10001000110",35],["D","10110001000",36],["E","10001101000",37],["F","10001100010",38],["G","11010001000",39],["H","11000101000",40],["I","11000100010",41],["J","10110111000",42],["K","10110001110",43],["L","10001101110",44],["M","10111011000",45],["N","10111000110",46],["O","10001110110",47],["P","11101110110",48],["Q","11010001110",49],["R","11000101110",50],["S","11011101000",51],["T","11011100010",52],["U","11011101110",
53],["V","11101011000",54],["W","11101000110",55],["X","11100010110",56],["Y","11101101000",57],["Z","11101100010",58],["[","11100011010",59],["\\","11101111010",60],["]","11001000010",61],["^","11110001010",62],["_","10100110000",63],["`","10100001100",64],["a","10010110000",65],["b","10010000110",66],["c","10000101100",67],["d","10000100110",68],["e","10110010000",69],["f","10110000100",70],["g","10011010000",71],["h","10011000010",72],["i","10000110100",73],["j","10000110010",74],["k","11000010010",
75],["l","11001010000",76],["m","11110111010",77],["n","11000010100",78],["o","10001111010",79],["p","10100111100",80],["q","10010111100",81],["r","10010011110",82],["s","10111100100",83],["t","10011110100",84],["u","10011110010",85],["v","11110100100",86],["w","11110010100",87],["x","11110010010",88],["y","11011011110",89],["z","11011110110",90],["{","11110110110",91],["|","10101111000",92],["}","10100011110",93],["~","10001011110",94],[String.fromCharCode(127),"10111101000",95],[String.fromCharCode(128),
"10111100010",96],[String.fromCharCode(129),"11110101000",97],[String.fromCharCode(130),"11110100010",98],[String.fromCharCode(131),"10111011110",99],[String.fromCharCode(132),"10111101110",100],[String.fromCharCode(133),"11101011110",101],[String.fromCharCode(134),"11110101110",102],[String.fromCharCode(135),"11010000100",103],[String.fromCharCode(136),"11010010000",104],[String.fromCharCode(137),"11010011100",105]],r=/^[!-~ ]+$/,k={code128B:function(b){return a(b,l,104,f)},code128C:function(b){b=
b.replace(/ /g,"");return a(b,d,105,n)}}}function CODE128B(c){return new CODE128(c,"B")}function CODE128C(c){return new CODE128(c,"C")};function CODE39(c){function p(){return-1==c.search(a)?!1:!0}var m=[[0,"0","101000111011101"],[1,"1","111010001010111"],[2,"2","101110001010111"],[3,"3","111011100010101"],[4,"4","101000111010111"],[5,"5","111010001110101"],[6,"6","101110001110101"],[7,"7","101000101110111"],[8,"8","111010001011101"],[9,"9","101110001011101"],[10,"A","111010100010111"],[11,"B","101110100010111"],[12,"C","111011101000101"],[13,"D","101011100010111"],[14,"E","111010111000101"],[15,"F","101110111000101"],[16,"G","101010001110111"],
[17,"H","111010100011101"],[18,"I","101110100011101"],[19,"J","101011100011101"],[20,"K","111010101000111"],[21,"L","101110101000111"],[22,"M","111011101010001"],[23,"N","101011101000111"],[24,"O","111010111010001"],[25,"P","101110111010001"],[26,"Q","101010111000111"],[27,"R","111010101110001"],[28,"S","101110101110001"],[29,"T","101011101110001"],[30,"U","111000101010111"],[31,"V","100011101010111"],[32,"W","111000111010101"],[33,"X","100010111010111"],[34,"Y","111000101110101"],[35,"Z","100011101110101"],
[36,"-","100010101110111"],[37,".","111000101011101"],[38," ","100011101011101"],[39,"$","100010001000101"],[40,"/","100010001010001"],[41,"+","100010100010001"],[42,"%","101000100010001"]];this.valid=p;this.encoded=function(){if(p(c)){var a=c,a=a.toUpperCase(),d;d="1000101110111010";for(var f=0;f<a.length;f++){var n;a:{for(n=0;n<m.length;n++)if(m[n][1]==a[f]){n=m[n][2];break a}n=""}d+=n+"0"}return d+"1000101110111010"}return""};var a=/^[0-9a-zA-Z\-\.\ \$\/\+\%]+$/};function EAN(c){function p(b,h){for(var g="",e=0;e<b.length;e++)"L"==h[e]?g+=a[b[e]]:"G"==h[e]?g+=l[b[e]]:"R"==h[e]&&(g+=d[b[e]]);return g}function m(a){if(-1==a.search(r))return!1;for(var b=a[12],g=0,e=0;12>e;e+=2)g+=parseInt(a[e]);for(e=1;12>e;e+=2)g+=3*parseInt(a[e]);return b==(10-g%10)%10}this.EANnumber=c+"";this.valid=function(){return m(this.EANnumber)};this.encoded=function(){if(m(this.EANnumber)){var a=this.EANnumber,d="",g=a[0],e=a.substr(1,7),a=a.substr(7,6),d=d+n,d=d+p(e,f[g]),d=d+h,d=
d+p(a,"RRRRRR");return d+=b}return""};var a={0:"0001101",1:"0011001",2:"0010011",3:"0111101",4:"0100011",5:"0110001",6:"0101111",7:"0111011",8:"0110111",9:"0001011"},l={0:"0100111",1:"0110011",2:"0011011",3:"0100001",4:"0011101",5:"0111001",6:"0000101",7:"0010001",8:"0001001",9:"0010111"},d={0:"1110010",1:"1100110",2:"1101100",3:"1000010",4:"1011100",5:"1001110",6:"1010000",7:"1000100",8:"1001000",9:"1110100"},f={0:"LLLLLL",1:"LLGLGG",2:"LLGGLG",3:"LLGGGL",4:"LGLLGG",5:"LGGLLG",6:"LGGGLL",7:"LGLGLG",
8:"LGLGGL",9:"LGGLGL"},n="101",b="101",h="01010",r=/^[0-9]{13}$/}function UPC(c){this.ean=new EAN("0"+c);this.valid=function(){return this.ean.valid()};this.encoded=function(){return this.ean.encoded()}};function ITF(c){this.ITFNumber=c+"";this.valid=function(){return-1!==this.ITFNumber.search(l)};this.encoded=function(){if(-1!==this.ITFNumber.search(l)){var d=this.ITFNumber,f;f=""+m;for(var n=0;n<d.length;n+=2){for(var b=d.substr(n,2),h="",c=p[b[0]],b=p[b[1]],k=0;5>k;k++)h+="1"==c[k]?"111":"1",h+="1"==b[k]?"000":"0";f+=h}return f+=a}return""};var p={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},m="1010",a="11101",l=/^([0-9][0-9])+$/};function ITF14(c){function p(a){for(var b=0,d=0;13>d;d++)b+=parseInt(a[d])*(3-d%2*2);return 10-b%10}function m(a){return-1==a.search(f)?!1:14==a.length?a[13]==p(a):!0}this.ITF14number=c+"";this.valid=function(){return m(this.ITF14number)};this.encoded=function(){if(m(this.ITF14number)){var f=this.ITF14number,b="";13==f.length&&(f+=p(f));for(var b=b+l,h=0;14>h;h+=2){for(var c=f.substr(h,2),k="",q=a[c[0]],c=a[c[1]],g=0;5>g;g++)k+="1"==q[g]?"111":"1",k+="1"==c[g]?"000":"0";b+=k}return b+=d}return""};
var a={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},l="1010",d="11101",f=/^[0-9]{13,14}$/};function pharmacode(c){function p(c,a){if(0==c.length)return"";var l,d=!1,f;l=c.length-1;for(f=0;"0"==c[l]||0>l;)f++,l--;0==f?(l=a?"001":"00111",d=a):(l="001".repeat(f-(a?1:0)),l+="00111");return p(c.substr(0,c.length-f-1),d)+l}this.number=parseInt(c);this.encoded=function(){return this.valid(this.number)?p(this.number.toString(2),!0).substr(2):""};this.valid=function(){return 3<=this.number&&131070>=this.number};String.prototype.repeat=function(c){return Array(c+1).join(this)}};(function(c){JsBarcode=function(c,m,a,l){a=function(a,b){var c={},d;for(d in a)c[d]=a[d];for(d in b)c[d]=b[d];return c}(JsBarcode.defaults,a);var d=c;window.jQuery&&d instanceof jQuery&&(d=c.get(0));d instanceof HTMLCanvasElement||(d=document.createElement("canvas"));if(!d.getContext)return c;var f=new window[a.format](m);if(!f.valid())return l&&l(!1),this;var f=f.encoded(),n=function(c){var f,g;g=a.height;b.font=a.fontSize+"px "+a.font;b.textBaseline="bottom";b.textBaseline="top";"left"==a.textAlign?
(f=a.quite,b.textAlign="left"):"right"==a.textAlign?(f=d.width-a.quite,b.textAlign="right"):(f=d.width/2,b.textAlign="center");b.fillText(c,f,g)},b=d.getContext("2d");d.width=f.length*a.width+2*a.quite;d.height=a.height+(a.displayValue?1.3*a.fontSize:0);b.clearRect(0,0,d.width,d.height);a.backgroundColor&&(b.fillStyle=a.backgroundColor,b.fillRect(0,0,d.width,d.height));b.fillStyle=a.lineColor;for(var h=0;h<f.length;h++){var r=h*a.width+a.quite;"1"==f[h]&&b.fillRect(r,0,a.width,a.height)}a.displayValue&&
n(m);uri=d.toDataURL("image/png");window.jQuery&&c instanceof jQuery?c.get(0)instanceof HTMLCanvasElement||c.attr("src",uri):c instanceof HTMLCanvasElement||c.setAttribute("src",uri);l&&l(!0)};JsBarcode.defaults={width:2,height:100,quite:10,format:"CODE128",displayValue:!1,font:"monospace",textAlign:"center",fontSize:12,backgroundColor:"",lineColor:"#000"};window.jQuery&&(c.fn.JsBarcode=function(c,m,a){JsBarcode(this,c,m,a);return this})})(window.jQuery);
if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.barcode = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div class='tool-wrapper'></div>")
        .addClass("designerToolbarButton")
        .attr("title", "Barcode")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zM16.66874979 20.35379603h1.20922837v27.02574148h-1.20922837V20.35379603zm1.80402413 0h.61443287v27.0061041h-.61443287v-27.0061041zm1.8236615 0h.5947955v27.0061041h-.5947955v-27.0061041zm3.0132525 0h.5953125v27.0061041h-.5953125v-27.0061041zm2.418457 0h1.190108v27.0061041h-1.190108v-27.0061041zm3.01376976 0h.59479655v27.0061041h-.59479655v-27.0061041zm1.20922784 0h.59479655v27.0061041h-.59479655v-27.0061041zm1.20922784 0h.59479655v27.0061041h-.59479655v-27.0061041zm2.39933688 0h1.20923049v27.0061041h-1.20923049v-27.0061041zm3.01325488 0h1.20922784v27.0061041h-1.20922784v-27.0061041zm2.41845568 0h1.20922784v27.0061041H38.9914178v-27.0061041zm2.41845832 0h1.20922784v27.0061041h-1.20922784v-27.0061041zm1.80454034 0h1.20922783v27.0061041h-1.20922783v-27.0061041zm3.03237367 0h1.80454033v27.0061041h-1.80454033v-27.0061041zm2.39933688 0h.61443129v27.0061041H48.646127v-27.0061041zm1.20922784 0h1.20922784v27.02574148h-1.20922784V20.35379603z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        var width = 100;
        var canvasHolder = $("<canvas></canvas>").prop("width", "100").prop("height", "1");
        this.name = "Barcode " + self.counter++;
        this.text = "BARCODE";
        this.x = x;
        this.y = y;
        // this.width = width; // NOT APPLIED
        this.height = height;
        this.type = 'Barcode';

        if (fromObject) {
            this.name = fromObject.name;
            this.text = fromObject.text;
            this.x = fromObject.x;
            this.y = fromObject.y;
            // this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }

        this.readonly = ["type"];

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                name: this.name,
                text: this.text,
                type: this.type,
                x: this.x,
                y: this.y,
                // width: this.width,
                height: this.height
            };
        };

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^BY1\n^B3N,N," + this.height + "N,N\n^FD" + this.text + "\n^FS";
        };

        this.draw = function (context) {
            canvasHolder.JsBarcode(this.text, {width: 1, height: 1});
            var cwidth = canvasHolder[0].width;
            var cheight = canvasHolder[0].height;
            var ctx = canvasHolder[0].getContext('2d');
            width = cwidth;

            var cData = ctx.getImageData(0, 0, cwidth, cheight);

            for (var i = 0; i < cwidth; i++) {
                if (cData.data[i * 4 + 3] == 255) { // Black (barcode = black or white)
                    // Draw a black rectangle at this point.
                    context.fillRect(this.x + i, this.y, 1, this.height);
                }
            }
        };

        this.setWidth = function (width) {
            //this.width = width;
        };

        this.getWidth = function () {
            return width;
        };

        this.setHeight = function (height) {
            this.height = height;
        };

        this.getHeight = function () {
            return this.height;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
        }
    }
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.batchNumber = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div class='tool-wrapper'></div>")
        .addClass("designerToolbarButton")
        .attr('id', 'batchNumberIdentifier')
        .attr("title", "Batch number")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zM11.37708319 20.31400534h10.02419428c3.5958007 0 6.19756579.54304088 7.80469256 1.6298746 1.61868641 1.0868337 2.42775843 2.82700646 2.42775843 5.22035345 0 1.26026331-.2945183 2.33536328-.88418458 3.22564385-.58966628.878713-1.4452494 1.53228938-2.56676786 1.96008623 1.43369504.41623455 2.54329138 1.18479886 3.32951133 2.30631997.78621995 1.12151582 1.17925584 2.49766134 1.17925584 4.1279127 0 2.4974047-.84408432 4.35909238-2.53214449 5.58467147-1.68806016 1.22557909-4.2548111 1.83813183-7.70030465 1.83812918H11.3770832V20.31400534zm32.01664933 3.98063557h2.548165l-1.63607483 6.52828251h4.5935185l1.65209536-6.52828251h2.51715849l-1.6205729 6.52828251h4.90822715v2.42259112h-5.52162656l-1.28984373 5.2544609h5.00227858v2.40657059h-5.61619393l-1.63607748 6.51278216h-2.51664255l1.62005696-6.51278216h-4.60902044l-1.6205729 6.51278216h-2.53266307l1.63607748-6.51278216h-4.95525419v-2.4065706h5.53713114l1.3213662-5.2544609h-5.0653235v-2.4225911h5.67923884l1.60455238-6.52828252zm-25.33953763.56327304v5.48028488h3.69383147c1.05214736 0 1.85023546-.23153158 2.3936523-.69401266.54341686-.46248373.8149373-1.1445478.8149373-2.04638802 0-.89027792-.27152044-1.5663341-.8149373-2.0288165-.54341684-.47404443-1.34150494-.7110677-2.3936523-.7110677h-3.69383147zm25.66975085 8.38760059l-1.3213662 5.2544609H47.0116l1.29035967-5.2544609h-4.57801392zM18.0541949 34.88210796v6.78098235h3.9196573c1.3411991 0 2.34678747-.2830195 3.01738688-.8495612.6821617-.5665417 1.02319348-1.42212481 1.02319348-2.56676786 0-1.12152111-.33502388-1.96011269-1.00562356-2.5150921-.67059941-.5665417-1.68219567-.8495612-3.0349568-.8495612h-3.9196573z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        this.name = 'Batch #: ';
        this.placeholderKey = '#batchNr';
        this.previewText = '#';
        this.x = x;
        this.y = y;
        this.fontSize = 18;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'BatchNumber';

        if (fromObject) {
            this.name = fromObject.name;
            this.placeholderKey = fromObject.placeholderKey;
            this.previewText = fromObject.previewText;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.fontSize = fromObject.fontSize;
            this.fontType = fromObject.fontType;
            this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }

        this.readonly = ["width", "height", "type", 'fontType', 'placeholderKey'];


        this.getFontHeight = function () {
            var textMeasure = $("<div></div>").css({
                "font-size": this.fontSize + "px",
                "font-family": this.fontType,
                "opacity": 0,
            }).text("M").appendTo($("body"));

            var height = textMeasure.outerHeight();
            textMeasure.remove();
            return height;
        };

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                name: this.name,
                placeholderKey: this.placeholderKey,
                previewText: this.previewText,
                x: this.x,
                y: this.y,
                fontSize: this.fontSize,
                fontType: this.fontType,
                width: this.width,
                height: this.height,
                type: this.type,
            };
        };

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            // return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^A0," + (this.fontSize) + "," + (this.fontSize) + '\n^FD' + this.name + this.placeholderKey + "\n^FS";
            return "{{ batchNumber ? '" + "^FO" + (this.x - labelx) + "," + (this.y - labely) + " ^A0," + (this.fontSize) + "," + (this.fontSize) + ' ^FD' + this.name + this.placeholderKey + " ^FS" + "' : ''}}";
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();

            var displayText = this.name  + this.previewText;
            var measuredText = context.measureText(displayText);
            this.width = measuredText.width;
            context.globalCompositeOperation = "difference";
            context.fillText(displayText, this.x, this.y + (this.height * 0.75));
            context.globalCompositeOperation = "source-over";
            context.fillStyle = oColor;
            //context.fillRect(this.x, this.y, this.width, this.height);
        };

        this.setWidth = function (width) {
            //this.width = width;
        };

        this.getWidth = function () {
            return this.width;
        };

        this.setHeight = function (height) {
            //height = height;
        };

        this.getHeight = function () {
            return this.height * 0.75;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.9) - 1, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
        }
    }
};

if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.designerTools)
	com.logicpartners.designerTools = {};
	
com.logicpartners.designerTools.image = function() {
	var self = this;
	this.counter = 1;
	this.data = null;
	this.width = null;
	this.height = null;
	this.button = $("<div></div>").addClass("designerToolbarImage designerToolbarButton").attr("title", "Image").append($("<div></div>"));
	this.activate = function(toolbar) {
		self.data = null;
		
		// Open up a dialog to get the image
		var dialog = $("<div></div>").prop("title", "Add Image");
		var imageFile = $("<input type=\"file\" />").css({ width : 400 })
		.on("change", function() {
			if (typeof window.FileReader !== 'function') {
				alert('This page requires the file API that is included in modern browsers such as Google Chrome. Please try again in an up to date web browser.');
			}
			
			var input = imageFile[0];
			if (!input.files[0]) {
				alert('Please select a file to insert.');
			}
			else {
				var file = input.files[0];
				var reader = new FileReader();
				var insertImg = imageLeft;
				var canvasResult = imageRight;
				reader.onloadend = function() {
					var canvas = canvasResult;
					var imgSelf = insertImg;
					insertImg.css( { "width" : "auto", "height" : "auto", "max-width" : 200, "max-height" : 200 });
					canvas.css( { "width" : "auto", "height" : "auto" });
					insertImg[0].onload = function() {
						var tCanvas = $("<canvas />");
						tCanvas[0].width = imgSelf[0].width;
						tCanvas[0].height = imgSelf[0].height;
						canvas[0].width = imgSelf[0].width;
						canvas[0].height = imgSelf[0].height;
						var tctx = tCanvas[0].getContext("2d");
						var ctx = canvas[0].getContext("2d");
						tctx.drawImage(imgSelf[0], 0, 0, tCanvas[0].width, tCanvas[0].height);
						var tImgData = tctx.getImageData(0, 0, tCanvas[0].width, tCanvas[0].height);
						var imgData = ctx.getImageData(0, 0, tCanvas[0].width, tCanvas[0].height);
						
						// Convert the canvas data to GRF.
						for (var y = 0; y < tCanvas[0].height; y++) {
							for (x = 0; x < tCanvas[0].width; x++) {
								var pixelStart = 4 * (tCanvas[0].width * y + x);
								var luminance = tImgData.data[pixelStart] * 0.299 + tImgData.data[pixelStart + 1] * 0.587 + tImgData.data[pixelStart + 2] * 0.114;
								
								if (luminance > 127) {
									imgData.data[pixelStart] = 255;
									imgData.data[pixelStart + 1] = 255;
									imgData.data[pixelStart + 2] = 255;
									imgData.data[pixelStart + 3] = 255;
								}
								else {
									imgData.data[pixelStart] = 0;
									imgData.data[pixelStart + 1] = 0;
									imgData.data[pixelStart + 2] = 0;
									imgData.data[pixelStart + 3] = 255;
								}
							}
						}
						self.width = canvas[0].width;
						self.height = canvas[0].height;
						self.data = imgData.data;
						
						ctx.putImageData(imgData, 0, 0);
					};
					insertImg[0].src = reader.result;
				};
				reader.readAsDataURL(file);
			}
		}).appendTo(dialog);
		var imageContainer = $("<div></div>").css({ "padding-top" : "5px" });
		var imageLeft = $("<img />").prop("src", "blank.gif").prop("border", "none").css({ float: "left", width: 200, height: 200, border: "1px solid #DDDDDD"}).appendTo(imageContainer);
		var imageRight = $("<canvas />").css({ float: "right", width: 200, height: 200, border: "1px solid #DDDDDD"}).appendTo(imageContainer);
		
		imageContainer.appendTo(dialog);
		
		var Toolbar = toolbar;
		dialog.dialog({
			modal : true,
			width : 470,
			height : 400,
			buttons : {
				"Insert" : function() {
					// Insert the image onto the screen.
					Toolbar.labelDesigner.addObject(new self.object(0, 0, self.width, self.height, self.data));
					$(this).dialog("close");
				},
				"Cancel" : function() {
					self.data = null;
					$(this).dialog("close");
				}
			}
		})
		.on("dialogclose", { toolbar : toolbar }, function(event) {
			self.button.removeClass("designerToolbarButtonActive");
			event.data.toolbar.setTool(null);
		});
	};
	
	this.object =  function(x, y, width, height, data) {
		this.uniqueID = self.counter;
		this.name = "Image " + self.counter++;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.data = data;
		
		this.readonly = [ "width", "height", "data" ];
		this.hidden = [ "data", "uniqueID" ];
		
		this.getZPLData = function() {
			var GRFVal = function(nibble) {
				var nibbleMap = { 
					"0" : "0000",
					"1" : "0001",
					"2" : "0010",
					"3" : "0011",
					"4" : "0100",
					"5" : "0101",
					"6" : "0110",
					"7" : "0111",
					"8" : "1000",
					"9" : "1001",
					"A" : "1010",
					"B" : "1011",
					"C" : "1100",
					"D" : "1101",
					"E" : "1110",
					"F" : "1111",
				};
				
				for (key in nibbleMap) {
					if (nibbleMap[key] == nibble) {
						return key;
					}
				}
				
				return "";
			};
			
			var imgData = "";
			var bytesPerLine = Math.ceil(this.width / 8);
			console.log(bytesPerLine);
			console.log(this.width);
			console.log(bytesPerLine);
			for (var y = 0; y < this.height; y++) {
				var nibble = "";
				var bytes = 0;
				for (var x = 0; x < this.width; x++) {
					var point = 4 * (this.width * y + x);
					if (this.data[point+1] == 0) {
						nibble += "1";
					}
					else nibble += "0";
					
					if (nibble.length > 7) {
						imgData += GRFVal(nibble.substring(0, 4)) + GRFVal(nibble.substring(4, 8));
						nibble = "";
						bytes++;
					}
				}
				
				if (nibble.length > 0) {
					while (nibble.length < 8) nibble += "0";
					imgData += GRFVal(nibble.substring(0, 4)) + GRFVal(nibble.substring(4, 8));
					nibble = "";
					bytes++;
				}
				
				while (bytes < bytesPerLine) {
					imgData += GRFVal("0000") + GRFVal("0000");
					bytes++;
				}
				
				imgData += "\n";
			}
			
			return "~DGIMG" + this.uniqueID + "," + bytesPerLine * height + "," + bytesPerLine + "," + imgData;
		},
		
		
		
		this.toZPL = function(labelx, labely, labelwidth, labelheight) {
			return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^XGR:IMG" + this.uniqueID + ",1,1^FS";
		},

		this.draw = function(context, width, height) {
			var ctxData = context.getImageData(0, 0, width, height);
			for (var y = 0; y < this.height; y++) {
				for (var x = 0; x < this.width; x++) {
					if (this.x + x >= 0 && this.x + x < width
						&& this.y + y >= 0 && this.y + y < height) {
						var drawPoint = 4 * (width * (this.y + y) + this.x + x);
						var drawFromPoint = 4 * (this.width * y + x);
						ctxData.data[drawPoint] = this.data[drawFromPoint];
						ctxData.data[drawPoint + 1] = this.data[drawFromPoint + 1];
						ctxData.data[drawPoint + 2] = this.data[drawFromPoint + 2];
						ctxData.data[drawPoint + 3] = this.data[drawFromPoint + 3];
					}
				}
			}
			
			context.putImageData(ctxData, 0, 0);
		};
		
		this.setWidth = function(width) {
			//this.width = width;
		};
		
		this.getWidth = function() {
			return this.width;
		};
		
		this.setHeight = function(height) {
			//height = height;
		};
		
		this.getHeight = function() {
			return this.height;
		};

		this.setHandle = function(coords) {
			this.handle = this.resizeZone(coords);
		};

		this.getHandle = function() {
			return this.handle;
		};

		this.drawActive = function(context) {
			context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
		};

		this.hitTest = function(coords) {
			return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
		}
	}
};


if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.labelNumber = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div class='tool-wrapper'></div>")
        .addClass("designerToolbarButton")
        .attr("title", "Label number")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zM11.37708319 19.70680724h6.9763184v21.78006528h12.24886463v5.2725478H11.37708319V19.70680725zm31.43632283 4.15891922h2.66236976l-1.70945437 6.8207725h4.7991897l1.72599084-6.8207725h2.62981542l-1.69292056 6.8207725h5.12785248v2.53111262H50.5870918l-1.34772134 5.48958552h5.2265553v2.51457615h-5.86734173l-1.70945702 6.80475252h-2.62981278l1.69291792-6.80475252h-4.81520758L39.444104 48.02652577h-2.64635188l1.70945702-6.80475252h-5.17746185V38.7071971h5.785178l1.38079426-5.48958552h-5.29218518v-2.53111261h5.9334902l1.67638145-6.82077251zm.34519923 9.35188512l-1.38079426 5.48958552h4.81572617l1.34772134-5.48958552h-4.78265325z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        this.name = 'Label #: ';
        this.placeholderKey = '#labelNr';
        this.previewText = '#';
        this.x = x;
        this.y = y;
        this.fontSize = 18;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'LabelNumber';

        if (fromObject) {
            this.name = fromObject.name;
            this.placeholderKey = fromObject.placeholderKey;
            this.previewText = fromObject.previewText;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.fontSize = fromObject.fontSize;
            this.fontType = fromObject.fontType;
            this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }

        this.readonly = ["width", "height", "type", 'fontType', 'placeholderKey'];


        this.getFontHeight = function () {
            var textMeasure = $("<div></div>").css({
                "font-size": this.fontSize + "px",
                "font-family": this.fontType,
                "opacity": 0,
            }).text("M").appendTo($("body"));

            var height = textMeasure.outerHeight();
            textMeasure.remove();
            return height;
        };

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                name: this.name,
                placeholderKey: this.placeholderKey,
                previewText: this.previewText,
                x: this.x,
                y: this.y,
                fontSize: this.fontSize,
                fontType: this.fontType,
                width: this.width,
                height: this.height,
                type: this.type,
            };
        };

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            return "{{ labelNr ? '" + "^FO" + (this.x - labelx) + "," + (this.y - labely) + " ^A0," + (this.fontSize) + "," + (this.fontSize) + ' ^FD' + this.name + this.placeholderKey + " ^FS" + "' : ''}}";
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();

            var displayText = this.name + this.previewText;
            var measuredText = context.measureText(displayText);
            this.width = measuredText.width;
            context.globalCompositeOperation = "difference";
            context.fillText(displayText, this.x, this.y + (this.height * 0.75));
            context.globalCompositeOperation = "source-over";
            context.fillStyle = oColor;
            //context.fillRect(this.x, this.y, this.width, this.height);
        };

        this.setWidth = function (width) {
            //this.width = width;
        };

        this.getWidth = function () {
            return this.width;
        };

        this.setHeight = function (height) {
            //height = height;
        };

        this.getHeight = function () {
            return this.height * 0.75;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.9) - 1, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
        }
    }
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.rectangle = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div></div>").addClass("designerToolbarRectangle designerToolbarButton").attr("title", "Rectangle").append($("<div></div>"));
    this.object = function (x, y, width, height, fromObject) {
        this.name = "Rectangle " + self.counter++;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = 'Rectangle';

        if (fromObject) {
            this.name = fromObject.name;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }

        this.readonly = ["type"];

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                name: this.name,
                type: this.type,
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        };

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            if (this.width > this.height) {
                return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^GB" + this.width + ",0," + this.height + "^FS";
            }

            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^GB" + "0," + this.height + "," + this.width + "^FS";
        };

        this.draw = function (context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        };

        this.setWidth = function (width) {
            this.width = parseInt(width);
        };

        this.getWidth = function () {
            return this.width;
        };

        this.setHeight = function (height) {
            this.height = height;
        };

        this.getHeight = function () {
            return this.height;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
        }
    }
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.textBlock = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div class='tool-wrapper'></div>")
        .addClass("designerToolbarButton")
        .attr("title", "Text block")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zm-15.9695677 19.56004604H49.8362334c.33270031 0 .62038706.12170913.86351268.3648358.24312033.24312669.3648366.53133651.3648366.86402994v2.4566975c0 .33270004-.12171627.62039314-.3648366.8635132-.24312562.24312668-.53081237.36483555-.86351268.36483555H17.89709854c-.33269317 0-.62038653-.12170887-.8635132-.36483555-.24312669-.24312006-.36483555-.53081316-.36483555-.8635132v-2.4566975c0-.33269343.12170886-.62090325.36483554-.86402993.24312668-.24312668.53082004-.3648358.8635132-.3648358zm0 7.37061054H49.8362334c.33270031 0 .62038706.12170833.86351268.36483395.24312033.24312033.3648366.53081502.3648366.86351268v2.45721449c0 .33269501-.12171627.62038705-.3648366.86351532-.24312562.24312562-.53081237.36483395-.86351268.36483395H17.89709854c-.33269317 0-.62038653-.12170833-.8635132-.36483395-.24312669-.24312827-.36483555-.5308203-.36483555-.86351532v-2.4572145c0-.33269765.12170886-.62039234.36483554-.86351267.24312668-.24312562.53082004-.36483395.8635132-.36483395zm0 7.37060895H49.8362334c.33270031 0 .62038706.12170833.86351268.36483395.24312033.24312827.3648366.53081501.3648366.86351532v2.4572145c0 .33269765-.12171627.6203844-.3648366.86351267-.24312562.24312033-.53081237.36483395-.86351268.36483395H17.89709854c-.33269317 0-.62038653-.12171362-.8635132-.36483395-.24312669-.24312827-.36483555-.53081502-.36483555-.86351268V36.3233648c0-.3327003.12170886-.62038705.36483554-.86351532.24312668-.24312562.53082004-.36483395.8635132-.36483395zm0 7.37060895H49.8362334c.33270031 0 .62038706.12170833.86351268.3648366.24312033.24312562.3648366.53081765.3648366.86351267v2.4566959c0 .33269502-.12171627.62090565-.3648366.86403127-.24312562.24312562-.53081237.3648366-.86351268.3648366H17.89709854c-.33269317 0-.62038653-.12171098-.8635132-.3648366-.24312669-.24312562-.36483555-.53133625-.36483555-.86403126v-2.4566959c0-.33269503.12170886-.62038706.36483554-.86351269.24312668-.24312826.53082004-.3648366.8635132-.3648366z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        this.textBlockName = "TextBlock " + self.counter++;
        this.textArea = this.textBlockName;
        this.x = x;
        this.y = y;
        this.fontSize = 26;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'TextBlock';

        if (fromObject) {
            this.textBlockName = fromObject.textBlockName;
            this.textArea = fromObject.textArea;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.fontSize = fromObject.fontSize;
            this.fontType = fromObject.fontType;
            this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }


        this.readonly = ["width", "height", "type"];

        this.getFontHeight = function () {
            var textMeasure = $("<div></div>").css({
                "font-size": this.fontSize + "px",
                "font-family": this.fontType,
                "opacity": 0,
            }).text("M").appendTo($("body"));

            var height = textMeasure.outerHeight();
            textMeasure.remove();
            return height;
        };

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                textBlockName: this.textBlockName,
                textArea: this.textArea,
                type: this.type,
                x: this.x,
                y: this.y,
                fontSize: this.fontSize,
                fontType: this.fontType,
                width: this.width,
                height: this.height
            };
        };

        this.toZPL = function (labelx, labely, labelHeight, labelWidth) {
            /** Field Block code TEMPLATE
             ^FB400,100,5,J,0
             ^A0,22,22
             ^FH
             ^FD
             */

            var textWithCarriageReturnForZpl = this.textArea.replace(/(\r\n|\n|\r)/gm, '\\&');

            var textBlockWidth = labelWidth - this.x;
            // return "^FB" + (textBlockWidth) + ",100,5,J,0," + "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + '^FD' + this.variableName + this.variable + "^FS";
            return "^FB" + (textBlockWidth) + ",100,5,J,0," + "\n^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^A0," + (this.fontSize) + "," + (this.fontSize) + '\n^FD' + textWithCarriageReturnForZpl+ "\n^FS";
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();

            // var offset = 3;
            // var textBlockWidth = (context.canvas.width - offset) - this.x;
            var textBlockWidth = (context.canvas.width + 5) - (this.x);

            var wrapped = wrapCanvasText(this.textArea, context, textBlockWidth);

            var lines = wrapped.split(/(\r\n|\n|\r)/gm);


            var maxStringLength = 0;

            var maxStringLengthIndex = 0;
            for (var j = 0; j < lines.length; j++) {
                if (lines[j].length > maxStringLength) {
                    maxStringLength = lines[j].length;
                    maxStringLengthIndex = j;
                }
            }

            var measuredText = context.measureText(lines[maxStringLengthIndex]);
            this.width = measuredText.width;
            context.globalCompositeOperation = "difference";

            this.height = this.height * 0.5;
            for (var i = 0; i < lines.length; i++) {

                var calculatedHeight = this.height * (i + 1);

                context.fillText(lines[i], this.x, this.y + (calculatedHeight));

            }
            this.height = this.height * lines.length;

            context.globalCompositeOperation = "source-over";
            context.fillStyle = oColor;


            /**
             * Ref: http://jsfiddle.net/illumine/Avvxn/
             * @param t
             * @param canvas
             * @param maxW
             * @param maxH
             * @returns {string}
             */
            function wrapCanvasText(t, canvas, maxW, maxH) {

                if (typeof maxH === "undefined") {
                    maxH = 0;
                }

                // var words = t.text.split(" ");
                var words = t.split(" ");
                var formatted = '';

                var lineHeight = 70;

                // adjust for vertical offset
                var maxHAdjusted = maxH > 0 ? maxH - lineHeight : 0;
                // var context = canvas.getContext("2d");
                var context = canvas;


                context.font = '32' + "px ";
                var currentLine = "";
                var breakLineCount = 0;

                for (var n = 0; n < words.length; n++) {

                    var isNewLine = currentLine == "";
                    var testOverlap = currentLine + ' ' + words[n];

                    // are we over width?
                    var w = context.measureText(testOverlap).width;

                    if (w < maxW) { // if not, keep adding words
                        currentLine += words[n] + ' ';
                        formatted += words[n] += ' ';
                    } else {

                        // if this hits, we got a word that need to be hypenated
                        if (isNewLine) {
                            var wordOverlap = "";

                            // test word length until its over maxW
                            for (var i = 0; i < words[n].length; ++i) {

                                wordOverlap += words[n].charAt(i);
                                var withHypeh = wordOverlap + "-";

                                if (context.measureText(withHypeh).width >= maxW) {
                                    // add hyphen when splitting a word
                                    withHypeh = wordOverlap.substr(0, wordOverlap.length - 2) + "-";
                                    // update current word with remainder
                                    words[n] = words[n].substr(wordOverlap.length - 1, words[n].length);
                                    formatted += withHypeh; // add hypenated word
                                    break;
                                }
                            }
                        }
                        n--; // restart cycle
                        formatted += '\n';
                        breakLineCount++;
                        currentLine = "";
                    }
                    if (maxHAdjusted > 0 && (breakLineCount * lineHeight) > maxHAdjusted) {
                        // add ... at the end indicating text was cutoff
                        formatted = formatted.substr(0, formatted.length - 3) + "...\n";
                        break;
                    }
                }
                // get rid of empy newline at the end
                formatted = formatted.substr(0, formatted.length - 1);

                return formatted;
            }

        };

        this.setWidth = function (width) {
            //this.width = width;
        };

        this.getWidth = function () {
            return this.width;
        };

        this.setHeight = function (height) {
            //height = height;
        };

        this.getHeight = function () {
            // return this.height * 0.75;
            return this.height * 2;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y - 4), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.99) + 8, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
        }
    }
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.text = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div class='tool-wrapper'></div>")
        .addClass("designerToolbarButton")
        .attr("title", "Text")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zm6.83782543 18.30224176c.0512789 0 .14104144.00290169.26923471.0093017.12819327.0064.2179558.00981868.2692347.00981868.0256249 1.43573736.03824023 3.58913002.03824023 6.46058729 0 1.02552445-.03202516 1.7242467-.09611783 2.09599686-.49994078.17947216-.9356619.29496278-1.30741471.3462311-.32047127-.56404933-.6664272-1.38455134-1.03818-2.46134808-.03845984-.11537209-.10932584-.42299836-.21187305-.922941-.1025525-.49994079-.19521487-.97109782-.2785348-1.41335044-.08332788-.44226215-.13136034-.66983106-.1441794-.68264563-.07691702-.10255276-.1540854-.18261012-.23099183-.24029537-.07691967-.05769346-.17639506-.09601385-.29817483-.11523848-.12177977-.01922674-.20472929-.03523906-.24959733-.04805918-.0448654-.01281324-.16035337-.01623192-.3462311-.00981842-.18587244.0064-.29165814.00981842-.31729362.00981842-.21792142 0-.64444827-.00341842-1.27899053-.00981842-.63453961-.0064-1.1119961-.00930196-1.43247002-.00930196-.32048185 0-.73048018.0126074-1.23041567.03824076-.49994343.02563998-.95508497.0639691-1.36529232.11523821-.11536891 1.0383422-.16681185 1.91029508-.15399544 2.6153443 0 1.20498869.0131154 3.6917291.03875617 7.46052548.02564077 3.76878316.03824023 6.68495713.03824023 8.74882087 0 .20512087-.01600465.66366495-.04805892 1.375111-.03204633.7114487-.03204633 1.29807757 0 1.75958234.03205427.46145714.1121119.90349386.24029723 1.3265335.51275985.26920825 1.30754965.54140893 2.38434824.81700422 1.07679595.2756191 1.8458709.51629997 2.3073545.72140232.0641006.51274133.09663376.83296653.09663376.96118097 0 .17945629-.01941777.36530756-.0578776.55759085l-.65370603.01963473c-.9742461.02563548-2.37168793-.02580217-4.19199214-.15399544-1.82030156-.12820914-3.14688269-.19223566-3.9801191-.19223566-.64095311 0-1.60897541.05773473-2.90369859.17311687-1.29471815.11538479-2.26904574.17311423-2.92281897.17311423-.0384601-.6537616-.05736088-.98710485-.05736088-.99993714v-.17311687c.21792248-.34612527.61191007-.62172585 1.18235676-.8268229.57044801-.20509177 1.20171447-.39092717 1.89394119-.5575882.69222857-.16663459 1.19199208-.33987582 1.4996501-.51934798.24355981-.53839003.36535228-2.99310686.36535228-7.36440976 0-1.29470942-.01890183-3.2370765-.05736166-5.82651651-.0384593-2.58944795-.05787681-4.53127528-.05787681-5.82600057v-2.2499923c0-.02563998.00341868-.12460234.00981842-.29765625.0064-.17305813.00930195-.33368773.00930195-.48110774 0-.14741393-.00630025-.31041842-.01912037-.48989244-.01281986-.17947322-.03223763-.3332898-.0578776-.46147063-.02563998-.12819195-.057658-.2179627-.0961181-.26923418-.1410073-.15383536-1.17937676-.23099368-3.11505544-.23099368-.42302112 0-1.01886516.07715832-1.7880044.23099368-.76915009.15382663-1.28203006.32024849-1.53840734.49971113-.24355927.16665469-.46141824.63150405-.65370682 1.39423006-.19228488.76273606-.3941318 1.47405802-.60564791 2.13423682-.21151189.66018013-.4837057 1.00323887-.81700449 1.028877-.53839109-.33329563-.89747274-.61519858-1.0769367-.8459417v-7.36492597l1.55752772-.01912011 1.03817947.51934797c.15382928.06409346 1.50613135.09611836 4.05711655.09611836.56404007 0 1.4102744-.0131175 2.53834633-.03875749 1.12807457-.02563336 1.97430996-.03824049 2.53834605-.03824049.46148625 0 1.15049828.00341842 2.06705727.00981842.91656163.00640001 1.60557102.00930196 2.06705726.00930196h5.63376491c.07690115 0 .21182012.00341842.4041087.00981842.19228859.0064.32326263.0064.39377408 0 .0704903-.0064.17338675-.025831.30799352-.0578776.13459354-.03205321.24667633-.08978926.33641241-.17311608.08973344-.08331808.185801-.1954022.28835615-.33641347l.80770146-.01912038zm6.72982252.0961181c.3717581 0 .6857021.16641789.94205953.49971112l2.4231097 3.11505544c.25639183.33328794.32672337.61860244.2113571.8557617-.11536627.23715186-.3846486.35605059-.80770411.35605059h-1.5378906v19.6897551h1.5378906c.42305551 0 .69233784.11840898.80770411.35553385.11536627.2371434.04503473.522478-.2113571.85576039l-2.4231097 3.11505596c-.25635743.3332824-.57030143.50022653-.94205953.50022653-.37174222 0-.68567563-.16694414-.94206217-.50022653l-2.42259112-3.11505596c-.25638389-.3332824-.32723137-.618617-.21187304-.85576039.1153848-.23712487.384683-.35553385.80770147-.35553385h1.5384092V24.0186887h-1.5384092c-.42301847 0-.69231668-.11889873-.80770147-.35605059-.11535833-.23715926-.04451085-.52247376.21187304-.8557617l2.42259112-3.11505544c.25638654-.33329323.57031995-.49971112.94206217-.49971112z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        this.textName = "Text " + self.counter++;
        this.text = this.textName;
        this.x = x;
        this.y = y;
        this.fontSize = 36;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'Text';

        if (fromObject) {
            this.textName = fromObject.textName;
            this.text = fromObject.text;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.fontSize = fromObject.fontSize;
            this.fontType = fromObject.fontType;
            this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }


        this.readonly = ["width", "height", "type"];

        this.getFontHeight = function () {
            var textMeasure = $("<div></div>").css({
                "font-size": this.fontSize + "px",
                "font-family": this.fontType,
                "opacity": 0,
            }).text("M").appendTo($("body"));

            var height = textMeasure.outerHeight();
            textMeasure.remove();
            return height;
        };

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                textName: this.textName,
                text: this.text,
                type: this.type,
                x: this.x,
                y: this.y,
                fontSize: this.fontSize,
                fontType: this.fontType,
                width: this.width,
                height: this.height
            };
        };

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            // return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^FD" + this.text + "^FS";
            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^A0," + (this.fontSize) + "," + (this.fontSize) + "\n^FD" + this.text + "\n^FS";
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();
            var measuredText = context.measureText(this.text);
            this.width = measuredText.width;
            context.globalCompositeOperation = "difference";
            context.fillText(this.text, this.x, this.y + (this.height * 0.75));
            context.globalCompositeOperation = "source-over";
            context.fillStyle = oColor;
            //context.fillRect(this.x, this.y, this.width, this.height);
        };

        this.setWidth = function (width) {
            //this.width = width;
        };

        this.getWidth = function () {
            return this.width;
        };

        this.setHeight = function (height) {
            //height = height;
        };

        this.getHeight = function () {
            return this.height * 0.75;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.9) - 1, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
        }
    }
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.variable = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div class='tool-wrapper'></div>")
        .addClass("designerToolbarButton")
        .attr("title", "Variable")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zm-11.5414143 20.08404512h2.56470146v1.26142167c1.4153491.24802729 2.5932352.87871457 3.53363314 1.89239099.94989913 1.0028928 1.45847856 2.31345737 1.52497365 3.93102698h-2.56470147c-.08549217-.72251622-.35640169-1.3427313-.8123555-1.86035233-.45595036-.52840598-1.0166207-.90053503-1.68154982-1.11621092v7.23056578c.59843616.1509739 1.14025864.32369125 1.62470675.51779752.48444943.1833245.97811694.4476353 1.48156346.79271811.51294505.33429575.93567513.72213258 1.26813996 1.16426984.34196337.4313502.62229735.97619607.84077438 1.63400844.21847704.65780972.32762825 1.39108125.32762825 2.19986487 0 1.80089437-.5174853 3.29464718-1.5528766 4.48086421-1.03538866 1.18621703-2.36561045 1.91948591-3.9899362 2.19986487v1.64951302h-2.56470147v-1.6334925c-1.6813207-.24802835-3.04426722-.98129724-4.089156-2.19986487-1.03538971-1.2293547-1.55784707-2.83616132-1.56734614-4.82037754h2.5647012c.15198381 1.09994434.4988044 2.01116668 1.04024667 2.7336829.54144227.72251358 1.22514253 1.2076959 2.05155427 1.45572425v-8.00674665c-3.48612826-.93818867-5.22913815-2.97627142-5.22913815-6.11435406 0-1.73619052.49418557-3.1331143 1.4820802-4.189926.98789462-1.0568117 2.23671894-1.70895935 3.74705795-1.95698664v-1.24540194zm9.63196932.80873626h2.99258299l6.52569912 18.94147985 6.76806275-18.94147985h2.82101657l-8.178829 23.45438246h-2.83548663l-8.0930458-23.45438246zm-9.63196933 3.25096421c-.77891692.20489201-1.41995047.57178548-1.92339672 1.1001912-.49394744.52840572-.74103996 1.20252965-.74103996 2.02209768 0 1.76854377.88812607 2.95454913 2.66443668 3.55843941v-6.68072829zm2.56470147 10.02936106v7.42435376c.86440776-.23724393 1.57689654-.6737535 2.13733695-1.30999704.5604404-.64702795.84077438-1.43996038.84077438-2.37814906.00000265-1.05681196-.27090952-1.8706888-.81235284-2.44222849-.53194214-.5823241-1.2538559-1.01360021-2.1657585-1.29397917z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        // this.variableName = 'Stock Id: ';
        this.variableName = '';
        this.variable = '#variable';
        // this.variablePreviewText = 'Your variable text here';
        this.variablePreviewText = '';
        this.variableText = 'Select variable'; // Default text drop-down
        // this.variableText = 'Product Name'; // Default text drop-down
        this.variableType = 'Text'; // Default type drop-down
        this.x = x;
        this.y = y;
        this.fontSize = 20;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'Variable';

        if (fromObject) {
            this.variableName = fromObject.variableName;
            this.variable = fromObject.variable;
            this.variablePreviewText = fromObject.variablePreviewText;
            this.variableType = fromObject.variableType;
            this.variableText = fromObject.variableText;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.fontSize = fromObject.fontSize;
            this.fontType = fromObject.fontType;
            this.width = fromObject.width;
            this.height = fromObject.height;
            this.type = fromObject.type;
        }

        this.readonly = ["width", "height", "type", 'fontType'];


        this.getFontHeight = function () {
            var textMeasure = $("<div></div>").css({
                "font-size": this.fontSize + "px",
                "font-family": this.fontType,
                "opacity": 0,
            }).text("M").appendTo($("body"));

            var height = textMeasure.outerHeight();
            textMeasure.remove();
            return height;
        };

        this.getZPLData = function () {
            return "";
        };

        this.getZPLMetaData = function () {
            return {
                variableName: this.variableName,
                variable: this.variable,
                variablePreviewText: this.variablePreviewText,
                variableType: this.variableType,
                variableText: this.variableText,
                x: this.x,
                y: this.y,
                fontSize: this.fontSize,
                fontType: this.fontType,
                width: this.width,
                height: this.height,
                type: this.type,
            };
        };

        this.toZPL = function (labelx, labely, labelHeight, labelWidth) {
            if (this.variableType === "Text") {
                // return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + '^FD' + this.variableName + this.variable + "^FS";
                return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + '^FD' + this.variableText + "^FS";
            }

            if (this.variableType === "TextBlock") {
                /** Field Block code TEMPLATE
                 ^FB400,100,5,J,0
                 ^A0,22,22
                 ^FH
                 ^FD
                 */

                var textBlockWidth = labelWidth - this.x;
                // return "^FB" + (textBlockWidth) + ",100,5,J,0," + "\n^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^A0," + (this.fontSize) + "," + (this.fontSize) + '\n^FD' + this.variableName + this.variable + "\n^FS";
                return "^FB" + (textBlockWidth) + ",100,5,J,0," + "\n^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^A0," + (this.fontSize) + "," + (this.fontSize) + '\n^FD' + this.variableText + "\n^FS";
            }
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();

            var displayText = this.variableName + this.variablePreviewText;
            var measuredText = context.measureText(displayText);
            this.width = measuredText.width;
            context.globalCompositeOperation = "difference";
            context.fillText(displayText, this.x, this.y + (this.height * 0.75));
            context.globalCompositeOperation = "source-over";
            context.fillStyle = oColor;
            //context.fillRect(this.x, this.y, this.width, this.height);
        };

        this.setWidth = function (width) {
            //this.width = width;
        };

        this.getWidth = function () {
            return this.width;
        };

        this.setHeight = function (height) {
            //height = height;
        };

        this.getHeight = function () {
            return this.height * 0.75;
        };

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        };

        this.getHandle = function () {
            return this.handle;
        };

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.9) - 1, [2, 2]);
        };

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
        }
    }
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};

// http://stackoverflow.com/a/5932203/697477
HTMLCanvasElement.prototype.RelativeMouse = function (event) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent);

    canvasX = event.clientX - totalOffsetX;
    canvasY = event.clientY - totalOffsetY;

    return {x: canvasX, y: canvasY}
};

// From http://stackoverflow.com/a/4577326/697477
var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
if (CP && CP.lineTo) {
    CP.dashedLine = function (x, y, x2, y2, dashArray) {
        if (!dashArray)
            dashArray = [10, 5];
        if (dashLength == 0)
            dashLength = 0.001; // Hack for Safari
        var dashCount = dashArray.length;
        this.moveTo(x, y);
        var dx = (x2 - x), dy = (y2 - y);
        var slope = dx ? dy / dx : 1e15;
        var distRemaining = Math.sqrt(dx * dx + dy * dy);
        var dashIndex = 0, draw = true;
        while (distRemaining >= 0.1) {
            var dashLength = dashArray[dashIndex++ % dashCount];
            if (dashLength > distRemaining)
                dashLength = distRemaining;
            var xStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
            if (dx < 0)
                xStep = -xStep;
            x += xStep;
            y += slope * xStep;
            this[draw ? 'lineTo' : 'moveTo'](x, y);
            distRemaining -= dashLength;
            draw = !draw;
        }

        // Ensure that the last segment is closed for proper stroking
        this.moveTo(0, 0);
    };

    CP.dashedStroke = function (x, y, x2, y2, dashArray) {
        this.beginPath();
        this.dashedLine(x, y, x2, y, dashArray);
        this.dashedLine(x2, y, x2, y2, dashArray);
        this.dashedLine(x2, y2, x, y2, dashArray);
        this.dashedLine(x, y, x, y2, dashArray);
        this.stroke();
    }
}

com.logicpartners.labelDesigner = function (canvasid, labelWidth, labelHeight, dpiInput) {
    this.canvas = document.getElementById(canvasid);
    this.canvasElement = $(this.canvas);

    this.labelWidth = labelWidth * this.dpi;
    this.labelHeight = labelHeight * this.dpi;
    this.propertyInspector = new com.logicpartners.propertyInspector(this, this.canvas);
    this.toolbar = new com.logicpartners.toolsWindow(this, this.canvas);
    this.labelInspector = new com.logicpartners.labelInspector(this, this.canvas);

    if (dpiInput) {
        this.dpi = dpiInput;
    } else {
        this.dpi = 200;
    }

    this.batchNumber = false;
    this.labelNumber = false;

    this.drawingContext = this.canvas.getContext("2d");
    this.elements = [];
    this.currentLayer = 0;
    this.activeElement = null;
    this.activeTool = null;

    this.labelX = this.canvas.width / 2 - this.labelWidth / 2;
    this.labelY = 5;

    this.newObject = null;
    this.dragStartPosition = {x: 0, y: 0};
    this.dragStartTime = 0;
    this.dragLastPosition = {x: 0, y: 0};
    this.dragElementOffset = {x: 0, y: 0};
    this.dragAction = 0;
    this.dragging = false;

    var self = this;

    this.updateLabelSize = function (width, height) {
        var xchange = (width * this.dpi + 10) - parseInt(this.canvasElement.prop("width"));
        this.labelWidth = width * this.dpi;
        this.labelHeight = height * this.dpi;
        this.canvasElement.prop("width", this.labelWidth + 10).prop("height", this.labelHeight + 10);
        this.labelX = this.canvas.width / 2 - this.labelWidth / 2;
        this.labelY = 5;
        this.updateCanvas();
    };

    var elem = this.canvasElement.context;

    this.canvasElement
        .on("click", function () {
            self.setActiveElement();
        })
        .on("importElement", function (e) {

            self.dragStartPosition = self.canvas.RelativeMouse(event);
            self.dragLastPosition = self.dragStartPosition;

            var detailData = e.originalEvent.detail;
            var elementObject = detailData.element;
            self.setNewObject(detailData.control);

            if (self.newObject) {
                // Create new object.
                self.elements[self.currentLayer++] = new self.newObject(null, null, null, null, elementObject);
                self.dragAction = 8;
                self.activeElement = self.elements[self.currentLayer - 1];
                self.newObject = null;
                self.newObjectController = null;
            }
        })
        .on("mousedown", function (element) {
            self.dragStartPosition = self.canvas.RelativeMouse(event);
            self.dragLastPosition = self.dragStartPosition;

            if (self.newObject) {
                // Create new object.
                self.elements[self.currentLayer++] = new self.newObject(self.dragStartPosition.x, self.dragStartPosition.y, 1, 1);
                self.dragAction = 8;
                self.activeElement = self.elements[self.currentLayer - 1];
                self.newObjectController.button.removeClass("designerToolbarButtonActive");
                self.newObject = null;
                self.newObjectController = null;
            } else {
                self.dragAction = 0;

                self.setActiveElement();

                if (self.activeElement) {
                    self.dragElementOffset = {
                        x: self.activeElement.x - self.dragStartPosition.x,
                        y: self.activeElement.y - self.dragStartPosition.y
                    };

                    self.setActiveHandle(self.dragStartPosition);
                }
            }
            self.dragging = true;
        })
        .on("mouseup", function () {
            self.dragging = false;
        })
        .on("mouseout", function () {
            self.dragging = false;
        })
        .on("mousemove", function () {
            if (self.dragging && self.activeElement) {
                var coords = self.canvas.RelativeMouse(event);
                switch (self.dragAction) {
                    case 0:
                        self.move(coords.x + self.dragElementOffset.x, coords.y + self.dragElementOffset.y);
                        break;
                    default:
                        self.resize(coords.x - self.dragLastPosition.x, coords.y - self.dragLastPosition.y, self.dragAction);
                        break;
                }
                self.updateCanvas();
                self.dragLastPosition = coords;
            } else if (self.newObject != null) {
                self.canvasElement.css({cursor: "crosshair"});
            } else if (self.activeElement) {
                var coords = self.canvas.RelativeMouse(event);
                // If cursor is within range of edge, show resize handles
                var location = self.getHandle(coords);
                var style = "default";
                switch (location) {
                    case 0:
                        style = "default";
                        break;
                    case 1:
                        style = "nw-resize";
                        break;
                    case 2:
                        style = "n-resize";
                        break;
                    case 3:
                        style = "ne-resize";
                        break;
                    case 4:
                        style = "w-resize";
                        break;
                    case 5:
                        style = "e-resize";
                        break;
                    case 6:
                        style = "sw-resize";
                        break;
                    case 7:
                        style = "s-resize";
                        break;
                    case 8:
                        style = "se-resize";
                        break;
                }
                self.canvasElement.css({cursor: style});
            }
        })
        .on("keydown", function (event) {
            event = event || window.event;

            var handled = false;
            switch (event.keyCode) {
                case 37: // Left arrow
                    if (self.activeElement)
                        self.activeElement.x -= 1;
                    handled = true;
                    break;
                case 38: // Up arrow
                    if (self.activeElement)
                        self.activeElement.y -= 1;
                    handled = true;
                    break;
                case 39: // Right arrow
                    if (self.activeElement)
                        self.activeElement.x += 1;
                    handled = true;
                    break;
                case 40: // Down arrow
                    if (self.activeElement)
                        self.activeElement.y += 1;
                    handled = true;
                    break;
                case 46:
                    if (self.activeElement) {
                        self.deleteActiveElement();
                        handled = true;
                    }
                    break;
                case 80:
                    if (event.ctrlKey) {
                        self.generateZPL();
                        handled = true;
                    }
                    break;
            }

            if (handled) {
                self.updateCanvas();
                event.preventDefault();
                event.stopPropagation();
            }
        });

    this.addObject = function (object) {
        this.elements[this.currentLayer++] = object;
        this.activeElement = this.elements[this.currentLayer - 1];
        this.updateCanvas();
    };

    this.deleteActiveElement = function () {
        if (this.activeElement) {
            for (var i = 0; i < this.currentLayer; i++) {
                if (this.elements[i] && this.elements[i] == this.activeElement) {
                    this.elements[i] = null;
                    this.activeElement = null;
                }
            }
        }
    };

    this.setActiveElement = function () {
        var coordinates = this.canvas.RelativeMouse(event);
        if (!this.activeElement || this.getHandle(coordinates) == 0) {
            this.activeElement = null;
            for (var i = this.currentLayer - 1; i >= 0; i--) {
                if (this.elements[i] && this.elements[i].hitTest(coordinates)) {
                    this.activeElement = this.elements[i];
                    break;
                }
            }
        }

        this.updateCanvas();
    };

    /**
     * Parameters: Coordinates on canvas.
     *
     * Returns: 0 if not on resize zone.
     *          1 top left     2 top     3 top right
     *          4 left                   5 right
     *          6 bottom left  7 bottom  8 bottom right
     */
    this.setActiveHandle = function (coords) {
        this.dragAction = this.getHandle(coords);
    };

    this.getHandle = function (coords) {
        var result = 0;

        var leftEdge = coords.x > this.activeElement.x - 5 && coords.x < this.activeElement.x + 5;
        var rightEdge = coords.x > this.activeElement.x + this.activeElement.getWidth() - 5 && coords.x < this.activeElement.x + this.activeElement.getWidth() + 5;
        var topEdge = coords.y > this.activeElement.y - 5 && coords.y < this.activeElement.y + 5;
        var bottomEdge = coords.y > this.activeElement.y + this.activeElement.getHeight() - 5 && coords.y < this.activeElement.y + this.activeElement.getHeight() + 5;

        var verticalHit = coords.y > this.activeElement.y && coords.y < this.activeElement.y + this.activeElement.getHeight();
        var horizontalHit = coords.x > this.activeElement.x && coords.x < this.activeElement.x + this.activeElement.getWidth();

        if (leftEdge && topEdge)
            result = 1;
        else if (rightEdge && topEdge)
            result = 3;
        else if (leftEdge && bottomEdge)
            result = 6;
        else if (rightEdge && bottomEdge)
            result = 8;
        else if (topEdge && horizontalHit)
            result = 2;
        else if (leftEdge && verticalHit)
            result = 4;
        else if (rightEdge && verticalHit)
            result = 5;
        else if (bottomEdge && horizontalHit)
            result = 7;

        return result;
    };

    this.move = function (x, y) {
        this.activeElement.x = x;
        this.activeElement.y = y;
    };

    this.resize = function (xchange, ychange) {
        switch (this.dragAction) {
            case 1: // Top Left
                this.activeElement.x += xchange;
                this.activeElement.y += ychange;
                this.activeElement.setWidth(this.activeElement.getWidth() - xchange);
                this.activeElement.setHeight(this.activeElement.getHeight() - ychange);
                break;
            case 2: // Top
                this.activeElement.y += ychange;
                this.activeElement.setHeight(this.activeElement.getHeight() - ychange);
                break;
            case 3: // Top Right
                this.activeElement.setWidth(this.activeElement.getWidth() + xchange);
                this.activeElement.y += ychange;
                this.activeElement.setHeight(this.activeElement.getHeight() - ychange);
                break;
            case 4: // Left
                this.activeElement.x += xchange;
                this.activeElement.setWidth(this.activeElement.getWidth() - xchange);
                break;
            case 5: // Right
                this.activeElement.setWidth(this.activeElement.getWidth() + xchange);
                break;
            case 6: // Bottom Left
                this.activeElement.x += xchange;
                this.activeElement.setWidth(this.activeElement.getWidth() - xchange);
                this.activeElement.setHeight(this.activeElement.getHeight() + ychange);
                break;
            case 7: // Bottom
                this.activeElement.setHeight(this.activeElement.getHeight() + ychange);
                break;
            case 8: // Bottom Right
                this.activeElement.setWidth(this.activeElement.getWidth() + xchange);
                this.activeElement.setHeight(this.activeElement.getHeight() + ychange);
                break;
        }

        if (this.activeElement.getWidth() == 0) {
            this.activeElement.setWidth(-1);
            this.activeElement.x += 1;
        }

        if (this.activeElement.getHeight() == 0) {
            this.activeElement.setHeight(-1);
            this.activeElement.y += 1;
        }

        if (this.activeElement.width < 0) {
            this.activeElement.x = this.activeElement.x + this.activeElement.getWidth();
            this.activeElement.setWidth(parseInt(this.activeElement.getWidth() * -1));
            this.swapActionHorizontal();
        }

        if (this.activeElement.height < 0) {
            this.activeElement.y = this.activeElement.y + this.activeElement.getHeight();
            this.activeElement.setHeight(this.activeElement.getHeight() * -1);
            this.swapActionVertical();
        }
    };

    this.swapActionVertical = function () {
        switch (this.dragAction) {
            case 1:
                this.dragAction = 6;
                break;
            case 2:
                this.dragAction = 7;
                break;
            case 3:
                this.dragAction = 8;
                break;
            case 6:
                this.dragAction = 1;
                break;
            case 7:
                this.dragAction = 2;
                break;
            case 8:
                this.dragAction = 3;
                break;
        }
    };

    this.swapActionHorizontal = function () {
        switch (this.dragAction) {
            case 1:
                this.dragAction = 3;
                break;
            case 3:
                this.dragAction = 1;
                break;
            case 4:
                this.dragAction = 5;
                break;
            case 5:
                this.dragAction = 4;
                break;
            case 6:
                this.dragAction = 8;
                break;
            case 8:
                this.dragAction = 6;
                break;
        }
    };

    this.update = function () {
        this.propertyInspector.update(this.activeElement);
    };

    this.updateCanvas = function () {
        this.update();

        this.drawingContext.fillStyle = "#FFFFFF";
        this.drawingContext.setLineDash([4]);
        this.drawingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the boundary.
        this.drawingContext.strokeStyle = "#000";
        this.drawingContext.lineWidth = 2;
        this.drawingContext.strokeRect(this.labelX, this.labelY, this.labelWidth, this.labelHeight);

        this.drawingContext.strokeStyle = "#000000";
        this.drawingContext.fillStyle = "#000000";

        for (var i = 0; i < this.currentLayer; i++) {
            if (this.elements[i]) {
                this.elements[i].draw(this.drawingContext, this.canvas.width, this.canvas.height);
            }
        }

        this.drawingContext.strokeStyle = "#FF0000";
        this.drawingContext.lineCap = 'butt';
        this.drawingContext.lineWidth = 2;
        if (this.activeElement)
            this.activeElement.drawActive(this.drawingContext);
    };

    /**
     * Enable or disable tools based on indicators.
     */
    this.setIndicators = function (indicators) {

        var isBatchEnabled = indicators.isBatchEnabled;

        if (!isBatchEnabled) {

            var batchNumberDomElementToDisable = $('.toolbar-wrapper').find("#batchNumberIdentifier");
            batchNumberDomElementToDisable.addClass('disabled-tool');
        } else {
            var batchNumberDomElementToEnable = $('.toolbar-wrapper').find("#batchNumberIdentifier");
            batchNumberDomElementToEnable.removeClass('disabled-tool');
        }
    };

    this.exportMetaData = function () {
        var bufferDataArray = [];

        for (var i = 0; i < this.currentLayer; i++) {
            if (this.elements[i]) {
                var elementMetaObj = this.elements[i].getZPLMetaData();
                bufferDataArray.push(elementMetaObj);
            }
        }

        var json = JSON.stringify(bufferDataArray);

        return {"json": json};
    };

    this.importFromMetaData = function (jsonInput) {
        if (jsonInput != null) {
            var bufferDataArray = JSON.parse(jsonInput);

            bufferDataArray.forEach(function (element) {

                var canvasRef = document.getElementById('labelDesignerUniqueId');

                if (document.createEvent) {

                    var controlObject = null;
                    if (element.type === 'Text') {

                        var tools = com.logicpartners.designerTools;
                        tools.text();

                        controlObject = {control: tools.text, object: tools.object};
                    }

                    if (element.type === 'Variable') {

                        var tools = com.logicpartners.designerTools;
                        tools.variable();

                        controlObject = {control: tools.text, object: tools.object};
                    }

                    if (element.type === 'BatchNumber') {

                        var tools = com.logicpartners.designerTools;
                        tools.batchNumber();

                        controlObject = {control: tools.text, object: tools.object};
                    }

                    if (element.type === 'LabelNumber') {

                        var tools = com.logicpartners.designerTools;
                        tools.labelNumber();

                        controlObject = {control: tools.text, object: tools.object};
                    }

                    if (element.type === 'Barcode') {

                        var tools = com.logicpartners.designerTools;
                        tools.barcode();

                        controlObject = {control: tools.text, object: tools.object};
                    }

                    if (element.type === 'TextBlock') {

                        var tools = com.logicpartners.designerTools;
                        tools.textBlock();

                        controlObject = {control: tools.text, object: tools.object};
                    }

                    /**
                     * Event
                     */
                    var event = new CustomEvent('importElement', {
                        'detail': {
                            element: element,
                            control: controlObject
                        }
                    });

                    canvasRef.dispatchEvent(event);
                }

                canvasRef.click();
            })
        }
    };

    this.generateZPL = function () {
        var data = "^XA\r\n" +
            "^LS0\r\n" +
            "^LT0\r\n" +
            "^LH{{leftOffset}},{{topOffset}}\r\n" +
            "^PR12\r\n" +
            "^MD30\r\n";
        var bufferData = "";

        var designerProperties = {
            labelWidth: this.labelWidth
        };

        for (var i = 0; i < this.currentLayer; i++) {
            if (this.elements[i]) {
                bufferData += this.elements[i].getZPLData();
                data += this.elements[i].toZPL(this.labelX, this.labelY, this.labelHeight, this.labelWidth, designerProperties) + '\r\n';
            }
        }

        data += "^XZ\r\n";

        return {"data": bufferData, "zpl": data};
    };

    this.setNewObject = function (controller) {
        if (controller) {
            this.newObject = controller.object;
            this.newObjectController = controller;
        } else {
            this.newObject = null;
            this.newObjectController = null;
        }
    };

    this.addRectangle = function (x, y, width, height) {
        this.elements[this.currentLayer++] = new this.Rectangle(x, y, width, height);
        this.updateCanvas();
    };

    this.updateLabelSize(labelWidth, labelHeight);

    this.updateCanvas();
};

if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
	
com.logicpartners.labelInspector = function(designer, canvas) {
	this.canvas = canvas;
	this.canvasElement = $(canvas);
	this.labelDesigner = designer;
	var self = this;
	this.boundingBox = null;
	
	// Create the property window.
	this.inspectorWindow = $('<div></div>')
			.addClass("designerUtilityToolbar designerUtilityLabelInspector")
			.insertAfter($(this.canvasElement).parent());

	this.toolsViewContainer = $('<div></div>')
			.addClass("designerLabelContent")
			.appendTo(this.inspectorWindow);

	this.buttonView = $('<div></div>')
			.appendTo(this.toolsViewContainer);
	
	this.addTool = function(controller) {
		// console.log(controller.workspace.html());
		this.buttonView.append(controller.workspace);
	}
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};

com.logicpartners.propertyInspector = function (designer, canvas) {
    this.canvas = canvas;
    this.canvasElement = $(canvas);
    this.labelDesigner = designer;
    this.activeElement = null;
    this.propertyNodes = {};
    this.boundingBox = null;
    var self = this;

    // Create the property window.
    this.propertyInspector = $('<div></div>')
        .addClass("designerUtilityWindow")
        .insertAfter($(this.canvasElement).parent());


    this.propertyViewContainer = $('<div></div>')
        .addClass("designerPropertyContainer")
        .appendTo(this.propertyInspector);

    this.titleBar = $('<div>Properties</div>')
        .addClass("designerPropertyTitle")
        .prependTo(this.propertyInspector)
        .on("dblclick", function () {
            self.propertyViewContainer.toggle();
        });

    this.propertyView = $('<div></div>')
        .addClass("designerPropertyContent")
        .appendTo(this.propertyViewContainer);

    this.update = function (activeElement) {
        var self = this;
        var getType = {};
        var keys = [];

        if (this.activeElement == activeElement) {
            for (var key in activeElement) {
                if (!activeElement.readonly || key != "readonly" && $.inArray(key, activeElement.readonly) == -1) {
                    if (getType.toString.call(activeElement[key]) != '[object Function]') {
                        this.propertyNodes[key].val(activeElement[key]);
                    }
                }
            }
        } else {
            this.activeElement = activeElement;
            this.propertyView.html('');

            for (var key in activeElement) {
                if (!keys[key]) {
                    keys[key] = true;

                    if (key != "readonly" && getType.toString.call(activeElement[key]) != '[object Function]') {

                        // Convert camelCase to capital case
                        var result = key.replace(/([A-Z])/g, " $1");
                        var finalResult = result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter - as an example.

                        if (key.length === 1) {
                            finalResult = key;
                        }

                        var elementKey = $('<div class="propertiesFieldKey">' + finalResult + '</div>');

                        var elementValue = null;

                        if (key === 'textArea') {
                            elementValue = $('<textarea class="propertiesFieldTextInput" id="labelDesignerTextAreaBlock" rows="4" cols="50" name="' + key + '" value="' + activeElement[key] + '"></textarea>');
                        } else if (key === 'variableType') {
                            elementValue = $('<select class="propertiesFieldTextInput" id="labelDesignerVariableType" name="labelDesignerVariableType">' +
                                '<option value="Text">Text</option>' +
                                '<option value="TextBlock">TextBlock</option>' +
                                '</select>');

                            var selectedValue = activeElement[key];

                            if (!selectedValue) {
                                selectedValue = 'Text';
                                this.activeElement.variableType = selectedValue;
                            }

                            var thatActiveElement = this.activeElement;
                            setTimeout(function () {
                                $("#labelDesignerVariableType").val(selectedValue);

                                $('#labelDesignerVariableType').on('change', function () {
                                    thatActiveElement.variableType = this.value;
                                });
                            }, 0);

                        } else if (key === 'variableText') {
                            elementValue = $('<select class="propertiesFieldTextInput" id="labelDesignerVariableText" name="labelDesignerVariableText">' +
                                '<option selected="selected" value="Select variable">Select variable</option>' +
                                '<option value="{{createDate}}">Create Date</option>' +
                                '<option value="{{createDateTime}}">Create Date Time</option>' +
                                '<option value="{{expiresDate}}">Expires Date</option>' +
                                '<option value="{{expiresDateTime}}">Expires Date Time</option>' +
                                '<option value="{{expiresDayName}}">Expires Day Name</option>' +
                                '<option value="{{managerName}}">Manager Name</option>' +
                                '<option value="{{productCategory}}">Product Category</option>' +
                                '<option value="{{productCode}}">Product Code</option>' +
                                '<option value="{{productDescription}}">Product Description</option>' +
                                '<option value="{{shelfLife}}">Shelf Life</option>' +
                                '<option value="{{userName}}">Username</option>' +
                                '</select>');

                            var selectedValueVariableText = activeElement[key];

                            if (!selectedValueVariableText) {
                                selectedValueVariableText = 'Product Name';
                                this.activeElement.variableText = selectedValueVariableText;
                                this.activeElement.variablePreviewText = 'Product Name';
                            } else {
                                this.activeElement.variablePreviewText = this.activeElement.variableText
                            }

                            var thatActiveElement = this.activeElement;
                            setTimeout(function () {
                                $("#labelDesignerVariableText").val(selectedValueVariableText);

                                $('#labelDesignerVariableText').on('change', function (elem) {
                                    thatActiveElement.variableText = this.value;
                                    var selectedDisplayText = $("#labelDesignerVariableText option:selected").text();
                                    thatActiveElement.variablePreviewText = selectedDisplayText;
                                    self.labelDesigner.updateCanvas();
                                });
                            }, 0);

                        } else {
                            elementValue = $('<input class="propertiesFieldTextInput" type="text" name="' + key + '" value="' + activeElement[key] + '">')
                        }

                        if (!activeElement.readonly || $.inArray(key, activeElement.readonly) == -1) {
                            elementValue.on("keyup", {"objectProperty": key}, function (event) {
                                var data = self.activeElement[event.data.objectProperty];
                                self.activeElement[event.data.objectProperty] = (data === parseInt(data, 10)) ? parseInt($(this).val()) : $(this).val();
                                self.labelDesigner.updateCanvas();
                            });
                        } else {
                            // Draw readonly textbox.
                            // elementValue.prop("readonly", true).css({
                            //     "background-color": "#DDDDDD",
                            //     border: "1px solid #AAAAAA",
                            // }).parent().css({
                            //     'display': 'none !important'
                            // })

                            var parent = elementValue.prop("readonly", true).css({
                                "background-color": "#DDDDDD",
                                border: "1px solid #AAAAAA",
                            }).parent().closest('label-designer-form-group').css({
                                display: 'none'
                            });
                            // debugger;
                        }

                        this.propertyNodes[key] = elementValue;

                        /**
                         * Hide field
                         */
                        if (key === 'variableName') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'type') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'placeholderKey') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'textName') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'barcodeName') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'variablePreviewText') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'textBlockName') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'variable') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'fontType') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'height' && this.activeElement.type !== 'Barcode') {
                            continue;
                        }

                        /**
                         * Hide field
                         */
                        if (key === 'width') {
                            continue;
                        }

                        var elementContainer = $('<div class="label-designer-form-group"></div>')
                            .css({
                                // "clear": "both",
                                // "padding-top": "2px"
                            })
                            .append(elementKey).append(elementValue);
                        this.propertyView.append(elementContainer);
                    }
                }
            }

            if (activeElement !== null) {

                var indexToDelete = this.labelDesigner.elements.indexOf(activeElement);
                var elements = this.labelDesigner.elements;

                var deleteElement = $('<button class="label-designer-btn__warning">Delete element</button>')
                    .on('click', null, function () {
                        elements.splice(indexToDelete, 1);

                        self.labelDesigner.updateCanvas();
                        self.propertyView.html('');
                    });

                var deleteElementContainer = $('<div></div>')
                    .append(deleteElement);


                this.propertyView.append(deleteElementContainer);
            }
        }
    };
};

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};

com.logicpartners.toolsWindow = function (designer, canvas) {
    this.canvas = canvas;
    this.canvasElement = $(canvas);
    this.labelDesigner = designer;
    this.boundingBox = null;
    var self = this;

    // Create the property window.
    this.toolsWindow = $('<div></div>')
        .addClass("designerUtilityToolbar")
        .insertAfter($(this.canvasElement).parent());


    this.toolsViewContainer = $('<div></div>')
        .addClass("designerToolbarContent")
        .appendTo(this.toolsWindow);

    this.titleBar = $('<div>Tools</div>')
        .addClass("designerPropertyTitle")
        .prependTo(this.toolsWindow)
        .on("dblclick", function () {
            self.toolsViewContainer.toggle();
        });

    this.buttonView = $('<div class="toolbar-wrapper"></div>')
        .appendTo(this.toolsViewContainer);

    this.setTool = function (controller) {
        if (self.labelDesigner.newObjectController == controller) {
            self.labelDesigner.setNewObject(null);
            controller.button.removeClass("designerToolbarButtonActive");
        } else {
            if (self.labelDesigner.newObjectController) self.labelDesigner.newObjectController.button.removeClass("designerToolbarButtonActive");
            self.labelDesigner.setNewObject(controller);
            if (controller) {
                controller.button.addClass("designerToolbarButtonActive");

                if (controller.activate) controller.activate(this);
            }
        }
    };

    this.addTool = function (controller) {
        var self = this;
        controller.button.on("click", {tool: controller}, function (event) {
            self.setTool(event.data.tool);
        });

        this.buttonView.append(controller.button);
    };

    this.update = function (activeElement) {
    };
};