import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        try {
            const data = await login({ email, password })
            if (data?.user) {
                setUser(data.user)
            }
            return { user: data?.user }
        } catch (err) {
            const message = err.response?.data?.message || "Invalid email or password"
            return { error: message }
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        try {
            const data = await register({ username, email, password })
            if (data?.user) {
                setUser(data.user)
            }
            return { user: data?.user }
        } catch (err) {
            const message = err.response?.data?.message || "Registration failed. Please try again."
            return { error: message }
        }
    }

    const handleLogout = async () => {
        try {
            await logout()
            setUser(null)
        } catch (err) {
            console.error("Logout error:", err)
            setUser(null)
        }
    }

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                if (data?.user) {
                    setUser(data.user)
                }
            } catch (err) {
                // Not authenticated yet - silent expected behavior
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
    }, [])

    return { user, loading, handleRegister, handleLogin, handleLogout }
}
