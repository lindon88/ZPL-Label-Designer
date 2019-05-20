if (!com)
    var com = {};
if (!com.logicpartners)
    com.logicpartners = {};

com.logicpartners.propertyInspector = function (designer, canvas) {
    this.canvas = canvas;
    this.canvasElement = $(canvas);
    this.labelDesigner = designer;
    this.activeElement = null;
    this.propertyNodes = {};
    this.boundingBox = null;
    var self = this;

    // Create the property window.
    this.propertyInspector = $('<div></div>')
        .addClass("designerUtilityWindow")
        .css({
            // "left": this.canvas.getBoundingClientRect().right + 5 - 200,
            // "top": this.canvas.getBoundingClientRect().top
        })
        //.draggable({handle: "div.designerPropertyTitle"})
        .insertAfter(this.canvasElement);

    this.updatePosition = function (xchange) {
        // this.propertyInspector.css("left", parseInt(this.propertyInspector.css("left")) + xchange);
        this.boundingBox = this.propertyInspector[0].getBoundingClientRect();
    };


    this.propertyViewContainer = $('<div></div>')
        .addClass("designerPropertyContainer")
        // .resizable({
        //     resize: function (event, ui) {
        //         ui.size.width = ui.originalSize.width;
        //     }
        // })
        .appendTo(this.propertyInspector);

    this.titleBar = $('<div>Properties</div>')
        .addClass("designerPropertyTitle")
        .prependTo(this.propertyInspector)
        .on("dblclick", function () {
            self.propertyViewContainer.toggle();
        });

    this.propertyView = $('<div></div>')
        .addClass("designerPropertyContent")
        .appendTo(this.propertyViewContainer);

    this.update = function (activeElement) {
        var self = this;
        var getType = {};
        var keys = [];

        if (this.activeElement == activeElement) {
            for (var key in activeElement) {
                if (!activeElement.readonly || key != "readonly" && $.inArray(key, activeElement.readonly) == -1) {
                    if (getType.toString.call(activeElement[key]) != '[object Function]') {
                        this.propertyNodes[key].val(activeElement[key]);
                    }
                }
            }
        } else {
            this.activeElement = activeElement;
            this.propertyView.html('');

            for (var key in activeElement) {
                if (!keys[key]) {
                    keys[key] = true;

                    if (key != "readonly" && getType.toString.call(activeElement[key]) != '[object Function]') {
                        var elementKey = $('<div class="propertiesFieldKey">' + key + '</div>');

                        var elementValue = null;

                        if (key === 'textArea') {
                            elementValue = $('<textarea class="propertiesFieldTextInput" rows="4" cols="50" name="' + key + '" value="' + activeElement[key] + '"></textarea>');
                        } else {
                            elementValue = $('<input class="propertiesFieldTextInput" type="text" name="' + key + '" value="' + activeElement[key] + '">')
                        }


                        if (!activeElement.readonly || $.inArray(key, activeElement.readonly) == -1) {
                            elementValue.on("keyup", {"objectProperty": key}, function (event) {
                                var data = self.activeElement[event.data.objectProperty];
                                self.activeElement[event.data.objectProperty] = (data === parseInt(data, 10)) ? parseInt($(this).val()) : $(this).val();
                                self.labelDesigner.updateCanvas();
                            });
                        } else {
                            // Draw readonly textbox.
                            elementValue.prop("readonly", true).css({
                                "background-color": "#DDDDDD",
                                border: "1px solid #AAAAAA"
                            });
                        }

                        this.propertyNodes[key] = elementValue;

                        var elementContainer = $('<div class="label-designer-form-group"></div>')
                            .css({
                                // "clear": "both",
                                // "padding-top": "2px"
                            })
                            .append(elementKey).append(elementValue);
                        this.propertyView.append(elementContainer);
                    }
                }
            }

            if (activeElement !== null) {

                var indexToDelete = this.labelDesigner.elements.indexOf(activeElement);
                var elements = this.labelDesigner.elements;

                var deleteElement = $('<button id="btn__warning">Delete element</button>')
                    .on('click', null, function () {
                        elements.splice(indexToDelete, 1);

                        self.labelDesigner.updateCanvas();
                        self.propertyView.html('');
                    });

                var deleteElementContainer = $('<div></div>')
                    .css({
                        "clear": "both",
                        "padding-top": "2px"
                    })
                    .append(deleteElement);


                this.propertyView.append(deleteElementContainer);
            }
        }
    };

    this.updatePosition(0);
};
