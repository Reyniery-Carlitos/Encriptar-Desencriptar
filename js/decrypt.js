const vowels = ['a', 'e', 'i', 'o', 'u'];

const codeDecrypt = {
     ai: 'a',
     enter: 'e',
     imet: 'i',
     ober: 'o',
     ufat: 'u'
};

document.getElementById('btn-decrypt').addEventListener('click', () => {
     let result = '';
     let content = (document.getElementById('idTextarea').value).trim();
     const decrypt = (content) => {
          for (let position in content) {
               let letter = content[position];
               if (vowels.includes(letter)) {
                    let subContent = content.slice(position, codeEncrypt[letter].length + parseInt(position));
                    if (codeDecrypt[subContent]) {
                         result += codeDecrypt[subContent];
                         decrypt(content.slice(codeEncrypt[letter].length + parseInt(position)));
                         break;
                    } else {
                         result += content[position];
                    }
               } else {
                    result += content[position];
               }
          }
          document.getElementById('sidebar-container__text').textContent = result;
     };

     decrypt(content);
});