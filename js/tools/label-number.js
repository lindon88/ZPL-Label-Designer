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
        .attr("title", "Text")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zM11.37708319 19.70680724h6.9763184v21.78006528h12.24886463v5.2725478H11.37708319V19.70680725zm31.43632283 4.15891922h2.66236976l-1.70945437 6.8207725h4.7991897l1.72599084-6.8207725h2.62981542l-1.69292056 6.8207725h5.12785248v2.53111262H50.5870918l-1.34772134 5.48958552h5.2265553v2.51457615h-5.86734173l-1.70945702 6.80475252h-2.62981278l1.69291792-6.80475252h-4.81520758L39.444104 48.02652577h-2.64635188l1.70945702-6.80475252h-5.17746185V38.7071971h5.785178l1.38079426-5.48958552h-5.29218518v-2.53111261h5.9334902l1.67638145-6.82077251zm.34519923 9.35188512l-1.38079426 5.48958552h4.81572617l1.34772134-5.48958552h-4.78265325z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        this.name = 'Label #: ';
        this.placeholderKey = '#labelNr';
        this.placeholderPreviewText = 'Generated text here';
        this.x = x;
        this.y = y;
        this.fontSize = 20;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'LabelNumber';

        if (fromObject) {
            this.name = fromObject.name;
            this.placeholderKey = fromObject.placeholderKey;
            this.placeholderPreviewText = fromObject.placeholderPreviewText;
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
                placeholderPreviewText: this.placeholderPreviewText,
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
            return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + '^FD' + this.name + this.placeholderKey + "^FS";
        };

        this.draw = function (context) {
            context.font = this.fontSize + "px " + this.fontType;
            var oColor = context.fillStyle;
            context.fillStyle = "white";
            this.height = this.getFontHeight();

            var displayText = this.name + this.placeholderPreviewText;
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
