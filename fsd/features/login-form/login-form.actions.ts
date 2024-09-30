
import {AuthForm, AuthResponse} from "./login-form.types";
import {statisticsClient} from "@/fsd/shared/config/statistics-client";


export const login = async (formData: AuthForm) => {
  const response = await statisticsClient.post(`/auth/jwt/login`,formData)
  return response.data
}