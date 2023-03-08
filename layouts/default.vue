<template>
    <div class="min-h-screen flex flex-column antialiased bg-gradient-to-b from-blue-800 to-pink-600">
        <Dialog v-model:visible="logoutSuccess" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="flex align-items-center flex-column pt-6 px-3">
                <i class="pi pi-check-circle" :style="{ fontSize: '5rem', color: 'var(--green-500)' }"></i>
                <h5>Logout Successful!</h5>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="OK" @click="resetSuccess" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <div class="header">
            <nav class="bg-slate-800 flex flex-row sm:flex-col items-center h-14 mx-auto px-4">
                <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                <div class="">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                    <RouterLink to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">About me</RouterLink>

                    <RouterLink to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Contact</RouterLink>

                    <RouterLink to="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Projects</RouterLink>

                </div>
            </nav>
        </div>
        <div class="bg-gradient-to-b from-slate-800 to-transparent h-2"></div>
        <div class="flex-grow-1">
            <NuxtPage />
        </div>
        <footer class="text-xs p-4 text-center">
            © 2023 Copyright Alexander Schmidt
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from 'vue-window-size';
import { MenuItem } from 'primevue/menuitem';
const { height } = useWindowSize();
const { email, password, login, logout, isLoggedIn } = useUser();
let logoutSuccess = ref(false);

const handleLogout = () => {
    logout();
    logoutSuccess.value = true;
};

const resetSuccess = () => {
    logoutSuccess.value = false;
};

const items = ref<MenuItem[]>([
    {
        label: 'About me',
        icon: 'pi pi-fw pi-user',
        to: "/about",
    },
    {
        label: 'contact me',
        icon: 'pi pi-fw pi-envelope',
        to: "/contact",
    },
    {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        to: "/login",
    }
]);
useHead({
    // icon: 'wallpaperIcon.png'
}
)
</script>
