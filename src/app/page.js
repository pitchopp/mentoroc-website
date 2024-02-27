import { redirect } from "next/navigation";

export default async function Home() {
  redirect('dashboard')
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
