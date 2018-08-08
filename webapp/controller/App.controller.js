sap.ui.define(
	[
		
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	]
	, function (Controller, MessageToast) {
	Controller.extend("opensap.myapp.controller.App", {
		onPressOK: function () {
			MessageToast.show("Ok was pressed!");
		}
	});
});