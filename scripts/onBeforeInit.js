var ENDPOINT = "environment.endpoint.enabled";

var max = 10,
    cloudlets = 6,
    min = 2,
    resp, name, value, ssl, endpoint_markup = "",
    q = jelastic.billing.account.GetQuotas(ENDPOINT).array || [];

for (var i = 0, n = q.length; i < n; i++) {
    name = q[i].quota.name;
    value = q[i].value;
    
    if (name == ENDPOINT) {
        endpoint = !! value;
        if (endpoint == false) {
            endpoint_markup = "Endpoints functionality is not available for user. Please contact support.";
        } 
        continue;
    }
}

resp = { result: 0, settings: {fields: []} };

if (endpoint_markup){
    resp.settings.fields.push(
        {"type": "displayfield", "cls": "warning", "height": 30, "hideLabel": true, "markup": endpoint_markup}
    )
}

return resp;
