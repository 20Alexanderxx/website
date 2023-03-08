<template>
    <div class="form-demo">
        <Dialog v-model:visible="showMessageSuccess" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="flex align-items-center flex-column pt-6 px-3">
                <i class="pi pi-check-circle" :style="{ fontSize: '5rem', color: 'var(--green-500)' }"></i>
                <h5>Login Successful!</h5>
                <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
                    You are now logged in!
                </p>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="OK" @click="resetSuccess" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <!-- Dialog Failure-->
        <Dialog v-model:visible="showMessageFailure" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="flex align-items-center flex-column pt-6 px-3">
                <i class="pi pi-times" :style="{ fontSize: '5rem', color: 'var(--red-500)' }"></i>
                <h5>Login Failed!</h5>
                <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
                    Wrong Password or Username! Please try again.
                </p>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="OK" @click="resetFailure" class="p-button-text" />
                </div>
            </template>
        </Dialog>
        <!-- 
            <div class="flex justify-content-center">
                <div class="card">
                    <h3 class="text-center">Login</h3>
                    <p class="text-center">Dont have an Account?
                        <NuxtLink to="/register"><u>Register</u></NuxtLink>
                    </p>
                    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
                        <div class="field ">
                            <div class="p-float-label">
                                <InputText id="email" v-model="v$.email.$model" :class="{ 'p-invalid': v$.email.$invalid && submitted }" aria-describedby="email-error" />
                                <label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">Email*</label>
                            </div>
                            <span v-if="v$.email.$error && submitted">
                                <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                                    <small class="p-error">{{ error.$message }}</small>
                                </span>
                            </span>
                            <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{ v$.email.required.$message.replace('Value', 'Email') }}</small>
                        </div>
                        <div class="field">
                            <div class="p-float-label">
                                <Password id="password" v-model="v$.password.$model" :class="{ 'p-invalid': v$.password.$invalid && submitted }" :feedback="false" />
                                <label for="password" :class="{ 'p-error': v$.password.$invalid && submitted }">Password*</label>
                            </div>
                            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{ v$.password.required.$message.replace('Value', 'Password') }}</small>
                        </div>

                        <div class="field-checkbox">
                            <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept" :class="{ 'p-invalid': v$.accept && submitted }" />
                            <label for="accept" :class="{ 'p-error': v$.accept && submitted }">Account merken</label>
                        </div>
                        <Button type="submit" label="Submit" class="mt-2" />
                    </form>
                </div>
            </div>-->
        to be implemented...
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
const {email, password, login, isLoggedIn} = useUser();

useHead({
    title: 'Login'
});
const submitted = ref(false);
const showMessageSuccess = ref(false);
const showMessageFailure = ref(false);
const errorMessage = ref("");


const state = reactive({
    email: '',
    password: '',
    accept: null
});

const rules = {
    email: {required},
    password: {required},
};

const resetSuccess = async () => {
    showMessageSuccess.value = !showMessageSuccess.value;
    resetForm();
    await navigateTo('/');
};
const resetFailure = () => {
    showMessageFailure.value = !showMessageFailure.value;
};

const v$ = useVuelidate(rules, state);

const handleSubmit = (isFormValid) => {
    submitted.value = true;

    if (!isFormValid) {
        return;
    }

    toggleDialog();
};
const toggleDialog = async () => {
    const loginResponse = await login(state.email, state.password);
    if (loginResponse.success == true) {
        showMessageSuccess.value = !showMessageSuccess.value;
        // resetForm();
    } else {
        errorMessage.value = loginResponse.reason;
        showMessageFailure.value = !showMessageFailure.value;
    }
};
const resetForm = () => {
    state.email = '';
    state.password = '';
    state.accept = null;
    submitted.value = false;
}

</script>

<style lang="scss" scoped>
.form-demo {
    .card {
        min-width: 450px;

        form {
            margin-top: 2rem;
        }

        .field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}
</style>