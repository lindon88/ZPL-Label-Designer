if(!com)var com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.labelControl||(com.logicpartners.labelControl={}),com.logicpartners.labelControl.generatezpl=function(t){this.designer=t,this.workspace=$("<div></div>").addClass("designerLabelControl").attr("title","Label Size").css({float:"right"}),this.buttonContainer=$("<div></div>").appendTo(this.workspace),this.update=function(){this.widthController.val(this.designer.labelWidth/this.designer.dpi),this.heightController.val(this.designer.labelHeight/this.designer.dpi)}},!com)com={};function CODE128(t,e){function i(){return-1!=t.search(c)}function n(t,e,i,n){var s;return s=""+o(i),s+=e(t),(s+=o(n(t,i)))+"1100011101011"}function s(t){for(var e="",i=0;i<t.length;i++){var n;t:{for(n=0;n<l.length;n++)if(l[n][0]==t[i]){n=l[n][1];break t}n=""}e+=n}return e}function a(t){for(var e="",i=0;i<t.length;i+=2)e+=o(parseInt(t.substr(i,2)));return e}function r(t,e){for(var i=0,n=0;n<t.length;n++){var s;t:{for(s=0;s<l.length;s++)if(l[s][0]==t[n]){s=l[s][2];break t}s=0}i+=s*(n+1)}return(i+e)%103}function h(t,e){for(var i=0,n=1,s=0;s<t.length;s+=2)i+=parseInt(t.substr(s,2))*n,n++;return(i+e)%103}function o(t){for(var e=0;e<l.length;e++)if(l[e][2]==t)return l[e][1];return""}e=e||"B",this.string128=t+"",this.valid=i,this.encoded=function(){return i()?d["code128"+e](t):""};var l=[[" ","11011001100",0],["!","11001101100",1],['"',"11001100110",2],["#","10010011000",3],["$","10010001100",4],["%","10001001100",5],["&","10011001000",6],["'","10011000100",7],["(","10001100100",8],[")","11001001000",9],["*","11001000100",10],["+","11000100100",11],[",","10110011100",12],["-","10011011100",13],[".","10011001110",14],["/","10111001100",15],["0","10011101100",16],["1","10011100110",17],["2","11001110010",18],["3","11001011100",19],["4","11001001110",20],["5","11011100100",21],["6","11001110100",22],["7","11101101110",23],["8","11101001100",24],["9","11100101100",25],[":","11100100110",26],[";","11101100100",27],["<","11100110100",28],["=","11100110010",29],[">","11011011000",30],["?","11011000110",31],["@","11000110110",32],["A","10100011000",33],["B","10001011000",34],["C","10001000110",35],["D","10110001000",36],["E","10001101000",37],["F","10001100010",38],["G","11010001000",39],["H","11000101000",40],["I","11000100010",41],["J","10110111000",42],["K","10110001110",43],["L","10001101110",44],["M","10111011000",45],["N","10111000110",46],["O","10001110110",47],["P","11101110110",48],["Q","11010001110",49],["R","11000101110",50],["S","11011101000",51],["T","11011100010",52],["U","11011101110",53],["V","11101011000",54],["W","11101000110",55],["X","11100010110",56],["Y","11101101000",57],["Z","11101100010",58],["[","11100011010",59],["\\","11101111010",60],["]","11001000010",61],["^","11110001010",62],["_","10100110000",63],["`","10100001100",64],["a","10010110000",65],["b","10010000110",66],["c","10000101100",67],["d","10000100110",68],["e","10110010000",69],["f","10110000100",70],["g","10011010000",71],["h","10011000010",72],["i","10000110100",73],["j","10000110010",74],["k","11000010010",75],["l","11001010000",76],["m","11110111010",77],["n","11000010100",78],["o","10001111010",79],["p","10100111100",80],["q","10010111100",81],["r","10010011110",82],["s","10111100100",83],["t","10011110100",84],["u","10011110010",85],["v","11110100100",86],["w","11110010100",87],["x","11110010010",88],["y","11011011110",89],["z","11011110110",90],["{","11110110110",91],["|","10101111000",92],["}","10100011110",93],["~","10001011110",94],[String.fromCharCode(127),"10111101000",95],[String.fromCharCode(128),"10111100010",96],[String.fromCharCode(129),"11110101000",97],[String.fromCharCode(130),"11110100010",98],[String.fromCharCode(131),"10111011110",99],[String.fromCharCode(132),"10111101110",100],[String.fromCharCode(133),"11101011110",101],[String.fromCharCode(134),"11110101110",102],[String.fromCharCode(135),"11010000100",103],[String.fromCharCode(136),"11010010000",104],[String.fromCharCode(137),"11010011100",105]],c=/^[!-~ ]+$/,d={code128B:function(t){return n(t,s,104,r)},code128C:function(t){return n(t=t.replace(/ /g,""),a,105,h)}}}function CODE128B(t){return new CODE128(t,"B")}function CODE128C(t){return new CODE128(t,"C")}function CODE39(t){function e(){return-1!=t.search(n)}var i=[[0,"0","101000111011101"],[1,"1","111010001010111"],[2,"2","101110001010111"],[3,"3","111011100010101"],[4,"4","101000111010111"],[5,"5","111010001110101"],[6,"6","101110001110101"],[7,"7","101000101110111"],[8,"8","111010001011101"],[9,"9","101110001011101"],[10,"A","111010100010111"],[11,"B","101110100010111"],[12,"C","111011101000101"],[13,"D","101011100010111"],[14,"E","111010111000101"],[15,"F","101110111000101"],[16,"G","101010001110111"],[17,"H","111010100011101"],[18,"I","101110100011101"],[19,"J","101011100011101"],[20,"K","111010101000111"],[21,"L","101110101000111"],[22,"M","111011101010001"],[23,"N","101011101000111"],[24,"O","111010111010001"],[25,"P","101110111010001"],[26,"Q","101010111000111"],[27,"R","111010101110001"],[28,"S","101110101110001"],[29,"T","101011101110001"],[30,"U","111000101010111"],[31,"V","100011101010111"],[32,"W","111000111010101"],[33,"X","100010111010111"],[34,"Y","111000101110101"],[35,"Z","100011101110101"],[36,"-","100010101110111"],[37,".","111000101011101"],[38," ","100011101011101"],[39,"$","100010001000101"],[40,"/","100010001010001"],[41,"+","100010100010001"],[42,"%","101000100010001"]];this.valid=e,this.encoded=function(){if(e()){var n,s=(s=t).toUpperCase();n="1000101110111010";for(var a=0;a<s.length;a++){var r;t:{for(r=0;r<i.length;r++)if(i[r][1]==s[a]){r=i[r][2];break t}r=""}n+=r+"0"}return n+"1000101110111010"}return""};var n=/^[0-9a-zA-Z\-\.\ \$\/\+\%]+$/}function EAN(t){function e(t,e){for(var i="",r=0;r<t.length;r++)"L"==e[r]?i+=n[t[r]]:"G"==e[r]?i+=s[t[r]]:"R"==e[r]&&(i+=a[t[r]]);return i}function i(t){if(-1==t.search(c))return!1;for(var e=t[12],i=0,n=0;12>n;n+=2)i+=parseInt(t[n]);for(n=1;12>n;n+=2)i+=3*parseInt(t[n]);return e==(10-i%10)%10}this.EANnumber=t+"",this.valid=function(){return i(this.EANnumber)},this.encoded=function(){if(i(this.EANnumber)){var t="",n=(a=this.EANnumber)[0],s=a.substr(1,7),a=a.substr(7,6);return(t=(t=(t=(t=t+h)+e(s,r[n]))+l)+e(a,"RRRRRR"))+o}return""};var n={0:"0001101",1:"0011001",2:"0010011",3:"0111101",4:"0100011",5:"0110001",6:"0101111",7:"0111011",8:"0110111",9:"0001011"},s={0:"0100111",1:"0110011",2:"0011011",3:"0100001",4:"0011101",5:"0111001",6:"0000101",7:"0010001",8:"0001001",9:"0010111"},a={0:"1110010",1:"1100110",2:"1101100",3:"1000010",4:"1011100",5:"1001110",6:"1010000",7:"1000100",8:"1001000",9:"1110100"},r={0:"LLLLLL",1:"LLGLGG",2:"LLGGLG",3:"LLGGGL",4:"LGLLGG",5:"LGGLLG",6:"LGGGLL",7:"LGLGLG",8:"LGLGGL",9:"LGGLGL"},h="101",o="101",l="01010",c=/^[0-9]{13}$/}function UPC(t){this.ean=new EAN("0"+t),this.valid=function(){return this.ean.valid()},this.encoded=function(){return this.ean.encoded()}}function ITF(t){this.ITFNumber=t+"",this.valid=function(){return-1!==this.ITFNumber.search(s)},this.encoded=function(){if(-1!==this.ITFNumber.search(s)){var t,a=this.ITFNumber;t=""+i;for(var r=0;r<a.length;r+=2){for(var h=a.substr(r,2),o="",l=e[h[0]],c=(h=e[h[1]],0);5>c;c++)o+="1"==l[c]?"111":"1",o+="1"==h[c]?"000":"0";t+=o}return t+n}return""};var e={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},i="1010",n="11101",s=/^([0-9][0-9])+$/}function ITF14(t){function e(t){for(var e=0,i=0;13>i;i++)e+=parseInt(t[i])*(3-i%2*2);return 10-e%10}function i(t){return-1!=t.search(r)&&(14!=t.length||t[13]==e(t))}this.ITF14number=t+"",this.valid=function(){return i(this.ITF14number)},this.encoded=function(){if(i(this.ITF14number)){var t=this.ITF14number,r="";13==t.length&&(t+=e(t));r=r+s;for(var h=0;14>h;h+=2){for(var o=t.substr(h,2),l="",c=n[o[0]],d=(o=n[o[1]],0);5>d;d++)l+="1"==c[d]?"111":"1",l+="1"==o[d]?"000":"0";r+=l}return r+a}return""};var n={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"},s="1010",a="11101",r=/^[0-9]{13,14}$/}function pharmacode(t){this.number=parseInt(t),this.encoded=function(){return this.valid(this.number)?function t(e,i){if(0==e.length)return"";var n,s,a=!1;for(n=e.length-1,s=0;"0"==e[n]||0>n;)s++,n--;return 0==s?(n=i?"001":"00111",a=i):(n="001".repeat(s-(i?1:0)),n+="00111"),t(e.substr(0,e.length-s-1),a)+n}(this.number.toString(2),!0).substr(2):""},this.valid=function(){return 3<=this.number&&131070>=this.number},String.prototype.repeat=function(t){return Array(t+1).join(this)}}if(com.logicpartners||(com.logicpartners={}),com.logicpartners.labelControl||(com.logicpartners.labelControl={}),com.logicpartners.labelControl.size=function(t){var e=this;this.designer=t,this.workspace=$("<div></div>").addClass("designerLabelControl").attr("title","Label Size"),this.widthContainer=$("<div>Width: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace),this.widthController=$('<input type="text" />').addClass("designerLabelControlElement").css({width:"50px"}).val(this.designer.labelWidth/this.designer.dpi).appendTo(this.widthContainer).on("blur",function(){e.updateDesigner()}).on("keypress",function(t){13==t.which&&(t.preventDefault(),e.updateDesigner())}),this.heightContainer=$("<div>Height: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace),this.heightController=$('<input type="text" />').addClass("designerLabelControlElement").css({width:"50px"}).val(this.designer.labelHeight/this.designer.dpi).appendTo(this.heightContainer).on("blur",function(){e.updateDesigner()}).on("keypress",function(t){13==t.which&&(t.preventDefault(),e.updateDesigner())}),this.dpiContainer=$("<div>DPI: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace),this.dpiController=$('<input type="text" />').addClass("designerLabelControlElement").css({width:"50px"}).val(this.designer.dpi).appendTo(this.dpiContainer).on("blur",function(){e.updateDesigner()}).on("keypress",function(t){13==t.which&&(t.preventDefault(),e.updateDesigner())}),this.updateDesigner=function(){var t=this.designer.dpi;isNaN(this.dpiController.val())||(t=this.dpiController.val()),this.designer.dpi=t;var e=this.designer.labelWidth/this.designer.dpi,i=this.designer.labelHeight/this.designer.dpi;isNaN(this.widthController.val())||(e=this.widthController.val()),isNaN(this.heightController.val())||(i=this.heightController.val()),this.designer.updateLabelSize(e,i),this.widthController.val(e),this.heightController.val(i)},this.update=function(){this.widthController.val(this.designer.labelWidth/this.designer.dpi),this.heightController.val(this.designer.labelHeight/this.designer.dpi)}},function(t){JsBarcode=function(t,e,i,n){i=function(t,e){var i,n={};for(i in t)n[i]=t[i];for(i in e)n[i]=e[i];return n}(JsBarcode.defaults,i);var s=t;if(window.jQuery&&s instanceof jQuery&&(s=t.get(0)),s instanceof HTMLCanvasElement||(s=document.createElement("canvas")),!s.getContext)return t;if(!(a=new window[i.format](e)).valid())return n&&n(!1),this;var a=a.encoded(),r=s.getContext("2d");s.width=a.length*i.width+2*i.quite,s.height=i.height+(i.displayValue?1.3*i.fontSize:0),r.clearRect(0,0,s.width,s.height),i.backgroundColor&&(r.fillStyle=i.backgroundColor,r.fillRect(0,0,s.width,s.height)),r.fillStyle=i.lineColor;for(var h=0;h<a.length;h++){var o=h*i.width+i.quite;"1"==a[h]&&r.fillRect(o,0,i.width,i.height)}i.displayValue&&function(t){var e,n;n=i.height,r.font=i.fontSize+"px "+i.font,r.textBaseline="bottom",r.textBaseline="top","left"==i.textAlign?(e=i.quite,r.textAlign="left"):"right"==i.textAlign?(e=s.width-i.quite,r.textAlign="right"):(e=s.width/2,r.textAlign="center"),r.fillText(t,e,n)}(e),uri=s.toDataURL("image/png"),window.jQuery&&t instanceof jQuery?t.get(0)instanceof HTMLCanvasElement||t.attr("src",uri):t instanceof HTMLCanvasElement||t.setAttribute("src",uri),n&&n(!0)},JsBarcode.defaults={width:2,height:100,quite:10,format:"CODE128",displayValue:!1,font:"monospace",textAlign:"center",fontSize:12,backgroundColor:"",lineColor:"#000"},window.jQuery&&(t.fn.JsBarcode=function(t,e,i){return JsBarcode(this,t,e,i),this})}(window.jQuery),!com)com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.designerTools||(com.logicpartners.designerTools={}),com.logicpartners.designerTools.barcode=function(){var t=this;this.counter=1,this.button=$("<div></div>").addClass("designerToolbarBarcode designerToolbarButton").attr("title","Barcode").append($("<div></div>")),this.object=function(e,i,n,s,a){n=100;var r=$("<canvas></canvas>").prop("width","100").prop("height","1");this.name="Barcode "+t.counter++,this.text="BARCODE",this.type="Barcode",this.x=e,this.y=i,this.height=s,a&&(this.name=a.name,this.text=a.text,this.type=a.type,this.x=a.x,this.y=a.y,this.height=a.height),this.readonly=["type"],this.getZPLData=function(){return""},this.getZPLMetaData=function(){return{name:this.name,text:this.text,type:this.type,x:this.x,y:this.y,height:this.height}},this.toZPL=function(t,e,i,n){return"^FO"+(this.x-t)+","+(this.y-e)+"^BY1^B3N,N,"+this.height+"N,N^FD"+this.text+"^FS"},this.draw=function(t){console.log(this.text),r.JsBarcode(this.text,{width:1,height:1});var e=r[0].width,i=r[0].height,s=r[0].getContext("2d");n=e;for(var a=s.getImageData(0,0,e,i),h=0;h<e;h++)255==a.data[4*h+3]&&t.fillRect(this.x+h,this.y,1,this.height)},this.setWidth=function(t){},this.getWidth=function(){return n},this.setHeight=function(t){this.height=t},this.getHeight=function(){return this.height},this.setHandle=function(t){this.handle=this.resizeZone(t)},this.getHandle=function(){return this.handle},this.drawActive=function(t){t.dashedStroke(parseInt(this.x+1),parseInt(this.y+1),parseInt(this.x)+parseInt(n)-1,parseInt(this.y)+parseInt(this.height)-1,[2,2])},this.hitTest=function(t){return t.x>=parseInt(this.x)&&t.x<=parseInt(this.x)+parseInt(n)&&t.y>=parseInt(this.y)&&t.y<=parseInt(this.y)+parseInt(this.height)}}},!com)com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.designerTools||(com.logicpartners.designerTools={}),com.logicpartners.designerTools.image=function(){var t=this;this.counter=1,this.data=null,this.width=null,this.height=null,this.button=$("<div></div>").addClass("designerToolbarImage designerToolbarButton").attr("title","Image").append($("<div></div>")),this.activate=function(e){t.data=null;var i=$("<div></div>").prop("title","Add Image"),n=$('<input type="file" />').css({width:400}).on("change",function(){"function"!=typeof window.FileReader&&alert("This page requires the file API that is included in modern browsers such as Google Chrome. Please try again in an up to date web browser.");var e=n[0];if(e.files[0]){var i=e.files[0],s=new FileReader,h=a,o=r;s.onloadend=function(){var e=o,i=h;h.css({width:"auto",height:"auto","max-width":200,"max-height":200}),e.css({width:"auto",height:"auto"}),h[0].onload=function(){var n=$("<canvas />");n[0].width=i[0].width,n[0].height=i[0].height,e[0].width=i[0].width,e[0].height=i[0].height;var s=n[0].getContext("2d"),a=e[0].getContext("2d");s.drawImage(i[0],0,0,n[0].width,n[0].height);for(var r=s.getImageData(0,0,n[0].width,n[0].height),h=a.getImageData(0,0,n[0].width,n[0].height),o=0;o<n[0].height;o++)for(x=0;x<n[0].width;x++){var l=4*(n[0].width*o+x);.299*r.data[l]+.587*r.data[l+1]+.114*r.data[l+2]>127?(h.data[l]=255,h.data[l+1]=255,h.data[l+2]=255,h.data[l+3]=255):(h.data[l]=0,h.data[l+1]=0,h.data[l+2]=0,h.data[l+3]=255)}t.width=e[0].width,t.height=e[0].height,t.data=h.data,a.putImageData(h,0,0)},h[0].src=s.result},s.readAsDataURL(i)}else alert("Please select a file to insert.")}).appendTo(i),s=$("<div></div>").css({"padding-top":"5px"}),a=$("<img />").prop("src","blank.gif").prop("border","none").css({float:"left",width:200,height:200,border:"1px solid #DDDDDD"}).appendTo(s),r=$("<canvas />").css({float:"right",width:200,height:200,border:"1px solid #DDDDDD"}).appendTo(s);s.appendTo(i);var h=e;i.dialog({modal:!0,width:470,height:400,buttons:{Insert:function(){h.labelDesigner.addObject(new t.object(0,0,t.width,t.height,t.data)),console.log("test"),$(this).dialog("close")},Cancel:function(){t.data=null,$(this).dialog("close")}}}).on("dialogclose",{toolbar:e},function(e){t.button.removeClass("designerToolbarButtonActive"),e.data.toolbar.setTool(null),console.log(t.data)})},this.object=function(e,i,n,s,a){this.uniqueID=t.counter,this.name="Image "+t.counter++,this.x=e,this.y=i,this.width=n,this.height=s,this.data=a,this.readonly=["width","height","data"],this.hidden=["data","uniqueID"],this.getZPLData=function(){var t=function(t){var e={0:"0000",1:"0001",2:"0010",3:"0011",4:"0100",5:"0101",6:"0110",7:"0111",8:"1000",9:"1001",A:"1010",B:"1011",C:"1100",D:"1101",E:"1110",F:"1111"};for(key in e)if(e[key]==t)return key;return""},e="",i=Math.ceil(this.width/8);console.log(i),console.log(this.width),console.log(i);for(var n=0;n<this.height;n++){for(var a="",r=0,h=0;h<this.width;h++){var o=4*(this.width*n+h);0==this.data[o+1]?a+="1":a+="0",a.length>7&&(e+=t(a.substring(0,4))+t(a.substring(4,8)),a="",r++)}if(a.length>0){for(;a.length<8;)a+="0";e+=t(a.substring(0,4))+t(a.substring(4,8)),a="",r++}for(;r<i;)e+=t("0000")+t("0000"),r++;e+="\n"}return"~DGIMG"+this.uniqueID+","+i*s+","+i+","+e},this.toZPL=function(t,e,i,n){return"^FO"+(this.x-t)+","+(this.y-e)+"^XGR:IMG"+this.uniqueID+",1,1^FS"},this.draw=function(t,e,i){for(var n=t.getImageData(0,0,e,i),s=0;s<this.height;s++)for(var a=0;a<this.width;a++)if(this.x+a>=0&&this.x+a<e&&this.y+s>=0&&this.y+s<i){var r=4*(e*(this.y+s)+this.x+a),h=4*(this.width*s+a);n.data[r]=this.data[h],n.data[r+1]=this.data[h+1],n.data[r+2]=this.data[h+2],n.data[r+3]=this.data[h+3]}t.putImageData(n,0,0)},this.setWidth=function(t){},this.getWidth=function(){return this.width},this.setHeight=function(t){},this.getHeight=function(){return this.height},this.setHandle=function(t){this.handle=this.resizeZone(t)},this.getHandle=function(){return this.handle},this.drawActive=function(t){t.dashedStroke(parseInt(this.x+1),parseInt(this.y+1),parseInt(this.x)+parseInt(this.width)-1,parseInt(this.y)+parseInt(this.height)-1,[2,2])},this.hitTest=function(t){return t.x>=parseInt(this.x)&&t.x<=parseInt(this.x)+parseInt(this.width)&&t.y>=parseInt(this.y)&&t.y<=parseInt(this.y)+parseInt(this.height)}}},!com)com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.designerTools||(com.logicpartners.designerTools={}),com.logicpartners.designerTools.rectangle=function(){var t=this;this.counter=1,this.button=$("<div></div>").addClass("designerToolbarRectangle designerToolbarButton").attr("title","Rectangle").append($("<div></div>")),this.object=function(e,i,n,s,a){this.name="Rectangle "+t.counter++,this.type="Rectangle",this.x=e,this.y=i,this.width=n,this.height=s,a&&(this.name=a.name,this.type=a.type,this.x=a.x,this.y=a.y,this.width=a.width,this.height=a.height),this.readonly=["type"],this.getZPLData=function(){return""},this.getZPLMetaData=function(){return{name:this.name,type:this.type,x:this.x,y:this.y,width:this.width,height:this.height}},this.toZPL=function(t,e,i,n){return this.width>this.height?"^FO"+(this.x-t)+","+(this.y-e)+"^GB"+this.width+",0,"+this.height+"^FS":"^FO"+(this.x-t)+","+(this.y-e)+"^GB0,"+this.height+","+this.width+"^FS"},this.draw=function(t){t.fillRect(this.x,this.y,this.width,this.height)},this.setWidth=function(t){this.width=parseInt(t)},this.getWidth=function(){return this.width},this.setHeight=function(t){this.height=t},this.getHeight=function(){return this.height},this.setHandle=function(t){this.handle=this.resizeZone(t)},this.getHandle=function(){return this.handle},this.drawActive=function(t){t.dashedStroke(parseInt(this.x+1),parseInt(this.y+1),parseInt(this.x)+parseInt(this.width)-1,parseInt(this.y)+parseInt(this.height)-1,[2,2])},this.hitTest=function(t){return t.x>=parseInt(this.x)&&t.x<=parseInt(this.x)+parseInt(this.width)&&t.y>=parseInt(this.y)&&t.y<=parseInt(this.y)+parseInt(this.height)}}},!com)com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.designerTools||(com.logicpartners.designerTools={}),com.logicpartners.designerTools.text=function(){var t=this;this.counter=1,this.button=$("<div></div>").addClass("designerToolbarText designerToolbarButton").attr("title","Text").append($("<div></div>")),this.object=function(e,i,n,s,a){this.name="Textbox "+t.counter++,this.type="Textbox",this.text=this.name,this.x=e,this.y=i,this.fontSize=36,this.fontType="Arial",this.width=100,this.height=0,a&&(this.name=a.name,this.type=a.type,this.text=a.text,this.x=a.x,this.y=a.y,this.fontSize=a.fontSize,this.fontType=a.fontType,this.width=a.width,this.height=a.height),this.readonly=["width","height","type"],this.getFontHeight=function(){var t=$("<div></div>").css({"font-size":this.fontSize+"px","font-family":this.fontType,opacity:0}).text("M").appendTo($("body")),e=t.outerHeight();return t.remove(),e},this.getZPLData=function(){return""},this.getZPLMetaData=function(){return{name:this.name,text:this.text,type:this.type,x:this.x,y:this.y,fontSize:this.fontSize,fontType:this.fontType,width:this.width,height:this.height}},this.toZPL=function(t,e,i,n){return"^FO"+(this.x-t)+","+(this.y-e)+"^A0,"+this.fontSize+","+this.fontSize+"^FD"+this.text+"^FS"},this.draw=function(t){t.font=this.fontSize+"px "+this.fontType;var e=t.fillStyle;t.fillStyle="white",this.height=this.getFontHeight();var i=t.measureText(this.text);this.width=i.width,t.globalCompositeOperation="difference",t.fillText(this.text,this.x,this.y+.75*this.height),t.globalCompositeOperation="source-over",t.fillStyle=e},this.setWidth=function(t){},this.getWidth=function(){return this.width},this.setHeight=function(t){},this.getHeight=function(){return.75*this.height},this.setHandle=function(t){this.handle=this.resizeZone(t)},this.getHandle=function(){return this.handle},this.drawActive=function(t){t.dashedStroke(parseInt(this.x+1),parseInt(this.y+1),parseInt(this.x)+parseInt(this.width)-1,parseInt(this.y)+parseInt(.9*this.height)-1,[2,2])},this.hitTest=function(t){return t.x>=parseInt(this.x)&&t.x<=parseInt(this.x)+parseInt(this.width)&&t.y>=parseInt(this.y)&&t.y<=parseInt(this.y)+.75*parseInt(this.height)}}},!com)com={};com.logicpartners||(com.logicpartners={}),HTMLCanvasElement.prototype.RelativeMouse=function(t){var e=0,i=0,n=this;do{e+=n.offsetLeft-n.scrollLeft,i+=n.offsetTop-n.scrollTop}while(n=n.offsetParent);return{x:t.clientX-e,y:t.clientY-i}};var CP=window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype;if(CP&&CP.lineTo&&(CP.dashedLine=function(t,e,i,n,s){s||(s=[10,5]),0==g&&(g=.001);var a=s.length;this.moveTo(t,e);for(var r=i-t,h=n-e,o=r?h/r:1e15,l=Math.sqrt(r*r+h*h),c=0,d=!0;l>=.1;){var g=s[c++%a];g>l&&(g=l);var u=Math.sqrt(g*g/(1+o*o));r<0&&(u=-u),t+=u,e+=o*u,this[d?"lineTo":"moveTo"](t,e),l-=g,d=!d}this.moveTo(0,0)},CP.dashedStroke=function(t,e,i,n,s){this.beginPath(),this.dashedLine(t,e,i,e,s),this.dashedLine(i,e,i,n,s),this.dashedLine(i,n,t,n,s),this.dashedLine(t,e,t,n,s),this.stroke()}),com.logicpartners.labelDesigner=function(t,e,i){this.canvas=document.getElementById(t),this.canvasElement=$(this.canvas),this.labelWidth=e*this.dpi,this.labelHeight=i*this.dpi,this.propertyInspector=new com.logicpartners.propertyInspector(this,this.canvas),this.toolbar=new com.logicpartners.toolsWindow(this,this.canvas),this.labelInspector=new com.logicpartners.labelInspector(this,this.canvas),this.dpi=200,this.batchNumber=!1,this.labelNumber=!1,this.drawingContext=this.canvas.getContext("2d"),this.elements=[],this.currentLayer=0,this.activeElement=null,this.activeTool=null,this.labelX=this.canvas.width/2-this.labelWidth/2,this.labelY=5,this.newObject=null,this.dragStartPosition={x:0,y:0},this.dragStartTime=0,this.dragLastPosition={x:0,y:0},this.dragElementOffset={x:0,y:0},this.dragAction=0,this.dragging=!1;var n=this;this.updateLabelSize=function(t,e){var i=t*this.dpi+10-parseInt(this.canvasElement.prop("width"));this.labelWidth=t*this.dpi,this.labelHeight=e*this.dpi,this.canvasElement.prop("width",this.labelWidth+10).prop("height",this.labelHeight+10),this.labelX=this.canvas.width/2-this.labelWidth/2,this.labelY=5,console.log(i),this.propertyInspector.updatePosition(i),this.labelInspector.updatePosition(i),this.updateCanvas()};this.canvasElement.context;this.canvasElement.on("click",function(){n.setActiveElement()}).on("importElement",function(t){n.dragStartPosition=n.canvas.RelativeMouse(event),n.dragLastPosition=n.dragStartPosition;var e=t.originalEvent.detail,i=e.element;n.setNewObject(e.control),n.newObject&&(n.elements[n.currentLayer++]=new n.newObject(null,null,null,null,i),n.dragAction=8,n.activeElement=n.elements[n.currentLayer-1],n.newObject=null,n.newObjectController=null)}).on("mousedown",function(t){n.dragStartPosition=n.canvas.RelativeMouse(event),n.dragLastPosition=n.dragStartPosition,n.newObject?(n.elements[n.currentLayer++]=new n.newObject(n.dragStartPosition.x,n.dragStartPosition.y,1,1),n.dragAction=8,n.activeElement=n.elements[n.currentLayer-1],n.newObjectController.button.removeClass("designerToolbarButtonActive"),n.newObject=null,n.newObjectController=null):(n.dragAction=0,n.setActiveElement(),n.activeElement&&(n.dragElementOffset={x:n.activeElement.x-n.dragStartPosition.x,y:n.activeElement.y-n.dragStartPosition.y},n.setActiveHandle(n.dragStartPosition))),n.dragging=!0}).on("mouseup",function(){n.dragging=!1}).on("mouseout",function(){n.dragging=!1}).on("mousemove",function(){if(n.dragging&&n.activeElement){var t=n.canvas.RelativeMouse(event);switch(n.dragAction){case 0:n.move(t.x+n.dragElementOffset.x,t.y+n.dragElementOffset.y);break;default:n.resize(t.x-n.dragLastPosition.x,t.y-n.dragLastPosition.y,n.dragAction)}n.updateCanvas(),n.dragLastPosition=t}else if(null!=n.newObject)n.canvasElement.css({cursor:"crosshair"});else if(n.activeElement){t=n.canvas.RelativeMouse(event);var e="default";switch(n.getHandle(t)){case 0:e="default";break;case 1:e="nw-resize";break;case 2:e="n-resize";break;case 3:e="ne-resize";break;case 4:e="w-resize";break;case 5:e="e-resize";break;case 6:e="sw-resize";break;case 7:e="s-resize";break;case 8:e="se-resize"}n.canvasElement.css({cursor:e})}}).on("keydown",function(t){var e=!1;switch((t=t||window.event).keyCode){case 37:n.activeElement&&(n.activeElement.x-=1),e=!0;break;case 38:n.activeElement&&(n.activeElement.y-=1),e=!0;break;case 39:n.activeElement&&(n.activeElement.x+=1),e=!0;break;case 40:n.activeElement&&(n.activeElement.y+=1),e=!0;break;case 46:n.activeElement&&(n.deleteActiveElement(),e=!0);break;case 80:t.ctrlKey&&(n.generateZPL(),e=!0)}e&&(n.updateCanvas(),t.preventDefault(),t.stopPropagation())}),this.addObject=function(t){this.elements[this.currentLayer++]=t,this.activeElement=this.elements[this.currentLayer-1],this.updateCanvas()},this.deleteActiveElement=function(){if(this.activeElement)for(var t=0;t<this.currentLayer;t++)this.elements[t]&&this.elements[t]==this.activeElement&&(this.elements[t]=null,this.activeElement=null)},this.setActiveElement=function(){var t=this.canvas.RelativeMouse(event);if(!this.activeElement||0==this.getHandle(t)){this.activeElement=null;for(var e=this.currentLayer-1;e>=0;e--)if(this.elements[e]&&this.elements[e].hitTest(t)){this.activeElement=this.elements[e];break}}this.updateCanvas()},this.setActiveHandle=function(t){this.dragAction=this.getHandle(t)},this.getHandle=function(t){var e=0,i=t.x>this.activeElement.x-5&&t.x<this.activeElement.x+5,n=t.x>this.activeElement.x+this.activeElement.getWidth()-5&&t.x<this.activeElement.x+this.activeElement.getWidth()+5,s=t.y>this.activeElement.y-5&&t.y<this.activeElement.y+5,a=t.y>this.activeElement.y+this.activeElement.getHeight()-5&&t.y<this.activeElement.y+this.activeElement.getHeight()+5,r=t.y>this.activeElement.y&&t.y<this.activeElement.y+this.activeElement.getHeight(),h=t.x>this.activeElement.x&&t.x<this.activeElement.x+this.activeElement.getWidth();return i&&s?e=1:n&&s?e=3:i&&a?e=6:n&&a?e=8:s&&h?e=2:i&&r?e=4:n&&r?e=5:a&&h&&(e=7),e},this.move=function(t,e){this.activeElement.x=t,this.activeElement.y=e},this.resize=function(t,e){switch(this.dragAction){case 1:this.activeElement.x+=t,this.activeElement.y+=e,this.activeElement.setWidth(this.activeElement.getWidth()-t),this.activeElement.setHeight(this.activeElement.getHeight()-e);break;case 2:this.activeElement.y+=e,this.activeElement.setHeight(this.activeElement.getHeight()-e);break;case 3:this.activeElement.setWidth(this.activeElement.getWidth()+t),this.activeElement.y+=e,this.activeElement.setHeight(this.activeElement.getHeight()-e);break;case 4:this.activeElement.x+=t,this.activeElement.setWidth(this.activeElement.getWidth()-t);break;case 5:this.activeElement.setWidth(this.activeElement.getWidth()+t);break;case 6:this.activeElement.x+=t,this.activeElement.setWidth(this.activeElement.getWidth()-t),this.activeElement.setHeight(this.activeElement.getHeight()+e);break;case 7:this.activeElement.setHeight(this.activeElement.getHeight()+e);break;case 8:this.activeElement.setWidth(this.activeElement.getWidth()+t),this.activeElement.setHeight(this.activeElement.getHeight()+e)}0==this.activeElement.getWidth()&&(this.activeElement.setWidth(-1),this.activeElement.x+=1),0==this.activeElement.getHeight()&&(this.activeElement.setHeight(-1),this.activeElement.y+=1),this.activeElement.width<0&&(this.activeElement.x=this.activeElement.x+this.activeElement.getWidth(),this.activeElement.setWidth(parseInt(-1*this.activeElement.getWidth())),this.swapActionHorizontal()),this.activeElement.height<0&&(this.activeElement.y=this.activeElement.y+this.activeElement.getHeight(),this.activeElement.setHeight(-1*this.activeElement.getHeight()),this.swapActionVertical())},this.swapActionVertical=function(){switch(this.dragAction){case 1:this.dragAction=6;break;case 2:this.dragAction=7;break;case 3:this.dragAction=8;break;case 6:this.dragAction=1;break;case 7:this.dragAction=2;break;case 8:this.dragAction=3}},this.swapActionHorizontal=function(){switch(this.dragAction){case 1:this.dragAction=3;break;case 3:this.dragAction=1;break;case 4:this.dragAction=5;break;case 5:this.dragAction=4;break;case 6:this.dragAction=8;break;case 8:this.dragAction=6}},this.update=function(){this.propertyInspector.update(this.activeElement)},this.updateCanvas=function(){this.update(),this.drawingContext.fillStyle="#FFFFFF",this.drawingContext.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawingContext.strokeStyle="#FF0000",this.drawingContext.lineWidth=2,this.drawingContext.strokeRect(this.labelX,this.labelY,this.labelWidth,this.labelHeight),this.drawingContext.strokeStyle="#000000",this.drawingContext.fillStyle="#000000";for(var t=0;t<this.currentLayer;t++)this.elements[t]&&this.elements[t].draw(this.drawingContext,this.canvas.width,this.canvas.height);this.drawingContext.strokeStyle="#FF0000",this.drawingContext.lineCap="butt",this.drawingContext.lineWidth=2,this.activeElement&&this.activeElement.drawActive(this.drawingContext)},this.exportMetaData=function(){for(var t=[],e=0;e<this.currentLayer;e++)if(this.elements[e]){var i=this.elements[e].getZPLMetaData();t.push(i)}var n=JSON.stringify(t);return console.log(n),{json:n}},this.generateZPL=function(){for(var t="^XA\r\n^LS0\r\n^LT0\r\n^LH{{leftOffset}},{{topOffset}}\r\n^PR12\r\n^MD30\r\n",e="",i=0;i<this.currentLayer;i++)this.elements[i]&&(e+=this.elements[i].getZPLData(),t+=this.elements[i].toZPL(this.labelX,this.labelY,this.labelHeight,this.labelWidth)+"\n");return t=t.substring(0,t.length-1),t+="\r\n",t+="{{ batchNumber && labelNr ? '^FO0,95 ^A0,18,18 ^FDBatch #: #batchNr -  #labelNr ^FS' : ''}}\r\n{{ batchNumber && !labelNr ? '^FO0,95 ^A0,18,18 ^FDBatch #: #batchNr ^FS' : ''}}\r\n{{ labelNr && !batchNumber ? '^FO0,95 ^A0,18,18 ^FDLabel #: #labelNr ^FS' : ''}}\r\n",t+="^XZ\r\n",console.log(e+t),{data:e,zpl:t}},this.setNewObject=function(t){t?(this.newObject=t.object,this.newObjectController=t):(this.newObject=null,this.newObjectController=null)},this.addRectangle=function(t,e,i,n){this.elements[this.currentLayer++]=new this.Rectangle(t,e,i,n),this.updateCanvas()},this.updateLabelSize(e,i),this.updateCanvas()},!com)com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.labelInspector=function(t,e){this.canvas=e,this.canvasElement=$(e),this.labelDesigner=t;this.boundingBox=null,this.updatePosition=function(t){this.inspectorWindow.css("width",parseInt(this.inspectorWindow.css("width"))+t),this.boundingBox=this.inspectorWindow[0].getBoundingClientRect()},this.inspectorWindow=$("<div></div>").addClass("designerUtilityToolbar designerUtilityLabelInspector").css({left:0,top:this.canvas.getBoundingClientRect().top-50,width:this.labelDesigner.propertyInspector.boundingBox.right-this.labelDesigner.toolbar.boundingBox.left}).insertAfter(this.canvasElement),this.toolsViewContainer=$("<div></div>").addClass("designerLabelContent").appendTo(this.inspectorWindow),this.buttonView=$("<div></div>").appendTo(this.toolsViewContainer),this.update=function(t){},this.addTool=function(t){console.log(t.workspace.html()),this.buttonView.append(t.workspace)}},!com)com={};if(com.logicpartners||(com.logicpartners={}),com.logicpartners.propertyInspector=function(t,e){this.canvas=e,this.canvasElement=$(e),this.labelDesigner=t,this.activeElement=null,this.propertyNodes={},this.boundingBox=null;var i=this;this.propertyInspector=$("<div></div>").addClass("designerUtilityWindow").css({left:this.canvas.getBoundingClientRect().right+5-200,top:this.canvas.getBoundingClientRect().top}).insertAfter(this.canvasElement),this.updatePosition=function(t){this.propertyInspector.css("left",parseInt(this.propertyInspector.css("left"))+t),this.boundingBox=this.propertyInspector[0].getBoundingClientRect()},this.propertyViewContainer=$("<div></div>").addClass("designerPropertyContainer").resizable({resize:function(t,e){e.size.width=e.originalSize.width}}).appendTo(this.propertyInspector),this.titleBar=$("<div>Property Inspector</div>").addClass("designerPropertyTitle").prependTo(this.propertyInspector).on("dblclick",function(){i.propertyViewContainer.toggle()}),this.propertyView=$("<div></div>").addClass("designerPropertyContent").appendTo(this.propertyViewContainer),this.update=function(t){var e=this,i={},n=[];if(this.activeElement==t)for(var s in t)(!t.readonly||"readonly"!=s&&-1==$.inArray(s,t.readonly))&&"[object Function]"!=i.toString.call(t[s])&&this.propertyNodes[s].val(t[s]);else{for(var s in this.activeElement=t,this.propertyView.html(""),t)if(!n[s]&&(n[s]=!0,"readonly"!=s&&"[object Function]"!=i.toString.call(t[s]))){var a=$("<div>"+s+"</div>").css({width:"65px",border:"1px solid #AAAAAA",float:"left","font-size":"12px","line-height":"20px","border-right":"none","text-align":"right","padding-right":"5px","margin-left":"5px",padding:"3px"}),r=$('<input type="text" name="'+s+'" value="'+t[s]+'">').css({width:"120px",float:"left",height:"22px","line-height":"20px","padding-left":"5px"});t.readonly&&-1!=$.inArray(s,t.readonly)?r.prop("readonly",!0).css({"background-color":"#DDDDDD",border:"1px solid #AAAAAA"}):r.on("keyup",{objectProperty:s},function(t){var i=e.activeElement[t.data.objectProperty];e.activeElement[t.data.objectProperty]=i===parseInt(i,10)?parseInt($(this).val()):$(this).val(),e.labelDesigner.updateCanvas()}),this.propertyNodes[s]=r;var h=$("<div></div>").css({clear:"both","padding-top":"2px"}).append(a).append(r);this.propertyView.append(h)}if(null!==t){var o=this.labelDesigner.elements.indexOf(t),l=this.labelDesigner.elements,c=$("<button>Delete element</button>").css({"z-index":"1",position:"relative","font-size":"inherit",color:"white",padding:"0.5em 1em",outline:"none",border:"none","background-color":"#555555",overflow:"hidden",transition:"color 0.4s ease-in-out",cursor:"pointer","font-family":"sans-serif",width:"100%"}).on("click",null,function(){l.splice(o,1),e.labelDesigner.updateCanvas(),e.propertyView.html("")}),d=$("<div></div>").css({clear:"both","padding-top":"2px"}).append(c);this.propertyView.append(d)}}},this.updatePosition(0)},!com)com={};com.logicpartners||(com.logicpartners={}),com.logicpartners.toolsWindow=function(t,e){this.canvas=e,this.canvasElement=$(e),this.labelDesigner=t,this.boundingBox=null;var i=this;this.toolsWindow=$("<div></div>").addClass("designerUtilityToolbar").css({left:0,top:this.canvas.getBoundingClientRect().top}).insertAfter(this.canvasElement),this.toolsViewContainer=$("<div></div>").addClass("designerToolbarContent").resizable({resize:function(t,e){e.size.width=e.originalSize.width}}).appendTo(this.toolsWindow),this.titleBar=$("<div>Tools</div>").addClass("designerPropertyTitle").prependTo(this.toolsWindow).on("dblclick",function(){i.toolsViewContainer.toggle()}),this.buttonView=$("<div></div>").appendTo(this.toolsViewContainer),this.setTool=function(t){i.labelDesigner.newObjectController==t?(i.labelDesigner.setNewObject(null),t.button.removeClass("designerToolbarButtonActive")):(i.labelDesigner.newObjectController&&i.labelDesigner.newObjectController.button.removeClass("designerToolbarButtonActive"),i.labelDesigner.setNewObject(t),t&&(t.button.addClass("designerToolbarButtonActive"),t.activate&&t.activate(this)))},this.addTool=function(t){var e=this;t.button.on("click",{tool:t},function(t){e.setTool(t.data.tool)}),this.buttonView.append(t.button)},this.updatePosition=function(t){this.boundingBox=this.toolsWindow[0].getBoundingClientRect()},this.update=function(t){},this.updatePosition(0)};