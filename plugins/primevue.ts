import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'

// Components
import Button from 'primevue/button'
import Terminal from 'primevue/terminal'
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import Rating from 'primevue/rating';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import Editor from 'primevue/editor';
import TreeSelect from 'primevue/treeselect';
import Breadcrumb from 'primevue/breadcrumb';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';
import OverlayPanel from 'primevue/overlaypanel';
import FileUpload from 'primevue/fileupload';
import Carousel from 'primevue/carousel';

// Directives
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import BadgeDirective from 'primevue/badgedirective'
import Tooltip from 'primevue/tooltip'

// Services
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
  })

  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.use(ConfirmationService)

  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Terminal', Terminal)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('DataView', DataView)
  nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('Rating', Rating)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('Checkbox', Checkbox)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('Divider', Divider)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('Editor', Editor)
  nuxtApp.vueApp.component('TreeSelect', TreeSelect)
  nuxtApp.vueApp.component('Breadcrumb', Breadcrumb)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Image', Image)
  nuxtApp.vueApp.component('Galleria', Galleria)
  nuxtApp.vueApp.component('OverlayPanel', OverlayPanel)
  nuxtApp.vueApp.component('FileUpload', FileUpload)
  nuxtApp.vueApp.component('Carousel', Carousel)


  nuxtApp.vueApp.directive('ripple', Ripple)
  nuxtApp.vueApp.directive('styleclass', StyleClass)
  nuxtApp.vueApp.directive('badge', BadgeDirective)
  nuxtApp.vueApp.directive('tooltip', Tooltip)
})
