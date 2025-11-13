import React, { type ReactNode } from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import AppLayout from '../(app)/layout';

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: string; };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const messages = await getMessages();
  const { locale } = params;
 
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppLayout>
        {children}
      </AppLayout>
    </NextIntlClientProvider>
  );
}
