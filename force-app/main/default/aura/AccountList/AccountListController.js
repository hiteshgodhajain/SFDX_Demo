({
  doInit1: function(component, event, helper) {      
    // Fetch the account list from the Apex controller
    // Marked the aove method as doInit1 for another trailhead   
    helper.getAccountList(component);
  },
  getTotal: function(component){
 	var allChildComp = component.find("childCmp");
      var total = 0;
      for(var i=0; i<allChildComp.length; i++) {
          var tempAccount = allChildComp[i].get("v.sAloneAccount");
          total += tempAccount.NumberOfEmployees == undefined ? 0 : tempAccount.NumberOfEmployees;
      }
      component.set("v.total", total);
 },
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
            var event = $A.get("e.c:AccountsLoaded");
            event.setParams({"accounts": a.getReturnValue()});
            event.fire();
        });
    $A.enqueueAction(action);
    }
})