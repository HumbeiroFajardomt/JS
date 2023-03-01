const myBackpack = {
    name : "Backpack #1",
    volume : 30,
    color : "gray",
    strapLength : {
        left : 26,
        right : 26,
    },
    lidOpen :false,
    toggleLid : function(lidStatus){
        this.lidOpen = lidStatus;
    }

    
}