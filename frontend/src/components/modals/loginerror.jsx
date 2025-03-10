import {Info, X} from "@phosphor-icons/react";
import {useTranslation} from "react-i18next";


export default function Loginerror({ setOpenLoginError }) {
    const { t } = useTranslation();

    return(
        <div className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <Info size={16} color="red"/>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
                {t('login.errorlogin')}
            </div>
            <button type="button" onClick={() => setOpenLoginError(false)} className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                <span className="sr-only">Close</span>
                <X size={16} color="red"/>
            </button>
        </div>
    )



}