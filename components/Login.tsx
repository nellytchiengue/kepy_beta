
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { useTranslation } from '../context/I18nContext';

const Login: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation();

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setError(null);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            window.location.href = '#'; // Redirect on success to home page
        } catch (err: any) {
            console.error("Authentication error:", err);
            let errorMessage = t('login.error_generic');
             if (err.code) {
                const errorCodeKey = `login.error_${err.code.replace('auth/', '').replace(/-/g, '_')}`;
                // Fallback to generic error if specific one doesn't exist
                errorMessage = t(errorCodeKey, { defaultValue: t('login.error_with_code', { code: err.code }) });
            }
            setError(errorMessage);
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-background-dark p-4">
             <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <a className="flex items-center justify-center gap-2 mb-4" href="#" aria-label={t('login.back_to_home_label')}>
                        <svg className="h-10 w-10 text-primary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="text-4xl font-bold font-display text-text-light dark:text-text-dark">KEPY</span>
                    </a>
                    <p className="text-slate-600 dark:text-slate-300">{t('login.subtitle')}</p>
                </div>
                
                <div className="rounded-xl border border-border-light bg-card-light p-8 shadow-lg dark:border-border-dark dark:bg-card-dark">
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="flex w-full items-center justify-center gap-3 rounded-lg border border-border-light bg-white px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-border-dark dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 48 48" >
                           <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                           <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                           <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                           <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                           <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        <span>{t('login.continue_with_google')}</span>
                    </button>
                    {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}
                </div>

                <p className="mt-8 text-center text-sm text-slate-500">
                    {t('login.terms_prefix')} <a href="#" className="underline hover:text-primary">{t('login.terms_link')}</a>.
                </p>
             </div>
        </div>
    );
};

export default Login;