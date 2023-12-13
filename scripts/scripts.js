/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { setLibs } from './utils.js';

const LIBS = '/libs';
const STYLES = ['/styles/styles.css'];
const CONFIG = {
  imsClientId: '',
  locales: { '': { ietf: 'en-US', tk: 'hah7vzn.css' } },
  geoRouting: 'off',
  productionDomain: 'aem-trial.adobe.com',
  prodDomains: ['aem-trial.adobe.com'],
  useDotHtml: true,
};

const eagerLoad = (img) => {
  img?.setAttribute('loading', 'eager');
  img?.setAttribute('fetchpriority', 'high');
};

(async function loadLCPImage() {
  const marquee = document.querySelector('.marquee');
  if (marquee) {
    marquee.querySelectorAll('img').forEach(eagerLoad);
  } else {
    eagerLoad(document.querySelector('img'));
  }
}());

/*
 * ------------------------------------------------------------
 * Edit below at your own risk
 * ------------------------------------------------------------
 */

const miloLibs = setLibs(LIBS);

(function loadStyles() {
  const paths = [`${miloLibs}/styles/styles.css`];
  if (STYLES) { paths.push(STYLES); }
  paths.forEach((path) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', path);
    document.head.appendChild(link);
  });
}());

(async function loadPage() {
  const { loadArea, setConfig } = await import(`${miloLibs}/utils/utils.js`);
  const config = setConfig({ ...CONFIG, miloLibs });
  console.log(config);
  await loadArea();
}());
