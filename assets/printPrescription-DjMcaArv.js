import{L as g}from"./index-D74z4tTl.js";function o(t){const e=document.createElement("div");return e.textContent=t??"",e.innerHTML}function b(t){return t?new Date(t).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"—"}function l(t){const e=new URL(g,window.location.origin).href,i=(t.items||[]).map(n=>`
    <tr>
      <td class="med-primary">
        <div class="med-name">${o(n.medicine||n.medicine_name)}</div>
        ${n.dosage?`<div class="med-dosage">${o(n.dosage)}</div>`:""}
      </td>
      <td><span class="freq-tag">${o(n.frequency||"—")}</span></td>
      <td>${o(n.duration||"—")}</td>
      <td class="text-muted">${o(n.instructions||"—")}</td>
    </tr>`).join("");return`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Prescription — ${o(t.patient?.name||"Patient")}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: A4 portrait; margin: 12mm; }
  body { font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; background: #fff; }
  .prescription-letterhead { padding: 24px; }
  .presc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
  .clinic-brand { display: flex; gap: 14px; align-items: center; }
  .clinic-logo { width: 52px; height: 52px; object-fit: contain; }
  .clinic-info h2 { font-size: 18px; font-weight: 800; color: #b91c1c; margin: 0; }
  .clinic-info .tagline { font-size: 10px; color: #666; margin-top: 2px; }
  .branch-contact { text-align: right; font-size: 10px; color: #444; line-height: 1.5; }
  .presc-divider { height: 2px; background: #b91c1c; margin-bottom: 20px; opacity: 0.15; }
  .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px; }
  .info-box label { display: block; font-size: 9px; font-weight: 800; color: #999; margin-bottom: 4px; letter-spacing: 1px; }
  .info-val { font-size: 15px; font-weight: 700; color: #111; }
  .info-val.name { color: #b91c1c; }
  .info-sub { font-size: 11px; color: #666; margin-top: 2px; }
  .text-right { text-align: right; }
  .rx-symbol { font-family: Georgia, serif; font-size: 28px; font-style: italic; font-weight: 700; color: #b91c1c; margin-bottom: 12px; }
  .medicine-table { width: 100%; border-collapse: collapse; margin-bottom: 28px; }
  .medicine-table th { text-align: left; padding: 10px; border-bottom: 2px solid #f3f4f6; font-size: 11px; color: #666; font-weight: 700; }
  .medicine-table td { padding: 12px 10px; border-bottom: 1px solid #f3f4f6; font-size: 13px; vertical-align: top; }
  .med-name { font-weight: 700; color: #111; }
  .med-dosage { font-size: 11px; color: #666; margin-top: 2px; }
  .freq-tag { background: #fef2f2; color: #b91c1c; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; }
  .text-muted { color: #555; }
  .presc-notes-section { margin-bottom: 40px; padding: 12px; background: #f9fafb; border-radius: 6px; border-left: 4px solid #d1d5db; }
  .presc-notes-section label { display: block; font-size: 9px; font-weight: 800; color: #666; margin-bottom: 4px; letter-spacing: 1px; }
  .presc-notes-section p { font-size: 12px; color: #333; line-height: 1.5; }
  .presc-footer-area { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 32px; }
  .footer-notes { font-size: 9px; color: #999; line-height: 1.6; }
  .signature-box { text-align: center; min-width: 180px; }
  .sig-line { height: 1px; background: #333; width: 100%; margin-bottom: 6px; }
  .signature-box p { font-size: 10px; margin: 0; }
  .sig-name { font-weight: 700; color: #111; margin-top: 2px; text-transform: uppercase; }
  .page-break { page-break-after: always; break-after: page; }
</style></head><body>
<div class="prescription-letterhead">
  <header class="presc-header">
    <div class="clinic-brand">
      <img class="clinic-logo" src="${o(e)}" alt="Apple Dental" />
      <div class="clinic-info">
        <h2>APPLE DENTAL CARE</h2>
        <p class="tagline">Multi-Speciality Dental Clinic & Implant Centre</p>
      </div>
    </div>
    <div class="branch-contact">
      <div>Andheri West, Mumbai</div>
      <div>+91 98765 43210</div>
      <div>contact@appledental.com</div>
    </div>
  </header>
  <div class="presc-divider"></div>
  <div class="info-grid">
    <div class="info-box">
      <label>PATIENT DETAILS</label>
      <div class="info-val name">${o(t.patient?.name||"—")}</div>
      <div class="info-sub">MR Number: ${o(t.patient?.mr_number||"—")}</div>
      <div class="info-sub">${o(String(t.patient?.age??"—"))}Y / ${o(t.patient?.gender||"—")}</div>
    </div>
    <div class="info-box text-right">
      <label>PRESCRIPTION INFO</label>
      <div class="info-val">Date: ${o(b(t.date))}</div>
      <div class="info-sub">ID: #${o(String(t.id||"").slice(0,8).toUpperCase())}</div>
      <div class="info-sub">Doctor: ${o(t.doctor?.name||"—")}</div>
    </div>
  </div>
  <div class="presc-body">
    <div class="rx-symbol">Rx</div>
    <table class="medicine-table">
      <thead><tr>
        <th>Medicine & Dosage</th><th>Frequency</th><th>Duration</th><th>Instructions</th>
      </tr></thead>
      <tbody>${i}</tbody>
    </table>
  </div>
  ${t.notes?`<div class="presc-notes-section"><label>GENERAL INSTRUCTIONS</label><p>${o(t.notes)}</p></div>`:""}
  <footer class="presc-footer-area">
    <div class="footer-notes">
      <p>* Please follow the dosage carefully.</p>
      <p>* In case of any allergy, stop the medication and contact the clinic immediately.</p>
    </div>
    <div class="signature-box">
      <div class="sig-line"></div>
      <p>Doctor's Signature</p>
      <p class="sig-name">${o(t.doctor?.name||"—")}</p>
    </div>
  </footer>
</div>
</body></html>`}function h(){const t=sessionStorage.getItem("apple_dental_token");return t?{Authorization:`Bearer ${t}`}:{}}async function d(t){const e=await fetch(`/api/prescriptions/${t}`,{headers:{...h()}});if(!e.ok)throw new Error("Failed to load prescription");return e.json()}function m(t,e){const i=document.createElement("iframe");i.id=e,i.setAttribute("style","position:fixed;width:0;height:0;border:0;visibility:hidden;"),document.body.appendChild(i);const n=()=>{const s=document.getElementById(e);s?.parentNode&&s.parentNode.removeChild(s)},r=i.contentWindow?.document;if(!r){n();return}r.open(),r.write(t),r.close(),i.contentWindow?.addEventListener("afterprint",n);const a=()=>{i.contentDocument?.readyState==="complete"?(i.contentWindow?.focus(),i.contentWindow?.print()):setTimeout(a,50)};setTimeout(a,250)}async function x(t){const e=await d(t),i=l(e),n=new Blob([i],{type:"text/html;charset=utf-8"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=`prescription-${e.patient?.mr_number||t}.html`,a.click(),URL.revokeObjectURL(r)}async function v(t){const e=await d(t),i=l(e);m(i,`presc-print-${t}`)}async function y(t){if(!t?.length)return;const e=await Promise.all(t.map(c=>d(c))),n=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>All Prescriptions</title></head><body>${e.map((c,p)=>{const f=p<e.length-1?'<div class="page-break"></div>':"";return l(c).replace("</body></html>",`${f}</body></html>`)}).join("").replace(/<!DOCTYPE html>[\s\S]*?<body>/gi,"").replace(/<\/body><\/html>/gi,"")}</body></html>`,r=new Blob([n],{type:"text/html;charset=utf-8"}),a=URL.createObjectURL(r),s=document.createElement("a");s.href=a,s.download=`prescriptions-${t.length}.html`,s.click(),URL.revokeObjectURL(a)}async function w(t){if(!t?.length)return;const e=await Promise.all(t.map(a=>d(a))),i=e.map((a,s)=>{const c=l(a).match(/<body>([\s\S]*)<\/body>/i)?.[1]||"",p=s<e.length-1?'<div class="page-break"></div>':"";return c+p}).join(""),r=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>All Prescriptions</title><style>${l(e[0]).match(/<style>([\s\S]*)<\/style>/i)?.[1]||""}</style></head><body>${i}</body></html>`;m(r,"presc-bulk-print")}export{l as buildPrescriptionHtml,y as downloadAllPrescriptions,x as downloadPrescription,d as fetchPrescriptionDetails,w as printAllPrescriptions,v as printPrescription};
