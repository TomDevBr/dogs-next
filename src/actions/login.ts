import { cookies } from "next/headers";

export default async function ActionsLogin(formData: FormData) {
  const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
  const options = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(url, options);
  const data = await response.json();
  cookies().set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });
  return data;
}
