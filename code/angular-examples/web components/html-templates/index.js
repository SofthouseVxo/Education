window.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    var template = document.getElementById('my-template');

    var wrapper = document.getElementById("wrapper");
    var clone = document.importNode(template.content, true);

    wrapper.appendChild(clone);
  }, 2000);
    
});