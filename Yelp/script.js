function Search(query, location){
    this.query = query;   
    this.location = location;
}

Search.prototype.getData = function(){
    var self = this;
    console.log("getting data...");
    $.ajax({ 
        url: "functions.php",
        data: {
            call: "search",
            term: self.query,
            location: self.location
        },
        success: function(data){
            console.log("got data");
            console.log(data);
            //self.render(JSON.parse(data));
        }
    });
    
    
    
    
}

$(document).ready(function(){
    var s = new Search("Bars", "Philadelphia,PA");
    s.getData();
});