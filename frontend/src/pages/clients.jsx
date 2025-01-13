import React, { Suspense } from 'react';
import { useTranslation, Trans } from 'react-i18next';


const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    fr: { nativeName: 'Français' },
};

function Page() {
    const {t, i18n} = useTranslation();


    return (
        <div className="App">
            <header className="App-header">
                <h4 className="App-title">
                    <Trans i18nKey="title-client">
                    </Trans>
                </h4>
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng} style={{fontWeight: i18n.language === lng ? 'bold' : 'normal'}} type="submit"
                                onClick={() => {
                                    i18n.changeLanguage(lng);
                                }}>
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
                <p>
                </p>
                <p>
                    <Trans i18nKey="description-client.part1">
                        Edit <code>src/App.js</code> and save to reload.
                    </Trans>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('description-client.part2')}
                </a>
            </header>
        </div>
    );
}
export function Clients() {
    return(
        <Suspense fallback="...is loading">
            <Page/>
        </Suspense>
    );
}
