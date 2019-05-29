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
        .insertAfter($(this.canvasElement).parent());


    this.propertyViewContainer = $('<div></div>')
        .addClass("designerPropertyContainer")
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
                            elementValue = $('<textarea class="propertiesFieldTextInput" id="labelDesignerTextAreaBlock" rows="4" cols="50" name="' + key + '" value="' + activeElement[key] + '"></textarea>');
                        } else if (key === 'variableType') {
                            elementValue = $('<select class="propertiesFieldTextInput" id="labelDesignerVariableType" name="labelDesignerVariableType">' +
                                '<option value="Text">Text</option>' +
                                '<option value="TextBlock">TextBlock</option>' +
                                '</select>');

                            var selectedValue = activeElement[key];

                            if (!selectedValue) {
                                selectedValue = 'Text';
                                this.activeElement.variableType = selectedValue;
                            }

                            var thatActiveElement = this.activeElement;
                            setTimeout(function () {
                                $("#labelDesignerVariableType").val(selectedValue);

                                $('#labelDesignerVariableType').on('change', function() {
                                    thatActiveElement.variableType = this.value;
                                });
                            }, 0);

                        } else if (key === 'variableText') {
                            elementValue = $('<select class="propertiesFieldTextInput" id="labelDesignerVariableText" name="labelDesignerVariableText">' +
                                '<option value="Product Name">Product Name</option>' +
                                '<option value="Product Price">Product Price</option>' +
                                '</select>');

                            var selectedValueVariableText = activeElement[key];

                            if (!selectedValueVariableText) {
                                selectedValueVariableText = 'Product Name';
                                this.activeElement.variableText = selectedValueVariableText;
                                this.activeElement.previewText = 'Product Name';
                            } else {
                                this.activeElement.previewText = this.activeElement.variableText
                            }

                            var thatActiveElement = this.activeElement;
                            setTimeout(function () {
                                $("#labelDesignerVariableText").val(selectedValueVariableText);

                                $('#labelDesignerVariableText').on('change', function() {
                                    thatActiveElement.variableText = this.value;
                                    thatActiveElement.previewText = this.value;
                                    self.labelDesigner.updateCanvas();
                                });
                            }, 0);

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

                        /**
                         * Hide variableName field
                         */
                        if (key === 'variableName') {
                            continue;
                        }

                        /**
                         * Hide type field
                         */
                        if (key === 'type') {
                            continue;
                        }

                        /**
                         * Hide placeholderKey field
                         */
                        if (key === 'placeholderKey') {
                            continue;
                        }

                        /**
                         * Hide placeholderKey field
                         */
                        if (key === 'textName') {
                            continue;
                        }

                        /**
                         * Hide placeholderKey field
                         */
                        if (key === 'barcodeName') {
                            continue;
                        }

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

                var deleteElement = $('<button class="label-designer-btn__warning">Delete element</button>')
                    .on('click', null, function () {
                        elements.splice(indexToDelete, 1);

                        self.labelDesigner.updateCanvas();
                        self.propertyView.html('');
                    });

                var deleteElementContainer = $('<div></div>')
                    .append(deleteElement);


                this.propertyView.append(deleteElementContainer);
            }
        }
    };
};
