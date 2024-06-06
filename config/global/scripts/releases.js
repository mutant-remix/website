document.addEventListener("DOMContentLoaded", function () {
	const repoOwner = "mutant-remix";
	const repoName = "mutant-remix";

	const releasesContainer = document.getElementById("releases");

	async function fetchReleases() {
		try {
			const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`);
			if (!response.ok) {
				throw new Error(`An error occurred: ${response.statusText}`);
			}
			const releases = await response.json();
			displayReleases(releases);
		} catch (error) {
			console.error("Error fetching releases:", error);
			releasesContainer.innerHTML = `<p>Error fetching releases: ${error.message}</p>`;
		}
	}

	function displayReleases(releases) {
		releasesContainer.innerHTML = "";
		releases.forEach((release) => {
			const changelog = extractChangelog(release.body);
			const releaseElement = document.createElement("div");
			releaseElement.classList.add("release");
			releaseElement.innerHTML = `
                <a href="${release.html_url}">
                    <h2>${release.name}</h2>
                    <p>${formatDate(new Date(release.published_at))}</p>
                    <div>${changelog}</div>
                </a>
            `;
			releasesContainer.appendChild(releaseElement);
		});
	}

	function extractChangelog(body) {
		const changelogIndex = body.indexOf("## Changelog");
		if (changelogIndex === -1) return "No changelog available.";
		const changelogContent = body.slice(changelogIndex + "## Changelog".length);
		const nextHeadingIndex = changelogContent.search(/## [^\n]+\n/);
		return nextHeadingIndex === -1 ? changelogContent.trim() : changelogContent.slice(0, nextHeadingIndex).trim();
	}

	function formatDate(date) {
		const options = { year: "numeric", month: "long", day: "numeric" };
		const formattedDate = date.toLocaleDateString("en-US", options);
		const day = date.getDate();
		let daySuffix;
		if (day > 3 && day < 21) {
			daySuffix = "th";
		} else {
			switch (day % 10) {
				case 1:
					daySuffix = "st";
					break;
				case 2:
					daySuffix = "nd";
					break;
				case 3:
					daySuffix = "rd";
					break;
				default:
					daySuffix = "th";
			}
		}
		return formattedDate.replace(/\d+/, `${day}${daySuffix}`);
	}

	fetchReleases();
});
