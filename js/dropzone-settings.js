!function () {
  document.querySelector("dropzone");
  var e = document.querySelector(".registration__file-zone"),
    i = document.querySelector(".adding-post__file-zone--photo"),
    t = document.querySelector(".adding-post__file-zone--video"), a = document.querySelectorAll('input[type="file"]');
  if (a) for (var l = 0; l < a.length; l++) a[l].addEventListener("click", function (e) {
    // e.preventDefault()
  });
  if (Dropzone.autoDiscover = !1, e) new Dropzone(".registration__file-zone", {
    url: "#",
    maxFiles: 1,
    init: function () {
      this.on("addedfile", function () {
        null != this.files[1] && this.removeFile(this.files[0])
      })
    },
    clickable: ".form__input-file-button",
    maxFilesize: null,
    maxThumbnailFilesize: 50,
    thumbnailWidth: null,
    thumbnailHeight: null,
    previewsContainer: ".dropzone-previews",
    acceptedFiles: "image/*",
    parallelUploads: 1,
    autoProcessQueue: !1,
    previewTemplate: '<div class="dz-preview dz-file-preview"><div class="registration__image-wrapper form__file-wrapper"><img class="form__image" src="" alt="" data-dz-thumbnail></div><div class="registration__file-data form__file-data"><span class="registration__file-name form__file-name dz-filename" data-dz-name></span><button class="registration__delete-button form__delete-button button" type="button" data-dz-remove><span>Удалить</span><svg class="registration__delete-icon form__delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="12" height="12"><path d="M18 1.3L16.7 0 9 7.7 1.3 0 0 1.3 7.7 9 0 16.7 1.3 18 9 10.3l7.7 7.7 1.3-1.3L10.3 9z"/></svg></button></div></div>'
  });
  if (i) new Dropzone(".adding-post__file-zone--photo", {
    url: "#",
    maxFiles: 1,
    init: function () {
      this.on("addedfile", function () {
        null != this.files[1] && this.removeFile(this.files[0])
      })
    },
    clickable: ".form__input-file-button--photo",
    maxFilesize: null,
    maxThumbnailFilesize: 50,
    thumbnailWidth: null,
    thumbnailHeight: null,
    previewsContainer: ".adding-post__file--photo",
    acceptedFiles: "image/*",
    parallelUploads: 1,
    autoProcessQueue: !1,
    previewTemplate: '<div class="dz-preview dz-file-preview"><div class="adding-post__image-wrapper form__file-wrapper"> <img class="form__image" src="" alt="" data-dz-thumbnail> </div> <div class="adding-post__file-data form__file-data"> <span class="adding-post__file-name form__file-name dz-filename" data-dz-name></span> <button class="adding-post__delete-button form__delete-button button" type="button" data-dz-remove> <span>Удалить</span> <svg class="adding-post__delete-icon form__delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="12" height="12"><path d="M18 1.3L16.7 0 9 7.7 1.3 0 0 1.3 7.7 9 0 16.7 1.3 18 9 10.3l7.7 7.7 1.3-1.3L10.3 9z"/></svg> </button> </div></div>'
  });
  if (t) new Dropzone(".adding-post__file-zone--video", {
    url: "#",
    maxFiles: 1,
    init: function () {
      this.on("addedfile", function () {
        null != this.files[1] && this.removeFile(this.files[0])
      })
    },
    clickable: ".form__input-file-button--video",
    maxFilesize: null,
    maxThumbnailFilesize: 50,
    thumbnailWidth: null,
    thumbnailHeight: null,
    previewsContainer: ".adding-post__file--video",
    acceptedFiles: "image/*",
    parallelUploads: 1,
    autoProcessQueue: !1,
    previewTemplate: '<div class="dz-preview dz-file-preview"><div class="adding-post__video-wrapper form__file-wrapper form__file-wrapper--video"> <img class="form__image" src="" alt="" data-dz-thumbnail> </div> <div class="adding-post__file-data form__file-data"> <span class="adding-post__file-name form__file-name dz-filename" data-dz-name></span> <button class="adding-post__delete-button form__delete-button button" type="button" data-dz-remove> <span>Удалить</span> <svg class="adding-post__delete-icon form__delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="12" height="12"><path d="M18 1.3L16.7 0 9 7.7 1.3 0 0 1.3 7.7 9 0 16.7 1.3 18 9 10.3l7.7 7.7 1.3-1.3L10.3 9z"/></svg> </button> </div></div>'
  })
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3B6b25lLXNldHRpbmdzLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlZ2lzdHJhdGlvbkZpbGVab25lIiwiYWRkaW5nUG9zdFBob3RvRmlsZVpvbmUiLCJhZGRpbmdQb3N0VmlkZW9GaWxlWm9uZSIsImlucHV0c0ZpbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwidXJsIiwibWF4RmlsZXMiLCJpbml0IiwidGhpcyIsIm9uIiwiZmlsZXMiLCJyZW1vdmVGaWxlIiwiY2xpY2thYmxlIiwibWF4RmlsZXNpemUiLCJtYXhUaHVtYm5haWxGaWxlc2l6ZSIsInRodW1ibmFpbFdpZHRoIiwidGh1bWJuYWlsSGVpZ2h0IiwicHJldmlld3NDb250YWluZXIiLCJhY2NlcHRlZEZpbGVzIiwicGFyYWxsZWxVcGxvYWRzIiwiYXV0b1Byb2Nlc3NRdWV1ZSIsInByZXZpZXdUZW1wbGF0ZSJdLCJtYXBwaW5ncyI6IkNBQUEsV0FDaUJBLFNBQVNDLGNBQWMsWUFBdEMsSUFDSUMsRUFBdUJGLFNBQVNDLGNBQWMsNEJBQzlDRSxFQUEwQkgsU0FBU0MsY0FBYyxrQ0FDakRHLEVBQTBCSixTQUFTQyxjQUFjLGtDQUVqREksRUFBYUwsU0FBU00saUJBQWlCLHNCQUUzQyxHQUFJRCxFQU9GLElBTkEsSUFNU0UsRUFBSSxFQUFHQSxFQUFJRixFQUFXRyxPQUFRRCxJQUNwQkYsRUFBV0UsR0FObEJFLGlCQUFpQixRQUFTLFNBQVVDLEdBQzVDQSxFQUFJQyxtQkFXVixHQUZBQyxTQUFTQyxjQUFlLEVBRXBCWCxFQUNnQixJQUFJVSxTQUFTLDJCQUE0QixDQUN6REUsSUFBSyxJQUNMQyxTQUFVLEVBQ1ZDLEtBQU0sV0FDSkMsS0FBS0MsR0FBRyxZQUFhLFdBQ0EsTUFBZkQsS0FBS0UsTUFBTSxJQUNiRixLQUFLRyxXQUFXSCxLQUFLRSxNQUFNLE9BSWpDRSxVQUFXLDJCQUNYQyxZQUFhLEtBQ2JDLHFCQUFzQixHQUN0QkMsZUFBZ0IsS0FDaEJDLGdCQUFpQixLQUNqQkMsa0JBQW1CLHFCQUNuQkMsY0FBZSxVQUNmQyxnQkFBaUIsRUFDakJDLGtCQUFrQixFQUNsQkMsZ0JBQWlCLDRxQkFJckIsR0FBSTNCLEVBQ3dCLElBQUlTLFNBQVMsaUNBQWtDLENBQ3ZFRSxJQUFLLElBQ0xDLFNBQVUsRUFDVkMsS0FBTSxXQUNKQyxLQUFLQyxHQUFHLFlBQWEsV0FDQSxNQUFmRCxLQUFLRSxNQUFNLElBQ2JGLEtBQUtHLFdBQVdILEtBQUtFLE1BQU0sT0FJakNFLFVBQVcsa0NBQ1hDLFlBQWEsS0FDYkMscUJBQXNCLEdBQ3RCQyxlQUFnQixLQUNoQkMsZ0JBQWlCLEtBQ2pCQyxrQkFBbUIsNEJBQ25CQyxjQUFlLFVBQ2ZDLGdCQUFpQixFQUNqQkMsa0JBQWtCLEVBQ2xCQyxnQkFBaUIsZ3JCQUlyQixHQUFJMUIsRUFDd0IsSUFBSVEsU0FBUyxpQ0FBa0MsQ0FDdkVFLElBQUssSUFDTEMsU0FBVSxFQUNWQyxLQUFNLFdBQ0pDLEtBQUtDLEdBQUcsWUFBYSxXQUNBLE1BQWZELEtBQUtFLE1BQU0sSUFDYkYsS0FBS0csV0FBV0gsS0FBS0UsTUFBTSxPQUlqQ0UsVUFBVyxrQ0FDWEMsWUFBYSxLQUNiQyxxQkFBc0IsR0FDdEJDLGVBQWdCLEtBQ2hCQyxnQkFBaUIsS0FDakJDLGtCQUFtQiw0QkFDbkJDLGNBQWUsVUFDZkMsZ0JBQWlCLEVBQ2pCQyxrQkFBa0IsRUFDbEJDLGdCQUFpQiwwc0JBMUZ2QiIsImZpbGUiOiJkcm9wem9uZS1zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGRyb3B6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZHJvcHpvbmUnKTtcclxuICB2YXIgcmVnaXN0cmF0aW9uRmlsZVpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0cmF0aW9uX19maWxlLXpvbmUnKTtcclxuICB2YXIgYWRkaW5nUG9zdFBob3RvRmlsZVpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaW5nLXBvc3RfX2ZpbGUtem9uZS0tcGhvdG8nKTtcclxuICB2YXIgYWRkaW5nUG9zdFZpZGVvRmlsZVpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkaW5nLXBvc3RfX2ZpbGUtem9uZS0tdmlkZW8nKTtcclxuXHJcbiAgdmFyIGlucHV0c0ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO1xyXG5cclxuICBpZiAoaW5wdXRzRmlsZSkge1xyXG4gICAgdmFyIGFkZENsaWNrTGlzdGVuZXIgPSBmdW5jdGlvbiAoaW5wdXRGaWxlKSB7XHJcbiAgICAgIGlucHV0RmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHNGaWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFkZENsaWNrTGlzdGVuZXIoaW5wdXRzRmlsZVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZTtcclxuXHJcbiAgaWYgKHJlZ2lzdHJhdGlvbkZpbGVab25lKSB7XHJcbiAgICB2YXIgcmVnRHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoJy5yZWdpc3RyYXRpb25fX2ZpbGUtem9uZScsIHtcclxuICAgICAgdXJsOiAnIycsXHJcbiAgICAgIG1heEZpbGVzOiAxLFxyXG4gICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZXNbMV0hPW51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWxlc1swXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsaWNrYWJsZTogJy5mb3JtX19pbnB1dC1maWxlLWJ1dHRvbicsXHJcbiAgICAgIG1heEZpbGVzaXplOiBudWxsLFxyXG4gICAgICBtYXhUaHVtYm5haWxGaWxlc2l6ZTogNTAsXHJcbiAgICAgIHRodW1ibmFpbFdpZHRoOiBudWxsLFxyXG4gICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGwsXHJcbiAgICAgIHByZXZpZXdzQ29udGFpbmVyOiAnLmRyb3B6b25lLXByZXZpZXdzJyxcclxuICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlLyonLFxyXG4gICAgICBwYXJhbGxlbFVwbG9hZHM6IDEsXHJcbiAgICAgIGF1dG9Qcm9jZXNzUXVldWU6IGZhbHNlLFxyXG4gICAgICBwcmV2aWV3VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHotcHJldmlldyBkei1maWxlLXByZXZpZXdcIj48ZGl2IGNsYXNzPVwicmVnaXN0cmF0aW9uX19pbWFnZS13cmFwcGVyIGZvcm1fX2ZpbGUtd3JhcHBlclwiPjxpbWcgY2xhc3M9XCJmb3JtX19pbWFnZVwiIHNyYz1cIlwiIGFsdD1cIlwiIGRhdGEtZHotdGh1bWJuYWlsPjwvZGl2PjxkaXYgY2xhc3M9XCJyZWdpc3RyYXRpb25fX2ZpbGUtZGF0YSBmb3JtX19maWxlLWRhdGFcIj48c3BhbiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZmlsZS1uYW1lIGZvcm1fX2ZpbGUtbmFtZSBkei1maWxlbmFtZVwiIGRhdGEtZHotbmFtZT48L3NwYW4+PGJ1dHRvbiBjbGFzcz1cInJlZ2lzdHJhdGlvbl9fZGVsZXRlLWJ1dHRvbiBmb3JtX19kZWxldGUtYnV0dG9uIGJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWR6LXJlbW92ZT48c3Bhbj7Qo9C00LDQu9C40YLRjDwvc3Bhbj48c3ZnIGNsYXNzPVwicmVnaXN0cmF0aW9uX19kZWxldGUtaWNvbiBmb3JtX19kZWxldGUtaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCI+PHBhdGggZD1cIk0xOCAxLjNMMTYuNyAwIDkgNy43IDEuMyAwIDAgMS4zIDcuNyA5IDAgMTYuNyAxLjMgMTggOSAxMC4zbDcuNyA3LjcgMS4zLTEuM0wxMC4zIDl6XCIvPjwvc3ZnPjwvYnV0dG9uPjwvZGl2PjwvZGl2PidcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFkZGluZ1Bvc3RQaG90b0ZpbGVab25lKSB7XHJcbiAgICB2YXIgYWRkaW5nUGhvdG9Ecm9wem9uZSA9IG5ldyBEcm9wem9uZSgnLmFkZGluZy1wb3N0X19maWxlLXpvbmUtLXBob3RvJywge1xyXG4gICAgICB1cmw6ICcjJyxcclxuICAgICAgbWF4RmlsZXM6IDEsXHJcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5maWxlc1sxXSE9bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZSh0aGlzLmZpbGVzWzBdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgY2xpY2thYmxlOiAnLmZvcm1fX2lucHV0LWZpbGUtYnV0dG9uLS1waG90bycsXHJcbiAgICAgIG1heEZpbGVzaXplOiBudWxsLFxyXG4gICAgICBtYXhUaHVtYm5haWxGaWxlc2l6ZTogNTAsXHJcbiAgICAgIHRodW1ibmFpbFdpZHRoOiBudWxsLFxyXG4gICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGwsXHJcbiAgICAgIHByZXZpZXdzQ29udGFpbmVyOiAnLmFkZGluZy1wb3N0X19maWxlLS1waG90bycsXHJcbiAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS8qJyxcclxuICAgICAgcGFyYWxsZWxVcGxvYWRzOiAxLFxyXG4gICAgICBhdXRvUHJvY2Vzc1F1ZXVlOiBmYWxzZSxcclxuICAgICAgcHJldmlld1RlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImR6LXByZXZpZXcgZHotZmlsZS1wcmV2aWV3XCI+PGRpdiBjbGFzcz1cImFkZGluZy1wb3N0X19pbWFnZS13cmFwcGVyIGZvcm1fX2ZpbGUtd3JhcHBlclwiPiA8aW1nIGNsYXNzPVwiZm9ybV9faW1hZ2VcIiBzcmM9XCJcIiBhbHQ9XCJcIiBkYXRhLWR6LXRodW1ibmFpbD4gPC9kaXY+IDxkaXYgY2xhc3M9XCJhZGRpbmctcG9zdF9fZmlsZS1kYXRhIGZvcm1fX2ZpbGUtZGF0YVwiPiA8c3BhbiBjbGFzcz1cImFkZGluZy1wb3N0X19maWxlLW5hbWUgZm9ybV9fZmlsZS1uYW1lIGR6LWZpbGVuYW1lXCIgZGF0YS1kei1uYW1lPjwvc3Bhbj4gPGJ1dHRvbiBjbGFzcz1cImFkZGluZy1wb3N0X19kZWxldGUtYnV0dG9uIGZvcm1fX2RlbGV0ZS1idXR0b24gYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZHotcmVtb3ZlPiA8c3Bhbj7Qo9C00LDQu9C40YLRjDwvc3Bhbj4gPHN2ZyBjbGFzcz1cImFkZGluZy1wb3N0X19kZWxldGUtaWNvbiBmb3JtX19kZWxldGUtaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCI+PHBhdGggZD1cIk0xOCAxLjNMMTYuNyAwIDkgNy43IDEuMyAwIDAgMS4zIDcuNyA5IDAgMTYuNyAxLjMgMTggOSAxMC4zbDcuNyA3LjcgMS4zLTEuM0wxMC4zIDl6XCIvPjwvc3ZnPiA8L2J1dHRvbj4gPC9kaXY+PC9kaXY+J1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoYWRkaW5nUG9zdFZpZGVvRmlsZVpvbmUpIHtcclxuICAgIHZhciBhZGRpbmdWaWRlb0Ryb3B6b25lID0gbmV3IERyb3B6b25lKCcuYWRkaW5nLXBvc3RfX2ZpbGUtem9uZS0tdmlkZW8nLCB7XHJcbiAgICAgIHVybDogJyMnLFxyXG4gICAgICBtYXhGaWxlczogMSxcclxuICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmZpbGVzWzFdIT1udWxsKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjbGlja2FibGU6ICcuZm9ybV9faW5wdXQtZmlsZS1idXR0b24tLXZpZGVvJyxcclxuICAgICAgbWF4RmlsZXNpemU6IG51bGwsXHJcbiAgICAgIG1heFRodW1ibmFpbEZpbGVzaXplOiA1MCxcclxuICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGwsXHJcbiAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbCxcclxuICAgICAgcHJldmlld3NDb250YWluZXI6ICcuYWRkaW5nLXBvc3RfX2ZpbGUtLXZpZGVvJyxcclxuICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlLyonLFxyXG4gICAgICBwYXJhbGxlbFVwbG9hZHM6IDEsXHJcbiAgICAgIGF1dG9Qcm9jZXNzUXVldWU6IGZhbHNlLFxyXG4gICAgICBwcmV2aWV3VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHotcHJldmlldyBkei1maWxlLXByZXZpZXdcIj48ZGl2IGNsYXNzPVwiYWRkaW5nLXBvc3RfX3ZpZGVvLXdyYXBwZXIgZm9ybV9fZmlsZS13cmFwcGVyIGZvcm1fX2ZpbGUtd3JhcHBlci0tdmlkZW9cIj4gPGltZyBjbGFzcz1cImZvcm1fX2ltYWdlXCIgc3JjPVwiXCIgYWx0PVwiXCIgZGF0YS1kei10aHVtYm5haWw+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiYWRkaW5nLXBvc3RfX2ZpbGUtZGF0YSBmb3JtX19maWxlLWRhdGFcIj4gPHNwYW4gY2xhc3M9XCJhZGRpbmctcG9zdF9fZmlsZS1uYW1lIGZvcm1fX2ZpbGUtbmFtZSBkei1maWxlbmFtZVwiIGRhdGEtZHotbmFtZT48L3NwYW4+IDxidXR0b24gY2xhc3M9XCJhZGRpbmctcG9zdF9fZGVsZXRlLWJ1dHRvbiBmb3JtX19kZWxldGUtYnV0dG9uIGJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWR6LXJlbW92ZT4gPHNwYW4+0KPQtNCw0LvQuNGC0Yw8L3NwYW4+IDxzdmcgY2xhc3M9XCJhZGRpbmctcG9zdF9fZGVsZXRlLWljb24gZm9ybV9fZGVsZXRlLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOCAxOFwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiPjxwYXRoIGQ9XCJNMTggMS4zTDE2LjcgMCA5IDcuNyAxLjMgMCAwIDEuMyA3LjcgOSAwIDE2LjcgMS4zIDE4IDkgMTAuM2w3LjcgNy43IDEuMy0xLjNMMTAuMyA5elwiLz48L3N2Zz4gPC9idXR0b24+IDwvZGl2PjwvZGl2PidcclxuICAgIH0pO1xyXG4gIH1cclxufSkoKTsiXX0=
