type CopyButtonProps = {
  value: string;
  label: string;
  onNotify: (message: string) => void;
};

function fallbackCopy(text: string): boolean {
  const previousFocus = document.activeElement;
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
  document.body.appendChild(field);
  try {
    field.select();
    field.setSelectionRange(0, text.length);
    return document.execCommand('copy');
  } finally {
    field.remove();
    if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
  }
}

export default function CopyButton({ value, label, onNotify }: CopyButtonProps) {
  async function copy() {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        copied = true;
      }
    } catch { /* Some browsers deny clipboard access; use the fallback. */ }
    if (!copied) {
      try { copied = fallbackCopy(value); } catch { copied = false; }
    }
    onNotify(copied ? `คัดลอกแล้ว: ${value}` : `คัดลอกอัตโนมัติไม่ได้ กรุณาเลือกข้อความแล้วคัดลอก: ${value}`);
  }

  return (
    <button type="button" className="copy-button" onClick={() => void copy()} aria-label={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M15 8V3H3v12h5" /></svg>
      <span>คัดลอก</span>
    </button>
  );
}
