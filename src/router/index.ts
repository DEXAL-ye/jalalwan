import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
declare module 'vue-router' {
    interface RouteMeta {
        public?: boolean;
        guestOnly?: boolean;
        requiresAuth?: boolean;
        allowedRoles?: string[];
        requiredPermissions?: string[];
        type?: string;
        title?: string;
    }
}
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LandingPage,
        meta: { public: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;