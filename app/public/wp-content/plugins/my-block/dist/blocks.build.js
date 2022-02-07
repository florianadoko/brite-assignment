/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(/*! react */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__wordpress_element__);\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n\n\n\n\n //Enables to switch the page through block settings in the editor.\n\n //useEffect listens to changes of the page state\n\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    _x = _wp$i18n._x; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar PlainText = wp.blockEditor.PlainText;\n\n\nregisterBlockType(\"cgb/block-my-block\", {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __(\"CGB Block\"), // Block title.\n\ticon: \"smiley\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"common\", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__(\"CGB Block\"), __(\"CGB Example\"), __(\"create-guten-block\")],\n\tattributes: {\n\t\tlabel: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"\"\n\t\t},\n\t\timg: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"\"\n\t\t},\n\t\turl: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"\"\n\t\t},\n\t\tcontent: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"\"\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className;\n\n\t\tvar optionsLinks = [];\n\n\t\tcgbGlobal.pages.forEach(function (page) {\n\t\t\treturn optionsLinks.push({\n\t\t\t\tvalue: page.ID,\n\t\t\t\tlabel: page.post_title,\n\t\t\t\timg: page.image,\n\t\t\t\turl: page.guid,\n\t\t\t\tcontent: page.post_content\n\t\t\t});\n\t\t});\n\n\t\tvar _useState = Object(__WEBPACK_IMPORTED_MODULE_5__wordpress_element__[\"useState\"])(optionsLinks[0]),\n\t\t    _useState2 = _slicedToArray(_useState, 2),\n\t\t    page = _useState2[0],\n\t\t    setPage = _useState2[1];\n\n\t\tvar _useState3 = Object(__WEBPACK_IMPORTED_MODULE_5__wordpress_element__[\"useState\"])(0),\n\t\t    _useState4 = _slicedToArray(_useState3, 2),\n\t\t    pageId = _useState4[0],\n\t\t    setPageId = _useState4[1];\n\n\t\t//listens to changes of the page state\n\n\n\t\tObject(__WEBPACK_IMPORTED_MODULE_5__wordpress_element__[\"useEffect\"])(function () {\n\t\t\tattributes.label = page.label;\n\t\t\tattributes.img = page.img;\n\t\t\tattributes.content = page.content;\n\t\t\tattributes.url = page.url;\n\t\t}, [page]);\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_2_react___default.a.Fragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: className },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ \"class\": \"overlay\" },\n\t\t\t\t\t\twp.element.createElement(\"img\", { src: page.img })\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"card-box\" },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"h\",\n\t\t\t\t\t\t\t{ className: \"heading\" },\n\t\t\t\t\t\t\tpage.label\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t\t{ className: \"content_intro\" },\n\t\t\t\t\t\t\tpage.content.replace(/<[^>]+>/g, \"\").substring(0, 188)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"a\",\n\t\t\t\t\t\t\t{ href: page.url, target: \"_blank\" },\n\t\t\t\t\t\t\t\"Read more\",\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\"svg\",\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\txmlns: \"http://www.w3.org/2000/svg\",\n\t\t\t\t\t\t\t\t\tstyle: ({ width: \"22px\" }, { height: \"22px\" }),\n\t\t\t\t\t\t\t\t\tfill: \"none\",\n\t\t\t\t\t\t\t\t\tviewBox: \"0 0 24 24\",\n\t\t\t\t\t\t\t\t\tstroke: \"currentColor\"\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\twp.element.createElement(\"path\", {\n\t\t\t\t\t\t\t\t\tstrokeLinecap: \"round\",\n\t\t\t\t\t\t\t\t\tstrokeLinejoin: \"round\",\n\t\t\t\t\t\t\t\t\tstrokeWidth: 2,\n\t\t\t\t\t\t\t\t\td: \"M17 8l4 4m0 0l-4 4m4-4H3\"\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_4__wordpress_block_editor__[\"useBlockProps\"])(),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_4__wordpress_block_editor__[\"InspectorControls\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"SelectControl\"], {\n\t\t\t\t\t\tlabel: _x(\"Choose page\"),\n\t\t\t\t\t\tvalue: pageId,\n\t\t\t\t\t\toptions: optionsLinks,\n\t\t\t\t\t\tonChange: function onChange(newPage) {\n\t\t\t\t\t\t\tsetPageId(newPage);\n\t\t\t\t\t\t\tsetPage(optionsLinks.find(function (item) {\n\t\t\t\t\t\t\t\treturn item.value == newPage;\n\t\t\t\t\t\t\t}));\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(PlainText, { value: page.label })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ \"class\": \"overlay\" },\n\t\t\t\twp.element.createElement(\"img\", { src: attributes.img })\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"card-box\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"h\",\n\t\t\t\t\t{ className: \"heading\" },\n\t\t\t\t\tattributes.label\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"p\",\n\t\t\t\t\t{ className: \"content_intro\" },\n\t\t\t\t\tattributes.content.replace(/<[^>]+>/g, \"\").substring(0, 200)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"a\",\n\t\t\t\t\t{ href: attributes.url, target: \"_blank\" },\n\t\t\t\t\t\"Read more\",\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"svg\",\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\txmlns: \"http://www.w3.org/2000/svg\",\n\t\t\t\t\t\t\tstyle: ({ width: \"24px\" }, { height: \"24px\" }),\n\t\t\t\t\t\t\tfill: \"none\",\n\t\t\t\t\t\t\tviewBox: \"0 0 24 24\",\n\t\t\t\t\t\t\tstroke: \"currentColor\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(\"path\", {\n\t\t\t\t\t\t\tstrokeLinecap: \"round\",\n\t\t\t\t\t\t\tstrokeLinejoin: \"round\",\n\t\t\t\t\t\t\tstrokeWidth: 2,\n\t\t\t\t\t\t\td: \"M17 8l4 4m0 0l-4 4m4-4H3\"\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdENvbnRyb2wgfSBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCI7IC8vRW5hYmxlcyB0byBzd2l0Y2ggdGhlIHBhZ2UgdGhyb3VnaCBibG9jayBzZXR0aW5ncyBpbiB0aGUgZWRpdG9yLlxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMsIHVzZUJsb2NrUHJvcHMgfSBmcm9tIFwiQHdvcmRwcmVzcy9ibG9jay1lZGl0b3JcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7IC8vdXNlRWZmZWN0IGxpc3RlbnMgdG8gY2hhbmdlcyBvZiB0aGUgcGFnZSBzdGF0ZVxuXG52YXIgX3dwJGkxOG4gPSB3cC5pMThuLFxuICAgIF9fID0gX3dwJGkxOG4uX18sXG4gICAgX3ggPSBfd3AkaTE4bi5feDsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIFBsYWluVGV4dCA9IHdwLmJsb2NrRWRpdG9yLlBsYWluVGV4dDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZShcImNnYi9ibG9jay1teS1ibG9ja1wiLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oXCJDR0IgQmxvY2tcIiksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiBcInNtaWxleVwiLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiBcImNvbW1vblwiLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXyhcIkNHQiBCbG9ja1wiKSwgX18oXCJDR0IgRXhhbXBsZVwiKSwgX18oXCJjcmVhdGUtZ3V0ZW4tYmxvY2tcIildLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bGFiZWw6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0fSxcblx0XHRpbWc6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0fSxcblx0XHR1cmw6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0fSxcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0ZGVmYXVsdDogXCJcIlxuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cblx0XHR2YXIgb3B0aW9uc0xpbmtzID0gW107XG5cblx0XHRjZ2JHbG9iYWwucGFnZXMuZm9yRWFjaChmdW5jdGlvbiAocGFnZSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNMaW5rcy5wdXNoKHtcblx0XHRcdFx0dmFsdWU6IHBhZ2UuSUQsXG5cdFx0XHRcdGxhYmVsOiBwYWdlLnBvc3RfdGl0bGUsXG5cdFx0XHRcdGltZzogcGFnZS5pbWFnZSxcblx0XHRcdFx0dXJsOiBwYWdlLmd1aWQsXG5cdFx0XHRcdGNvbnRlbnQ6IHBhZ2UucG9zdF9jb250ZW50XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShvcHRpb25zTGlua3NbMF0pLFxuXHRcdCAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcblx0XHQgICAgcGFnZSA9IF91c2VTdGF0ZTJbMF0sXG5cdFx0ICAgIHNldFBhZ2UgPSBfdXNlU3RhdGUyWzFdO1xuXG5cdFx0dmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSgwKSxcblx0XHQgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuXHRcdCAgICBwYWdlSWQgPSBfdXNlU3RhdGU0WzBdLFxuXHRcdCAgICBzZXRQYWdlSWQgPSBfdXNlU3RhdGU0WzFdO1xuXG5cdFx0Ly9saXN0ZW5zIHRvIGNoYW5nZXMgb2YgdGhlIHBhZ2Ugc3RhdGVcblxuXG5cdFx0dXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGF0dHJpYnV0ZXMubGFiZWwgPSBwYWdlLmxhYmVsO1xuXHRcdFx0YXR0cmlidXRlcy5pbWcgPSBwYWdlLmltZztcblx0XHRcdGF0dHJpYnV0ZXMuY29udGVudCA9IHBhZ2UuY29udGVudDtcblx0XHRcdGF0dHJpYnV0ZXMudXJsID0gcGFnZS51cmw7XG5cdFx0fSwgW3BhZ2VdKTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UmVhY3QuRnJhZ21lbnQsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdFx0eyBcImNsYXNzXCI6IFwib3ZlcmxheVwiIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHBhZ2UuaW1nIH0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY2FyZC1ib3hcIiB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcImhcIixcblx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiaGVhZGluZ1wiIH0sXG5cdFx0XHRcdFx0XHRcdHBhZ2UubGFiZWxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFwicFwiLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjb250ZW50X2ludHJvXCIgfSxcblx0XHRcdFx0XHRcdFx0cGFnZS5jb250ZW50LnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIikuc3Vic3RyaW5nKDAsIDE4OClcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHRcdFx0XHR7IGhyZWY6IHBhZ2UudXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcblx0XHRcdFx0XHRcdFx0XCJSZWFkIG1vcmVcIixcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFwic3ZnXCIsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyB3aWR0aDogXCIyMnB4XCIgfSwgeyBoZWlnaHQ6IFwiMjJweFwiIH0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbDogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aDogMixcblx0XHRcdFx0XHRcdFx0XHRcdGQ6IFwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCJcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHR1c2VCbG9ja1Byb3BzKCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogX3goXCJDaG9vc2UgcGFnZVwiKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBwYWdlSWQsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBvcHRpb25zTGlua3MsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3UGFnZSkge1xuXHRcdFx0XHRcdFx0XHRzZXRQYWdlSWQobmV3UGFnZSk7XG5cdFx0XHRcdFx0XHRcdHNldFBhZ2Uob3B0aW9uc0xpbmtzLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS52YWx1ZSA9PSBuZXdQYWdlO1xuXHRcdFx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwgeyB2YWx1ZTogcGFnZS5sYWJlbCB9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHR7IFwiY2xhc3NcIjogXCJvdmVybGF5XCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBhdHRyaWJ1dGVzLmltZyB9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY2FyZC1ib3hcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoXCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiaGVhZGluZ1wiIH0sXG5cdFx0XHRcdFx0YXR0cmlidXRlcy5sYWJlbFxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29udGVudF9pbnRyb1wiIH0sXG5cdFx0XHRcdFx0YXR0cmlidXRlcy5jb250ZW50LnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIikuc3Vic3RyaW5nKDAsIDIwMClcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHRcdHsgaHJlZjogYXR0cmlidXRlcy51cmwsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuXHRcdFx0XHRcdFwiUmVhZCBtb3JlXCIsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJzdmdcIixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0eG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRcdFx0XHRcdFx0c3R5bGU6ICh7IHdpZHRoOiBcIjI0cHhcIiB9LCB7IGhlaWdodDogXCIyNHB4XCIgfSksXG5cdFx0XHRcdFx0XHRcdGZpbGw6IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHR2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuXHRcdFx0XHRcdFx0XHRzdHJva2U6IFwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuXHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuXHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aDogMixcblx0XHRcdFx0XHRcdFx0ZDogXCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIlxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 5 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: SelectControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls, useBlockProps */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 7 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: useEffect, useState */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ })
/******/ ]);