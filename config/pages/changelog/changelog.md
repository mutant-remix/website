# Changelog

See the latest and greatest in blob technology.

<input type="search" id="blogsearch" onkeyup="search()" placeholder="Search posts">

<div id="blogposts">
  <div>

  Major Release
  ### [First Log](/blog/Log)
  </div>
  <div>


<script>
function search() {
  // Declare variables
  var input, filter, div, a, i, txtValue;
  input = document.getElementById('blogsearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("blogposts");
  div = ul.getElementsByTagName('div');

  // Loop through all divst items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    a = div[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
</script>
