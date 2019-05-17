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
        this.text = this.name;
        this.x = x;
        this.y = y;
        this.fontSize = 36;
        this.fontType = "Arial";
        this.width = 100;
        this.height = 0;
        this.type = 'Textbox';

        if (fromObject) {
            this.name = fromObject.name;
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
