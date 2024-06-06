document.addEventListener("DOMContentLoaded", function () {
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
			const buttons = document.querySelectorAll('button[onclick*="https://github.com/mutant-remix/mutant-remix/releases/download/"]');
			buttons.forEach((button) => {
				const oldOnclick = button.getAttribute("onclick");
				const newOnclick = oldOnclick.replace(/v00/g, latestVersion);
				button.setAttribute("onclick", newOnclick);
			});
		} catch (error) {
			console.error("Error updating buttons with latest release:", error);
		}
	}

	updateButtonsWithLatestRelease();
});
