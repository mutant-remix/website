# Changelog

See the latest and greatest in blob technology.

<input type="search" id="blogsearch" onkeyup="search()" placeholder="Search releases">

<div id="blogposts">
  <div>

  Major Release
  ### [v54.0 - Revenge of the Blob](/changelog/v54_0)
  </div>
  <div>

  Major Release
  ### [v1.0 - Welcome](/changelog/v1_0)
  </div>
</div>


<script>
function search() {
  // Get the input and filter value
  var input = document.getElementById('blogsearch');
  var filter = input.value.trim().toUpperCase();

  // Get the list of blog posts
  var ul = document.getElementById("blogposts");
  var divs = ul.getElementsByTagName('div');

  // Loop through divs and hide or display based on the search query
  for (var i = 0; i < divs.length; i++) {
    var a = divs[i].querySelector("a");
    var txtValue = a.textContent || a.innerText;
    var shouldDisplay = txtValue.trim().toUpperCase().includes(filter);

    divs[i].style.display = shouldDisplay ? "" : "none";
  }
}
</script>
