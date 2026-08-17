"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from "amazon-cognito-identity-js";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const configured = Boolean(
    process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID && process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  );

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!configured) return;
    setLoading(true);
    setError("");
    try {
      const pool = new CognitoUserPool({
        UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
        ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
      });
      const user = new CognitoUser({ Username: email, Pool: pool });
      const idToken = await new Promise<string>((resolve, reject) => {
        user.authenticateUser(new AuthenticationDetails({ Username: email, Password: password }), {
          onSuccess: (session) => resolve(session.getIdToken().getJwtToken()),
          onFailure: reject,
        });
      });
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!response.ok) throw new Error("Login failed");
      router.push(params.get("next") || "/admin/dashboard");
    } catch {
      setError("Could not sign in. Check Cognito credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-24">
      <h1 className="font-serif text-3xl text-ink">Admin sign in</h1>
      {!configured ? (
        <p className="mt-4 text-ink-muted">
          Admin authentication is not configured. Set Amazon Cognito environment variables before enabling this area.
          Lead data is never exposed without a verified session.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-card">
          <label className="block text-sm">
            Email
            <input className="mt-1 w-full rounded-lg border border-maroon/20 px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className="block text-sm">
            Password
            <input type="password" className="mt-1 w-full rounded-lg border border-maroon/20 px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          {error ? <p className="text-sm text-maroon">{error}</p> : null}
          <button className="btn-primary w-full" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
