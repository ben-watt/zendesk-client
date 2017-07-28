import axios from 'axios';

var zendeskApi = (function zendeskAPI() {

    const _redirectUrl = 'http://localhost:3003';
    const _secret_code = '982952875a211a217ea100e3521598348e9d4f510b349c2105a2cc20df380ea5';
    const _requested_scope = '&scope=read write';
    const _zendesk_sub_domain = 'https://slicedbread.zendesk.com';
    const _oauth_endpoint = '/oauth/authorizations/new?';
    const _oauth_tokens = '/oauth/tokens';
    const _client_id = 'client_id=custom_app_integration';
    const _response_type = '&response_type=token';
    const _redirectToAuthUrl = _zendesk_sub_domain + _oauth_endpoint 
            + _client_id + _response_type + _requested_scope;
    const _requestAccessCodeUrl = _zendesk_sub_domain + _oauth_tokens;
    let _access_token = '';
    let _token_type = '';
    let _scope = '';



    function redirectToAuth(){
        return new Promise(() => window.location.assign(_redirectToAuthUrl));
    }

    function assignAccessToken(response :any){
        _access_token = response.data["access_token"];
        _scope = response.data["scope"];
        _token_type = response.data["token_type"];
    }
    
    function requestAccessCode(code :string){
        const payload = {
            grant_type: 'authorization_code',
            code: code,
            client_id: _client_id,
            client_secret: _secret_code,
            redirect_url: _redirectUrl,
            scope: 'read',
        }
        var data = new FormData().append("json", JSON.stringify(payload));

        const request:any = {
            method: 'POST',
            body: data
        }

        fetch(_requestAccessCodeUrl, request)
            .then(value => assignAccessToken(value))    
            .catch((reason) => console.log(reason));

    }

    return {
        redirectToAuth: redirectToAuth,
        requestAccessCode: requestAccessCode
    }

})();

export default zendeskApi;
