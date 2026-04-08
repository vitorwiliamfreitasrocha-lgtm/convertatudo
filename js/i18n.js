/* =============================================
   ConverTaTudo — i18n (PT/EN)
   Language auto-detection via navigator.language
   ============================================= */

const TRANSLATIONS = {
  pt: {
    // Nav
    nav: {
      home: 'Início',
      images: 'Imagens',
      pdf: 'PDF',
      media: 'Mídia',
      privacy: 'Privacidade',
    },
    // Tools menu
    tools: {
      imgToPdf:    { name: 'Imagem para PDF',     desc: 'Converta JPG, PNG e outras imagens em PDF' },
      compressImg: { name: 'Comprimir Imagem',     desc: 'Reduza o tamanho de imagens sem perder qualidade' },
      convertImg:  { name: 'Converter Imagem',     desc: 'Converta entre PNG, JPG, WebP e outros formatos' },
      editPdf:     { name: 'Editar PDF',           desc: 'Adicione textos e imagens ao seu PDF' },
      convertAudio:{ name: 'Converter Áudio',      desc: 'Converta MP3, WAV, OGG, M4A e mais' },
      convertVideo:{ name: 'Converter Vídeo',      desc: 'Converta MP4, WebM, AVI, MOV e outros' },
      removeBg:    { name: 'Remover Fundo',         desc: 'Remova o fundo de imagens automaticamente com IA' },
      resizeImg:   { name: 'Redimensionar Imagem',  desc: 'Altere o tamanho da imagem em pixels ou porcentagem' },
      mergePdf:    { name: 'Juntar PDFs',            desc: 'Una vários arquivos PDF em um único documento' },
      pdfToImg:    { name: 'PDF para Imagem',        desc: 'Converta páginas do PDF em imagens JPG ou PNG' },
      compressPdf: { name: 'Comprimir PDF',          desc: 'Reduza o tamanho do PDF sem perder qualidade visual' },
      splitPdf:    { name: 'Dividir PDF',            desc: 'Separe um PDF em páginas individuais ou intervalos' },
      wordToPdf:   { name: 'Word para PDF',          desc: 'Converta documentos .docx em PDF gratuitamente' },
      cropImg:     { name: 'Cortar Imagem',          desc: 'Corte e rotacione suas imagens com precisão' },
      qrcode:      { name: 'Gerador de QR Code',     desc: 'Crie QR Codes para links, WhatsApp, Wi-Fi e mais' },
      audioEditor: { name: 'Editor de Áudio',         desc: 'Corte, ajuste volume e aplique fades em arquivos de áudio' },
    },
    // Hero
    hero: {
      badge:    '100% gratuito · 100% no seu navegador',
      title:    'Converta <span>qualquer arquivo</span><br>em segundos',
      subtitle: 'Imagens, PDFs, áudios e vídeos — tudo convertido diretamente no seu navegador. Sem uploads para servidores. Sem cadastro.',
      stat1val: '6+',    stat1lbl: 'Ferramentas',
      stat2val: '100%',  stat2lbl: 'Gratuito',
      stat3val: '0',     stat3lbl: 'Upload externo',
    },
    // Categories
    cat: {
      images:   'Ferramentas de Imagem',
      imagesSub:'Converta, comprima e transforme suas imagens',
      pdf:      'Ferramentas de PDF',
      pdfSub:   'Edite e manipule seus documentos PDF',
      media:    'Áudio e Vídeo',
      mediaSub: 'Converta arquivos de mídia em diferentes formatos',
      utils:    'Utilidades',
      utilsSub: 'Ferramentas práticas do dia a dia',
    },
    // Common tool UI
    ui: {
      dragDrop:       'Arraste e solte arquivos aqui',
      or:             'ou',
      selectFile:     'Selecionar arquivo',
      selectFiles:    'Selecionar arquivos',
      convert:        'Converter',
      download:       'Baixar',
      downloadAll:    'Baixar todos',
      clear:          'Limpar',
      back:           '← Voltar',
      processing:     'Processando...',
      done:           'Concluído!',
      error:          'Erro ao processar o arquivo.',
      fileReady:      'Arquivo pronto para download.',
      filesReady:     'Arquivos prontos para download.',
      maxSize:        'Tamanho máximo: ',
      supported:      'Formatos suportados: ',
      options:        'Opções',
      output:         'Resultado',
      quality:        'Qualidade',
      format:         'Formato de saída',
      pageSize:       'Tamanho da página',
      orientation:    'Orientação',
      portrait:       'Retrato',
      landscape:      'Paisagem',
      addMore:        'Adicionar mais',
      remove:         'Remover',
      privacyNote:    '🔒 Seus arquivos nunca saem do seu dispositivo.',
    },
    // Footer
    footer: {
      desc:      'Converta imagens, PDFs, áudios e vídeos gratuitamente, direto no navegador.',
      colTools:  'Ferramentas',
      colLinks:  'Links',
      copyright: '© 2025 ConverTaTudo. Feito com ❤️ para o Brasil e o mundo.',
    },
    // Privacy
    privacy: {
      title:    'Política de Privacidade',
      updated:  'Atualizado em: janeiro de 2025',
    },
  },

  en: {
    nav: {
      home: 'Home',
      images: 'Images',
      pdf: 'PDF',
      media: 'Media',
      privacy: 'Privacy',
    },
    tools: {
      imgToPdf:    { name: 'Image to PDF',       desc: 'Convert JPG, PNG and other images to PDF' },
      compressImg: { name: 'Compress Image',     desc: 'Reduce image file size without losing quality' },
      convertImg:  { name: 'Convert Image',      desc: 'Convert between PNG, JPG, WebP and other formats' },
      editPdf:     { name: 'Edit PDF',           desc: 'Add text and images to your PDF' },
      convertAudio:{ name: 'Convert Audio',      desc: 'Convert MP3, WAV, OGG, M4A and more' },
      convertVideo:{ name: 'Convert Video',      desc: 'Convert MP4, WebM, AVI, MOV and more' },
      removeBg:    { name: 'Remove Background',   desc: 'Automatically remove image backgrounds with AI' },
      resizeImg:   { name: 'Resize Image',         desc: 'Change image dimensions in pixels or percentage' },
      mergePdf:    { name: 'Merge PDFs',           desc: 'Combine multiple PDF files into one document' },
      pdfToImg:    { name: 'PDF to Image',         desc: 'Convert PDF pages into JPG or PNG images' },
      compressPdf: { name: 'Compress PDF',         desc: 'Reduce PDF file size without losing visual quality' },
      splitPdf:    { name: 'Split PDF',            desc: 'Split a PDF into individual pages or custom ranges' },
      wordToPdf:   { name: 'Word to PDF',          desc: 'Convert .docx documents to PDF for free' },
      cropImg:     { name: 'Crop Image',           desc: 'Crop and rotate your images with precision' },
      qrcode:      { name: 'QR Code Generator',   desc: 'Create QR Codes for links, WhatsApp, Wi-Fi and more' },
      audioEditor: { name: 'Audio Editor',          desc: 'Cut, adjust volume and apply fades to audio files' },
    },
    hero: {
      badge:    '100% free · 100% in your browser',
      title:    'Convert <span>any file</span><br>in seconds',
      subtitle: 'Images, PDFs, audio and video — all converted directly in your browser. No server uploads. No sign-up.',
      stat1val: '6+',    stat1lbl: 'Tools',
      stat2val: '100%',  stat2lbl: 'Free',
      stat3val: '0',     stat3lbl: 'External uploads',
    },
    cat: {
      images:   'Image Tools',
      imagesSub:'Convert, compress and transform your images',
      pdf:      'PDF Tools',
      pdfSub:   'Edit and manipulate your PDF documents',
      media:    'Audio & Video',
      mediaSub: 'Convert media files to different formats',
      utils:    'Utilities',
      utilsSub: 'Practical everyday tools',
    },
    ui: {
      dragDrop:       'Drag & drop files here',
      or:             'or',
      selectFile:     'Select file',
      selectFiles:    'Select files',
      convert:        'Convert',
      download:       'Download',
      downloadAll:    'Download all',
      clear:          'Clear',
      back:           '← Back',
      processing:     'Processing...',
      done:           'Done!',
      error:          'Error processing file.',
      fileReady:      'File ready to download.',
      filesReady:     'Files ready to download.',
      maxSize:        'Max size: ',
      supported:      'Supported formats: ',
      options:        'Options',
      output:         'Result',
      quality:        'Quality',
      format:         'Output format',
      pageSize:       'Page size',
      orientation:    'Orientation',
      portrait:       'Portrait',
      landscape:      'Landscape',
      addMore:        'Add more',
      remove:         'Remove',
      privacyNote:    '🔒 Your files never leave your device.',
    },
    footer: {
      desc:      'Convert images, PDFs, audio and video for free, right in your browser.',
      colTools:  'Tools',
      colLinks:  'Links',
      copyright: '© 2025 ConverTaTudo. Made with ❤️ for the world.',
    },
    privacy: {
      title:    'Privacy Policy',
      updated:  'Last updated: January 2025',
    },
  }
};

/* Detect language: PT if browser is pt-*, otherwise EN */
function detectLang() {
  const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return lang.startsWith('pt') ? 'pt' : 'en';
}

const LANG = detectLang();

/* Get translation by dot-path, e.g. t('ui.convert') */
function t(path) {
  const keys = path.split('.');
  let val = TRANSLATIONS[LANG];
  for (const k of keys) {
    if (val == null) return path;
    val = val[k];
  }
  return val ?? path;
}

/* Apply data-i18n attributes to the DOM */
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

/* Export for use in other scripts */
window.LANG = LANG;
window.t = t;
window.applyI18n = applyI18n;
