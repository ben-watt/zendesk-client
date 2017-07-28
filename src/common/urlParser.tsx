import { dictionary } from './types';

declare global {
    interface String {
        log(this: string):string
    }
}

const urlParser = (function() {

    String.prototype.log = function() {
        console.log(this);
        return this;
    }

    function getQuery(): Array<dictionary> {
        if(location.search !== ""){
            return getQueryFromSearch()
        }
        return getQueryFromHash()
    }

    function getQueryFromHash(): Array<dictionary> {
        const str = location.hash.substr(1).split('#')
        const args = str.map(x => x.split('&'));
        return stringArrToDic(args[0]);
    }

    function getQueryFromSearch(): Array<dictionary>  {
        const str = location.search.substring(1).split('&');
        return stringArrToDic(str);
                
    }

    function stringArrToDic(str: string[]): Array<dictionary> {
        return str.map((x: string) => {
                        return { key: x.split('=')[0], value: x.split('=')[1] }
                });
    }   

    return {
        getQuery: getQuery,
    }

})();

export default urlParser;