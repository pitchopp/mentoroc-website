"use client";
import Image from "next/image";
import logo from "@/../public/logo.png";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    router.push("/dashboard");
  };

  return (
    <main className="flex items-center justify-center h-screen bg-base-200 p-4">
      <div className="w-full grid max-w-md p-4 space-y-8 bg-base-100 rounded-lg">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="input input-bordered flex items-center gap-4">
            <FaEnvelope className="size-4 opacity-70" />
            <input
              required
              id="email"
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-4">
            <FaKey className="size-4 opacity-70" />
            <input
              required
              id="password"
              type="password"
              className="grow"
              placeholder="Mot de passe"
            />
          </label>
          <div className="text-center">
            <button type="submit" className="btn btn-secondary">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
