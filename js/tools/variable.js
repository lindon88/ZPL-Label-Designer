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
        .attr("title", "Text")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zm-11.5414143 20.08404512h2.56470146v1.26142167c1.4153491.24802729 2.5932352.87871457 3.53363314 1.89239099.94989913 1.0028928 1.45847856 2.31345737 1.52497365 3.93102698h-2.56470147c-.08549217-.72251622-.35640169-1.3427313-.8123555-1.86035233-.45595036-.52840598-1.0166207-.90053503-1.68154982-1.11621092v7.23056578c.59843616.1509739 1.14025864.32369125 1.62470675.51779752.48444943.1833245.97811694.4476353 1.48156346.79271811.51294505.33429575.93567513.72213258 1.26813996 1.16426984.34196337.4313502.62229735.97619607.84077438 1.63400844.21847704.65780972.32762825 1.39108125.32762825 2.19986487 0 1.80089437-.5174853 3.29464718-1.5528766 4.48086421-1.03538866 1.18621703-2.36561045 1.91948591-3.9899362 2.19986487v1.64951302h-2.56470147v-1.6334925c-1.6813207-.24802835-3.04426722-.98129724-4.089156-2.19986487-1.03538971-1.2293547-1.55784707-2.83616132-1.56734614-4.82037754h2.5647012c.15198381 1.09994434.4988044 2.01116668 1.04024667 2.7336829.54144227.72251358 1.22514253 1.2076959 2.05155427 1.45572425v-8.00674665c-3.48612826-.93818867-5.22913815-2.97627142-5.22913815-6.11435406 0-1.73619052.49418557-3.1331143 1.4820802-4.189926.98789462-1.0568117 2.23671894-1.70895935 3.74705795-1.95698664v-1.24540194zm9.63196932.80873626h2.99258299l6.52569912 18.94147985 6.76806275-18.94147985h2.82101657l-8.178829 23.45438246h-2.83548663l-8.0930458-23.45438246zm-9.63196933 3.25096421c-.77891692.20489201-1.41995047.57178548-1.92339672 1.1001912-.49394744.52840572-.74103996 1.20252965-.74103996 2.02209768 0 1.76854377.88812607 2.95454913 2.66443668 3.55843941v-6.68072829zm2.56470147 10.02936106v7.42435376c.86440776-.23724393 1.57689654-.6737535 2.13733695-1.30999704.5604404-.64702795.84077438-1.43996038.84077438-2.37814906.00000265-1.05681196-.27090952-1.8706888-.81235284-2.44222849-.53194214-.5823241-1.2538559-1.01360021-2.1657585-1.29397917z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        // this.variableName = 'Stock Id: ';
        this.variableName = '';
        this.variable = '#variable';
        this.previewText = 'Your text here';
        this.variableType = 'Text'; // Default
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
            this.previewText = fromObject.previewText;
            this.variableType = fromObject.variableType;
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
                previewText: this.previewText,
                variableType: this.variableType,
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
            // TODO: Return based on selected type (TextBlock or TextInputField)
            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + '^FD' + this.variableName + this.variable + "^FS";
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();

            var displayText = this.variableName + this.previewText;
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
