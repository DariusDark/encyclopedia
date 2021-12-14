export function keygenerator() {
    var key = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < 5; i++)
      key += possible.charAt(Math.floor(Math.random() * Math.floor(possible.length / 2)));
  
    return key;
  }