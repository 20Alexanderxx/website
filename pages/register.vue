<template>
    <div class="form-demo">
        <Dialog v-model:visible="showMessageSuccess" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="flex align-items-center flex-column pt-6 px-3">
                <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
                <h5>Registration Successful!</h5>
                <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
                    Your account is registered under name <b>{{state.surname}} {{state.name}}</b>; it'll be valid next 30 days without activation. Please check <b>{{state.email}}</b> for activation instructions.
                </p>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="OK" @click="resetSuccess" href="products" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <!-- Dialog for failed Registration -->
        <Dialog v-model:visible="showMessageFailure" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="flex align-items-center flex-column pt-6 px-3">
                <i class="pi pi-times" :style="{fontSize: '5rem', color: 'var(--red-500)' }"></i>
                <h5>Registration Failed!</h5>
                <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
                    Your Registration failed because <b>{{errorMessage}}</b>; Please try again.
                </p>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="OK" @click="resetFailure" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <div class="flex justify-content-center">
            <div class="card">
                <h3 class="text-center">Register</h3>
                <p class="text-center">Already have an account? <NuxtLink to="/login"><u>Login</u></NuxtLink>
                </p>
                <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="fname" v-model="v$.surname.$model" :class="{'p-invalid':v$.surname.$invalid && submitted}" />
                            <label for="fname" :class="{'p-error':v$.surname.$invalid && submitted}">Vorname*</label>
                        </div>
                        <small v-if="(v$.surname.$invalid && submitted) || v$.surname.$pending.$response" class="p-error">{{v$.surname.required.$message.replace('Value', 'Vorname')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="lname" v-model="v$.name.$model" :class="{'p-invalid':v$.name.$invalid && submitted}" />
                            <label for="lname" :class="{'p-error':v$.name.$invalid && submitted}">Name*</label>
                        </div>
                        <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label p-input-icon-right">
                            <i class="pi pi-envelope" />
                            <InputText id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error" />
                            <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Email*</label>
                        </div>
                        <span v-if="v$.email.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                                <small class="p-error">{{error.$message}}</small>
                            </span>
                        </span>
                        <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <Password id="password" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask>
                                <template #header>
                                    <h6>Pick a password</h6>
                                </template>
                                <template #footer="sp">
                                    {{sp.level}}
                                    <Divider />
                                    <p class="mt-2">Suggestions</p>
                                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                        <li>At least one lowercase</li>
                                        <li>At least one uppercase</li>
                                        <li>At least one numeric</li>
                                        <li>Minimum 8 characters</li>
                                    </ul>
                                </template>
                            </Password>
                            <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Passwort*</label>
                        </div>
                        <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <Password id="password_conf" v-model="v$.password_conf.$model" :class="{'p-invalid':v$.password_conf.$invalid && submitted}" toggleMask :feedback="false" />
                            <label for="password_conf" :class="{'p-error':v$.password_conf.$invalid && submitted}">Passwort bestätigen*</label>
                        </div>
                        <small v-if="(v$.password_conf.$invalid && submitted) || v$.password_conf.$pending.$response" class="p-error">{{v$.password_conf.required.$message.replace('Value is required', 'Password muss übereinstimmen')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <Calendar id="bday" v-model="v$.date.$model" :maxDate="maxdate" :showIcon="true" dateFormat="dd.mm.yy" :class="{'p-invalid':v$.date.$invalid && submitted}" />
                            <label for="bday" :class="{'p-error':v$.date.$invalid && submitted}">Birthday</label>
                        </div>
                        <small v-if="(v$.date.$invalid && submitted) || v$.date.$pending.$response" class="p-error">
                            {{v$.date.required.$message.replace('Value', 'Datum')}}
                        </small>
                    </div>
                    <div class="field">
                        <div class="p-float-label" v-if="true">
                            <Dropdown id="country-name" v-model="v$.country.$model" :options="countries" optionLabel="name" optionValue="code" :class="{'p-invalid':v$.country.$invalid && submitted}" />
                            <label for="country-name" :class="{'p-error':v$.country.$invalid && submitted}">Country</label>
                        </div>
                        <small v-if="(v$.country.$invalid && submitted) || v$.country.$pending.$response" class="p-error">{{v$.country.required.$message.replace('Value', 'Land')}}</small>
                    </div>
                    <div class="field-checkbox">
                        <Checkbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
                        <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions*</label>
                    </div>
                    <Button type="submit" label="Submit" class="mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const submitted = ref(false);
const countries = await getCountries();
const showMessageSuccess = ref(false);
const showMessageFailure = ref(false);
const errorMessage = ref("");

let today = new Date();
let year = today.getFullYear() - 16;
const maxdate = ref(new Date());
maxdate.value.setFullYear(year);

const state = reactive({
    name: '',
    surname: '',
    email: '',
    password: '',
    password_conf: '',
    country: null,
    date: null,
    accept: null
});

const rules = {
    name: { required },
    surname: { required },
    email: { required, email },
    password: { required },
    password_conf: { required, sameAsPassword: (password) => password === state.password },
    country: { required },
    date: { required },
    accept: { required }
};

const v$ = useVuelidate(rules, state);

const resetSuccess = async () => {
    showMessageSuccess.value = !showMessageSuccess.value;
    resetForm();
    await navigateTo('/');
};
const resetFailure = () => {
    showMessageFailure.value = !showMessageFailure.value;
};

const handleSubmit = (isFormValid) => {
    submitted.value = true;
    if (!isFormValid) {
        return;
    }
    toggleDialog();
}
const toggleDialog = async () => {
    const date = state.date.toISOString().slice(0, 10);
    const user = {
        "firstName": state.surname,
        "lastName": state.name,
        "email": state.email,
        "password": state.password,
        "birthDate": date
    }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    };
    const res = await fetch("https://localhost:8080/user/registration", requestOptions)
    const registerResponse = await res.json();
    if (registerResponse.success == true) {
        console.log("success");
        showMessageSuccess.value = !showMessageSuccess.value;
        // resetForm();
    } else {
        errorMessage.value = registerResponse.reason;
        console.log("Failure: " + errorMessage.value);
        showMessageFailure.value = !showMessageFailure.value;
    }
}
const resetForm = () => {
    state.surname = '';
    state.name = '';
    state.email = '';
    state.password = '';
    state.password_conf = '';
    state.date = null;
    state.country = null;
    state.accept = null;
    submitted.value = false;
}
useHead({
    title: 'Registrieren'
})
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