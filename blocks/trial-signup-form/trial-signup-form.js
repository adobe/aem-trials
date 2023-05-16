import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const iframe = document.createElement('iframe');
  iframe.src = cfg['form-link'];
  iframe.height = cfg.height || '800';
  block.appendChild(iframe);
  block.classList.add('visible');
}
