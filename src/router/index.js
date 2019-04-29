import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import SignIn from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'

import InvoiceIndex from '@/components/Invoice/Index'
import InvoiceShow from '@/components/Invoice/Show'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    // auth routes
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp },
    // invoice routes
    { path: '/invoice', name: 'invoice', component: InvoiceIndex },
    // { path: '/invoice/create', name: 'invoicecreate', component: InvoiceCreate },
    { path: '/invoice/show/', name: 'invoiceshow', component: InvoiceShow }
    // { path: '/invoice/update/<id>', name: 'invoiceupdate', component: InvoiceUpdate },
    // { path: '/invoice/delete/<id>', name: 'invoicedelete', component: InvoiceDelete }

  ]
})
