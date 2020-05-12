(function(window){
    'use strict';
    var App=window.App || {};
    function Truck(truckId,db){
        this.truckId=truckId;
        this.db=db;

    }
    Truck.prototype.createOrder=function(order){
        console.log('Adding order for ' + order.eamilAddress);
        this.db.add(order.eamilAddress, order);
    };
    Truck.prototype.deliverOrder=function(customId){
        console.log('Delivering order for '+ customId);
        this.db.remove(customId);
    };
    Truck.prototype.printOrders=function(){
        var customerIdArray=Object.keys(this.db.getAll());
        console.log('Truck #'+this.truckId+'has pending orders:');
        customerIdArray.forEach(function (id){
        console.log(this.db.get(id));
    } .bind(this));
};
    App.Truck=Truck;
    window.App=App;
})(window);