import data from '../latest.json' assert { type: 'json' };

console.log(data.version.windows);

const windowsAnchorTag = document.getElementById("windows-download-link");
const linuxAnchorTag = document.getElementById("linux-download-link");
const macAnchorTag = document.getElementById("mac-download-link");

windowsAnchorTag.href = `https://github.com/Realitylion/vtop-cli-website/buildFiles/v${data.version.windows}/raw/main/vtop-cli_windows_v${data.version.windows}.exe`;
linuxAnchorTag.href = `https://github.com/Realitylion/vtop-cli-website/buildFiles/v${data.version.linux}/raw/main/vtop-cli_linux_v${data.version.linux}.exe`;
macAnchorTag.href = `https://github.com/Realitylion/vtop-cli-website/buildFiles/v${data.version.mac}/raw/main/vtop-cli_mac_v${data.version.mac}.exe`;

windowsAnchorTag.innerText = `v${data.version.windows}`;
linuxAnchorTag.innerText = `v${data.version.linux}`;
macAnchorTag.innerText = `v${data.version.mac}`;