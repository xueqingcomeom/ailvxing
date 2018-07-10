var v = '?v=201702';

kao.config( {path: '/skin/ailvxing16/js/' });
kao.add('jquery', {path: 'jQuery/jquery-1.7.1.min.js'+v});
kao.add('focus', {path: 'myFocus/myfocus-2.0.4.full.js'+v});
kao.add('dia', {path: 'artDialog/dialog-plus-min.js'+v, requires: ['jquery']});
kao.add('ela', {path: 'jquery.elastic.min.js'+v, requires: ['jquery']});
kao.add('hot', {path: 'jquery.hotkeys.min.js'+v, requires: ['jquery']});
kao.add('tags', {path: 'jquery.tagsinput.min.js'+v, requires: ['jquery']});
kao.add('text', {path: 'jquery.textareaCounter.plugin.min.js'+v, requires: ['jquery']});
kao.add('fan', {path: 'fancybox/jquery.fancybox.min.js'+v, requires: ['jquery']});
kao.add('jcr', {path: 'jquery.Jcrop.min.js'+v, requires: ['jquery']});
kao.add('upfile', {path: 'jquery.ajaxfileupload.min.js'+v, requires: ['jquery']});
kao.add('val', {path: 'jquery.validate.min.js'+v, requires: ['jquery']});
kao.add('iframe', {path: 'iframeResizer.min.js'+v, requires: ['jquery']});
kao.add('iframeC', {path: 'iframeResizer.contentWindow.min.js'+v, requires: ['jquery']});
kao.add('wdt', {path: 'My97DatePicker/4.8.3/WdatePicker.js'+v, requires: ['jquery']});
kao.add('rep', {path: 'WebReport/CreateControl.js'+v});
kao.add('tips', {path: 'jquery.tips.min.js'+v, requires: ['jquery']});
kao.add('alx', {path: 'ailvxing.min.js'+v, requires: ['jquery','dia','tips']});

kao.add('bd', {path: 'baidu.tongji.js'+v});
kao.add('index', {path: 'ailvxing.index.min.js'+v, requires: ['focus','jquery','alx']});
kao.add('visa', {path: 'ailvxing.visa.min.js'+v, requires: ['tags','text','fan','ela','alx']});
kao.add('news', {path: 'ailvxing.news.min.js'+v, requires: ['ela','text','alx']});
kao.add('ask', {path: 'ailvxing.ask.min.js'+v, requires: ['dia','ela','hot','tags','text','alx']});
kao.add('mem', {path: 'ailvxing.member.min.js'+v, requires: ['dia', 'val', 'alx']});
kao.add('mcp', {path: 'ailvxing.member-cp.min.js'+v, requires: ['dia','jcr','upfile', 'alx']});
kao.add('order', {path: 'ailvxing.order.min.js'+v, requires: ['dia','val','alx']});