fetch("../latest.json").then(response => response.json()).then(data => { 
    console.log(data.version.windows);

    const windowsAnchorTag = document.getElementById("windows-download-link");
    const linuxAnchorTag = document.getElementById("linux-download-link");
    const macAnchorTag = document.getElementById("mac-download-link");
    
    // The link to the download is a direct link to the file on the deployed repository
    // TODO: Change link to "`https://github.com/ACM-VIT/<cli-top-website>/..." once the repository is made under ACM-VIT organization
    
    windowsAnchorTag.href = `https://github.com/gekyxme/cli-top-website/raw/main/buildFiles/v${data.version.windows}/cli-top-windows_v${data.version.windows}.zip`;
    linuxAnchorTag.href = `https://github.com/gekyxme/cli-top-website/raw/main/buildFiles/v${data.version.linux}/cli-top-linux_v${data.version.linux}.zip`;
    macAnchorTag.href = `https://github.com/gekyxme/cli-top-website/raw/main/buildFiles/v${data.version.mac}/cli-top-mac_v${data.version.mac}.zip`;
    
    windowsAnchorTag.innerText = `v${data.version.windows}`;
    linuxAnchorTag.innerText = `v${data.version.linux}`;
    macAnchorTag.innerText = `v${data.version.mac}`;
});


