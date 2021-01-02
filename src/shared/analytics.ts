export const initialiseGoogleAnalytics = () => {
  const mode = import.meta?.env?.MODE;
  gtag('config', 'G-GJREYZZ8L1', { debug_mode: mode === 'development' });
};
