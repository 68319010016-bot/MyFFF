import { useEffect, useRef, useState } from 'react';
import CopyButton from './CopyButton';

export default function Contact() {
  const [message, setMessage] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  function notify(text: string) {
    clearTimeout(timer.current);
    setMessage(text);
    timer.current = setTimeout(() => setMessage(''), 4000);
  }
  return (
    <>
      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-container reveal"><div className="contact-top"><div><p className="eyebrow">04 / MAKE CONTACT</p><h2 id="contact-title">ส่งสัญญาณมาได้<br /><span className="gradient-text">ไม่ว่าคุณอยู่มิติไหน</span><span className="accent">.</span></h2><p className="muted">เริ่มต้นบทสนทนา แล้วออกสำรวจเรื่องราวใหม่ไปด้วยกัน</p></div><span className="contact-asterisk" aria-hidden="true">✳</span></div>
        <div className="contact-list">
          <div className="contact-row"><span className="contact-icon" aria-hidden="true">@</span><div className="contact-detail"><span className="micro-label">EMAIL</span><a href="mailto:chayakornkst2817@gmail.com">chayakornkst2817@gmail.com</a></div><CopyButton value="chayakornkst2817@gmail.com" label="คัดลอกอีเมล" onNotify={notify} /></div>
          <div className="contact-row"><span className="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg></span><div className="contact-detail"><span className="micro-label">INSTAGRAM</span><span>Chayakorn_kst</span></div><CopyButton value="Chayakorn_kst" label="คัดลอกชื่อ Instagram" onNotify={notify} /></div>
          <div className="contact-row"><span className="contact-icon facebook-icon" aria-hidden="true">f</span><div className="contact-detail"><span className="micro-label">FACEBOOK</span><span>Chayakorn Khongsaithip</span></div><CopyButton value="Chayakorn Khongsaithip" label="คัดลอกชื่อ Facebook" onNotify={notify} /></div>
        </div>
      </div>
    </section>
      <div className={`toast ${message ? 'visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">{message}</div>
    </>
  );
}
