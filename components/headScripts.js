const Scripts = () => {
    return (
        <script dangerouslySetInnerHTML={{__html: `<script type="text/javascript">
          (function(w, d, x, id){
            s=d.createElement('script');
            s.src='https://dend6g4sigg57.cloudfront.net/amazon-connect-chat-interface-client.js';
            s.async=1;
            s.id=id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
          })(window, document, 'amazon_connect', 'cdf3c238-1833-4125-9eb2-5737d24503c6');
          amazon_connect('styles', { openChat: { color: 'black', backgroundColor: '#fa5b0f'}, closeChat: { color: 'black', backgroundColor: '#fa5b0f'} });
          amazon_connect('snippetId', 'QVFJREFIZ25JVzc0R0xQTVpWSlI0RjdyVlBselRRYnQzeW5TZEVnWGFmQnNNZ0lXbmdIcGsweDgzSWZ6cnl0S2h4aFQyaldJQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNbUMwc1FHS01KY0grVWJuREFnRVFnQ3NFOWdMcGpWSHZZS01ZZWJVbWR6SnptMWFYdzJFSlRXN1h4TFdkUE9EUzdGenF2M3FYSlFRUXFnQTk6OmNIRWg0ZzZPUkZVcmZ4bGNiYldnaGQvQnlUY0h4VlNZa0V6ZEgya0lFbkp3NnZidzR1Q1hyOHF6TE8vMzNvZEovUjlRQ3dleXVTZVNiM2RyREVUYUtEazFWNlV1QU1rYVhtbGdvZU5MUDRpYnJSbzJLTkVOYjhoZllIMGtTU2JqdUZjNzIrMDlDeFpWVys5WUpvTVIyWWQ3S1JzN3ZoOD0=');
        </script>`
        }} />
    )
}

export default Scripts;
