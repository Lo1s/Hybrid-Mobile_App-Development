'use strict';

angular.module('conFusion.services',['ngResource'])
        .constant("baseURL","http://10.14.40.75:3000/")
        .factory('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            
            return $resource(baseURL + "dishes/:id", null, {
                'update' : {
                    method: 'PUT'
                }
            });
            
                        
        }])

        .factory('$localStorage', ['$window', function($window) {
            return {
                store: function(key, value) {
                    $window.localStorage[key] = value;
                },
                get: function(key, defaultValue) {
                    return $window.localStorage[key] || defaultValue;
                },
                storeObject: function(key, value) {
                    $window.localStorage[key] = JSON.stringify(value);
                },
                getObject: function(key, defaultValue) {
                    return JSON.parse($window.localStorage[key] || defaultValue);
                }
            }
        }])

        .factory('promotionFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            return $resource(baseURL + "promotions/:id");
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
            
            favFac.setFavorites = function(favs) {
                favorites = favs;
            }
            
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
