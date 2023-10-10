import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registery";
import BodyContainer from "@/layout/body-wrapper";
import { ClerkProvider } from "@clerk/nextjs";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "ar"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: "Meem Store",
    description: "E-Commerce Store",
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <ClerkProvider>
      <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <BodyContainer>{children}</BodyContainer>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </html>
    </ClerkProvider>
  );
}
