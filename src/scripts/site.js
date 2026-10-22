// Bright&dizain — client-side interactions (modal, parallax, reveal, contact form)

function $(sel) {
  return document.querySelector(sel);
}
function $$(sel) {
  return Array.from(document.querySelectorAll(sel));
}

/* ---------- modal ---------- */
const hamburger = $("#btn-hamburger");
const modal = $("#the-modal");
const modalWrap = $("#modal-wrap");
const modalMenu = $("#modal-menu");
const modalImage = $("#modal-image");
const modalComplete = $("#modal-complete");

function showModal(type) {
  if (!modal) return;
  modal.style.display = "block";
  if (hamburger) hamburger.classList.add("is-active");
  const contents = { menu: modalMenu, image: modalImage, complete: modalComplete };
  for (const [key, el] of Object.entries(contents)) {
    if (el) el.style.display = key === type ? "" : "none";
  }
}

function hideModal() {
  if (modal) modal.style.display = "none";
  if (hamburger) hamburger.classList.remove("is-active");
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    if (modal && modal.style.display === "block") hideModal();
    else showModal("menu");
  });
}
if (modalWrap) modalWrap.addEventListener("click", hideModal);

/* ---------- portfolio image modal ---------- */
$$(".image[data-lrg]").forEach((img) => {
  img.addEventListener("click", () => {
    const lrg = img.getAttribute("data-lrg") || "";
    if (modalImage) modalImage.src = lrg;
    showModal("image");
  });
});

/* ---------- reveal on scroll (index / profile only — matches original) ---------- */
function setIntersectionObserver(className, options, callback) {
  const targets = $$(className);
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) callback(entry);
  }, options);
  targets.forEach((target) => observer.observe(target));
}
if (document.body.dataset.reveal === "true") {
  const options = { threshold: 1.0 };
  const clientHeight = document.documentElement.clientHeight;
  const callBack = (entry) => {
    const rect = entry.target.getBoundingClientRect();
    if (clientHeight > rect.top) entry.target.classList.add("on");
  };
  setIntersectionObserver(".appear-up", options, callBack);
  setIntersectionObserver(".appear", options, callBack);
}

/* ---------- parallax (index) ---------- */
(function initParallax() {
  const els = $$(".jsc-parallax");
  if (els.length < 2) return;
  const $photo = els[0];
  const $web = els[1];
  const isPC = window.innerWidth > 767;
  const adaptHeight = isPC ? 130 : 0;

  // 遅延ロード: 画面に近づいたら背景画像を読み込む
  const bgObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        if (el.dataset.bg && !el.style.backgroundImage) {
          el.style.backgroundImage = `url("${el.dataset.bg}")`;
        }
        bgObserver.unobserve(el);
      }
    },
    { rootMargin: "300px" },
  );
  els.forEach((el) => bgObserver.observe(el));

  window.addEventListener("scroll", () => {
    $photo.style.backgroundPositionY = `${$photo.getBoundingClientRect().top / 3 - adaptHeight}px`;
    $web.style.backgroundPositionY = `${$web.getBoundingClientRect().top / 3 - adaptHeight}px`;
  });
})();

/* ---------- top arrow smooth scroll (index) ---------- */
(function initArrow() {
  const arrow = $(".arrow");
  if (!arrow) return;
  arrow.addEventListener("click", () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  });
})();

/* ---------- contact form ---------- */
(function initContact() {
  const company = $("#contact-company");
  const name = $("#contact-name");
  const email = $("#contact-email");
  const tel = $("#contact-tel");
  const message = $("#contact-message");
  const submitBtn = $("#contact-submit");
  const errorLabel = $("#contact-error");

  if (!company || !name || !email || !tel || !message) return;

  const emailRegex =
    /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  const inputs = { company, name, email, tel, message };
  const validators = {
    company: (v) => v.length < 4,
    name: (v) => v.length < 4,
    email: (v) => !emailRegex.test(v),
    tel: (v) => v.length < 8 || isNaN(Number(v)),
    message: (v) => v.length < 10,
  };

  function updateValidity() {
    let invalid = false;
    for (const key of Object.keys(inputs)) {
      const el = inputs[key];
      const isErr = validators[key](el.value);
      if (isErr) invalid = true;
      el.classList.toggle("is-error", isErr);
    }
    if (submitBtn) {
      submitBtn.disabled = invalid;
      submitBtn.classList.toggle("disable", invalid);
    }
  }

  for (const el of Object.values(inputs)) {
    el.addEventListener("input", updateValidity);
  }
  updateValidity();

  if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
      if (submitBtn.disabled) return;
      const payload = {};
      for (const key of Object.keys(inputs)) payload[key] = inputs[key].value;

      try {
        const res = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("bad status " + res.status);
        for (const el of Object.values(inputs)) el.value = "";
        if (errorLabel) errorLabel.style.display = "none";
        updateValidity();
        showModal("complete");
      } catch {
        if (errorLabel) errorLabel.style.display = "";
      }
    });
  }
})();

/* ---------- service worker registration ---------- */
if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
