'use client';

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import login from "@/actions/login";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) {
      window.location.href = '/conta';
    }
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label={"Usuário"} name={"username"} type="text"/>
        <Input label={"Senha"} name={"password"} type="password"/>

        <ErrorMessage error={state.error} />
        <FormButton />
      
      </form>
    </>
  );
}