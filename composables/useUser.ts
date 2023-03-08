export default function () {
    const email = useState('email', () => "a.schmidt.2002@gmx.de")
    const password = useState('password', () => "1234")
    const isLoggedIn = useState('isLoggedIn', () => true)

    const login = async (email_l: string, password_l: string) => {
        // login logic
        const user = {
            "email": email_l,
            "password": password_l
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        };
        const res = await fetch("https://localhost:8080/user/login", requestOptions)
        const data = await res.json()

        if (data.success == true) {
            isLoggedIn.value = true
            email.value = email_l
            password.value = password_l
        }
        else {
            isLoggedIn.value = false
            email.value = ""
            password.value = ""
        }

        console.log(isLoggedIn.value)
        return data
    }

    const logout = () => {
        isLoggedIn.value = false
        email.value = ''
        password.value = ''
    }


    return {
        email,
        password,
        login,
        logout,
        isLoggedIn
    }
}