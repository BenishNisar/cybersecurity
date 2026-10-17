"use strict";
(() => {
 document.documentElement.classList.remove('no-js');
 const nav = document.querySelector('.primary-nav');
 const toggle = document.querySelector('.mobile-toggle');
 const header = document.querySelector('.site-header');
 const backdrop = document.querySelector('.nav-backdrop');
 const mobile = window.matchMedia('(max-width: 1279px)');
 const dropdownButtons = [...document.querySelectorAll('.nav-dropdown-toggle')];
 const pageSurfaces = [...document.querySelectorAll('main,footer,.topbar')];
 function closeDropdowns(except) {
  dropdownButtons.forEach(button => {
   if (button !== except) {button.setAttribute('aria-expanded','false');document.getElementById(button.getAttribute('aria-controls')).hidden=true;}
  });
 }
 function closeNav(restoreFocus=false) {
  nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');
  toggle.querySelector('.sr-only').textContent='Open navigation';
  backdrop.hidden=true;document.body.classList.remove('nav-open');
  pageSurfaces.forEach(surface=>surface.inert=false);closeDropdowns();
  if(restoreFocus)toggle.focus();
 }
 function openNav() {
  if(!mobile.matches)return;
  nav.classList.add('is-open');toggle.setAttribute('aria-expanded','true');
  toggle.querySelector('.sr-only').textContent='Close navigation';
  backdrop.hidden=false;document.body.classList.add('nav-open');
  pageSurfaces.forEach(surface=>surface.inert=true);
 }
 toggle.addEventListener('click',()=>toggle.getAttribute('aria-expanded')==='true'?closeNav(true):openNav());
 backdrop.addEventListener('click',()=>closeNav(true));
 dropdownButtons.forEach(button=>{
  const panel=document.getElementById(button.getAttribute('aria-controls'));
  const group=button.closest('.nav-group');
  let openedByHover=false;
  function openDropdown(){closeDropdowns(button);button.setAttribute('aria-expanded','true');panel.hidden=false;}
  button.addEventListener('click',()=>{if(openedByHover&&!mobile.matches){openedByHover=false;openDropdown();return;}const open=button.getAttribute('aria-expanded')!=='true';closeDropdowns();if(open)openDropdown();});
  button.addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();openDropdown();panel.querySelector('a').focus();}});
  group.addEventListener('mouseenter',()=>{if(!mobile.matches&&window.matchMedia('(hover:hover)').matches){openedByHover=button.getAttribute('aria-expanded')!=='true';openDropdown();}});
  group.addEventListener('mouseleave',()=>{openedByHover=false;if(!mobile.matches&&!group.contains(document.activeElement)){button.setAttribute('aria-expanded','false');panel.hidden=true;}});
  group.addEventListener('focusout',event=>{if(!group.contains(event.relatedTarget)){button.setAttribute('aria-expanded','false');panel.hidden=true;}});
 });
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>closeNav()));
 document.addEventListener('click',event=>{if(!header.contains(event.target)&&!backdrop.contains(event.target))closeDropdowns();});
 document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
   const active=dropdownButtons.find(button=>button.getAttribute('aria-expanded')==='true');
   if(active){closeDropdowns();active.focus();}
   else if(toggle.getAttribute('aria-expanded')==='true')closeNav(true);
  }
  if(event.key==='Tab'&&mobile.matches&&toggle.getAttribute('aria-expanded')==='true'){
   const controls=[...header.querySelectorAll('a[href],button:not([disabled])')].filter(element=>element.getClientRects().length);
   const first=controls[0],last=controls[controls.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
 });
 mobile.addEventListener('change',()=>closeNav());
 // Progressive enhancement: the FAQ remains functional without JavaScript.
 document.querySelectorAll('.faq-item').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.faq-item').forEach(other=>{if(other!==item)other.open=false;});}));
 const banner=document.getElementById('cookie-banner');
 const form=document.getElementById('cookie-form');
 const cookieDialog=document.getElementById('cookie-dialog');
 const key='oryvantai.consent.v1';
 const maxAge=180*24*60*60*1000;
 let consent=null;
 try {const stored=JSON.parse(localStorage.getItem(key));if(stored&&stored.version===1&&typeof stored.analytics==='boolean'&&typeof stored.marketing==='boolean'&&Number.isFinite(stored.updatedAt)&&stored.updatedAt<=Date.now()&&Date.now()-stored.updatedAt<maxAge)consent=stored;} catch { /* Tracking remains disabled when storage is unavailable. */ }
 function syncChoices(){form.elements.analytics.checked=Boolean(consent?.analytics);form.elements.marketing.checked=Boolean(consent?.marketing);}
 syncChoices();banner.hidden=Boolean(consent);
 function saveConsent(analytics,marketing){consent={version:1,necessary:true,analytics:Boolean(analytics),marketing:Boolean(marketing),updatedAt:Date.now()};let saved=true;try{localStorage.setItem(key,JSON.stringify(consent));}catch{saved=false;}document.querySelector('.storage-message').hidden=saved;banner.hidden=true;window.dispatchEvent(new CustomEvent('oryvantai:consent',{detail:{...consent}}));return saved;}
 // This site has no optional scripts. A future integration must gate loading on this result.
 window.OryvantConsent={get:()=>consent?{...consent}:null};
 document.getElementById('accept-cookies').addEventListener('click',()=>{saveConsent(true,true);syncChoices();});
 document.getElementById('reject-cookies').addEventListener('click',()=>{saveConsent(false,false);syncChoices();});
 const returnFocus=new Map();
 function openDialog(dialog,opener){syncChoices();returnFocus.set(dialog,opener);dialog.showModal();document.body.classList.add('dialog-open');dialog.querySelector('button').focus();}
 document.querySelectorAll('[data-dialog]').forEach(button=>button.addEventListener('click',()=>openDialog(document.getElementById(button.dataset.dialog),button)));
 document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.addEventListener('keydown',event=>{
   if(event.key!=='Tab')return;
   const controls=[...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),[tabindex="0"]')].filter(el=>el.getClientRects().length);
   const first=controls[0],last=controls[controls.length-1];
   if(!first){event.preventDefault();dialog.focus();return;}
   if(event.shiftKey&&(document.activeElement===first||!dialog.contains(document.activeElement))){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&(document.activeElement===last||!dialog.contains(document.activeElement))){event.preventDefault();first.focus();}
  });
  dialog.querySelectorAll('.close-dialog').forEach(button=>button.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');const opener=returnFocus.get(dialog);if(opener?.isConnected && opener.getClientRects().length)opener.focus();else document.querySelector('[data-dialog="cookie-dialog"]').focus();});
  dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});
 });
 form.addEventListener('submit',event=>{event.preventDefault();if(saveConsent(form.elements.analytics.checked,form.elements.marketing.checked))cookieDialog.close();});
})();
