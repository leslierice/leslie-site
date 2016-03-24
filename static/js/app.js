var app = angular.module('wwwApp', []);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);

app.controller('gridController', ['$scope', function($scope, $window) {
  var lastI = 6;
  var images;
  $scope.init = function(imageNames)
  {
    $scope.imageShow = -1;
    $scope.postShow = 0;
    images = imageNames;
    $scope.viewImages = imageNames.slice(0,6);
  };

  $scope.clicked = function(imageId){
    $scope.imageShow=imageId;
  };

  $scope.getRow = function(imageId) {
    return Math.floor(imageId/3);
  }

  $scope.jClick = function(postId){
    $scope.postShow=postId;
  };

  $scope.next = function(){
      $scope.viewImages = [];
      console.log(lastI);
      var last = lastI+6;
      if (last > images.length) {
          last = images.length;
      }
      for(var i = lastI; i < last; i++) {
          $scope.viewImages.push(images[i]);
      }
      lastI = last;
  }

  $scope.prev = function() {
      console.log(lastI);
      var len = $scope.viewImages.length;
      var first = lastI-len-6;
      $scope.viewImages = []

      for(var i = first; i < lastI-len; i++) {
          $scope.viewImages.push(images[i]);
      }
      lastI = lastI-len;
  }

  $scope.showNext = function() {
      return lastI < images.length;
  }

  $scope.showPrev = function() {
      return lastI > 6;
  }

}]);

app.directive('sectiononload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var childElement = element.children();
            childElement.bind('load', function() {
              element.removeClass('none');
            });
        }
    };
});

app.directive('sectiononload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var childElement = element.children();
            childElement.bind('load', function() {
              element.removeClass('none');
            });
        }
    };
});

app.directive('sectiononload2', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var childElement = element.children().children();
            childElement.bind('load', function() {
              element.removeClass('none');
            });
        }
    };
});

$(window).load(function(){
    $("#spin").hide(0, function() {
      $(".content").fadeIn(100);
    });
});

$('img').bind('contextmenu', function(e) {
    return false;
});

app.directive('rightClick',function(){
    document.oncontextmenu = function (e) {
       if(e.target.hasAttribute('right-click')) {
           return false;
       }
    };

});

$(function() {
  $('button.navbar-toggle').click(function() {
    var value = $('#main').css('padding-top');
    if (value === '0px') {
        $('#main').css('padding-top', '+=100');
    } else {
        $('#main').css('padding-top', '0');
    }
  });
});

$(function() {
  $('a.list-group-item.main').click(function() {
    var value = $('#main').css('padding-top');
    if (value === '100px') {
        $('#main').css('padding-top', '+=150');
    } else {
        $('#main').css('padding-top', '-=150');
    }
  });
});
