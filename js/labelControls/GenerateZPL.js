if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};
if (!com.logicpartners.labelControl)
    com.logicpartners.labelControl = {};

com.logicpartners.labelControl.generatezpl = function (designer) {
    var self = this;
    this.designer = designer;
    this.workspace = $("<div></div>").addClass("designerLabelControlCustom").attr("title", "Label Size");

    this.buttonContainer = $("<div></div>").appendTo(this.workspace);

    this.button = $("<button class='label-designer-btn__warning'>View ZPL</button>").appendTo(this.buttonContainer)
        .on("click", function () {
            var zpl = self.designer.generateZPL();
            console.log(zpl.data + zpl.zpl);
        });

    this.button = $("<button class='label-designer-btn__warning'>Export</button>").appendTo(this.buttonContainer)
        .on("click", function () {
            var zpl = self.designer.exportMetaData();
            console.log(zpl.json);
        });

    this.button = $("<button class='label-designer-btn__warning'>Import</button>").appendTo(this.buttonContainer)
        .on("click", function () {

            var jsonInput = prompt("Your meta data input");
            self.designer.importFromMetaData(jsonInput);
        });

    this.update = function () {
        this.widthController.val(this.designer.labelWidth / this.designer.dpi);
        this.heightController.val(this.designer.labelHeight / this.designer.dpi);
    }
};
