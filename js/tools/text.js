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
