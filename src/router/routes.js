import RegisterPage from "@/components/pages/RegisterPage.vue"
import SearchPage from "@/components/pages/SearchPage.vue"
import SamplePage from "@/components/pages/Sample_2.vue"
import DetailPage from "@/components/pages/DetailPage.vue"
import UpdatePage from "@/components/pages/UpdatePage.vue"
import DeletePage from "@/components/pages/DeletePage.vue"

export default [{
    path: '/',
    redirect: 'Home'
}, {
    path: '/Home',
    component: SearchPage
}, {
    path: '/Sample',
    component: SamplePage
}, {
    path: '/Register',
    component: RegisterPage
}, {
    path: '/Detail',
    component: DetailPage
}, {
    path: '/Update',
    component: UpdatePage
}, {
    path: '/Delete',
    component: DeletePage
}, {
    path: '*',
    redirect: '/'
}]
