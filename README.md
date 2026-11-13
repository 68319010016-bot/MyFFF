# Chayakorn Portfolio

Portfolio หน้าเดียว ธีมอวกาศและมหาสมุทร พัฒนาด้วย React, TypeScript, Tailwind CSS และ Vite

## เปิดใช้งาน

ติดตั้ง Node.js 22.12 ขึ้นไป (หรือ 20.19 ขึ้นไป) แล้วเปิด Terminal ในโฟลเดอร์นี้:

```sh
npm install
npm run dev
```

เปิด URL ที่ Vite แสดงใน Terminal โดยปกติคือ http://127.0.0.1:5173

React รุ่นนี้ต้องเปิดผ่านเซิร์ฟเวอร์ Vite แทนการดับเบิลคลิก index.html

## ตรวจสอบและสร้างไฟล์ใช้งานจริง

```sh
npm run typecheck
npm run build
npm run preview
```

คำสั่ง build ตรวจ TypeScript ก่อนสร้างไฟล์เว็บใน `dist/` นำไฟล์ทั้งหมดภายใน `dist/` ไปวางในโฟลเดอร์ของเว็บเซิร์ฟเวอร์ได้ เช่น `C:\xampp\htdocs\portfolio` แล้วเปิด Apache และเข้า http://localhost/portfolio/ หรือใช้ไฟล์ build ในโฟลเดอร์เดิมผ่าน http://localhost/MyFFF/dist/

## โครงสร้าง

- `src/App.tsx` จัดลำดับเนื้อหาหน้าเว็บ
- `src/components/Sections.tsx` เนื้อหาและกราฟิก SVG
- `src/components/Header.tsx` เมนูมือถือและสถานะส่วนที่กำลังดู
- `src/components/Contact.tsx` ช่องทางติดต่อและข้อความแจ้งผล
- `src/components/CopyButton.tsx` ปุ่มคัดลอกและวิธีสำรองเมื่อ Clipboard API ไม่พร้อม
- `src/hooks/useScrollReveal.ts` เอฟเฟกต์เลื่อนหน้าและการลดภาพเคลื่อนไหว
- `src/style.css` Tailwind CSS, theme และงานกราฟิกเฉพาะของเว็บ
- `vite.config.ts` ตั้งค่า React, Tailwind และ relative asset paths สำหรับ XAMPP

กราฟิกยานและประตูมิติเป็นภาพประกอบ SVG ไม่ใช่ภาพผลงานจริง ฟอนต์ Google Fonts ต้องใช้อินเทอร์เน็ต หากโหลดไม่ได้จะใช้ Tahoma หรือฟอนต์ sans-serif ของระบบ ไม่มีการเดาลิงก์ Facebook จากชื่อ
