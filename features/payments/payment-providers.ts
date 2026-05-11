export type PaymentProvider = "stripe" | "yoco";

export const paymentProviders: PaymentProvider[] = ["stripe", "yoco"];

export function getPaymentProviderStatus(provider: PaymentProvider) {
  return {
    provider,
    isConfigured: false,
    note: "Payment provider wiring is intentionally deferred until a later phase.",
  };
}
