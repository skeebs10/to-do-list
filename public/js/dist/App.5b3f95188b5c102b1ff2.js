/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/loader-runner/lib lazy recursive":
/*!**************************************************************!*\
  !*** ./node_modules/loader-runner/lib lazy namespace object ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nmodule.exports = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./node_modules/loader-runner/lib lazy recursive\";\n\n//# sourceURL=webpack:///./node_modules/loader-runner/lib_lazy_namespace_object?");

/***/ }),

/***/ "./node_modules/node-libs-browser/mock sync recursive ^\\.\\/.*$":
/*!***********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock sync ^\.\/.*$ ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./buffer\": \"./node_modules/node-libs-browser/mock/buffer.js\",\n\t\"./buffer.js\": \"./node_modules/node-libs-browser/mock/buffer.js\",\n\t\"./console\": \"./node_modules/node-libs-browser/mock/console.js\",\n\t\"./console.js\": \"./node_modules/node-libs-browser/mock/console.js\",\n\t\"./dns\": \"./node_modules/node-libs-browser/mock/dns.js\",\n\t\"./dns.js\": \"./node_modules/node-libs-browser/mock/dns.js\",\n\t\"./empty\": \"./node_modules/node-libs-browser/mock/empty.js\",\n\t\"./empty.js\": \"./node_modules/node-libs-browser/mock/empty.js\",\n\t\"./net\": \"./node_modules/node-libs-browser/mock/net.js\",\n\t\"./net.js\": \"./node_modules/node-libs-browser/mock/net.js\",\n\t\"./process\": \"./node_modules/node-libs-browser/mock/process.js\",\n\t\"./process.js\": \"./node_modules/node-libs-browser/mock/process.js\",\n\t\"./punycode\": \"./node_modules/node-libs-browser/mock/punycode.js\",\n\t\"./punycode.js\": \"./node_modules/node-libs-browser/mock/punycode.js\",\n\t\"./tls\": \"./node_modules/node-libs-browser/mock/tls.js\",\n\t\"./tls.js\": \"./node_modules/node-libs-browser/mock/tls.js\",\n\t\"./tty\": \"./node_modules/node-libs-browser/mock/tty.js\",\n\t\"./tty.js\": \"./node_modules/node-libs-browser/mock/tty.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/node-libs-browser/mock sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/node-libs-browser/mock_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./node_modules/terser-webpack-plugin/dist sync recursive":
/*!******************************************************!*\
  !*** ./node_modules/terser-webpack-plugin/dist sync ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/terser-webpack-plugin/dist sync recursive\";\n\n//# sourceURL=webpack:///./node_modules/terser-webpack-plugin/dist_sync?");

/***/ }),

/***/ "./node_modules/webpack/lib/node sync recursive ^\\.\\/.*$":
/*!****************************************!*\
  !*** (webpack)/lib/node sync ^\.\/.*$ ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./NodeChunkTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeChunkTemplatePlugin.js\",\n\t\"./NodeChunkTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeChunkTemplatePlugin.js\",\n\t\"./NodeEnvironmentPlugin\": \"./node_modules/webpack/lib/node/NodeEnvironmentPlugin.js\",\n\t\"./NodeEnvironmentPlugin.js\": \"./node_modules/webpack/lib/node/NodeEnvironmentPlugin.js\",\n\t\"./NodeHotUpdateChunkTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js\",\n\t\"./NodeHotUpdateChunkTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js\",\n\t\"./NodeMainTemplate.runtime\": \"./node_modules/webpack/lib/node/NodeMainTemplate.runtime.js\",\n\t\"./NodeMainTemplate.runtime.js\": \"./node_modules/webpack/lib/node/NodeMainTemplate.runtime.js\",\n\t\"./NodeMainTemplateAsync.runtime\": \"./node_modules/webpack/lib/node/NodeMainTemplateAsync.runtime.js\",\n\t\"./NodeMainTemplateAsync.runtime.js\": \"./node_modules/webpack/lib/node/NodeMainTemplateAsync.runtime.js\",\n\t\"./NodeMainTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeMainTemplatePlugin.js\",\n\t\"./NodeMainTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeMainTemplatePlugin.js\",\n\t\"./NodeOutputFileSystem\": \"./node_modules/webpack/lib/node/NodeOutputFileSystem.js\",\n\t\"./NodeOutputFileSystem.js\": \"./node_modules/webpack/lib/node/NodeOutputFileSystem.js\",\n\t\"./NodeSourcePlugin\": \"./node_modules/webpack/lib/node/NodeSourcePlugin.js\",\n\t\"./NodeSourcePlugin.js\": \"./node_modules/webpack/lib/node/NodeSourcePlugin.js\",\n\t\"./NodeTargetPlugin\": \"./node_modules/webpack/lib/node/NodeTargetPlugin.js\",\n\t\"./NodeTargetPlugin.js\": \"./node_modules/webpack/lib/node/NodeTargetPlugin.js\",\n\t\"./NodeTemplatePlugin\": \"./node_modules/webpack/lib/node/NodeTemplatePlugin.js\",\n\t\"./NodeTemplatePlugin.js\": \"./node_modules/webpack/lib/node/NodeTemplatePlugin.js\",\n\t\"./NodeWatchFileSystem\": \"./node_modules/webpack/lib/node/NodeWatchFileSystem.js\",\n\t\"./NodeWatchFileSystem.js\": \"./node_modules/webpack/lib/node/NodeWatchFileSystem.js\",\n\t\"./ReadFileCompileWasmTemplatePlugin\": \"./node_modules/webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js\",\n\t\"./ReadFileCompileWasmTemplatePlugin.js\": \"./node_modules/webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js\",\n\t\"./nodeConsole\": \"./node_modules/webpack/lib/node/nodeConsole.js\",\n\t\"./nodeConsole.js\": \"./node_modules/webpack/lib/node/nodeConsole.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/lib/node sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///(webpack)/lib/node_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./node_modules/worker-farm/lib/child sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/worker-farm/lib/child sync ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/worker-farm/lib/child sync recursive\";\n\n//# sourceURL=webpack:///./node_modules/worker-farm/lib/child_sync?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoForm */ \"./src/components/TodoForm.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/components/TodoList.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TodoList__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"todo-app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Tasks for the Day\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_2___default.a, null));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/TodoForm.js":
/*!************************************!*\
  !*** ./src/components/TodoForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"./node_modules/webpack/lib/webpack.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction TodoForm(props) {\n  const [input, setInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleChange = e => {\n    setInput(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    props.onSubmit({\n      id: Math.floor(Math.random() * 1000),\n      text: input\n    });\n    setInput('');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"todo-form\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Add a Task\",\n    value: input,\n    name: \"text\",\n    className: \"todo-input\",\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"todo-button\"\n  }, \"Add Task\"));\n}\n\n/* unused harmony default export */ var _unused_webpack_default_export = (TodoForm);\n\n//# sourceURL=webpack:///./src/components/TodoForm.js?");

/***/ }),

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/nataliaskiba/code/list/list/src/components/TodoList.js: Identifier 'completeTodo' has already been declared (32:7)\\n\\n  30 | \\t};\\n  31 | \\n> 32 | \\tconst completeTodo = id => {\\n     | \\t      ^\\n  33 | \\t\\tlet updatedTodos = todos.map(todos => {\\n  34 | \\t\\t\\tif (todo.id === id) {\\n  35 | \\t\\t\\t\\ttodo.isComplete = !todo.isComplete;\\n    at Object._raise (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:748:17)\\n    at Object.raiseWithData (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:741:17)\\n    at Object.raise (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:735:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:4919:12)\\n    at ScopeHandler.declareName (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:4885:12)\\n    at Object.checkLVal (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:9590:24)\\n    at Object.parseVarId (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12361:10)\\n    at Object.parseVar (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12336:12)\\n    at Object.parseVarStatement (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12151:10)\\n    at Object.parseStatementContent (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11743:21)\\n    at Object.parseStatement (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11676:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12258:25)\\n    at Object.parseBlockBody (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12249:10)\\n    at Object.parseBlock (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12233:10)\\n    at Object.parseFunctionBody (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11221:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11205:10)\\n    at /Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12391:12\\n    at Object.withTopicForbiddingContext (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11516:14)\\n    at Object.parseFunction (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12390:10)\\n    at Object.parseFunctionStatement (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12024:17)\\n    at Object.parseStatementContent (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11714:21)\\n    at Object.parseStatement (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11676:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12258:25)\\n    at Object.parseBlockBody (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:12249:10)\\n    at Object.parseTopLevel (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:11607:10)\\n    at Object.parse (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:13415:10)\\n    at parse (/Users/nataliaskiba/code/list/list/node_modules/@babel/parser/lib/index.js:13468:38)\\n    at parser (/Users/nataliaskiba/code/list/list/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/nataliaskiba/code/list/list/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\");\n\n//# sourceURL=webpack:///./src/components/TodoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 14:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 15:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ })

/******/ });