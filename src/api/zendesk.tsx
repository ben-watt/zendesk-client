
var zendeskApi = (function zendeskAPI() {

    const secret_code = "982952875a211a217ea100e3521598348e9d4f510b349c2105a2cc20df380ea5";
    const scope = "&scope=read write";
    const zendesk_sub_domain = "https://slicedbread.zendesk.com";
    const oauth_endpoint = "/oauth/authorizations/new?";
    const client_id = "client_id=custom_app_integration";
    const response_type = "&response_type=code";
    const authUrl = zendesk_sub_domain + oauth_endpoint 
            + client_id + response_type + scope;
    // let headers = new Headers()
    // headers.append('Access-Control-Allow-Origin', 'zendesk.com' );


    const authUser = function(){
        window.location.assign(authUrl);
        // res.then(res => window.location.assign(res.url))
        // .catch((r) => console.log(r));    
    }

    return {
        authUser: authUser
    }

})();

export default zendeskApi;
