if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.labelControl)
	com.logicpartners.labelControl = {};
	
com.logicpartners.labelControl.size = function(designer) {
	var self = this;
	this.designer = designer;
	this.workspace = $("<div></div>").addClass("designerLabelControl").attr("title", "Label Size");
	
	this.widthContainer = $("<div>Width (inches): </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.widthController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.val(this.designer.labelWidth / this.designer.dpi)
		.appendTo(this.widthContainer)
		.on("blur", function() {
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.heightContainer = $("<div>Height (inches): </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.heightController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.val(this.designer.labelHeight / this.designer.dpi)
		.appendTo(this.heightContainer)
		.on("blur", function() {
			
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
		this.dpiContainer = $("<div>DPI: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
		this.dpiController = $("<input type=\"text\" />")
			.addClass("designerLabelControlElement")
			.css({
				// width : "50px"
			})
			.val(this.designer.dpi)
			.appendTo(this.dpiContainer)
			.on("blur", function() {
				
					self.updateDesigner();
			})
			.on("keypress", function(e) {
				if (e.which == 13) {
					e.preventDefault();
					self.updateDesigner();
				}
			});
		
			// this.batchNumberContainer = $("<div>Batch Number: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
			// this.batchNumberController = $("<input type=\"checkbox\" id=\"batchNumberControllerId\" name=\"vehicle1\" value=\"Bike\"> ")
			// 	.addClass("designerLabelControlElement")
			// 	.css({
			// 		// width : "50px"
			// 	})
			// 	.val(this.designer.batchNumber)
			// 	.appendTo(this.batchNumberContainer)
			// 	.on("blur", function() {
					
			// 			self.updateDesigner();
			// 	})
			// 	.on("keypress", function(e) {
			// 		if (e.which == 13) {
			// 			e.preventDefault();
			// 			self.updateDesigner();
			// 		}
			// 	});
		
			// 	this.labelNumberContainer = $("<div>Label Number: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
			// 	this.labelNumberController = $("<input type=\"checkbox\" id=\"labelNumberControllerId\" name=\"vehicle1\" value=\"Bike\"> ")
			// 		.addClass("designerLabelControlElement")
			// 		.css({
			// 			// width : "50px"
			// 		})
			// 		.val(this.designer.labelNumber)
			// 		.appendTo(this.labelNumberContainer)
			// 		.on("blur", function() {
						
			// 				self.updateDesigner();
			// 		})
			// 		.on("keypress", function(e) {
			// 			if (e.which == 13) {
			// 				e.preventDefault();
			// 				self.updateDesigner();
			// 			}
			// 		});
		
	this.updateDesigner = function() {
		var dpi = this.designer.dpi;
		
		if (!isNaN(this.dpiController.val())) dpi = this.dpiController.val();
		this.designer.dpi = dpi;
		
		var width = this.designer.labelWidth / this.designer.dpi;
		var height = this.designer.labelHeight / this.designer.dpi;
		
		if (!isNaN(this.widthController.val())) width = this.widthController.val();
		if (!isNaN(this.heightController.val())) height = this.heightController.val();
		
		this.designer.updateLabelSize(width, height);
		this.widthController.val(width);
		this.heightController.val(height);
	};
		
	this.update = function() {
		this.widthController.val(this.designer.labelWidth / this.designer.dpi);
		this.heightController.val(this.designer.labelHeight / this.designer.dpi);
	}
};