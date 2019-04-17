var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm7.staticflickr.com/6207/6082137771_053aa7f62c.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non laoreet turpis. Nulla facilisi. Sed vitae venenatis eros, id fringilla elit. Cras cursus mattis condimentum. Donec purus diam, tristique aliquam velit a, mattis volutpat felis. Nullam massa ex, maximus rhoncus maximus ac, commodo id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non orci eget nibh sagittis auctor. Pellentesque vel suscipit ligula. Phasellus at ullamcorper diam, nec sagittis odio. Nulla blandit congue lobortis."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm5.staticflickr.com/4090/5098329270_f44e47b2d6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non laoreet turpis. Nulla facilisi. Sed vitae venenatis eros, id fringilla elit. Cras cursus mattis condimentum. Donec purus diam, tristique aliquam velit a, mattis volutpat felis. Nullam massa ex, maximus rhoncus maximus ac, commodo id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non orci eget nibh sagittis auctor. Pellentesque vel suscipit ligula. Phasellus at ullamcorper diam, nec sagittis odio. Nulla blandit congue lobortis."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm9.staticflickr.com/8721/28339418753_ec9e2ae9c9.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non laoreet turpis. Nulla facilisi. Sed vitae venenatis eros, id fringilla elit. Cras cursus mattis condimentum. Donec purus diam, tristique aliquam velit a, mattis volutpat felis. Nullam massa ex, maximus rhoncus maximus ac, commodo id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non orci eget nibh sagittis auctor. Pellentesque vel suscipit ligula. Phasellus at ullamcorper diam, nec sagittis odio. Nulla blandit congue lobortis."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Removed Campgrounds!");
            // Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }    
                    else{
                        console.log("Added a Campground");
                        // Create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was Internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    campground.comments.push(comment); 
                                    campground.save();  
                                    console.log("Created new comment");
                                }
                            });
                    }
                });    
            });
        }
    });    
    // Add a few comments
}

module.exports = seedDB;
