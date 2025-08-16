const payload = location.hash.slice(1);

const after_dom = callback => {
    window.addEventListener("DOMContentLoaded", () => {
        callback();
    });
};

const render = markdown => {
  return DOMPurify.sanitize( marked.parse( markdown ) );
}

// NOTE: Always use relative path while "obtain-ing".
const obtain = async (url, is_local=false) => {
  if (!is_local) { url = `/blog/${url}`; } // DUE TO DEZ JA4Z: NOTE
  const resp = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {},
      redirect: 'follow',
      referrerPolicy: 'unsafe-url',
  }); return await resp.text();
};

const routing = async () => {
    if (payload) {
      resp = await obtain(`contents/${payload}.md`);
    } else {
      resp = await obtain('/table_of_contents.md');
    }; document.querySelector('#content').innerHTML = render(resp);
}; window.onhashchange = () => {location.reload()}; after_dom(routing);
