export default async function idPage({ params }: { params: { id: number } }) {
  return (
    <main>
      <h1>foto id: {params.id}</h1>
    </main>
  );
}
