"use server";

export type IPhoto = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: number;
};
export default async function ActionsPhotosGet() {
  const response = await fetch("https://dogsapi.origamid.dev/json/api/photo");
  const data = await response.json();
  return data as IPhoto[];
}
