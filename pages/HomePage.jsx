import Navbar from "../components/Navbar";
import Searchbtn from "../components/SearchButton";
import RestaurantCard from "../components/RestaurantCard";
const c_logo = new URL("../public/Logo.jpg", import.meta.url)
const profile = new URL("../public/profile.jpeg", import.meta.url)

const resData = [
    {
        "type": "restaurant",
        "info": {
            "resId": 20396323,
            "name": "Flurys",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20396323/7cfc26174825590e4ee05a3dfb5a0946_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20396323/7cfc26174825590e4ee05a3dfb5a0946_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "306",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "13",
                        "reviewTextSmall": "13 Reviews",
                        "subtext": "13 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "293",
                        "reviewTextSmall": "293 Reviews",
                        "subtext": "293 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹800 for two"
            },
            "cfo": {
                "text": "₹350 for one"
            },
            "locality": {
                "name": "Dalhousie BBD Bagh, Kolkata",
                "address": "6 A, Kiran Sankar Roy Road, Dalhousie BBD Bagh, Kolkata",
                "localityUrl": "kolkata/dalhousie-bbd-bagh-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/bakery/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2OFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/pancake/",
                    "name": "Pancake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/american/",
                    "name": "American"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/cafes/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/sandwich/",
                    "name": "Sandwich"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹350 for one"
            }
        },
        "order": {
            "deliveryTime": "39 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/flurys-dalhousie-bbd-bagh/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/flurys-dalhousie-bbd-bagh/order",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20396323\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19341796,
            "name": "Kela Patta",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19341796/4a3c4e6e6273f7222950bc37c7dca34c_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19341796/4a3c4e6e6273f7222950bc37c7dca34c_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "10.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "10.2K",
                        "reviewTextSmall": "10.2K Reviews",
                        "subtext": "10.2K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Picnic Garden, Kolkata",
                "address": "143/105A, Picnic Garden, Kolkata",
                "localityUrl": "kolkata/picnic-garden-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/south-indian/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "45 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/kela-patta-picnic-garden/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/kela-patta-picnic-garden/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19341796\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹300 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20161156,
            "name": "Blue Tokai Coffee Roasters",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/1/19343931/ee864c53fa109ad0b837abc711e1b72c_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/1/19343931/ee864c53fa109ad0b837abc711e1b72c_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,498",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "271",
                        "reviewTextSmall": "271 Reviews",
                        "subtext": "271 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "1,227",
                        "reviewTextSmall": "1,227 Reviews",
                        "subtext": "1,227 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Chowringhee, Kolkata",
                "address": "31, Bangur Estate, Ward 63, Chowringhee Road, Near Chowringhee, Kolkata",
                "localityUrl": "kolkata/chowringhee-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/cafes/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/coffee/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/continental/",
                    "name": "Continental"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for one"
            }
        },
        "order": {
            "deliveryTime": "37 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/blue-tokai-coffee-roasters-chowringhee/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/blue-tokai-coffee-roasters-chowringhee/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20161156\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹75 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 22089,
            "name": "Banchharam's",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/9/22089/377ee69e6509733d509b0dd4eff7c609_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/9/22089/377ee69e6509733d509b0dd4eff7c609_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "736",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "736",
                        "reviewTextSmall": "736 Reviews",
                        "subtext": "736 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Bara Bazar, Kolkata",
                "address": "22B, Rabindra Sarani, Tiretti Market, Bara Bazar, Kolkata",
                "localityUrl": "kolkata/bara-bazar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/mishti/",
                    "name": "Mishti"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "30 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/banchharams-bara-bazar/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/banchharams-bara-bazar/order",
            "clickActionDeeplink": ""
        },
        "distance": "912 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"22089\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19832497,
            "name": "South Indian Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19832497/66c8aa49cd2100b8cf92afc60f097fcf_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19832497/66c8aa49cd2100b8cf92afc60f097fcf_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,321",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "1,318",
                        "reviewTextSmall": "1,318 Reviews",
                        "subtext": "1,318 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Park Circus Area, Kolkata",
                "address": "22 A, Park Circus Area, Kolkata",
                "localityUrl": "kolkata/park-circus-area-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/south-indian/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "36 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/south-indian-restaurant-3-park-circus-area/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/south-indian-restaurant-3-park-circus-area/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19832497\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹200 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20384419,
            "name": "Suchali's Artisan Bakehouse",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/20384419/13eade792b3890574783a43e5d303986_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/20384419/13eade792b3890574783a43e5d303986_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "708",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "7",
                        "reviewTextSmall": "7 Reviews",
                        "subtext": "7 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "701",
                        "reviewTextSmall": "701 Reviews",
                        "subtext": "701 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Chowringhee, Kolkata",
                "address": "31, Bangur Estate, Ward 63, Near Airtel Store, Kolkata, Chowringhee, Kolkata",
                "localityUrl": "kolkata/chowringhee-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/bakery/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/coffee/",
                    "name": "Coffee"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for one"
            }
        },
        "order": {
            "deliveryTime": "40 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/suchalis-artisan-bakehouse-chowringhee/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/suchalis-artisan-bakehouse-chowringhee/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20384419\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹75 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21996,
            "name": "Dimpi",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/21996/d2d1c1d344b533ead1d4dc0df3e59cdb_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/21996/d2d1c1d344b533ead1d4dc0df3e59cdb_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "17.1K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "644",
                        "reviewTextSmall": "644 Reviews",
                        "subtext": "644 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "400"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "16.4K",
                        "reviewTextSmall": "16.4K Reviews",
                        "subtext": "16.4K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Shyam Bazar, Kolkata",
                "address": "128/8A, Bidhan Sarani, Five Point Crossing, Shyam Bazar, Kolkata",
                "localityUrl": "kolkata/shyam-bazar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/dimpi-shyam-bazar/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/dimpi-shyam-bazar/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21996\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹150 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19873499,
            "name": "Tewari Confectioners Mithaiwala Pvt Ltd.",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/19873499/e5ee2e2700f3b929a449fa93d45bb383_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/19873499/e5ee2e2700f3b929a449fa93d45bb383_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "3,842",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "3,839",
                        "reviewTextSmall": "3,839 Reviews",
                        "subtext": "3,839 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Kankurgachi, Kolkata",
                "address": "P38, C.I.T. Road, Scheme VII - M, Ward 32, Kankurgachi, Kolkata",
                "localityUrl": "kolkata/kankurgachi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/mishti/",
                    "name": "Mishti"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "53 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/tewari-confectioners-mithaiwala-pvt-ltd-kankurgachi/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/tewari-confectioners-mithaiwala-pvt-ltd-kankurgachi/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19873499\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21069221,
            "name": "Bakingo",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/21069221/175a4f72dbf992373237e6188cf20e14_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/1/21069221/175a4f72dbf992373237e6188cf20e14_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "3,522",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "3,522",
                        "reviewTextSmall": "3,522 Reviews",
                        "subtext": "3,522 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Ultadanga, Kolkata",
                "address": "83, Ground Floor, Shyam Kunj Apartment, Golaghata, VIP Road, Ultadanga, Kolkata",
                "localityUrl": "kolkata/ultadanga-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/bakery/",
                    "name": "Bakery"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "44 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/bakingo-ultadanga/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/bakingo-ultadanga/order",
            "clickActionDeeplink": ""
        },
        "distance": "4.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21069221\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19807747,
            "name": "Calcutta Cravings",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/19588283/65d9a6a677519a7e7e9e67ed8d52cdc3_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/19588283/65d9a6a677519a7e7e9e67ed8d52cdc3_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "560",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "560",
                        "reviewTextSmall": "560 Reviews",
                        "subtext": "560 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Chandni Chowk, Kolkata",
                "address": "71, First Floor, Bentinck Street, Faraday House, Ward 46, Chandni Chowk, Kolkata",
                "localityUrl": "kolkata/chandni-chowk-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/bengali/",
                    "name": "Bengali"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/rolls/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/momos/",
                    "name": "Momos"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "37 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/calcutta-cravings-chandni-chowk/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/calcutta-cravings-chandni-chowk/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19807747\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20044,
            "name": "Banana Leaf @ Komala Vilas",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/20044/a352dad8e707b9358893af0f5f702e1a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/20044/a352dad8e707b9358893af0f5f702e1a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "5,509",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "1,788",
                        "reviewTextSmall": "1,788 Reviews",
                        "subtext": "1,788 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "3,721",
                        "reviewTextSmall": "3,721 Reviews",
                        "subtext": "3,721 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Lake Market Area, Kolkata",
                "address": "75, Rashi Behari Avenue, Lake Market Area, Kolkata",
                "localityUrl": "kolkata/lake-market-area-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1NFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/tamil/",
                    "name": "Tamil"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/juices/",
                    "name": "Juices"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for one"
            }
        },
        "order": {
            "deliveryTime": "49 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/banana-leaf-komala-vilas-lake-market-area/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/banana-leaf-komala-vilas-lake-market-area/order",
            "clickActionDeeplink": ""
        },
        "distance": "6.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20044\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21590,
            "name": "Kookie Jar",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/21590/113ce3605139021154790c1e911093af_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/0/21590/113ce3605139021154790c1e911093af_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "3,993",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "1,102",
                        "reviewTextSmall": "1,102 Reviews",
                        "subtext": "1,102 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "2,891",
                        "reviewTextSmall": "2,891 Reviews",
                        "subtext": "2,891 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹800 for two"
            },
            "cfo": {
                "text": "₹350 for one"
            },
            "locality": {
                "name": "Loudon Street Area, Kolkata",
                "address": "42a, Ground Floor, Shakespeare Sarani, Loudon Street Area, Kolkata",
                "localityUrl": "kolkata/loudon-street-area-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/bakery/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/kolkata/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/kolkata/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹350 for one"
            }
        },
        "order": {
            "deliveryTime": "35 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/kolkata/kookie-jar-loudon-street-area/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/kolkata/kookie-jar-loudon-street-area/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"2fa93b00-7b7e-4946-a3e0-f62296f73212\",\"location_type\":\"delivery_cell\",\"location_id\":\"4180033504081346560\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21590\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹75 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
]

const HomePage = () => {
    return (
        <div className="landing-page">
            <Navbar logo={c_logo} companyname={"BellyBoom"} profileImage={profile} />
            <Searchbtn />
            <div className="mt-8 ml-10 text-[32px] font-medium">Food Delivery Restaurants in Kolkata</div>

            <div id="resList" className="px-40 py-6 flex gap-10 flex-wrap">  {/*Content Driven UI*/}
                {resData.map((item, index) => {
                    const restaurant = {
                        resName: item.info.name,
                        resImg: item.info.image?.url,
                        resRating: item.info.rating?.rating_text,
                        resCusine: item.info.cuisine.map(c => c.name).join(', '),
                        resCharges: item.info.cft?.text,
                        resDelivery: item.order?.deliveryTime
                    };

                    return <RestaurantCard key={index} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};


export default HomePage;
