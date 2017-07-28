import axios from 'axios';
import { dictionary } from '../common/types';

var zendeskApi = (function zendeskAPI() {

    const _redirectUrl = 'http://localhost:3003';
    const _secret_code = '982952875a211a217ea100e3521598348e9d4f510b349c2105a2cc20df380ea5';
    const _requested_scope = '&scope=read write';
    const _apiVersion = '/api/v2';
    const _zendesk_sub_domain = 'https://slicedbread.zendesk.com';
    const _apiEndpoint = _zendesk_sub_domain + _apiVersion;
    const _oauth_endpoint = '/oauth/authorizations/new?';
    const _oauth_tokens = '/oauth/tokens';
    const _client_id = 'client_id=custom_app_integration';
    const _response_type = '&response_type=token';
    const _redirectToAuthUrl = _zendesk_sub_domain + _oauth_endpoint 
            + _client_id + _response_type + _requested_scope;
    const _requestAccessCodeUrl = _zendesk_sub_domain + _oauth_tokens;
    let _access_token = '';

    function setAccessToken(access_token: string){
        _access_token = access_token;
    }

    function redirectToAuth(){
        return new Promise(() => window.location.assign(_redirectToAuthUrl));
    }


    async function getTickets(){
        let response: any;
        try {
           response = await axios.get(_apiEndpoint + '/requests.json', { headers: { Authorization: 'Bearer ' + _access_token}});
        } catch(e){
            console.log(e);
        }
        return response;
    }

    return {
        redirectToAuth: redirectToAuth,
        getTickets: getTickets,
        setAccessToken: setAccessToken,
    }

})();

export default zendeskApi;
