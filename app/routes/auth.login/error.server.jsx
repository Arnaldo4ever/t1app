import { LoginErrorType } from "@shopify/shopify-app-remix/server";

export function loginErrorMessage(loginErrors) {
  if (loginErrors?.shop === LoginErrorType.MissingShop) {
    return { shop: "Por favor ingrese el dominio de su tienda para iniciar sesión" };
  } else if (loginErrors?.shop === LoginErrorType.InvalidShop) {
    return { shop: "Ingrese un dominio de tienda válido para iniciar sesión" };
  }

  return {};
}
