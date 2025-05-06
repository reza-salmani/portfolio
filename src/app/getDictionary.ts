export const getDictionary = async (
  locale: string
): Promise<Record<string, string>> => {
  try {
    const dict = await import(`../../public/i18n/${locale}.json`);
    return dict.default;
  } catch {
    const fallback = await import("../../public/i18n/en.json");
    return fallback.default;
  }
};
