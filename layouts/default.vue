<template>
    <div class="min-h-screen flex flex-column">
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
            <Menubar :model="items">
                <template #start>
                    <div class="px-2">
                        <router-link to="/" tag="button"><strong>home</strong></router-link>
                    </div>
                </template>
            </Menubar>
        </div>
        <div id="content" class="content flex-grow-1">
            <NuxtPage />
        </div>
        <div class="footer align-items-center pt-3" style="width: 100%;">
            <!--footer-->
            <div class="bg-gray-100">
                <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                    <div class="cr">©2023 This was made with love by <NuxtLink to="/easterEgg">Alex</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
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
