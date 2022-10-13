const link = document.querySelector('a');
link.textContent = '';
link.href = '';
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
//Node.appendChild():
sect.appendChild(para);
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara);
sect.removeChild(linkPara);
linkPara.remove();
linkPara.parentNode.removeChild(linkPara);