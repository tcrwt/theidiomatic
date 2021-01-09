import { h, render } from 'preact';
import 'preact/devtools';
import App from 'components/app.js';
import './index.css';
import { initialiseGoogleAnalytics } from 'shared/analytics';

const root = document.getElementById('root');

initialiseGoogleAnalytics();

if (root) {
  render(<App />, root);
}
