import { useEffect, useRef, useState } from 'react';

const links = [
  { id: 'about', label: 'เกี่ยวกับฉัน' },
  { id: 'skills', label: 'ทักษะพิเศษ' },
  { id: 'work', label: 'ผลงาน' },
  { id: 'contact', label: 'มาคุยกัน' },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButton = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    const viewport = window.matchMedia('(max-width: 700px)');
    const closeMenu = () => setIsOpen(false);
    viewport.addEventListener('change', closeMenu);
    return () => viewport.removeEventListener('change', closeMenu);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const handleOutside = (event: Event) => {
      if (event.target instanceof Node && !navigation.current?.contains(event.target) && !menuButton.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOutside);
    document.addEventListener('focusin', handleOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('focusin', handleOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function navigate(id: string) {
    setIsOpen(false);
    const destination = document.getElementById(id);
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
      destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
    }
  }

  return (
    <header className="site-header">
      <div className="page-container flex h-full items-center justify-between">
        <a className="brand" href="#home" aria-label="ชยากร กลับหน้าแรก"><span className="brand-mark" aria-hidden="true">✳</span> CK<span className="brand-dot">.</span></a>
        <button type="button" ref={menuButton} className="menu-toggle" aria-label={isOpen ? 'ปิดเมนูนำทาง' : 'เปิดเมนูนำทาง'} aria-controls="navigation" aria-expanded={isOpen} onClick={() => setIsOpen(open => !open)}><span /><span /></button>
        <nav id="navigation" ref={navigation} className={isOpen ? 'is-open' : ''} aria-label="เมนูหลัก">
          {links.map(link => (
            <a key={link.id} href={`#${link.id}`} className={link.id === 'contact' ? 'nav-contact' : undefined} aria-current={activeSection === link.id ? 'location' : undefined} onClick={() => navigate(link.id)}>
              {link.label}{link.id === 'contact' && <> <span aria-hidden="true">↗</span></>}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
