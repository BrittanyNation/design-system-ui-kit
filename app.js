// Click a color swatch to copy its hex code, with a small confirmation note.
(function () {
  var note = document.getElementById('copy-note');
  document.querySelectorAll('.swatch').forEach(function (swatch) {
    swatch.addEventListener('click', function () {
      var hex = swatch.getAttribute('data-hex');
      function show() { if (note) note.textContent = 'Copied ' + hex.toUpperCase() + ' to clipboard.'; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(hex).then(show, show);
      } else { show(); }
    });
  });
})();

// Demo form: live email validation + a real submit outcome.
// The email field starts in its documented error state; typing a complete
// address clears it, and submitting with valid fields shows the success alert.
(function () {
  var form = document.querySelector('.form-grid');
  if (!form) return;
  var email = document.getElementById('f-email');
  var emailField = email.closest('.field');
  var errorMsg = document.getElementById('email-error');
  var name = document.getElementById('f-name');
  var success = document.getElementById('form-success');
  function emailValid() { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()); }
  function paintEmail() {
    var bad = !emailValid();
    emailField.classList.toggle('field-error', bad);
    email.setAttribute('aria-invalid', String(bad));
    if (errorMsg) errorMsg.hidden = !bad;
    return !bad;
  }
  email.addEventListener('input', paintEmail);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = paintEmail();
    if (!name.value.trim()) { name.setAttribute('aria-invalid', 'true'); if (ok) name.focus(); ok = false; }
    else name.removeAttribute('aria-invalid');
    if (!ok) return;
    if (success) { success.hidden = false; success.scrollIntoView({ block: 'center' }); }
  });

  // Specimen buttons (Buttons/Cards sections) report what they are when clicked.
  var note = document.getElementById('demo-note');
  document.querySelectorAll('.btn-row .btn, .card .btn').forEach(function (btn) {
    if (btn.disabled) return;
    btn.addEventListener('click', function () {
      if (note) note.textContent = '\u201C' + btn.textContent.trim() + '\u201D is a specimen button \u2014 in this style guide it demonstrates a button state rather than performing an action.';
    });
  });
})();
