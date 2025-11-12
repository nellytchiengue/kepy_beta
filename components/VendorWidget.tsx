
import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL_BASE, GOOGLE_FORM_VENDOR_ID_PARAM, LOOKER_VENDOR_BASE_URL } from '../constants';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, User } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const VendorWidget: React.FC = () => {
  const [vendorId, setVendorId] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  // Handle auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Set vendorId based on user status or localStorage
  useEffect(() => {
    if (user) {
      setVendorId(user.email || '');
      localStorage.removeItem('kepyVendorId'); // Clean up old local ID
    } else {
      const savedVendorId = localStorage.getItem('kepyVendorId');
      if (savedVendorId) {
        setVendorId(savedVendorId);
      } else {
        setVendorId(''); // Ensure it's empty if no user and no saved ID
      }
    }
  }, [user]);

  // Handle input change for non-logged-in users
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVendorId = event.target.value;
    setVendorId(newVendorId);
    localStorage.setItem('kepyVendorId', newVendorId);
  };

  // Construct URLs
  const prefilledFormUrl = `${GOOGLE_FORM_URL_BASE}?usp=pp_url&${GOOGLE_FORM_VENDOR_ID_PARAM}=${encodeURIComponent(vendorId)}`;
  
  const lookerParams = JSON.stringify({
    ds0: {
      vendorId: vendorId
    }
  });
  const filteredDashboardUrl = `${LOOKER_VENDOR_BASE_URL}?params=${encodeURIComponent(lookerParams)}`;
  
  const isVendorIdEmpty = vendorId.trim() === '';

  return (
    <div className="w-full max-w-xs flex flex-col items-center gap-4">
      {user ? (
        <div className="w-full text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Connecté en tant que :</p>
          <p className="text-base font-semibold text-text-light dark:text-text-dark truncate" title={user.email || ''}>{user.email}</p>
        </div>
      ) : (
        <div className="w-full">
          <label htmlFor="vendorId" className="sr-only">Votre identifiant vendeur</label>
          <input
            id="vendorId"
            type="text"
            value={vendorId}
            onChange={handleInputChange}
            placeholder="Votre identifiant vendeur"
            className="w-full px-4 py-2 border border-border-light rounded-lg bg-background-light dark:bg-slate-700 dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-transparent transition"
            aria-describedby="vendorId-help"
          />
          <p id="vendorId-help" className="text-xs text-slate-500 mt-1">Cet identifiant est sauvegardé sur votre appareil.</p>
        </div>
      )}

      <a
        href={!isVendorIdEmpty ? prefilledFormUrl : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-base font-medium text-white shadow-sm transition-colors ${
          isVendorIdEmpty ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'
        }`}
        aria-disabled={isVendorIdEmpty}
        onClick={(e) => isVendorIdEmpty && e.preventDefault()}
      >
        Saisir une vente (pré-rempli)
      </a>

      <a
        href={!isVendorIdEmpty ? filteredDashboardUrl : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-12 w-full items-center justify-center rounded-xl border border-primary bg-transparent px-6 text-base font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 ${
          isVendorIdEmpty ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-disabled={isVendorIdEmpty}
        onClick={(e) => isVendorIdEmpty && e.preventDefault()}
      >
        Mon tableau de bord (filtré)
      </a>
    </div>
  );
};

export default VendorWidget;
