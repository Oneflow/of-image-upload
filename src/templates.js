angular.module('oneflow.image-upload').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/image-upload.html',
    "<div>\n" +
    "  <ul class=\"image-list\">\n" +
    "    <li ng-repeat=\"image in ngModel\">\n" +
    "      <img  ng-src=\"{{image}}\" class=\"image-upload\" />\n" +
    "      <span ng-click=\"removeImage($index)\" class=\"image-text\"><span>Remove</span></span>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"clearfix m-b\"></div>\n" +
    "  <input type=\"file\" upload-file-id=\"image-{{model._id}}\" id=\"image-{{model._id}}\" onchange=\"angular.element(this).scope().onFileSelect(this)\" />\n" +
    "  <div class=\"m-t\">\n" +
    "    <img ng-show=\"selectedImage\" style=\"height: 200px;\" id=\"selectedimage\" ng-src=\"{{selectedImage}}\" name=\"selectedImage\" />\n" +
    "  </div>\n" +
    "  <button class=\"m-t btn btn-success\" translate=\"Add Image to {{type}}\" ng-click=\"addProductImage();$event.preventDefault()\">Add Image to {{type}}</button>\n" +
    "</div>\n"
  );

}]);
