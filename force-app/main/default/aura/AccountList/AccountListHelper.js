({
  // Fetch the accounts from the Apex controller
  getAccountList: function(component) {
    var action = component.get('c.getAccounts');

    // Set up the callback
    var self = this;
    action.setCallback(this, function(actionResult) {
        var tempAccountList = actionResult.getReturnValue();
     	component.set('v.accounts', tempAccountList);
        //var total = 0;
        //for(var i=0; i<tempAccountList.length; i++) {
        // total += tempAccountList[i].NumberOfEmployees;   
        //}
       // component.set('v.total', total);
    });
    $A.enqueueAction(action);
  }
})