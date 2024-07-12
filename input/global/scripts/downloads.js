document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("options").style.display = "flex";
	document.getElementById("other").style.display = "block";

	const repoOwner = "mutant-remix";
	const repoName = "mutant-remix";

	async function fetchLatestRelease() {
		try {
			const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
			if (!response.ok) {
				throw new Error(`An error occurred: ${response.statusText}`);
			}
			const data = await response.json();
			const latestVersion = data.tag_name;
			return latestVersion;
		} catch (error) {
			console.error("Error fetching latest release:", error);
		}
	}

	async function updateButtonsWithLatestRelease() {
		try {
			const latestVersion = await fetchLatestRelease();
			if (!latestVersion) return;
			const links = document.querySelectorAll('a[href*="https://github.com/mutant-remix/mutant-remix/releases/download/"]');
			links.forEach((link) => {
				const oldHref = link.getAttribute("href");
				const newHref = oldHref.replace(/v00/g, latestVersion);
				link.setAttribute("href", newHref);
			});
		} catch (error) {
			console.error("Error updating buttons with latest release:", error);
		}
	}

	updateButtonsWithLatestRelease();
});
