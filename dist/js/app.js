if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.labelControl)
    com.logicpartners.labelControl = {};

com.logicpartners.labelControl.generatezpl = function (designer) {
    var self = this;
    this.designer = designer;
    this.workspace = $("<div></div>").addClass("designerLabelControl").attr("title", "Label Size").css({float: "right"});

    this.buttonContainer = $("<div></div>").appendTo(this.workspace);

    this.button = $("<button>View ZPL</button>").css({"line-height": "30px"}).appendTo(this.buttonContainer)
        .on("click", function () {
            var zpl = self.designer.generateZPL();
            var dialog = $("<div></div>").prop("title", "Generated ZPL");

            var output = $("<textarea></textarea>").css({
                "white-space": "nowrap",
                resize: "none",
                width: "100%",
                height: "100%"
            }).val(zpl.data + zpl.zpl).appendTo(dialog);

            var Toolbar = toolbar;
            dialog.dialog({
                modal: true,
                width: 470,
                height: 400
            });

            output.select();
        });

    this.button = $("<button>Export</button>").css({"line-height": "30px"}).appendTo(this.buttonContainer)
        .on("click", function () {
            var zpl = self.designer.exportMetaData();
            var dialog = $("<div></div>").prop("title", "Exported JSON with metadata");

            var output = $("<textarea></textarea>").css({
                "white-space": "nowrap",
                resize: "none",
                width: "100%",
                height: "100%"
            }).val(zpl.json).appendTo(dialog);

            var Toolbar = toolbar;
            dialog.dialog({
                modal: true,
                width: 470,
                height: 400
            });

            output.select();
        });

    this.button = $("<button>Import</button>").css({"line-height": "30px"}).appendTo(this.buttonContainer)
        .on("click", function () {

            var jsonInput = prompt("Your meta data input");
            if (jsonInput != null) {
                var bufferDataArray = JSON.parse(jsonInput);

                bufferDataArray.forEach(function (element) {

                    var canvasRef = document.getElementById('labelDesigner');

                    if (document.createEvent) {

                        var controlObject = null;
                        if (element.type === 'Textbox') {

                            var tools = com.logicpartners.designerTools;
                            tools.text();

                            controlObject = {control: tools.text, object: tools.object};
                        }

                        if (element.type === 'Rectangle') {

                            var tools = com.logicpartners.designerTools;
                            tools.rectangle();

                            controlObject = {control: tools.text, object: tools.object};
                        }

                        if (element.type === 'Barcode') {

                            var tools = com.logicpartners.designerTools;
                            tools.barcode();

                            controlObject = {control: tools.text, object: tools.object};
                        }

                        var event = new CustomEvent('importElement', {'detail': {element: element, control: controlObject}});

                        canvasRef.dispatchEvent(event);
                    }

                    canvasRef.click();
                })
            }
        });

    this.update = function () {
        this.widthController.val(this.designer.labelWidth / this.designer.dpi);
        this.heightController.val(this.designer.labelHeight / this.designer.dpi);
    }
}

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
	
	this.widthContainer = $("<div>Width: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.widthController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "50px"
			
		})
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
		
	this.heightContainer = $("<div>Height: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.heightController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "50px"
			
		})
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
				width : "50px"
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
	}
		
	this.update = function() {
		this.widthController.val(this.designer.labelWidth / this.designer.dpi);
		this.heightController.val(this.designer.labelHeight / this.designer.dpi);
	}
}
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
	
com.logicpartners.designerTools.barcode = function() {
	var self = this;
	this.counter = 1;
	this.button = $("<div></div>").addClass("designerToolbarBarcode designerToolbarButton").attr("title", "Barcode").append($("<div></div>"));
	this.object = function(x, y, width, height, fromObject) {
		var width = 100;
		var canvasHolder = $("<canvas></canvas>").prop("width", "100").prop("height", "1");
		this.name = "Barcode " + self.counter++;
		this.text = "BARCODE";
        this.type = 'Barcode';
        this.x = x;
		this.y = y;
		// this.width = width; // NOT APPLIED
		this.height = height;

        if (fromObject) {
            this.name = fromObject.name;
            this.text = fromObject.text;
            this.type = fromObject.type;
            this.x = fromObject.x;
            this.y = fromObject.y;
            // this.width = fromObject.width;
            this.height = fromObject.height;
        }

        this.readonly = ["type"];
		
		this.getZPLData = function() {
            return "";
		}

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
        }

		this.toZPL = function(labelx, labely, labelwidth, labelheight) {
			return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^BY1^B3N,N," + this.height + "N,N^FD" + this.text + "^FS";
		}

		this.draw = function(context) {
			console.log(this.text);
			canvasHolder.JsBarcode(this.text, { width: 1, height : 1});
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
		}
		
		this.setWidth = function(width) {
			//this.width = width;
		}
		
		this.getWidth = function() {
			return width;
		}
		
		this.setHeight = function(height) {
			this.height = height;
		}
		
		this.getHeight = function() {
			return this.height;
		}

		this.setHandle = function(coords) {
			this.handle = this.resizeZone(coords);
		}

		this.getHandle = function() {
			return this.handle;
		}

		this.drawActive = function(context) {
			context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
		}

		this.hitTest = function(coords) {
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
					}
					insertImg[0].src = reader.result;
				}
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
					console.log("test");
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
			console.log(self.data);
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
			}
			
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
		}
		
		this.setWidth = function(width) {
			//this.width = width;
		}
		
		this.getWidth = function() {
			return this.width;
		}
		
		this.setHeight = function(height) {
			//height = height;
		}
		
		this.getHeight = function() {
			return this.height;
		}

		this.setHandle = function(coords) {
			this.handle = this.resizeZone(coords);
		}

		this.getHandle = function() {
			return this.handle;
		}

		this.drawActive = function(context) {
			context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
		}

		this.hitTest = function(coords) {
			return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
		}
	}
}


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
        this.type = 'Rectangle';
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        if (fromObject) {
            this.name = fromObject.name;
            this.type = fromObject.type;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.width = fromObject.width;
            this.height = fromObject.height;
        }

        this.readonly = ["type"];

        this.getZPLData = function () {
            return "";
        }

        this.getZPLMetaData = function () {
            return {
                name: this.name,
                type: this.type,
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            if (this.width > this.height) {
                return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^GB" + this.width + ",0," + this.height + "^FS";
            }

            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^GB" + "0," + this.height + "," + this.width + "^FS";
        }

        this.draw = function (context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }

        this.setWidth = function (width) {
            this.width = parseInt(width);
        }

        this.getWidth = function () {
            return this.width;
        }

        this.setHeight = function (height) {
            this.height = height;
        }

        this.getHeight = function () {
            return this.height;
        }

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        }

        this.getHandle = function () {
            return this.handle;
        }

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
        }

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
        }
    }
}

if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.designerTools)
    com.logicpartners.designerTools = {};

com.logicpartners.designerTools.text = function () {
    var self = this;
    this.counter = 1;
    this.button = $("<div></div>").addClass("designerToolbarText designerToolbarButton").attr("title", "Text").append($("<div></div>"));
    this.object = function (x, y, width, height, fromObject) {
        this.name = "Textbox " + self.counter++;
        this.type = 'Textbox';
        this.text = this.name;
        this.x = x;
        this.y = y;
        this.fontSize = 36;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;

        if (fromObject) {
            this.name = fromObject.name;
            this.type = fromObject.type;
            this.text = fromObject.text;
            this.x = fromObject.x;
            this.y = fromObject.y;
            this.fontSize = fromObject.fontSize;
            this.fontType = fromObject.fontType;
            this.width = fromObject.width;
            this.height = fromObject.height;
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
        }

        this.getZPLData = function () {
            return "";
        }

        this.getZPLMetaData = function () {
            return {
                name: this.name,
                text: this.text,
                type: this.type,
                x: this.x,
                y: this.y,
                fontSize: this.fontSize,
                fontType: this.fontType,
                width: this.width,
                height: this.height
            };
        }

        this.toZPL = function (labelx, labely, labelwidth, labelheight) {
            // return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^FD" + this.text + "^FS";
            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + "^FD" + this.text + "^FS";
        }

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
        }

        this.setWidth = function (width) {
            //this.width = width;
        }

        this.getWidth = function () {
            return this.width;
        }

        this.setHeight = function (height) {
            //height = height;
        }

        this.getHeight = function () {
            return this.height * 0.75;
        }

        this.setHandle = function (coords) {
            this.handle = this.resizeZone(coords);
        }

        this.getHandle = function () {
            return this.handle;
        }

        this.drawActive = function (context) {
            context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.9) - 1, [2, 2]);
        }

        this.hitTest = function (coords) {
            return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
        }
    }
}

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
    while (currentElement = currentElement.offsetParent)

    canvasX = event.clientX - totalOffsetX;
    canvasY = event.clientY - totalOffsetY;

    return {x: canvasX, y: canvasY}
}

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
            x += xStep
            y += slope * xStep;
            this[draw ? 'lineTo' : 'moveTo'](x, y);
            distRemaining -= dashLength;
            draw = !draw;
        }

        // Ensure that the last segment is closed for proper stroking
        this.moveTo(0, 0);
    }

    CP.dashedStroke = function (x, y, x2, y2, dashArray) {
        this.beginPath();
        this.dashedLine(x, y, x2, y, dashArray);
        this.dashedLine(x2, y, x2, y2, dashArray);
        this.dashedLine(x2, y2, x, y2, dashArray);
        this.dashedLine(x, y, x, y2, dashArray);
        this.stroke();
    }
}

com.logicpartners.labelDesigner = function (canvasid, labelWidth, labelHeight) {
    this.canvas = document.getElementById(canvasid);
    this.canvasElement = $(this.canvas);

    this.labelWidth = labelWidth * this.dpi;
    this.labelHeight = labelHeight * this.dpi;
    this.propertyInspector = new com.logicpartners.propertyInspector(this, this.canvas);
    this.toolbar = new com.logicpartners.toolsWindow(this, this.canvas);
    this.labelInspector = new com.logicpartners.labelInspector(this, this.canvas);
    this.dpi = 200;
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
        console.log(xchange);
        this.propertyInspector.updatePosition(xchange);
        this.labelInspector.updatePosition(xchange);
        this.updateCanvas();
    }

    var elem = this.canvasElement.context;

    this.canvasElement
        .on("click", function () {
            self.setActiveElement();
        })
        .on("importElement", function (e) {

            self.dragStartPosition = self.canvas.RelativeMouse(event);
            self.dragLastPosition = self.dragStartPosition;

            var detailData = e.originalEvent.detail
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
                //console.log(self.dragAction);
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
    }

    this.deleteActiveElement = function () {
        if (this.activeElement) {
            for (var i = 0; i < this.currentLayer; i++) {
                if (this.elements[i] && this.elements[i] == this.activeElement) {
                    this.elements[i] = null;
                    this.activeElement = null;
                }
            }
        }
    }

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
    }

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
    }

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
    }

    this.move = function (x, y) {
        this.activeElement.x = x;
        this.activeElement.y = y;
    }

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
    }

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
    }

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
    }

    this.update = function () {
        this.propertyInspector.update(this.activeElement);
    }

    this.updateCanvas = function () {
        this.update();

        this.drawingContext.fillStyle = "#FFFFFF";
        this.drawingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the boundary.
        this.drawingContext.strokeStyle = "#FF0000";
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
    }

    this.exportMetaData = function () {
        var bufferDataArray = [];

        for (var i = 0; i < this.currentLayer; i++) {
            if (this.elements[i]) {
                var elementMetaObj = this.elements[i].getZPLMetaData();
                bufferDataArray.push(elementMetaObj);
            }
        }

        var json = JSON.stringify(bufferDataArray);
        console.log(json);

        return {"json": json};
    }

    this.generateZPL = function () {
        var data = "^XA\r\n" +
            "^LS0\r\n" +
            "^LT0\r\n" +
            "^LH{{leftOffset}},{{topOffset}}\r\n" +
            "^PR12\r\n" +
            "^MD30\r\n";
        var bufferData = "";

        for (var i = 0; i < this.currentLayer; i++) {
            if (this.elements[i]) {
                bufferData += this.elements[i].getZPLData();
                data += this.elements[i].toZPL(this.labelX, this.labelY, this.labelHeight, this.labelWidth) + '\n';
            }
        }
        data = data.substring(0, data.length - 1);

        data += "\r\n";
        data += "{{ batchNumber && labelNr ? '^FO0,95 ^A0,18,18 ^FDBatch #: #batchNr -  #labelNr ^FS' : ''}}\r\n{{ batchNumber && !labelNr ? '^FO0,95 ^A0,18,18 ^FDBatch #: #batchNr ^FS' : ''}}\r\n{{ labelNr && !batchNumber ? '^FO0,95 ^A0,18,18 ^FDLabel #: #labelNr ^FS' : ''}}\r\n";

        data += "^XZ\r\n";

        console.log(bufferData + data);
        return {"data": bufferData, "zpl": data};
    }

    this.setNewObject = function (controller) {
        if (controller) {
            this.newObject = controller.object;
            this.newObjectController = controller;
        } else {
            this.newObject = null;
            this.newObjectController = null;
        }
    }

    this.addRectangle = function (x, y, width, height) {
        this.elements[this.currentLayer++] = new this.Rectangle(x, y, width, height);
        this.updateCanvas();
    }

    this.updateLabelSize(labelWidth, labelHeight);

    this.updateCanvas();
}

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
	
	this.updatePosition = function(xchange) {
		this.inspectorWindow.css("width", parseInt(this.inspectorWindow.css("width")) + xchange);
		this.boundingBox = this.inspectorWindow[0].getBoundingClientRect();
	}
	
	// Create the property window.
	this.inspectorWindow = $('<div></div>')
			.addClass("designerUtilityToolbar designerUtilityLabelInspector")
			.css({
				"left": 0,
				"top": this.canvas.getBoundingClientRect().top - 50,
				"width" : this.labelDesigner.propertyInspector.boundingBox.right - this.labelDesigner.toolbar.boundingBox.left
			})
			.insertAfter(this.canvasElement);

	this.toolsViewContainer = $('<div></div>')
			.addClass("designerLabelContent")
			.appendTo(this.inspectorWindow);

	this.buttonView = $('<div></div>')
			.appendTo(this.toolsViewContainer);
	
	this.update = function(activeElement) {
	}
	
	this.addTool = function(controller) {
		console.log(controller.workspace.html());
		this.buttonView.append(controller.workspace);
	}
}

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
        .css({
            "left": this.canvas.getBoundingClientRect().right + 5 - 200,
            "top": this.canvas.getBoundingClientRect().top
        })
        //.draggable({handle: "div.designerPropertyTitle"})
        .insertAfter(this.canvasElement);

    this.updatePosition = function (xchange) {
        this.propertyInspector.css("left", parseInt(this.propertyInspector.css("left")) + xchange);
        this.boundingBox = this.propertyInspector[0].getBoundingClientRect();
    }


    this.propertyViewContainer = $('<div></div>')
        .addClass("designerPropertyContainer")
        .resizable({
            resize: function (event, ui) {
                ui.size.width = ui.originalSize.width;
            }
        })
        .appendTo(this.propertyInspector);

    this.titleBar = $('<div>Property Inspector</div>')
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
                        var elementKey = $('<div>' + key + '</div>')
                            .css({
                                "width": "65px",
                                "border": "1px solid #AAAAAA",
                                "float": "left",
                                "font-size": "12px",
                                "line-height": "20px",
                                "border-right": "none",
                                "text-align": "right",
                                "padding-right": "5px",
                                "margin-left": "5px",
                                "padding": "3px"
                            });

                        var elementValue = $('<input type="text" name="' + key + '" value="' + activeElement[key] + '">')
                            .css({
                                "width": "120px",
                                "float": "left",
                                "height": "22px",
                                "line-height": "20px",
                                "padding-left": "5px"
                            });

                        if (!activeElement.readonly || $.inArray(key, activeElement.readonly) == -1) {
                            elementValue.on("keyup", {"objectProperty": key}, function (event) {
                                var data = self.activeElement[event.data.objectProperty];
                                self.activeElement[event.data.objectProperty] = (data === parseInt(data, 10)) ? parseInt($(this).val()) : $(this).val();
                                self.labelDesigner.updateCanvas();
                            });
                        } else {
                            // Draw readonly textbox.
                            elementValue.prop("readonly", true).css({
                                "background-color": "#DDDDDD",
                                border: "1px solid #AAAAAA"
                            });
                        }

                        this.propertyNodes[key] = elementValue;

                        var elementContainer = $('<div></div>')
                            .css({
                                "clear": "both",
                                "padding-top": "2px"
                            })
                            .append(elementKey).append(elementValue);
                        this.propertyView.append(elementContainer);
                    }
                }
            }

            if (activeElement !== null) {

                var indexToDelete = this.labelDesigner.elements.indexOf(activeElement);
                var elements = this.labelDesigner.elements;

                var deleteElement = $('<button>Delete element</button>')
                    .css({
                        'z-index': '1',
                        'position': 'relative',
                        'font-size': 'inherit',
                        'color': 'white',
                        'padding': '0.5em 1em',
                        'outline': 'none',
                        'border': 'none',
                        'background-color': '#555555',
                        'overflow': 'hidden',
                        'transition': 'color 0.4s ease-in-out',
                        'cursor': 'pointer',
                        'font-family': 'sans-serif',
                        'width': '100%'
                    })
                    .on('click', null, function () {
                        elements.splice(indexToDelete, 1);

                        self.labelDesigner.updateCanvas();
                        self.propertyView.html('');
                    });

                var deleteElementContainer = $('<div></div>')
                    .css({
                        "clear": "both",
                        "padding-top": "2px"
                    })
                    .append(deleteElement)


                this.propertyView.append(deleteElementContainer);
            }
        }
    }

    this.updatePosition(0);
}

if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
	
com.logicpartners.toolsWindow = function(designer, canvas) {
	this.canvas = canvas;
	this.canvasElement = $(canvas);
	this.labelDesigner = designer;
	this.boundingBox = null;
	var self = this;

	// Create the property window.
	this.toolsWindow = $('<div></div>')
			.addClass("designerUtilityToolbar")
			.css({
				"left": 0,
				"top": this.canvas.getBoundingClientRect().top
			})
			//.draggable({handle: "div.designerPropertyTitle"})
			.insertAfter(this.canvasElement);


	this.toolsViewContainer = $('<div></div>')
			.addClass("designerToolbarContent")
			.resizable({
				resize: function(event, ui) {
					ui.size.width = ui.originalSize.width;
				}
			})
			.appendTo(this.toolsWindow);

	this.titleBar = $('<div>Tools</div>')
			.addClass("designerPropertyTitle")
			.prependTo(this.toolsWindow)
			.on("dblclick", function() {
				self.toolsViewContainer.toggle();
			});

	this.buttonView = $('<div></div>')
			.appendTo(this.toolsViewContainer);
	
	this.setTool = function(controller) {
		if (self.labelDesigner.newObjectController == controller) {
			self.labelDesigner.setNewObject(null);
			controller.button.removeClass("designerToolbarButtonActive");
		}
		else {
			if (self.labelDesigner.newObjectController) self.labelDesigner.newObjectController.button.removeClass("designerToolbarButtonActive");
			self.labelDesigner.setNewObject(controller);
			if (controller) {
				controller.button.addClass("designerToolbarButtonActive");
			
				if (controller.activate) controller.activate(this);
			}
		}
	};
	
	this.addTool = function(controller) {
		var self = this;
		controller.button.on("click", { tool : controller }, function(event) {
			self.setTool(event.data.tool);
		});
		
		this.buttonView.append(controller.button);
	}
	
	this.updatePosition = function(xchange) {
		this.boundingBox = this.toolsWindow[0].getBoundingClientRect();
	}
	
	this.update = function(activeElement) {
	}
	
	this.updatePosition(0);
}