import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const iframe = document.createElement('iframe');
  iframe.src = 'https://commerce.adobe.com/business-trial/sign-up?items%5B0%5D%5Bid%5D=649A1AF5CBC5467A25E84F2561274821&cli=tester&co=US&lang=en';
  iframe.height = cfg.height || '315';
  block.appendChild(iframe);
  block.classList.add('visible');
}
