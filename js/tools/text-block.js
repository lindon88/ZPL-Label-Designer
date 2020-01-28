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

            var textBlockWidth = labelWidth - this.x + 20;
            // return "^FB" + (textBlockWidth) + ",100,5,J,0," + "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^A0," + (this.fontSize) + "," + (this.fontSize) + '^FD' + this.variableName + this.variable + "^FS";
            return "^FB" + (textBlockWidth) + ",100,5,L,0," + "\n^FO" + (this.x - labelx) + "," + (this.y - labely) + "\n^A0," + (this.fontSize) + "," + (this.fontSize) + '\n^FD' + textWithCarriageReturnForZpl+ "\n^FS";
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
