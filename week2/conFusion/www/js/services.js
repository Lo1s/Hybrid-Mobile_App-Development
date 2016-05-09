'use strict';

angular.module('conFusion.services',['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var promotions = [
                {
                          _id:0,
                          name:'Weekend Grand Buffet', 
                          image: 'images/buffet.png',
                          label:'New',
                          price:'19.99',
                          description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
                }
                
            ];
    
                this.getDishes = function(){
                    
                    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                    
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function() {
                    return   $resource(baseURL+"promotions/:id");;
                }
    
                        
        }])

        .factory('aboutFactory', function() {
            var aboutFactory = {};
            aboutFactory.getAboutDescription = function() {
                var description = {
                    title: "Our History", 
                    text: "Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."
                };
                return description;
            }
            return aboutFactory;
        })

        .factory('addressFactory', function() {
            var addressFactory = {};
            addressFactory.getAddress = function() {
                var address = {
                    title: "Our Address",
                    street: "121, Clear Water Bay Road",
                    district: "Clear Water Bay, Kowloon",
                    city: "HONG KONG",
                    tel: "+852 1234 5678",
                    fax: "+852 8765 4321",
                    mail: "confusion@food.net"
                };
                
                return address;
            }
            return addressFactory;
        })

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
            return $resource(baseURL+"leadership/:id");
    
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
            return $resource(baseURL+"feedback/:id");
    
        }])

        .factory('favoriteFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            var favFac = {};
            var favorites = [];
            
            favFac.addToFavorites = function(index) {
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index) {
                        console.log('Already in favorites');
                        return;
                    }
                }
                favorites.push({id: index});
            };
            
            favFac.deleteFromFavorites = function(index) {
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].id == index) {
                        favorites.splice(i, 1);
                    }
                }
            };
            
            favFac.getFavorites = function() {
                return favorites;
            }
            
            return favFac;
        }])
;
