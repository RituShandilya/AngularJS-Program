class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
    this.arrayData =[{"Owner":"Mercedes Benz",
    "image_url":"https://dummyimage.com/600x400/f7edf7/0011ff&text=Mercedes+Benz",
      "element_link":"https://www.mercedes-benz.com/"
   },
   {"Owner":"Google Maps",
       "image_url":"https://dummyimage.com/600x400/000/8cff00&text=google+maps",
      "element_link":"https://www.google.com/maps"

  },
  {"Owner":"Daimler",
 "image_url":"https://dummyimage.com/600x400/c0d4a3/6236e8&text=Daimler",
      "element_link":"https://www.daimler.com/"
  },
  {"Owner":"Moovel",
    "image_url":"https://blog.mercedes-benz-passion.com/wp-cb4ef-content/uploads/moovel-group-1200.jpg",
      "element_link":"https://play.google.com/store/apps/details?id=com.daimler.moovel.android&hl=en"
  },
  {"Owner":"Car2go",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/3/30/Car2Go_logo.jpg",
      "element_link":"https://www.car2go.com/"
  }
  ]
  }
}

export default HomeCtrl;