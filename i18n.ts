export default async function getMessages(locale: any) {
  return { messages: (await import(`./messages/${locale}.json`)).default };
}
