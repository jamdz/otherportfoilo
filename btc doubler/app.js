function myData(blockApi) {

    return (blockApi.json());

};

function bitcoinTestNet(testApi) {

    let bitApi = testApi.data.addresses[0];
    let bit2Api = bitApi.address;
    let bit3Api = bitApi.pending_received_balance;

    showBalance.textContent = `${bit3Api}`
    showAddress.textContent = `${bit2Api}`

};


let addressBtn = document.querySelector(".get-blockapi");
let showAddress = document.querySelector(".blockapi");
let showBalance = document.querySelector(".bit-balance")

let blockIoApi = `https:/https://cors-anywhere.herokuapp.com/block.io/api/v2/get_balance/?api_key=ebaf-850a-99ac-0cea`;

addressBtn.addEventListener("click", function() {

    fetch(`https://cors-anywhere.herokuapp.com/block.io/api/v2/get_my_addresses/?api_key=ebaf-850a-99ac-0cea&&page=1`).then(myData).then(bitcoinTestNet);

});