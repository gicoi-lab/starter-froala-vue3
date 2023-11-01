import FroalaEditor from 'froala-editor/js/plugins.pkgd.min.js'
import 'codemirror/lib/codemirror.css'

export default {
  /*
  * Enterprise License to JunYuan Yan (jyyan.tw@gmail.com, luke@jyyan.info, sss2100@gmail.com)
  * https://froala.com/wysiwyg-editor/terms/
  * since 2016
  */
  key: null,
  toolbarSticky: true,
  toolbarStickyOffset: 50,
  attribution: false,
  language: 'zh_tw',

  // DEBUG & event handler
  // DEBUG & event handler
  // DEBUG & event handler
  events: {
    initialized: function () {
      console.log('Editor initialized!')
      // alert('Editor initialized!')
    }
  },
  // DEBUG & event handler
  // DEBUG & event handler
  // DEBUG & event handler

  pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image', 'inlineStyle', 'inlineClass', 'lineBreaker', 'lineHeight', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quickInsert', 'quote', 'table', 'url', 'video', 'wordPaste', 'specialCharacters', 'track_changes', 'markdown', 'print', 'help'],
  // 'imageTUI'
  // 'embedly'
  videoInsertButtons: ['videoBack', '|', 'videoByURL'],
  videoAllowedProviders: ['youtube'],
  // toolbarBottom: true,
  toolbarButtons: {
    'moreText': {
      'buttons': ['fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'inlineClass', 'inlineStyle', 'clearFormatting'],
      'buttonsVisible': 6
    },
    'moreParagraph': {
      'buttons': ['alignLeft', 'alignCenter', 'alignRight', 'formatOLSimple', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
      'buttonsVisible': 4
    },
    'moreRich': {
      'buttons': ['insertFile', 'insertLink', 'insertImage', 'insertVideo', 'insertTable', 'specialCharacters', 'embedly', 'insertHR'],
      // 'buttons': ['insertLink', 'insertVideo', 'insertTable', 'fontAwesome', 'specialCharacters', 'embedly', 'insertHR'],
      'buttonsVisible': 7
    },
    'moreMisc': {
      'buttons': ['undo', 'redo', 'fullscreen', 'selectAll', 'print', 'html', 'help'],
      'align': 'right',
      'buttonsVisible': 2
    }
  },
  htmlAllowedEmptyTags: ['i', 'span', 'iframe'],
  htmlAllowedTags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'queue', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'i', 'span'],
  linkAlwaysBlank: false,
  linkEditButtons: ['linkStyle', 'linkEdit', 'linkRemove'],
  linkList: [
    {
      text: 'Google',
      href: 'http://google.com',
      target: '_blank',
      rel: 'nofollow'
    },
    {
      displayText: '維基百科',
      href: 'https://zh.wikipedia.org',
      target: '_blank'
    }
  ],
  helpSets: [
    {
      title: 'Common actions',
      commands: [
        {val: 'OSkeyC', desc: 'Copy'},
        {val: 'OSkeyX', desc: 'Cut'},
        {val: 'OSkeyV', desc: 'Paste'},
        {val: 'OSkeyZ', desc: 'Undo'},
        {val: 'OSkeyShift+Z', desc: 'Redo'},
        {val: 'OSkeyK', desc: 'Insert Link'},
        {val: 'OSkeyP', desc: 'Insert Image'}
      ]
    },
    {
      title: 'Basic Formatting',
      commands: [
        {val: 'OSkeyA', desc: 'Select All'},
        {val: 'OSkeyB', desc: 'Bold'},
        {val: 'OSkeyI', desc: 'Italic'},
        {val: 'OSkeyU', desc: 'Underline'},
        {val: 'OSkeyS', desc: 'Strikethrough'},
        {val: 'OSkey]', desc: 'Increase Indent'},
        {val: 'OSkey[', desc: 'Decrease Indent'}
      ]
    },
    {
      title: 'Quote',
      commands: [
        {val: 'OSkey\'', desc: 'Increase quote level'},
        {val: 'OSkeyShift+\'', desc: 'Decrease quote level'}
      ]
    },
    {
      title: 'Image / Video',
      commands: [
        {val: 'OSkey+', desc: 'Resize larger'},
        {val: 'OSkey-', desc: 'Resize smaller'}
      ]
    },
    {
      title: 'Table',
      commands: [
        {val: 'Alt+Space', desc: 'Select table cell'},
        {val: 'Shift+Left/Right arrow', desc: 'Extend selection one cell'},
        {val: 'Shift+Up/Down arrow', desc: 'Extend selection one row'}
      ]
    },
    {
      title: 'Navigation',
      commands: [
        {val: 'OSkey/', desc: 'Shortcuts'},
        {val: 'Alt+F10', desc: 'Focus popup / toolbar'},
        {val: 'Esc', desc: 'Return focus to previous position'}
      ]
    }
  ],
  heightMin: 300,
  enter: FroalaEditor.ENTER_BR,
  // imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
  imageEditButtons: ['imageReplace', 'imageAlign', 'imageCaption', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
  imageMaxSize: 1024 * 1024 * 2, // 2 MB
  imageDefaultMargin: 0,
  // imageInsertButtons: ['imageBack', '|', 'imageUpload'],
  // imageInsertButtons: ['imageBack', '|', 'imageUpload', 'imageByURL'],
  imageDefaultWidth: 0,
  imageStyles: {
    'w-100': 'RWD 100%寬：隨螢幕縮放',
    'rounded': '圓角',
    'border': '邊框',
    'd-block d-md-none': 'Mobile 顯示',
    'd-none d-md-block': 'Desktop 顯示'
  },
  // Allow to upload PNG and JPG.
  imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
  // upload file API
  // imageUploadURL: IMG_API_URI + '/api/file',
  imageUploadRemoteUrls: true,
  imageUploadParam: 'files',
  imageUploadParams: {
    access_token: '',
    overwrite: false,
    owner: ''
  },
  imageManagerDeleteParams: {
    access_token: '',
    owner: ''
  },

  fontFamilyDefaultSelection: '黑體(非襯線)',
  fontFamilySelection: true,
  fontFamily: {
    'Microsoft JhengHei,微軟正黑體,Noto Sans TC,Arial,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji': '黑體(非襯線)',
    'PMingLiU, 新細明體, Noto Serif TC': '明體(襯線)',
    'Arial,Helvetica,sans-serif': 'Arial',
    'Georgia,serif': 'Georgia',
    'Impact,Charcoal,sans-serif': 'Impact',
    'Tahoma,Geneva,sans-serif': 'Tahoma',
    '\'Times New Roman\',Times,serif': 'Times New Roman',
    'Verdana,Geneva,sans-serif': 'Verdana'
  },
  fontSize: ['8', '9', '10', '11', '12', '14', '16', '18', '24', '30', '36', '48', '60', '72', '96'],
  fontSizeSelection: true,
  fontSizeDefaultSelection: '18',
  fontSizeUnit: 'px',
  requestWithCORS: true,
  fileMaxSize: 1024 * 1024 * 10, // 10 MB
  fileUpload: true,
  fileUploadMethod: 'POST',

  fileAllowedTypes: [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml',

    'text/plain',
    'text/html',
    'application/json',

    'application/pdf',

    'application/zip',
    'application/x-rar',
    'application/x-rar-compressed',
    'application/x-7z-compressed',
    'application/x-tar',

    // office
    'application/vnd.oasis.opendocument.presentation',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.oasis.opendocument.text',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.visio'
  ],
  // upload file API
  // fileUploadURL: IMG_API_URI + '/api/file',
  fileUploadParam: 'files',
  fileUploadParams: {
    access_token: '',
    overwrite: false,
    owner: ''
  },

  spellcheck: false,
  // pasteAllowedStyleProps: ['font-size', 'color'],
  pasteAllowedStyleProps: ['font-size', 'color', 'text-align'],
  pasteDeniedAttrs: ['class', 'id', 'lang'],
  pasteDeniedTags: ['a', 'p', 'pre'],
  // pastePlain: true,

  // wordAllowedStyleProps: ['font-size'],
  wordDeniedAttrs: ['class', 'id', 'lang', 'style', 'font-size', 'color'],
  wordDeniedTags: ['a', 'p', 'pre'],
  wordPasteModal: true,
  wordPasteKeepFormatting: false
}
