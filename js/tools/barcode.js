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
