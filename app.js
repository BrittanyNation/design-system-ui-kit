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
