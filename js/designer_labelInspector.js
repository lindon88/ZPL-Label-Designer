if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
	
com.logicpartners.labelInspector = function(designer, canvas) {
	this.canvas = canvas;
	this.canvasElement = $(canvas);
	this.labelDesigner = designer;
	var self = this;
	this.boundingBox = null;
	
	// Create the property window.
	this.inspectorWindow = $('<div></div>')
			.addClass("designerUtilityToolbar designerUtilityLabelInspector")
			.insertAfter($(this.canvasElement).parent());

	this.toolsViewContainer = $('<div></div>')
			.addClass("designerLabelContent")
			.appendTo(this.inspectorWindow);

	this.buttonView = $('<div></div>')
			.appendTo(this.toolsViewContainer);
	
	this.addTool = function(controller) {
		// console.log(controller.workspace.html());
		this.buttonView.append(controller.workspace);
	}
};
