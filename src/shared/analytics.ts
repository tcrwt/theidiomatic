export const initialiseGoogleAnalytics = () => {
  try {
    const mode = import.meta?.env?.MODE;
    gtag('config', 'G-GJREYZZ8L1', { debug_mode: mode === 'development' });
  } catch (error) {
    console.error(error);
  }
};
