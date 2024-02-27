import { redirect } from "next/navigation";

export default async function Home() {
  redirect(process.env.PRIVATE_ADMIN_URL)
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
