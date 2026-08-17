export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://rb.us").replace(/\/$/, "");
}

export function hasCognitoPublicConfig(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID &&
      process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID &&
      process.env.NEXT_PUBLIC_COGNITO_REGION,
  );
}

export function hasCognitoServerConfig(): boolean {
  return Boolean(process.env.COGNITO_USER_POOL_ID && process.env.COGNITO_REGION);
}

export function isAwsConfigured(): boolean {
  return Boolean(process.env.LEADS_TABLE && process.env.BANNERS_TABLE && process.env.AWS_REGION);
}
