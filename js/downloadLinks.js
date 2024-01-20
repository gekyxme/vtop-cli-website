fetch("../latest.json").then(response => response.json()).then(data => { 
    console.log(data.version.windows);

    const windowsAnchorTag = document.getElementById("windows-download-link");
    const linuxAnchorTag = document.getElementById("linux-download-link");
    const macAnchorTag = document.getElementById("mac-download-link");
    
    // The link to the download is a direct link to the file on the deployed repository
    // TODO: Change link to "`https://github.com/ACM-VIT/<vtop-cli-website>/..." once the repository is made under ACM-VIT organization
    
    windowsAnchorTag.href = `https://github.com/Realitylion/vtop-cli-website/raw/main/buildFiles/v${data.version.windows}/vtop-cli_windows_v${data.version.windows}.exe`;
    linuxAnchorTag.href = `https://github.com/Realitylion/vtop-cli-website/raw/main/buildFiles/v${data.version.linux}/vtop-cli_linux_v${data.version.linux}.exe`;
    macAnchorTag.href = `https://github.com/Realitylion/vtop-cli-website/raw/main/buildFiles/v${data.version.mac}/vtop-cli_mac_v${data.version.mac}.exe`;
    
    windowsAnchorTag.innerText = `v${data.version.windows}`;
    linuxAnchorTag.innerText = `v${data.version.linux}`;
    macAnchorTag.innerText = `v${data.version.mac}`;
});


