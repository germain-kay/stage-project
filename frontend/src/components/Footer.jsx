import React from 'react';
import i18n from 'i18next';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    fr: { nativeName: 'Français' },
};

const Footer = () => {

    return (
        <footer className="text-center bg-white shadow">
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        className={"rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider text-gray-900 "}
                        key={lng} type="submit"
                        onClick={() => {
                            i18n.changeLanguage(lng);
                        }}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>

        </footer>
    )

}

export default Footer;
