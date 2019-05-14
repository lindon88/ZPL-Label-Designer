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
    /*
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
*/
    this.update = function () {
        this.widthController.val(this.designer.labelWidth / this.designer.dpi);
        this.heightController.val(this.designer.labelHeight / this.designer.dpi);
    }
}
