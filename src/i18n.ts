import {createI18n} from "vue-i18n";
function getBrowserLocale(): string {
    const lang = navigator.language.toLowerCase();

    if (lang.startsWith('pt')) return 'pt';
    if (lang.startsWith('en')) return 'en';

    return 'en'; // fallback
}
export const i18n = createI18n({
    locale: getBrowserLocale(),
    fallbackLocale: 'en',
    messages: {}
})
export async function loadLocale(locale: string) {
    if (!i18n.global.availableLocales.includes(locale)) {
        const messages = await import(
            `@/locales/${locale}.ts`
            );

        i18n.global.setLocaleMessage(locale, messages.default);
    }

    i18n.global.locale = locale;
}