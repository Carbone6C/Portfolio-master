import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-locize-backend'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: 'en',
        saveMissing: true,
        backend: {
            projectId: '74ea3043-2bd4-44e7-8120-e7f6b918ff69',
            apiKey: '9f8f39a4-2127-4de3-b4b1-0a37ad5da670'
        }
    })