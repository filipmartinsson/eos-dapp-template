ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'',
    host:'127.0.0.1',
    port:8888,
    protocol:'http'
});

const contractConfig = {
  code: "",
  scope: "",
  dogTableName: "",
  balancesTableName: "",
  symbol: ""
}

var eos;
var rpc;
var account;

ScatterJS.connect('TestDapp', {network}).then(connected => {

});

$(document).ready(function() {

});
