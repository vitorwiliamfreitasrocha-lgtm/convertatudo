/* =============================================
   ConverTaTudo — main.js
   Shared utilities: nav, footer, dropzone, toast
   ============================================= */

/* ── NAV HTML ── */
function getNavHTML(base) {
  const T = window.t;
  return `
  <nav class="nav" id="main-nav">
    <div class="nav-inner">
      <a class="nav-logo" href="${base}/index.html">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="#DC2626"/>
          <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="white" opacity="0.9"/>
          <path d="M16 20 L20 16 L24 20 L20 24 Z" fill="#DC2626"/>
        </svg>
        <span>Converta<strong style="color:var(--primary)">Tudo</strong></span>
      </a>

      <div class="nav-links">
        <a href="${base}/index.html">${T('nav.home')}</a>

        <div class="nav-dropdown">
          <a href="#">${T('nav.images')}</a>
          <div class="dropdown-menu">
            <a href="${base}/tools/imagem-para-pdf.html"><span class="menu-icon">🖼️</span>${T('tools.imgToPdf.name')}</a>
            <a href="${base}/tools/comprimir-imagem.html"><span class="menu-icon">🗜️</span>${T('tools.compressImg.name')}</a>
            <a href="${base}/tools/converter-imagem.html"><span class="menu-icon">🔄</span>${T('tools.convertImg.name')}</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <a href="#">${T('nav.pdf')}</a>
          <div class="dropdown-menu">
            <a href="${base}/tools/editar-pdf.html"><span class="menu-icon">📝</span>${T('tools.editPdf.name')}</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <a href="#">${T('nav.media')}</a>
          <div class="dropdown-menu">
            <a href="${base}/tools/converter-audio.html"><span class="menu-icon">🎵</span>${T('tools.convertAudio.name')}</a>
            <a href="${base}/tools/converter-video.html"><span class="menu-icon">🎬</span>${T('tools.convertVideo.name')}</a>
          </div>
        </div>
      </div>

      <button class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="nav-mobile hidden" id="mobile-menu">
      <a href="${base}/index.html">${T('nav.home')}</a>
      <div class="mobile-section-title">${T('nav.images')}</div>
      <a href="${base}/tools/imagem-para-pdf.html">🖼️ ${T('tools.imgToPdf.name')}</a>
      <a href="${base}/tools/comprimir-imagem.html">🗜️ ${T('tools.compressImg.name')}</a>
      <a href="${base}/tools/converter-imagem.html">🔄 ${T('tools.convertImg.name')}</a>
      <div class="mobile-section-title">${T('nav.pdf')}</div>
      <a href="${base}/tools/editar-pdf.html">📝 ${T('tools.editPdf.name')}</a>
      <div class="mobile-section-title">${T('nav.media')}</div>
      <a href="${base}/tools/converter-audio.html">🎵 ${T('tools.convertAudio.name')}</a>
      <a href="${base}/tools/converter-video.html">🎬 ${T('tools.convertVideo.name')}</a>
    </div>
  </nav>`;
}

/* ── FOOTER HTML ── */
function getFooterHTML(base) {
  const T = window.t;
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">ConverTaTudo</div>
        <p class="footer-brand-desc">${T('footer.desc')}</p>
      </div>
      <div class="footer-col">
        <h4>${T('footer.colTools')}</h4>
        <a href="${base}/tools/imagem-para-pdf.html">${T('tools.imgToPdf.name')}</a>
        <a href="${base}/tools/comprimir-imagem.html">${T('tools.compressImg.name')}</a>
        <a href="${base}/tools/converter-imagem.html">${T('tools.convertImg.name')}</a>
        <a href="${base}/tools/editar-pdf.html">${T('tools.editPdf.name')}</a>
        <a href="${base}/tools/converter-audio.html">${T('tools.convertAudio.name')}</a>
        <a href="${base}/tools/converter-video.html">${T('tools.convertVideo.name')}</a>
      </div>
      <div class="footer-col">
        <h4>${T('footer.colLinks')}</h4>
        <a href="${base}/index.html">${T('nav.home')}</a>
        <a href="${base}/privacidade.html">${T('nav.privacy')}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>${T('footer.copyright')}</p>
    </div>
  </footer>`;
}

/* ── RENDER NAV + FOOTER ── */
function renderPage(base = '.') {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = getNavHTML(base);
  if (footerEl) footerEl.innerHTML = getFooterHTML(base);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Apply translations
  if (window.applyI18n) window.applyI18n();
}

/* ── DROPZONE ── */
/*
  Usage:
    initDropzone({
      el: document.getElementById('my-dropzone'),
      accept: 'image/*',
      multiple: true,
      onFiles: (fileList) => { ... }
    });
*/
function initDropzone({ el, accept = '*', multiple = false, onFiles }) {
  if (!el) return;
  const input = el.querySelector('input[type="file"]');
  if (input) {
    input.accept = accept;
    input.multiple = multiple;
    input.addEventListener('change', () => onFiles && onFiles(input.files));
  }

  el.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
    if (input) input.click();
  });

  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.classList.add('drag-over');
  });
  el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag-over');
    const files = e.dataTransfer?.files;
    if (files && files.length && onFiles) onFiles(files);
  });
}

/* ── TOAST NOTIFICATIONS ── */
function toast(msg, type = 'info', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(110%)'; el.style.transition = '0.3s'; }, duration - 300);
  setTimeout(() => el.remove(), duration);
}

/* ── PROGRESS ── */
function setProgress(percent, labelEl, barEl) {
  if (barEl) barEl.style.width = `${percent}%`;
  if (labelEl) labelEl.textContent = `${Math.round(percent)}%`;
}

/* ── FILE UTILS ── */
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);
}

function fileExt(filename) {
  return filename.split('.').pop().toLowerCase();
}

function fileBaseName(filename) {
  return filename.replace(/\.[^/.]+$/, '');
}

/* Expose globally */
window.renderPage = renderPage;
window.initDropzone = initDropzone;
window.toast = toast;
window.setProgress = setProgress;
window.formatSize = formatSize;
window.downloadBlob = downloadBlob;
window.fileExt = fileExt;
window.fileBaseName = fileBaseName;
