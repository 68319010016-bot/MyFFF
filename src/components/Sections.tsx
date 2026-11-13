import profilePhoto from '../assets/profile.png';

export function Graphics() {
  return (
    <svg className="svg-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="hull" x1="0" y1="0" x2="0.6" y2="1"><stop stopColor="#d1e8f1"/><stop offset=".45" stopColor="#6f91b1"/><stop offset="1" stopColor="#283a62"/></linearGradient>
      <linearGradient id="glass" x2="1" y2="1"><stop stopColor="#86fff3"/><stop offset=".5" stopColor="#168da5"/><stop offset="1" stopColor="#192f69"/></linearGradient>
      <radialGradient id="portal-fill"><stop stopColor="#111a3c"/><stop offset=".7" stopColor="#152454"/><stop offset="1" stopColor="#6834ad"/></radialGradient>
      <symbol id="craft" viewBox="0 0 600 350">
        <path d="M152 181 70 140 92 199 58 247 167 226M367 133 419 71 454 80 423 155" fill="#354a73" stroke="#97afca" strokeWidth="2"/>
        <path d="m125 217-52 13-39 26 90-2" fill="#65f7ef" opacity=".6"/>
        <path d="M133 167c55-59 205-70 307-21 51 24 83 50 86 72-64 66-242 75-353 25-36-16-57-45-40-76Z" fill="url(#hull)" stroke="#aacadd" strokeWidth="2"/>
        <path d="M215 153c12-67 97-98 151-45l40 49c-62 23-131 22-191-4Z" fill="url(#glass)" stroke="#b5eeed" strokeWidth="4"/>
        <path d="M296 91 285 168M341 98l15 65" fill="none" stroke="#76c8d7" strokeWidth="5"/>
        <path d="M151 205c112 35 250 41 360 6" fill="none" stroke="#263858" strokeWidth="6"/>
        <ellipse cx="207" cy="204" rx="24" ry="22" fill="#132e48" stroke="#a3bccb" strokeWidth="6"/><ellipse cx="207" cy="204" rx="14" ry="13" fill="url(#glass)"/>
        <path d="m277 229 90 63 59-9-48-67" fill="url(#hull)" stroke="#91afc5" strokeWidth="2"/>
        <path d="m311 241 69 34 22-3" fill="none" stroke="#8dffff" strokeWidth="4"/>
        <path d="m451 172 18 6m-4 54 19-5" stroke="#9dfff6" strokeWidth="7" strokeLinecap="round"/>
        <path d="m247 118 22-12" stroke="#d0fffa" strokeWidth="5" strokeLinecap="round"/>
      </symbol>
    </defs>
  </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-stars" aria-hidden="true"></div>
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"></span> A PERSONAL UNIVERSE</p>
          <p className="hero-intro">สวัสดี นักเดินทาง <span aria-hidden="true">✧</span></p>
          <h1 id="hero-title"><span className="name-prefix">นาย</span>ชยากร<br /><span className="gradient-text">คงสายทิพย์</span></h1>
          <p className="hero-motto" lang="en">one roll one Unique</p>
          <p className="hero-description">ระหว่างจักรวาลอันไกลโพ้นกับมหาสมุทรอันลึกลับ<br className="desktop-break" /> ยังมีเรื่องราวของฉันให้คุณออกสำรวจ</p>
          <div className="flex gap-[13px]"><a className="button button-primary" href="#work">ดูผลงาน <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#contact">ติดต่อฉัน <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-art" role="img" aria-label="รูปโปรไฟล์ นายชยากร คงสายทิพย์ ในกรอบประตูมิติ พร้อมภาพประกอบยานสำรวจใต้น้ำ">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <span className="art-spark spark-one">✦</span><span className="art-spark spark-two">✧</span><span className="art-spark spark-three">+</span>
          <svg className="portal-scene" viewBox="0 0 620 620" aria-hidden="true">
            <defs><linearGradient id="ring" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b0a0ff"/><stop offset=".45" stopColor="#8d54ed"/><stop offset="1" stopColor="#4fd9ef"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="9"/></filter><clipPath id="portal-clip"><ellipse cx="320" cy="270" rx="167" ry="213"/></clipPath><linearGradient id="sea" x2="0" y2="1"><stop stopColor="#34c1d1" stopOpacity=".3"/><stop offset="1" stopColor="#102342" stopOpacity="0"/></linearGradient></defs>
            <ellipse cx="320" cy="270" rx="178" ry="223" fill="none" stroke="#9359ff" strokeWidth="17" filter="url(#glow)" opacity=".7"/>
            <ellipse cx="320" cy="270" rx="169" ry="214" fill="url(#portal-fill)" stroke="url(#ring)" strokeWidth="8"/>
            <g clipPath="url(#portal-clip)"><image href={profilePhoto} x="153" y="57" width="334" height="426" preserveAspectRatio="xMidYMid slice" /></g>
            <ellipse cx="320" cy="270" rx="180" ry="225" fill="none" stroke="#a694ed" strokeWidth="1" strokeDasharray="3 13" opacity=".65"/>
            <path d="M25 471q92-33 175 0t184 1 212 2M0 498q100-32 195 0t190 0 240 1M48 527q100-24 182 0t186-2 160 0M104 554q80-18 180 0t228 0" fill="none" stroke="#58c8e3" strokeWidth="1" opacity=".35"/>
            <ellipse cx="320" cy="485" rx="146" ry="19" fill="#7c69f5" opacity=".15"/>
            <use href="#craft" x="100" y="284" width="420" height="245" className="floating-craft"/>
            <g fill="none" stroke="#83e8ef" opacity=".6"><circle cx="115" cy="391" r="5"/><circle cx="102" cy="365" r="3"/><circle cx="496" cy="405" r="4"/></g>
          </svg>
          <span className="art-tag"><span></span> BETWEEN SPACE & SEA</span>
          <span className="illustration-note">กราฟิกประตูมิติและยานเป็นภาพประกอบ</span>
        </div>
      </div>
      <div className="page-container hero-bottom"><a href="#about"><span className="scroll-line" aria-hidden="true"></span> เลื่อนเพื่อออกสำรวจ <span aria-hidden="true">↓</span></a><span>SPACE ABOVE. OCEAN BELOW.</span></div>
    </section>
  );
}

export function Journey() {
  return (
    <div className="journey-strip" aria-hidden="true"><span>CURIOUS MIND</span><i>✦</i><span>ACROSS DIMENSIONS</span><i>✦</i><span>INTO THE DEEP</span><i>✦</i><span>ONE UNIQUE JOURNEY</span><i>✦</i></div>
  );
}

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="page-container about-grid reveal">
        <div><p className="eyebrow">01 / ABOUT ME</p><h2 id="about-title">ความฝันของฉัน<br />อยู่ไกลกว่า<span className="gradient-text">เส้นขอบฟ้า</span></h2></div>
        <div className="about-story"><span className="small-orbit" aria-hidden="true">✧</span><p className="section-kicker">ทุกการผจญภัย เริ่มต้นจากความอยากรู้อยากเห็น</p><blockquote>“อยากเดินทางข้ามมิติ<br />ไปหาเหล่าอเวนเจอร์”</blockquote><p className="muted">นี่คือเป้าหมายของฉัน และเป็นจุดเริ่มต้นของโลกใบนี้<br />โลกที่จินตนาการพาเราเดินทางจากห้วงอวกาศลงสู่ใต้ทะเล</p><span className="text-tag">จินตนาการไม่มีเส้นขอบ</span></div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-container reveal"><div className="section-heading"><div><p className="eyebrow">02 / MY SPECIAL SKILL</p><h2 id="skills-title">ความพิเศษในแบบฉัน<span className="accent">.</span></h2></div><span className="muted section-aside">เพราะแต่ละคน มีความ Unique ของตัวเอง</span></div>
        <div className="skill-panel"><span className="skill-star" aria-hidden="true">✳</span><div><span className="micro-label">A LITTLE DIFFERENT. A LITTLE ME.</span><p lang="en">six seven roll <span>no Unique</span></p></div><span className="skill-orbit" aria-hidden="true"></span></div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="page-container reveal"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2 id="work-title">บันทึกจากการสำรวจ<span className="accent">.</span></h2></div><span className="section-aside muted">เมื่ออวกาศและมหาสมุทรมาพบกัน</span></div>
        <article className="project-card">
          <div className="project-art"><span className="project-coordinate" aria-hidden="true">THE SPACE / OCEAN EXPLORER</span><div className="light-beam"></div><div className="sea-floor"></div><svg viewBox="0 0 600 350" role="img" aria-label="ภาพประกอบยานสำรวจสีเงินกับหน้าต่างสีฟ้าในโลกใต้น้ำ"><use href="#craft"/></svg><span className="project-caption">✧ ภาพประกอบตามจินตนาการ ไม่ใช่ภาพผลงานจริง</span></div>
          <div className="project-info"><div className="project-tags flex flex-wrap gap-[7px]"><span>SPACE</span><span>OCEAN</span><span>EXPLORATION</span></div><p className="micro-label">FEATURED PROJECT</p><h3>เคยสร้างยานอวกาศสำรวจใต้น้ำ</h3><div className="project-divider"></div><p className="muted">ผลงานเด่นของฉัน<br />ระหว่างความลึกของทะเลกับความไกลของจักรวาล</p><span className="project-icon" aria-hidden="true">↗</span></div>
        </article>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="page-container footer"><a className="brand" href="#home" aria-label="กลับหน้าแรก">CK<span className="brand-dot">.</span></a><p>นายชยากร คงสายทิพย์ <span>·</span> one roll one Unique</p><a href="#home">กลับสู่วงโคจร <span aria-hidden="true">↑</span></a></footer>
  );
}
