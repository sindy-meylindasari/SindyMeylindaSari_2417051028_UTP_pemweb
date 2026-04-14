function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function validateForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("formError");

  result.className = "error";

  if (!name || !email || !message) {
    result.textContent = "Isi semua kolom dulu yaa 💜";
    result.classList.add("danger");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    result.textContent = "Format email belum benar ya.";
    result.classList.add("danger");
    return false;
  }

  result.textContent = "Pesan berhasil dicek. Contact form siap dipakai untuk demo presentasi ✨";
  result.classList.add("success");
  return false;
}

function changeMood() {
  const moods = [
    "radial-gradient(circle at top left, rgba(176,132,255,.18), transparent 28%), radial-gradient(circle at right 20%, rgba(242,183,255,.12), transparent 20%), linear-gradient(180deg, #0c0918 0%, #15102a 50%, #0c0918 100%)",
    "radial-gradient(circle at top left, rgba(255,177,241,.18), transparent 28%), radial-gradient(circle at right 20%, rgba(193,170,255,.14), transparent 20%), linear-gradient(180deg, #12081d 0%, #24123a 50%, #12081d 100%)",
    "radial-gradient(circle at top left, rgba(162,129,255,.22), transparent 28%), radial-gradient(circle at right 20%, rgba(123,98,255,.12), transparent 20%), linear-gradient(180deg, #090713 0%, #181336 50%, #090713 100%)"
  ];
  const next = moods[Math.floor(Math.random() * moods.length)];
  document.body.style.backgroundImage = next;
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const trigger = window.innerHeight * 0.88;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add("active");
  });
}

function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-filter="${type}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  cards.forEach(card => {
    if (type === "all" || card.dataset.type === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function applyPalette(bg) {
  document.body.style.backgroundImage = bg;
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);