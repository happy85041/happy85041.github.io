(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    .App {\r\n      width: 100%;\r\n      height: 100vh;\r\n      overflow: hidden;\r\n      display: flex;\r\n      border: 1px solid #ccc;\r\n      color: #333;\r\n      font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\r\n      margin: 0;\r\n    }\r\n\r\n    h4 {\r\n      margin-bottom: 10px;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n    }\r\n\r\n    form {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    input[type=\"text\"] {\r\n      color: #333;\r\n      border-radius: 0;\r\n    }\r\n\r\n    .sidebar {\r\n      flex-basis: 15%;\r\n      flex-shrink: 0;\r\n      flex-grow: 0;\r\n      background-color: #300d4f;\r\n      color: #fff;\r\n      padding: 10px 10px;\r\n    }\r\n\r\n    .left-sidebar section {\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    .left-sidebar {\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n\r\n    .room-members {\r\n      flex-grow: 1;\r\n    }\r\n\r\n    .right-sidebar .room {\r\n      display: flex;\r\n    }\r\n\r\n    .newUser-input {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    .right-sidebar {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      padding-left: 0;\r\n      padding-right: 0;\r\n    }\r\n\r\n    .room {\r\n      padding: 5px 10px;\r\n      cursor: pointer;\r\n    }\r\n\r\n    .room:hover {\r\n      background-color: goldenrod;\r\n      color: #333;\r\n    }\r\n\r\n    .room.active {\r\n      background-color: #11D771;\r\n      color: #333;\r\n    }\r\n\r\n    .room-name {\r\n      display: inline-block;\r\n      margin-left: 10px;\r\n    }\r\n\r\n    .user-list li {\r\n      margin-bottom: 10px;\r\n      font-size: 16px;\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n\r\n    .presence {\r\n      display: inline-block;\r\n      width: 20px;\r\n      height: 20px;\r\n      background-color: #fff;\r\n      margin-right: 10px;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    .presence.online {\r\n      background-color: green;\r\n    }\r\n\r\n    .chat-window {\r\n      display: flex;\r\n      flex-grow: 1;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    .chat-header, .chat-footer {\r\n      display: flex;\r\n      align-items: center;\r\n      flex-shrink: 0;\r\n    }\r\n\r\n    .chat-header {\r\n      border-bottom: 1px solid #ccc;\r\n      padding: 10px 20px;\r\n      height: 40px;\r\n    }\r\n\r\n    .chat-header h4 {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    .chat-session {\r\n      flex-grow: 1;\r\n      padding: 10px 20px;\r\n      overflow-y: auto;\r\n    }\r\n\r\n    .message-list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-end;\r\n    }\r\n\r\n    .user-message {\r\n      margin-top: 10px;\r\n    }\r\n\r\n    .user-message span {\r\n      display: block;\r\n    }\r\n\r\n    .user-id {\r\n      font-weight: bold;\r\n    }\r\n\r\n    .chat-footer {\r\n      padding: 0;\r\n      border-top: 1px solid #ccc;\r\n      height: 50px;\r\n    }\r\n\r\n    .message-form {\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n\r\n    .message-input {\r\n      width: 100%;\r\n      border: none;\r\n      margin-bottom: 0;\r\n      height: 100%;\r\n    }\r\n\r\n    .message-input:focus {\r\n      border: none;\r\n    }\r\n\r\n    .send-message {\r\n      background-color: #300d4f;\r\n      color: #fff;\r\n      border: 1px solid #300d4f;\r\n      padding: 10px;\r\n    }\r\n\r\n    .create-room {\r\n      padding: 0 10px;\r\n    }\r\n\r\n    .create-room button {\r\n      display: block;\r\n    }\r\n\r\n    input[type=\"checkbox\"] {\r\n      margin-bottom: 0;\r\n      display: inline-block;\r\n      margin-right: 5px;\r\n    }\r\n\r\n    .is-private {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n\r\n    .user-rooms h4, .joinable-rooms h4 {\r\n      padding-left: 10px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFSTtNQUNFLFdBQVc7TUFDWCxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLHdIQUF3SDtNQUN4SCxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qiw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsMkJBQTJCO01BQzNCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxxQkFBcUI7TUFDckIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixhQUFhO01BQ2IsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSx1QkFBdUI7SUFDekI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsWUFBWTtNQUNaLHNCQUFzQjtNQUN0Qiw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSw2QkFBNkI7TUFDN0Isa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtNQUMxQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsYUFBYTtJQUNmOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIscUJBQXFCO01BQ3JCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgIC5BcHAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICBmbGV4LWJhc2lzOiAxNSU7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDBkNGY7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQtc2lkZWJhciBzZWN0aW9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdC1zaWRlYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucm9vbS1tZW1iZXJzIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1zaWRlYmFyIC5yb29tIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAubmV3VXNlci1pbnB1dCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXNpZGViYXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucm9vbSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvb206aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb29tLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMUQ3NzE7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb29tLW5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWxpc3QgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnByZXNlbmNlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJlc2VuY2Uub25saW5lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtd2luZG93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtaGVhZGVyLCAuY2hhdC1mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1oZWFkZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXQtaGVhZGVyIGg0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1zZXNzaW9uIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItbWVzc2FnZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItbWVzc2FnZSBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItaWQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1mb290ZXIge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlLWlucHV0OmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZW5kLW1lc3NhZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAwZDRmO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMwMGQ0ZjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY3JlYXRlLXJvb20ge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNyZWF0ZS1yb29tIGJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlzLXByaXZhdGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXJvb21zIGg0LCAuam9pbmFibGUtcm9vbXMgaDQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"App\">\n  <aside class=\"sidebar left-sidebar\">\n    <section *ngIf=\"!currentUser.id\" class=\"join-chat\">\n      <h4>Join Chat</h4>\n      <form>\n        <input placeholder=\"Enter your username\" type=\"text\" name=\"userid\" [(ngModel)]=\"userId\" />\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"addUser()\">AddUser</button>\n      </form>\n    </section>\n    <section *ngIf=\"currentUser.id\" class=\"room-members\">\n      <h4>Room Users</h4>\n      <ul class=\"user-list\">\n        <li *ngFor=\"let user of roomUsers\">\n          <span class=\"presence {{ user.presence.state }}\"></span>\n          <span>{{ user.name }}</span>\n        </li>\n      </ul>\n    </section>\n    <form *ngIf=\"currentRoom.isPrivate\" >\n      <label for=\"user-name\">Add user to {{ currentRoom.name }}</label>\n      <input type=\"text\" class=\"newUser-input\" [(ngModel)]=\"newUser\" name=\"user-name\" id=\"user-name\" placeholder=\"Enter username\">    \n      <button type=\"button\" class=\"btn btn-success\" (click)=\"addUserToRoom()\">AddUser</button> \n    </form>\n  </aside>\n\n  <main class=\"chat-window\">\n    <header class=\"chat-header\">\n      <h4 *ngIf=\"!currentRoom.name; else roomName\">Chat</h4>\n      <ng-template #roomName>\n        <h4>{{ currentRoom.name }}</h4>\n      </ng-template>\n      <span class=\"participants\"></span>\n    </header>\n    <section class=\"chat-session\">\n      <ul class=\"message-list\">\n        <li class=\"user-message\" *ngFor=\"let message of messages\">\n          <span class=\"user-id\">{{ message.senderId }}</span>\n          <span>{{ message.text }}</span>\n        </li>\n      </ul>\n    </section>\n    <footer *ngIf=\"currentUser.id\" class=\"chat-footer\">\n      <form class=\"message-form\" (ngSubmit)='sendMessage()'>\n        <input class=\"message-input\" placeholder=\"Type a message. Hit Enter to send\" type=\"text\" name=\"message\" [(ngModel)]=\"newMessage\" />\n      </form>\n    </footer>\n  </main>\n  <aside class=\"sidebar right-sidebar\">\n    <section class=\"room-section\">\n      <section *ngIf=\"currentUser.id\" class=\"user-rooms\">\n          <h4>Rooms</h4>\n          <ul class=\"room-list\">\n            <li *ngFor=\"let room of userRooms\">\n              <div [class.active]=\"room.id==currentRoom.id\" (click)=\"connectToRoom(room.id)\" class=\"room\">\n                <span class=\"room-status\" *ngIf=\"room.isPrivate; else publicRoom\">🔒</span>\n                <ng-template #publicRoom>\n                  <span>🌐</span>\n                </ng-template>\n                <span class=\"room-name\">{{ room.name }}</span>\n              </div>\n            </li>\n          </ul>\n        </section>\n        <section *ngIf=\"joinableRooms.length > 0\" class=\"joinable-rooms\">\n            <h4>Joinable rooms</h4>\n            <ul class=\"room-list\">\n                <li *ngFor=\"let room of joinableRooms\">\n                  <div class=\"room\" (click)=\"joinRoom(room.id)\">\n                    <span class=\"room-status\" *ngIf=\"room.isPrivate; else publicRoom\">🔒</span>\n                    <ng-template #publicRoom>\n                      <span>🌐</span>\n                    </ng-template>\n                    <span class=\"room-name\">{{ room.name }}</span>\n                  </div>\n                </li>\n              </ul>\n        </section>\n    </section>\n    <section *ngIf=\"currentUser.id\" class=\"create-room\">\n      <form >\n        <input type=\"text\" [(ngModel)]=\"newRoom.name\" name=\"room-name\" id=\"room-name\" placeholder=\"Create a room\">\n        <label for=\"is-private\">\n            <input type=\"checkbox\" [(ngModel)]=\"newRoom.isPrivate\" name=\"is-private\" id=\"is-private\">\n            <span>Is this room private?</span>\n        </label>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"createRoom()\">create Room</button> \n      </form>\n    </section>\n  </aside>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2__);
// client/src/app/app.component.ts



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.userId = '';
        this.currentUser = {};
        this.messages = [];
        this.currentRoom = {};
        this.roomUsers = [];
        this.userRooms = [];
        this.newMessage = '';
        this.newRoom = {
            name: '',
            isPrivate: false
        };
        this.newUser = '';
        this.joinableRooms = [];
    }
    AppComponent.prototype.connectToRoom = function (id) {
        var _this = this;
        this.messages = [];
        var currentUser = this.currentUser;
        currentUser.subscribeToRoom({
            roomId: "" + id,
            messageLimit: 100,
            hooks: {
                onMessage: function (message) {
                    _this.messages.push(message);
                },
                onPresenceChanged: function () {
                    _this.roomUsers = _this.currentRoom.users.sort(function (a) {
                        if (a.presence.state === 'online')
                            return -1;
                        return 1;
                    });
                },
            },
        })
            .then(function (currentRoom) {
            _this.currentRoom = currentRoom;
            _this.roomUsers = currentRoom.users;
            _this.userRooms = currentUser.rooms;
        });
    };
    AppComponent.prototype.addUser = function () {
        var _this = this;
        var userId = this.userId;
        var tokenProvider = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default.a.TokenProvider({
            url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e79c9366-b586-4d8d-81ba-dec44fe56126/token'
        });
        var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_2___default.a.ChatManager({
            instanceLocator: "v1:us1:e79c9366-b586-4d8d-81ba-dec44fe56126",
            userId: userId,
            tokenProvider: tokenProvider
        });
        chatManager
            .connect()
            .then(function (currentUser) {
            _this.currentUser = currentUser;
            _this.connectToRoom(currentUser.rooms[0].id);
        })
            .catch(function (error) {
            console.error("error:", error);
        });
    };
    AppComponent.prototype.sendMessage = function () {
        var _a = this, newMessage = _a.newMessage, currentUser = _a.currentUser, currentRoom = _a.currentRoom;
        if (newMessage.trim() === '')
            return;
        currentUser.sendMessage({
            text: newMessage,
            roomId: "" + currentRoom.id,
        });
        this.newMessage = '';
    };
    AppComponent.prototype.createRoom = function () {
        var _this = this;
        var _a = this, _b = _a.newRoom, name = _b.name, isPrivate = _b.isPrivate, currentUser = _a.currentUser;
        if (name.trim() === '')
            return;
        currentUser.createRoom({
            name: name,
            private: isPrivate,
        }).then(function (room) {
            _this.connectToRoom(room.id);
            _this.newRoom = {
                name: '',
                isPrivate: false,
            };
        })
            .catch(function (err) {
            console.log("Error creating room " + err);
        });
    };
    AppComponent.prototype.getJoinableRooms = function () {
        var _this = this;
        var currentUser = this.currentUser;
        currentUser.getJoinableRooms()
            .then(function (rooms) {
            _this.joinableRooms = rooms;
        })
            .catch(function (err) {
            console.log("Error getting joinable rooms: " + err);
        });
    };
    AppComponent.prototype.joinRoom = function (id) {
        var currentUser = this.currentUser;
        currentUser.joinRoom({ roomId: id })
            .catch(function (err) {
            console.log("Error joining room " + id + ": " + err);
        });
    };
    AppComponent.prototype.addUserToRoom = function () {
        var _this = this;
        var _a = this, newUser = _a.newUser, currentUser = _a.currentUser, currentRoom = _a.currentRoom;
        currentUser.addUserToRoom({
            userId: newUser,
            roomId: currentRoom.id
        })
            .then(function (currentRoom) {
            _this.roomUsers = currentRoom.users;
        })
            .catch(function (err) {
            console.log("Error adding user: " + err);
        });
        this.newUser = '';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\demo\chatroom\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map