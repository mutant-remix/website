# Demo

Try before you buy - or rather use. These blobby guys are free after all.

<table>
  <tbody id="data">
    <!-- Data will be put in here-->
  </tbody>
</table>

<script src="tarball.js"></script>
<script>
  const fetchSampleBlob = () =>
    fetch("https://cors-anywhere.herokuapp.com/https://github.com/mutant-remix/mutant-remix/releases/download/v54/mtnt_v54_short_svg.tar.gz", { headers: { "X-Requested-With": "https://github.com" } });

  const fetchStreamToDecompressionStream = (response) =>
    response.body.pipeThrough(new DecompressionStream("gzip"));

  const decompressionStreamToBlob = (decompressedStream) => new Response(decompressedStream).blob();

  const blobToDir = (blob) => new tarball.TarReader().readFile(blob);

  const renderDataInList = (data) => {
    const tbody = document.getElementById('data');

    data.forEach(item => {
      if (item.type === 'directory') {
        // If it's a directory item, create a heading
        const heading = document.createElement('h2');
        heading.textContent = item.name;
        tbody.appendChild(heading);
      } else {
        // If it's a file item, create a list item and extract the file name
        const listItem = document.createElement('li');
        const fileName = item.name.split('/').pop();
        listItem.textContent = fileName;
        tbody.appendChild(listItem);
      }
    });
  };

  fetchSampleBlob()
    .then(fetchStreamToDecompressionStream)
    .then(decompressionStreamToBlob)
    .then(blobToDir)
     .then(data => {
    console.log("Data received:", data);
    renderDataInList(data);
  })
    .catch(error => console.error(error));
</script>

