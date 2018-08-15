sap.ui.define(
	[
		
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter"
	]
	, function (Controller, MessageToast, formatter) {
	Controller.extend("opensap.myapp.controller.App", {
		
		formatter: formatter,
		
		onPressOK: function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("okPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("okMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);

		}
	});
});