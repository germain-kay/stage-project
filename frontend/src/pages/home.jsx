import React, { Suspense } from 'react';
import { useTranslation, Trans } from 'react-i18next';


function Page() {
    const {t} = useTranslation();

    return (
        <main className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8  text-gray-900">
                <p>
                    <Trans i18nKey="description.part1">
                        Edit <code>src/App.js</code> and save to reload.
                    </Trans>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('description.part2')}
                </a>
            </div>
        </main>
    );
}

export function Home() {
    return (
        <Suspense fallback="...is loading">
            <Page/>
        </Suspense>
    );
}
