import Feed from "@/components/feed/feed";

export default async function Home() {
  const response = await fetch("https://dogsapi.origamid.dev/json/api/photo");
  const data = await response.json();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
