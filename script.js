document.getElementById("year").textContent=new Date().getFullYear();const m=document.getElementById("menu"),n=document.getElementById("nav");m.addEventListener("click",()=>n.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>n.classList.remove("open")));document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.target);const subject=encodeURIComponent("Estimate request - "+d.get("service"));const body=encodeURIComponent(`Name: ${d.get("name")}
Phone: ${d.get("phone")}
Service: ${d.get("service")}

Project details:
${d.get("details")}

Please call me about an estimate.`);location.href=`mailto:?subject=${subject}&body=${body}`;});