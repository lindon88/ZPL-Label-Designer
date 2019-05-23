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
        .attr("title", "Text")
        .append($("<svg class='icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"256\" height=\"256\" viewBox=\"0 0 67.733332 67.733334\"><path d=\"M33.86666624.79374999A33.07291625 33.07291625 0 0 0 .79374999 33.86666624a33.07291625 33.07291625 0 0 0 33.07291625 33.07291625 33.07291625 33.07291625 0 0 0 33.07291625-33.07291625A33.07291625 33.07291625 0 0 0 33.86666624.79374999zM11.37708319 20.31400534h10.02419428c3.5958007 0 6.19756579.54304088 7.80469256 1.6298746 1.61868641 1.0868337 2.42775843 2.82700646 2.42775843 5.22035345 0 1.26026331-.2945183 2.33536328-.88418458 3.22564385-.58966628.878713-1.4452494 1.53228938-2.56676786 1.96008623 1.43369504.41623455 2.54329138 1.18479886 3.32951133 2.30631997.78621995 1.12151582 1.17925584 2.49766134 1.17925584 4.1279127 0 2.4974047-.84408432 4.35909238-2.53214449 5.58467147-1.68806016 1.22557909-4.2548111 1.83813183-7.70030465 1.83812918H11.3770832V20.31400534zm32.01664933 3.98063557h2.548165l-1.63607483 6.52828251h4.5935185l1.65209536-6.52828251h2.51715849l-1.6205729 6.52828251h4.90822715v2.42259112h-5.52162656l-1.28984373 5.2544609h5.00227858v2.40657059h-5.61619393l-1.63607748 6.51278216h-2.51664255l1.62005696-6.51278216h-4.60902044l-1.6205729 6.51278216h-2.53266307l1.63607748-6.51278216h-4.95525419v-2.4065706h5.53713114l1.3213662-5.2544609h-5.0653235v-2.4225911h5.67923884l1.60455238-6.52828252zm-25.33953763.56327304v5.48028488h3.69383147c1.05214736 0 1.85023546-.23153158 2.3936523-.69401266.54341686-.46248373.8149373-1.1445478.8149373-2.04638802 0-.89027792-.27152044-1.5663341-.8149373-2.0288165-.54341684-.47404443-1.34150494-.7110677-2.3936523-.7110677h-3.69383147zm25.66975085 8.38760059l-1.3213662 5.2544609H47.0116l1.29035967-5.2544609h-4.57801392zM18.0541949 34.88210796v6.78098235h3.9196573c1.3411991 0 2.34678747-.2830195 3.01738688-.8495612.6821617-.5665417 1.02319348-1.42212481 1.02319348-2.56676786 0-1.12152111-.33502388-1.96011269-1.00562356-2.5150921-.67059941-.5665417-1.68219567-.8495612-3.0349568-.8495612h-3.9196573z\"/></svg>"));
    this.object = function (x, y, width, height, fromObject) {
        this.name = 'Batch #: ';
        this.placeholderKey = '#batchNr';
        this.placeholderPreviewText = 'Generated text here';
        this.x = x;
        this.y = y;
        this.fontSize = 20;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'BatchNumber';

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

        this.readonly = ["width", "height", "type", 'fontType', 'name', 'placeholderKey'];


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

            var displayText = this.name  + this.placeholderPreviewText;
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
