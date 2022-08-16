const codeEncrypt = {
     a: 'ai',
     e: 'enter',
     i: 'imet',
     o: 'ober',
     u: 'ufat'
};

document.getElementById('btn-encrypt').addEventListener('click', () => {
     let result = '';
     let content = (document.getElementById('idTextarea').value).trim();
     const encrypt = (content) => {
          for (let letter of content) {
               if (codeEncrypt[letter]) {
                    result += codeEncrypt[letter];
               } else {
                    result += letter;
               };
          };
          document.getElementById('sidebar-container__text').textContent = result;
     };

     encrypt(content);
});

