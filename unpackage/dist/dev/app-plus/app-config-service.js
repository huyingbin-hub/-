
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/questionAnswer/questionAnswer","pages/answerRecord/answerRecord","pages/myQuestions/myQuestions","pages/myQuestionsReply/myQuestionsReply","pages/logs/logs","pages/huoDong/huoDong","pages/login/userLogin","pages/login/register","pages/login/forgetPassword"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"Weixin","navigationBarTextStyle":"black"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"zhongkedayi","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"中课帮"}},{"path":"/pages/questionAnswer/questionAnswer","meta":{},"window":{"navigationBarTitleText":"中题帮"}},{"path":"/pages/answerRecord/answerRecord","meta":{},"window":{"navigationBarTitleText":"我的问题"}},{"path":"/pages/myQuestions/myQuestions","meta":{},"window":{"navigationBarTitleText":"我的提问"}},{"path":"/pages/myQuestionsReply/myQuestionsReply","meta":{},"window":{"navigationBarTitleText":"我的提问"}},{"path":"/pages/logs/logs","meta":{},"window":{"navigationBarTitleText":"查看启动日志"}},{"path":"/pages/huoDong/huoDong","meta":{},"window":{"navigationBarTitleText":"最新活动"}},{"path":"/pages/login/userLogin","meta":{},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom"}},{"path":"/pages/login/register","meta":{},"window":{"navigationBarTitleText":"注册","navigationStyle":"custom"}},{"path":"/pages/login/forgetPassword","meta":{},"window":{"navigationBarTitleText":"忘记密码","navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
