;/*!examples/index.jsx*/
define('ca626e1', function(require, exports, module) {

  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  /**
   * @file entry of this example.
   * @author liaoxuezhi@cloud.com
   */
  var React = require("node_modules/react/index");
  var react_dom_1 = require("node_modules/react-dom/index");
  var App_1 = require("135e0c7");
  function bootstrap(mountTo, initalState) {
      react_dom_1.render(React.createElement(App_1.default, null), mountTo);
  }
  exports.bootstrap = bootstrap;
  

});

;/*!src/components/Editor.tsx*/
define("997c87d",function(s,a){"use strict";function i(s){return s.replace(/\.js$/,"")}function e(s,a,i){return a.editor.create(s,n.__assign({autoIndent:!0,formatOnType:!0,formatOnPaste:!0,selectOnLineNumbers:!0,scrollBeyondLastLine:!1,folding:!0,minimap:{enabled:!1}},i))}Object.defineProperty(a,"__esModule",{value:!0});var n=s("node_modules/tslib/tslib"),o=s("node_modules/react/index"),t=s("node_modules/classnames/index"),r=s("256b65d"),c={url:"vs/loader.js","vs/nls":{availableLanguages:{"*":"zh-cn"}},paths:{}};try{c.url="/amis/n/monaco-editor/min/vs/loader.js",c.paths={vs:i("/amis/n/monaco-editor/min/vs/editor/editor.main.js").replace(/\/vs\/.*$/,""),"vs/base/worker/workerMain":i("/amis/n/monaco-editor/min/vs/base/worker/workerMain.js"),"vs/basic-languages/apex/apex":i("/amis/n/monaco-editor/min/vs/basic-languages/apex/apex.js"),"vs/basic-languages/azcli/azcli":i("/amis/n/monaco-editor/min/vs/basic-languages/azcli/azcli.js"),"vs/basic-languages/clojure/clojure":i("/amis/n/monaco-editor/min/vs/basic-languages/clojure/clojure.js"),"vs/basic-languages/bat/bat":i("/amis/n/monaco-editor/min/vs/basic-languages/bat/bat.js"),"vs/basic-languages/coffee/coffee":i("/amis/n/monaco-editor/min/vs/basic-languages/coffee/coffee.js"),"vs/basic-languages/cpp/cpp":i("/amis/n/monaco-editor/min/vs/basic-languages/cpp/cpp.js"),"vs/basic-languages/csharp/csharp":i("/amis/n/monaco-editor/min/vs/basic-languages/csharp/csharp.js"),"vs/basic-languages/css/css":i("/amis/n/monaco-editor/min/vs/basic-languages/css/css.js"),"vs/basic-languages/dockerfile/dockerfile":i("/amis/n/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile.js"),"vs/basic-languages/fsharp/fsharp":i("/amis/n/monaco-editor/min/vs/basic-languages/fsharp/fsharp.js"),"vs/basic-languages/go/go":i("/amis/n/monaco-editor/min/vs/basic-languages/go/go.js"),"vs/basic-languages/handlebars/handlebars":i("/amis/n/monaco-editor/min/vs/basic-languages/handlebars/handlebars.js"),"vs/basic-languages/html/html":i("/amis/n/monaco-editor/min/vs/basic-languages/html/html.js"),"vs/basic-languages/ini/ini":i("/amis/n/monaco-editor/min/vs/basic-languages/ini/ini.js"),"vs/basic-languages/java/java":i("/amis/n/monaco-editor/min/vs/basic-languages/java/java.js"),"vs/basic-languages/javascript/javascript":i("/amis/n/monaco-editor/min/vs/basic-languages/javascript/javascript.js"),"vs/basic-languages/less/less":i("/amis/n/monaco-editor/min/vs/basic-languages/less/less.js"),"vs/basic-languages/lua/lua":i("/amis/n/monaco-editor/min/vs/basic-languages/lua/lua.js"),"vs/basic-languages/markdown/markdown":i("/amis/n/monaco-editor/min/vs/basic-languages/markdown/markdown.js"),"vs/basic-languages/msdax/msdax":i("/amis/n/monaco-editor/min/vs/basic-languages/msdax/msdax.js"),"vs/basic-languages/objective-c/objective-c":i("/amis/n/monaco-editor/min/vs/basic-languages/objective-c/objective-c.js"),"vs/basic-languages/php/php":i("/amis/n/monaco-editor/min/vs/basic-languages/php/php.js"),"vs/basic-languages/postiats/postiats":i("/amis/n/monaco-editor/min/vs/basic-languages/postiats/postiats.js"),"vs/basic-languages/powershell/powershell":i("/amis/n/monaco-editor/min/vs/basic-languages/powershell/powershell.js"),"vs/basic-languages/pug/pug":i("/amis/n/monaco-editor/min/vs/basic-languages/pug/pug.js"),"vs/basic-languages/python/python":i("/amis/n/monaco-editor/min/vs/basic-languages/python/python.js"),"vs/basic-languages/r/r":i("/amis/n/monaco-editor/min/vs/basic-languages/r/r.js"),"vs/basic-languages/razor/razor":i("/amis/n/monaco-editor/min/vs/basic-languages/razor/razor.js"),"vs/basic-languages/redis/redis":i("/amis/n/monaco-editor/min/vs/basic-languages/redis/redis.js"),"vs/basic-languages/redshift/redshift":i("/amis/n/monaco-editor/min/vs/basic-languages/redshift/redshift.js"),"vs/basic-languages/ruby/ruby":i("/amis/n/monaco-editor/min/vs/basic-languages/ruby/ruby.js"),"vs/basic-languages/rust/rust":i("/amis/n/monaco-editor/min/vs/basic-languages/rust/rust.js"),"vs/basic-languages/sb/sb":i("/amis/n/monaco-editor/min/vs/basic-languages/sb/sb.js"),"vs/basic-languages/scheme/scheme":i("/amis/n/monaco-editor/min/vs/basic-languages/scheme/scheme.js"),"vs/basic-languages/scss/scss":i("/amis/n/monaco-editor/min/vs/basic-languages/scss/scss.js"),"vs/basic-languages/shell/shell":i("/amis/n/monaco-editor/min/vs/basic-languages/shell/shell.js"),"vs/basic-languages/solidity/solidity":i("/amis/n/monaco-editor/min/vs/basic-languages/solidity/solidity.js"),"vs/basic-languages/sql/sql":i("/amis/n/monaco-editor/min/vs/basic-languages/sql/sql.js"),"vs/basic-languages/st/st":i("/amis/n/monaco-editor/min/vs/basic-languages/st/st.js"),"vs/basic-languages/swift/swift":i("/amis/n/monaco-editor/min/vs/basic-languages/swift/swift.js"),"vs/basic-languages/typescript/typescript":i("/amis/n/monaco-editor/min/vs/basic-languages/typescript/typescript.js"),"vs/basic-languages/vb/vb":i("/amis/n/monaco-editor/min/vs/basic-languages/vb/vb.js"),"vs/basic-languages/xml/xml":i("/amis/n/monaco-editor/min/vs/basic-languages/xml/xml.js"),"vs/basic-languages/yaml/yaml":i("/amis/n/monaco-editor/min/vs/basic-languages/yaml/yaml.js"),"vs/editor/editor.main":i("/amis/n/monaco-editor/min/vs/editor/editor.main.js"),"vs/editor/editor.main.css":i("/amis/n/monaco-editor/min/vs/editor/editor.main_5c14a03.css"),"vs/editor/editor.main.nls":i("/amis/n/monaco-editor/min/vs/editor/editor.main.nls.js"),"vs/editor/editor.main.nls.zh-cn":i("/amis/n/monaco-editor/min/vs/editor/editor.main.nls.zh-cn.js"),"vs/language/typescript/tsMode":i("/amis/n/monaco-editor/min/vs/language/typescript/tsMode.js"),"vs/language/typescript/tsWorker":i("/amis/n/monaco-editor/min/vs/language/typescript/tsWorker.js"),"vs/language/json/jsonMode":i("/amis/n/monaco-editor/min/vs/language/json/jsonMode.js"),"vs/language/json/jsonWorker":i("/amis/n/monaco-editor/min/vs/language/json/jsonWorker.js"),"vs/language/html/htmlMode":i("/amis/n/monaco-editor/min/vs/language/html/htmlMode.js"),"vs/language/html/htmlWorker":i("/amis/n/monaco-editor/min/vs/language/html/htmlWorker.js"),"vs/language/css/cssMode":i("/amis/n/monaco-editor/min/vs/language/css/cssMode.js"),"vs/language/css/cssWorker":i("/amis/n/monaco-editor/min/vs/language/css/cssWorker.js")},/^(https?:)?\/\//.test(c.paths.vs)&&(window.MonacoEnvironment={getWorkerUrl:function(){return"data:text/javascript;charset=utf-8,"+encodeURIComponent("\n                self.MonacoEnvironment = {\n                    baseUrl: '"+c.paths.vs+"',\n                    paths: "+JSON.stringify(c.paths)+"\n                };\n                importScripts('/amis/n/monaco-editor/min/vs/base/worker/workerMain.js');")}})}catch(l){}a.monacoFactory=e;var g=function(s){function a(a){var i=s.call(this,a)||this;return i.disposes=[],i.wrapperRef=i.wrapperRef.bind(i),i.currentValue=a.value,i}return n.__extends(a,s),a.prototype.componentWillReceiveProps=function(s){this.props.options.readOnly!==s.options.readOnly&&this.editor&&this.editor.updateOptions&&this.editor.updateOptions(s.options)},a.prototype.componentDidUpdate=function(){if(this.props.value!==this.currentValue&&this.editor){var s=String(this.props.value);if("json"===this.props.language)try{s=JSON.stringify(JSON.parse(s),null,4)}catch(a){}this.preventTriggerChangeEvent=!0,this.editor.setValue&&this.editor.setValue(s),this.preventTriggerChangeEvent=!1}},a.prototype.componentWillUnmount=function(){this.disposes.forEach(function(s){var a=s.dispose;return a()}),this.disposes=[]},a.prototype.wrapperRef=function(s){if(this.container=s,s)this.loadMonaco();else try{this.disposes.forEach(function(s){var a=s.dispose;return a()}),this.disposes=[],this.editor&&(this.editor.getModel().dispose(),this.editor.dispose()),this.editor=null}catch(a){}},a.prototype.loadMonaco=function(){var s=this,a=this.props.requireConfig,i=a.url||"vs/loader.js",e=window.monacaAmd||(window.monacaAmd={document:window.document}),n=function(){if(e.__REACT_MONACO_EDITOR_LOADER_ISPENDING__&&a.paths&&a.paths.vs&&e.require.config(a),e.require(["vs/editor/editor.main","vs/editor/editor.main.nls.zh-cn"],function(){s.initMonaco()}),e.__REACT_MONACO_EDITOR_LOADER_ISPENDING__){e.__REACT_MONACO_EDITOR_LOADER_ISPENDING__=!1;var i=e.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__;if(i&&i.length)for(var n=i.shift();n;)n.fn.call(n.context),n=i.shift()}};if(e.__REACT_MONACO_EDITOR_LOADER_ISPENDING__)e.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__=e.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__||[],e.__REACT_MONACO_EDITOR_LOADER_CALLBACKS__.push({context:this,fn:n});else if("undefined"==typeof e.require){var o=e.document.createElement("script");o.type="text/javascript",o.src=i,o.addEventListener("load",n),e.document.body.appendChild(o),e.__REACT_MONACO_EDITOR_LOADER_ISPENDING__=!0}else n()},a.prototype.initMonaco=function(){var s=null!==this.props.value?this.props.value:this.props.defaultValue,a=this.props,i=a.language,o=a.editorTheme,t=a.options,r=a.editorFactory,c=this.container;if(c){var l=this.props.context||window,g=l.monaco||window.monaco;if("undefined"!=typeof g){if(this.editorWillMount(g),"json"===this.props.language)try{s=JSON.stringify("string"==typeof s?JSON.parse(s):s,null,4)}catch(m){}var d=r||e;this.editor=d(c,g,n.__assign({},t,{automaticLayout:!0,value:s,language:i,editorTheme:o,theme:o})),this.editorDidMount(this.editor,g)}}},a.prototype.editorWillMount=function(s){var a=this.props.editorWillMount;a&&a(s)},a.prototype.editorDidMount=function(s,a){var i=this,e=this.props,n=e.editorDidMount,o=e.onChange,t=e.onFocus,r=e.onBlur;n&&n(s,a),s.onDidChangeModelContent&&this.disposes.push(s.onDidChangeModelContent(function(a){var e=s.getValue();i.currentValue=e,!i.preventTriggerChangeEvent&&o&&o(e,a)})),t&&s.onDidFocusEditorWidget&&this.disposes.push(s.onDidFocusEditorWidget(t)),r&&s.onDidBlurEditorWidget&&this.disposes.push(s.onDidBlurEditorWidget(r))},a.prototype.render=function(){var s=this.props,a=s.className,i=s.classPrefix,e=s.width,n=s.height,r=this.props.style||{};return r.width=e,r.height=n,o.createElement("div",{className:t(i+"MonacoEditor",a),style:r,ref:this.wrapperRef})},a.defaultProps={requireConfig:c,language:"javascript",editorTheme:"vs",width:"100%",height:"100%",options:{}},a}(o.Component);a.Editor=g,a.default=r.themeable(g)});
;/*!examples/components/Play.jsx*/
define('9b1667d', function(require, exports, module) {

  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var tslib_1 = require("node_modules/tslib/tslib");
  var React = require("node_modules/react/index");
  var Toast_1 = require("6ae88e0");
  var index_1 = require("d019970");
  var axios = require("node_modules/axios/index");
  var react_frame_component_1 = require("node_modules/react-frame-component/lib/index");
  var stripJsonComments = require("node_modules/strip-json-comments/index");
  var Editor_1 = require("997c87d");
  var DEFAULT_CONTENT = "{\n    \"$schema\": \"https://houtai.baidu.com/v2/schemas/page.json#\",\n    \"type\": \"page\",\n    \"title\": \"Title\",\n    \"body\": \"Body\",\n    \"aside\": \"Aside\",\n    \"toolbar\": \"Toolbar\"\n}";
  var scopes = {
      'none': "",
      'body': "{\n        \"type\": \"page\",\n        \"body\": SCHEMA_PLACEHOLDER\n    }",
      'form': "{\n        \"type\": \"page\",\n        \"body\": {\n            \"title\": \"\",\n            \"type\": \"form\",\n            \"autoFocus\": false,\n            \"api\": \"https://houtai.baidu.com/api/mock2/saveForm?waitSeconds=1\",\n            \"mode\": \"horizontal\",\n            \"controls\": SCHEMA_PLACEHOLDER,\n            \"submitText\": null,\n            \"actions\": []\n        }\n    }",
      'form-item': "{\n        \"type\": \"page\",\n        \"body\": {\n            \"title\": \"\",\n            \"type\": \"form\",\n            \"mode\": \"horizontal\",\n            \"autoFocus\": false,\n            \"controls\": [\n                SCHEMA_PLACEHOLDER\n            ],\n            \"submitText\": null,\n            \"actions\": []\n        }\n    }"
  };
  var PlayGround = /** @class */ (function (_super) {
      tslib_1.__extends(PlayGround, _super);
      function PlayGround(props) {
          var _this = _super.call(this, props) || this;
          _this.state = null;
          _this.startX = 0;
          _this.oldContents = '';
          var schema = _this.buildSchema(props.code || DEFAULT_CONTENT, props);
          _this.state = {
              asideWidth: props.asideWidth || Math.max(300, window.innerWidth * 0.3),
              schema: schema,
              schemaCode: JSON.stringify(schema, null, 2)
          };
          _this.handleMouseDown = _this.handleMouseDown.bind(_this);
          _this.handleMouseMove = _this.handleMouseMove.bind(_this);
          _this.handleMouseUp = _this.handleMouseUp.bind(_this);
          _this.removeWindowEvents = _this.removeWindowEvents.bind(_this);
          _this.handleChange = _this.handleChange.bind(_this);
          _this.schemaProps = {
              style: {
                  height: '100%'
              }
          };
          _this.env = {
              updateLocation: function () {
              },
              fetcher: function (config) {
                  config = tslib_1.__assign({ dataType: 'json' }, config);
                  if (config.dataType === 'json' && config.data) {
                      config.data = JSON.stringify(config.data);
                      config.headers = config.headers || {};
                      config.headers['Content-Type'] = 'application/json';
                  }
                  return axios[config.method](config.url, config.data, config);
              },
              notify: function (type, msg) { return Toast_1.toast[type] ? Toast_1.toast[type](msg, type === 'error' ? '系统错误' : '系统消息') : console.warn('[Notify]', type, msg); }
          };
          var links = [].slice.call(document.head.querySelectorAll('link,style')).map(function (item) { return item.outerHTML; });
          _this.frameTemplate = "<!DOCTYPE html><html><head>" + links.join('') + "</head><body><div></div></body></html>";
          _this.handleEditorMount = _this.handleEditorMount.bind(_this);
          return _this;
      }
      PlayGround.prototype.componentWillReceiveProps = function (nextprops) {
          var props = this.props;
          if (props.code !== nextprops.code) {
              var schema = this.buildSchema(nextprops.code || DEFAULT_CONTENT, nextprops);
              this.setState({
                  schema: schema,
                  schemaCode: JSON.stringify(schema, null, 2)
              });
          }
      };
      PlayGround.prototype.componentDidMount = function () {
          this.props.setAsideFolded && this.props.setAsideFolded(true);
      };
      PlayGround.prototype.componentWillUnmount = function () {
          this.props.setAsideFolded && this.props.setAsideFolded(false);
      };
      PlayGround.prototype.buildSchema = function (schemaContent, props) {
          if (props === void 0) { props = this.props; }
          var query = props.location.query;
          try {
              var scope = query.scope || props.scope;
              if (scope && scopes[scope]) {
                  schemaContent = scopes[scope].replace('SCHEMA_PLACEHOLDER', schemaContent);
              }
              schemaContent = stripJsonComments(schemaContent).replace(/('|")raw:/g, '$1'); // 去掉注释
              return JSON.parse(schemaContent);
          }
          catch (e) {
              console.error(this.formatMessage(e.message, schemaContent));
          }
          return {};
      };
      PlayGround.prototype.formatMessage = function (message, input) {
          if (/position\s?(\d+)$/.test(message)) {
              var lines = input.substring(0, parseInt(RegExp.$1, 10)).split(/\n|\r\n|\r/);
              message = "Json \u8BED\u6CD5\u9519\u8BEF\uFF0C\u8BF7\u68C0\u6D4B\u3002\u51FA\u9519\u4F4D\u7F6E\uFF1A" + lines.length + "\uFF0C\u5217\uFF1A" + lines[lines.length - 1].length + "\u3002";
          }
          return message;
      };
      PlayGround.prototype.renderPreview = function () {
          var schema = this.state.schema;
          if (!this.props.useIFrame) {
              return index_1.render(schema, this.schemaProps, this.env);
          }
          return (React.createElement(react_frame_component_1.default, { width: "100%", height: "100%", frameBorder: 0, initialContent: this.frameTemplate }, index_1.render(schema, this.schemaProps, this.env)));
      };
      PlayGround.prototype.handleEditorMount = function (editor, monaco) {
          monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
              enableSchemaRequest: true,
              validate: true
          });
      };
      PlayGround.prototype.handleChange = function (value) {
          this.setState({
              schemaCode: value
          });
          try {
              var schema = JSON.parse(value);
              this.setState({
                  schema: schema
              });
          }
          catch (e) {
              //ignore
          }
      };
      PlayGround.prototype.handleMouseDown = function (e) {
          this.startX = e.clientX;
          this.startWidth = this.state.asideWidth;
          // this.startPosition.y = e.clientY;
          window.addEventListener('mouseup', this.handleMouseUp);
          window.addEventListener('mousemove', this.handleMouseMove);
          return false;
      };
      PlayGround.prototype.handleMouseMove = function (e) {
          var diff = this.startX - e.clientX;
          e.preventDefault();
          this.setState({
              asideWidth: Math.min(800, Math.max(200, this.startWidth + diff))
          });
      };
      PlayGround.prototype.handleMouseUp = function () {
          this.removeWindowEvents();
      };
      PlayGround.prototype.removeWindowEvents = function () {
          window.removeEventListener('mouseup', this.handleMouseUp);
          window.removeEventListener('mousemove', this.handleMouseMove);
      };
      PlayGround.prototype.renderEditor = function () {
          return (React.createElement(Editor_1.default, { value: this.state.schemaCode, onChange: this.handleChange, language: "json", editorDidMount: this.handleEditorMount }));
      };
      PlayGround.prototype.render = function () {
          var vertical = this.props.vertical;
          if (vertical) {
              return (React.createElement("div", { className: "vbox" },
                  React.createElement("div", { className: "row-row" },
                      React.createElement("div", { className: "cell pos-rlt" },
                          React.createElement("div", { className: "scroll-y h-full pos-abt w-full" }, this.renderPreview()))),
                  React.createElement("div", { className: "row-row", style: { height: 200 } },
                      React.createElement("div", { className: "cell" }, this.renderEditor()))));
          }
          return (React.createElement("div", { style: {
                  position: "absolute",
                  top: 50,
                  bottom: 0
              } },
              React.createElement("div", { className: "hbox" },
                  React.createElement("div", { className: "col pos-rlt" },
                      React.createElement("div", { className: "scroll-y h-full pos-abt w-full" }, this.renderPreview())),
                  React.createElement("div", { className: "col bg-light lter b-l bg-auto pos-rlt", style: { width: this.state.asideWidth } },
                      React.createElement("div", { className: "resizer", onMouseDown: this.handleMouseDown }),
                      this.renderEditor()))));
      };
      PlayGround.defaultProps = {
          useIFrame: false,
          vertical: false
      };
      return PlayGround;
  }(React.Component));
  exports.default = PlayGround;
  

});

;/*!src/components/RichText.tsx*/
define("1e5b785",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("node_modules/tslib/tslib"),n=e("node_modules/react/index"),o=e("node_modules/jquery/dist/jquery");[e("node_modules/froala-editor/js/froala_editor.min"),e("node_modules/froala-editor/js/plugins/align.min"),e("node_modules/froala-editor/js/plugins/colors.min"),e("node_modules/froala-editor/js/plugins/font_family.min"),e("node_modules/froala-editor/js/plugins/font_size.min"),e("node_modules/froala-editor/js/plugins/image.min"),e("node_modules/froala-editor/js/plugins/image_manager.min"),e("node_modules/froala-editor/js/plugins/inline_style.min"),e("node_modules/froala-editor/js/plugins/line_breaker.min"),e("node_modules/froala-editor/js/plugins/link.min"),e("node_modules/froala-editor/js/plugins/lists.min"),e("node_modules/froala-editor/js/plugins/paragraph_format.min"),e("node_modules/froala-editor/js/plugins/paragraph_style.min"),e("node_modules/froala-editor/js/plugins/quote.min"),e("node_modules/froala-editor/js/plugins/save.min"),e("node_modules/froala-editor/js/plugins/table.min"),e("node_modules/froala-editor/js/plugins/code_view.min"),e("node_modules/froala-editor/js/plugins/fullscreen.min"),e("node_modules/froala-editor/js/plugins/video.min")].forEach(function(e){return e()});var a=function(e){function t(t){var i=e.call(this,t)||this;return i.listeningEvents=[],i.$element=null,i.$editor=null,i.config={immediateReactModelUpdate:!1,reactIgnoreAttrs:null},i.editorInitialized=!1,i.oldModel=null,i.textareaRef=i.textareaRef.bind(i),i}return i.__extends(t,e),t.prototype.componentDidUpdate=function(){JSON.stringify(this.oldModel)!=JSON.stringify(this.props.model)&&this.setContent()},t.prototype.textareaRef=function(e){e?this.createEditor(e):this.destroyEditor()},t.prototype.createEditor=function(e){this.editorInitialized||(this.config=this.props.config||this.config,this.$element=o(e),this.setContent(!0),this.registerEvents(),this.$editor=this.$element.froalaEditor(this.config).data("froala.editor").$el,this.initListeners(),this.editorInitialized=!0)},t.prototype.setContent=function(e){void 0===e&&(e=!1),(this.editorInitialized||e)&&(this.props.model||""==this.props.model)&&(this.oldModel=this.props.model,this.setNormalTagContent(e))},t.prototype.setNormalTagContent=function(e){function t(){i.$element.froalaEditor("html.set",i.props.model||"",!0),i.$element.froalaEditor("undo.reset"),i.$element.froalaEditor("undo.saveStep")}var i=this;e?this.registerEvent(this.$element,"froalaEditor.initialized",t):t()},t.prototype.getEditor=function(){return this.$element?this.$element.froalaEditor.bind(this.$element):null},t.prototype.updateModel=function(){if(this.props.onModelChange){var e="",t=this.$element.froalaEditor("html.get");"string"==typeof t&&(e=t),this.oldModel=e,this.props.onModelChange(e)}},t.prototype.initListeners=function(){var e=this;this.registerEvent(this.$element,"froalaEditor.contentChanged",function(){e.updateModel()}),this.config.immediateReactModelUpdate&&this.registerEvent(this.$editor,"keyup",function(){e.updateModel()})},t.prototype.registerEvent=function(e,t,i){e&&t&&i&&(this.listeningEvents.push(t),e.on(t,i))},t.prototype.registerEvents=function(){var e=this.config.events;if(e)for(var t in e)e.hasOwnProperty(t)&&this.registerEvent(this.$element,t,e[t])},t.prototype.destroyEditor=function(){this.$element&&(this.listeningEvents&&this.$element.off(this.listeningEvents.join(" ")),this.$editor.off("keyup"),this.$element.froalaEditor("destroy"),this.listeningEvents.length=0,this.$element=null,this.editorInitialized=!1)},t.prototype.render=function(){return n.createElement("textarea",{ref:this.textareaRef})},t}(n.Component);t.default=a,o.FE.VIDEO_PROVIDERS=[{test_regex:/^.+(bcebos.com)\/[^_&]+/,url_regex:"",url_text:"",html:'<span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><video class="fr-draggable" controls="" data-msg="ok" data-status="0" src="{url}" style="width: 600px;"></video></span>'}],o.FE.LANGUAGE.zh_cn={translation:{"Type something":"输入一些内容",Bold:"粗体",Italic:"斜体",Underline:"下划线",Strikethrough:"删除线",Insert:"插入",Delete:"删除",Cancel:"取消",OK:"确定",Back:"背部",Remove:"去掉",More:"更多",Update:"更新",Style:"风格","Font Family":"字体","Font Size":"字号",Colors:"颜色",Background:"背景",Text:"文字","Paragraph Format":"格式",Normal:"正常",Code:"代码","Heading 1":"标题1","Heading 2":"标题2","Heading 3":"标题3","Heading 4":"标题4","Paragraph Style":"段落样式","Inline Style":"内联样式",Align:"对齐方式","Align Left":"左对齐","Align Center":"居中","Align Right":"右对齐","Align Justify":"两端对齐",None:"无","Ordered List":"编号列表","Unordered List":"项目符号","Decrease Indent":"减少缩进","Increase Indent":"增加缩进","Insert Link":"插入链接","Open in new tab":"开启在新标签页","Open Link":"打开链接","Edit Link":"编辑链接",Unlink:"删除链接","Choose Link":"选择链接","Insert Image":"插入图片","Upload Image":"上传图片","By URL":"通过网址",Browse:"浏览","Drop image":"图像拖放","or click":"或点击","Manage Images":"管理图像",Loading:"载入中",Deleting:"删除",Tags:"标签","Are you sure? Image will be deleted.":"你确定吗？图像将被删除。",Replace:"更换",Uploading:"上传","Loading image":"导入图像",Display:"显示",Inline:"排队","Break Text":"断开文本","Alternate Text":"备用文本","Change Size":"尺寸变化",Width:"宽度",Height:"高度","Something went wrong. Please try again.":"出了些问题。 请再试一次。","Insert Video":"插入视频","Embedded Code":"嵌入式代码","Insert Table":"插入表格","Table Header":"表头","Remove Table":"删除表","Table Style":"表格样式","Horizontal Align":"水平对齐方式",Row:"行","Insert row above":"在上方插入","Insert row below":"在下方插入","Delete row":"删除行",Column:"列","Insert column before":"在左侧插入","Insert column after":"在右侧插入","Delete column":"删除列",Cell:"单元格","Merge cells":"合并单元格","Horizontal split":"水平分割","Vertical split":"垂直分割","Cell Background":"单元格背景","Vertical Align":"垂直对齐方式",Top:"最佳",Middle:"中间",Bottom:"底部","Align Top":"顶部对齐","Align Middle":"中间对齐","Align Bottom":"底部对齐","Cell Style":"单元格样式","Upload File":"上传文件","Drop file":"文件拖放",Emoticons:"表情","Grinning face":"脸上笑嘻嘻","Grinning face with smiling eyes":"","Face with tears of joy":"笑嘻嘻的脸，含笑的眼睛","Smiling face with open mouth":"笑脸张开嘴","Smiling face with open mouth and smiling eyes":"笑脸张开嘴微笑的眼睛","Smiling face with open mouth and cold sweat":"笑脸张开嘴，一身冷汗","Smiling face with open mouth and tightly-closed eyes":"笑脸张开嘴，紧紧闭着眼睛","Smiling face with halo":"笑脸晕","Smiling face with horns":"微笑的脸角","Winking face":"眨眼表情","Smiling face with smiling eyes":"面带微笑的眼睛","Face savoring delicious food":"面对品尝美味的食物","Relieved face":"面对如释重负","Smiling face with heart-shaped eyes":"微笑的脸，心脏形的眼睛","Smiling face with sunglasses":"笑脸太阳镜","Smirking face":"面对面带笑容","Neutral face":"中性面","Expressionless face":"面无表情","Unamused face":"一脸不快的脸","Face with cold sweat":"面对冷汗","Pensive face":"沉思的脸","Confused face":"面对困惑","Confounded face":"该死的脸","Kissing face":"面对接吻","Face throwing a kiss":"面对投掷一个吻","Kissing face with smiling eyes":"接吻脸，含笑的眼睛","Kissing face with closed eyes":"接吻的脸闭着眼睛","Face with stuck out tongue":"面对伸出舌头","Face with stuck out tongue and winking eye":"面对伸出舌头和眨动的眼睛","Face with stuck out tongue and tightly-closed eyes":"面对伸出舌头和紧闭的眼睛","Disappointed face":"面对失望","Worried face":"面对担心","Angry face":"愤怒的脸","Pouting face":"面对噘嘴","Crying face":"哭泣的脸","Persevering face":"怎奈脸","Face with look of triumph":"面带看的胜利","Disappointed but relieved face":"失望，但脸上释然","Frowning face with open mouth":"面对皱着眉头张口","Anguished face":"面对痛苦","Fearful face":"可怕的脸","Weary face":"面对厌倦","Sleepy face":"面对困","Tired face":"疲惫的脸","Grimacing face":"狰狞的脸","Loudly crying face":"大声哭脸","Face with open mouth":"面对张开嘴","Hushed face":"安静的脸","Face with open mouth and cold sweat":"","Face screaming in fear":"面对张开嘴，一身冷汗","Astonished face":"面对惊讶","Flushed face":"红扑扑的脸蛋","Sleeping face":"熟睡的脸","Dizzy face":"面对眩","Face without mouth":"脸上没有嘴","Face with medical mask":"面对医疗口罩",Break:"破",Subscript:"下标",Superscript:"上标",Fullscreen:"全屏","Insert Horizontal Line":"插入水平线","Clear Formatting":"格式化删除",Undo:"撤消",Redo:"重复","Select All":"全选","Code View":"代码视图",Quote:"引用",Increase:"增加引用",Decrease:"删除引用","Quick Insert":"快插"},direction:"ltr"}});