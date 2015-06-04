angular.module('oneflow.image-upload').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/image-upload.html',
    "<div>\r" +
    "\n" +
    "  <ul class=\"image-list\">\r" +
    "\n" +
    "    <li ng-repeat=\"image in ngModel\">\r" +
    "\n" +
    "      <img ng-click=\"removeImage($index)\" ng-src=\"{{image}}\" />\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "  <div class=\"clearfix m-b\"></div>\r" +
    "\n" +
    "  <input type=\"file\" upload-file-id=\"image-{{model._id}}\" id=\"image-{{model._id}}\" onchange=\"angular.element(this).scope().onFileSelect(this)\" />\r" +
    "\n" +
    "  <div class=\"m-t\">\r" +
    "\n" +
    "    <img ng-show=\"selectedImage\" style=\"height: 200px;\" id=\"selectedimage\" ng-src=\"{{selectedImage}}\" name=\"selectedImage\" />\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <button class=\"m-t btn btn-success\" translate=\"Add Image to {{type}}\" ng-click=\"addProductImage();$event.preventDefault()\">Add Image to {{type}}</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
