import { createApp } from 'vue'
import App from './App.vue'

// 注意！以下元件不建議任意變更載入次序
// 注意！以下元件不建議任意變更載入次序
// 注意！以下元件不建議任意變更載入次序
//Import Froala Editor plugins
import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/js/plugins/print.min'
// Luke 版本繁體中文語系檔
import '@/config/froala_zh_tw'
// Import Froala Editor css files.
// 編輯器的樣式表（後台必要載入）
import 'froala-editor/css/froala_editor.pkgd.min.css'
// 顯示編輯結果的樣式表（前台必要載入、後台提供預覽時也要載入）
import 'froala-editor/css/froala_style.min.css'
// Import Froala Editor component
import VueFroala from 'vue-froala-wysiwyg'
// 注意！以上元件不建議任意變更載入次序

const app = createApp(App)
app.use(VueFroala)
app.mount('#app')
