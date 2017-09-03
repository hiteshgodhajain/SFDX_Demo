({
    navigateToDetailsView : function(accountId) {
        console.log("firing event! clicked on balloon");
        var event = $A.get("e.force:navigateToSObject");
        event.setParams({
            "recordId": accountId
        });
        event.fire();
    }
})