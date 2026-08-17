"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { LEAD_STATUSES } from "@/lib/leads";
import type { WholesaleLead } from "@/types";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<WholesaleLead[]>([]);
  const [error, setError] = useState("");

  async function load() {
    const response = await fetch("/api/admin/leads");
    if (!response.ok) {
      setError("Unable to load leads.");
      return;
    }
    const body = await response.json();
    setLeads(body.leads || []);
  }

  useEffect(() => {
    void load();
  }, []);

  async function updateStatus(leadId: string, status: string) {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId, status }),
    });
    void load();
  }

  return (
    <AdminShell title="Leads">
      {error ? <p className="text-maroon">{error}</p> : null}
      {!leads.length ? (
        <p className="rounded-2xl bg-white p-8 text-ink-muted">No wholesale enquiries yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl bg-white shadow-card">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-cream-dark">
              <tr>
                {["Created", "Name", "Email", "Country", "Buyer", "Qty", "Status"].map((head) => (
                  <th key={head} className="px-4 py-3 font-semibold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.leadId} className="border-t border-maroon/10 align-top">
                  <td className="px-4 py-3">{lead.createdAt.slice(0, 10)}</td>
                  <td className="px-4 py-3">
                    {lead.name}
                    <div className="text-xs text-ink-muted">{lead.companyName}</div>
                  </td>
                  <td className="px-4 py-3">{lead.email}</td>
                  <td className="px-4 py-3">{lead.country}</td>
                  <td className="px-4 py-3">{lead.buyerType}</td>
                  <td className="px-4 py-3">{lead.estimatedQuantity}</td>
                  <td className="px-4 py-3">
                    <select
                      value={lead.status}
                      onChange={(event) => updateStatus(lead.leadId, event.target.value)}
                      className="rounded border border-maroon/20 px-2 py-1"
                    >
                      {LEAD_STATUSES.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                    {lead.message ? <p className="mt-2 max-w-xs text-xs text-ink-muted">{lead.message}</p> : null}
                    {lead.quoteItems?.length ? (
                      <p className="mt-2 max-w-xs text-xs text-ink-muted">
                        Items: {lead.quoteItems.map((item) => item.name).join(", ")}
                      </p>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
