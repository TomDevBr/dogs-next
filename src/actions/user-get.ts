'user server'

import { USER_GET, USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
}

export default async function userGet() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error('Token não encontrado.');

    const { url } = USER_GET(token);
    const response = await fetch(url, {
      method: 'GET',
            headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      }
    });

    if (!response.ok) throw new Error('Erro ao buscar usuário.');
    const data = (await response.json()) as User;
    return { data, ok:true, error: ''}
  } catch (error: unknown) {
    return apiError(error);
  }
}