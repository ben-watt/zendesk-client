const urlParser = (function() {

    interface dictionary { key: string , value: string}

    function getQueryParams(): Array<dictionary>  {
        return location.search
                .substring(1)
                .split('&')
                .map((x) => {
                        return { key: x.split('=')[0], value: x.split('=')[1] }
                });
    }

    return {
        getQueryParams: getQueryParams,
    }

})();

export default urlParser;