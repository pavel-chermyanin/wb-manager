
import {AuthForm, AuthResponse} from "./login-form.types";
import {wbApiClient} from "@/fsd/shared/config/wb-api-client";


export const login = async (formData: AuthForm) => {
  const response = await wbApiClient.post(`/auth/jwt/login`,formData)
  return response.data
}