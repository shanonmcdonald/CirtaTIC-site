const Scripts = () => {
    return (
        <script dangerouslySetInnerHTML={{__html: `(function(w, d, x, id){
            s=d.createElement('script');
            s.src='https://dend6g4sigg57.cloudfront.net/amazon-connect-chat-interface-client.js';
            s.async=1;
            s.id=id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
            })(window, document, 'amazon_connect', 'cdf3c238-1833-4125-9eb2-5737d24503c6');
            amazon_connect('styles', { openChat: { color: 'black', backgroundColor: '#fa5b0f'}, closeChat: { color: 'black', backgroundColor: '#fa5b0f'} });
            amazon_connect('snippetId', 'QVFJREFIZ2...');`
        }} />
    )
}

export default Scripts;
