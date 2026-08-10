export async function subscribeToMailerLite(email: string): Promise<void> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    throw new Error("MailerLite is not configured");
  }

  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      groups: [groupId],
    }),
  });

  if (!response.ok) {
    throw new Error(`MailerLite rejected the signup (${response.status})`);
  }
}
