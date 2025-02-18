export default async function userPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main>
      <h1>{params.user}</h1>
    </main>
  );
}
